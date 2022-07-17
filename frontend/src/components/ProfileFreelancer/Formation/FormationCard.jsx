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
import FormationFormContext from "../../../contexts/FormationFormContext";
import { getOneItemOfList } from "../../../services/ProfileProUtils";

import DeleteConfirmModal from "../../DeleteConfirmModal";

export default function FormationCard({
  formation,
  updated,
  setUpdated,
  freelancer,
  loggedUser,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isVisible, setIsVisible, setCurrentFormation, currentFormation } =
    useContext(FormationFormContext);
  const { freelancerId, coordinatorId } = useParams();

  const showForm = () => {
    if (freelancerId !== undefined) {
      getOneItemOfList(
        "freelancers",
        "formations",
        freelancerId,
        formation.id
      ).then((res) => {
        setCurrentFormation(res.data);
        setIsVisible(!isVisible);
      });
    }
    if (coordinatorId !== undefined) {
      getOneItemOfList(
        "coordinator",
        "formations",
        coordinatorId,
        formation.id
      ).then((res) => {
        setCurrentFormation(res.data);
        setIsVisible(!isVisible);
      });
    }
  };

  return (
    <Flex direction="column" gap="10px" paddingY="10px">
      <Heading as="h2" color="purple.average" fontSize="1.5em" fontWeight="700">
        {formation.level}
      </Heading>
      <Heading as="h3" color="purple.average" fontSize="16px" fontWeight="600">
        {formation.institution}
      </Heading>
      <Heading as="h4" color="purple.average" fontSize="14px" fontWeight="600">
        {formation.startMonth}/{formation.startYear} - {formation.endMonth}/
        {formation.endYear}
      </Heading>
      <Text color="purple.average" fontSize="14px">
        {formation.description}
      </Text>
      <Flex gap="20px">
        {loggedUser.userId === freelancer.userId ? (
          <>
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
                if (freelancerId !== undefined) {
                  getOneItemOfList(
                    "freelancers",
                    "formations",
                    freelancerId,
                    formation.id
                  ).then((res) => {
                    setCurrentFormation(res.data);
                  });
                }
                if (coordinatorId !== undefined) {
                  getOneItemOfList(
                    "coordinator",
                    "formations",
                    coordinatorId,
                    formation.id
                  ).then((res) => {
                    setCurrentFormation(res.data.id);
                  });
                }
              }}
            >
              Supprimer
            </Button>
          </>
        ) : null}

        <DeleteConfirmModal
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          item={currentFormation}
          updated={updated}
          setUpdated={setUpdated}
          type="formations"
        />
      </Flex>
      <Divider paddingTop="10px" colorScheme="gray" />
    </Flex>
  );
}

FormationCard.propTypes = {
  formation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    institution: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    startMonth: PropTypes.string.isRequired,
    startYear: PropTypes.number.isRequired,
    endMonth: PropTypes.string.isRequired,
    endYear: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
