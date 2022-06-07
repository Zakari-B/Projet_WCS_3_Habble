import React, { useState, useEffect } from "react";
import {
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
  useDisclosure,
  Checkbox,
} from "@chakra-ui/react";
import getDropList from "../services/Utils";

function ProfessionalExperience() {
  const [yearList, setYearList] = useState([]);
  const { isOpen, onToggle } = useDisclosure();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [fromMonth, setFromMonth] = useState("");
  const [fromYear, setFromYear] = useState("");
  const [toMonth, setToMonth] = useState("");
  const [toYear, setToYear] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => event.preventDefault();

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleDeliverChange = (e) => {
    e.preventDefault();
    setCompany(e.target.value);
  };
  const handleFromMonthChange = (e) => {
    e.preventDefault();
    setFromMonth(e.target.value);
  };
  const handleFromYearChange = (e) => {
    e.preventDefault();
    setFromYear(e.target.value);
  };
  const handleToMonthChange = (e) => {
    e.preventDefault();
    setToMonth(e.target.value);
  };
  const handleToYearChange = (e) => {
    e.preventDefault();
    setToYear(e.target.value);
  };
  const handleDescChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleChangeForm = () => onToggle(!isOpen);

  const handleReset = () => {
    setTitle("");
    setCompany("");
    setFromMonth("");
    setFromYear("");
    setToMonth("");
    setToYear("");
    setDescription("");
    handleChangeForm();
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
          Expériences professionnelles
        </Heading>
        <Button mt="2rem" mr="1rem" variant="outline_Pink" onClick={onToggle}>
          Ajouter
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <FormControl
          ml="1rem"
          mt="1rem"
          mb="1rem"
          onSubmit={handleSubmit}
          transition="all 0.3s ease-in-out"
        >
          <Flex flexDir="column">
            <Input
              placeholder="Titre"
              w="65%"
              onChange={handleTitleChange}
              value={title}
            />
            <Input
              placeholder="Entreprise"
              w="65%"
              mt="0.5rem"
              onChange={handleDeliverChange}
              value={company}
            />
            <FormLabel
              htmlFor="date"
              fontSize="xl"
              fontWeight="bold"
              lineHeight="28px"
              color="#2F1D2C"
              mt="1rem"
            >
              Du
            </FormLabel>
            <HStack>
              <Select
                w="32.1%"
                placeholder="Mois"
                onChange={handleFromMonthChange}
                value={fromMonth}
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
                onChange={handleFromYearChange}
                value={fromYear}
              >
                {yearList.map((year) => year)}
              </Select>
            </HStack>
            <FormLabel
              htmlFor="date"
              fontSize="xl"
              fontWeight="bold"
              lineHeight="28px"
              color="#2F1D2C"
              mt="1rem"
            >
              Au
            </FormLabel>
            <HStack>
              <Select
                w="32.1%"
                placeholder="Mois"
                onChange={handleToMonthChange}
                value={toMonth}
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
                onChange={handleToYearChange}
                value={toYear}
              >
                {yearList.map((year) => year)}
              </Select>
            </HStack>
            <Checkbox mt="0.5rem" colorScheme="pink">
              Y travaille actuellement
            </Checkbox>
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
          Ajoutez une certification professionnelle à votre profil. (optionnel)
        </Text>
      )}
      ;
    </Box>
  );
}

export default ProfessionalExperience;
