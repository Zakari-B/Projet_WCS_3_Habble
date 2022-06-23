import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { BiLogOut, BiChat, BiUser } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import backendAPI from "../../services/backendAPI";

import HeaderDrawer from "./HeaderDrawer";
import Logo from "../Logo";
import "../../styles/header.css";

export default function Header({
  onDark = false,
  isSticky = false,
  isStickyWhite = false,
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSignUp, setIsSignUp] = useState(
    JSON.parse(localStorage.getItem("isUserLoggedIn"))
  );
  const navigate = useNavigate();

  const logout = () => {
    navigate("/logout");
  };

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      backendAPI
        .get("/api/auth/sessionControl")
        .then((res) => {
          if (res.data.sessionExpired === false) {
            setIsSignUp(true);
          }
        })
        .catch((err) => console.error(err));
    }
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
          {isSignUp === true ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="unstyled"
                color="purple.average"
                cursor="pointer"
                minW="0"
                _hover={{ color: "pink.light" }}
              >
                <Flex alignItems="center" gap="10px" fontWeight="500">
                  <Avatar
                    size="sm"
                    src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  />
                  Marie Serradori
                  <ChevronDownIcon />
                </Flex>
              </MenuButton>
              <MenuList marginLeft="150px">
                <MenuGroup title="Profil" color="purple.dark">
                  <MenuItem icon={<BiUser />}>MON PROFIL</MenuItem>
                  <MenuItem icon={<GrAnnounce />} color="purple.dark">
                    MES ANNONCES
                  </MenuItem>
                  <MenuItem icon={<BiChat />} color="purple.dark">
                    MES MESSAGES
                  </MenuItem>
                </MenuGroup>

                <MenuDivider />
                <MenuItem
                  onClick={logout}
                  color="pink.light"
                  icon={<BiLogOut />}
                >
                  DÉCONNEXION
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
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
          )}
        </Flex>
        <HeaderDrawer />
      </Flex>
    </Flex>
  );
}

Header.propTypes = {
  isSticky: PropTypes.bool.isRequired,
  isStickyWhite: PropTypes.bool.isRequired,
  onDark: PropTypes.bool.isRequired,
};
