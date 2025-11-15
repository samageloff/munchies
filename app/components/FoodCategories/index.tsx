import { Grid, Tag } from "@chakra-ui/react";
import NextLink from "next/link";
import { Card } from "../ui/Card";

export async function FoodCategories({ slim }: { slim?: boolean }) {
  try {
    const foodCategories = await fetch(`${process.env.API_URL}/filter`);
    if (!foodCategories.ok) {
      throw new Error(`Failed to fetch: ${foodCategories.status}`);
    }
    const { data } = await foodCategories.json();

    return (
      <Grid
        gap={slim ? "2" : "4"}
        templateColumns="repeat(auto-fit, minmax(160px, 1fr))"
      >
        {data?.filters?.map((filter: any) => (
          <NextLink href={`/${filter.id}`} key={filter.id}>
            {slim ? (
              <Tag.Root>
                <Tag.Label>{filter.name}</Tag.Label>
              </Tag.Root>
            ) : (
              <Card>{filter.name}</Card>
            )}
          </NextLink>
        ))}
      </Grid>
    );
  } catch (error) {
    // Only log in development, not during build
    if (process.env.NODE_ENV === "development") {
      console.error("Failed to fetch categories:", error);
    }
    return <div>Unable to load categories</div>;
  }
}
