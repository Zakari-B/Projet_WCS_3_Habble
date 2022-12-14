import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
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
  HStack,
  Button,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { addToList } from "../../services/ProfileProUtils";

function ModalAddFamily({ updated, setUpdated }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { freelancerId } = useParams();
  const toast = useToast();

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [guardian, setGuardian] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [disability, setDisability] = useState("");
  const [information, setInformation] = useState("");

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

  const handleDefault = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToList("coordinators", "famille", freelancerId, {
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
        setLastname("");
        setFirstname("");
        setGuardian("");
        setAddress("");
        setPhoneNumber("");
        setEmail("");
        setDisability("");
        setInformation("");
        setUpdated(!updated);
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

  return (
    <>
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
            <FormControl onSubmit={handleDefault}>
              <FormLabel
                htmlFor="lastname"
                fontSize="md"
                fontWeight="800"
                color="purple.average"
              >
                Nom de la famille concernée *
              </FormLabel>
              <Input
                name="lastname"
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
                name="firstname"
                value={firstname}
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
                  name="names"
                  w={{ base: "95%", lg: "65%" }}
                  type="text"
                  value={guardian}
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
                name="address"
                value={address}
                placeholder="Adresse de la personne"
                _placeholder={{
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  color: "gray",
                }}
                onChange={handleAddress}
              />
              <FormLabel
                htmlFor="Phone"
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
                  value={phoneNumber}
                  id="contactPhone"
                  name="Phone"
                  placeholder=""
                  onChange={handlePhoneNumber}
                />
              </InputGroup>
              <FormLabel
                htmlFor="email"
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
                name="email"
                value={email}
                placeholder="Adresse mail de la personne"
                _placeholder={{
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  color: "gray",
                }}
                onChange={handleEmail}
              />
              <FormLabel
                htmlFor="handicap"
                fontSize="md"
                fontWeight="800"
                color="purple.average"
                mt="1rem"
              >
                Type de handicap *
              </FormLabel>
              <Select
                w={{ base: "95%", lg: "65%" }}
                name="handicap"
                value={disability}
                _placeholder={{
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  color: "gray",
                }}
                onChange={handleDisability}
              >
                <option
                  value=""
                  disabled
                  selected
                  fontSize="0.8rem"
                  fontWeight="500"
                  color="gray"
                >
                  Sélectionnez le type handicap{" "}
                </option>

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
              value={information}
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
            <Button variant="solid_PrimaryColor" mr={3} onClick={handleSubmit}>
              Enregistrer
            </Button>
            <Button variant="ghost" fontWeight="700" onClick={onClose}>
              Annuler
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalAddFamily;
