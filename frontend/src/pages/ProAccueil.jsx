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

import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import admin from "../assets/admin.svg";

const slideIn = keyframes`0% {background-position: 0% 0%} 50% {background-position: 100% 0%} 100% {background-position: 0% 0%}`;

function ProAccueil() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${slideIn} 2s linear`;

  return (
    <Box>
      <Header isSticky="true" />

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
                <Image
                  boxSize="2.3rem"
                  src="../src/assets/checkbox.png"
                  marginRight="0.5rem"
                />
                <Text align="left" variant="titleH2">
                  Développez votre visibilité gratuitement
                </Text>
              </Flex>
              <Flex align="center" marginBottom="2rem">
                <Image
                  boxSize="2.3rem"
                  src="../src/assets/checkbox.png"
                  marginRight="0.5rem"
                />
                <Text align="left" variant="titleH2">
                  Choisissez vos missions
                </Text>
              </Flex>
              <Flex align="center" marginBottom="2.5rem">
                <Image
                  boxSize="2.3rem"
                  src="../src/assets/checkbox.png"
                  marginRight="0.5rem"
                />
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
                <Button variant="gradient" _hover={{ animation }}>
                  Je m'inscris maintenant
                </Button>
              </Flex>
            </Box>
            <Box
              display={{ base: "none", md: "block" }}
              minW={{ md: "40vw" }}
              maxW="50vw"
            >
              <Image src="../src/assets/listing-pros-iphone-600x575-2.png" />
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
                src="../src/assets/coche.png"
                alt="coche"
              />
              <Text variant="titleH3" marginBottom="1rem">
                Développez votre visibilité
              </Text>
              <Text variant="corps" marginBottom="2rem" color="#656565">
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
                src="../src/assets/coche.png"
                alt="coche"
              />
              <Text variant="titleH3" marginBottom="1rem">
                Choisissez vos missions
              </Text>
              <Text variant="corps" marginBottom="2rem" color="#656565">
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
                src="../src/assets/coche.png"
                alt="coche"
              />
              <Text variant="titleH3" marginBottom="1rem">
                L'administratif simplifié
              </Text>
              <Text variant="corps" marginBottom="2rem" color="#656565">
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
            <Text
              align="left"
              marginLeft="8%"
              marginBottom="3.5rem"
              variant="titleH4"
            >
              Comment ça marche ?
            </Text>
            <Flex
              direction="column"
              marginLeft="30%"
              marginRight="10%"
              marginBottom="7rem"
              height="20rem"
              justify="space-between"
            >
              <Box>
                <Text align="left" variant="titleH3">
                  1. Décrivez vos prestations
                </Text>
                <Text align="left" variant="corps" color="#656565">
                  Dites-nous votre spécialité et vos champs d'intervention
                </Text>
              </Box>
              <Box>
                <Text align="left" variant="titleH3">
                  2. Choisissez
                </Text>
                <Text align="left" variant="corps" color="#656565">
                  Recevez des demandes de personnes ou de services en lien avec
                  vos compétences. Echangez pour affiner les détails de la
                  mission.
                </Text>
              </Box>
              <Box>
                <Text align="left" variant="titleH3">
                  3. Réalisez
                </Text>
                <Text align="left" variant="corps" color="#656565">
                  La plateforme sécurisée Habble gère pour vous l'administratif
                  pour vous permettre de vous consacrer à votre coeur de métier.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
          >
            <Box marginLeft="8%" marginRight="10%">
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
              <Text align="left" variant="corps" color="#656565">
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
                <Button variant="gradient" marginBottom="5rem">
                  Je m'inscris
                </Button>
              </Flex>
            </Box>
            <Image
              boxSize="sm"
              margin={{ base: "auto", md: "0" }}
              marginBottom={{ base: "3rem", md: "0" }}
              src="../src/assets/access-care-network.png"
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
                  <Image
                    boxSize="3rem"
                    src="../src/assets/care.svg"
                    alt="Santé"
                  />
                  <Text variant="corpsBold">Santé</Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="5rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image
                    boxSize="3rem"
                    src="../src/assets/psychology-head.svg"
                    alt="Bien-être"
                  />
                  <Text variant="corpsBold">Bien être</Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="6rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image
                    boxSize="3rem"
                    src="../src/assets/education.svg"
                    alt="Enseignement"
                  />
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
                    src="../src/assets/wheelchair_transport.svg"
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
            {/* carroussel */}
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
              <Button marginBottom="2rem" variant="outlineWhitePink">
                Je m'inscris, c'est gratuit !
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Box marginBottom="3rem">
          <Text
            variant="titleH5"
            marginTop="5rem"
            marginBottom="6rem"
            textAlign="center"
          >
            Partenaires et Soutiens
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            height="10rem"
            justify={{ base: "space-between", md: "space-around" }}
            marginLeft={{ md: "20%" }}
            marginRight={{ md: "20%" }}
          >
            <Box boxSize="10rem">
              <Image
                src="../src/assets/logo_horizontal_re_couleur_nord.png"
                alt="Réseau Entreprendre"
              />
            </Box>
            <Box boxSize="10rem">
              <Image src="../src/assets/logo-evident.png" alt="Evident" />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default ProAccueil;
