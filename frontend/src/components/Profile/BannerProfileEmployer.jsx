import { Flex, Button, Text, FormLabel, Image, Tag } from "@chakra-ui/react";
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
        <Flex
          direction="column"
          w={{ base: "95%", md: "40%" }}
          margin="auto 0"
          gap="10px"
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
            Membre depuis le {employer.dateCreated}
          </Text>
          <FormLabel htmlFor="availabilityToggle" mt="10px">
            {available ? (
              <Tag variant="solid" colorScheme="green">
                Profil vérifié
              </Tag>
            ) : (
              <Tag color="red">Profil non vérifié</Tag>
            )}
          </FormLabel>
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
