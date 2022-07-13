import {
  Flex,
  Heading,
  Text,
  Button,
  useDisclosure,
  Tag,
  Switch,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import PropTypes from "prop-types";

import { useState } from "react";
import AdminAnnonceDelete from "./AdminAnnonceDelete";
import backendAPI from "../../services/backendAPI";

export default function AdminAnnonceCard({ annonce, updated, setUpdated }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [validationStatus, setValidationStatus] = useState(
    !annonce.status === "Brouillon"
  );

  const handleValidation = () => {
    let newStatus = "";
    if (validationStatus === true) {
      newStatus = "Brouillon";
    } else {
      newStatus = "En cours";
    }
    backendAPI.put(
      `/api/employers/${annonce.employerId}/annonce/${annonce.id}`,
      {
        status: newStatus,
      }
    );
    setValidationStatus(!validationStatus);
    setUpdated(!updated);
  };

  return (
    <Flex
      direction="column"
      gap="10px"
      marginY="8px"
      padding="15px"
      border="1px solid lightgray"
      borderRadius="25px"
      boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
    >
      <Flex justify="space-between">
        <Heading
          as="h2"
          color="purple.average"
          fontSize="1.2em"
          fontWeight="700"
        >
          {annonce.title}
        </Heading>
        <Flex flexDirection="column" gap="3">
          <Tag colorScheme="teal" size="sm">
            {annonce.status}
          </Tag>
          <Switch
            alignSelf="center"
            size="lg"
            isChecked={validationStatus}
            onChange={handleValidation}
          />
        </Flex>
      </Flex>
      <Heading as="h3" color="purple.average" fontSize="16px" fontWeight="600">
        {annonce.description}
      </Heading>
      <Heading as="h4" color="purple.average" fontSize="14px" fontWeight="600">
        {annonce.location}
      </Heading>
      <Text color="purple.average" fontSize="14px">
        {annonce.service}
      </Text>

      <Flex gap="20px">
        <Button
          rightIcon={<DeleteIcon />}
          variant="text"
          color="pink.light"
          padding="0px"
          onClick={onOpen}
        >
          Supprimer
        </Button>

        <AdminAnnonceDelete
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          annonce={annonce}
          updated={updated}
          setUpdated={setUpdated}
        />
      </Flex>
    </Flex>
  );
}

AdminAnnonceCard.propTypes = {
  annonce: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
