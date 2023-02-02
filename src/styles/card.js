import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: "gray.100",
    boxShadow: "md",
    _dark: {
      backgroundColor: "gray.600",
    },
  },
});

export const cardTheme = defineMultiStyleConfig({ baseStyle });
