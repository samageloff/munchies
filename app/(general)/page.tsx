import { Box, Stack } from "@chakra-ui/react";
import { FoodCategories } from "../components/FoodCategories";
import { RestaurantsList } from "../components/RestaurantsList";

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
