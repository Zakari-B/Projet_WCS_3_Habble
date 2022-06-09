import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { useContext } from "react";
import MissionFormContext from "../../../contexts/MissionFormContext";

import DeleteConfirmModal from "../../DeleteConfirmModal";

export default function MissionCard({ mission }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isVisible, setIsVisible } = useContext(MissionFormContext);

  const showForm = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Flex direction="column" gap="10px" paddingY="10px">
      <Heading as="h2" color="purple.average" fontSize="1.5em" fontWeight="700">
        {mission.level}
      </Heading>
      <Heading as="h3" color="purple.average" fontSize="16px" fontWeight="600">
        {mission.institution}
      </Heading>
      <Heading as="h4" color="purple.average" fontSize="14px" fontWeight="600">
        {mission.startMonth}/{mission.startYear} - {mission.endMonth}/
        {mission.endYear}
      </Heading>
      <Text color="purple.average" fontSize="14px">
        {mission.description}
      </Text>
      <Flex gap="20px">
        <Button
          leftIcon={<EditIcon />}
          variant="text"
          color="pink.light"
          padding="0px"
          onClick={showForm}
        >
          Modifier
        </Button>
        <Button
          rightIcon={<DeleteIcon />}
          variant="text"
          color="pink.light"
          padding="0px"
          onClick={onOpen}
        >
          Supprimer
        </Button>

        <DeleteConfirmModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Divider paddingTop="10px" colorScheme="gray" />
    </Flex>
  );
}

MissionCard.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.number.isRequired,
    institution: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    startMonth: PropTypes.string.isRequired,
    startYear: PropTypes.number.isRequired,
    endMonth: PropTypes.string.isRequired,
    endYear: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
