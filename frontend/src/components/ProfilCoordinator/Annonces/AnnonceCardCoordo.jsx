import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  useDisclosure,
  Tag,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import PropTypes from "prop-types";

import DeleteConfirmModalCoordo from "./DeleteConfirmModalCoordo";
import EditAnnonceModal from "../../ProfilEmployer/Annonce/EditAnnonceModal";

export default function AnnonceCardCoordo({ annonce, updated, setUpdated }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let tagColor = "";
  if (annonce.status === "Brouillon") {
    tagColor = "gray";
  } else if (annonce.status === "Rejetée") {
    tagColor = "red";
  } else if (annonce.status === "Ouverte" || annonce.status === "En Cours") {
    tagColor = "green";
  } else {
    tagColor = "gray";
  }
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  return (
    <Flex direction="column" gap="10px" paddingY="10px">
      <Flex justify="space-between">
        <Heading
          as="h2"
          color="purple.average"
          fontSize="1.5em"
          fontWeight="700"
        >
          {annonce.title}
        </Heading>
        <Tag colorScheme={tagColor} size="sm">
          {annonce.status}
        </Tag>
      </Flex>
      <Heading
        as="h3"
        color="purple.average"
        fontSize="16px"
        fontWeight="600"
        noOfLines={2}
      >
        {annonce.description}
      </Heading>
      <Heading as="h4" color="purple.average" fontSize="14px" fontWeight="600">
        {annonce.location}
      </Heading>
      <Text color="purple.average" fontSize="14px">
        {annonce.service}
      </Text>

      <Flex gap="20px">
        {annonce.status === "Brouillon" && (
          <>
            <Button
              variant="text"
              color="pink.light"
              padding="0px"
              onClick={onEditOpen}
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
          </>
        )}
        <DeleteConfirmModalCoordo
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          annonce={annonce}
          updated={updated}
          setUpdated={setUpdated}
        />
      </Flex>
      <Divider paddingTop="10px" colorScheme="gray" />

      <EditAnnonceModal
        isOpen={isEditOpen}
        onOpen={onEditOpen}
        onClose={onEditClose}
        annonce={annonce}
      />
    </Flex>
  );
}

AnnonceCardCoordo.propTypes = {
  annonce: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
