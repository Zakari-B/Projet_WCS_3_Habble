import { Link } from "react-router-dom";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Logo from "../Logo";
import "./header.css";

export default function Header({ onDark = false, isSticky = false }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      className={isSticky && scrollPosition <= 50 ? "not-active" : "active"}
      position={isSticky ? "fixed" : "relative"}
      paddingX="5%"
      transition="all 0.2s ease-in-out"
      paddingY="30px"
      bgColor={isSticky === false && "white"}
      w="100vw"
    >
      <Flex w="100%">
        <Logo onDark={isSticky && scrollPosition <= 50 ? onDark : ""} />
        <Flex justify="space-between" align="center" w="100%">
          <Link to="/le-projet">
            <Text
              color={isSticky && scrollPosition <= 50 ? "white" : "purple.dark"}
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
          <Flex justify="space-between" align="center" gap="16px">
            <Link to="/professionnel-handicap">
              <Button
                variant={
                  isSticky && scrollPosition <= 50
                    ? "outline_White_Gradient"
                    : "outline_Purple_Gradient"
                }
              >
                Je suis un professionnel
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant={
                  isSticky && scrollPosition <= 50
                    ? "outline_White_Purple"
                    : "outline_Purple"
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
      </Flex>
    </Flex>
  );
}

Header.propTypes = {
  isSticky: PropTypes.bool.isRequired,
  onDark: PropTypes.bool.isRequired,
};
