import { Link } from "react-router-dom";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeaderDrawer from "./HeaderDrawer";
import Logo from "../Logo";
import "../../styles/header.css";

export default function Header({
  onDark = false,
  isSticky = false,
  isStickyWhite = false,
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      className={
        (isSticky && scrollPosition > 50) || isStickyWhite
          ? "active"
          : "not-active"
      }
      position={isSticky || isStickyWhite ? "fixed" : "relative"}
      paddingX={{ base: "2%", lg: "5%" }}
      paddingY="30px"
      bgColor={(isSticky || isStickyWhite) && "white"}
      w={isSticky || isStickyWhite ? "100vw" : "100vp"}
      zIndex="999"
    >
      <Flex w="100%" alignItems="center" justify="space-between">
        <Logo onDark={isSticky && scrollPosition <= 50 ? onDark : false} />
        <Flex
          justify="space-between"
          align="center"
          w="100%"
          display={{ base: "none", md: "flex" }}
        >
          <Flex justify="space-between" width={{ lg: "15rem", xl: "22rem" }}>
            <Link to="/le-projet">
              <Text
                color={
                  (isSticky && scrollPosition > 50) || isStickyWhite
                    ? "purple.dark"
                    : "white"
                }
                _hover={{
                  bgImage:
                    "linear-gradient(to right, #f2366f 33%, #a423ad 33%, #a7197f 66%, #4d1582 66%)",
                  bgSize: "306% 100%",
                  bgPosition: "100% 0",
                  transition: "2s background-position",
                  animation: "moveGradient2 4s alternate infinite",
                  bgClip: "text",
                }}
              >
                Notre Mission
              </Text>
            </Link>
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            gap={{ base: "8px", lg: "16px" }}
          >
            <Link to="/professionnel-handicap">
              <Button
                variant={
                  (isSticky && scrollPosition > 50) || isStickyWhite
                    ? "outline_Purple_Gradient"
                    : "outline_White_Gradient"
                }
              >
                Je suis un professionnel
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant={
                  (isSticky && scrollPosition > 50) || isStickyWhite
                    ? "outline_Purple"
                    : "outline_White_Purple"
                }
              >
                Connexion
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="solid_PrimaryColor"
                borderColor={
                  isSticky && scrollPosition <= 50 ? "white" : "pink.light"
                }
              >
                Inscription
              </Button>
            </Link>
          </Flex>
        </Flex>
        <HeaderDrawer />
      </Flex>
    </Flex>
  );
}

Header.propTypes = {
  isSticky: PropTypes.bool.isRequired,
  onDark: PropTypes.bool.isRequired,
};
