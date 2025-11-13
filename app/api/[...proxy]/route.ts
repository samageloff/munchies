import { getCacheEntry, getCacheKey, setCacheEntry } from "@/app/lib/cache";
import { NextRequest, NextResponse } from "next/server";

const EXTERNAL_API_BASE = process.env.API_URL;

async function proxyRequest(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const apiPath = request.nextUrl.pathname.replace("/api", "");
  const queryString = searchParams.toString();
  const targetUrl = `${EXTERNAL_API_BASE}${apiPath}${
    queryString ? `?${queryString}` : ""
  }`;

  // Only cache GET requests
  if (request.method === "GET") {
    const query = searchParams.get("query");
    const cacheKey = getCacheKey(`${apiPath}:${query || "default"}`);
    const cached = getCacheEntry(cacheKey);

    if (cached && cached.expiresAt > Date.now()) {
      console.log(`Cache hit for ${apiPath}`);
      return NextResponse.json({ source: "cache", data: cached.data });
    }
  }

  console.log(`Proxying ${request.method} ${apiPath} -> ${targetUrl}`);

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        ...Object.fromEntries(request.headers.entries()),
      },
      body: request.method !== "GET" ? await request.text() : undefined,
    });

    const data = await response.json();

    // Cache successful GET responses
    if (request.method === "GET" && response.ok) {
      const query = searchParams.get("query");
      const cacheKey = getCacheKey(`${apiPath}:${query || "default"}`);
      setCacheEntry(cacheKey, data);

      console.log(`Cached response for ${apiPath}`);

      return NextResponse.json({ source: "live", data });
    }

    return new NextResponse(JSON.stringify(data), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);

    return NextResponse.json(
      { error: "Proxy request failed" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return proxyRequest(request);
}
