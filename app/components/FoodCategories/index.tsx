import { Grid, Tag } from "@chakra-ui/react";
import NextLink from "next/link";
import { Card } from "../ui/Card";

export async function FoodCategories({ slim }: { slim?: boolean }) {
  const foodCategories = await fetch(`${process.env.API_URL}/filter`);
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
}
