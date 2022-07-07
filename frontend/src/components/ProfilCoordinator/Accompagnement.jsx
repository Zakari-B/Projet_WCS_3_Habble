import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { addToList } from "../../services/ProfileProUtils";
import backendAPI from "../../services/backendAPI";

export default function Accompagnement() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [guardian, setGuardian] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [disability, setDisability] = useState("");
  const [information, setInformation] = useState("");
  const [family, setFamily] = useState([]);
  const { coordinatorId } = useParams();

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleGuardian = (e) => {
    setGuardian(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDisability = (e) => {
    setDisability(e.target.value);
  };
  const handleInformations = (e) => {
    setInformation(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToList("coordinators", "famille", coordinatorId, {
      firstname,
      lastname,
      legalGuardian: guardian,
      address,
      phoneNumber,
      email,
      disabilityType: disability,
      complementary_info: information,
    })
      .then(() => {
        toast({
          title: "Votre famille a bien été ajoutée",
          status: "success",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Votre famille n'a pas pu être ajoutée",
          status: "error",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        });
      });
    onClose();
  };

  useEffect(() => {
    backendAPI
      .get(`/api/coordinators/${coordinatorId}/familles`)
      .then((res) => setFamily(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
      gap="40px"
    >
      <Flex justify="space-between" direction="column">
        <Heading
          as="h2"
          color="purple.light"
          fontSize="1.5em"
          fontWeight="700"
          paddingBottom="2rem"
        >
          Mes accompagnements
        </Heading>
        <VStack alignItems="left">
          {family.length === 0 ? (
            <Text color="purple.average" fontSize="14px">
              Vous n'avez pas encore créé de famille.
            </Text>
          ) : (
            family.map((fam) => {
              return (
                <Text color="purple.average" fontSize="14px">
                  {fam.firstname} {fam.lastname}
                </Text>
              );
            })
          )}
        </VStack>

        <Button variant="solid_PrimaryColor" onClick={onOpen} mt="1rem">
          Ajouter un accompagnement
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxWidth={{ base: "95%", lg: "50vw" }}>
            <ModalHeader
              bgColor="background.gray"
              pt="30px"
              pb="40px"
              paddingX="50px"
            >
              Ajout d'un nouvel accompagnement
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody p="1rem">
              <FormControl>
                <FormLabel
                  htmlFor="lastname"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                >
                  Nom de la famille concernée *
                </FormLabel>
                <Input
                  w={{ base: "95%", lg: "65%" }}
                  type="text"
                  lastname={lastname}
                  placeholder="Nom de famille"
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
                  onChange={handleLastname}
                />
                <FormLabel
                  htmlFor="firstname"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                  mt="1rem"
                >
                  Prénom de la personne à accompagner *
                </FormLabel>
                <Input
                  w={{ base: "95%", lg: "65%" }}
                  type="text"
                  firstname={firstname}
                  placeholder="Prénom de la personne"
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
                  onChange={handleFirstname}
                />
                <FormLabel
                  htmlFor="names"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                  mt="1rem"
                >
                  Nom et prénom du représentant légal *
                </FormLabel>
                <HStack>
                  <Input
                    w={{ base: "95%", lg: "65%" }}
                    type="text"
                    lastname={guardian}
                    placeholder="Nom et prénom du représentant"
                    _placeholder={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      color: "gray",
                    }}
                    onChange={handleGuardian}
                  />
                </HStack>
                <FormLabel
                  htmlFor="address"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                  mt="1rem"
                >
                  Adresse de la personne à accompagner *
                </FormLabel>
                <Input
                  w={{ base: "95%", lg: "65%" }}
                  type="text"
                  address={address}
                  placeholder="Adresse de la personne"
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
                  onChange={handleAddress}
                />
                <FormLabel
                  htmlFor="number"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                  mt="1rem"
                >
                  Numéro de téléphone de la personne à accompagner *
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon width="4rem">+33</InputLeftAddon>
                  <Input
                    w={{ base: "calc(95% - 4rem)", lg: "calc(65% - 4rem)" }}
                    type="tel"
                    phone={phoneNumber}
                    id="contactPhone"
                    name="Phone"
                    placeholder=""
                    onChange={handlePhoneNumber}
                  />
                </InputGroup>
                <FormLabel
                  htmlFor="name"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                  mt="1rem"
                >
                  Email de la personne à accompagner *
                </FormLabel>
                <Input
                  w={{ base: "95%", lg: "65%" }}
                  type="email"
                  email={email}
                  placeholder="Adresse mail de la personne"
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
                  onChange={handleEmail}
                />
                <FormLabel
                  htmlFor="name"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                  mt="1rem"
                >
                  Type de handicap *
                </FormLabel>
                <Select
                  w={{ base: "95%", lg: "65%" }}
                  type="handicap"
                  disability={disability}
                  placeholder="Handicap de la personne"
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
                  onChange={handleDisability}
                >
                  <option>Handicap moteur</option>
                  <option>Handicap visuel</option>
                  <option>Handicap auditif</option>
                  <option>Handicap psychique</option>
                  <option>Handicap mental</option>
                  <option>Maladies invalidantes</option>
                </Select>
              </FormControl>
              <FormLabel
                htmlFor="name"
                fontSize="md"
                fontWeight="800"
                color="purple.average"
                mt="1rem"
              >
                Informations complémentaires
              </FormLabel>
              <Textarea
                w={{ base: "95%", lg: "65%" }}
                type="email"
                informations={information}
                placeholder="Informations complémentaires que vous voulez ajouter"
                _placeholder={{
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  color: "gray",
                }}
                onChange={handleInformations}
              />
            </ModalBody>

            <ModalFooter justifyContent={{ base: "center", md: "flex-end" }}>
              <Button
                variant="solid_PrimaryColor"
                mr={3}
                onClick={handleSubmit}
              >
                Enregistrer
              </Button>
              <Button variant="ghost" fontWeight="700" onClick={onClose}>
                Annuler
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
}
