import { Flex, Button, Text, Image, useDisclosure } from "@chakra-ui/react";
import dateFormat from "dateformat";

import ModalProfilForm from "./ModalProfilForm";

export default function BannerProfileEmployer({
  employer,
  updated,
  setUpdated,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w={{ base: "95%", lg: "80%" }}
      direction="column"
      alignSelf="center"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      border="1px solid #ededed"
      borderRadius="25px"
    >
      <Flex
        bgColor="purple.average"
        minH="60%"
        p="10px"
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex
          my="2rem"
          minW="250px"
          w={{ base: "100%", md: "15%" }}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={
              employer.picture
                ? `${import.meta.env.VITE_BACKEND_URL}/uploads/${
                    employer.picture
                  }`
                : "https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
            }
            height="200px"
            width="200px"
            borderRadius="100%"
            border="1px solid gray.200"
          />
        </Flex>
        <Flex justifyContent="space-between" w="-webkit-fill-available">
          <Flex
            direction="column"
            w={{ base: "95%", md: "40%" }}
            margin="auto 0"
          >
            <Text
              fontSize="2rem"
              fontWeight="700"
              color="white"
              textAlign={{ base: "center", md: "left" }}
            >
              {employer.displayName}
            </Text>

            <Text color="white" textAlign={{ base: "center", md: "left" }}>
              Membre depuis le {dateFormat(employer.dateCreated, "dd/mm/yyyy")}
            </Text>
          </Flex>

          <Button
            marginTop="0.75rem"
            variant="solid_PrimaryColor"
            onClick={onOpen}
            w="fit-content"
          >
            Modifier
          </Button>
        </Flex>

        <ModalProfilForm
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          employer={employer}
          updated={updated}
          setUpdated={setUpdated}
        />
      </Flex>
      <Flex
        bgColor="lightgray"
        direction="column"
        minH="25%"
        p="20px"
        borderRadius="0 0 25px 25px"
      >
        <Text fontWeight="700" fontSize="1.2rem" p="5px">
          ?? propos de {employer.displayName}
        </Text>
        <Text p="5px">{employer.description}</Text>
      </Flex>
    </Flex>
  );
}
