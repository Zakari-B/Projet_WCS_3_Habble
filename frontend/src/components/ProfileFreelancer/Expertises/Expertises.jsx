import { Flex, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import backendAPI from "../../../services/backendAPI";

export default function Expertises() {
  const { freelancerId, coordinatorId } = useParams();
  const [expertiseList, setExpertiseList] = useState([]);

  const getAllExpertisesByRole = () => {
    if (freelancerId !== undefined) {
      backendAPI
        .get(`/api/freelancers/${freelancerId}/expertises`)
        .then((response) => {
          setExpertiseList(response.data.map((e) => e.fk_expertise_id));
        })
        .catch((error) => {
          console.warn(error);
        });
    }
    if (coordinatorId !== undefined) {
      backendAPI
        .get(`/api/coordinator/${coordinatorId}/expertises`)
        .then((response) => {
          setExpertiseList(response.data.map((e) => e.fk_expertise_id));
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  };
  useEffect(() => {
    getAllExpertisesByRole();
  }, []);

  const category = expertiseList.map((e) => e.category);

  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
      gap="40px"
      h="fit-content"
    >
      <Flex direction="column">
        <Heading
          as="h2"
          color="purple.average"
          fontSize="1.5em"
          fontWeight="700"
        >
          Champs d'expertises
        </Heading>

        <Text fontSize="0.8rem" color="#9da4a9" fontWeight="500" mb="3rem">
          Auto-déclaré
        </Text>
        <Flex direction="column" justifyContent="space-between" h="fit-content">
          {category.includes("Soins aux personnes agées") && (
            <Flex direction="column" h="fit-content" mb="2rem">
              <Text
                fontSize="lg"
                fontWeight="600"
                color="purple.average"
                pb="1rem"
              >
                Soins aux personnes agées
              </Text>
              <Flex
                justifyContent="left"
                columnGap="3"
                rowGap="2"
                flexWrap="wrap"
                h="fit-content"
                w="fit-content"
              >
                {expertiseList.map(
                  (element) =>
                    element.category === "Soins aux personnes agées" && (
                      <Text
                        m="0.2rem"
                        p="0.2rem"
                        bgColor="#f2f5f7"
                        fontSize="sm"
                        w="fit-content"
                        key={element.id}
                      >
                        {element.name}
                      </Text>
                    )
                )}
              </Flex>
            </Flex>
          )}
          {category.includes("Maladies chroniques") && (
            <Flex direction="column" h="fit-content" mb="2rem">
              <Text
                fontSize="lg"
                fontWeight="600"
                color="purple.average"
                pb="1rem"
              >
                Maladies chroniques
              </Text>
              <Flex
                justifyContent="left"
                columnGap="3"
                rowGap="2"
                flexWrap="wrap"
                h="fit-content"
                w="fit-content"
              >
                {expertiseList.map(
                  (element) =>
                    element.category === "Maladies chroniques" && (
                      <Text
                        m="0.2rem"
                        p="0.2rem"
                        bgColor="#f2f5f7"
                        fontSize="sm"
                        w="fit-content"
                        key={element.id}
                      >
                        {element.name}
                      </Text>
                    )
                )}
              </Flex>
            </Flex>
          )}
          {category.includes("Handicap") && (
            <Flex direction="column" h="fit-content" mb="2rem">
              <Text
                fontSize="lg"
                fontWeight="600"
                color="purple.average"
                pb="1rem"
              >
                Handicap
              </Text>
              <Flex
                justifyContent="left"
                columnGap="3"
                rowGap="2"
                flexWrap="wrap"
                h="fit-content"
                w="fit-content"
              >
                {expertiseList.map(
                  (element) =>
                    element.category === "Handicap" && (
                      <Text
                        m="0.2rem"
                        p="0.2rem"
                        bgColor="#f2f5f7"
                        fontSize="sm"
                        w="fit-content"
                        key={element.id}
                      >
                        {element.name}
                      </Text>
                    )
                )}
              </Flex>
            </Flex>
          )}
          {category.includes("Santé mentale") && (
            <Flex direction="column" h="fit-content" mb="2rem">
              <Text
                fontSize="lg"
                fontWeight="600"
                color="purple.average"
                pb="1rem"
              >
                Santé mentale
              </Text>
              <Flex
                justifyContent="left"
                columnGap="3"
                rowGap="2"
                flexWrap="wrap"
                h="fit-content"
                w="fit-content"
              >
                {expertiseList.map(
                  (element) =>
                    element.category === "Santé mentale" && (
                      <Text
                        m="0.2rem"
                        p="0.2rem"
                        bgColor="#f2f5f7"
                        fontSize="sm"
                        w="fit-content"
                        key={element.id}
                      >
                        {element.name}
                      </Text>
                    )
                )}
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
