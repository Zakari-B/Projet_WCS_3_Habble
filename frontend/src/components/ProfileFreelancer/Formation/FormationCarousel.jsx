/* eslint-disable no-nested-ternary */
import { Flex, Heading, Button, Text, Collapse } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import FormationCard from "./FormationCard";
import FormationForm from "./FormationForm";
import FormationFormContext from "../../../contexts/FormationFormContext";

export default function FormationCarousel({
  formations,
  updated,
  setUpdated,
  freelancer,
  loggedUser,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFormation, setCurrentFormation] = useState({});

  const context = useMemo(
    () => ({ isVisible, setIsVisible, currentFormation, setCurrentFormation }),
    [isVisible, currentFormation]
  );

  const toggleForm = () => {
    setIsVisible(!isVisible);
    setCurrentFormation({});
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
          Formations
        </Heading>
        {!isVisible &&
          (loggedUser.userId === freelancer.userId ? (
            <Button variant="outline_Pink" onClick={toggleForm}>
              Ajouter
            </Button>
          ) : null)}
      </Flex>
      <Collapse in={isVisible}>
        {isVisible && (
          <FormationFormContext.Provider value={context}>
            <FormationForm updated={updated} setUpdated={setUpdated} />
          </FormationFormContext.Provider>
        )}
      </Collapse>

      <Flex direction="column">
        {formations.length === 0 ? (
          loggedUser.userId === freelancer.userId ? (
            <Text color="gray" fontSize="16px" fontWeight="500">
              Ajoutez une formation à votre profil. (optionnel)
            </Text>
          ) : (
            <Text color="gray" fontSize="16px" fontWeight="500">
              Aucune formation ajoutée
            </Text>
          )
        ) : (
          formations.map((formation) => (
            <FormationFormContext.Provider value={context}>
              <FormationCard
                formation={formation}
                key={formation.id}
                updated={updated}
                setUpdated={setUpdated}
                freelancer={freelancer}
                loggedUser={loggedUser}
              />
            </FormationFormContext.Provider>
          ))
        )}
      </Flex>
    </Flex>
  );
}
