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
import DiplomeFormContext from "../../../contexts/DiplomeFormContext";

import DeleteConfirmModal from "../../DeleteConfirmModal";

export default function DiplomeCard({ diplome }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isVisible, setIsVisible } = useContext(DiplomeFormContext);

  const showForm = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Flex direction="column" gap="10px" paddingY="10px">
      <Heading as="h2" color="purple.average" fontSize="1.5em" fontWeight="700">
        {diplome.title}
      </Heading>
      <Heading as="h3" color="purple.average" fontSize="16px" fontWeight="600">
        {diplome.delivery}
      </Heading>
      <Heading as="h4" color="purple.average" fontSize="14px" fontWeight="600">
        {diplome.month_delivered}/{diplome.year_delivered}
      </Heading>
      <Text color="purple.average" fontSize="14px">
        {diplome.description}
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

DiplomeCard.propTypes = {
  diplome: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
    month_delivered: PropTypes.string.isRequired,
    year_delivered: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
