import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import FormationCard from "./FormationCard";

export default function FormationCarousel() {
  const [fakelist] = useState([
    {
      title: "maformation#1",
      level: "Bac+4",
      startMonth: "04",
      startYear: 2012,
      endMonth: "01",
      endYear: 2022,
      description: "this is my first experience",
    },
    {
      title: "maformation#2",
      level: "Bac+4",
      startMonth: "01",
      startYear: 2012,
      endMonth: "02",
      endYear: 2022,
      description: "this is my first experience",
    },
  ]);
  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
      gap="40px"
    >
      <Flex justify="space-between" alignItems="center">
        <Heading
          as="h2"
          color="pourple.average"
          fontSize="1.5em"
          fontWeight="700"
        >
          Formations
        </Heading>
        <Button variant="outline_Pink">Ajouter</Button>
      </Flex>
      <Flex direction="column">
        {fakelist.length === 0 ? (
          <Text color="gray" fontSize="16px" fontWeight="500">
            Ajoutez une formation à votre profil. (optionnel)
          </Text>
        ) : (
          fakelist.map((formation) => <FormationCard formation={formation} />)
        )}
      </Flex>
    </Flex>
  );
}
