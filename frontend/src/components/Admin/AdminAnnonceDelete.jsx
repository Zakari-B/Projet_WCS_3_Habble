import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Heading,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import backendAPI from "../../services/backendAPI";

export default function AdminAnnonceDelete({
  isOpen,
  onClose,
  annonce,
  updated,
  setUpdated,
}) {
  const toast = useToast();

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="0px 0px 21px 21px">
        <ModalHeader
          paddingY="30px"
          color="purple.average"
          fontWeight="600"
          fontSize="lg"
          bgColor="#FAFAFA"
        >
          Supprimer l'élément
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingY="30px">
          <Heading
            as="h4"
            fontSize="20px"
            fontWeight="700"
            color="purple.average"
            mb="20px"
          >
            Êtes vous sur de vouloir supprimer l'élément ?
          </Heading>
          <Text>
            Une fois l'élément supprimé, il sera définitivement supprimé du site
            et ses informations ne seront pas récupérées.
          </Text>
        </ModalBody>

        <ModalFooter
          w="100%"
          gap="30px"
          alignItems="center"
          justifyContent="center"
          m="auto"
        >
          <Button
            variant="solid_PrimaryColor"
            onClick={() => {
              onClose();
              backendAPI
                .delete(
                  `/api/employers/${annonce.employerId}/annonce/${annonce.id}`
                )
                .then(() =>
                  toast({
                    title: `Annonce supprimée avec succès`,
                    status: "success",
                    position: "bottom-right",
                    duration: 7000,
                    isClosable: true,
                  })
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
              setUpdated(!updated);
            }}
          >
            Confirmer
          </Button>
          <Button color="gray.dark" mr={3} onClick={onClose} variant="link">
            Annuler
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

AdminAnnonceDelete.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
