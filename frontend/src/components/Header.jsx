import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Logo from "./Logo";
import "./header.css";

export default function Header({ isSticky = false }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <Flex
      className={`${isSticky ? "header" : "header-not-sticky"} ${
        scrollPosition > 50 ? "active" : "not-active"
      }`}
      paddingX="60px"
      paddingY="30px"
    >
      <Flex w="100vw" justify="flex-start" align="center">
        <Logo onDark />
        <Link to="/le-projet">
          <Text
            color="purple.dark"
            size="0.1em"
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
    </Flex>
  );
}

Header.propTypes = {
  isSticky: PropTypes.bool.isRequired,
};
