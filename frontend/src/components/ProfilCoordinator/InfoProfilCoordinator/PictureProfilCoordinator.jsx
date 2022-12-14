import {
  Flex,
  Input,
  Button,
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
import { useParams } from "react-router-dom";
import { useState } from "react";
import backendAPI from "../../../services/backendAPI";

export default function PictureProfilCoordinator({
  coordinator,
  updated,
  setUpdated,
}) {
  const { coordinatorId } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pictureCoordinator, setPictureCoordinator] = useState();

  // fonction d'enregistrement d'une nouvelle image //
  const handleRegisterPicture = () => {
    const formData = new FormData();

    formData.append("file", pictureCoordinator[0]);

    backendAPI
      .put(
        `/api/coordinators/${parseInt(coordinatorId, 10)}/picture`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        setUpdated(!updated);
        onClose();
      });
  };

  const handleRemovePicture = () => {
    backendAPI
      .put(`/api/coordinators/${parseInt(coordinatorId, 10)}/removedPicture`)
      .then(() => {
        setUpdated(!updated);
      });
  };

  return (
    <VStack align="center" alignSelf="center" mx="auto">
      <Image
        src={
          coordinator
            ? `${import.meta.env.VITE_BACKEND_URL}/uploads/${coordinator}`
            : "https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
        }
        height="150px"
        width="150px"
        borderRadius="100%"
        border="1px solid gray.200"
        objectFit="cover"
      />
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
      {coordinator.picture && (
        <Button
          h="10px"
          bg="none"
          _hover={{ bg: "none" }}
          color="gray"
          fontWeight="400"
          align="center"
          fontSize={{ base: "md", md: "0.8rem" }}
          onClick={handleRemovePicture}
        >
          {" "}
          Supprimer votre avatar
        </Button>
      )}
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
                  mx="38%"
                />
                <Box h="150px" w="150px" mx="38%">
                  <Image
                    id="frame"
                    src={
                      coordinator
                        ? `${
                            import.meta.env.VITE_BACKEND_URL
                          }/uploads/${coordinator}`
                        : "https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
                    }
                    m="auto"
                    h="150px"
                    objectFit="cover"
                  />
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
                    name="picturePro"
                    display="none"
                    onChange={(e) => {
                      const frame = document.getElementById("frame");
                      frame.src = URL.createObjectURL(e.target.files[0]);
                      setPictureCoordinator(e.target.files);
                    }}
                  />{" "}
                  T??l??charger votre nouvelle photo
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
