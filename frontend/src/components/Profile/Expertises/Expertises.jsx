import { Flex, Text, Heading } from "@chakra-ui/react";

export default function Expertises() {
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
        <Flex direction="column" h="fit-content" mb="2rem">
          <Text fontSize="lg" fontWeight="600" color="purple.average" pb="1rem">
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
            <Text
              m="0.2rem"
              p="0.2rem"
              bgColor="#f2f5f7"
              fontSize="sm"
              w="fit-content"
            >
              [[EXPERTISE]]
            </Text>
            <Text
              m="0.2rem"
              p="0.2rem"
              bgColor="#f2f5f7"
              fontSize="sm"
              w="fit-content"
            >
              [[EXPERTISE]]
            </Text>
            <Text
              m="0.2rem"
              p="0.2rem"
              bgColor="#f2f5f7"
              fontSize="sm"
              w="fit-content"
            >
              [[EXPERTISE]]
            </Text>
            <Text
              m="0.2rem"
              p="0.2rem"
              bgColor="#f2f5f7"
              fontSize="sm"
              w="fit-content"
            >
              [[EXPERTISE]]
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" justifyContent="space-between" h="fit-content">
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
              <Text
                m="0.2rem"
                p="0.2rem"
                bgColor="#f2f5f7"
                fontSize="sm"
                w="fit-content"
              >
                [[EXPERTISE]]
              </Text>
            </Flex>
          </Flex>
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
              <Text
                m="0.2rem"
                p="0.2rem"
                bgColor="#f2f5f7"
                fontSize="sm"
                w="fit-content"
              >
                [[EXPERTISE]]
              </Text>
            </Flex>
          </Flex>
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
              <Text
                m="0.2rem"
                p="0.2rem"
                bgColor="#f2f5f7"
                fontSize="sm"
                w="fit-content"
              >
                [[EXPERTISE]]
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
