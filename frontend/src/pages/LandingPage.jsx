import {
  Box,
  Heading,
  Input,
  Flex,
  Text,
  Image,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import HomeImg from "../assets/habble-bkg-1024x684.jpg";
import Chat from "../assets/chat.svg";

import LandingData from "../services/LandingData";

import theme from "../themes/theme";

export default function LandingPage() {
  return (
    <div>
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
          w="26.6%"
          h="70%"
          p="1.938rem 2.5rem 2.625rem 2.25rem"
          ml="25rem"
          bgColor="white"
          borderRadius="21px"
          color="black"
          textAlign="left"
        >
          <Heading as="h1" fontSize="calc(1.5rem + 1.5vw)" pb="1rem">
            Trouvez un{" "}
            {/* <span style={{ color: theme.gradient.purplePink }}> */}
            professionnel
            {/* </span>{" "} */}
            du <span>handicap</span> ou du <span>soin</span>, de confiance près
            de chez vous
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
      <Box w="55vw" mb="5rem" ml="auto" mr="auto" border="2px solid red">
        <Heading
          as="h2"
          m="2rem 0 2rem 0"
          color="#342c50"
          fontSize="calc(1.5rem + 1.5vw)"
        >
          Top services sur Habble
        </Heading>
        {LandingData.map((data) => (
          <Box key={data.id}>
            <Box
              maxW="25%"
              h="29.3vh"
              mb="1rem"
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
                // h="55%"
                // w="100%"
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
          </Box>
        ))}
      </Box>
      <Box w="55vw" mb="5rem" ml="auto" mr="auto" border="2px solid red">
        <Heading
          as="h2"
          m="2rem 0 2rem 0"
          color="#342c50"
          fontSize="calc(1.5rem + 1.5vw)"
        >
          Deux moyens de trouver un professionnel du handicap
        </Heading>
        <Flex justifyContent="space-around" wrap="wrap">
          <Box
            w="22.61vw"
            p="0.938rem"
            borderRadius="21px"
            color="black"
            lineHeight="1.5"
            _hover={{
              boxShadow: "0px 18px 37px rgb(212 50 151 / 20%)",
            }}
          >
            <Flex flexDir="column" alignItems="center">
              <Image
                src={Chat}
                pos="relative"
                w="5rem"
                // background="linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)"
              />
              <Heading as="h3" mt="2rem" fontSize="1.5rem">
                Déposez une annonce
              </Heading>
              <Text
                color="#656565"
                m="0 0 0.625rem"
                mt="2rem"
                mb="1rem"
                fontSize="md"
              >
                Inscrivez vous gratuitement à Habble et dîtes nous de quel
                services vous avez besoin et à quel moment. Recevez des
                propositions de professionnels, discutez avec eux des détails,
                choisissez la proposition la plus adaptée puis profitez !
              </Text>
            </Flex>
          </Box>
          <Box
            w="22.61vw"
            p="0.938rem"
            borderRadius="21px"
            color="black"
            _hover={{
              boxShadow: "0px 18px 37px rgb(212 50 151 / 20%)",
            }}
          >
            <Flex flexDir="column" alignItems="center">
              <Image
                src={Chat}
                pos="relative"
                w="5rem"
                // background="linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)"
              />
              <Heading as="h3" mt="2rem" fontSize="1.5rem">
                Contactez en direct
              </Heading>
              <Text
                color="#656565"
                m="0 0 0.625rem"
                mt="2rem"
                mb="1rem"
                fontSize="md"
              >
                Parcourez les profils des professionnels indépendants dans votre
                région. Ils ont tous été vérifiés pour votre tranquillité
                d'esprit. Affinez votre recherche avec les options de filtre et
                de tri : disponibilité, compétences et plus encore.
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Button>Trouver un professionnel du handicap</Button>
        </Flex>
      </Box>
    </div>
  );
}
