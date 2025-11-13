import { Container, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "../components/Sidebar";
import { Provider } from "../components/ui/provider";
import "../globals.css";

export const metadata: Metadata = {
  title: "Munchies App",
  description: "A technical challenge for Eidra/Umain, by Sam Ageloff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ backgroundColor: "#f0f0f0" }}>
        <Provider>
          <Container
            maxW="8xl"
            height="100vh"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            pt={{ base: 4, md: 16 }}
          >
            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              width="100%"
              gap={8}
            >
              <Heading fontSize="4xl" fontWeight="bold" as="header">
                <Link href="/">
                  <Image
                    src="/brandmark.svg"
                    alt="Munchies"
                    width="273"
                    height="40"
                  />
                </Link>
              </Heading>
              <Grid
                templateColumns={{ base: "1fr", md: "240px 1fr" }}
                gap={4}
                width="100%"
              >
                <GridItem as="aside">
                  <Sidebar />
                </GridItem>
                <GridItem as="main">{children}</GridItem>
              </Grid>
            </Flex>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
