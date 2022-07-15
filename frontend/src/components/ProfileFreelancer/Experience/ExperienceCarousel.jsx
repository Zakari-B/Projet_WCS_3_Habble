/* eslint-disable no-nested-ternary */
import React, { useState, useMemo } from "react";
import { Heading, Flex, Button, Text, Collapse } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import ExperienceFormContext from "../../../contexts/ExperienceFormContext";
import ExperienceForm from "./ExperienceForm";

export default function ExperienceCarousel({
  experiences,
  updated,
  setUpdated,
  loggedUser,
  freelancer,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentExperience, setCurrentExperience] = useState({});
  const context = useMemo(
    () => ({
      isVisible,
      setIsVisible,
      currentExperience,
      setCurrentExperience,
    }),
    [isVisible, currentExperience]
  );

  const toggleForm = () => {
    setIsVisible(!isVisible);
    setCurrentExperience({});
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
          Expériences Professionnelles
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
          <ExperienceFormContext.Provider value={context}>
            <ExperienceForm updated={updated} setUpdated={setUpdated} />
          </ExperienceFormContext.Provider>
        )}
      </Collapse>
      <Flex direction="column">
        {!experiences ? (
          loggedUser.userId === freelancer.userId ? (
            <Text color="gray" fontSize="16px" fontWeight="500">
              Ajoutez une certification professionnelle à votre profil.
              (Optionnel)
            </Text>
          ) : (
            <Text color="gray" fontSize="16px" fontWeight="500">
              Aucune expérience ajoutée
            </Text>
          )
        ) : (
          experiences.map((experience) => (
            <ExperienceFormContext.Provider value={context}>
              <ExperienceCard
                experience={experience}
                key={experience.id}
                updated={updated}
                setUpdated={setUpdated}
                freelancer={freelancer}
                loggedUser={loggedUser}
              />
            </ExperienceFormContext.Provider>
          ))
        )}
      </Flex>
    </Flex>
  );
}
