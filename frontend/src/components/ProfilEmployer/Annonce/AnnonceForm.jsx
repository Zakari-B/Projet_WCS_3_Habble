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
  Textarea,
  Checkbox,
  CheckboxGroup,
  Box,
  useToast,
  Select,
  ListItem,
  IconButton,
  List,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer";
import backendAPI from "../../../services/backendAPI";

export default function AnnonceForm() {
  const toast = useToast();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [locations, setLocations] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [emergency, setEmergency] = useState(false);
  const [servicesList, setServicesList] = useState([]);
  const [serviceName, setServiceName] = useState([]);
  const [serviceNumber, setServiceNumber] = useState([]);

  const [status] = useState("En cours");

  const { employerId, annonceId } = useParams();

  const updateEmergency = (e) => {
    if (e.target.checked) {
      setEmergency(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    backendAPI
      .put(`/api/employers/${employerId}/annonce/${annonceId}`, {
        title,
        description,
        emergency,
        price,
        status,
      })
      .then(() => {
        navigate(`/profil-employer/${employerId}`);
      })
      .then(() =>
        toast({
          title: "Votre annonce a bien été crée",
          status: "success",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        })
      )
      .catch((e) => {
        console.error(e);
        toast({
          title: "Votre annonce n'a pas pu être ajoutée",
          status: "error",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        });
      });
  };

  // axios qui va chercher la liste des services
  const getAllServices = () => {
    backendAPI
      .get("/api/services")
      .then((response) => {
        setServicesList(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  // axios qui va chercher les services d'un freelancer
  const getAllServicesByAnnonce = () => {
    backendAPI
      .get(`/api/employer/${employerId}/annonce/${annonceId}/services`)
      .then((response) => {
        setServiceName(response.data.map((e) => e.fk_services_id.name));
        setServiceNumber(response.data.map((e) => e.fk_services_id.id));
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getAllServices();
    getAllServicesByAnnonce();
  }, []);

  // fonction retrait d'ajout d'un item //
  const addItem = (e) => {
    const nameService = e.target.options[e.target.selectedIndex].text;
    if (nameService !== "" && !serviceName.includes(nameService)) {
      setServiceName([...serviceName, nameService]);
      setServiceNumber([...serviceNumber, e.target.value]);
      backendAPI.post(
        `/api/employer/${employerId}/annonce/${annonceId}/services/${e.target.value}`
      );
    }
  };

  // fonction retrait d'un item //
  const removeItem = (indexToRemove) => {
    const serviceId = serviceNumber.filter(
      (_, index) => index === indexToRemove
    );
    setServiceName([
      ...serviceName.filter((_, index) => index !== indexToRemove),
    ]);
    setServiceNumber([
      ...serviceNumber.filter((_, index) => index !== indexToRemove),
    ]);
    backendAPI.delete(`/api/annonce/${annonceId}/services/${serviceId}`);
  };

  // useState pour chaque input //
  // Constante valeur par défaut //

  // fonction retrait et d'ajout d'une expertise //
  const updateLocation = (e) => {
    if (e.target.checked && !locationList.includes(e.target.value)) {
      setLocationList([...locationList, e.target.value]);
      backendAPI.post(
        `/api/employer/${employerId}/annonce/${annonceId}/locations/${e.target.value}`
      );
    } else if (!e.target.checked) {
      locationList.splice(locationList.indexOf(e.target.value), 1);

      backendAPI.delete(
        `/api/employer/${employerId}/annonce/${annonceId}/locations/${e.target.value}`
      );
    }
  };

  // axios qui va chercher tous les lieux possibles
  const getAllLocations = () => {
    backendAPI
      .get("/api/locations")
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  // axios qui va chercher les services d'un freelancer
  // const getAllLocationsByAnnonce = () => {
  //   backendAPI
  //     .get(`/api/employer/${employerId}/annonce/${annonceId}/locations`)
  //     .then((response) => {
  //       setLocationList(
  //         response.data.map((e) => e.fk_expertise_id.id.toString())
  //       );
  //     })
  //     .catch((error) => {
  //       console.warn(error);
  //     });
  // };

  useEffect(() => {
    getAllLocations();
    // getAllLocationsByAnnonce();
  }, []);

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite={false} isSignUp />
      <Flex bgColor="background.gray" direction="column" justify="flex-start">
        <FormControl
          alignSelf="center"
          dir="column"
          mx="10%"
          my="5%"
          className="employerForm"
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
              fontSize="1.2rem"
              fontWeight="600"
              color="purple.average"
            >
              Détaillez votre besoin et trouvez un professionnel du handicap
              adapté
            </Heading>
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
                onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
              />
              <Text fontSize="xs" as="i" color="gray.400">
                Nous vous invitons à ne pas indiquer de données de santé dans
                votre annonce : antécédents médicaux, maladies, prestations de
                soins réalisés, résultats d’examens, traitements, handicap, etc.
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
                  {serviceName.map((element, index) => (
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
                  {servicesList.map((element) => (
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
                  onChange={(value) => setPrice(parseInt(value, 10))}
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

            <Flex flexDirection="column" gap="5">
              <FormLabel
                htmlFor="expertise"
                fontSize="md"
                fontWeight="800"
                color="purple.average"
              >
                Lieu
              </FormLabel>
              <Flex
                justifyContent="left"
                columnGap="3"
                rowGap="2"
                flexWrap="wrap"
                h="fit-content"
                w="fit-content%"
              >
                {locations.map((element) => (
                  <CheckboxGroup>
                    <Checkbox
                      defaultChecked
                      iconColor="pink.light"
                      colorScheme="white"
                      borderColor="gray"
                      _checked={{ borderColor: "pink.light" }}
                      value={element.id.toString()}
                      onChange={updateLocation}
                    >
                      <Text fontSize="sm">{element.name}</Text>
                    </Checkbox>
                  </CheckboxGroup>
                ))}
              </Flex>
            </Flex>
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

                <Button
                  variant="solid_PrimaryColor"
                  type="submit"
                  marginTop="2rem"
                  onClick={handleSubmit}
                >
                  J'ai terminé, je dépose mon annonce
                </Button>
                <Divider />
                <Text
                  fontSize="xs"
                  fontWeight="800"
                  color="purple.average"
                  align="left"
                >
                  * Champs obligatoires
                </Text>
              </Flex>
            </CheckboxGroup>
          </Stack>
        </FormControl>
      </Flex>
      <Footer />
    </Box>
  );
}