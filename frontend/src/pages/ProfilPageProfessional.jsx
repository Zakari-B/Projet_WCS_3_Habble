import {
  Flex,
  Box,
  Heading,
  Button,
  useDisclosure,
  Select,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Switch,
  FormControl,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import UploadedDocs from "../components/UploadedDocs";

export default function Confidentialite() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [available, setAvailable] = useState(false);
  const fakeData = ["fakeDataA", "fakeDataB", "fakeDataC"];
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} />
      <Flex bgColor="background.gray" direction="column" justify="flex-start">
        <Flex
          w="70%"
          height="500px"
          direction="column"
          alignSelf="center"
          marginTop="30px"
          boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
        >
          <Flex
            bgColor="white"
            height="15%"
            p="20px"
            borderRadius="25px 25px 0 0"
          >
            <FormControl display="flex" alignItems="center">
              <Switch
                colorScheme="pink"
                id="availabilityToggle"
                onChange={() => setAvailable(!available)}
              />
              <FormLabel htmlFor="availabilityToggle" mb="0">
                {available ? (
                  <Flex alignItems="center">
                    <Text fontSize="1.2rem" fontWeight="700">
                      &nbsp; Disponible{" "}
                    </Text>
                    <Text fontWeight="500">
                      &nbsp; - Vous pouvez être contacté et recevoir des
                      demandes
                    </Text>
                  </Flex>
                ) : (
                  <Flex alignItems="center">
                    <Text fontSize="1.2rem" fontWeight="700">
                      &nbsp; Indisponible
                    </Text>
                    <Text fontWeight="500">
                      &nbsp; - Vous ne pouvez pas être contacté et recevoir des
                      demandes
                    </Text>
                  </Flex>
                )}
              </FormLabel>
            </FormControl>
          </Flex>
          <Flex bgColor="purple.average" minH="60%" p="10px">
            <Flex m="30px" minW="250px" w="15%" alignItems="center">
              <Image
                boxSize="200px"
                borderRadius="50%"
                objectFit="cover"
                src="https://app.habble.fr/wp-content/uploads/2020/02/patrice-warembourg-550.jpg"
                alt="Avatar utilisateur"
              />
            </Flex>
            <Flex direction="column" w="40%" margin="auto 0">
              <Text fontSize="2rem" fontWeight="700" color="white">
                [[USERNAME]]
              </Text>
              <Text
                fontSize="1.5rem"
                fontWeight="700"
                color="white"
                marginBottom="20px"
              >
                [[PROFESSION]] à [[CP]] [[VILLE]]
              </Text>
              <Text color="white" marginBottom="20px">
                [[EXPERIENCE]]d'expérience
              </Text>
              <Text color="white" marginBottom="20px">
                Membre depuis [[DATE INSCRIPTION]]
              </Text>
              <Text color="white">[[VIGNETTES SERVICES PROPOSES]]</Text>
            </Flex>
            <Flex
              direction="column"
              p="10px"
              gap={5}
              margin="0 0 0 auto"
              w="25%"
            >
              <Button marginTop="10px" variant="solid_PrimaryColor">
                Modifier
              </Button>
              <Button variant="outlineWhite">Voir mon profil en ligne</Button>
            </Flex>
          </Flex>
          <Flex
            bgColor="lightgray"
            direction="column"
            minH="25%"
            p="20px"
            borderRadius="0 0 25px 25px"
          >
            <Text fontWeight="700" fontSize="1.2rem" p="5px">
              À propos de [[USERNAME]]
            </Text>
            <Text p="5px">[[Description au choix de l'utilisateur]]</Text>
          </Flex>
        </Flex>
        <Flex w="70%" gap="20px" m="auto" paddingY="30px">
          <Flex bgColor="red" minW="33%" minH="20vh" />
          <Flex bgColor="blue" minW="66%">
            <Flex
              direction="column"
              bgColor="white"
              boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
              p="25px"
              borderRadius="21px"
              minW="100%"
              gap="40px"
            >
              <Flex justify="space-between" alignItems="center">
                <Heading
                  as="h2"
                  color="purple.light"
                  fontSize="2em"
                  fontWeight="700"
                >
                  Documents
                </Heading>
                <Button variant="outline_Pink" onClick={onOpen}>
                  Ajouter
                </Button>
              </Flex>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxWidth="50vw">
                  <ModalHeader
                    bgColor="background.gray"
                    pt="30px"
                    pb="40px"
                    paddingX="50px"
                  >
                    Ajouter un nouveau document
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Heading as="h2" fontSize="1.4rem" fontWeight="700">
                      Type de document
                    </Heading>
                    <Select
                      margin="20px auto"
                      id="docType"
                      placeholder="--Choisir--"
                    >
                      <option>Carte d'identité</option>
                      <option>SIRET</option>
                      <option>Casier judiciaire</option>
                      <option>Assurance RCP</option>
                      <option>
                        Certificat de formation aux premiers secours
                      </option>
                      <option>Agrément</option>
                      <option>Diplôme</option>
                      <option>Permis de conduire</option>
                      <option>Autre</option>
                    </Select>
                    <Button
                      variant="outlineAlternative"
                      w="100%"
                      fontWeight="700"
                      onClick={() =>
                        document.getElementById("inputHandler").click()
                      }
                    >
                      <input
                        id="inputHandler"
                        style={{ display: "none" }}
                        type="file"
                      />
                      Télécharger un fichier
                    </Button>

                    <Text color="gray" marginTop="20px">
                      (La taille maximale du fichier est limitée à 10 Mo, les
                      types de fichiers autorisés au format image : png, jpg,
                      jpeg.)
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button variant="solid_PrimaryColor" mr={3}>
                      Enregistrer
                    </Button>
                    <Button variant="ghost" fontWeight="700" onClick={onClose}>
                      Annuler
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Flex
                wrap="wrap"
                direction={{ base: "column", md: "row" }}
                justifyContent="space-evenly"
                alignItems="center"
                alignSelf="center"
                w={{ base: "100%", lg: "90%" }}
                m="auto"
              >
                {fakeData.map((elem) => (
                  <UploadedDocs key={elem} elem={elem} />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
