import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function Accompagnement() {
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
      <Flex justify="space-between" direction="column">
        <Heading
          as="h2"
          color="purple.light"
          fontSize="1.5em"
          fontWeight="700"
          paddingBottom="2rem"
        >
          Mes accompagnements
        </Heading>
        <VStack alignItems="left">
          <Text color="purple.average" fontSize="14px">
            Romain Domizi
          </Text>
          <Text color="purple.average" fontSize="14px">
            Eleonor Tatin
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
