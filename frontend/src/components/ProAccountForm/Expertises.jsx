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

  // fonction retrait et d'ajout d'une expertise //
  const updateExpertise = (e) => {
    if (e.target.checked && !expertise.includes(e.target.value)) {
      setExpertise([...expertise, e.target.value]);
    } else if (!e.target.checked) {
      expertise.splice(expertise.indexOf(e.target.value), 1);
      setExpertise(expertise);
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
            <Text fontSize="sm">Trouble obsessionnel-compulsif (TOC)</Text>
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
  );
}
