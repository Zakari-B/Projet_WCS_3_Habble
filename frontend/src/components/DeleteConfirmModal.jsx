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
import { useParams, useNavigate } from "react-router-dom";

import { deleteItemList } from "../services/ProfileProUtils";

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  item,
  updated,
  setUpdated,
  type,
}) {
  const { freelancerId, employerId, coordinatorId } = useParams();
  const navigate = useNavigate();
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
              if (freelancerId) {
                deleteItemList("freelancers", type, freelancerId, item)
                  .then(() => {
                    toast({
                      title: `${type} supprimés(es).es avec succès`,
                      status: "success",
                      position: "bottom-right",
                      duration: 7000,
                      isClosable: true,
                    });
                    navigate(`/profil/${freelancerId}`);
                  })
                  .catch((e) =>
                    toast({
                      title: e.message,
                      status: "error",
                      position: "bottom-right",
                      duration: 7000,
                      isClosable: true,
                    })
                  );
              } else if (employerId) {
                deleteItemList("employers", type, employerId, item)
                  .then(() => {
                    toast({
                      title: `${type} supprimés(es).es avec succès`,
                      status: "success",
                      position: "bottom-right",
                      duration: 7000,
                      isClosable: true,
                    });
                    navigate(`/profil-employer/${employerId}`);
                  })
                  .catch((e) =>
                    toast({
                      title: e.message,
                      status: "error",
                      position: "bottom-right",
                      duration: 7000,
                      isClosable: true,
                    })
                  );
              } else if (coordinatorId) {
                deleteItemList("coordinator", type, coordinatorId, item)
                  .then(() => {
                    toast({
                      title: `${type} supprimés(es).es avec succès`,
                      status: "success",
                      position: "bottom-right",
                      duration: 7000,
                      isClosable: true,
                    });
                    navigate(`/profil-coordinator-freelancer/${coordinatorId}`);
                  })
                  .catch((e) =>
                    toast({
                      title: e.message,
                      status: "error",
                      position: "bottom-right",
                      duration: 7000,
                      isClosable: true,
                    })
                  );
              }
              setUpdated(!updated);
              onClose();
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

DeleteConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
