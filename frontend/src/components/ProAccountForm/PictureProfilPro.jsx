import {
  Flex,
  Input,
  Button,
  Avatar,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  useDisclosure,
  VStack,
  FormControl,
} from "@chakra-ui/react";

import { useState } from "react";

export default function PictureProfilePro() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [picturePro, setPicturePro] = useState();

  // fonction d'enregistrement d'une nouvelle image //
  const handleRegisterPicture = () => {
    setPicturePro(picturePro);
    onToggle(!isOpen);
  };
  return (
    <VStack align="center" alignSelf="center" mx="auto">
      <Avatar src={picturePro} size="2xl" />
      <Button
        bg="none"
        _hover={{ bg: "none" }}
        color="pink.light"
        fontWeight="800"
        align="center"
        fontSize={{ base: "md", md: "0.8rem" }}
        onClick={onOpen}
      >
        {" "}
        Changer votre photo
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          w="80%"
          maxW="800px"
          minH="500px"
          h="fix-content"
          borderRadius="25px"
        >
          <ModalHeader
            paddingY="30px"
            color="purple.average"
            fontWeight="600"
            fontSize="lg"
            bgColor="#FAFAFA"
          >
            Votre plus beau profil
            <ModalCloseButton
              _hover={{ bgColor: "none" }}
              size="lg"
              iconColor="#415161"
              p="30px"
            />
          </ModalHeader>
          <ModalBody>
            <FormControl>
              <Box h="150px" alignSelf="left" my="4rem">
                <Box
                  border="3px solid"
                  borderColor="pink.light"
                  position="absolute"
                  h="150px"
                  w="150px"
                  mx="40%"
                />
                <Box h="150px" w="150px" mx="40%">
                  <Image src={picturePro} m="auto" h="150px" />
                </Box>
              </Box>
              <Flex direction="column" alignItems="center" mt="3rem" gap="5">
                <Button
                  type="file"
                  bg="none"
                  _hover={{ bg: "none", color: "pink.light" }}
                  color="gray"
                  fontWeight="600"
                  align="center"
                  fontSize={{ base: "md", md: "0.8rem" }}
                  onClick={() =>
                    document.getElementById("inputHandler").click()
                  }
                >
                  <Input
                    type="file"
                    id="inputHandler"
                    name="name"
                    display="none"
                    value={picturePro}
                    onChange={(e) => setPicturePro(e.target.value)}
                  />{" "}
                  Télécharger votre nouvelle photo
                </Button>
                <Button
                  w="120px"
                  variant="solid_PrimaryColor"
                  type="submit"
                  fontSize="sm"
                  onClick={handleRegisterPicture}
                >
                  Enregistrer
                </Button>
              </Flex>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
}
