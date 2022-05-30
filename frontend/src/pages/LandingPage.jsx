import {
  Box,
  Heading,
  Input,
  Flex,
  Text,
  Image,
  Button,
  SimpleGrid,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import HomeImg from "../assets/habble-bkg-1024x684.jpg";
import Chat from "../assets/chat.svg";
import Care from "../assets/access-care-network.png";
import SoutienDomicile from "../assets/house.svg";
import Education from "../assets/education.svg";
import Sante from "../assets/care.svg";
import BienEtre from "../assets/psychology-head.svg";
import Transport from "../assets/wheelchair_transport.svg";

import LandingData from "../services/LandingData";

// import theme from "../themes/theme";

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
              // eslint-disable-next-line react/no-children-prop
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
      <Box w="55vw" mb="5rem" ml="auto" mr="auto">
        <Heading
          as="h2"
          m="2rem 0 2rem 0"
          color="#342c50"
          fontSize="calc(1.5rem + 1.5vw)"
        >
          Deux moyens de trouver un professionnel du handicap
        </Heading>
        <Flex justifyContent="space-around" flexWrap="wrap">
          <Box
            w="22.61vw"
            p="0.938rem"
            borderRadius="21px"
            color="black"
            lineHeight="1.5"
            _hover={{
              boxShadow: "0px 18px 37px rgb(212 50 151 / 20%)",
              color: "#a7197f",
            }}
          >
            <Flex flexDir="column" alignItems="center">
              <Image
                src={Chat}
                pos="relative"
                w="5rem"
                // background="linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)"
              />
              <Heading as="h4" mt="2rem" fontSize="1.5rem" fontWeight="500">
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
              color: "#a7197f",
            }}
          >
            <Flex flexDir="column" alignItems="center">
              <Image
                src={Chat}
                pos="relative"
                w="5rem"
                // background="linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)"
              />
              <Heading as="h4" mt="2rem" fontSize="1.5rem" fontWeight="500">
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
          <Button h="auto" p="0.625rem 1.375rem" borderReadius="4px">
            Trouver un professionnel du handicap
          </Button>
        </Flex>
      </Box>
      <Box w="55vw" mb="5rem" ml="auto" mr="auto">
        <Flex alignItems="center">
          <Box w="50%">
            <Heading
              as="h2"
              m="2rem 0 2rem 0"
              color="#342c50"
              fontSize="calc(1.25rem + 1.5vw)"
              lineHeight="1.1"
              fontWeight="500"
            >
              Accédez à un réseau de soin et de soutien spécialisé dans le
              handicap simple, sûr et disponible.
            </Heading>
            <Text
              color="#656565"
              m="0 0 0.625rem"
              mt="2rem"
              mb="1rem"
              fontSize="md"
            >
              Appréciez la tranquillité d'esprit pour vous et votre famille,
              grâce à notre réseau de professionnels et de structures
              spécialisés dans le handicap, les soins et le soutien quotidien.
            </Text>
          </Box>
          <Image src={Care} alt="Access a safe network" w="50%" />
        </Flex>
      </Box>
      <Box w="55vw" mb="5rem" ml="auto" mr="auto">
        <Flex>
          <Box w="33%" textAlign="center">
            <Heading
              as="h4"
              mt="2rem"
              fontSize="1.5rem"
              color="#342c50"
              fontWeight="500"
            >
              Contactez en direct
            </Heading>
            <Text
              color="#656565"
              m="0 0 0.625rem"
              mt="2rem"
              mb="1rem"
              fontSize="md"
            >
              Notre service est gratuit, pas d'abonnement coûteux ! Nos frais
              sont réduits au strict minimum pour respecter votre pouvoir
              d'achat.
            </Text>
          </Box>
          <Box w="33%" textAlign="center">
            <Heading
              as="h4"
              mt="2rem"
              fontSize="1.5rem"
              color="#342c50"
              fontWeight="500"
            >
              La sécurité : notre priorité
            </Heading>
            <Text
              color="#656565"
              m="0 0 0.625rem"
              mt="2rem"
              mb="1rem"
              fontSize="md"
            >
              Les professionnels indépendants et services spécialisés répondent
              à des critères stricts : références, qualifications,... Nous
              vérifions les agréments pour plus de sureté et sécurité. <br />
              <br />
              Un contact disponible en cas d'urgence.
            </Text>
          </Box>
          <Box w="33%" textAlign="center">
            <Heading
              as="h4"
              mt="2rem"
              fontSize="1.5rem"
              color="#342c50"
              fontWeight="500"
            >
              Assurance tous risques
            </Heading>
            <Text
              color="#656565"
              m="0 0 0.625rem"
              mt="2rem"
              mb="1rem"
              fontSize="md"
            >
              Tous les professionels indépendants sont couverts par une
              assurance tous risques pour garantir la tranquillité d'esprit pour
              vous et votre famille.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box w="55vw" mb="5rem" ml="auto" mr="auto">
        <Flex>
          <Box w="50%" mr="1.5rem">
            <SimpleGrid columns={3} spacingX={10} spacingY="6rem">
              <Box
                w="100%"
                h="80px"
                display="flex"
                flexDir="column"
                alignItems="center"
              >
                <Image src={SoutienDomicile} alt="Soutien à domicile" w="50%" />
                <Text
                  fontSize="0.8rem"
                  mt="1.875rem"
                  color="#150A33"
                  fontWeight="500"
                >
                  Soutien à domicile
                </Text>
              </Box>
              <Box
                w="100%"
                h="80px"
                display="flex"
                flexDir="column"
                alignItems="center"
              >
                <Image src={Sante} alt="Santé" w="50%" />
                <Text
                  textAlign="center"
                  fontSize="0.8rem"
                  mt="1.875rem"
                  color="#150A33"
                  fontWeight="500"
                >
                  Santé
                </Text>
              </Box>
              <Box
                w="100%"
                h="80px"
                display="flex"
                flexDir="column"
                alignItems="center"
              >
                <Image src={BienEtre} alt="Bien être" w="50%" />
                <Text
                  textAlign="center"
                  fontSize="0.8rem"
                  mt="1.875rem"
                  color="#150A33"
                  fontWeight="500"
                >
                  Bien être
                </Text>
              </Box>
              <Box
                w="100%"
                h="80px"
                display="flex"
                flexDir="column"
                alignItems="center"
              >
                <Image src={Education} alt="Enseignement, Education" w="50%" />
                <Text
                  textAlign="center"
                  fontSize="0.8rem"
                  mt="1.875rem"
                  color="#150A33"
                  fontWeight="500"
                >
                  Enseignement, Education
                </Text>
              </Box>
              <Box
                w="100%"
                h="80px"
                display="flex"
                flexDir="column"
                alignItems="center"
              >
                <Image
                  src={Transport}
                  alt="Transport, Aides techniques"
                  w="50%"
                />
                <Text
                  textAlign="center"
                  fontSize="0.8rem"
                  mt="1.875rem"
                  color="#150A33"
                  fontWeight="500"
                >
                  Transport, Aides techniques
                </Text>
              </Box>
              <Box
                w="100%"
                h="80px"
                display="flex"
                flexDir="column"
                alignItems="center"
              >
                <Image
                  src={SoutienDomicile}
                  alt="Administratif et Social"
                  w="50%"
                />
                <Text
                  fontSize="0.8rem"
                  mt="1.875rem"
                  color="#150A33"
                  fontWeight="500"
                >
                  Administratif et Social
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box w="50%">
            <Heading
              as="h3"
              fontSize="2rem"
              lineHeight="3rem"
              color="#150A33"
              mt="1.563"
              mb="1.25rem"
            >
              Concevez la solution qui vous convient
            </Heading>
            <Text
              color="#656565"
              m="0 0 0.625rem"
              mt="2rem"
              mb="1rem"
              fontSize="md"
            >
              Trouver des spécialistes du soin et du soutien adaptés à votre
              situation est facile avec Habble. Effectuez vos recherches en
              fonction de ce qui compte le plus pour vous et votre famille.
              <br />
              <br />
              Réglez directement, mobilisez des aides (mutuelles, assurances,
              CAF, CCAS, Prestation de compensation du handicap,...). La plupart
              des services sont éligibles au crédit d'impôt.
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
