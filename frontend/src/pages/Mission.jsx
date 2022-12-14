import {
  Flex,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Button,
  useDisclosure,
  Link,
  Box,
  Grid,
  GridItem,
  ScaleFade,
  keyframes,
  usePrefersReducedMotion,
  SimpleGrid,
} from "@chakra-ui/react";

import { useState } from "react";

import { CloseIcon } from "@chakra-ui/icons";

import Header from "../components/Header/Header";

import Footer from "../components/Footer";

import admin from "../assets/admin.svg";
import care from "../assets/care.svg";
import education from "../assets/education.svg";
import hBuilding from "../assets/h-building.svg";
import hFamily from "../assets/h-family.svg";
import hServiceWorkers from "../assets/h-service-workers.svg";
import house from "../assets/house.svg";
import listingProsIphone from "../assets/listing-pros-iphone-600x575-2.png";
import LogoCommunaute from "../assets/Logo_communaute.png";
import reseauEntreprendre from "../assets/logo_horizontal_re_couleur_nord.png";
import evident from "../assets/logo-evident.png";
import psychologyHead from "../assets/psychology-head.svg";
import wheelchairTransport from "../assets/wheelchair_transport.svg";

const slideIn = keyframes`0% {background-position: 0% 0%} 50% {background-position: 100% 0%} 100% {background-position: 0% 0%}`;

