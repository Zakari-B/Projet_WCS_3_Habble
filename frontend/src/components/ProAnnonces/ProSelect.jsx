import {
  Flex,
  Box,
  Text,
  VStack,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";

function ProSelect() {
  return (
    <>
      <Box
        w={{ base: "95%", lg: "70%" }}
        h="auto"
        bgColor="white"
        boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      >
        <Flex
          justify="space-between"
          p="2.5rem"
          flexDir={{ base: "column", lg: "row" }}
        >
          <VStack w={{ base: "100%", lg: "60%" }} alignItems="flex-start">
            <Text fontWeight="bold" color="purple.average" fontSize="1.5rem">
              Mot-clés
            </Text>
            <Input placeholder="Cherchez une annonce par mot-clé" w="100%" />
          </VStack>
          <VStack
            w={{ base: "100%", lg: "38%" }}
            alignItems="flex-start"
            pt={{ base: "1rem", lg: "0" }}
          >
            <Text fontWeight="bold" color="purple.average" fontSize="1.5rem">
              État
            </Text>
            <Select placeholder="Choisissez une option" w="100%">
              <option>En suspens</option>
            </Select>
          </VStack>
        </Flex>
        <Text
          color="pink.light"
          fontWeight="bold"
          fontSize="1rem"
          textAlign="left"
          p="0 2.5rem 2.5rem 2.5rem"
        >
          Supprimez tous les filtres
        </Text>
      </Box>

      <Box
        w={{ base: "95%", lg: "70%" }}
        h="auto"
        bgColor="white"
        boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
        mt="1rem"
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th fontSize="1rem">Titre de l'annonce</Th>
                <Th isNumeric fontSize="1rem">
                  Nombre d'offres
                </Th>
                <Th fontSize="1rem">Taux horaire</Th>
                <Th fontSize="1rem">Date de création</Th>
                <Th fontSize="1rem">État</Th>
                <Th fontSize="1rem">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Garde d'enfant</Td>
                <Td isNumeric>0</Td>
                <Td>40.0€/heure</Td>
                <Td>27/6/2022</Td>
                <Td>En suspens</Td>
                <Td>
                  <Button>Modifier</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default ProSelect;
