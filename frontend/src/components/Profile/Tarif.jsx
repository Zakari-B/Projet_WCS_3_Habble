import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Tarif() {
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
          Tarif horaire
        </Heading>
        <Text color="purple.average" fontSize="14px">
          [[TARIF]]/h* (indicatif)
        </Text>
      </Flex>
    </Flex>
  );
}
