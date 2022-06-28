import { Flex, Heading, Button, Text, Collapse } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import MissionCard from "./MissionCard";
import MissionForm from "./MissionForm";
import MissionFormContext from "../../../contexts/MissionFormContext";

export default function MissionCarousel() {
  const [missionlist] = useState([
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
          Missions effectuées
        </Heading>
        {!isVisible && (
          <Button variant="outline_Pink" onClick={toggleForm}>
            Ajouter
          </Button>
        )}
      </Flex>
      <Collapse in={isVisible}>
        {isVisible && (
          <MissionFormContext.Provider value={context}>
            <MissionForm />
          </MissionFormContext.Provider>
        )}
      </Collapse>

      <Flex direction="column">
        {missionlist.length === 0 ? (
          <Text color="gray" fontSize="16px" fontWeight="500">
            Il n'y a pas encore d'activité.
          </Text>
        ) : (
          missionlist.map((mission) => (
            <MissionFormContext.Provider value={context}>
              <MissionCard mission={mission} key={mission.id} />
            </MissionFormContext.Provider>
          ))
        )}
      </Flex>
    </Flex>
  );
}
