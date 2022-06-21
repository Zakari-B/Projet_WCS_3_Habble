import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import DiplomeFormContext from "../../../contexts/DiplomeFormContext";
import { getOneItemOfList } from "../../../services/ProfileProUtils";

import DeleteConfirmModal from "../../DeleteConfirmModal";

export default function DiplomeCard({ diplome, updated, setUpdated }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isVisible, setIsVisible, setCurrentDiploma, currentDiploma } =
    useContext(DiplomeFormContext);
  const { freelancerId } = useParams();

  const showForm = () => {
    getOneItemOfList("freelancers", "diplomes", freelancerId, diplome.id).then(
      (res) => {
        setCurrentDiploma(res.data);
        setIsVisible(!isVisible);
      }
    );
  };

  return (
    <Flex direction="column" gap="10px" paddingY="10px">
      <Heading as="h2" color="purple.average" fontSize="1.5em" fontWeight="700">
        {diplome.title}
      </Heading>
      <Heading as="h3" color="purple.average" fontSize="16px" fontWeight="600">
        {diplome.school}
      </Heading>
      <Heading as="h4" color="purple.average" fontSize="14px" fontWeight="600">
        {diplome.monthDelivered}/{diplome.yearDelivered}
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
          onClick={() => {
            onOpen();
            getOneItemOfList(
              "freelancers",
              "diplomes",
              freelancerId,
              diplome.id
            ).then((res) => {
              setCurrentDiploma(res.data);
            });
          }}
        >
          Supprimer
        </Button>

        <DeleteConfirmModal
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          item={currentDiploma}
          updated={updated}
          setUpdated={setUpdated}
        />
      </Flex>
      <Divider paddingTop="10px" colorScheme="gray" />
    </Flex>
  );
}

DiplomeCard.propTypes = {
  diplome: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    monthDelivered: PropTypes.string.isRequired,
    yearDelivered: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
