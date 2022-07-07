import { useState } from "react";
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function EmployerPrevious() {
  // eslint-disable-next-line no-unused-vars
  const [fakeData, setFakeDate] = useState([
    {
      id: 0,
      title: "Garde d'enfant",
      number: 5,
      price: "40.0€/heure",
      date: "20/04/2022",
      state: "Terminé",
      action: <Button>Modifier</Button>,
    },
    {
      id: 1,
      title: "Soutien scolaire",
      number: 0,
      price: "20.0€/heure",
      date: "4/06/2022",
      state: "Terminé",
      action: <Button>Modifier</Button>,
    },
  ]);

  return (
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
            fakeData.map((data) => (
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
  );
}

export default EmployerPrevious;
