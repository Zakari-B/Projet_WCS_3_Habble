import React from "react";
import {
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, LinkIcon } from "@chakra-ui/icons";
import DeleteConfirmModalFamily from "./DeleteConfirmModalFamily";

export default function UploadedDocFamily({ data, updated, setUpdated }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const imagePopup = useDisclosure();

  return (
    // <Flex
    //   flexDirection="column"
    //   alignItems="center"
    //   h="fit-content"
    //   w={{ base: "95%", md: "30%" }}
    //   border="1px solid #ededed"
    // >
    //   <Box
    //     role="group"
    //     h="240px"
    //     w="100%"
    //     bgImage={`url(http://localhost:3000/backend/public/uploads/${data.documentLink})`}
    //     bgSize="contain"
    //     bgRepeat="no-repeat"
    //     bgPosition="center"
    //     position="relative"
    //   >
    //     <Box
    //       display="flex"
    //       flexDirection="column"
    //       alignItems="space-between"
    //       height="0"
    //       w="100%"
    //       overflow="hidden"
    //       transition="all 0.3s ease-in-out"
    //       mt="240px"
    //       position="absolute"
    //       bgColor="rgba(255, 255, 255)"
    //       _groupHover={{
    //         height: "100%",
    //         justifyContent: "center",
    //         mt: "0",
    //         p: "10px",
    //       }}
    //     >
    //       <Text h="10%" textAlign="center" color="purple.average">
    //         {data.name}
    //       </Text>
    //       <Flex
    //         h="50%"
    //         direction="column"
    //         alignItems="center"
    //         justifyContent="center"
    //         gap="10px"
    //       >
    //         <Link _hover={{ textDecor: "none" }} href="AFFICHER LE DOC">
    //           <Button rightIcon={<LinkIcon />} variant="solid_SecondaryColor">
    //             Voir +
    //           </Button>
    //         </Link>

    //         <Button
    //           rightIcon={<DeleteIcon />}
    //           variant="solid_PrimaryColor"
    //           onClick={onOpen}
    //         >
    //           Supprimer
    //         </Button>
    //       </Flex>

    //       <DeleteConfirmModalFamily
    //         onOpen={onOpen}
    //         isOpen={isOpen}
    //         onClose={onClose}
    //         item={data}
    //         type="documents"
    //         updated={updated}
    //         setUpdated={setUpdated}
    //       />
    //     </Box>
    //   </Box>
    //   <Text color="#342c50">{data.name}</Text>
    // </Flex>
    <Flex
      flexDirection="column"
      alignItems="center"
      h="fit-content"
      w={{ base: "95%", md: "30%" }}
      border="1px solid #ededed"
      gap="3"
      padding="8px"
      margin="10px"
    >
      <Image
        src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${data.documentLink}`}
        maxHeight="240px"
        maxWidth="240px"
        onClick={imagePopup.onOpen}
        cursor="pointer"
      />
      <Flex direction="column" gap="3" w="100%">
        <Text h="10%" textAlign="center" color="purple.average">
          {data.name}
        </Text>
        <Flex
          h="50%"
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap="3%"
        >
          <Button
            rightIcon={<LinkIcon />}
            variant="solid_SecondaryColor"
            onClick={imagePopup.onOpen}
          >
            Voir +
          </Button>

          <Button
            rightIcon={<DeleteIcon />}
            variant="solid_PrimaryColor"
            onClick={onOpen}
          >
            Supprimer
          </Button>
        </Flex>

        <DeleteConfirmModalFamily
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          item={data}
          type="documents"
          updated={updated}
          setUpdated={setUpdated}
        />
        <Modal
          size="6xl"
          isOpen={imagePopup.isOpen}
          onClose={imagePopup.onClose}
        >
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
                  imagePopup.onClose();
                }}
              >
                Fermer
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
}
