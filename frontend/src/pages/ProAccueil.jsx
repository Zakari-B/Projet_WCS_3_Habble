import {
  Text,
  Input,
  Button,
  Image,
  Box,
  Flex,
  SimpleGrid,
  Divider,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

import { VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import admin from "../assets/admin.svg";
import Carousel from "../components/ProAccueil/CarouselImages";
import CarouselWorking from "../components/ProAccueil/CarouselWorking";
import checkbox from "../assets/checkbox.png";
import accueil from "../assets/listing-pros-iphone-600x575-2.png";
import coche from "../assets/coche.png";
import barreCarousel from "../assets/barre-carousel.png";
import choisissez from "../assets/choisissez.svg";
import realisez from "../assets/realisez.svg";
import accessCareNetwork from "../assets/access-care-network.png";
import care from "../assets/care.svg";
import psychologyHead from "../assets/psychology-head.svg";
import education from "../assets/education.svg";
import wheelchairTransport from "../assets/wheelchair_transport.svg";
import reCouleur from "../assets/logo_horizontal_re_couleur_nord.png";
import logoEvident from "../assets/logo-evident.png";
import icone3Couleur from "../assets/icone3-couleur.png";
import LogoCommunaute from "../assets/Logo_communaute.png";

const slideIn = keyframes`0% {background-position: 0% 0%} 50% {background-position: 100% 0%} 100% {background-position: 0% 0%}`;

function ProAccueil() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${slideIn} 2s linear`;

  return (
    <Box>
      <Header onDark={false} isSticky={false} isStickyWhite />

      <Box
        marginLeft={{ md: "3%", lg: "10%" }}
        marginRight={{ md: "5%", lg: "10%" }}
        paddingTop="8rem"
        color="purple.average"
      >
        <Box
          marginLeft={{ base: "1.5rem", md: "0" }}
          marginRight={{ base: "1.5rem", md: "0" }}
        >
          <Flex justify={{ md: "space-between" }}>
            <Box marginRight={{ md: "5%" }}>
              <Text align="left" variant="titleH1" marginBottom="2rem">
                Professionnels du handicap,
                <br />
                Valorisez votre savoir-faire
                <br />
                et trouvez rapidement des missions
              </Text>
              <Flex align="center" marginBottom="2rem">
                <Image boxSize="2.3rem" src={checkbox} marginRight="0.5rem" />
                <Text align="left" variant="titleH2">
                  Développez votre visibilité gratuitement
                </Text>
              </Flex>
              <Flex align="center" marginBottom="2rem">
                <Image boxSize="2.3rem" src={checkbox} marginRight="0.5rem" />
                <Text align="left" variant="titleH2">
                  Choisissez vos missions
                </Text>
              </Flex>
              <Flex align="center" marginBottom="2.5rem">
                <Image boxSize="2.3rem" src={checkbox} marginRight="0.5rem" />
                <Text align="left" variant="titleH2">
                  L'administratif simplifié
                </Text>
              </Flex>
              <Flex
                direction={{ base: "column", xl: "row" }}
                justify={{ xl: "space-between" }}
                gap={{ xl: "15px" }}
                marginBottom={{ md: "2rem" }}
              >
                <Input
                  borderRadius="4px"
                  size="lg"
                  width={{ base: "90vw", md: "100%" }}
                  marginBottom="2rem"
                  placeholder="Saisissez votre email*"
                  _placeholder={{
                    fontSize: "0.7rem",
                    color: "gray.300",
                    fontWeight: "semibold",
                  }}
                />
                <Link to="/register/?role=freelancer">
                  <Button variant="gradient" _hover={{ animation }}>
                    Je m'inscris maintenant
                    <VscChevronRight size="s" />
                  </Button>
                </Link>
              </Flex>
            </Box>
            <Box
              display={{ base: "none", md: "block" }}
              minW={{ md: "40vw" }}
              maxW="50vw"
            >
              <Image src={accueil} />
            </Box>
          </Flex>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
            justify={{ md: "space-between" }}
            gap={{ md: "20px" }}
            marginTop={{ lg: "4rem" }}
          >
            <Flex
              direction="column"
              align="center"
              marginTop="2rem"
              role="group"
            >
              <Image
                boxSize="2.3rem"
                marginBottom="1rem"
                src={coche}
                alt="coche"
              />
              <Text variant="titleH3" marginBottom="1rem">
                Développez votre visibilité
              </Text>
              <Text
                variant="corps"
                marginBottom="2rem"
                color="#656565"
                align="center"
              >
                Aucun frais pour vous rendre visible et accéder directement à
                notre communauté d'utilisateurs. Dès votre inscription, vous
                serez référencé dans notre annuaire.
              </Text>
              <Divider
                opacity="0%"
                height="3px"
                _groupHover={{
                  hidden: "false",
                  bgGradient:
                    "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
                  opacity: "100%",
                  height: "3px",
                  width: "100%",
                  animationScale: "1s scale(1)",
                  animation: "ease-in-out 4s infinite",
                }}
              />
            </Flex>
            <Flex
              direction="column"
              align="center"
              marginTop="2rem"
              role="group"
            >
              <Image
                boxSize="2.3rem"
                marginBottom="1rem"
                src={coche}
                alt="coche"
              />
              <Text variant="titleH3" marginBottom="1rem">
                Choisissez vos missions
              </Text>
              <Text
                variant="corps"
                marginBottom="2rem"
                color="#656565"
                align="center"
              >
                Choisissez le type de service à fournir, le public visé, vos
                heures de travail et votre zone d'intervention. Quoi qu'il
                arrive c'est vous qui décidez.
              </Text>
              <Divider
                opacity="0%"
                height="3px"
                _groupHover={{
                  hidden: "false",
                  bgGradient:
                    "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
                  opacity: "100%",
                  height: "3px",
                  width: "100%",
                  animationScale: "1s scale(1)",
                  animation: "ease-in-out 4s infinite",
                }}
              />
            </Flex>

            <Flex
              direction="column"
              align="center"
              marginTop="2rem"
              role="group"
            >
              <Image
                boxSize="2.3rem"
                marginBottom="1rem"
                src={coche}
                alt="coche"
              />
              <Text variant="titleH3" marginBottom="1rem">
                L'administratif simplifié
              </Text>
              <Text
                variant="corps"
                marginBottom="2rem"
                color="#656565"
                align="center"
              >
                La plateforme sécurisée Habble gère pour vous l'administratif
                pour que vous puissiez vous concentrer sur votre travail en
                toute tranquillité.
              </Text>
              <Divider
                opacity="0%"
                height="3px"
                _groupHover={{
                  hidden: "false",
                  bgGradient:
                    "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
                  opacity: "100%",
                  height: "3px",
                  width: "100%",
                  animationScale: "1s scale(1)",
                  animation: "ease-in-out 4s infinite",
                }}
              />
            </Flex>
          </Flex>
          <Box>
            <Flex width="100%" align="center">
              <Flex
                bgImage="url('../src/assets/cercle.png')"
                bgRepeat="no-repeat"
                bgPosition="center"
                bgSize="90%"
                boxSize={{ base: "150%", md: "20%", xl: "40%" }}
                marginLeft={{ base: "20%", md: "5%", xl: "15%" }}
                minWidth={{ base: "90%", sm: "30%", md: "50%", lg: "40%" }}
              >
                <CarouselWorking />
              </Flex>

              <Flex
                direction="column"
                marginRight={{ base: "0", lg: "10%" }}
                marginBottom="13rem"
                height="20rem"
                justify="space-between"
              >
                <Box>
                  <Text align="left" marginBottom="6rem" variant="titleH4">
                    Comment ça marche ?
                  </Text>
                  <Flex position="absolute">
                    <Image
                      src={barreCarousel}
                      position="relative"
                      left="20px"
                      bottom="60px"
                      height="500px"
                      width="3px"
                      visibility={{ base: "hidden", md: "visible" }}
                    />
                    <Box marginRight={{ base: "10%", xl: "40%", "2xl": "60%" }}>
                      <Flex align="center" marginBottom="4rem">
                        <Image
                          boxSize="2.5rem"
                          src={choisissez}
                          alt="choisir"
                          marginRight="3rem"
                        />
                        <Flex direction="column">
                          <Text align="left" variant="titleH3">
                            1. Décrivez vos prestations
                          </Text>
                          <Text
                            align="left"
                            variant="corps"
                            fontSize="0.8rem"
                            color="#656565"
                          >
                            Dites-nous votre spécialité et vos champs
                            d'intervention
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex align="center" marginBottom="4rem" role="group">
                        <Image
                          boxSize="2.5rem"
                          src={choisissez}
                          alt="choisir"
                          marginRight="3rem"
                          _groupHover={{
                            src: { icone3Couleur },
                            boxSize: "3rem",
                            marginRight: "2.5rem",
                          }}
                        />

                        <Flex direction="column">
                          <Text align="left" variant="titleH3">
                            2. Choisissez
                          </Text>
                          <Text
                            align="left"
                            variant="corps"
                            fontSize="0.8rem"
                            color="#656565"
                          >
                            Recevez des demandes de personnes ou de services en
                            lien avec vos compétences. Echangez pour affiner les
                            détails de la mission.
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex align="center" marginBottom="3rem">
                        <Image
                          boxSize="2.5rem"
                          src={realisez}
                          alt="realiser"
                          marginRight="3rem"
                        />
                        <Flex direction="column">
                          <Text align="left" variant="titleH3">
                            3. Réalisez
                          </Text>
                          <Text
                            align="left"
                            variant="corps"
                            fontSize="0.8rem"
                            color="#656565"
                          >
                            La plateforme sécurisée Habble gère pour vous
                            l'administratif pour vous permettre de vous
                            consacrer à votre coeur de métier.
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
          >
            <Box marginLeft="20%" marginRight="4rem">
              <Text align="left" marginBottom="0.5rem" variant="titleH5">
                Rejoignez le 1er réseau spécialisé dans l'accompagnement du
                handicap et des problèmes de santé.
              </Text>
              <Text
                align="left"
                marginBottom="1rem"
                variant="corps"
                color="#656565"
              >
                Vous êtes engagé pour l'autonomie et l'inclusion des personnes
                en situation de handicap? Faites-vous connaître.
              </Text>
              <Text
                align="left"
                variant="corps"
                color="#656565"
                marginBottom="2rem"
              >
                Que vous soyez en libéral, auto-entrepreneur, un service à la
                personne, un distributeur d'aides techniques, une association
                médico-sociale ou étudiant en santé/social, développez votre
                activité et entrez facilement en relation avec les aidants grâce
                à notre application dédiée.
              </Text>
              <Flex
                direction={{ base: "column", lg: "row" }}
                justify={{ lg: "space-between" }}
                gap={{ lg: "15px" }}
              >
                <Input
                  borderRadius="4px"
                  size="lg"
                  marginTop={{ base: "2rem", lg: "0" }}
                  marginBottom="2rem"
                  placeholder="Saisissez votre email*"
                  _placeholder={{
                    fontSize: "0.7rem",
                    color: "gray.300",
                    fontWeight: "semibold",
                  }}
                />
                <Link to="/register/?role=freelancer">
                  <Button
                    variant="gradient"
                    marginBottom="5rem"
                    width={{ lg: "10rem" }}
                  >
                    Je m'inscris <VscChevronRight size="s" />
                  </Button>
                </Link>
              </Flex>
            </Box>
            <Image
              boxSize="sm"
              margin={{ base: "auto", md: "0" }}
              marginBottom={{ base: "3rem", md: "0" }}
              marginRight={{ xl: "20%" }}
              src={accessCareNetwork}
              alt="Yoga"
            />
          </Flex>
          <Flex
            marginLeft="10%"
            marginRight="10%"
            marginBottom={{ md: "5rem" }}
            marginTop={{ lg: "4rem" }}
            maxWidth="100%"
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
            justifyContent={{ md: "space-between" }}
          >
            <Box width={{ md: "30%" }}>
              <Text
                marginBottom={{ base: "0.5rem", md: "0" }}
                variant="titleH4"
                align="center"
              >
                Pas d'abonnement coûteux
              </Text>
              <Text
                marginBottom={{ base: "0.8rem", md: "0" }}
                variant="corps"
                color="#656565"
                align="center"
              >
                Dès votre inscription, vous êtes référencé sur l'annuaire.
                <br /> Notre service est gratuit.
              </Text>
            </Box>
            <Box width={{ md: "30%" }}>
              <Text
                marginBottom={{ base: "0.5rem", md: "0" }}
                variant="titleH4"
                align="center"
              >
                Un outil adapté à vos besoins
              </Text>
              <Text
                marginBottom={{ base: "0.8rem", md: "0" }}
                variant="corps"
                color="#656565"
                align="center"
              >
                Un tableau de bord dédié pour suivre simplement vos prestations
                : agenda, cahier de liaison, suivi.
              </Text>
            </Box>
            <Box width={{ md: "30%" }}>
              <Text
                marginBottom={{ base: "0.5rem", md: "0" }}
                variant="titleH4"
                align="center"
              >
                C'est vous le patron
              </Text>
              <Text
                marginBottom={{ base: "5.5rem", md: "0" }}
                variant="corps"
                color="#656565"
                align="center"
              >
                Vous souhaitez développer votre activité ? Vous recherchez des
                missions, prestations de services, contrats (CDD, gré à
                gré,...), définissez vous même vos critères.
              </Text>
            </Box>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ md: "50%" }}>
              <SimpleGrid
                columns={{ base: "3", md: "3" }}
                spacing={10}
                marginBottom={{ base: "3rem" }}
              >
                <Flex
                  direction="column"
                  align="center"
                  height="6rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image
                    boxSize="3rem"
                    src="../src/assets/house.svg"
                    alt="Soutien domicile"
                  />
                  <Text variant="corpsBold">Soutien à domicile</Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="5rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image boxSize="3rem" src={care} alt="Santé" />
                  <Text variant="corpsBold">Santé</Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="5rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image boxSize="3rem" src={psychologyHead} alt="Bien-être" />
                  <Text variant="corpsBold">Bien être</Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="6rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image boxSize="3rem" src={education} alt="Enseignement" />
                  <Text variant="corpsBold">Enseignement, Education</Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="6rem"
                  width="6rem"
                  justify="space-between"
                >
                  <Image
                    boxSize="3rem"
                    src={wheelchairTransport}
                    alt="Transport"
                  />
                  <Text variant="corpsBold">Transport, Aides techniques</Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="6rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image
                    src={admin}
                    boxSize="3rem"
                    alt="Administratif et Social"
                  />
                  <Text variant="corpsBold">Administratif et Social</Text>
                </Flex>
              </SimpleGrid>
            </Box>
            <Flex direction="column" width={{ md: "50%" }}>
              <Text
                marginTop="3rem"
                marginLeft="8%"
                marginBottom="1rem"
                align="left"
                variant="titleH5"
              >
                N'attendez plus pour proposer vos services
              </Text>
              <Text
                variant="corps"
                marginRight="10%"
                align="left"
                marginLeft="8%"
                color="#656565"
              >
                Vous cherchez à compléter vos revenus, à valorisez votre offre
                ou à développer vos missions ? Notre plateforme de mise en
                relation vous simplifie la vie et réduit votre temps à consacrer
                à la prospection et à l'administratif.
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Box>
            <Text marginTop="6rem" variant="titleH5" textAlign="center">
              Fonctionnalités
            </Text>
            <Box marginY="10%">
              <Carousel />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Flex
          paddingTop="0.8rem"
          bgGradient="linear-gradient(to-r, #a7197f 0%, #4d1582 51%, #a7197f 100%)"
          height={{ lg: "25rem" }}
          align={{ lg: "center" }}
        >
          <Box
            marginLeft={{ base: "10%", md: "20%", lg: "30%" }}
            marginRight={{ base: "10%", md: "20%", lg: "30%" }}
          >
            <Text variant="titleH5" color="white">
              Vous êtes en situation de handicap, avec des problèmes de santé ou
              un proche ?
            </Text>
            <Text
              marginTop="0.2rem"
              marginBottom="1.8rem"
              variant="corps"
              color="white"
            >
              Trouvez facilement l'aide dont vous avez besoin !
            </Text>
            <Flex
              direction={{ base: "column", lg: "row" }}
              gap={{ md: "15px" }}
            >
              <Input
                bgColor="white"
                borderRadius="4px"
                size="lg"
                marginBottom="2rem"
                placeholder="Saisissez votre email"
                _placeholder={{
                  fontSize: "0.7rem",
                  color: "gray.300",
                  fontWeight: "semibold",
                }}
              />
              <Link to="/register/?role=freelancer">
                <Button marginBottom="2rem" variant="outlineWhitePink">
                  Je m'inscris, c'est gratuit ! <VscChevronRight size="s" />
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          h="fit-content"
          textAlign="start"
          w="80%"
          m="auto"
          mt="2rem"
        >
          <Text
            bgGradient="linear(45deg, #4d1582 0%, #a7197f 20%)"
            bgClip="text"
            textAlign="left"
            fontSize="4xl"
            mb="1rem"
            fontWeight="semibold"
            marginY="3rem"
          >
            Partenaires et Soutiens
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify={{ base: "space-between", md: "space-around" }}
            marginLeft={{ md: "20%" }}
            marginRight={{ md: "20%" }}
          >
            <Flex
              justifyContent="space-around"
              alignSelf="center"
              flexWrap="wrap"
              w="90%"
            >
              <Image
                src={logoEvident}
                alt="logo evident"
                w="200px"
                m="1rem"
                h="100px"
                alignSelf="center"
              />

              <Image
                alignSelf="center"
                src={reCouleur}
                alt="logo reseau entreprendre"
                w="216px"
                h="56px"
                m="1rem"
              />
              <Image
                src={LogoCommunaute}
                alt="logo evident"
                w="120px"
                m="1rem"
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}

export default ProAccueil;
