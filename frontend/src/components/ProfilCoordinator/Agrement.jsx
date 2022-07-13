import { Flex, Heading } from "@chakra-ui/react";

export default function Agrement() {
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
        <Heading as="h2" color="purple.light" fontSize="1.5em" fontWeight="700">
          Agréments
        </Heading>
      </Flex>
      <Flex
        wrap="wrap"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-evenly"
        alignItems="center"
        alignSelf="center"
        w={{ base: "100%", "2xl": "90%" }}
        m="auto"
      />
    </Flex>
  );
}
