import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    pink: {
      lighter: "#BE8DBE",
      light: "#A7197F",
      average: "#5B005C",
      dark: "#A7197F33",
    },
    purple: {
      light: "#5F3984",
      average: "#342C50",
      dark: "#150A33",
    },
  },
  components: {
    Divider: {
      baseStyle: {
        borderColor: "#dbdbdb",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid_PrimaryColor: () => ({
          bgColor: "pink.light",
          borderRadius: "4px",
          color: "white",
          border: "2px solid",
          borderColor: "pink.light",
          _hover: {
            backgroundColor: "white",
            color: "pink.light",
          },
        }),
        solid_SecondaryColor: () => ({
          bgColor: "purple.light",
          borderRadius: "4px",
          color: "white",
          border: "2px solid",
          borderColor: "purple.light",
          _hover: {
            backgroundColor: "white",
            color: "purple.light",
          },
        }),
        outline: () => ({
          bg: "transparent",
          border: "2px solid",
          borderColor: "black",
        }),
      },
    },
  },
});

export default theme;
