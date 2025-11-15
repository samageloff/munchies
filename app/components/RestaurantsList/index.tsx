import { Grid, Heading, Stack, Tag, Text } from "@chakra-ui/react";
import { Card } from "../ui/Card";

export async function RestaurantsList({ slug }: { slug?: string | null }) {
  const url = `${process.env.API_URL}/restaurants`;

  try {
    const restaurants = await fetch(url);
    if (!restaurants.ok) {
      throw new Error(`Failed to fetch: ${restaurants.status}`);
    }
    const { data } = await restaurants.json();

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
          {!restaurantData || restaurantData.length === 0 ? (
            <Text>No restaurants found</Text>
          ) : (
            restaurantData?.map((restaurant: any) => (
              <Card key={restaurant.id} height={{ base: "100px", md: "200px" }}>
                <Tag.Root width="fit-content">
                  <Tag.Label>
                    {restaurant.delivery_time_minutes} minutes
                  </Tag.Label>
                </Tag.Root>
                {restaurant.name}{" "}
              </Card>
            ))
          )}
        </Grid>
      </Stack>
    );
  } catch (error) {
    // Only log in development, not during build
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to fetch restaurants:', error);
    }
    return (
      <Stack gap={4}>
        <Heading fontSize="3xl">Restaurants</Heading>
        <Text>Unable to load restaurants. Please try again later.</Text>
      </Stack>
    );
  }
}
