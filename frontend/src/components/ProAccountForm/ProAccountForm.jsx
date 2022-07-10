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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  TagCloseButton,
  Textarea,
  Checkbox,
  Tag,
  TagLeftIcon,
  Link,
  useToast,
  InputGroup,
  IconButton,
  InputLeftElement,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { MdRoom } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Services from "./Services";
import Epertises from "./Expertises";
import PictureProfilePro from "./PictureProfilPro";
import backendAPI from "../../services/backendAPI";

export default function ProAccountForm() {
  const navigate = useNavigate();
  const toast = useToast();
  const { freelancerId } = useParams();
  // useState pour chaque input //
  const [user, setUser] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [activityPro, setActivityPro] = useState("");
  const [phonePro, setPhonePro] = useState("");
  const [experienceYearPro, setExperienceYearPro] = useState();
  const [pricePro, setPricePro] = useState();
  const [descriptionPro, setDescriptionPro] = useState("");
  const [acceptEmailPro, setAcceptEmailPro] = useState(false);
  const [siretPro, setSiretPro] = useState();

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
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  // Appel axios pour récuperer un user

  const getOneUser = () => {
    backendAPI.get(`/api/freelancers/${freelancerId}/user`).then((response) => {
      setUser(response.data);
      setDisplayName(
        response.data.freelancer[0].displayName === "undefined"
          ? ""
          : response.data.freelancer[0].displayName
      );
      setActivityPro(
        response.data.freelancer[0].activityDescription === "undefined"
          ? ""
          : response.data.freelancer[0].activityDescription
      );
      setCityPro(
        response.data.freelancer[0].zipCode === "undefined"
          ? ""
          : response.data.freelancer[0].zipCode
      );
      setPhonePro(response.data.freelancer[0].phone);
      setExperienceYearPro(
        response.data.freelancer[0].experienceYear === 0
          ? ""
          : response.data.freelancer[0].experienceYear
      );
      setPricePro(
        response.data.freelancer[0].price === 0
          ? ""
          : response.data.freelancer[0].price
      );
      setDescriptionPro(
        response.data.freelancer[0].description === "undefined"
          ? ""
          : response.data.freelancer[0].description
      );
      setAcceptEmailPro(response.data.freelancer[0].acceptEmail);
      setSiretPro(response.data.freelancer[0].siret);
    });
  };

  useEffect(() => {
    getOneUser();
  }, []);

  // Appel axios pour mettre à jour le freelancer avec ses informations et le user associé si profil complet

  const updateFreelancerCompletedProfile = (e) => {
    e.preventDefault();
    const userId = user.id;
    backendAPI
      .put(`/api/freelancers/${freelancerId}`, {
        displayName,
        activityDescription: activityPro,
        zipCode: cityPro,
        phone: phonePro,
        experienceYear: experienceYearPro,
        price: pricePro,
        description: descriptionPro,
        acceptEmails: acceptEmailPro,
        siret: siretPro,
        available: false,
        // picture: picturePro,
      })
      .then((response) => {
        backendAPI.put(`/api/users/${userId}`, {
          profileIsComplete: true,
        });
        if (response) {
          toast({
            title: "Vos données ont bien été enregistrées.",
            description: "Bienvenue sur votre profil !",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
          navigate(`/profil/${freelancerId}`);
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

  // Appel axios pour mettre à jour le freelancer avec ses informations si profil incomplet

  const updateFreelancerUncompletedProfile = (e) => {
    e.preventDefault();
    backendAPI
      .put(`/api/freelancers/${freelancerId}`, {
        displayName: displayName === "" ? "undefined" : displayName,
        activityDescription: activityPro === "" ? "undefined" : activityPro,
        zipCode: cityPro === "" ? "undefined" : cityPro,
        phone: phonePro,
        experienceYear: experienceYearPro === "" ? 0 : experienceYearPro,
        price: pricePro === "" ? 0 : pricePro,
        description: descriptionPro === "" ? "undefined" : descriptionPro,
        acceptEmails: acceptEmailPro,
        siret: siretPro,
        available: false,
        // picture: picturePro,
      })
      .then((response) => {
        if (response) {
          toast({
            title: "Vos données ont bien été sauvgardées.",
            description: "N'hésitez pas à revenir completer votre profil !",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
        navigate("/");
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
                {/* <Input
                  type="text"
                  id="proFormCity"
                  name="city"
                  placeholder="Veuillez saisir un code postal et selectionnez une ville dans la liste"
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
                  value={cityPro}
                  onChange={(e) => setCityPro(e.target.value)}
                /> */}
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
                                  setCityPro(city.properties.citycode);
                                  setCityProName(city.properties.name);
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
            <PictureProfilePro user={user} />
          </Flex>
          <FormControl>
            <Flex direction="column" rowGap="5" mt="1rem">
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
                >
                  Depuis combien d'années exercez-vous ? *
                </FormLabel>
                <Flex justifyContent="left" gap="3">
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
                >
                  Quel est le prix moyen de vos prestations ? *
                </FormLabel>
                <Flex justifyContent="left" gap="3">
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

              <FormLabel
                htmlFor="services"
                fontSize="md"
                fontWeight="800"
                color="purple.average"
              >
                Sélectionnez un ou plusieurs services que vous proposez *
              </FormLabel>
              <Services />
            </Flex>
          </FormControl>
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
          <Epertises />
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
            onClick={updateFreelancerCompletedProfile}
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
            onClick={updateFreelancerUncompletedProfile}
          >
            Sauvegarder les informations
          </Button>
          <Link
            href="/"
            textAlign="left"
            fontSize="xs"
            fontWeight="600"
            w="100px"
          >
            Annulez
          </Link>
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
