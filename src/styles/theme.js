import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "../components/Button.theme";

export const myNewTheme = extendTheme({
  colors: {
    primary: "#86FF33",
    secondary: "#000000",
  },
  semanticTokens: {
    colors: {
      primary: {
        default: "gray.200",
        _dark: "white",
      },
    },
  },
  components: {
    ...buttonTheme,
  },
});

// export const newComps = extendTheme({
//   components: {
//     ShowMoreButton: {
//       baseStyle: ({ colorMode }) => ({
//         bg: colorMode === "dark" ? "white" : "green.500",
//       }),
//     },
//   },
// });
