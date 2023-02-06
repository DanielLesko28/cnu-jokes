import React from "react";
import { useNavigate } from "react-router-dom";
import { Center, Heading, VStack, Button } from "@chakra-ui/react";

export function NotFoundPage() {
  const navigate = useNavigate();
  
  return (
    <Center h="calc(100vh - 200px)">
      <VStack>
        <Heading as="h1">🔍 Nenalezeno!</Heading>
        <Heading as="h2" size="md">
          Toto není stránka, kterou hledáš.
        </Heading>
        <Button onClick={() => navigate("/")} mt={4}>
          Přejít na domovskou stránku!
        </Button>
      </VStack>
    </Center>
  );
}

