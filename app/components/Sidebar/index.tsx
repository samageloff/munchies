import { Heading, Stack } from "@chakra-ui/react";
import { FoodCategories } from "../FoodCategories";

export async function Sidebar() {
  return (
    <Stack backgroundColor="white" p={4} borderRadius="md">
      <Stack gap={2}>
        <Heading fontSize="2xl">Filter</Heading>
        <Heading fontSize="md" fontWeight="light">
          Food Category
        </Heading>
        <FoodCategories slim={true} />
      </Stack>
    </Stack>
  );
}
