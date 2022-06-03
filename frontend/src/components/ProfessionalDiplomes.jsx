import React, { useState, useEffect } from "react";
import {
  useDisclosure,
  Box,
  Heading,
  Flex,
  HStack,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Collapse,
} from "@chakra-ui/react";
import getDropList from "../services/Utils";

function ProfessionalDiplomes() {
  const [yearList, setYearList] = useState([]);
  const { isOpen, onToggle } = useDisclosure();

  const [title, setTitle] = useState("");
  const [delivered, setDelivered] = useState("");
  const [monthDelivered, setMonthDelivered] = useState("");
  const [yearDelivered, setYearDelivered] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => event.preventDefault();

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleDeliverChange = (e) => {
    setDelivered(e.target.value);
  };
  const handleMonthChange = (e) => {
    setMonthDelivered(e.target.value);
  };
  const handleYearChange = (e) => {
    setYearDelivered(e.target.value);
  };
  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };
  const handleReset = () => {
    setTitle("");
    setDelivered("");
    setMonthDelivered("");
    setYearDelivered("");
    setDescription("");
  };

  useEffect(() => {
    setYearList(getDropList());
  }, []);

  return (
    <Box
      w="100%"
      h="auto"
      backgroundColor="white"
      color="black"
      mt="5rem"
      mb="5rem"
      ml="auto"
      mr="auto"
      borderRadius="12px"
    >
      <Flex justifyContent="space-between">
        <Heading as="h4" mt="2rem" ml="1rem" fontSize="1.5rem" color="#342c50">
          Diplômes, certifications
        </Heading>
        <Button mt="2rem" mr="1rem" variant="outline_Pink" onClick={onToggle}>
          Ajouter
        </Button>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <FormControl ml="1rem" mt="1rem" mb="1rem" onSubmit={handleSubmit}>
          <Flex flexDir="column">
            <Input
              placeholder="Nom de la certification"
              w="65%"
              onChange={handleTitleChange}
              value={title}
            />
            <Input
              placeholder="Délivré par"
              w="65%"
              mt="0.5rem"
              onChange={handleDeliverChange}
              value={delivered}
            />
            <FormLabel
              htmlFor="date"
              fontSize="xl"
              fontWeight="bold"
              lineHeight="28px"
              color="#2F1D2C"
              mt="1rem"
            >
              Date d'obtention
            </FormLabel>
            <HStack>
              <Select
                w="32.1%"
                placeholder="Mois"
                onChange={handleMonthChange}
                value={monthDelivered}
              >
                <option>Janvier</option>
                <option>Février</option>
                <option>Mars</option>
                <option>Avril</option>
                <option>Mai</option>
                <option>Juin</option>
                <option>Juillet</option>
                <option>Août</option>
                <option>Septembre</option>
                <option>Octobre</option>
                <option>Novembre</option>
                <option>Décembre</option>
              </Select>
              <Select
                w="32.1%"
                placeholder="Année"
                onChange={handleYearChange}
                value={yearDelivered}
              >
                {yearList.map((year) => year)}
              </Select>
            </HStack>
            <Textarea
              w="65%"
              mt="0.5rem"
              h="15vh"
              placeholder="Description (optionnel)."
              onChange={handleDescChange}
              value={description}
            />
            <Button w="65%" mt="1rem" variant="solid_PrimaryColor">
              Enregistrer
            </Button>
            <Button
              w="65%"
              mt="1rem"
              variant="solid_SecondaryColor"
              onClick={(onToggle, handleReset)}
            >
              Annuler
            </Button>
          </Flex>
        </FormControl>
      </Collapse>

      {!isOpen && (
        <Text color="#656565" ml="1rem" pb="1rem" fontSize="md" mt="1rem">
          Ajoutez une certification professionnelle à votre profil. (optionnel)
        </Text>
      )}
    </Box>
  );
}

export default ProfessionalDiplomes;
