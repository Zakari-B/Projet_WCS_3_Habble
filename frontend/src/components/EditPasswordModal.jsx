import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Button,
  FormControl,
  Input,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import backendAPI from "../services/backendAPI";

export default function EditPassWordModal({ isOpen, onClose }) {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassRepeat, setNewPassRepeat] = useState("");

  const editPassword = (e) => {
    e.preventDefault();

    if (newPass === newPassRepeat) {
      backendAPI
        .put("/api/users/", {
          passwordChangeRequest: {
            currentPassword: currentPass,
            newPassword: newPass,
          },
        })
        .then((res) => console.warn(res));
    } else {
      console.warn("Mots de passe différents");
    }
  };

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius="0px 0px 21px 21px"
        maxW={{ base: "95%", lg: "50vw" }}
      >
        <form onSubmit={editPassword}>
          <ModalHeader
            paddingY="30px"
            color="purple.average"
            fontWeight="600"
            fontSize="lg"
            bgColor="#FAFAFA"
          >
            Changez votre mot de passe
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingY="30px">
            <FormControl isRequired>
              <Flex direction="column" gap="30px">
                <Input
                  type="password"
                  id="currentPassword"
                  name="Mot de passe actuel"
                  placeholder="Mot de passe actuel"
                  value={currentPass}
                  onChange={(e) => setCurrentPass(e.target.value)}
                />

                <Input
                  type="password"
                  id="newPassword"
                  name="Nouveau Mot de passe"
                  placeholder="Nouveau mot de passe "
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                />

                <Input
                  type="password"
                  id="newPasswordRepeat"
                  name="Retapez votre mot de passe"
                  placeholder="Confirmez votre mot de passe"
                  value={newPassRepeat}
                  onChange={(e) => setNewPassRepeat(e.target.value)}
                />
              </Flex>
            </FormControl>
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
              type="submit"
              onClick={onClose}
            >
              Confirmer
            </Button>
            <Button color="gray.dark" mr={3} onClick={onClose} variant="link">
              Annuler
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

EditPassWordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
