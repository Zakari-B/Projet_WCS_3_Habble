import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: { heading: `'Poppins', sans-serif`, body: `'Poppins', sans-serif` },
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
    gray: {
      light: "#A5A5A5",
      dark: "484848",
    },
    background: {
      gray: "#f9f9f9",
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
          fontWeight: "500",
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
          fontWeight: "500",
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
          fontWeight: "500",
          borderColor: "black",
        }),
        outline_Purple: () => ({
          bg: "transparent",
          border: "2px solid",
          fontWeight: "500",
          borderColor: "purple.average",
          color: "purple.average",
          _hover: { bgColor: "purple.average", color: "white" },
        }),
        outline_White_Gradient: () => ({
          bg: "transparent",
          border: "2px solid",
          borderColor: "white",
          color: "white",
          fontWeight: "500",
          bgSize: "300% 300%",
          _hover: {
            bgImage: "linear-gradient(60deg, #4d1582, #a7197f, #f25f61)",
            transition: "1.5s ease-out",
            animationDirection: "alternate",
            animation: "4s linear infinite ",
            bgPosition: "right center;",
          },
        }),
        outline_White_Purple: () => ({
          bg: "transparent",
          border: "2px solid",
          borderColor: "white",
          color: "white",
          fontWeight: "500",
          _hover: {
            bgColor: "purple.average",
          },
        }),
        outline_Purple_Gradient: () => ({
          bg: "transparent",
          border: "2px solid",
          borderColor: "purple.average",
          color: "purple.average",
          fontWeight: "500",
          bgSize: "300% 300%",
          transition: "0.5s ease-out",
          animation: "2s linear infinite ",

          _hover: {
            bgImage: "linear-gradient(60deg, #4d1582, #a7197f, #f25f61)",
            animationDirection: "alternate",
            bgPosition: "right center;",
            color: "white",
          },
        }),
      },
    },
  },
});

export default theme;
