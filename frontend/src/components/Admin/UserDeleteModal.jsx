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

export default function UserDeleteModal({
  isOpen,
  onClose,
  updated,
  setUpdated,
  userId,
}) {
  const toast = useToast();
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="21px 21px 21px 21px">
        <ModalHeader
          paddingY="30px"
          color="purple.average"
          fontWeight="600"
          fontSize="lg"
          bgColor="#FAFAFA"
          borderRadius="21px 21px 0px 0px"
        >
          Supprimer l'utilisateur
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
            Êtes vous sur de vouloir supprimer cet utilisateur ?
          </Heading>
          <Text>
            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Cette opération est définitive et irréversible.
            </span>{" "}
            Une fois l'utilisateur supprimé, toutes les données le concernant
            seront également perdues. Souhaitez vous continuer ?
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
                .delete(`api/users/${userId}`)
                .then(() =>
                  toast({
                    title: `Utilisateur supprimé avec succès`,
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
            Supprimer
          </Button>
          <Button color="gray.dark" mr={3} onClick={onClose} variant="link">
            Annuler
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

UserDeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
