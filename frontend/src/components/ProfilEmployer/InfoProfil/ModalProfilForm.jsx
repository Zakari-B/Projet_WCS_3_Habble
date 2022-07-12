import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Flex,
  Heading,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Divider,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import backendAPI from "../../../services/backendAPI";
import PictureProfileEmployer from "./PictureProfilEmployer";

export default function ModalProfilForm({ isOpen, onClose, employer }) {
  const [displayName, setDisplayName] = useState(employer.displayName);
  const [phonePro, setPhonePro] = useState(employer.phone);
  const [description, setDescription] = useState(employer.description);
  const toast = useToast();

  const updateEmployer = (e) => {
    e.preventDefault();
    backendAPI
      .put(`/api/employers/${employer.id}`, {
        displayName,
        phone: phonePro,
        description,
      })
      .then((response) => {
        if (response) {
          toast({
            title: "Vos données ont bien été enregistrées.",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
          onClose();
        }
      })
      .catch((error) => {
        if (error) {
          toast({
            title: "Veuillez renseigner tous les champs obligatoires",
            status: "error",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
        console.warn(error);
      });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier mes informations</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxW="100%">
          <Flex
            bgColor="background.gray"
            direction="column"
            justify="flex-start"
          >
            <FormControl
              alignSelf="center"
              dir="column"
              mx="10%"
              mb="5%"
              className="signupForm"
              bgColor="white"
              maxWidth="900px"
              alignItems="center"
              boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
              borderRadius="25px"
              padding="2%"
            >
              <Stack
                className="noAccount"
                spacing={4}
                width="95%"
                margin="auto"
                maxW="95%"
              >
                <Heading
                  as="h2"
                  textAlign="left"
                  fontSize="1.4rem"
                  fontWeight="600"
                  color="purple.average"
                >
                  Mon profil
                </Heading>
                <Flex
                  direction={{ base: "column-reverse", md: "row" }}
                  rowGap="5"
                >
                  <FormControl alignSelf="center">
                    <VStack alignItems="left" w={{ md: "85%" }}>
                      <FormLabel
                        htmlFor="name"
                        fontSize="md"
                        fontWeight="800"
                        color="purple.average"
                      >
                        Affichage de votre prénom et nom *
                      </FormLabel>
                      <Input
                        type="text"
                        id="proFormName"
                        name="name"
                        placeholder="Name"
                        _placeholder={{
                          fontSize: "0.8rem",
                          fontWeight: "500",
                          color: "gray",
                        }}
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                      <FormLabel
                        htmlFor="phone"
                        fontSize="md"
                        fontWeight="800"
                        color="purple.average"
                      >
                        N° de téléphone
                      </FormLabel>
                      <Input
                        type="text"
                        id="proFormPhone"
                        name="phone"
                        placeholder="Ex: 0672690594"
                        _placeholder={{
                          fontSize: "0.8rem",
                          fontWeight: "500",
                          color: "gray",
                        }}
                        value={phonePro}
                        onChange={(e) => setPhonePro(e.target.value)}
                      />
                    </VStack>
                  </FormControl>
                  <PictureProfileEmployer employer={employer} />
                </Flex>
                <FormLabel
                  htmlFor="presentation"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                >
                  Présentez-vous en quelques mots *
                </FormLabel>
                <Textarea
                  h="auto"
                  placeholder="Bonjour,
                je m'appelle Sandra, j'ai 37 ans. je suis éducatrice spécialisée diplômée, j'ai plusieurs expériences auprès des enfants, des personnes en situation de handicap, des personnes en difficultés sociales. J'ai également de l'expérience dans la garde d'enfants, dans les cours à domicile et le soutien scolaire.
                Je possède deux chats et j'adore m'occuper des animaux. Je possède le permis B.
                (30 caractères minimum)"
                  _placeholder={{
                    lineHeight: "1.5",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Button
                  variant="solid_PrimaryColor"
                  type="submit"
                  onClick={updateEmployer}
                >
                  Enregistrer
                </Button>
                <Button
                  bgColor="white"
                  _hover={{ bgColor: "white" }}
                  onClick={onClose}
                  textAlign="left"
                  fontSize="xs"
                  fontWeight="600"
                  w="100px"
                >
                  Annulez
                </Button>
                <Divider />
                <Text
                  fontSize="xs"
                  fontWeight="800"
                  color="purple.average"
                  align="center"
                >
                  * Champs obligatoires
                </Text>
              </Stack>
            </FormControl>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
