import { Link } from "react-router-dom";
import { Flex, Text, HStack, Img } from "@chakra-ui/react";
import LogoImgWhite from "../assets/logo-habble-white.svg";

export default function Footer() {
  return (
    <Flex
      bgColor="purple.average"
      p="20px"
      justify="center"
      wrap={{ lg: "wrap", xl: "nowrap" }}
      pos="absolute"
      bottom="0"
      w="100%"
    >
      <Flex
        direction={{ lg: "row", base: "column" }}
        justify="center"
        w="970px"
        gap="10px"
        alignItems="center"
      >
        <Link to="/">
          <Img
            src={LogoImgWhite}
            w={{ lg: "150px", base: "90px" }}
            p={{ lg: "0 50px 0 0", base: "0px" }}
          />
        </Link>
        <HStack
          fontSize="sm"
          fontWeight="semibold"
          minW="fit-content"
          wrap="wrap"
          justify="center"
        >
          <Link to="/le-projet">
            <Text color="white">À propos</Text>
          </Link>
          <Text color="white">|</Text>
          <Link to="/contact">
            <Text color="white">Contact</Text>
          </Link>
          <Text color="white">|</Text>
          <Link to="/mentions-legales">
            <Text color="white">Mentions légales</Text>
          </Link>
          <Text color="white">|</Text>
          <Link to="/confidentialite">
            <Text color="white">Confidentialité</Text>
          </Link>
          <Text color="white">|</Text>
          <Link to="/contact">
            <Text color="white">Signaler un abus</Text>
          </Link>
          <Text color="gray.light">© 2021 Habble Tous droits réservés.</Text>
        </HStack>
      </Flex>
    </Flex>
  );
}
