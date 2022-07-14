import axios from "axios";
import {
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
  TagCloseButton,
  Textarea,
  Checkbox,
  Tag,
  TagLeftIcon,
  useToast,
  InputGroup,
  IconButton,
  InputLeftElement,
  List,
  ListItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { MdRoom } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Services from "../../ProAccountForm/Services";
import Expertises from "../../ProAccountForm/Expertises";
import PictureProfilCoordinator from "./PictureProfilCoordinator";
import backendAPI from "../../../services/backendAPI";

export default function ProAccountFormCoordinator({
  isOpen,
  onModal = false,
  onClose,
  coordinator,
}) {
  const toast = useToast();
  const navigate = useNavigate();
  const { coordinatorId } = useParams();

  // useState pour chaque input //
  const [user, setUser] = useState("");
  const [coordinatorPicture, setCoordinatorPicture] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [activityPro, setActivityPro] = useState("");
  const [phonePro, setPhonePro] = useState("");
  const [descriptionPro, setDescriptionPro] = useState("");
  const [acceptEmailPro, setAcceptEmailPro] = useState(false);
  const [siretPro, setSiretPro] = useState();
  const [experienceYearPro, setExperienceYearPro] = useState();
  const [pricePro, setPricePro] = useState();

  const [cityPro, setCityPro] = useState("");
  const [cityProName, setCityProName] = useState("");
  const [search, setSearch] = useState("");
  const [addressList, setAddressList] = useState([]);

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

  useEffect(() => {
    setDisplayName(coordinator.displayName);
    setActivityPro(coordinator.activityDescription);
    setPhonePro(coordinator.phone);
    setDescriptionPro(coordinator.description);
    setAcceptEmailPro(coordinator.acceptEmails);
    setSiretPro(coordinator.siret);
    setExperienceYearPro(coordinator.experienceYear);
    setPricePro(coordinator.price);
    backendAPI
      .get(`/api/coordinators/${coordinator.id}/city`)
      .then((response) => {
        setCityPro(response.data[0].zipCode);
        setCityProName(response.data[0].ville_nom);
      });
  }, [isOpen]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const getOneUser = () => {
    backendAPI
      .get(`/api/coordinator/${coordinatorId}/user`)
      .then((response) => {
        setUser(response.data);
        setCoordinatorPicture(response.data.coordinator.picture);
        setDisplayName(
          response.data.coordinator.displayName === "undefined"
            ? ""
            : response.data.coordinator.displayName
        );
        setActivityPro(
          response.data.coordinator.activityDescription === "undefined"
            ? ""
            : response.data.coordinator.activityDescription
        );
        setPhonePro(response.data.coordinator.phone);
        setExperienceYearPro(
          response.data.coordinator.experienceYear === 0
            ? ""
            : response.data.coordinator.experienceYear
        );
        setPricePro(
          response.data.coordinator.price === 0
            ? ""
            : response.data.coordinator.price
        );
        setDescriptionPro(
          response.data.coordinator.description === "undefined"
            ? ""
            : response.data.freelcoordinatorancer.description
        );
        setAcceptEmailPro(response.data.coordinator.acceptEmail);
        setSiretPro(response.data.coordinator.siret);
      });
    backendAPI
      .get(`/api/coordinators/${coordinatorId}/city`)
      .then((response) => {
        setCityPro(response.data[0].zipCode);
        setCityProName(response.data[0].ville_nom);
      });
  };

  useEffect(() => {
    getOneUser();
  }, []);

  // Appel axios pour mettre à jour le coordinateur avec ses informations

  const updateCoordinatorProfile = (e) => {
    e.preventDefault();
    const userId = user.id;
    backendAPI
      .put(`/api/coordinators/${coordinatorId}`, {
        displayName,
        activityDescription: activityPro,
        zipCode: cityPro,
        phone: phonePro,
        experienceYear: experienceYearPro,
        price: pricePro,
        description: descriptionPro,
        acceptEmails: acceptEmailPro,
        siret: siretPro,
      })
      .then((response) => {
        backendAPI.put(`/api/users/${userId}`, {
          profileIsComplete: true,
        });
        if (response) {
          toast({
            title: "Vos données ont bien été enregistrées.",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
          if (onModal === false) {
            navigate(`/profil-coordinator/${coordinatorId}`);
          } else {
            onClose();
          }
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

  const updateCoordinatorUncompletedProfile = (e) => {
    e.preventDefault();
    backendAPI
      .put(`/api/coordinators/${coordinatorId}`, {
        displayName: displayName === "" ? "undefined" : displayName,
        activityDescription: activityPro === "" ? "undefined" : activityPro,
        zipCode: cityPro === "" ? "undefined" : cityPro,
        phone: phonePro,
        experienceYear: experienceYearPro === "" ? 0 : experienceYearPro,
        price: pricePro === "" ? 0 : pricePro,
        description: descriptionPro === "" ? "undefined" : descriptionPro,
        acceptEmails: acceptEmailPro,
        siret: siretPro,
      })
      .then((response) => {
        if (response) {
          toast({
            title: "Vos données ont bien été sauvegardées.",
            description: "N'hésitez pas à revenir completer votre profil !",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
        navigate("/logout");
      });
  };

  return (
    <Flex bgColor="background.gray" direction="column" justify="flex-start">
      <FormControl
        alignSelf="center"
        dir="column"
        mx="10%"
        my="5%"
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
          spacing={8}
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
          <Flex direction={{ base: "column-reverse", md: "row" }} rowGap="5">
            <FormControl>
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
                  placeholder="Prénom Nom"
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
                <FormLabel
                  htmlFor="activity"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                >
                  Votre activité *
                </FormLabel>
                <Input
                  type="text"
                  id="proFormActivity"
                  name="activity"
                  placeholder="Titre professionnel"
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
                  value={activityPro}
                  onChange={(e) => setActivityPro(e.target.value)}
                />

                <FormLabel
                  htmlFor="city"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                >
                  Code postal de votre lieu d'intervention *
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
                        zIndex={100}
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
            <PictureProfilCoordinator coordinator={coordinatorPicture} />
          </Flex>
          <FormControl>
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
              value={descriptionPro}
              onChange={(e) => setDescriptionPro(e.target.value)}
            />

            <Flex
              justifyContent="left"
              gap="3"
              flexWrap="wrap"
              h="fit-content"
              w="fit-content%"
            >
              <FormLabel
                htmlFor="experience"
                fontSize="md"
                fontWeight="800"
                color="purple.average"
                my="auto"
                marginTop="2.5rem"
              >
                Depuis combien d'années exercez-vous ? *
              </FormLabel>
              <Flex justifyContent="left" gap="3" marginTop="2rem">
                <NumberInput
                  max={50}
                  min={0}
                  w="80px"
                  value={experienceYearPro}
                  onChange={(value) =>
                    setExperienceYearPro(parseInt(value, 10))
                  }
                >
                  <NumberInputField
                    id="proFormexperience"
                    name="experience"
                    placeholder="7"
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
                  ans d'expérience
                </Text>
              </Flex>
            </Flex>
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
                marginTop="2.5rem"
              >
                Quel est le prix moyen de vos prestations ? *
              </FormLabel>
              <Flex justifyContent="left" gap="3" marginTop="2rem">
                <NumberInput
                  min={0}
                  w="80px"
                  value={pricePro === 0 ? "" : pricePro}
                  onChange={(value) => {
                    setPricePro(parseFloat(value));
                  }}
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
              htmlFor="services"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
              marginTop="2rem"
            >
              Sélectionnez un ou plusieurs services que vous proposez *
            </FormLabel>
            <Services />
          </FormControl>
          {coordinator.acceptEmails ? (
            <Checkbox
              defaultChecked
              iconColor="pink.light"
              colorScheme="white"
              borderColor="gray"
              _checked={{ borderColor: "pink.light" }}
              onChange={() => setAcceptEmailPro(!acceptEmailPro)}
            >
              <Text fontSize="sm">
                {" "}
                Envoyez moi par email les annonces en rapport avec les services
                que je propose
              </Text>
            </Checkbox>
          ) : (
            <Checkbox
              iconColor="pink.light"
              colorScheme="white"
              borderColor="gray"
              _checked={{ borderColor: "pink.light" }}
              onChange={() => setAcceptEmailPro(!acceptEmailPro)}
            >
              <Text fontSize="sm">
                {" "}
                Envoyez moi par email les annonces en rapport avec les services
                que je propose
              </Text>
            </Checkbox>
          )}
          <Expertises />
          <FormLabel
            htmlFor="company"
            fontSize="md"
            fontWeight="800"
            color="purple.average"
          >
            Votre entreprise (optionnel)
          </FormLabel>
          <FormLabel
            htmlFor="siret"
            fontSize="md"
            fontWeight="800"
            color="purple.average"
          >
            SIRET
          </FormLabel>
          <Input
            type="text"
            id="formSiret"
            name="Siret"
            placeholder="Numéro de 14 chiffres"
            _placeholder={{
              fontSize: "0.8rem",
              fontWeight: "500",
              color: "gray",
            }}
            value={siretPro === 0 ? "" : siretPro}
            onChange={(e) => setSiretPro(parseInt(e.target.value, 10))}
          />
          <Text fontSize="xs" color="gray.light">
            Le numéro de Siret est un identifiant de 14 chiffres (exemple :
            12002701600357)
          </Text>

          <Button
            variant="solid_PrimaryColor"
            type="submit"
            onClick={updateCoordinatorProfile}
          >
            Enregistrer
          </Button>
          <Button
            bg="transparent"
            border="2px solid"
            fontWeight="500"
            borderColor="pink.light"
            color="pink.light"
            _hover={{ bgcolor: "white" }}
            type="submit"
            onClick={updateCoordinatorUncompletedProfile}
          >
            Sauvegarder les informations
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
  );
}
