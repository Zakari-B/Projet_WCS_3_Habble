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

export default function BannerProfile({ freelancer }) {
  const [available, setAvailable] = useState(freelancer.available);

  return (
    <Flex
      w="80%"
      height="500px"
      direction="column"
      alignSelf="center"
      marginTop="30px"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      border="1px solid #ededed"
      borderRadius="25px"
      m="auto"
    >
      <Flex bgColor="white" height="15%" p="20px" borderRadius="25px 25px 0 0">
        <FormControl display="flex" alignItems="center">
          <Switch
            colorScheme="pink"
            id="availabilityToggle"
            onChange={() => setAvailable(!available)}
          />
          <FormLabel htmlFor="availabilityToggle" mb="0">
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
        <Flex m="30px" minW="250px" w="15%" alignItems="center">
          <Image
            boxSize="200px"
            borderRadius="50%"
            objectFit="cover"
            src="https://app.habble.fr/wp-content/uploads/2020/02/patrice-warembourg-550.jpg"
            alt="Avatar utilisateur"
          />
        </Flex>
        <Flex direction="column" w="40%" margin="auto 0">
          <Text fontSize="2rem" fontWeight="700" color="white">
            {freelancer.displayName}
          </Text>
          <Text
            fontSize="1.5rem"
            fontWeight="700"
            color="white"
            marginBottom="20px"
          >
            {freelancer.activityDescription} à {freelancer.zipCode} [[VILLE]]
          </Text>
          <Text color="white" marginBottom="20px">
            {freelancer.experienceYear} années d'expérience
          </Text>
          <Text color="white" marginBottom="20px">
            Membre depuis le {freelancer.dateCreated}
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
          À propos de {freelancer.displayName}
        </Text>
        <Text p="5px">{freelancer.description}</Text>
      </Flex>
    </Flex>
  );
}
