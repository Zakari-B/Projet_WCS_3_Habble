import { Flex, Heading, Text, Button, Divider } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import PropTypes from "prop-types";

export default function FormationCard({ formation }) {
  return (
    <Flex direction="column" gap="10px" paddingY="10px">
      <Heading
        as="h2"
        color="pourple.average"
        fontSize="1.5em"
        fontWeight="700"
      >
        {formation.title}
      </Heading>
      <Heading as="h3" color="pourple.average" fontSize="16px" fontWeight="600">
        {formation.level}
      </Heading>
      <Heading as="h4" color="pourple.average" fontSize="14px" fontWeight="600">
        {formation.startMonth}/{formation.startYear} - {formation.endMonth}/
        {formation.endYear}
      </Heading>
      <Text color="pourple.average" fontSize="14px">
        {" "}
        {formation.description}
      </Text>
      <Flex gap="20px">
        <Button
          leftIcon={<EditIcon />}
          variant="text"
          color="pink.light"
          padding="0px"
        >
          Modifier
        </Button>
        <Button
          rightIcon={<DeleteIcon />}
          variant="text"
          color="pink.light"
          padding="0px"
        >
          Supprimer
        </Button>
      </Flex>
      <Divider paddingTop="10px" colorScheme="gray" />
    </Flex>
  );
}

FormationCard.propTypes = {
  formation: PropTypes.shape.isRequired,
};
