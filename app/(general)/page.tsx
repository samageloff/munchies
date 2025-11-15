import { Box, Stack } from "@chakra-ui/react";
import { FoodCategories } from "../components/FoodCategories";
import { RestaurantsList } from "../components/RestaurantsList";

// Force dynamic rendering so data is fetched at request time
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <Stack gap={8}>
      <Box display={{ base: "none", md: "block" }}>
        <FoodCategories />
      </Box>
      <RestaurantsList />
    </Stack>
  );
}
