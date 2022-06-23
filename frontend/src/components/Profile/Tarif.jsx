import { Flex, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Tarif({ freelancer }) {
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
          {freelancer.price}/h* (indicatif)
        </Text>
      </Flex>
    </Flex>
  );
}

Tarif.propTypes = {
  freelancer: PropTypes.shape({
    price: PropTypes.number.isRequired,
  }).isRequired,
};
