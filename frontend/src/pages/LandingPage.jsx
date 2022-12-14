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
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

import HomeImg from "../assets/habble-bkg-1024x684.jpg";
import Chat from "../assets/chat.svg";
import Care from "../assets/access-care-network.png";
import SoutienDomicile from "../assets/house.svg";
import Education from "../assets/education.svg";
import Sante from "../assets/care.svg";
import BienEtre from "../assets/psychology-head.svg";
import Transport from "../assets/wheelchair_transport.svg";
import LandingBg1 from "../assets/landing_bg.png";
import LandingBg2 from "../assets/section-bg-hero3.png";
import admin from "../assets/admin.svg";

import LogoReseau from "../assets/logo_horizontal_re_couleur_nord.png";
import LogoEvident from "../assets/logo-evident.png";
import LogoFrench from "../assets/Logo_communaute.png";

import LandingData from "../services/LandingData";

export default function LandingPage() {
  return (
    <Box>
      <Box
        bgImage={{ base: "none", md: HomeImg }}
        objectFit="contain"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
      >
        <Header onDark isSticky isStickyWhite={false} />
        <Box
          maxW="1280px"
          w={{ base: "100%", "2xl": "60%" }}
          display="flex"
          justifyContent={{ base: "center", lg: "flex-start" }}
          margin="auto"
          alignItems="center"
          pt={{ base: "6rem" }}
        >
          <Box
            w={{ base: "100%", md: "40%", "2xl": "26.6%" }}
            minW={{ base: "100%", md: "570px", "2xl": "570px" }}
            h="auto"
            p="1.938rem 2.5rem 2.625rem 2.25rem"
            bgColor={{ base: "rgba(167, 25, 127, 0.2)", md: "white" }}
            borderRadius={{ base: "none", md: "21px" }}
            color="purple.average"
            textAlign="left"
            mt="8%"
            mb="8%"
          >
            <Heading
              as="h1"
              fontSize="calc(1.5rem + 1.5vw)"
              pb="1rem"
              fontWeight="600"
            >
              Trouvez un{" "}
              <span Style="background: linear-gradient(45deg, #4d1582 0%, #a7197f 100%); background-clip: text; -webkit-background-clip: text; color: transparent;">
                professionnel
              </span>{" "}
              du{" "}
              <span Style="background: linear-gradient(45deg, #4d1582 0%, #a7197f 100%); background-clip: text; -webkit-background-clip: text; color: transparent;">
                handicap
              </span>{" "}
              ou du{" "}
              <span Style="background: linear-gradient(45deg, #4d1582 0%, #a7197f 100%); background-clip: text; -webkit-background-clip: text; color: transparent;">
                soin
              </span>
              , de confiance pr??s de chez vous
            </Heading>
            <InputGroup borderRadius="4px 0 0 4px" size="lg">
              <Input
                placeholder="Entrez votre code postal"
                bgColor={{ base: "white", md: "none" }}
                _placeholder={{
                  color: "gray.300",
                  fontWeight: "semibold",
                }}
              />
              <Link to="/register/?role=employer">
                <InputRightElement
                  borderRadius="0 4px 4px 0"
                  w="15%"
                  bgColor="#a7197f"
                  cursor="pointer"
                  _hover={{ bgColor: "#342c50" }}
                >
                  <SearchIcon color="white" />
                </InputRightElement>
              </Link>
            </InputGroup>
          </Box>
        </Box>
      </Box>
      <Box
        w={{ base: "95%", xl: "60%" }}
        maxW="1170px"
        mb="5rem"
        ml="auto"
        mr="auto"
      >
        <Heading
          as="h2"
          m="2rem 0 2rem 0"
          color="#342c50"
          fontSize="calc(1rem + 1.5vw)"
          fontWeight="500"
        >
          Top services sur Habble
        </Heading>
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          wrap="wrap"
        >
          {LandingData.map((data) => (
            <Link to="/register/?role=employer">
              <Box key={data.id} cursor="pointer">
                <Box
                  w={{
                    base: "95vw",
                    md: "45vw",
                    lg: "20vw",
                    xl: "14vw",
                    "2xl": "13vw",
                  }}
                  h="29.3vh"
                  mb="1rem"
                  borderRadius="0.625rem"
                  boxShadow="0 1px 1px 0 rgb(69 43 65 / 14%), 0 2px 1px -1px rgb(69 43 65 / 12%), 0 1px 3px 0 rgb(69 43 65 / 20%)"
                  _hover={{
                    boxShadow:
                      "0 6px 10px 0 rgb(69 43 65 / 14%), 0 1px 18px 0 rgb(69 43 65 / 12%), 0 3px 5px -1px rgb(69 43 65 / 20%)",
                  }}
                >
                  <Box
                    bgImage={data.image}
                    alt={data.title}
                    bgPos="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    borderRadius="0.625rem 0.625rem 0 0"
                    h="55%"
                  />
                  <Text
                    w="100%"
                    p="0.5rem"
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
            </Link>
          ))}
        </Flex>
      </Box>
      <Box
        w={{ base: "95%", xl: "60%" }}
        maxW="1170px"
        mb="5rem"
        ml="auto"
        mr="auto"
        cursor="pointer"
      >
        <Heading
          as="h2"
          m="2rem 0 2rem 0"
          color="#342c50"
          fontSize="calc(1rem + 1.5vw)"
          fontWeight="600"
          textAlign="center"
        >
          Deux moyens de trouver un professionnel du handicap
        </Heading>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          justifyContent="space-around"
        >
          <Link to="/register/?role=employer">
            <Box
              w={{ base: "100%", xl: "22.61vw" }}
              p="0.938rem"
              borderRadius="21px"
              color="purple.average"
              lineHeight="1.5"
              _hover={{
                boxShadow: "0px 18px 37px rgb(212 50 151 / 20%)",
                color: "#a7197f",
              }}
            >
              <Flex flexDir="column" alignItems="center">
                <Image src={Chat} w="5rem" />
                <Heading as="h4" mt="2rem" fontSize="1.5rem" fontWeight="500">
                  Transmettez nous votre demande
                </Heading>
                <Text
                  color="#656565"
                  m="0 0 0.625rem"
                  mt="2rem"
                  mb="1rem"
                  fontSize="md"
                  align="center"
                >
                  Inscrivez vous gratuitement ?? Habble et d??tes nous de quel
                  service vous avez besoin et ?? quel moment : garde, ??ducation
                  sp??cialis??e, aide administrative, auxiliaire de vie,
                  ergoth??rapeuthe... Recevez des propositions de professionnels,
                  discutez avec eux des d??tails, choisissez la proposition la
                  plus adapt??e puis profitez !
                </Text>
              </Flex>
            </Box>
          </Link>
          <Link to="/register/?role=employer">
            <Box
              w={{ base: "100%", xl: "22.61vw" }}
              p="0.938rem"
              borderRadius="21px"
              color="purple.average"
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
                  align="center"
                >
                  Parcourez les profils des professionnels de votre r??gion. Ils
                  ont tous ??t?? v??rifi??s pour votre tranquillit?? d'esprit.
                  Affinez votre recherche avec les options de filtre et de tri :
                  disponibilit??, comp??tences et plus encore. <br />
                  <br />
                  Trouver un professionnel du handicap
                </Text>
              </Flex>
            </Box>
          </Link>
        </Flex>
        <Flex justifyContent="center">
          <Link to="/register/?role=employer">
            <Button
              h="auto"
              p="0.625rem 1.375rem"
              borderRadius="4px"
              mt="3.125rem"
              variant="solid_PrimaryColor"
            >
              Trouver un professionnel du handicap
            </Button>
          </Link>
        </Flex>
      </Box>
      <Box
        w={{ base: "95%", xl: "60%" }}
        maxW="1170px"
        mb="5rem"
        ml="auto"
        mr="auto"
        cursor="pointer"
      >
        <Flex
          alignItems="center"
          flexDir={{ base: "column-reverse", lg: "row" }}
        >
          <Box w={{ base: "100%", lg: "50%" }}>
            <Heading
              as="h2"
              m="2rem 0 2rem 0"
              color="#342c50"
              fontSize="calc(1rem + 1.5vw)"
              lineHeight="1.1"
              fontWeight="500"
              textAlign={{ base: "center", md: "left" }}
            >
              Acc??dez ?? un r??seau de soutien sp??cialis?? dans le handicap simple,
              s??r et disponible.
            </Heading>
            <Text
              color="#656565"
              m="0 0 0.625rem"
              mt="2rem"
              mb="1rem"
              fontSize="md"
              textAlign={{ base: "center", md: "left" }}
            >
              Appr??ciez la tranquillit?? d'esprit pour vous et votre famille,
              gr??ce ?? notre r??seau de professionnels et de structures
              sp??cialis??s dans le handicap, les soins et le soutien quotidien.
            </Text>
          </Box>
          <Image
            src={Care}
            alt="Access a safe network"
            w={{ base: "75%", lg: "50%" }}
          />
        </Flex>
      </Box>
      <Box
        w={{ base: "95%", xl: "60%" }}
        maxW="1170px"
        mb="5rem"
        ml="auto"
        mr="auto"
      >
        <Flex flexDir={{ base: "column", lg: "row" }} gap="20px">
          <Box w={{ base: "100%", lg: "33%" }} textAlign="center">
            <Heading
              as="h4"
              mt="2rem"
              fontSize="1.5rem"
              color="purple.average"
              fontWeight="500"
            >
              Pas d'abonnement
            </Heading>
            <Text color="#656565" mt="2rem" mb="1rem" fontSize="md">
              Notre service est gratuit, pas d'abonnement co??teux ! Nos frais
              sont r??duits au strict minimum pour respecter votre pouvoir
              d'achat.
            </Text>
          </Box>
          <Box w={{ base: "100%", lg: "33%" }} textAlign="center">
            <Heading
              as="h4"
              mt="2rem"
              fontSize="1.5rem"
              color="purple.average"
              fontWeight="500"
            >
              La s??curit?? : notre priorit??
            </Heading>
            <Text color="#656565" mt="2rem" mb="1rem" fontSize="md">
              Les professionnels ind??pendants et services sp??cialis??s r??pondent
              ?? des crit??res stricts : r??f??rences, qualifications... Nous
              v??rifions les agr??ments pour plus de suret?? et s??curit??. <br />
              <br />
              Un contact disponible en cas d'urgence.
            </Text>
          </Box>
          <Box w={{ base: "100%", lg: "33%" }} textAlign="center">
            <Heading
              as="h4"
              mt="2rem"
              fontSize="1.5rem"
              color="purple.average"
              fontWeight="500"
            >
              Assurance tous risques
            </Heading>
            <Text color="#656565" mt="2rem" mb="1rem" fontSize="md">
              Nous v??rifions les comp??tences et informations des professionnels
              pour garantir la tranquillit?? d'esprit pour vous et votre famille.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        w={{ base: "95%", xl: "60%" }}
        maxW="1170px"
        mb="5rem"
        ml="auto"
        mr="auto"
      >
        <Flex flexDir={{ base: "column", lg: "row" }} gap="40px">
          <Box w={{ base: "100%", lg: "50%" }} mr="1.5rem">
            <SimpleGrid columns={3} spacingX={10} spacingY="6rem">
              <Box
                w="100%"
                h="80px"
                display="flex"
                flexDir="column"
                alignItems="center"
              >
                <Image
                  src={SoutienDomicile}
                  alt="Soutien ?? domicile"
                  w={{ base: "30%", lg: "50%" }}
                />
                <Text
                  fontSize="0.8rem"
                  mt="1.875rem"
                  color="#150A33"
                  fontWeight="500"
                >
                  Soutien ?? domicile
                </Text>
              </Box>
              <Box
                w="100%"
                h="80px"
                display="flex"
                flexDir="column"
                alignItems="center"
              >
                <Image src={Sante} alt="Sant??" w={{ base: "30%", lg: "50%" }} />
                <Text
                  textAlign="center"
                  fontSize="0.8rem"
                  mt="1.875rem"
                  color="#150A33"
                  fontWeight="500"
                >
                  Sant??
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
                  src={BienEtre}
                  alt="Bien ??tre"
                  w={{ base: "30%", lg: "50%" }}
                />
                <Text
                  textAlign="center"
                  fontSize="0.8rem"
                  mt="1.875rem"
                  color="#150A33"
                  fontWeight="500"
                >
                  Bien ??tre
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
                  src={Education}
                  alt="Enseignement, Education"
                  w={{ base: "30%", lg: "50%" }}
                />
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
                  w={{ base: "30%", lg: "50%" }}
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
                  src={admin}
                  alt="Administratif et Social"
                  w={{ base: "30%", lg: "50%" }}
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
          <Box w={{ base: "100%", lg: "50%" }}>
            <Heading
              as="h3"
              fontSize="2rem"
              lineHeight="3rem"
              color="#150A33"
              mt={{ base: "4rem", lg: "0" }}
              mb="1.25rem"
              fontWeight="500"
              textAlign={{ base: "center", md: "left" }}
            >
              Concevez la solution qui vous convient
            </Heading>
            <Text
              color="#656565"
              m="0 0 0.625rem"
              mt="2rem"
              mb="1rem"
              fontSize="md"
              textAlign={{ base: "center", md: "left" }}
            >
              Trouver des sp??cialistes du soin et du soutien adapt??s ?? votre
              situation est facile avec Habble. Effectuez vos recherches en
              fonction de ce qui compte le plus pour vous et votre famille.
              <br />
              <br />
              R??glez directement, mobilisez des aides (mutuelles, assurances,
              CAF, CCAS, Prestation de compensation du handicap,...). La plupart
              des services sont ??ligibles au cr??dit d'imp??t.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box
        w="100%"
        bgColor="#5f3984"
        bgImage={{ base: "none", lg: LandingBg1 }}
        bgPosition="right"
        bgRepeat="no-repeat"
        bgSize="70%"
      >
        <Box
          w={{ base: "100%", lg: "50%" }}
          pl={{ lg: "5em", "2xl": "20rem" }}
          pb="2rem"
          pt={{ base: "0.5rem", lg: "2rem" }}
        >
          <Flex direction="column">
            <Heading
              as="h3"
              fontSize="calc(1rem + 1vw)"
              color="#f9f9f9"
              mt="1.563rem"
              fontWeight="500"
            >
              Vous ??tes un professionnel du handicap ou du soin ?? domicile ?
            </Heading>
            <Text
              color="#f9f9f9"
              m="0 0 0.625rem"
              mt="2rem"
              mb="1rem"
              fontSize="md"
            >
              Educ, AES, Ergo, AESH, Enseignant, Auxiliaire de
              vie,...Faites-vous conna??tre, choisissez les missions qui vous
              correspondent et d??veloppez votre activit?? !
            </Text>
            <Link to="/professionnel-handicap">
              <Button
                w={{ base: "75%", lg: "90%" }}
                h="auto"
                p="0.625rem 1.375rem"
                variant="outline_White_Gradient"
              >
                En savoir plus
              </Button>
            </Link>
            <Text color="#f9f9f9" mt="2rem" fontSize="sm">
              Inscrivez-vous et d??taillez vos services
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box
        w="100%"
        h="auto"
        bgColor="white"
        bgImage={{ base: "none", md: LandingBg2 }}
        bgSize="cover"
      >
        <Flex alignItems="center" flexDir="column">
          <Heading
            as="h3"
            lineHeight="3rem"
            m="2rem 0 2rem 0"
            color="#342c50"
            fontSize="calc(1rem + 1.5vw)"
            fontWeight="500"
          >
            Partenaires et Soutiens
          </Heading>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: 10, md: 40 }}
            justifyContent="center"
            alignItems="center"
            m="1rem"
          >
            <Image
              src={LogoReseau}
              alt="Logo R??seau Entreprise"
              w={{ base: "40%", sm: "15%" }}
            />
            <Image
              src={LogoEvident}
              alt="Logo ??vident"
              w={{ base: "25%", md: "10%" }}
            />
            <Image
              src={LogoFrench}
              alt="Logo French Impact"
              w={{ base: "25%", md: "10%" }}
            />
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}
