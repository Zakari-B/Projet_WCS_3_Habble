import {
  Box,
  Heading,
  Input,
  Flex,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import HomeImg from "../assets/habble-bkg-1024x684.jpg";

export default function LandingPage() {
  return (
    <Flex flexDir="column" alignItems="center">
      <Box
        w="100%"
        h="82.0021299254526vh"
        bgImage={HomeImg}
        objectFit="contain"
        bgRepeat="no-repeat"
        bgSize="cover"
        display="flex"
        alignItems="center"
        bgPos="center"
      >
        <Box
          w="25%"
          h="50%"
          p="1.938rem 2.5rem 2.625rem 2.25rem"
          ml="25rem"
          bgColor="white"
          borderRadius="21px"
          color="black"
          textAlign="left"
        >
          <Heading as="h1" font-size="calc(1.5rem + 1.5vw)" pb="1rem">
            Trouvez un <span>professionnel</span> du <span>handicap</span> ou du{" "}
            <span>soin</span>, de confiance près de chez vous
          </Heading>
          <InputGroup borderRadius="4px 0 0 4px" size="lg">
            <Input
              placeholder="Entrez votre code postal"
              _placeholder={{
                color: "gray.300",
                fontWeight: "semibold",
              }}
            />
            <InputRightElement
              borderRadius="0 4px 4px 0"
              w="15%"
              bgColor="#a7197f"
              _hover={{ bgColor: "#342c50" }}
              children={<SearchIcon color="white" />}
            />
            *
          </InputGroup>
        </Box>
      </Box>
      <Box w="52vw" border="2px solid black">
        <Heading as="h2" m="2rem 0 2rem 0" color="#342c50">
          Top services sur Habble
        </Heading>
      </Box>
    </Flex>
  );
}
