import { Card as ChakraCard } from "@chakra-ui/react";

export function Card({
  children,
  slim,
}: {
  children: React.ReactNode;
  slim?: boolean;
}) {
  return (
    <ChakraCard.Root>
      <ChakraCard.Body gap={slim ? "1" : "2"} p={slim ? "2" : "4"}>
        {children}
      </ChakraCard.Body>
    </ChakraCard.Root>
  );
}
