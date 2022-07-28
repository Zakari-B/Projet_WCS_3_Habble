import {
  Box,
  Flex,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Checkbox,
  ModalFooter,
  useDisclosure,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function WelcomeInscCoordo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { coordinatorId } = useParams();

  const handleNavigate = () => {
    navigate(`/register-onboarding-coordo/${coordinatorId}`);
  };

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        bgColor="background.gray"
        direction="column"
        justifyContent="flex-start"
        h="90.6vh"
      >
        <Box
          w={{ base: "95%", lg: "65%" }}
          h="auto"
          ml="auto"
          mr="auto"
          mt="8rem"
          mb="1rem"
          p="1rem"
          bgColor="white"
          boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
          borderRadius="25px"
        >
          <Heading
            as="h1"
            fontWeight="700"
            color="purple.average"
            fontSize="3rem"
          >
            Merci pour votre inscription !
          </Heading>
          <Heading
            as="h2"
            fontSize="1.4rem"
            fontWeight="600"
            color="purple.average"
            mt="2rem"
          >
            Il ne vous reste plus qu'à détailler vos prestations pour que votre
            profil professionel soit visible en ligne
          </Heading>
          <Text fontWeight="600" color="purple.average" mt="2rem">
            Vous pourrez ensuite transmettre vos documents (pièce d'identité,
            justificatif de qualification, extrait de casier judiciaire), pour
            que votre profil apparaisse comme vérifié
          </Text>
          <OrderedList
            fontWeight="600"
            color="purple.average"
            pt="3.5rem"
            pl="1.5rem"
          >
            <ListItem pb="0.5rem">Créez votre profil professionnel</ListItem>
            <ListItem pb="0.5rem">Importez vos documents</ListItem>
            <ListItem>
              Faites vérifier votre profil et recevez des propositions de
              mission
            </ListItem>
          </OrderedList>
          <Flex gap="5px" marginTop="30px">
            <Checkbox
              size="lg"
              iconColor="pink.light"
              colorScheme="white"
              borderColor="gray"
              _checked={{ borderColor: "pink.light" }}
              value={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />

            <Text>
              Accepter la{" "}
              <Button variant="link" color="pink.light" onClick={onOpen} is>
                charte de bonne conduite
              </Button>
            </Text>

            <Modal isOpen={isOpen} onClose={onClose} size="6xl">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Charte de l’aidant professionnel</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight="600" color="purple.average">
                    {" "}
                    1# Je veille à comprendre les besoins de la personne et de
                    ses proches, à avoir une posture adaptée :
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Prendre le temps d’échanger avec les familles.
                    </ListItem>{" "}
                    <ListItem>Agir avec tact et courtoisie.</ListItem>{" "}
                    <ListItem>
                      Avoir un langage correct (pas de tutoiement, ni de
                      familiarité́).
                    </ListItem>{" "}
                    <ListItem>Porter une tenue vestimentaire adaptée.</ListItem>{" "}
                    <ListItem>
                      Mettre son téléphone portable en silencieux et de ne
                      l’utiliser qu’en cas de nécessité́ lors de ma mission.
                    </ListItem>{" "}
                  </UnorderedList>
                  <br />
                  <Text fontWeight="600" color="purple.average">
                    {" "}
                    2# Je facilite l’exercice des droits :
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Respecter les habitudes de vie des personnes ainsi que
                      leurs idées (politiques, confessionnelles, etc.).
                    </ListItem>
                    <ListItem>
                      Rendre compte à la famille des activités et des modalités
                      de réalisation de la prestation
                    </ListItem>
                  </UnorderedList>
                  <br />
                  <Text fontWeight="600" color="purple.average">
                    {" "}
                    3# J’organise ma mission et la coordination avec la famille
                    :
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Mettre en œuvre la prestation telle que défini par avec la
                      personne.
                    </ListItem>
                    <ListItem>
                      Avoir les numéros de téléphone utiles en cas de nécessité́
                      (médecin, famille, etc.).
                    </ListItem>
                    <ListItem>
                      Être ponctuel : en cas d’empêchement majeur ou de
                      changement d’horaire, l’aidant s’engage à prévenir
                      immédiatement la famille et/ou personne concernée.
                    </ListItem>
                  </UnorderedList>
                  <br />
                  <Text fontWeight="600" color="purple.average">
                    4# Je respecte les données qui me sont transmises et
                    m’engage à respecter les règles déontologiques :
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Faire preuve d’une discrétion professionnelle sur les
                      conditions matérielles, financières, morales ou physiques
                      de la personne (confidentialité́, intimité́).
                    </ListItem>
                    <ListItem>
                      Observer une neutralité́ religieuse et politique.
                    </ListItem>
                    <ListItem>
                      Alerter systématiquement les proches lorsqu’un évènement
                      survient sur le lieu de travail (changement d’horaires,
                      chute, conflit, etc.).{" "}
                    </ListItem>
                    <ListItem>
                      Signaler tout cas de maltraitance et/ou suspicion de
                      maltraitance aux autorités compétences.{" "}
                    </ListItem>
                    <ListItem>
                      Observer une neutralité́ religieuse et politique.
                    </ListItem>
                  </UnorderedList>
                  <br />
                  <Text fontWeight="600" color="purple.average">
                    5# Je m’interdis :
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      De me faire remplacer de ma propre initiative sans
                      prévenir la personne et ses proches.
                    </ListItem>
                    <ListItem>
                      De prendre une procuration sur le compte de la personne
                      aidée, ou de lui emprunter de l’argent.
                    </ListItem>
                    <ListItem>
                      D’utiliser l’ordinateur ou le téléphone des personnes
                      aidées sans en avoir été́ autorisé au préalable.{" "}
                    </ListItem>
                    <ListItem>
                      D’introduire chez les personnes accompagnées des personnes
                      étrangères (famille, entourage, etc.) · De conserver les
                      clés au-delà̀ du temps nécessaire et de les confier à̀ qui
                      que ce soit.{" "}
                    </ListItem>
                    <ListItem>
                      De fumer au domicile de la personne aidée.
                    </ListItem>
                  </UnorderedList>
                  <br />
                  <Text>
                    Tous les renseignements et informations reçus dans le cadre
                    de la Plateforme Habble sont confidentiels et ne devront en
                    aucun cas être divulgués ni employés à titre personnel.{" "}
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button variant="solid_PrimaryColor" mr={3} onClick={onClose}>
                    Fermer
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
          <Button
            isDisabled={!checked}
            variant="solid_PrimaryColor"
            onClick={handleNavigate}
            mt="2rem"
          >
            Démarrer
          </Button>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
