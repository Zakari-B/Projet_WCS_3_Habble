/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";

import PropTypes from "prop-types";
import ProAccountForm from "../../ProAccountForm/ProAccountForm";

export default function ModalAccountForm({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier mes informations</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxW="100%">
          <ProAccountForm onClose={onClose} onModal />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

ModalAccountForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
