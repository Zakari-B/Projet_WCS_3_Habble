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
import ProAccountFormCoordinator from "./ProAccountFormCoordinator";

export default function ModalAccountForm({
  isOpen,
  onClose,
  coordinator,
  onOpen,
  updated,
  setUpdated,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier mes informations</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxW="100%">
          <ProAccountFormCoordinator
            onModal
            onOpen={onOpen}
            isOpen={isOpen}
            onClose={onClose}
            coordinator={coordinator}
            updated={updated}
            setUpdated={setUpdated}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

ModalAccountForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
