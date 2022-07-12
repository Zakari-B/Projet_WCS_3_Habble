import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Flex,
  ModalBody,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { deleteItemList } from "../../services/ProfileProUtils";

function ModalDeletionFamily() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { coordinatorId, familyId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const handleDeletion = () => {
    deleteItemList("coordinators", "famille", coordinatorId, familyId)
      .then(
        () =>
          toast({
            title: `Accompagnement supprimé avec succès`,
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          }),
        navigate(`/profil-coordinator/${coordinatorId}`)
      )
      .catch((e) =>
        toast({
          title: e.message,
          status: "error",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        })
      );
  };

  return (
    <>
      <Button
        variant="outline_Pink"
        mt="1rem"
        w={{ base: "50%", lg: "20%" }}
        onClick={onOpen}
      >
        Supprimer
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth={{ base: "95%", lg: "50vw" }}>
          <ModalCloseButton />
          <ModalBody p="1rem">
            <Flex flexDir="column">
              Êtes-vous sûr de vouloir supprimer cette famille ?
              <Flex
                justifyContent="center"
                flexDir={{ base: "column", lg: "row" }}
                alignItems="center"
              >
                <Button
                  variant="solid_PrimaryColor"
                  mt="1rem"
                  mr={{ base: "0", lg: "1rem" }}
                  w={{ base: "50%", lg: "20%" }}
                  onClick={handleDeletion}
                >
                  Oui
                </Button>
                <Button
                  variant="outline_Pink"
                  mt="1rem"
                  w={{ base: "50%", lg: "20%" }}
                  onClick={onClose}
                >
                  Non
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalDeletionFamily;
