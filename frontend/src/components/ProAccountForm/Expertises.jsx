import {
  Flex,
  FormLabel,
  Text,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

import backendAPI from "../../services/backendAPI";

export default function Expertises() {
  // useState pour chaque input //
  const [expertise, setExpertise] = useState([]);

  const [expertiseList, setExpertiseList] = useState([]);

  // fonction retrait et d'ajout d'une expertise //
  const updateExpertise = (e) => {
    if (e.target.checked && !expertiseList.includes(e.target.value)) {
      setExpertiseList([...expertiseList, e.target.value]);
    } else if (!e.target.checked) {
      expertiseList.splice(expertiseList.indexOf(e.target.value), 1);
      setExpertiseList(expertiseList);
    }
  };

  // axios qui va chercher les expertises
  const getOneExpertise = () => {
    backendAPI
      .get("/api/expertises")
      .then((response) => {
        setExpertise(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => getOneExpertise(), []);

  return (
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
          {expertise.map(
            (element) =>
              element.category === "Soins aux personnes agées" && (
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value={element.name}
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">{element.name}</Text>
                </Checkbox>
              )
          )}
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
          {expertise.map(
            (element) =>
              element.category === "Maladies chroniques" && (
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value={element.name}
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">{element.name}</Text>
                </Checkbox>
              )
          )}
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
          {expertise.map(
            (element) =>
              element.category === "Handicap" && (
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value={element.name}
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">{element.name}</Text>
                </Checkbox>
              )
          )}
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
          {expertise.map(
            (element) =>
              element.category === "Santé mentale" && (
                <Checkbox
                  iconColor="pink.light"
                  colorScheme="white"
                  borderColor="gray"
                  _checked={{ borderColor: "pink.light" }}
                  value={element.name}
                  onChange={updateExpertise}
                >
                  <Text fontSize="sm">{element.name}</Text>
                </Checkbox>
              )
          )}
        </Flex>
      </CheckboxGroup>
    </Flex>
  );
}
