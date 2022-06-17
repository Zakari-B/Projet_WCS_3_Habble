import React, { useState, useMemo } from "react";
import { Heading, Flex, Button, Text, Collapse } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import ExperienceFormContext from "../../../contexts/ExperienceFormContext";
import ExperienceForm from "./ExperienceForm";

export default function ExperienceCarousel() {
  const [fakeExperience] = useState([
    {
      id: 1,
      title: "Assistant de santé",
      company: "EPHAD des Lilas",
      startMonth: "04",
      startYear: 2012,
      endMonth: "01",
      endYear: 2022,
      currentJob: false,
      description: "this is my first experience",
    },
    {
      id: 2,
      title: "Cadre de santé",
      company: "EPHAD des Lilas",
      startMonth: "04",
      startYear: 2022,
      endMonth: "02",
      endYear: 2022,
      currentJob: true,
      description: "this is my second experience",
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
          Expériences Professionnelles
        </Heading>
        {!isVisible && (
          <Button variant="outline_Pink" onClick={toggleForm}>
            Ajouter
          </Button>
        )}
      </Flex>
      <Collapse in={isVisible}>
        {isVisible && (
          <ExperienceFormContext.Provider value={context}>
            <ExperienceForm />
          </ExperienceFormContext.Provider>
        )}
      </Collapse>
      <Flex direction="column">
        {fakeExperience.length === 0 ? (
          <Text color="gray" fontSize="16px" fontWeight="500">
            Ajoutez une certification professionnelle à votre profil.
            (Optionnel)
          </Text>
        ) : (
          fakeExperience.map((experience) => (
            <ExperienceFormContext.Provider value={context}>
              <ExperienceCard experience={experience} key={experience.id} />
            </ExperienceFormContext.Provider>
          ))
        )}
      </Flex>
    </Flex>
  );
}
