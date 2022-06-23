import {
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Avatar,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import axios from "axios";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

export default function Profil() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { freelancerId } = useParams();

  // useState pour chaque input //
  const [displayName, setDisplayName] = useState("");
  const [activityPro, setActivityPro] = useState("");
  const [cityPro, setCityPro] = useState("");
  const [phonePro, setPhonePro] = useState("");
  const [picturePro, setPicturePro] = useState(
    "https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
  );

  const getOnefreelancer = () => {
    axios
      .get(`http://localhost:5001/api/freelancers/${freelancerId}`)
      .then((response) => {
        setDisplayName(response.data.displayName);
        setActivityPro(response.data.activityDescription);
        setCityPro(response.data.zipCode);
        setPhonePro(response.data.phone);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  // fonction d'enregistrement d'une nouvelle image //
  const handleRegisterPicture = () => {
    setPicturePro(picturePro);
    onToggle(!isOpen);
  };

  useEffect(() => getOnefreelancer(), []);
  return (
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
                    <Image src="https://i.pravatar.cc/300" m="auto" h="150px" />
                  </Box>
                </Box>
                <Flex direction="column" alignItems="center" mt="3rem" gap="5">
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
  );
}
