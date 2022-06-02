import React, { useState } from "react";
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
} from "@chakra-ui/react";

function ProfessionalDiplomes() {
  const [showForm, setShowForm] = useState(false);

  const formShowed = () => {
    setShowForm(!showForm);
  };

  return (
    <Box
      w="50%"
      h="auto"
      backgroundColor="white"
      boxShadow="blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;"
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
        <Button mt="2rem" mr="1rem" variant="outline_Pink" onClick={formShowed}>
          Ajouter
        </Button>
      </Flex>

      {showForm && (
        <FormControl ml="1rem" mt="1rem">
          <Flex flexDir="column">
            <Input placeholder="Nom de la certification" w="65%" />
            <Input placeholder="Délivré par" w="65%" mt="0.5rem" />
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
              <Select w="32.1%" placeholder="Mois">
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
              <Select w="32.1%" placeholder="Année" />
            </HStack>
          </Flex>
        </FormControl>
      )}

      <Text color="#656565" ml="1rem" pb="1rem" fontSize="md" mt="1rem">
        Ajoutez une certification professionnelle à votre profil. (optionnel)
      </Text>
    </Box>
  );
}

export default ProfessionalDiplomes;
