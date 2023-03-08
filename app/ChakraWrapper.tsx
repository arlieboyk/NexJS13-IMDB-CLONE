"use client";
import Header from "./comopents/Header";
import { ChakraProvider } from "@chakra-ui/react";

export default function ChakraWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
}
