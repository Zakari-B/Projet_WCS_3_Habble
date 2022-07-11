import { useState } from "react";
import {
  Flex,
  Text,
  VStack,
  Input,
  Heading,
  Table,
  Thead,
  Tag,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import dateFormat from "dateformat";
import EditAnnonceModal from "../ProfilEmployer/Annonce/EditAnnonceModal";

function EmployerPrevious({ annonces }) {
  const [input, setInput] = useState("");
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleReset = () => {
    setInput("");
  };

  return (
    <Flex direction="column" gap="20px">
      <Flex
        direction="column"
        bgColor="white"
        boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
        borderRadius="21px"
        border="1px solid #ededed"
        paddingY="30px"
        w={{ base: "95%", lg: "80%" }}
        m="auto"
      >
        <Flex
          justify="space-between"
          p="2.5rem"
          flexDir={{ base: "column", lg: "row" }}
        >
          <VStack w={{ base: "100%", lg: "100%" }} alignItems="flex-start">
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
      </Flex>
      <Flex
        direction="column"
        bgColor="white"
        boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
        p="25px"
        borderRadius="21px"
        border="1px solid #ededed"
        paddingY="30px"
        w={{ base: "95%", lg: "80%" }}
        m="auto"
      >
        <Flex justify="space-between" alignItems="center" mb="40px">
          <Heading
            as="h1"
            color="#415161"
            lineHeight="1.5em"
            fontWeight="700"
            fontSize="20px"
          >
            Offres terminées
          </Heading>
        </Flex>

        <TableContainer>
          <Table variant="simple">
            <Thead bgColor="gray.200">
              <Tr>
                <Th>Titre de l'annonce</Th>
                <Th isNumeric>Nombre d'offres</Th>
                <Th>Taux horaire</Th>
                <Th>Date de création</Th>
                <Th>État</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {annonces &&
                annonces
                  .filter((opt) => opt.title.toLowerCase().includes(input))
                  .map((data) => (
                    <Tr key={data.id}>
                      <Td>{data.title}</Td>
                      <Td isNumeric>{data.annonce_offers?.length}</Td>
                      <Td>{data.price} €</Td>
                      <Td>{dateFormat(data.dateCreated, "dd/mm/yyyy")}</Td>
                      <Td>
                        <Tag>{data.status}</Tag>
                      </Td>
                      <Td>
                        <Button
                          onClick={onEditOpen}
                          variant="solid_PrimaryColor"
                        >
                          Modifier
                        </Button>
                        <EditAnnonceModal
                          isOpen={isEditOpen}
                          onOpen={onEditOpen}
                          onClose={onEditClose}
                          annonce={data}
                        />
                      </Td>
                    </Tr>
                  ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
}

export default EmployerPrevious;
