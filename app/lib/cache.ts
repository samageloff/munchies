export type CacheEntry = {
  data: unknown;
  expiresAt: number;
};

// Ensure a singleton cache across module reloads in dev and across imports
declare global {
  // eslint-disable-next-line no-var
  var __restaurantsCache: Map<string, CacheEntry> | undefined;
}

export const cache: Map<string, CacheEntry> =
  globalThis.__restaurantsCache ?? (globalThis.__restaurantsCache = new Map());

export const TTL_MS = 1000 * 60 * 5; // 5 minutes

export const getCacheKey = (key?: string) =>
  key?.toLowerCase().trim()
    ? `restaurants:${key.toLowerCase().trim()}`
    : `restaurants:all-restaurants`;

export const getCacheEntry = (fullKey: string) => {
  return cache.get(fullKey);
};

export const setCacheEntry = (fullKey: string, data: unknown) =>
  cache.set(fullKey, { data, expiresAt: Date.now() + TTL_MS });
