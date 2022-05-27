import {
  Box,
  Heading,
  Input,
  Flex,
  Center,
  Text,
  Image,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import HomeImg from "../assets/habble-bkg-1024x684.jpg";

import LandingData from "../services/LandingData";

export default function LandingPage() {
  return (
    <>
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
          h="70%"
          p="1.938rem 2.5rem 2.625rem 2.25rem"
          ml="25rem"
          bgColor="white"
          borderRadius="21px"
          color="black"
          textAlign="left"
        >
          <Heading as="h1" fontSize="calc(1.5rem + 1.5vw)" pb="1rem">
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
      <Box w="55vw" mb="5rem" ml="auto" mr="auto">
        <Heading as="h2" m="2rem 0 2rem 0" color="#342c50">
          Top services sur Habble
        </Heading>
        {LandingData.map((data) => (
          <Center key={data.id}>
            <Box
              w="25%"
              h="29.3vh"
              borderRadius="0.625rem"
              boxShadow="0 1px 1px 0 rgb(69 43 65 / 14%), 0 2px 1px -1px rgb(69 43 65 / 12%), 0 1px 3px 0 rgb(69 43 65 / 20%)"
              _hover={{
                boxShadow:
                  "0 6px 10px 0 rgb(69 43 65 / 14%), 0 1px 18px 0 rgb(69 43 65 / 12%), 0 3px 5px -1px rgb(69 43 65 / 20%)",
              }}
            >
              <Image
                src={data.image}
                borderRadius="0.625rem 0.625rem 0 0"
                h="55%"
                w="100%"
              />
              <Text
                mt="1rem"
                fontSize="xl"
                fontWeight="bold"
                lineHeight="28px"
                color="#2F1D2C"
                textAlign="center"
              >
                {data.title}
              </Text>
            </Box>
          </Center>
        ))}
      </Box>
    </>
  );
}
