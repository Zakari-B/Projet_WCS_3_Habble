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
    gradient: {
      purplePink:
        "linear-gradient(90deg, rgba(103,63,192,1) 0%, rgba(212,51,150,1) 100%)",
    },
  },
  components: {
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
        gradient: () => ({
          bgImage:
            "linear-gradient(to right, #a7197f 0%, #4d1582 51%, #a7197f 100%)",
          bgSize: "200%",
          color: "white",
          borderRadius: "2px",
          height: "3rem",
          width: "100%",
          justifyContent: "flex-start",
          fontSize: "0.7rem",
        }),
      },
    },
    Text: {
      baseStyle: {
        fontSize: "md",
      },
      variants: {
        titleH1: () => ({
          fontSize: "2xl",
          fontWeight: "extrabold",
        }),
        titleH2: () => ({
          fontSize: "xl",
          fontWeight: "normal",
        }),
        titleH3: () => ({
          fontSize: "sm",
          fontWeight: "extrabold",
        }),
        corps: () => ({
          fontSize: "sm",
          fontWeight: "normal",
        }),
      },
    },
  },
});

export default theme;
