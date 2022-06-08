import { Flex, Heading, Button, Text, Collapse } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import FormationCard from "./FormationCard";
import FormationForm from "./FormationForm";
import FormationFormContext from "../../../contexts/FormationFormContext";

export default function FormationCarousel() {
  const [fakelist] = useState([
    {
      id: 1,
      level: "Bac+4",
      institution: "Lycée Albert Camus",
      startMonth: "04",
      startYear: 2012,
      endMonth: "01",
      endYear: 2022,
      description: "this is my first experience",
    },
    {
      id: 2,
      level: "Bac+4",
      institution: "Lycée Albert Camus",
      startMonth: "01",
      startYear: 2012,
      endMonth: "02",
      endYear: 2022,
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
          Formations
        </Heading>
        {!isVisible && (
          <Button variant="outline_Pink" onClick={toggleForm}>
            Ajouter
          </Button>
        )}
      </Flex>
      <Collapse in={isVisible}>
        {isVisible && (
          <FormationFormContext.Provider value={context}>
            <FormationForm />
          </FormationFormContext.Provider>
        )}
      </Collapse>

      <Flex direction="column">
        {fakelist.length === 0 ? (
          <Text color="gray" fontSize="16px" fontWeight="500">
            Ajoutez une formation à votre profil. (optionnel)
          </Text>
        ) : (
          fakelist.map((formation) => (
            <FormationFormContext.Provider value={context}>
              <FormationCard formation={formation} key={formation.id} />
            </FormationFormContext.Provider>
          ))
        )}
      </Flex>
    </Flex>
  );
}
