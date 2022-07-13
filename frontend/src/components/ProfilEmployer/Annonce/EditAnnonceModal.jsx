/* eslint-disable no-lone-blocks */
import axios from "axios";
import { useState, useEffect, useRef } from "react";
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
  Tag,
  TagLeftIcon,
  TagCloseButton,
  InputGroup,
  InputLeftElement,
  List,
  IconButton,
  ListItem,
  Select,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Search2Icon } from "@chakra-ui/icons";
import { MdRoom } from "react-icons/md";
import backendAPI from "../../../services/backendAPI";
import Services from "./Services";
import Lieux from "./Lieux";

export default function EditAnnonceModal({
  isOpen,
  onClose,
  annonce,
  updated,
  setUpdated,
}) {
  const { employerId, coordinatorId } = useParams();
  const toast = useToast();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [emergency, setEmergency] = useState(false);
  const [status, setStatus] = useState("");

  const [search, setSearch] = useState("");
  const [cityPro, setCityPro] = useState("");
  const [cityProName, setCityProName] = useState("");
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    backendAPI.get(`/api/annonces/${annonce.id}`).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setEmergency(res.data.emergency);
    });

    backendAPI.get(`/api/annonces/${annonce.id}/city`).then((response) => {
      setCityPro(response.data[0].zipCode);
      setCityProName(response.data[0].ville_nom);
    });
  }, []);

  const getAddressList = (signal) => {
    axios
      .get(
        `https://api-adresse.data.gouv.fr/search/?q=${search}&type=municipality&autocomplete=1&limit=3`,
        { signal }
      )
      .then((response) => {
        setAddressList(response.data.features);
      });
  };
  const previousController = useRef();

  useEffect(() => {
    if (search.length >= 1) {
      if (previousController.current) {
        previousController.current.abort();
      }
      const controller = new AbortController();
      const { signal } = controller;
      previousController.current = controller;
      getAddressList(signal);
    }
  }, [search]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (employerId === "undefined") {
      backendAPI
        .put(`/api/coordinator/${coordinatorId}/annonce/${annonce.id}`, {
          title,
          description,
          zipCode: cityPro,
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
    }
    if (coordinatorId === "undefined") {
      backendAPI
        .put(`/api/employers/${employerId}/annonce/${annonce.id}`, {
          title,
          description,
          zipCode: cityPro,
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
    }

    onClose();
    setUpdated(!updated);
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
    setEmergency(e.target.checked);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
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
          <Box h="auto">
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
                    htmlFor="city"
                    fontSize="md"
                    fontWeight="800"
                    color="purple.average"
                  >
                    Où avez-vous besoin de soutien ? *{" "}
                  </FormLabel>

                  {!cityProName ? (
                    <Flex direction="column" w="100%">
                      <InputGroup
                        display="flex"
                        alignItems="center"
                        marginBottom="5px"
                      >
                        <InputLeftElement
                          pointerEvents="none"
                          display="flex"
                          alignItems="center"
                          h="100%"
                        >
                          <IconButton
                            variant="unstyled"
                            color="gray.500"
                            aria-label="Search database"
                            icon={<Search2Icon />}
                          />
                        </InputLeftElement>
                        <Input
                          type="search"
                          id="proFormCity"
                          name="city"
                          variant="outline"
                          autocomplete="off"
                          bgColor="white"
                          h="50px"
                          fontSize="0.9rem"
                          fontWeight="400"
                          placeholder="Veuillez saisir un code postal et selectionnez une ville dans la liste"
                          value={search}
                          onChange={handleSearch}
                        />
                      </InputGroup>

                      {addressList.length !== 0 && search !== "" && (
                        <List
                          bg="white"
                          width="100%"
                          borderRadius="4px"
                          overflow="hidden"
                          zIndex="997"
                          boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
                          border="1px solid #ededed"
                        >
                          <Flex direction="column" w="-webkit-fill-available">
                            {addressList.map((city) => (
                              <ListItem
                                onClick={() => {
                                  if (city.properties.citycode) {
                                    setCityProName(city.properties.name);
                                    setCityPro(city.properties.citycode);
                                    setSearch("");
                                  }
                                }}
                              >
                                <Flex
                                  direction="row"
                                  p={5}
                                  w="100%"
                                  align="center"
                                >
                                  <Flex
                                    pl="20px"
                                    justifyContent="space-between"
                                    width="100%"
                                    alignItems="center"
                                  >
                                    <Flex
                                      direction="column"
                                      alignItems="flex-start"
                                    >
                                      <Text
                                        fontSize="lg"
                                        align="left"
                                        color="purple.dark"
                                        _groupHover={{
                                          color: "pink.light",
                                          fontWeight: "700",
                                        }}
                                      >
                                        {city.properties.name} (
                                        {city.properties.postcode})
                                      </Text>
                                      <Text
                                        fontSize="md"
                                        align="left"
                                        color="purple.dark"
                                      >
                                        {city.properties.context}
                                      </Text>
                                    </Flex>
                                  </Flex>
                                </Flex>
                              </ListItem>
                            ))}
                          </Flex>
                        </List>
                      )}
                    </Flex>
                  ) : (
                    <Tag
                      variant="solid"
                      bgColor="pink.light"
                      size="lg"
                      w="fit-content"
                    >
                      <TagLeftIcon as={MdRoom} />
                      {cityProName}
                      <TagCloseButton
                        onClick={() => {
                          setCityPro("");
                          setCityProName("");
                          setSearch("");
                        }}
                      />
                    </Tag>
                  )}
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
                  <Flex direction="column" w="100%">
                    <Lieux annonce={annonce} />
                    <FormLabel
                      paddingTop="5%"
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
                          onChange={updateEmergency}
                          isChecked={!!emergency}
                        >
                          <Text fontSize="sm">Oui</Text>
                        </Checkbox>
                        <FormLabel
                          paddingTop="5%"
                          fontSize="sm"
                          fontWeight="800"
                          color="purple.average"
                        >
                          Changer le statut
                        </FormLabel>
                        <Select
                          border="none"
                          type="text"
                          id="status"
                          name="status"
                          fontSize="0.8rem"
                          fontWeight="500"
                          color="gray"
                          placeholder="Modifier le statut de l'annonce"
                          onChange={handleStatus}
                        >
                          <option value="En cours">En cours</option>
                          <option value="En suspens">En suspens</option>
                          <option value="Finie">Finie</option>
                        </Select>
                      </Flex>
                    </CheckboxGroup>
                  </Flex>
                </Flex>
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
