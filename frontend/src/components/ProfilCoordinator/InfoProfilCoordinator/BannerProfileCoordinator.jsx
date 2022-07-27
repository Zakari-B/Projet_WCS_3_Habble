import {
  Flex,
  Button,
  Text,
  FormControl,
  Switch,
  FormLabel,
  Image,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import ModalAccountFormCoordinator from "./ModalAccountFormCoordinator";

import { updateItem } from "../../../services/ProfileProUtils";

export default function BannerProfileCoordinator({
  coordinator,
  city,
  updated,
  setUpdated,
  loggedUser,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const currentUrl = document.location.href;

  const updateCoordinator = (data) => {
    updateItem("coordinators", coordinator.id, data)
      .then(() =>
        toast({
          title: "Votre statut a bien été modifié",
          status: "success",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        })
      )
      .catch(() =>
        toast({
          title: "Votre statut n'a pas pu être modifié",
          status: "error",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        })
      );
  };
  const handleSubmit = () => {
    updateCoordinator({ available: !coordinator.available });
    setUpdated(!updated);
  };

  return (
    <Flex
      w={{ base: "95%", lg: "80%" }}
      direction="column"
      alignSelf="center"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      border="1px solid #ededed"
      borderRadius="25px"
    >
      {loggedUser.userId === coordinator.userId ? (
        <Flex bgColor="white" p="1.5rem" borderRadius="25px 25px 0 0">
          <FormControl display="flex" alignItems="center">
            <Switch
              colorScheme="pink"
              id="availabilityToggle"
              onChange={handleSubmit}
              isChecked={!!coordinator.available}
            />

            <FormLabel htmlFor="availabilityToggle" mb="-1px">
              {coordinator.available ? (
                <Flex alignItems="center" wrap="wrap" justifyContent="center">
                  <Text fontSize="1.2rem" fontWeight="700">
                    &nbsp; Disponible{" "}
                  </Text>
                  <Text fontWeight="500" textAlign="center">
                    &nbsp; - Vous pouvez être contacté et recevoir des demandes
                  </Text>
                </Flex>
              ) : (
                <Flex alignItems="center" wrap="wrap" justifyContent="center">
                  <Text fontSize="1.2rem" fontWeight="700">
                    &nbsp; Indisponible
                  </Text>
                  <Text fontWeight="500" textAlign="center">
                    &nbsp; - Vous ne pouvez pas être contacté et recevoir des
                    demandes
                  </Text>
                </Flex>
              )}
            </FormLabel>
          </FormControl>
        </Flex>
      ) : null}

      <Flex
        bgColor="purple.average"
        minH="60%"
        p="10px"
        flexDir="column"
        alignItems="center"
        justify={{ base: "center", md: "center" }}
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          w="100%"
          justify="space-between"
        >
          <Flex
            gap={{ base: "0px", md: "50px" }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              my="1rem"
              minW="250px"
              w={{ base: "100%", md: "15%" }}
              alignItems="center"
              justifyContent="center"
              width="inherit"
            >
              <Image
                src={
                  coordinator.picture
                    ? `${import.meta.env.VITE_BACKEND_URL}/uploads/${
                        coordinator.picture
                      }`
                    : "https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
                }
                height="200px"
                width="200px"
                borderRadius="100%"
                border="1px solid gray.200"
              />
            </Flex>
            <Flex direction="column" w="100%" margin="auto 0">
              <Text
                fontSize="2rem"
                fontWeight="700"
                color="white"
                textAlign={{ base: "center", md: "left" }}
              >
                {coordinator.displayName}
              </Text>
              <Text
                fontSize="1.2rem"
                fontWeight="700"
                color="white"
                marginBottom="1rem"
                textAlign={{ base: "center", md: "left" }}
              >
                {`${coordinator.activityDescription} à ${city?.ville_nom} (${city?.ville_departement})`}
              </Text>
              <Text
                color="white"
                marginBottom="1.2rem"
                textAlign={{ base: "center", md: "left" }}
              >
                Membre depuis le{" "}
                {dateFormat(coordinator.dateCreated, "dd/mm/yyyy")}
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            alignItems="center"
            p="0.75rem"
            gap={1}
            w="auto"
            alignSelf={{ base: "center", md: "flex-start" }}
          >
            {loggedUser.userId === coordinator.userId ? (
              <>
                <Button
                  marginTop="0.75rem"
                  variant="solid_PrimaryColor"
                  onClick={onOpen}
                  w="-webkit-fill-available"
                >
                  Modifier
                </Button>
                <ModalAccountFormCoordinator
                  isOpen={isOpen}
                  onClose={onClose}
                  coordinator={coordinator}
                  updated={updated}
                  setUpdated={setUpdated}
                />
                {currentUrl ===
                  `${import.meta.env.VITE_FRONTEND_URL}/profil-coordinator/${
                    coordinator.id
                  }` && (
                  <Button
                    marginTop="0.75rem"
                    colorScheme="teal"
                    w="-webkit-fill-available"
                  >
                    <Link
                      to={`/profil-coordinator-freelancer/${coordinator.id}`}
                    >
                      Voir profil professionnel
                    </Link>
                  </Button>
                )}
                {currentUrl !==
                  `${import.meta.env.VITE_FRONTEND_URL}/profil-coordinator/${
                    coordinator.id
                  }` && (
                  <Button
                    marginTop="0.75rem"
                    colorScheme="purple"
                    w="-webkit-fill-available"
                  >
                    <Link to={`/profil-coordinator/${coordinator.id}`}>
                      Voir profil coordinateur
                    </Link>
                  </Button>
                )}
              </>
            ) : null}
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bgColor="lightgray"
        direction="column"
        minH="25%"
        p="20px"
        borderRadius="0 0 25px 25px"
      >
        <Text fontWeight="700" fontSize="1.2rem" p="5px">
          À propos de {coordinator.displayName}
        </Text>
        <Text p="5px">{coordinator.description}</Text>
      </Flex>
    </Flex>
  );
}
