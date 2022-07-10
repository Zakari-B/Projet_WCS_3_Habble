import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Box,
  ModalBody,
  ModalCloseButton,
  Flex,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  FormLabel,
  Input,
  ModalFooter,
  useToast,
  Button,
  Textarea,
  Stack,
  VStack,
  Checkbox,
  CheckboxGroup,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import backendAPI from "../../../services/backendAPI";
import Services from "./Services";
import Lieux from "./Lieux";

export default function EditAnnonceModal({ isOpen, onClose, annonce }) {
  const { employerId } = useParams();
  const toast = useToast();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [emergency, setEmergency] = useState(false);

  const [status] = useState("En cours");

  useEffect(() => {
    backendAPI.get(`/api/annonces/${annonce.id}`).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setEmergency(res.data.emergency);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    backendAPI
      .put(`/api/employers/${employerId}/annonce/${annonce.id}`, {
        title,
        description,
        emergency,
        price,
        status,
      })
      .then(() =>
        toast({
          title: "Votre annonce a bien été modifiée",
          status: "success",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        })
      )
      .catch((e) => {
        console.error(e);
        toast({
          title: "Votre annonce n'a pas pu être modifiée",
          status: "error",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        });
      });
    onClose();
  };

  ///

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (value) => {
    setPrice(parseInt(value, 10));
  };

  const updateEmergency = (e) => {
    if (e.target.checked) {
      setEmergency(true);
    }
  };

  return (
    <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="0px 0px 21px 21px">
        <ModalHeader
          paddingY="30px"
          color="purple.average"
          fontWeight="600"
          fontSize="lg"
          bgColor="#FAFAFA"
        >
          Modifier votre annonce
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingY="30px">
          <Box h="100vh">
            <Flex direction="column" justify="flex-start">
              <Stack
                className="noAccount"
                spacing={8}
                width="95%"
                margin="auto"
                maxW="95%"
              >
                <VStack alignItems="left">
                  <FormLabel
                    htmlFor="name"
                    fontSize="md"
                    fontWeight="800"
                    color="purple.average"
                  >
                    Titre de l'annonce *
                  </FormLabel>
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Résumez votre besoin ici"
                    _placeholder={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      color: "gray",
                    }}
                    value={title}
                    onChange={handleTitleChange}
                  />
                  <FormLabel
                    htmlFor="description"
                    fontSize="md"
                    fontWeight="800"
                    color="purple.average"
                    paddingTop="1.5rem"
                  >
                    Description de l'annonce *
                  </FormLabel>
                  <Textarea
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Bonjour, Je recherche une personne de confiance ayant une expérience avec les troubles autistiques pour mon fils de 9 ans. Il s'agirait de l'aider dans ses activités quotidiennes : retour d'école, devoirs... Merci de me contacter pour plus d'informations. (30 caratères minimum)"
                    _placeholder={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      color: "gray",
                    }}
                    height="10rem"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                  <Text fontSize="xs" as="i" color="gray.400">
                    Nous vous invitons à ne pas indiquer de données de santé
                    dans votre annonce : antécédents médicaux, maladies,
                    prestations de soins réalisés, résultats d’examens,
                    traitements, handicap, etc.
                  </Text>

                  <FormLabel
                    htmlFor="skills"
                    fontSize="md"
                    fontWeight="800"
                    color="purple.average"
                    paddingTop="1.5rem"
                  >
                    Sélectionnez la ou les compétence(s) dont vous pensez avoir
                    besoin * (pas de mauvaises réponses !)
                  </FormLabel>
                  <Services annonce={annonce} />
                  <Text fontSize="xs" as="i" color="gray.400">
                    Si vous ne savez pas ou ne trouvez pas la compétence,
                    sélectionnez "autre" dans la liste
                  </Text>
                </VStack>
                <Flex
                  justifyContent="left"
                  gap="3"
                  flexWrap="wrap"
                  h="fit-content"
                  w="fit-content%"
                >
                  <FormLabel
                    htmlFor="price"
                    fontSize="md"
                    fontWeight="800"
                    color="purple.average"
                    my="auto"
                  >
                    Salaire horaire net proposé (indicatif) *
                  </FormLabel>
                  <Flex justifyContent="left" gap="3">
                    <NumberInput
                      min={0}
                      w="80px"
                      value={price}
                      onChange={handlePriceChange}
                    >
                      <NumberInputField
                        id="proFormPrice"
                        name="price"
                        placeholder="25"
                        fontSize="0.9rem"
                        _placeholder={{ fontSize: "0.9rem" }}
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Text my="auto" fontSize="0.9rem">
                      {" "}
                      €/h (indicatif)
                    </Text>
                  </Flex>
                </Flex>
                <Lieux annonce={annonce} />
                <FormLabel
                  htmlFor="chronicDiseases"
                  fontSize="sm"
                  fontWeight="800"
                  color="purple.average"
                >
                  Demande urgente
                </FormLabel>
                <CheckboxGroup>
                  <Flex
                    justifyContent="left"
                    columnGap="3"
                    rowGap="2"
                    flexWrap="wrap"
                    h="fit-content"
                    w="fit-content%"
                    flexDirection="column"
                  >
                    <Checkbox
                      iconColor="pink.light"
                      colorScheme="white"
                      borderColor="gray"
                      _checked={{ borderColor: "pink.light" }}
                      value="Urgence"
                      onChange={updateEmergency}
                    >
                      <Text fontSize="sm">Oui</Text>
                    </Checkbox>
                  </Flex>
                </CheckboxGroup>
              </Stack>
            </Flex>
          </Box>
        </ModalBody>
        <ModalFooter w="100%" gap="30px" m="auto">
          <Button
            variant="solid_PrimaryColor"
            type="submit"
            onClick={handleSubmit}
          >
            Enregistrer l'annonce
          </Button>
          <Button color="gray.dark" mr={3} onClick={onClose} variant="link">
            Annuler
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
EditAnnonceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
