import {
  Flex,
  Button,
  Text,
  FormControl,
  Switch,
  FormLabel,
  useDisclosure,
  Box,
  useToast,
} from "@chakra-ui/react";
import dateFormat from "dateformat";
import ModalAccountForm from "./ModalAccountForm";
import Services from "./Services";
import { updateItem } from "../../../services/ProfileProUtils";

export default function BannerProfile({
  freelancer,
  city,
  updated,
  setUpdated,
  loggedUser,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const updateFreelancer = (data) => {
    updateItem("freelancers", freelancer.id, data)
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
    updateFreelancer({ available: !freelancer.available });
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
      {loggedUser.userId === freelancer.userId ? (
        <Flex bgColor="white" p="1.5rem" borderRadius="25px 25px 0 0">
          <FormControl display="flex" alignItems="center">
            <Switch
              colorScheme="pink"
              id="availabilityToggle"
              onChange={handleSubmit}
              isChecked={!!freelancer.available}
            />

            <FormLabel htmlFor="availabilityToggle" mb="-1px">
              {freelancer.available ? (
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

      <Flex bgColor="purple.average" minH="60%" p="10px" flexDir="column">
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Flex
            my="2rem"
            minW="250px"
            w={{ base: "100%", md: "15%" }}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              height="200px"
              width="200px"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgColor="white"
              borderRadius="100%"
              border="1px solid gray.200"
              bgPosition="center"
              bgImage={
                freelancer.picture
                  ? `${import.meta.env.VITE_BACKEND_URL}/uploads/${
                      freelancer.picture
                    }`
                  : "https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
              }
            />
          </Flex>
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
              {freelancer.displayName}
            </Text>
            <Text
              fontSize="1.2rem"
              fontWeight="700"
              color="white"
              marginBottom="1rem"
              textAlign={{ base: "center", md: "left" }}
            >
              {`${freelancer.activityDescription} à ${city?.ville_nom} (${city?.ville_departement})`}
            </Text>
            <Text
              color="white"
              marginBottom="1.2rem"
              textAlign={{ base: "center", md: "left" }}
            >
              {freelancer.experienceYear} années d'expérience
            </Text>
            <Text
              color="white"
              marginBottom="1.2rem"
              textAlign={{ base: "center", md: "left" }}
            >
              Membre depuis le{" "}
              {dateFormat(freelancer.dateCreated, "dd/mm/yyyy")}
            </Text>
            <Services />

            <Flex
              direction={{ base: "column", sm: "row" }}
              p="0.75rem"
              gap={5}
              margin="auto"
              w="auto"
              display={{ base: "flex", md: "none" }}
            >
              {loggedUser.userId === freelancer.userId ? (
                <>
                  <Button
                    marginTop="0.75rem"
                    variant="solid_PrimaryColor"
                    onClick={onOpen}
                  >
                    Modifier
                  </Button>

                  <ModalAccountForm
                    onOpen={onOpen}
                    isOpen={isOpen}
                    onClose={onClose}
                    updated={updated}
                    setUpdated={setUpdated}
                  />
                </>
              ) : null}
            </Flex>
          </Flex>
          <Flex
            direction="column"
            p="0.75rem"
            gap={5}
            margin="0 0 0 auto"
            w="auto"
            display={{ base: "none", md: "flex" }}
          >
            {loggedUser.userId === freelancer.userId ? (
              <>
                <Button
                  marginTop="0.75rem"
                  variant="solid_PrimaryColor"
                  onClick={onOpen}
                >
                  Modifier
                </Button>
                {/* <Button variant="outlineWhite">Voir mon profil en ligne</Button> */}
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
          À propos de {freelancer.displayName}
        </Text>
        <Text p="5px">{freelancer.description}</Text>
      </Flex>
    </Flex>
  );
}
