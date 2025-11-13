import { CardRootProps, Card as ChakraCard } from "@chakra-ui/react";

export interface CardProps extends CardRootProps {
  children: React.ReactNode;
  slim?: boolean;
  height?: Record<string, string | number>;
}

export function Card({ children, slim, height }: CardProps) {
  return (
    <ChakraCard.Root height={height}>
      <ChakraCard.Body gap={slim ? "1" : "2"} p={slim ? "2" : "4"}>
        {children}
      </ChakraCard.Body>
    </ChakraCard.Root>
  );
}
