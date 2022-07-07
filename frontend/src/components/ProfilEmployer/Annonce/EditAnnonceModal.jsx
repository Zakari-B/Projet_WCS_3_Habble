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
  Select,
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
  List,
  Checkbox,
  CheckboxGroup,
  ListItem,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import backendAPI from "../../../services/backendAPI";

export default function EditAnnonceModal({ isOpen, onClose, annonce }) {
  const { employerId, annonceId } = useParams();
  const toast = useToast();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState([]);
  const [emergency, setEmergency] = useState(false);
  const [services, setServices] = useState([]);

  const [status] = useState("En cours");

  useEffect(() => {
    backendAPI.get(`/api/annonces/${annonce.id}`).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPrice(res.data.price);
      // setTags(res.data.tags);
      setLocation(res.data.location);
      setEmergency(res.data.emergency);
      // setServices(res.data.services);
    });
  }, []);

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setPrice("");
    setTags([]);
    setLocation([]);
    setEmergency(false);
    setServices([]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    backendAPI
      .put(`/api/employers/${employerId}/annonce/${annonce.id}`, {
        title,
        description,
        emergency,
        price,
        services,
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
    handleReset();
    onClose();
  };

  ///

  // fonction retrait d'un item //
  const removeItem = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (value) => {
    setPrice(parseInt(value, 10));
  };

  // fonction retrait d'ajout d'un item //
  // const service = (e) => {
  //   if (e.target.value !== "" && !tags.includes(e.target.value)) {
  //     setTags([...tags, e.target.value]);
  //     e.target.value = "";
  //   }
  // };

  // fonction retrait et d'ajout d'une expertise //
  const updateLocation = (e) => {
    if (e.target.checked && !location.includes(e.target.value)) {
      setLocation([...location, e.target.value]);
    } else if (!e.target.checked) {
      location.splice(location.indexOf(e.target.value), 1);
      setLocation(location);
    }
  };

  const updateEmergency = (e) => {
    if (e.target.checked) {
      setEmergency(true);
    }
  };

  const getAllServices = () => {
    backendAPI
      .get("/api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getAllServices();
  }, []);

  const addItem = (e) => {
    const nameService = e.target.options[e.target.selectedIndex].text;
    if (nameService !== "" && !tags.includes(nameService)) {
      setTags([...tags, nameService]);
      backendAPI.post(
        `/api/employer/${employerId}/annonce/${annonceId}/services/${e.target.value}`
      );
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
                  <Box
                    borderColor="gray.200"
                    borderWidth="1.5px"
                    borderRadius="10px"
                  >
                    <List
                      display="flex"
                      justifyContent="left"
                      columnGap="3"
                      rowGap="2"
                      flexWrap="wrap"
                      h="fit-content"
                      w="fit-content"
                    >
                      {tags.map((element, index) => (
                        <ListItem
                          m="0.2rem"
                          p="0.2rem"
                          bgColor="#f2f5f7"
                          display="flex"
                        >
                          <Text fontSize="0.9rem" fontWeight="400">
                            {element}
                          </Text>
                          <IconButton
                            as={CloseIcon}
                            boxSize="12px"
                            alignSelf="center"
                            _hover={{ bgColor: "none" }}
                            onClick={() => removeItem(index)}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Select
                      border="none"
                      type="text"
                      id="formProService"
                      name="Service"
                      fontSize="0.8rem"
                      fontWeight="500"
                      color="gray"
                      placeholder="Choisissez un ou plusieurs services dans la liste, tapez des mots clés pour filtrer"
                      onChange={addItem}
                      onKeyUp={(event) =>
                        event.key === "Enter" ? addItem(event) : null
                      }
                    >
                      {services.map((element) => (
                        <option value={element.id}>{element.name}</option>
                      ))}
                    </Select>
                  </Box>
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

                <FormLabel
                  htmlFor="care"
                  fontSize="sm"
                  fontWeight="800"
                  color="purple.average"
                >
                  Lieu
                </FormLabel>
                <CheckboxGroup>
                  <Flex
                    justifyContent="left"
                    columnGap="3"
                    rowGap="2"
                    flexWrap="wrap"
                    h="fit-content"
                    w="fit-content%"
                  >
                    <Checkbox
                      iconColor="pink.light"
                      colorScheme="white"
                      borderColor="gray"
                      _checked={{ borderColor: "pink.light" }}
                      value="domicile"
                      onChange={updateLocation}
                    >
                      <Text fontSize="sm">Domicile</Text>
                    </Checkbox>
                    <Checkbox
                      iconColor="pink.light"
                      colorScheme="white"
                      borderColor="gray"
                      _checked={{ borderColor: "pink.light" }}
                      value="École"
                      onChange={updateLocation}
                    >
                      <Text fontSize="sm">École</Text>
                    </Checkbox>
                    <Checkbox
                      iconColor="pink.light"
                      colorScheme="white"
                      borderColor="gray"
                      _checked={{ borderColor: "pink.light" }}
                      value="Travail"
                      onChange={updateLocation}
                    >
                      <Text fontSize="sm">Travail</Text>
                    </Checkbox>
                    <Checkbox
                      iconColor="pink.light"
                      colorScheme="white"
                      borderColor="gray"
                      _checked={{ borderColor: "pink.light" }}
                      value="Hopital"
                      onChange={updateLocation}
                    >
                      <Text fontSize="sm">Hopital</Text>
                    </Checkbox>
                    <Checkbox
                      iconColor="pink.light"
                      colorScheme="white"
                      borderColor="gray"
                      _checked={{ borderColor: "pink.light" }}
                      value="Activités et loisirs"
                      onChange={updateLocation}
                    >
                      <Text fontSize="sm">Activités et loisirs</Text>
                    </Checkbox>
                    <Checkbox
                      iconColor="pink.light"
                      colorScheme="white"
                      borderColor="gray"
                      _checked={{ borderColor: "pink.light" }}
                      value="Autre"
                      onChange={updateLocation}
                    >
                      <Text fontSize="sm">Autre</Text>
                    </Checkbox>
                  </Flex>
                </CheckboxGroup>
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
            Envoyer la proposition
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
