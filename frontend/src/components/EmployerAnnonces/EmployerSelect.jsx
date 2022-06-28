import { useState } from "react";
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

function EmployerSelect() {
  // eslint-disable-next-line no-unused-vars
  const [fakeData, setFakeDate] = useState([
    {
      id: 0,
      title: "Garde d'enfant",
      number: 5,
      price: "40.0€/heure",
      date: "20/06/2022",
      state: "En cours",
      action: <Button>Modifier</Button>,
    },
    {
      id: 1,
      title: "Soutien scolaire",
      number: 0,
      price: "20.0€/heure",
      date: "27/06/2022",
      state: "En suspens",
      action: <Button>Modifier</Button>,
    },
  ]);
  const [option, setOption] = useState("");
  const [input, setInput] = useState("");

  const handleFilter = (e) => {
    setOption(e.target.value);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleReset = () => {
    setOption("");
    setInput("");
  };

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
            <Input
              placeholder="Cherchez une annonce par mot-clé"
              w="100%"
              value={input}
              onChange={handleChange}
            />
          </VStack>
          <VStack
            w={{ base: "100%", lg: "38%" }}
            alignItems="flex-start"
            pt={{ base: "1rem", lg: "0" }}
          >
            <Text fontWeight="bold" color="purple.average" fontSize="1.5rem">
              État
            </Text>
            <Select
              placeholder="Choisissez une option"
              w="100%"
              onChange={handleFilter}
            >
              <option>En suspens</option>
              <option>En cours</option>
            </Select>
          </VStack>
        </Flex>
        <Button
          color="pink.light"
          bgColor="white"
          fontWeight="bold"
          onClick={handleReset}
          _hover={{ bgColor: "white" }}
          _focus={{ bgColor: "white" }}
          mb="1rem"
        >
          Supprimez tous les filtres
        </Button>
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
            {fakeData &&
              fakeData
                .filter(
                  (opt) =>
                    opt.title.includes(input) && opt.state.includes(option)
                )
                .map((data) => (
                  <Tbody key={data.id}>
                    <Tr>
                      <Td>{data.title}</Td>
                      <Td isNumeric>{data.number}</Td>
                      <Td>{data.price}</Td>
                      <Td>{data.date}</Td>
                      <Td>{data.state}</Td>
                      <Td>{data.action}</Td>
                    </Tr>
                  </Tbody>
                ))}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default EmployerSelect;
