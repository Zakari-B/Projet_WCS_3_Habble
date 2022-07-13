import React, { useState, useEffect } from "react";
import {
  Flex,
  Image,
  Switch,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import backendAPI from "../../services/backendAPI";

export default function AdminDoc({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [documentState, setDocumentState] = useState(false);

  const handleVerif = () => {
    setDocumentState(!documentState);
  };

  useEffect(() => {
    setDocumentState(data.verified);
  }, []);

  useEffect(() => {
    backendAPI.post(`/api/users/${data.freelancerId}/verify/${data.id}`, {
      verified: documentState,
    });
  }, [documentState]);

  return (
    <>
      <Flex flexDirection="column" alignItems="center">
        <Image
          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
            data.documentLink
          }`}
          maxHeight="240px"
          maxWidth="240px"
          onClick={onOpen}
          cursor="pointer"
        />
        <Switch
          mt="10px"
          mb="10px"
          isChecked={documentState}
          onChange={handleVerif}
        >
          {data.name}
        </Switch>
      </Flex>
      <Modal size="6xl" isOpen={isOpen} onClose={onClose}>
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
            {data.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingY="30px">
            <Image
              src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                data.documentLink
              }`}
            />
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
              }}
            >
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
