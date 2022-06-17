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
import ExperienceFormContext from "../../../contexts/ExperienceFormContext";

import DeleteConfirmModal from "../../DeleteConfirmModal";

export default function ExperienceCard({ experience }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isVisible, setIsVisible } = useContext(ExperienceFormContext);

  const showForm = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Flex direction="column" gap="10px" paddingY="10px" key={experience.id}>
      <Heading as="h2" color="purple.average" fontSize="1.5em" fontWeight="700">
        {experience.title}
      </Heading>
      <Heading as="h3" color="purple.average" fontSize="16px" fontWeight="600">
        {experience.company}
      </Heading>
      <Heading as="h4" color="purple.average" fontSize="14px" fontWeight="600">
        {experience.startMonth}/{experience.startYear} -{" "}
        {experience.currentJob === true
          ? "Maintenant"
          : `${experience.endMonth} /
        ${experience.endYear}`}
      </Heading>
      <Text color="purple.average" fontSize="14px">
        {experience.description}
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

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    startMonth: PropTypes.string.isRequired,
    startYear: PropTypes.number.isRequired,
    endMonth: PropTypes.string.isRequired,
    endYear: PropTypes.number.isRequired,
    currentJob: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
