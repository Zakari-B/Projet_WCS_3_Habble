import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  Image,
  MenuList,
  MenuGroup,
  Tag,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { BiLogOut, BiChat, BiUser } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import backendAPI from "../../services/backendAPI";
// import { getListforAnId } from "../../services/ProfileProUtils";
import HeaderDrawer from "./HeaderDrawer";
import Logo from "../Logo";
import "../../styles/header.css";

export default function Header({
  onDark = false,
  isSticky = false,
  isStickyWhite = false,
  employer,
  freelancer,
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSignUp, setIsSignUp] = useState(
    JSON.parse(localStorage.getItem("isUserLoggedIn"))
  );
  const [data, setData] = useState();

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
            setData(res);
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
      bgColor={((isSticky && scrollPosition > 50) || isStickyWhite) && "white"}
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
                  {data && data.data.userRole === "freelancer" && (
                    <Image
                      src={
                        freelancer.picture
                          ? `${import.meta.env.VITE_BACKEND_URL}/uploads/${
                              freelancer.picture
                            }`
                          : "https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
                      }
                      height="40px"
                      width="40px"
                      borderRadius="100%"
                      border="1px solid gray.200"
                    />
                  )}
                  {data && data.data.userRole === "employer" && (
                    <Image
                      src={
                        employer.picture
                          ? `${import.meta.env.VITE_BACKEND_URL}/uploads/${
                              employer.picture
                            }`
                          : "https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
                      }
                      height="40px"
                      width="40px"
                      borderRadius="100%"
                      border="1px solid gray.200"
                    />
                  )}
                  {data && `${data.data.firstname} ${data.data.lastname}`}
                  <ChevronDownIcon />
                </Flex>
              </MenuButton>
              <MenuList marginLeft="150px">
                <MenuGroup title="Profil" color="purple.dark">
                  <MenuItem
                    icon={<BiUser />}
                    onClick={() => {
                      if (data.data.userRole === "freelancer") {
                        navigate(`/profil/${data.data.roleId}`);
                      }
                      if (data.data.userRole === "employer") {
                        navigate(`/profil-employer/${data.data.roleId}`);
                      }
                    }}
                  >
                    MON PROFIL
                  </MenuItem>

                  <MenuItem
                    icon={<GrAnnounce />}
                    color="purple.dark"
                    onClick={() => {
                      if (data.data.userRole === "freelancer") {
                        navigate(`/profil/${data.data.roleId}/mes-annonces`);
                      }
                      if (data.data.userRole === "employer") {
                        navigate(
                          `/profil-employer/${data.data.roleId}/mes-annonces`
                        );
                      }
                    }}
                  >
                    MES ANNONCES
                  </MenuItem>
                  <MenuItem icon={<BiChat />} disabled>
                    <Flex gap="5px" alignItems="center">
                      <Text> MES MESSAGES</Text>
                      <Tag size="sm" colorScheme="purple">
                        SOON
                      </Tag>
                    </Flex>
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
