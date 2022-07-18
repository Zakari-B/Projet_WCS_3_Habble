import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Flex,
  Text,
  VStack,
  Input,
  Select,
  Link,
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
import backendAPI from "../../services/backendAPI";

function EmployerSelect({ annonces }) {
  const [option, setOption] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [families, setFamilies] = useState([]);
  const [input, setInput] = useState("");
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const { employerId, coordinatorId, freelancerId } = useParams();

  useEffect(() => {
    if (coordinatorId) {
      backendAPI
        .get(`/api/coordinators/${coordinatorId}/familles`)
        .then((res) => {
          setFamilies(res.data);
        });
    }
  }, []);

  const handleFilter = (e) => {
    setOption(e.target.value);
  };

  const handleFilterFamily = (e) => {
    setFamilyName(e.target.value);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleReset = () => {
    setOption("");
    setInput("");
    setFamilyName("");
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
              <option>En attente de validation</option>
            </Select>
          </VStack>
          {coordinatorId ? (
            <VStack
              w={{ base: "100%", lg: "38%" }}
              alignItems="flex-start"
              pt={{ base: "1rem", lg: "0" }}
            >
              <Text fontWeight="bold" color="purple.average" fontSize="1.5rem">
                Famille
              </Text>
              <Select
                placeholder="Choisissez une option"
                w="100%"
                onChange={handleFilterFamily}
              >
                {families.map((family) => (
                  <option>{family?.lastname}</option>
                ))}
              </Select>
            </VStack>
          ) : null}
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
            Annonces Ouvertes
          </Heading>
        </Flex>

        <TableContainer>
          <Table variant="simple">
            <Thead bgColor="gray.200">
              <Tr>
                <Th> {coordinatorId && "Famille"}</Th>
                <Th>Titre de l'annonce</Th>
                <Th isNumeric>Nombre d'offres</Th>
                <Th>Taux horaire</Th>
                <Th>Date de création</Th>
                <Th>État</Th>
                {freelancerId === undefined && <Th> </Th>}
              </Tr>
            </Thead>
            <Tbody>
              {annonces &&
                annonces
                  .filter(
                    (opt) =>
                      (opt.title?.toLowerCase().includes(input) &&
                        opt.fk_family_id?.lastname?.includes(familyName) &&
                        opt.status?.includes(option)) ||
                      (opt.fk_annonce_id?.title
                        ?.toLowerCase()
                        .includes(input) &&
                        opt.fk_annonce_id?.status?.includes(option))
                  )
                  .map((data) => (
                    <Tr key={data.id}>
                      <Td>
                        {coordinatorId ? (
                          <Link
                            href={`/profil-coordinator/${coordinatorId}/famille/${data.familyId}`}
                            _hover={{ color: "pink.light", fontWeight: "700" }}
                          >
                            {data.fk_family_id?.lastname}{" "}
                          </Link>
                        ) : null}
                      </Td>
                      <Td>
                        {coordinatorId && (
                          <Link
                            href={`/profil-coordinator/${coordinatorId}/mes-annonces/${data.id}`}
                            _hover={{ color: "pink.light", fontWeight: "700" }}
                          >
                            {data.title}{" "}
                          </Link>
                        )}
                        {employerId && (
                          <Link
                            href={`/profil-employer/${employerId}/mes-annonces/${data.id}`}
                            _hover={{ color: "pink.light", fontWeight: "700" }}
                          >
                            {data.title || data.fk_annonce_id?.title}{" "}
                          </Link>
                        )}
                        {freelancerId && (
                          <Link
                            href={`/profil/${freelancerId}/mes-annonces/${data.fk_annonce_id?.id}`}
                            _hover={{ color: "pink.light", fontWeight: "700" }}
                          >
                            {data.title || data.fk_annonce_id?.title}{" "}
                          </Link>
                        )}
                      </Td>

                      <Td isNumeric>{data.annonce_offers?.length}</Td>
                      <Td>{data.price || data.fk_annonce_id?.price} €</Td>
                      <Td>
                        {dateFormat(
                          data.dateCreated || data.fk_annonce_id?.dateCreated,
                          "dd/mm/yyyy"
                        )}
                      </Td>
                      <Td>
                        <Tag>{data.status || data.fk_annonce_id?.status}</Tag>
                      </Td>
                      {/* {data.status === "Brouillon" ? (
                          <Tag colorScheme="gray">{data.status} </Tag>
                        ) : null}
                        {data.status === "Rejetée" ? (
                          <Tag colorScheme="red">{data.status} </Tag>
                        ) : null}
                        {data.status === "Ouverte" ||
                        data.status === "En cours" ? (
                          <Tag colorScheme="green">{data.status} </Tag>
                        ) : (
                          <Tag>{data.status} </Tag>
                        )} */}
                      {freelancerId === undefined ||
                        data.status === "Brouillon" ||
                        (data.fk_annonce_id?.status === "Brouillon" && (
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
                        ))}
                    </Tr>
                  ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
}

export default EmployerSelect;
