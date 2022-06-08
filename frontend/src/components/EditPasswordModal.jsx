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

export default function EditPassWordModal({ isOpen, onClose }) {
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
          Changez votre mot de passe
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingY="30px">
          <Flex direction="column" gap="30px">
            <FormControl isRequired>
              <Input
                type="password"
                id="currentPassword"
                name="Mot de passe actuel"
                placeholder="Mot de passe actuel"
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                type="password"
                id="newPassword"
                name="Nouveau Mot de passe"
                placeholder="Nouveau mot de passe "
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                type="password"
                id="newPasswordRepeat"
                name="Retapez votre mot de passe"
                placeholder="Confirmez votre mot de passe"
              />
            </FormControl>
          </Flex>
        </ModalBody>

        <ModalFooter
          w="100%"
          gap="30px"
          alignItems="center"
          justifyContent="center"
          m="auto"
        >
          <Button variant="solid_PrimaryColor" type="submit">
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

EditPassWordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
