import {
  Flex,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Box,
  Grid,
  GridItem,
  ScaleFade,
} from "@chakra-ui/react";

import admin from "../assets/admin.svg";
import care from "../assets/care.svg";
import education from "../assets/education.svg";
import hBuilding from "../assets/h-building.svg";
import hFamily from "../assets/h-family.svg";
import hServiceWorkers from "../assets/h-service-workers.svg";
import house from "../assets/house.svg";
import listingProsIphone from "../assets/listing-pros-iphone-600x575-2.png";
import reseauEntreprendre from "../assets/logo_horizontal_re_couleur_nord.png";
import evident from "../assets/logo-evident.png";
import psychologyHead from "../assets/psychology-head.svg";
import wheelchairTransport from "../assets/wheelchair_transport.svg";

function Mission() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const coFond1 = useDisclosure();
  const coFond2 = useDisclosure();

  return (
    <div>
      <Flex justifyContent="space-between" pl="1rem" pb="2rem">
        <Flex flexDirection="column" justifyContent="space-around" p="1rem">
          <Heading
            bgGradient="linear(45deg, #4d1582 0%, #a7197f 100%)"
            bgClip="text"
            textAlign="left"
            lineHeight="1.5"
          >
            Habble : votre pouvoir d'agir
          </Heading>
          <Text w="90%" fontSize="2xl" textAlign="left">
            La première plateforme de services gratuite de professionnels du
            handicap et du soin.
          </Text>
          <Flex flexDirection="column" justifyContent="space-around" h="50%">
            <Flex justifyContent="space-around">
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image src={house} alt="house" width="60px" />
                <Text>Soutien a domicile</Text>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image src={care} alt="care" width="60px" />
                <Text>Santé</Text>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image src={psychologyHead} alt="psychologyHead" width="60px" />
                <Text>Bien être</Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-around">
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image src={education} alt="education" width="60px" />
                <Text>Enseignement, Education</Text>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image
                  src={wheelchairTransport}
                  alt="wheelchairTransport"
                  width="60px"
                />
                <Text>Transport, Aides techniques</Text>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image src={admin} alt="admin" width="60px" />
                <Text>Administratif et Social</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Image src={listingProsIphone} alt="listingProsIphone" maxH="90%" />
      </Flex>
      <Flex>
        <Heading>Notre mission</Heading>
        <Text>
          L’objectif de notre service est de favoriser la qualité de vie des
          personnes en situation de handicap ou atteintes de problèmes de santé.
          Il vise à proposer des solutions de répit, d'accompagnement, de soin
          et de soutien. Il référence toutes les ressources nécessaires à
          l’accompagnement : information,aides humaines, techniques et
          technologiques.
        </Text>
        <UnorderedList>
          Habble propose deux services complémentaires :
          <ListItem>
            Habble, application pour faciliter l'autonomie et le droit au repit
            des personnes en situation de handicap et/ou connaissant des
            problèmes de santé. Présentée sous forme d'annuaire, elle permet de
            trouver des intervenants disponibles et compétents pour les
            accompagner ponctuellement ou durablement : garde, aide aux devoirs,
            aide administrative, repas, transport, bien-être... Pour les
            professionnels (libéraux, autoentrepreneurs, société,
            association,...), elle permet de mettre en avant leur savoir faire
            et de faire connaître leur offre de services.
          </ListItem>
          <ListItem>
            Handiplanner, plateforme de services coordonnés dédiée aux acteurs
            du médico social et des services à la personne. Elle vise à
            valoriser leur offre et coordonner les interventions. Elle facilite
            la continuité des accompagnements ainsi que le soutien auprès des
            aidants. Elle est interopérable avec les dossiers de l'usager et les
            outils de gestion préexistants.
          </ListItem>
        </UnorderedList>
        <Text>
          Notre solution permet aux personnes en situation de handicap,
          atteintes de problèmes de santé et à leurs proches de trouver
          simplement une solution d'aide ou de répit adaptée à leur besoins.
          Elle s’appuie sur une plateforme digitale facilitant l’accès aux
          droits et permettant d’apporter un service à la carte (mise en
          relation, coordination des intervenants libéraux, éducatifs, médico
          sociaux, services à la personne, transports spécialisés …). Elle vise
          à mettre en avant les spécificités des acteurs existants et garantir
          le savoir faire des intervenants. Nos prestations permettent en
          corollaire aux travailleurs sociaux, médico sociaux et pédagogiques de
          proposer leur offre de service de manière simple et accessible.
        </Text>
        <Text>
          Les services proposés doivent ainsi permettre sans délai la définition
          d’un plan de compensation en adéquation avec les besoins et capacités
          de la personne en situation de handicap ou atteinte de problèmes de
          santé. Ceux-ci doivent permettre un accompagnement adapté, simple et
          sans délai et enfin faciliter le quotidien de la personne et de son
          proche de soutien.
        </Text>
      </Flex>
      <Flex>
        <Box>
          <Button onClick={onOpen}>
            <Image src={hFamily} alt="hFamily" />
            <Text>
              Vous êtes en situation de handicap, avec un problème santé ou un
              proche aidant
            </Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Heading>
                  Trouvez tous les professionnels du handicap de votre secteur
                  susceptibles de vous accompagner.
                </Heading>
                <Image src={hFamily} alt="hFamily" />
                <Flex>
                  <Flex>
                    <Text>Inscrivez vous et décrivez votre besoin</Text>
                    <Link href="/SignupForm">
                      <Button>M'incrire maintenant</Button>
                    </Link>
                  </Flex>
                  <Flex>
                    <Text>
                      N'hésitez pas également à soutenir le développement de
                      notre service
                    </Text>
                    <Link href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U">
                      <Button>Faire un don</Button>
                    </Link>
                  </Flex>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
        <Box>
          <Button onClick={onOpen}>
            <Image src={hServiceWorkers} alt="hServiceWorkers" />
            <Text>
              Vous êtes un travailleur social, professionnel de santé en libéral
              ou auto-entrepreneur
            </Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Heading>Inscrivez vous et partagez vos compétences</Heading>
                <Image src={hServiceWorkers} alt="hServiceWorkers" />
                <Flex>
                  <Flex>
                    <Text>
                      Renseignez vos disponibilités et trouvez des missions
                    </Text>
                    <Link href="/SignupForm">
                      <Button>M'incrire maintenant</Button>
                    </Link>
                  </Flex>
                  <Flex>
                    <Text>
                      N'hésitez pas également à soutenir le développement de
                      notre service
                    </Text>
                    <Link href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U">
                      <Button>Faire un don</Button>
                    </Link>
                  </Flex>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
        <Box>
          <Button onClick={onOpen}>
            <Image src={hBuilding} alt="hBuilding" />
            <Text>
              Vous êtes un établissement médico social, un service à domicile,
              un fabricant ou distributeur de matériel
            </Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Heading>
                  Valorisez votre offre de service, de prestations ou de vente.
                </Heading>
                <Image src={hBuilding} alt="hBuilding" />
                <Flex>
                  <Flex>
                    <Text>
                      Inscrivez-vous et détaillez vos prestations et services.
                    </Text>
                    <Link href="/SignupForm">
                      <Button>M'incrire maintenant</Button>
                    </Link>
                  </Flex>
                  <Flex>
                    <Text>
                      Vous souhaitez créer votre propre plateforme, nous sommes
                      là pour vous accompagner.
                    </Text>
                    <Link href="/Contact">
                      <Button> Demande de rendez-vous</Button>
                    </Link>
                  </Flex>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
      <Flex>
        <Heading>Pourquoi s'inscrire ?</Heading>
        <Text>
          Notre service de mise en relation est gratuit. Dès votre inscription
          il vous est possible de déposer votre annonce ou de trouver un
          intervenant.
        </Text>
        <Text>
          Pour les professionnels, notre site vous aide à développer votre
          visibilité et faciliter la mise en relation. L’inscription est
          gratuite et aucun frais ne vous sera demandé pour être présent dans
          l’annuaire. Nous vous proposons également des services pour vous
          faciliter le quotidien.
        </Text>
        <Link href="/SignupForm">
          <Button>M'inscrire maintenant</Button>
        </Link>
      </Flex>
      <Flex>
        <Heading>Pourquoi nous aider ?</Heading>
        <Text>
          Aujourd’hui en France, plus de 12 000 000 de personnes souffrent d'un
          handicap ou d'un problème de santé. Plus de 50 000 sont sans solution
          d’accompagnement. Certaines doivent parfois attendre près de 10 ans
          pour trouver un établissement adapté. Beaucoup souhaitent également un
          accompagnement à domicile, souple et adapté. Notre service vise à
          répondre à ces personnes et à leurs proches,à simplifier leur
          quotidien en apportant un accompagnement à la carte. Votre soutien
          vise à accélerer le démarrage du service. Votre aide sert à développer
          la plateforme et informer les personnes en situation de handicap des
          solutions proposées.
        </Text>
        <Link href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U">
          <Button>Faire un don</Button>
        </Link>
      </Flex>
      <Flex>
        <Flex>
          <Heading>Fonctionnalités et principes clés</Heading>
          <Text>BLa</Text>
        </Flex>
        <Grid
          templateColumns="repeat(9, 1fr)"
          templateRows="repeat(8, 1fr)"
          gap="2"
        >
          <GridItem colStart={2} colEnd={3} rowStart={1} rowEnd={2}>
            <Button
              border="1px solid #a7197f"
              bgColor="white"
              bgRepeat="no-repeat"
              bgSize="65px"
              bgPosition="center"
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-1.svg"
              _hover="none"
            />
          </GridItem>
          <GridItem colStart={5} colEnd={6} rowStart={1} rowEnd={2}>
            <Button
              border="1px solid #a7197f"
              bgColor="white"
              bgRepeat="no-repeat"
              bgSize="30px"
              bgPosition="center"
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-2.svg"
              _hover="none"
            />
          </GridItem>
          <GridItem colStart={8} colEnd={9} rowStart={1} rowEnd={2}>
            <Button
              border="1px solid #a7197f"
              bgColor="white"
              bgRepeat="no-repeat"
              bgSize="30px"
              bgPosition="center"
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-3.svg"
              _hover="none"
            />
          </GridItem>
          <GridItem colStart={1} colEnd={4} rowStart={2} rowEnd={3}>
            Trouver un professionnel
          </GridItem>
          <GridItem colStart={4} colEnd={7} rowStart={2} rowEnd={3}>
            Démarches
          </GridItem>
          <GridItem colStart={7} colEnd={10} rowStart={2} rowEnd={3}>
            Garanties
          </GridItem>
          <GridItem
            colStart={2}
            colEnd={4}
            rowStart={3}
            rowEnd={5}
            bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/top-left.svg"
            bgRepeat="no-repeat"
            bgPosition="top"
          />
          <GridItem
            colStart={4}
            colEnd={7}
            rowStart={3}
            rowEnd={4}
            bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/top.svg"
            bgRepeat="no-repeat"
            bgPosition="top"
          />
          <GridItem
            colStart={7}
            colEnd={9}
            rowStart={3}
            rowEnd={5}
            bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/top-right.svg"
            bgRepeat="no-repeat"
            bgPosition="top"
          />
          <GridItem colStart={4} colEnd={7} rowStart={4} rowEnd={6}>
            <Flex
              color="white"
              bgColor="#a7197f"
              borderRadius="100%"
              w="50%"
              h="100%"
              m="auto"
            >
              <Text color="white" alignSelf="center" m="auto">
                Habble
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            colStart={2}
            colEnd={4}
            rowStart={5}
            rowEnd={7}
            bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/bottom-left.svg"
            bgRepeat="no-repeat"
            bgPosition="bottom"
          />
          <GridItem
            colStart={4}
            colEnd={7}
            rowStart={6}
            rowEnd={7}
            bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/bottom.svg"
            bgRepeat="no-repeat"
            bgPosition="bottom"
          />
          <GridItem
            colStart={7}
            colEnd={9}
            rowStart={5}
            rowEnd={7}
            bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/bottom-right.svg"
            bgRepeat="no-repeat"
            bgPosition="bottom"
          />
          <GridItem colStart={1} colEnd={4} rowStart={7} rowEnd={8}>
            Informations, conseils
          </GridItem>
          <GridItem colStart={4} colEnd={7} rowStart={7} rowEnd={8}>
            Coordination
          </GridItem>
          <GridItem colStart={7} colEnd={10} rowStart={7} rowEnd={8}>
            Objectif, gouvernance
          </GridItem>
          <GridItem colStart={2} colEnd={3} rowStart={8} rowEnd={9}>
            <Button
              border="1px solid #a7197f"
              bgColor="white"
              bgRepeat="no-repeat"
              bgSize="65px"
              bgPosition="center"
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-4.svg"
              _hover="none"
            />
          </GridItem>
          <GridItem colStart={5} colEnd={6} rowStart={8} rowEnd={9}>
            <Button
              border="1px solid #a7197f"
              bgColor="white"
              bgRepeat="no-repeat"
              bgSize="65px"
              bgPosition="center"
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-5.svg"
              _hover="none"
            />
          </GridItem>
          <GridItem colStart={8} colEnd={9} rowStart={8} rowEnd={9}>
            <Button
              border="1px solid #a7197f"
              bgColor="white"
              bgRepeat="no-repeat"
              bgSize="30px"
              bgPosition="center"
              bgImage="	https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-6.svg"
              _hover="none"
            />
          </GridItem>
        </Grid>
      </Flex>
      <Flex>
        <Heading>Les fondateurs</Heading>
        <Flex>
          <Flex>
            <Box
              bgImage="https://app.habble.fr/wp-content/uploads/2020/02/patrice-warembourg-550.jpg"
              onClick={coFond1.onToggle}
              bgSize="cover"
            >
              <ScaleFade initialScale={0.9} in={coFond1.isOpen}>
                <Box
                  opacity="0.5"
                  p="40px"
                  color="white"
                  bg="#a7197f"
                  z-index="1"
                  h="100%"
                >
                  <Text>
                    Conseiller en innovation sociale, ancien directeur médico
                    social.
                  </Text>
                  <Link href="envoie mail">
                    <Image src="" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/patrice-warembourg-44109319/">
                    <Image src="" />
                  </Link>
                </Box>
              </ScaleFade>
            </Box>
            <Text>Patrice Warembourg</Text>
            <Text>Co-fondateur</Text>
            <Text>Stratégie et Développement</Text>
          </Flex>
          <Flex>
            <Box
              bgImage="	https://app.habble.fr/wp-content/uploads/2020/01/francois-duforest.jpg"
              onClick={coFond2.onToggle}
              bgSize="cover"
            >
              <ScaleFade initialScale={0.9} in={coFond2.isOpen}>
                <Box
                  opacity="0.5"
                  p="40px"
                  color="white"
                  bg="#a7197f"
                  z-index="1"
                  h="100%"
                >
                  <Text>Consultant digital</Text>
                  <Link href="envoie mail">
                    <Image src="" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/francois-duforest/">
                    <Image src="" />
                  </Link>
                </Box>
              </ScaleFade>
            </Box>
            <Text>François Duforest</Text>
            <Text>Co-fondateur</Text>
            <Text>François Duforest</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Heading>Partenaires et Soutiens</Heading>
        <Flex>
          <Image src={evident} alt="logo evident" />
          <Image src={reseauEntreprendre} alt="logo reseau entreprendre" />
        </Flex>
      </Flex>
    </div>
  );
}

export default Mission;
