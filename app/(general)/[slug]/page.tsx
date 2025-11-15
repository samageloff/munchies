import { Box, Stack } from "@chakra-ui/react";
import { FoodCategories } from "../../components/FoodCategories";
import { RestaurantsList } from "../../components/RestaurantsList";

// Force dynamic rendering so data is fetched at request time
export const dynamic = 'force-dynamic';

export default async function FilterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Stack gap={8}>
      <Box display={{ base: "none", md: "block" }}>
        <FoodCategories />
      </Box>

      <RestaurantsList slug={slug} />
    </Stack>
  );
}
