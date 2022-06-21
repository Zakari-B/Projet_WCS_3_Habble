import {
  Flex,
  Button,
  Text,
  FormControl,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import Patrice from "../../assets/patrice-warembourg-550.jpg";

export default function BannerProfile({ employer }) {
  const [available] = useState(employer.available);

  return (
    <Flex
      w={{ base: "95%", lg: "80%" }}
      direction="column"
      alignSelf="center"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      border="1px solid #ededed"
      borderRadius="25px"
    >
      <Flex bgColor="white" p="1.5rem" borderRadius="25px 25px 0 0">
        <FormControl display="flex" alignItems="center">
          {/* <Switch
            colorScheme="pink"
            id="availabilityToggle"
            onChange={() => setAvailable(!available)}
          /> */}
          <FormLabel htmlFor="availabilityToggle" mb="-1px">
            {available ? (
              <Flex alignItems="center" wrap="wrap" justifyContent="center">
                <Text fontSize="1.2rem" fontWeight="700">
                  &nbsp; Profil vérifié{" "}
                </Text>
                <Text fontWeight="500" textAlign="center">
                  &nbsp; - Vous pouvez être contacté et poster des annonces
                </Text>
              </Flex>
            ) : (
              <Flex alignItems="center" wrap="wrap" justifyContent="center">
                <Text fontSize="1.2rem" fontWeight="700">
                  &nbsp; Profil non vérifié
                </Text>
                <Text fontWeight="500" textAlign="center">
                  &nbsp; - Vous ne pouvez pas être contacté et poster des
                  annonces
                </Text>
              </Flex>
            )}
          </FormLabel>
        </FormControl>
      </Flex>
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
            boxSize="200px"
            borderRadius="50%"
            objectFit="cover"
            src={Patrice}
            alt="Avatar utilisateur"
          />
        </Flex>
        <Flex direction="column" w={{ base: "95%", md: "40%" }} margin="auto 0">
          <Text
            fontSize="2rem"
            fontWeight="700"
            color="white"
            textAlign={{ base: "center", md: "left" }}
          >
            {employer.displayName}
          </Text>

          <Text
            color="white"
            marginBottom="1.2rem"
            textAlign={{ base: "center", md: "left" }}
          >
            Membre depuis le {employer.dateCreated}
          </Text>

          <Flex
            direction={{ base: "column", sm: "row" }}
            p="0.75rem"
            gap={5}
            margin="auto"
            w="auto"
            display={{ base: "flex", md: "none" }}
          >
            <Button marginTop="0.75rem" variant="solid_PrimaryColor">
              Modifier
            </Button>
            <Button marginTop="0.75rem" variant="outlineWhite">
              Voir mon profil en ligne
            </Button>
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
          <Button marginTop="0.75rem" variant="solid_PrimaryColor">
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
          À propos de {employer.displayName}
        </Text>
        <Text p="5px">{employer.description}</Text>
      </Flex>
    </Flex>
  );
}
