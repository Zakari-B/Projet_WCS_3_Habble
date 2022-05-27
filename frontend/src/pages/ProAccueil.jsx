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

const slideIn = keyframes`0% {background-position: 0% 0%} 50% {background-position: 100% 0%} 100% {background-position: 0% 0%}`;

function ProAccueil() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${slideIn} 2s linear`;

  return (
    <Box>
      <Box marginLeft="1.5rem" marginRight="1.5rem">
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
          <Text variant="titleH2">
            Développez votre visibilité gratuitement
          </Text>
        </Flex>
        <Flex align="center" marginBottom="2rem">
          <Image
            boxSize="2.3rem"
            src="../src/assets/checkbox.png"
            marginRight="0.5rem"
          />
          <Text variant="titleH2">Choisissez vos missions</Text>
        </Flex>
        <Flex align="center" marginBottom="2.5rem">
          <Image
            boxSize="2.3rem"
            src="../src/assets/checkbox.png"
            marginRight="0.5rem"
          />
          <Text variant="titleH2">L'administratif simplifié</Text>
        </Flex>
        <Input
          borderRadius="4px"
          size="lg"
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
        <Flex direction="column" align="center" marginTop="4.5rem" role="group">
          <Image
            boxSize="2.3rem"
            marginBottom="1rem"
            src="../src/assets/coche.png"
            alt="coche"
          />
          <Text variant="titleH3" marginBottom="1rem">
            Développez votre visibilité
          </Text>
          <Text variant="corps" marginBottom="2rem">
            Aucun frais pour vous rendre visible et accéder directement à notre
            communauté d'utilisateurs. Dès votre inscription, vous serez
            référencé dans notre annuaire.
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
        <Flex direction="column" align="center" marginTop="2rem" role="group">
          <Image
            boxSize="2.3rem"
            marginBottom="1rem"
            src="../src/assets/coche.png"
            alt="coche"
          />
          <Text variant="titleH3" marginBottom="1rem">
            Choisissez vos missions
          </Text>
          <Text variant="corps" marginBottom="2rem">
            Choisissez le type de service à fournir, le public visé, vos heures
            de travail et votre zone d'intervention. Quoi qu'il arrive c'est
            vous qui décidez.
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

        <Flex direction="column" align="center" marginTop="2rem" role="group">
          <Image
            boxSize="2.3rem"
            marginBottom="1rem"
            src="../src/assets/coche.png"
            alt="coche"
          />
          <Text variant="titleH3" marginBottom="1rem">
            L'administratif simplifié
          </Text>
          <Text variant="corps" marginBottom="2rem">
            La plateforme sécurisée Habble gère pour vous l'administratif pour
            que vous puissiez vous concentrer sur votre travail en toute
            tranquillité.
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
              <Text align="left" variant="corps">
                Dites-nous votre spécialité et vos champs d'intervention
              </Text>
            </Box>
            <Box>
              <Text align="left" variant="titleH3">
                2. Choisissez
              </Text>
              <Text align="left" variant="corps">
                Recevez des demandes de personnes ou de services en lien avec
                vos compétences. Echangez pour affiner les détails de la
                mission.
              </Text>
            </Box>
            <Box>
              <Text align="left" variant="titleH3">
                3. Réalisez
              </Text>
              <Text align="left" variant="corps">
                La plateforme sécurisée Habble gère pour vous l'administratif
                pour vous permettre de vous consacrer à votre coeur de métier.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box marginLeft="8%" marginRight="10%">
          <Text align="left" marginBottom="0.5rem" variant="titleH5">
            Rejoignez le 1er réseau spécialisé dans l'accompagnement du handicap
            et des problèmes de santé.
          </Text>
          <Text align="left" marginBottom="1rem" variant="corps">
            Vous êtes engagé pour l'autonomie et l'inclusion des personnes en
            situation de handicap? Faites-vous connaître.
          </Text>
          <Text align="left" variant="corps">
            Que vous soyez en libéral, auto-entrepreneur, un service à la
            personne, un distributeur d'aides techniques, une association
            médico-sociale ou étudiant en santé/social, développez votre
            activité et entrez facilement en relation avec les aidants grâce à
            notre application dédiée.
          </Text>
          <Input
            borderRadius="4px"
            size="lg"
            marginTop="2rem"
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
        </Box>
        <Image
          boxSize="sm"
          margin="auto"
          marginBottom="3rem"
          src="../src/assets/access-care-network.png"
          alt="Yoga"
        />
        <Box marginLeft="10%" marginRight="10%">
          <Box>
            <Text marginBottom="0.5rem" variant="titleH4">
              Pas d'abonnement coûteux
            </Text>
            <Text marginBottom="0.8rem" variant="corps">
              Dès votre inscription, vous êtes référencé sur l'annuaire.
              <br /> Notre service est gratuit.
            </Text>
          </Box>
          <Box>
            <Text marginBottom="0.5rem" variant="titleH4">
              Un outil adapté à vos besoins
            </Text>
            <Text marginBottom="0.8rem" variant="corps">
              Un tableau de bord dédié pour suivre simplement vos prestations :
              agenda, cahier de liaison, suivi.
            </Text>
          </Box>
          <Box>
            <Text marginBottom="0.5rem" variant="titleH4">
              C'est vous le patron
            </Text>
            <Text marginBottom="5.5rem" variant="corps">
              Vous souhaitez développer votre activité ? Vous recherchez des
              missions, prestations de services, contrats (CDD, gré à gré,...),
              définissez vous même vos critères.
            </Text>
          </Box>
        </Box>
        <Flex direction="column">
          <SimpleGrid columns={2} spacing={10} marginLeft="18%">
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
              <Image boxSize="3rem" src="../src/assets/care.svg" alt="Santé" />
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
              <img src="" alt="Administratif et Social" />
              <Text variant="corpsBold">Administratif et Social</Text>
            </Flex>
          </SimpleGrid>
          <Text
            marginTop="3rem"
            marginLeft="8%"
            marginBottom="1rem"
            align="left"
            variant="titleH5"
          >
            N'attendez plus pour proposer vos services
          </Text>
          <Text variant="corps" marginRight="10%" align="left" marginLeft="8%">
            Vous cherchez à compléter vos revenus, à valorisez votre offre ou à
            développer vos missions ? Notre plateforme de mise en relation vous
            simplifie la vie et réduit votre temps à consacrer à la prospection
            et à l'administratif.
          </Text>
        </Flex>
      </Box>
      <Box>
        <Box>
          <Text marginTop="6rem" variant="titleH5">
            Fonctionnalités
          </Text>
          {/* carroussel */}
        </Box>
        <Box
          paddingTop="0.8rem"
          bgGradient="linear-gradient(to-r, #a7197f 0%, #4d1582 51%, #a7197f 100%)"
        >
          <Box marginLeft="3%" marginRight="3%">
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
          </Box>
        </Box>
        <Box marginBottom="3rem">
          <Text variant="titleH5" marginTop="5rem" marginBottom="6rem">
            Partenaires et Soutiens
          </Text>
          <Flex
            direction="column"
            align="center"
            height="10rem"
            justify="space-between"
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
    </Box>
  );
}

export default ProAccueil;