function Mission() {
  const family = useDisclosure();
  const service = useDisclosure();
  const building = useDisclosure();

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion ? undefined : `${slideIn} 2s linear`;

  const pro = (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      pb="2rem"
      textAlign="start"
      w="90%"
    >
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Trouver un professionnel de santé ou du soutien spécialisé dans le
        handicap
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Vous avez besoin de l'aide d'un professionnel du handicap rapidement ? ?
        Vous cherchez une structure dédiée ? Trouvez toutes les ressources dont
        vous avez besoin sont sur Habble :
      </Text>
      <UnorderedList ml="2rem">
        <ListItem mb="1rem" fontSize="sm" color="white">
          Professionnels sélectionnés qualifiés et certifiés (éducateurs
          spécialisés, enseignants spécialisés, auxiliaire de vie, assistantes
          sociale, paramédicaux, médecins libéraux et spécialisés, transport
          spécialisé, hébergement,…);
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Services médico-sociaux et à la personne : établissements, services,
          dispositifs;
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Fabricants et distributeurs de matériel spécialisé, points de revente,
          éditeurs de logiciels.
        </ListItem>
      </UnorderedList>
      <Text mb="1rem" fontSize="sm" color="white">
        Échangez par messagerie ou chat en ligne sur ce dont vous avez besoin et
        à quel moment et payer la prestation directement sur la plateforme en
        toute sécurité. Ayez l'esprit tranquille, nous vérifions les
        qualifications des intervenants !
      </Text>
    </Flex>
  );
  const demarche = (
    <Flex flexDirection="column" textAlign="start" mr="2rem">
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Démarches en ligne : faites vous accompagner dans le montage de votre
        dossier administratif
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Consultez en ligne une assistante sociale ou trouver les aides
        auxquelles vous avez droit en toute sérénité :
      </Text>
      <UnorderedList ml="2rem">
        <ListItem mb="1rem" fontSize="sm" color="white">
          Définition du plan d’aides;
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Aide aux démarches administratives.
        </ListItem>
      </UnorderedList>
    </Flex>
  );
  const guarentee = (
    <Flex flexDirection="column" textAlign="start" mr="2rem">
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Garanties et arbitrage pour les litiges
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Nous assurons une vérification des compétences des professionnels pour
        garantir leur fiabilité et d'assurer une haute qualité de service.
        Chaque intervenant proposé est signataire de notre charte et nous
        vérifions ses informations.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        En cas de conflit, nos services sont disponibles pour vous assister.
      </Text>
    </Flex>
  );

  const info = (
    <Flex flexDirection="column" textAlign="start" mr="2rem">
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Informations, conseils
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Notre blog vous permet d'accéder aux dernières actualités du secteur en
        matière de handicap et d’autonomie.
      </Text>
    </Flex>
  );
  const coordination = (
    <Flex flexDirection="column" textAlign="start" mr="2rem">
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Coordination de services
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Vous recourez à plusieurs intervenants? Simplifiez vous la vie en
        suivant leur programmation sur un même agenda. Nous mettons à votre
        disposition un tableau de bord pour suivre votre projet personnalisé.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Vous choisissez les informations que vous souhaitez partager avec les
        professionnels et vous conservez un accès permanent à l'ensemble de vos
        données.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Notre service facilite le maintien à domicile de la personne.
      </Text>
    </Flex>
  );
  const goal = (
    <Flex flexDirection="column" textAlign="start" mr="2rem">
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Objectifs et gouvernance
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Habble est un acteur de l'économie sociale et solidaire. Nous sommes une
        association privée non lucrative régie par des valeurs et une charte
        éthique. Notre but est de changer le regard sur le handicap.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Notre fonctionnement est simple: toutes les personnes concernées par
        notre service méritent notre écoute et sont invitées à nous faire
        connaître leurs souhaits d'évolution. Notre politique est de vous offrir
        la meilleure expérience possible à moindre coût.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Le choix d'une structure solidaire nous a donc paru évident ; ce statut
        reflétant les valeurs que nous souhaitons porter :
      </Text>
      <UnorderedList ml="2rem">
        <ListItem mb="1rem" fontSize="sm" color="white">
          Démocratie, égalité des membres, laïcité
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Solidarité, Economie sociale et solidaire
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Utilité et impact social
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Liberté d’actions
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Amélioration des conditions d’existence
        </ListItem>
      </UnorderedList>
    </Flex>
  );

  const [text, setText] = useState(pro);

  return (
    <div>
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        justifyContent="space-between"
        paddingTop="100px"
        pl="1rem"
        minH="70vh"
        paddingX={{ base: "15%", lg: "5%" }}
        backgroundColor="#f9f9f9"
      >
        <Flex
          alignSelf="center"
          flexDirection="column"
          justifyContent="space-around"
          gap="30px"
          p="1rem"
          h="90%"
          mr="5%"
        >
          <Text
            bgGradient="linear(45deg, #4d1582 0%, #a7197f 100%)"
            bgClip="text"
            textAlign="left"
            lineHeight="1.3"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="semibold"
            marginTop="3rem"
          >
            Habble : <br />
            Notre priorité, c’est vous
          </Text>
          <Text
            w="90%"
            fontSize={{ base: "xl", md: "3xl" }}
            textAlign="left"
            fontWeight="semibold"
            color="#494848"
            lineHeight="1.2"
          >
            La première plateforme de services dédiée à l’accompagnement du
            handicap à domicile
          </Text>
          <Flex flexDirection="column" justifyContent="space-around" h="50%">
            <Box>
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
                  <Image boxSize="3rem" src={house} alt="Soutien domicile" />
                  <Text
                    align="center"
                    fontWeight="semibold"
                    fontSize="0.7em"
                    color="#494848"
                  >
                    Soutien à domicile
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="5rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image boxSize="3rem" src={care} alt="Santé" />
                  <Text
                    align="center"
                    fontWeight="semibold"
                    fontSize="0.7em"
                    color="#494848"
                  >
                    Santé
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="5rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image boxSize="3rem" src={psychologyHead} alt="Bien-être" />
                  <Text
                    align="center"
                    fontWeight="semibold"
                    fontSize="0.7em"
                    color="#494848"
                  >
                    Bien être
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="6rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image boxSize="3rem" src={education} alt="Enseignement" />
                  <Text
                    align="center"
                    fontWeight="semibold"
                    fontSize="0.7em"
                    color="#494848"
                  >
                    Enseignement, Education
                  </Text>
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
                  <Text
                    align="center"
                    fontWeight="semibold"
                    fontSize="0.7em"
                    color="#494848"
                  >
                    Transport, Aides techniques
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  height="6rem"
                  width="5rem"
                  justify="space-between"
                >
                  <Image boxSize="3rem" src={admin} alt="Transport" />
                  <Text
                    align="center"
                    fontWeight="semibold"
                    fontSize="0.7em"
                    color="#494848"
                  >
                    Administratif et Social
                  </Text>
                </Flex>
              </SimpleGrid>
            </Box>
          </Flex>
        </Flex>
        <Image
          alignSelf="center"
          display={{ base: "none", lg: "block" }}
          src={listingProsIphone}
          alt="listingProsIphone"
          maxH="80%"
          maxW="45%"
        />
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        h="fit-content"
        textAlign="start"
        pb="6rem"
        marginX="20%"
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
          Notre mission
        </Text>
        <Text mb="1rem" fontSize="sm">
          <strong Style="background: linear-gradient(45deg, #4d1582 0%, #a7197f 100%); background-clip: text; -webkit-background-clip: text; color: transparent;">
            Habble{" "}
          </strong>{" "}
          est une association à but non lucratif. Notre objectif est de
          favoriser la qualité de vie des personnes en situation de handicap ou
          atteintes de problèmes de santé. Il propose des{" "}
          <strong Style="background: linear-gradient(45deg, #4d1582 0%, #a7197f 100%); background-clip: text; -webkit-background-clip: text; color: transparent;">
            solutions de garde, d'accompagnement éducatif, de répit, ...{" "}
          </strong>{" "}
          Il référence toutes les ressources nécessaires à l’accompagnement :
          éducateurs, assistante sociale, auxiliaire de vie,
          ergothérapeuthe,..., Notre solution permet de trouver simplement une
          solution d'aide ou de répit adaptée à son besoin et sans délai. Pour
          les travailleurs sociaux, médico-sociaux et pédagogiques, notre
          service permet de proposer leur offre de service de manière simple et
          accessible.{" "}
          <strong Style="background: linear-gradient(45deg, #4d1582 0%, #a7197f 100%); background-clip: text; -webkit-background-clip: text; color: transparent;">
            Nos services sont gratuits !{" "}
          </strong>
        </Text>
      </Flex>
      <Flex
        h="fit-content"
        justifyContent="center"
        gap="2"
        my="1rem"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        pb="3rem"
      >
        {!family.isOpen && !service.isOpen && !building.isOpen && (
          <Box
            w={{ base: "80%", md: "32%" }}
            role="group"
            h="35vh"
            onClick={family.onToggle}
          >
            <Button
              flexDirection="column"
              justifyContent="space-around"
              h="100%"
              background="white"
              _hover={{ background: "white" }}
              borderY="2px solid #4d1582"
              borderLeft="2px solid #4d1582"
              borderRight={{ base: "2px solid #4d1582", md: "none" }}
              borderRadius="0"
            >
              <Image src={hFamily} alt="hFamily" w="100px" bcolor="#4d1582" />
              <Text
                h="30%"
                whiteSpace="pre-wrap"
                color="#4d1582"
                _groupHover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 25%)",
                  bgClip: "text",
                }}
              >
                Vous êtes en situation de handicap, avec un problème santé ou un
                proche aidant
              </Text>
            </Button>
          </Box>
        )}
        {family.isOpen && (
          <ScaleFade
            initialScale={0.9}
            in={family.isOpen}
            justifyContent="center"
          >
            <Flex
              flexDirection="column"
              justifyContent="space-around"
              bgColor="white"
              z-index="1"
              h={{ base: "60vh", md: "45vh" }}
              w="98vw"
              border="2px solid #4d1582"
              alignItems="center"
              role="group"
            >
              <CloseIcon
                onClick={family.onClose}
                alignSelf="flex-end"
                m="0.5rem"
                color="#4d1582"
                boxSize={4}
              />
              <Text
                whiteSpace="pre-wrap"
                color="#4d1582"
                bgGradient={{
                  base: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                  lg: "none",
                }}
                bgClip="text"
                _groupHover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                  bgClip: "text",
                }}
                fontSize={{ base: "md", md: "2xl" }}
                w="90%"
                fontWeight="bold"
                textAlign="center"
              >
                Trouvez tous les professionnels du handicap de votre secteur
                susceptibles de vous accompagner.
              </Text>
              <Image src={hFamily} alt="hFamily" w="60px" />
              <Flex
                justifyContent="space-between"
                w="90%"
                h={{ base: "40%", md: "32%" }}
              >
                <Flex
                  flexDirection="column"
                  w="45%"
                  justifyContent="space-between"
                >
                  <Text
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="white"
                    bgGradient={{
                      base: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      lg: "none",
                    }}
                    bgClip="text"
                    _groupHover={{
                      bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      bgClip: "text",
                    }}
                    textAlign="center"
                  >
                    Inscrivez vous et décrivez votre besoin
                  </Text>
                  <Link
                    _hover={{ textDecor: "none" }}
                    href="/register/?role=employer"
                  >
                    <Button
                      variant="gradient"
                      _hover={{
                        animation,
                      }}
                      fontSize={{ base: "sm", md: "md" }}
                      justifyContent="center"
                    >
                      M'incrire maintenant
                    </Button>
                  </Link>
                </Flex>
                <Flex
                  flexDirection="column"
                  w="45%"
                  justifyContent="space-between"
                >
                  <Text
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="white"
                    bgGradient={{
                      base: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      lg: "none",
                    }}
                    bgClip="text"
                    _groupHover={{
                      bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      bgClip: "text",
                    }}
                    textAlign="center"
                  >
                    N'hésitez pas également à soutenir le développement de notre
                    service
                  </Text>
                  <Link
                    _hover={{ textDecor: "none" }}
                    href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U"
                  >
                    <Button h="3rem" w="100%" variant="outline_Purple_Gradient">
                      Faire un don
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </ScaleFade>
        )}
        {!family.isOpen && !service.isOpen && !building.isOpen && (
          <Box
            w={{ base: "80%", md: "32%" }}
            role="group"
            h="35vh"
            onClick={service.onToggle}
          >
            <Button
              flexDirection="column"
              justifyContent="space-around"
              h="100%"
              background="white"
              _hover={{ background: "white" }}
              borderY="2px solid #4d1582"
              borderLeft="2px solid #4d1582"
              borderRight={{ base: "2px solid #4d1582", md: "none" }}
              borderRadius="0"
            >
              <Image src={hServiceWorkers} alt="hServiceWorkers" w="100px" />
              <Text
                h="30%"
                whiteSpace="pre-wrap"
                color="#4d1582"
                _groupHover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 25%)",
                  bgClip: "text",
                }}
              >
                Vous êtes un travailleur social, professionnel de santé en
                libéral ou auto-entrepreneur
              </Text>
            </Button>
          </Box>
        )}
        {service.isOpen && (
          <ScaleFade
            initialScale={0.9}
            in={service.isOpen}
            justifyContent="center"
          >
            <Flex
              flexDirection="column"
              justifyContent="space-around"
              bgColor="white"
              z-index="1"
              h={{ base: "60vh", md: "45vh" }}
              w="98vw"
              border="2px solid #4d1582"
              alignItems="center"
              role="group"
            >
              <CloseIcon
                onClick={service.onClose}
                alignSelf="flex-end"
                m="0.5rem"
                color="#4d1582"
                boxSize={4}
              />
              <Text
                whiteSpace="pre-wrap"
                color="#4d1582"
                bgGradient={{
                  base: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                  lg: "none",
                }}
                bgClip="text"
                _groupHover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                  bgClip: "text",
                }}
                fontSize={{ base: "md", md: "2xl" }}
                w="90%"
                fontWeight="bold"
                textAlign="center"
              >
                Inscrivez vous et partagez vos compétences
              </Text>
              <Image src={hServiceWorkers} alt="hServiceWorkers" w="60px" />
              <Flex
                justifyContent="space-between"
                w="90%"
                h={{ base: "40%", md: "32%" }}
              >
                <Flex
                  flexDirection="column"
                  w="45%"
                  justifyContent="space-between"
                >
                  <Text
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="white"
                    bgGradient={{
                      base: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      lg: "none",
                    }}
                    bgClip="text"
                    _groupHover={{
                      bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      bgClip: "text",
                    }}
                    textAlign="center"
                  >
                    Renseignez vos disponibilités et trouvez des missions
                  </Text>
                  <Link
                    _hover={{ textDecor: "none" }}
                    href="/register/?role=freelancer"
                  >
                    <Button
                      variant="gradient"
                      _hover={{
                        animation,
                      }}
                      fontSize="md"
                      justifyContent="center"
                    >
                      M'incrire maintenant
                    </Button>
                  </Link>
                </Flex>
                <Flex
                  flexDirection="column"
                  w="45%"
                  justifyContent="space-between"
                >
                  <Text
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="white"
                    bgGradient={{
                      base: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      lg: "none",
                    }}
                    bgClip="text"
                    _groupHover={{
                      bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      bgClip: "text",
                    }}
                    textAlign="center"
                  >
                    N'hésitez pas également à soutenir le développement de notre
                    service
                  </Text>
                  <Link
                    _hover={{ textDecor: "none" }}
                    href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U"
                  >
                    <Button h="3rem" w="100%" variant="outline_Purple_Gradient">
                      Faire un don
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </ScaleFade>
        )}
        {!family.isOpen && !service.isOpen && !building.isOpen && (
          <Box
            w={{ base: "80%", md: "32%" }}
            role="group"
            h="35vh"
            onClick={building.onToggle}
          >
            <Button
              flexDirection="column"
              justifyContent="space-around"
              h="100%"
              background="white"
              _hover={{ background: "white" }}
              borderY="2px solid #4d1582"
              borderLeft="2px solid #4d1582"
              borderRight={{ base: "2px solid #4d1582", md: "none" }}
              borderRadius="0"
            >
              <Image src={hBuilding} alt="hBuilding" w="100px" />
              <Text
                h="30%"
                whiteSpace="pre-wrap"
                color="#4d1582"
                _groupHover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 25%)",
                  bgClip: "text",
                }}
              >
                Vous êtes un établissement médico social, un service à domicile,
                un fabricant ou distributeur de matériel
              </Text>
            </Button>
          </Box>
        )}
        {building.isOpen && (
          <ScaleFade
            initialScale={0.9}
            in={building.isOpen}
            justifyContent="center"
          >
            <Flex
              flexDirection="column"
              justifyContent="space-around"
              bgColor="white"
              z-index="1"
              h={{ base: "60vh", md: "45vh" }}
              w="98vw"
              border="2px solid #4d1582"
              alignItems="center"
              role="group"
            >
              <CloseIcon
                onClick={building.onClose}
                alignSelf="flex-end"
                m="0.5rem"
                color="#4d1582"
                boxSize={4}
              />
              <Text
                whiteSpace="pre-wrap"
                color="#4d1582"
                bgGradient={{
                  base: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                  lg: "none",
                }}
                bgClip="text"
                _groupHover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                  bgClip: "text",
                }}
                fontSize={{ base: "md", md: "2xl" }}
                w="90%"
                fontWeight="bold"
                textAlign="center"
              >
                Valorisez votre offre de service, de prestations ou de vente.
              </Text>
              <Image src={hBuilding} alt="hBuilding" w="60px" />
              <Flex
                justifyContent="space-between"
                w="90%"
                h={{ base: "40%", md: "32%" }}
              >
                <Flex
                  flexDirection="column"
                  w="45%"
                  justifyContent="space-between"
                >
                  <Text
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="white"
                    bgGradient={{
                      base: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      lg: "none",
                    }}
                    bgClip="text"
                    _groupHover={{
                      bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      bgClip: "text",
                    }}
                    textAlign="center"
                  >
                    Inscrivez-vous et détaillez vos prestations et services.
                  </Text>
                  <Link
                    _hover={{ textDecor: "none" }}
                    href="/register/?role=freelancer"
                  >
                    <Button
                      variant="gradient"
                      _hover={{
                        animation,
                      }}
                      fontSize={{ base: "sm", md: "md", lg: "lg" }}
                      justifyContent="center"
                    >
                      M'incrire maintenant
                    </Button>
                  </Link>
                </Flex>
                <Flex
                  flexDirection="column"
                  w="45%"
                  justifyContent="space-between"
                >
                  <Text
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="white"
                    bgGradient={{
                      base: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      lg: "none",
                    }}
                    bgClip="text"
                    _groupHover={{
                      bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                      bgClip: "text",
                    }}
                    textAlign="center"
                  >
                    Vous souhaitez créer votre propre plateforme, nous sommes là
                    pour vous accompagner.
                  </Text>
                  <Link _hover={{ textDecor: "none" }} href="/contact">
                    <Button h="3rem" w="100%" variant="outline_Purple_Gradient">
                      {" "}
                      Demande de rendez-vous
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </ScaleFade>
        )}
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        h="fit-content"
        textAlign="start"
        m="auto"
        pb="2rem"
        marginX="20%"
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
          Pourquoi s'inscrire ?
        </Text>
        <Text mb="1rem" fontSize="sm">
          <strong>Notre service de mise en relation est gratuit.</strong> Dès
          votre inscription il vous est possible de nous transmettre votre
          besoin ou de trouver un intervenant.
        </Text>
        <Text mb="1rem" fontSize="sm">
          Pour les professionnels, notre site vous aide à développer votre
          visibilité et faciliter la mise en relation.
        </Text>
        <Link _hover={{ textDecor: "none" }} href="/register/?role=freelancer">
          <Button
            variant="gradient"
            maxW="400px"
            fontSize="md"
            justifyContent="center"
          >
            M'inscrire maintenant
          </Button>
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        pb="2rem"
        textAlign="start"
        m="auto"
        marginX="20%"
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
          Pourquoi nous aider ?
        </Text>
        <Text mb="1rem" fontSize="sm">
          Aujourd’hui en France,{" "}
          <strong>
            plus de 12 000 000 de personnes souffrent d'un handicap ou d'un
            problème de santé. Plus de 50 000 sont sans solution
            d’accompagnement.
          </strong>{" "}
          <br /> <br />
          Certaines doivent parfois attendre près de 10 ans pour trouver un
          établissement adapté. Beaucoup souhaitent également un accompagnement
          à domicile, souple et adapté. <br /> <br />
          Notre service vise à répondre à ces personnes et à leurs proches, à
          simplifier leur quotidien en apportant un accompagnement à la carte.
          <br /> <br />
          Vous pouvez soutenir le développement de notre association. Votre aide
          sert à développer la plateforme et informer les personnes en situation
          de handicap des solutions proposées.
        </Text>
        <Link
          _hover={{ textDecor: "none" }}
          href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U"
        >
          <Button
            h="3rem"
            w="100%"
            variant="outline_Purple_Gradient"
            maxW="400px"
          >
            Faire un don
          </Button>
        </Link>
      </Flex>
      <Flex
        bgColor="#5f3984"
        flexDirection="column"
        justifyContent="space-between"
        h="fit-content"
      >
        <Heading
          paddingLeft="3%"
          textAlign="left"
          color="white"
          fontSize="3xl"
          m="1rem"
        >
          Fonctionnalités et principes clés
        </Heading>
        <Flex
          justifyContent="space-around"
          m="1rem"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="center"
          marginBottom="5rem"
        >
          <Box w={{ base: "90%", lg: "40%" }}>{text}</Box>
          <Box w={{ base: "90%", lg: "45%" }}>
            <Grid
              textColor="white"
              alignSelf="center"
              w="100%"
              h="100%"
              templateColumns={{
                base: "repeat(3, 25px 60px 25px)",
                md: "repeat(3, 40px 70px 40px)",
              }}
              templateRows={{
                base: "55px 40px 20px 25px 60px 25px 20px 40px 55px",
                md: "70px 30px 40px 40px 70px 40px 40px 30px 70px",
              }}
              gap="1"
              placeContent="center"
            >
              <GridItem colStart={2} colEnd={3} rowStart={1} rowEnd={2}>
                <Button
                  onClick={() => setText(pro)}
                  border="1px solid #a7197f"
                  bgColor="white"
                  bgRepeat="no-repeat"
                  bgSize="150%"
                  w="100%"
                  h="100%"
                  bgPosition="center"
                  bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-1.svg"
                  opacity="0.5"
                  _focus={{ opacity: "1" }}
                  _hover={{ opacity: "1" }}
                />
              </GridItem>
              <GridItem colStart={5} colEnd={6} rowStart={1} rowEnd={2}>
                <Button
                  onClick={() => setText(demarche)}
                  border="1px solid #a7197f"
                  bgColor="white"
                  bgRepeat="no-repeat"
                  bgSize="70%"
                  w="100%"
                  h="100%"
                  bgPosition="center"
                  bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-2.svg"
                  opacity="0.5"
                  _focus={{ opacity: "1" }}
                  _hover={{ opacity: "1" }}
                />
              </GridItem>
              <GridItem colStart={8} colEnd={9} rowStart={1} rowEnd={2}>
                <Button
                  onClick={() => setText(guarentee)}
                  border="1px solid #a7197f"
                  bgColor="white"
                  bgRepeat="no-repeat"
                  bgSize="70%"
                  w="100%"
                  h="100%"
                  bgPosition="center"
                  bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-3.svg"
                  opacity="0.5"
                  _focus={{ opacity: "1" }}
                  _hover={{ opacity: "1" }}
                />
              </GridItem>
              <GridItem
                colStart={1}
                colEnd={4}
                rowStart={2}
                rowEnd={3}
                fontSize="0.7em"
                fontWeight="semibold"
                align="center"
              >
                Trouver un professionnel
              </GridItem>
              <GridItem
                colStart={4}
                colEnd={7}
                rowStart={2}
                rowEnd={3}
                fontSize="0.7em"
                fontWeight="semibold"
                align="center"
              >
                Démarches
              </GridItem>
              <GridItem
                colStart={7}
                colEnd={10}
                rowStart={2}
                rowEnd={3}
                fontSize="0.7em"
                fontWeight="semibold"
                align="center"
              >
                Garanties
              </GridItem>
              <GridItem
                ml={{ base: "1.5rem", lg: "0" }}
                colStart={2}
                colEnd={5}
                rowStart={3}
                rowEnd={6}
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/top-left.svg"
                bgRepeat="no-repeat"
                bgPosition="top"
              />
              <GridItem
                colStart={4}
                colEnd={7}
                rowStart={3}
                rowEnd={5}
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/top.svg"
                bgRepeat="no-repeat"
                bgPosition="top"
              />
              <GridItem
                mr={{ base: "1.5rem", lg: "0" }}
                colStart={6}
                colEnd={9}
                rowStart={3}
                rowEnd={6}
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/top-right.svg"
                bgRepeat="no-repeat"
                bgPosition="top"
              />
              <GridItem
                colStart={4}
                colEnd={7}
                rowStart={4}
                rowEnd={7}
                zIndex="1"
              >
                <Flex
                  color="white"
                  bgColor="#a7197f"
                  borderRadius="100%"
                  w="100%"
                  h="100%"
                  m="auto"
                >
                  <Text
                    color="white"
                    alignSelf="center"
                    m="auto"
                    fontWeight="bold"
                    fontSize={{ base: "3xl", md: "4xl" }}
                  >
                    Habble
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                ml={{ base: "1.6rem", lg: "0" }}
                colStart={2}
                colEnd={5}
                rowStart={5}
                rowEnd={8}
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/bottom-left.svg"
                bgRepeat="no-repeat"
                bgPosition="bottom"
              />
              <GridItem
                colStart={4}
                colEnd={7}
                rowStart={6}
                rowEnd={8}
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/bottom.svg"
                bgRepeat="no-repeat"
                bgPosition="bottom"
              />
              <GridItem
                mr={{ base: "1.5rem", lg: "0" }}
                colStart={6}
                colEnd={9}
                rowStart={5}
                rowEnd={8}
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/bottom-right.svg"
                bgRepeat="no-repeat"
                bgPosition="bottom"
              />
              <GridItem
                colStart={1}
                colEnd={4}
                rowStart={8}
                rowEnd={9}
                fontSize="0.7em"
                fontWeight="semibold"
                align="center"
              >
                Informations, conseils
              </GridItem>
              <GridItem
                colStart={4}
                colEnd={7}
                rowStart={8}
                rowEnd={9}
                fontSize="0.7em"
                fontWeight="semibold"
                align="center"
              >
                Coordination
              </GridItem>
              <GridItem
                colStart={7}
                colEnd={10}
                rowStart={8}
                rowEnd={9}
                fontSize="0.7em"
                fontWeight="semibold"
                align="center"
              >
                Objectif, gouvernance
              </GridItem>
              <GridItem colStart={2} colEnd={3} rowStart={9} rowEnd={10}>
                <Button
                  onClick={() => setText(info)}
                  border="1px solid #a7197f"
                  bgColor="white"
                  bgRepeat="no-repeat"
                  bgSize="150%"
                  w="100%"
                  h="100%"
                  bgPosition="center"
                  bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-4.svg"
                  opacity="0.5"
                  _focus={{ opacity: "1" }}
                  _hover={{ opacity: "1" }}
                />
              </GridItem>
              <GridItem colStart={5} colEnd={6} rowStart={9} rowEnd={10}>
                <Button
                  onClick={() => setText(coordination)}
                  border="1px solid #a7197f"
                  bgColor="white"
                  bgRepeat="no-repeat"
                  bgSize="150%"
                  w="100%"
                  h="100%"
                  bgPosition="center"
                  bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-5.svg"
                  opacity="0.5"
                  _focus={{ opacity: "1" }}
                  _hover={{ opacity: "1" }}
                />
              </GridItem>
              <GridItem colStart={8} colEnd={9} rowStart={9} rowEnd={10}>
                <Button
                  onClick={() => setText(goal)}
                  border="1px solid #a7197f"
                  bgColor="white"
                  bgRepeat="no-repeat"
                  bgSize="70%"
                  w="100%"
                  h="100%"
                  bgPosition="center"
                  bgImage="	https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-6.svg"
                  opacity="0.5"
                  _focus={{ opacity: "1" }}
                  _hover={{ opacity: "1" }}
                />
              </GridItem>
            </Grid>
          </Box>
        </Flex>
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
          Les fondateurs
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
          alignItems="center"
          alignSelf="center"
          w={{ base: "100%", lg: "90%" }}
        >
          <Flex
            p="10px"
            flexDirection="column"
            alignItems="center"
            h="fit-content"
            w="fit-content"
          >
            <Box
              role="group"
              h="240px"
              w="293px"
              bgImage="https://app.habble.fr/wp-content/uploads/2020/02/patrice-warembourg-550.jpg"
              bgSize="cover"
              position="relative"
            >
              <Box
                height="0"
                w="100%"
                overflow="hidden"
                transition="all 0.3s ease-in-out"
                mt="240px"
                position="absolute"
                bgColor="rgba(167, 25, 127, 0.9)"
                _groupHover={{
                  height: "100%",
                  mt: "0",
                  p: "50px",
                }}
              >
                <Text textAlign="center" color="white">
                  Conseiller en innovation sociale, ancien directeur médico
                  social.
                </Text>
                <Flex>
                  <Link
                    _hover={{ textDecor: "none" }}
                    href="mailto:patrice@habble.fr"
                  >
                    <Image src="" />
                  </Link>
                  <Link
                    _hover={{ textDecor: "none" }}
                    href="https://www.linkedin.com/in/patrice-warembourg-44109319/"
                  >
                    <Image src="" />
                  </Link>
                </Flex>
              </Box>
            </Box>
            <Text color="#342c50">Patrice Warembourg</Text>
            <Text color="#a5a5a5">Co-fondateur</Text>
            <Text color="#342c50">Stratégie et Développement</Text>
          </Flex>
          <Flex
            p="10px"
            flexDirection="column"
            alignItems="center"
            h="fit-content"
            w="fit-content"
          >
            <Box
              role="group"
              h="240px"
              w="293px"
              bgImage="https://app.habble.fr/wp-content/uploads/2020/01/francois-duforest.jpg"
              bgSize="cover"
              position="relative"
            >
              <Box
                height="0"
                w="100%"
                overflow="hidden"
                transition="all 0.3s ease-in-out"
                mt="240px"
                position="absolute"
                bgColor="rgba(167, 25, 127, 0.9)"
                _groupHover={{
                  height: "100%",
                  mt: "0",
                  p: "50px",
                }}
              >
                <Text textAlign="center" color="white">
                  Consultant digital
                </Text>
                <Flex>
                  <Link _hover={{ textDecor: "none" }} href="envoie mail">
                    <Image src="" />
                  </Link>
                  <Link
                    _hover={{ textDecor: "none" }}
                    href="https://www.linkedin.com/in/francois-duforest/"
                  >
                    <Image src="" />
                  </Link>
                </Flex>
              </Box>
            </Box>
            <Text color="#342c50">François Duforest</Text>
            <Text color="#a5a5a5">Co-fondateur</Text>
            <Text color="#342c50">Direction technique</Text>
          </Flex>
        </Flex>
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
          justifyContent="space-around"
          alignSelf="center"
          flexWrap="wrap"
          w="90%"
        >
          <Image
            src={evident}
            alt="logo evident"
            w="200px"
            m="1rem"
            h="100px"
            alignSelf="center"
          />

          <Image
            alignSelf="center"
            src={reseauEntreprendre}
            alt="logo reseau entreprendre"
            w="216px"
            h="56px"
            m="1rem"
          />
          <Image src={LogoCommunaute} alt="logo evident" w="120px" m="1rem" />
        </Flex>
      </Flex>
      <Footer />
    </div>
  );
}

export default Mission;
