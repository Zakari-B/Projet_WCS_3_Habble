import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Box,
  Avatar,
  Image,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function OfferDetailModal({ isOpen, onClose, offer }) {
  return (
    <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="0px 0px 21px 21px">
        <ModalHeader
          paddingY="30px"
          color="purple.average"
          fontWeight="600"
          fontSize="lg"
          bgColor="#FAFAFA"
        >
          L'Offre de {offer.freelancer?.displayName}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingY="30px">
          <Flex gap="20px">
            <Flex
              direction="column"
              justify="center"
              alignItems="center"
              gap="20px"
              border="1px solid #eee"
              p="40px 10px"
              minW="30%"
              borderRadius="8px"
            >
              {offer.freelancer?.picture ? (
                <Box
                  minW="60px"
                  minH="60px"
                  maxW="60px"
                  maxH="60px"
                  height="60px"
                  width="60px"
                >
                  <Image
                    src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                      offer.freelancer?.picture
                    }`}
                    height="60px"
                    width="60px"
                    borderRadius="100%"
                    border="1px solid gray.200"
                  />
                </Box>
              ) : (
                <Avatar
                  src="https://bit.ly/broken-link"
                  height="60px"
                  width="60px"
                  maxW="60px"
                  maxH="60px"
                />
              )}
              <Flex direction="column" gap="5px" alignItems="center">
                <Text color="#415161" lineHeight="1.5em" fontWeight="700">
                  {offer.freelancer?.displayName}
                </Text>
                <Text fontSize="sm">
                  {offer.freelancer?.activityDescription}
                </Text>
                <Text fontSize="sm">{offer.freelancer?.zipCode}</Text>
              </Flex>
            </Flex>
            <Flex direction="column" gap="5px" alignItems="flex-start">
              <Text
                color="#415161"
                lineHeight="1.5em"
                fontWeight="700"
                fontSize="14px"
              >
                Message
              </Text>
              <Text fontSize="sm">{offer.description}</Text>
              <Text
                color="#415161"
                lineHeight="1.5em"
                fontWeight="700"
                fontSize="14px"
              >
                Prix
              </Text>
              <Text color="pink.light" fontWeight="700" fontSize="sm">
                {offer.price?.toFixed(2)}€
              </Text>
              <Text
                color="#415161"
                lineHeight="1.5em"
                fontWeight="700"
                fontSize="14px"
              >
                Sous
              </Text>
              <Text color="pink.light" fontWeight="700" fontSize="sm">
                {offer.availableIn}
              </Text>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

OfferDetailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
