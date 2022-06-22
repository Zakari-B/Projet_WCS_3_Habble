import React, { useState, useMemo } from "react";

import { Heading, Flex, Button, Text, Collapse } from "@chakra-ui/react";
import DiplomeCard from "./DiplomeCard";
import DiplomeFormContext from "../../../contexts/DiplomeFormContext";
import DiplomeForm from "./DiplomeForm";

export default function DiplomeCarousel({ diplomes, updated, setUpdated }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDiploma, setCurrentDiploma] = useState({});

  const context = useMemo(
    () => ({ isVisible, setIsVisible, currentDiploma, setCurrentDiploma }),
    [isVisible, currentDiploma]
  );

  const toggleForm = () => {
    setIsVisible(!isVisible);
    setCurrentDiploma({});
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
            <DiplomeForm updated={updated} setUpdated={setUpdated} />
          </DiplomeFormContext.Provider>
        )}
      </Collapse>
      <Flex direction="column">
        {diplomes.length === 0 ? (
          <Text color="gray" fontSize="16px" fontWeight="500">
            Ajoutez une certification professionnelle à votre profil.
            (Optionnel)
          </Text>
        ) : (
          diplomes.map((diplome) => (
            <DiplomeFormContext.Provider value={context}>
              <DiplomeCard
                diplome={diplome}
                key={diplome.id}
                updated={updated}
                setUpdated={setUpdated}
              />
            </DiplomeFormContext.Provider>
          ))
        )}
      </Flex>
    </Flex>
  );
}
