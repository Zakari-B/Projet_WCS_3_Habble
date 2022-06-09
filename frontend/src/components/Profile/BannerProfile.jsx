import {
  Flex,
  Button,
  Text,
  FormControl,
  Switch,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import Patrice from "../../assets/patrice-warembourg-550.jpg";

export default function BannerProfile() {
  const [available, setAvailable] = useState(false);

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
        bgColor="white"
        p="1.5rem"
        borderRadius="25px 25px 0 0"
        flexDir={{ base: "column", md: "row" }}
      >
        <FormControl display="flex" alignItems="center">
          <Switch
            colorScheme="pink"
            id="availabilityToggle"
            onChange={() => setAvailable(!available)}
          />
          <FormLabel htmlFor="availabilityToggle">
            {available ? (
              <Flex alignItems="center">
                <Text fontSize="1.2rem" fontWeight="700">
                  &nbsp; Disponible{" "}
                </Text>
                <Text fontWeight="500">
                  &nbsp; - Vous pouvez être contacté et recevoir des demandes
                </Text>
              </Flex>
            ) : (
              <Flex alignItems="center">
                <Text fontSize="1.2rem" fontWeight="700">
                  &nbsp; Indisponible
                </Text>
                <Text fontWeight="500">
                  &nbsp; - Vous ne pouvez pas être contacté et recevoir des
                  demandes
                </Text>
              </Flex>
            )}
          </FormLabel>
        </FormControl>
      </Flex>
      <Flex bgColor="purple.average" minH="60%" p="10px">
        <Flex m="2rem" minW="23%" w="15%" alignItems="center">
          <Image
            boxSize="115%"
            borderRadius="50%"
            objectFit="cover"
            src={Patrice}
            alt="Avatar utilisateur"
          />
        </Flex>
        <Flex direction="column" w="40%" margin="auto 0">
          <Text fontSize="2rem" fontWeight="700" color="white">
            [[USERNAME]]
          </Text>
          <Text
            fontSize="1.5rem"
            fontWeight="700"
            color="white"
            marginBottom="20px"
          >
            [[PROFESSION]] à [[CP]] [[VILLE]]
          </Text>
          <Text color="white" marginBottom="20px">
            [[EXPERIENCE]]d'expérience
          </Text>
          <Text color="white" marginBottom="20px">
            Membre depuis [[DATE INSCRIPTION]]
          </Text>
          <Text color="white">[[VIGNETTES SERVICES PROPOSES]]</Text>
        </Flex>
        <Flex direction="column" p="10px" gap={5} margin="0 0 0 auto" w="25%">
          <Button marginTop="10px" variant="solid_PrimaryColor">
            Modifier
          </Button>
          <Button variant="outlineWhite">Voir mon profil en ligne</Button>
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
          À propos de [[USERNAME]]
        </Text>
        <Text p="5px">[[Description au choix de l'utilisateur]]</Text>
      </Flex>
    </Flex>
  );
}
