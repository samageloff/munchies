import { Grid, Heading, Stack } from "@chakra-ui/react";
import { Card } from "../ui/Card";

export async function RestaurantsList({ slug }: { slug?: string | null }) {
  const url = `${process.env.API_URL}/restaurants`;

  const restaurants = await fetch(url);
  const data = await restaurants.json();

  let restaurantData = data?.restaurants;

  restaurantData = slug
    ? restaurantData?.filter((restaurant: any) =>
        restaurant.filter_ids.includes(slug)
      )
    : restaurantData;

  return (
    <Stack gap={4}>
      <Heading fontSize="3xl">Restaurants</Heading>

      <Grid templateColumns="repeat(auto-fit, minmax(327px, 1fr))" gap={4}>
        {restaurantData?.map((restaurant: any) => (
          <Card key={restaurant.id}>{restaurant.name}</Card>
        ))}
      </Grid>
    </Stack>
  );
}
