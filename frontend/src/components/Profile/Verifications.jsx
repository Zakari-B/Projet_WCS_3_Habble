import { Flex, Heading, ListItem, Text, List } from "@chakra-ui/react";

import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function Verifications() {
  const itemList = [
    {
      id: 1,
      name: "Carte d’identité",
      isVerified: true,
    },
    {
      id: 2,
      name: "SIRET",
      isVerified: false,
    },
    { id: 3, name: "Casier judiciaire", isVerified: false },
    { id: 4, name: "Assurance RCP", isVerified: false },
    {
      id: 5,
      name: "Certificat de formation aux premiers secours",
      isVerified: false,
    },
    { id: 6, name: "Agrément(s)", isVerified: false },
    { id: 7, name: "Dîplome(s)", isVerified: false },
    { id: 8, name: "Permis de conduire", isVerified: false },
    { id: 9, name: "Autre", isVerified: false },
  ];

  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
      gap="40px"
    >
      <Flex justify="space-between" direction="column">
        <Heading
          as="h2"
          color="purple.light"
          fontSize="1.5em"
          fontWeight="700"
          paddingBottom="2rem"
        >
          Vérifications
        </Heading>
        <Text color="purple.average" fontSize="14px" marginBottom="2rem">
          Nous veillons à ce que chaque professionnel soit contrôlé et vérifié
          pour offrir une expérience fiable et positive.
        </Text>

        <List spacing={1.5}>
          {itemList.map((item) => (
            <ListItem
              color={item.isVerified ? "purple.average" : "gray.500"}
              fontSize="14px"
            >
              {item.isVerified ? (
                <CheckIcon color="green.500" marginRight="1rem" />
              ) : (
                <CloseIcon color="gray.500" marginRight="1rem" />
              )}
              {item.name}
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
}
