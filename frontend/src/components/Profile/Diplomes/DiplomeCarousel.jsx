import React, { useState, useMemo } from "react";
import { Heading, Flex, Button, Text, Collapse } from "@chakra-ui/react";
import DiplomeCard from "./DiplomeCard";
import DiplomeFormContext from "../../../contexts/DiplomeFormContext";
import DiplomeForm from "./DiplomeForm";

export default function DiplomeCarousel() {
  const [fakediplome] = useState([
    {
      id: 1,
      title: "Bac+4",
      delivery: "Lycée Albert Camus",
      month_delivered: "04",
      year_delivered: 2012,
      description: "this is my first experience",
    },
    {
      id: 2,
      title: "Bac+4",
      delivery: "Lycée Albert Camus",
      month_delivered: "04",
      year_delivered: 2012,
      description: "this is my first experience",
    },
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const context = useMemo(() => ({ isVisible, setIsVisible }), []);

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
    >
      <Flex justify="space-between" alignItems="center" mb="40px">
        <Heading
          as="h2"
          color="purple.average"
          fontSize="1.5em"
          fontWeight="700"
        >
          Diplômes, certifications
        </Heading>
        {!isVisible && (
          <Button variant="outline_Pink" onClick={toggleForm}>
            Ajouter
          </Button>
        )}
      </Flex>
      <Collapse in={isVisible}>
        {isVisible && (
          <DiplomeFormContext.Provider value={context}>
            <DiplomeForm />
          </DiplomeFormContext.Provider>
        )}
      </Collapse>
      <Flex direction="column">
        {fakediplome.length === 0 ? (
          <Text color="gray" fontSize="16px" fontWeight="500">
            Ajoutez une certification professionnelle à votre profil.
            (Optionnel)
          </Text>
        ) : (
          fakediplome.map((diplome) => (
            <DiplomeFormContext.Provider value={context}>
              <DiplomeCard diplome={diplome} key={diplome.id} />
            </DiplomeFormContext.Provider>
          ))
        )}
      </Flex>
    </Flex>
  );
}
