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
  Avatar,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Link,
  Select,
  Box,
  List,
  ListItem,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
} from "@chakra-ui/react";

import { useParams, useNavigate } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import backendAPI from "../../services/backendAPI";

export default function ProAccountForm() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const { freelancerId } = useParams();
  // useState pour chaque input //
  const [displayName, setDisplayName] = useState("");
  const [activityPro, setActivityPro] = useState("");
  const [cityPro, setCityPro] = useState("");
  const [phonePro, setPhonePro] = useState("");
  const [picturePro, setPicturePro] = useState(
    "https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
  );
  const [experienceYearPro, setExperienceYearPro] = useState();
  const [pricePro, setPricePro] = useState();
  const [descriptionPro, setDescriptionPro] = useState("");
  const [tags, setTags] = useState([]);
  const [acceptEmailPro, setAcceptEmailPro] = useState(false);
  const [expertise, setExpertise] = useState([]);
  const [siretPro, setSiretPro] = useState();

  // fonction retrait d'un item //
  const removeItem = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  // fonction retrait d'ajout d'un item //
  const addItem = (e) => {
    if (e.target.value !== "" && !tags.includes(e.target.value)) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  // fonction retrait et d'ajout d'une expertise //
  const updateExpertise = (e) => {
    if (e.target.checked && !expertise.includes(e.target.value)) {
      setExpertise([...expertise, e.target.value]);
    } else if (!e.target.checked) {
      expertise.splice(expertise.indexOf(e.target.value), 1);
      setExpertise(expertise);
    }
  };
  // fonction d'enregistrement d'une nouvelle image //
  const handleRegisterPicture = () => {
    setPicturePro(picturePro);
    onToggle(!isOpen);
  };

  // Appel axios pour récuperer le displayName du freelancer

  const getOnefreelancer = () => {
    backendAPI
      .get(`/api/freelancers/${freelancerId}`)
      .then((response) => {
        setDisplayName(response.data.displayName);
        setActivityPro(response.data.activityDescription);
        setCityPro(response.data.zipCode);
        setPhonePro(response.data.phone);
        setExperienceYearPro(response.data.experienceYear);
        setPricePro(response.data.price);
        setDescriptionPro(response.data.description);
        setAcceptEmailPro(response.data.acceptEmail);
        setSiretPro(response.data.siret);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => getOnefreelancer(), []);

  // Appel axios pour mettre à jour le freelancer avec ses informations et le user associé si profil complet

  const updateFreelancerCompletedProfile = (e) => {
    e.preventDefault();
    backendAPI.get(`/api/freelancers/${freelancerId}/user`).then(() => {
      // const userId = response.data.id;
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
          picture: picturePro,
        })
        .then(() => {
          // if (response) {
          //   backendAPI.put(`/api/users/${userId}`, {
          //     profileIsComplete: true,
          //   });
          // }
          navigate(`/profil/${freelancerId}`);
        });
    });
  };

  // Appel axios pour mettre à jour le freelancer avec ses informations si profil incomplet

  const updateFreelancerUncompletedProfile = (e) => {
    e.preventDefault();
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
        picture: picturePro,
      })
      .then(() => {
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
                <Input
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
            <VStack align="center" alignSelf="center" mx="auto">
              <Avatar src={picturePro} size="2xl" />
              <Button
                bg="none"
                _hover={{ bg: "none" }}
                color="pink.light"
                fontWeight="800"
                align="center"
                fontSize={{ base: "md", md: "0.8rem" }}
                onClick={onOpen}
              >
                {" "}
                Changer votre photo
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  w="80%"
                  maxW="800px"
                  minH="500px"
                  h="fix-content"
                  borderRadius="25px"
                >
                  <ModalHeader
                    paddingY="30px"
                    color="purple.average"
                    fontWeight="600"
                    fontSize="lg"
                    bgColor="#FAFAFA"
                  >
                    Votre plus beau profil
                    <ModalCloseButton
                      _hover={{ bgColor: "none" }}
                      size="lg"
                      iconColor="#415161"
                      p="30px"
                    />
                  </ModalHeader>
                  <ModalBody>
                    <FormControl>
                      <Box h="150px" alignSelf="left" my="4rem">
                        <Box
                          border="3px solid"
                          borderColor="pink.light"
                          position="absolute"
                          h="150px"
                          w="150px"
                          mx="40%"
                        />
                        <Box h="150px" w="150px" mx="40%">
                          <Image
                            src="https://i.pravatar.cc/300"
                            m="auto"
                            h="150px"
                          />
                        </Box>
                      </Box>
                      <Flex
                        direction="column"
                        alignItems="center"
                        mt="3rem"
                        gap="5"
                      >
                        <Button
                          type="file"
                          bg="none"
                          _hover={{ bg: "none", color: "pink.light" }}
                          color="gray"
                          fontWeight="600"
                          align="center"
                          fontSize={{ base: "md", md: "0.8rem" }}
                          onClick={() =>
                            document.getElementById("inputHandler").click()
                          }
                        >
                          <Input
                            type="file"
                            id="inputHandler"
                            name="name"
                            display="none"
                          />{" "}
                          Télécharger votre nouvelle photo
                        </Button>
                        <Button
                          w="120px"
                          variant="solid_PrimaryColor"
                          type="submit"
                          fontSize="sm"
                          onClick={handleRegisterPicture}
                        >
                          Enregistrer
                        </Button>
                      </Flex>
                    </FormControl>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </VStack>
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
                    value={pricePro}
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
                  <option value="Conseils éducatifs">Conseils éducatifs</option>
                  <option value="Activités ludiques et sportives">
                    Activités ludiques et sportives
                  </option>
                  <option value="Garde d’enfant">Garde d’enfant</option>
                  <option value="Coaching professionnel">
                    Coaching professionnel
                  </option>
                  <option value="Compagnie et support social">
                    Compagnie et support social
                  </option>
                  <option value="Service original">Service original</option>
                  <option value="Aide à domicile">Aide à domicile</option>
                  <option value="Rééducation, paramédical">
                    Rééducation, paramédical
                  </option>
                  <option value="Soins personnels : toilette, habillement, …">
                    Soins personnels : toilette, habillement, …
                  </option>
                  <option value="Soins infirmiers">Soins infirmiers</option>
                  <option value="Aide administrative, démarches, dossiers">
                    Aide administrative, démarches, dossiers
                  </option>
                  <option value="Soutien scolaire">Soutien scolaire</option>
                  <option value="Soutien à la parentalité">
                    Soutien à la parentalité
                  </option>
                  <option value="Soutien psychologique">
                    Soutien psychologique
                  </option>
                  <option value="Transport, logistique, voyage">
                    Transport, logistique, voyage
                  </option>
                  <option value="Santé">Santé</option>
                  <option value="Bien être">Bien être</option>
                  <option value="Aide technique">Aide technique</option>
                  <option value="Agencement PMR">Agencement PMR</option>
                </Select>
              </Box>
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
          <Flex flexDirection="column" gap="5">
            <FormLabel
              htmlFor="expertise"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
            >
              Champs d'expertises (optionnel)
            </FormLabel>
            <FormLabel
              htmlFor="care"
              fontSize="sm"
              fontWeight="800"
              color="purple.average"
            >
              Soins aux personnes agées
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
                  value="Démence"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Démence</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Maladie d'Alzheimer"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Maladie d'Alzheimer</Text>
                </Checkbox>
              </Flex>
            </CheckboxGroup>
            <FormLabel
              htmlFor="chronicDiseases"
              fontSize="sm"
              fontWeight="800"
              color="purple.average"
            >
              Maladies chroniques
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
                  value="Arthrite"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Arthrite</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Asthme"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Asthme</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Diabète"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Diabète</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Maladie respiratoire"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Maladie respiratoire</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Maladie cardiovasculaire"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Maladie cardiovasculaire</Text>
                </Checkbox>
              </Flex>
            </CheckboxGroup>
            <FormLabel
              htmlFor="Disability"
              fontSize="sm"
              fontWeight="800"
              color="purple.average"
            >
              Handicap
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
                  value="Lésion cérébrale acquise"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Lésion cérébrale acquise</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Autisme"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Autisme</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Infirmité motric cérébrale"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Infirmité motric cérébrale</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Syndrome de down (trisomie 21)"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Syndrome de down (trisomie 21)</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Fibrose kystique"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Fibrose kystique</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Épilepsie"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Épilepsie</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Déficience auditive"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Déficience auditive</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Handicap intellectuel"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Handicap intellectuel</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Maladie du motoneurone"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Maladie du motoneurone</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Dystrophie musculaire"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Dystrophie musculaire</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Handicap physique, moteur"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Handicap physique, moteur</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Spina-bifida"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Spina-bifida</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Lésion de la moelle épinière"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Lésion de la moelle épinière</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Handicap visuel"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Handicap visuel</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Handicap auditif"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Handicap auditif</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Trouble DYS"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Trouble DYS</Text>
                </Checkbox>
              </Flex>
            </CheckboxGroup>
            <FormLabel
              htmlFor="mentalHealth"
              fontSize="sm"
              fontWeight="800"
              color="purple.average"
            >
              Santé mentale
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
                  value="Anxiété"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Anxiété</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Trouble bipolaire"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Trouble bipolaire</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Dépression"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Dépression</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Troubles de l'alimentation"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Troubles de l'alimentation</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Trouble de la thésaurisation"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Trouble de la thésaurisation</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Trouble obsessionnel-compulsif (TOC)"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">
                    Trouble obsessionnel-compulsif (TOC)
                  </Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Trouble de stress post-traumatique (TSPT)"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">
                    {" "}
                    Trouble de stress post-traumatique (TSPT)
                  </Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Skizophrénie"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Skizophrénie</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Abus de substances et toxicomanie"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">Abus de substances et toxicomanie</Text>
                </Checkbox>
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value="Trouble de l'attention avec ou sans hyperactivité (TDAH)"
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">
                    {" "}
                    Trouble de l'attention avec ou sans hyperactivité (TDAH)
                  </Text>
                </Checkbox>
              </Flex>
            </CheckboxGroup>
          </Flex>
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
            value={siretPro}
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
