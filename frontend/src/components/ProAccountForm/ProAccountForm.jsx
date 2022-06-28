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
  Link,
  Box,
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
// import { CloseIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import Services from "./Services";
import Epertises from "./Expertises";
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
  const [acceptEmailPro, setAcceptEmailPro] = useState(false);

  const [siretPro, setSiretPro] = useState();

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
        setDisplayName(
          response.data.displayName === "undefined"
            ? ""
            : response.data.displayName
        );
        setActivityPro(
          response.data.activityDescription === "undefined"
            ? ""
            : response.data.activityDescription
        );
        setCityPro(
          response.data.zipCode === "undefined" ? "" : response.data.zipCode
        );
        setPhonePro(response.data.phone);
        setExperienceYearPro(
          response.data.experienceYear === 0 ? "" : response.data.experienceYear
        );
        setPricePro(response.data.price === 0 ? "" : response.data.price);
        setDescriptionPro(
          response.data.description === "undefined"
            ? ""
            : response.data.description
        );
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
    backendAPI.get(`/api/freelancers/${freelancerId}/user`).then((response) => {
      const userId = response.data.id;
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
          if (response) {
            backendAPI.put(`/api/users/${userId}`, {
              profileIsComplete: true,
            });
            navigate(`/profil/freelancer/${freelancerId}`);
          }
        });
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
