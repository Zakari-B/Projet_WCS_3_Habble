import React, { useState, useEffect } from "react";
import {
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
  useDisclosure,
} from "@chakra-ui/react";
import getDropList from "../services/Utils";

export default function ProfessionalDiplomes() {
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
    e.preventDefault();
    setDelivered(e.target.value);
  };
  const handleMonthChange = (e) => {
    e.preventDefault();
    setMonthDelivered(e.target.value);
  };
  const handleYearChange = (e) => {
    e.preventDefault();
    setYearDelivered(e.target.value);
  };
  const handleDescChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleChangeForm = () => onToggle(!isOpen);

  const handleReset = () => {
    setTitle("");
    setDelivered("");
    setMonthDelivered("");
    setYearDelivered("");
    setDescription("");
    handleChangeForm();
  };

  useEffect(() => {
    setYearList(getDropList());
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
      <Flex justifyContent="space-between" alignItems="center">
        <Heading
          as="h2"
          color="purple.average"
          fontSize="1.5em"
          fontWeight="700"
        >
          Diplômes, certifications
        </Heading>
        {!isOpen && (
          <Button mt="2rem" mr="1rem" variant="outline_Pink" onClick={onToggle}>
            Ajouter
          </Button>
        )}
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
              onClick={handleReset}
            >
              Annuler
            </Button>
          </Flex>
        </FormControl>
      </Collapse>
      {!isOpen && (
        <Text color="#656565" ml="1rem" pb="1rem" fontSize="md" mt="1rem">
          Ajoutez une certification professionnelle à votre profil. (Optionnel)
        </Text>
      )}
    </Flex>
  );
}
