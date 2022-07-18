import {
  Flex,
  Heading,
  Table,
  Thead,
  Image,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Tag,
  Text,
  TableContainer,
  Box,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SearchIcon, EditIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { MdStar, MdCall } from "react-icons/md";
import { getOneItemfromtwoLists } from "../../services/ProfileProUtils";
import AcceptOfferModal from "./AcceptOfferModal";
import OfferDetailModal from "./OfferDetailModal";
import EditOfferModal from "./EditOfferModal";

export default function AnnonceOffers({ offers }) {
  const {
    isOpen: isAcceptOpen,
    onOpen: onAcceptOpen,
    onClose: onAcceptClose,
  } = useDisclosure();

  const {
    isOpen: isDetailOpen,
    onOpen: onDetailOpen,
    onClose: onDetailClose,
  } = useDisclosure();

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  const { employerId, coordinatorId } = useParams();
  const { freelancerId } = useParams();
  const { id } = useParams();
  const [currentOffer, setCurrentOffer] = useState({});
  const [freelancerCurrentOffer, setFreelancerCurrentOffer] = useState({});
  const role = localStorage.getItem("role");
  // si le role est employer on va voir toutes les offres

  // si le role est freelancer on va checker si une offre existe pour ce freelancer

  useEffect(() => {
    if (freelancerId) {
      getOneItemfromtwoLists(
        "freelancers",
        "annonces",
        "offers",
        freelancerId,
        id
      )
        .then((res) => {
          setFreelancerCurrentOffer(res.data[0]);
        })
        .catch(() => setFreelancerCurrentOffer(""));
    }
  }, []);

  return (
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
          {role === "employer" || role === "coordinator"
            ? `Offres reçues (${offers.length})`
            : `Mon Offre`}
        </Heading>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead bgColor="gray.200">
            <Tr>
              <Th>
                {role === "employer" || role === "coordinator"
                  ? `OFFRES(${offers.length})`
                  : `MON OFFRE`}
              </Th>
              <Th>REPUTATION</Th>
              <Th> DETAILS</Th>
              <Th> ACTION</Th>
              <Th> STATUS</Th>
            </Tr>
          </Thead>
          {employerId || coordinatorId ? (
            <Tbody>
              {offers.map((offer) => (
                <Tr>
                  <Td role="group">
                    <Flex alignItems="center" gap="20px">
                      {offer.freelancer.picture ? (
                        <Image
                          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                            offer.freelancer.picture
                          }`}
                          height="60px"
                          width="60px"
                          borderRadius="100%"
                          border="1px solid gray.200"
                        />
                      ) : (
                        <Avatar
                          src="https://bit.ly/broken-link"
                          height="60px"
                          width="60px"
                          maxW="60px"
                          maxH="60px"
                        />
                      )}
                      <Flex direction="column" gap="5px">
                        <Text
                          color="#415161"
                          lineHeight="1.5em"
                          fontWeight="700"
                        >
                          {offer.freelancer.displayName}
                        </Text>
                        <Text fontSize="sm">
                          {offer.freelancer.activityDescription}
                        </Text>
                        <Text fontSize="sm">{offer.freelancer.zipCode}</Text>
                        <Flex gap="10px">
                          <Button
                            size="sm"
                            fontSize="12px"
                            variant="solid_PrimaryColor"
                            onClick={() => {
                              setCurrentOffer(offer);
                              onAcceptOpen();
                            }}
                          >
                            Accepter l'offre
                          </Button>
                          <Button
                            size="sm"
                            variant="outline_Pink"
                            fontSize="12px"
                            leftIcon={<MdCall />}
                          >
                            Contact
                          </Button>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex direction="column" gap="5px">
                      <Flex mt={2} align="center">
                        <Box as={MdStar} color="pink.light" fontSize="md" />
                        <Text fontSize="md" color="purple.average">
                          <b>4.84</b> (190)
                        </Text>
                      </Flex>
                      <Text fontSize="sm">
                        {offer.freelancer.experienceYear} année(s) d'expérience
                      </Text>
                      <Text fontSize="sm">0 mission(s) effectuée(s)</Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex direction="column" gap="5px">
                      <Text
                        fontSize="md"
                        color="purple.average"
                        fontWeight="700"
                      >
                        {offer.price.toFixed(2)}€
                      </Text>
                      <Text fontSize="sm">en {offer.availableIn}</Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex direction="column" gap="5px">
                      <IconButton
                        w="50px"
                        aria-label="Search database"
                        icon={<SearchIcon />}
                        onClick={() => {
                          setCurrentOffer(offer);
                          onDetailOpen();
                        }}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Tag>{offer.status}</Tag>
                  </Td>
                </Tr>
              ))}
              <OfferDetailModal
                key={`${currentOffer.id}_${currentOffer.freelancer?.displayName}`}
                isOpen={isDetailOpen}
                onOpen={onDetailOpen}
                onClose={onDetailClose}
                offer={currentOffer}
              />
              <AcceptOfferModal
                isOpen={isAcceptOpen}
                onOpen={onAcceptOpen}
                onClose={onAcceptClose}
                offer={currentOffer}
              />
            </Tbody>
          ) : (
            <Tbody>
              {!freelancerCurrentOffer ? (
                <Tr>
                  <Td>
                    <Flex alignItems="center" gap="20px">
                      <Text fontSize="sm">
                        Vous n'avez pas encore fait d'offre pour cette annonce
                      </Text>
                    </Flex>
                  </Td>
                </Tr>
              ) : (
                <Tr>
                  <Td role="group">
                    <Flex alignItems="center" gap="20px">
                      {freelancerCurrentOffer.freelancer?.picture ? (
                        <Box
                          minW="60px"
                          minH="60px"
                          maxW="60px"
                          maxH="60px"
                          height="60px"
                          width="60px"
                        >
                          <Image
                            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                              freelancerCurrentOffer.freelancer.picture
                            }`}
                            height="60px"
                            width="60px"
                            borderRadius="100%"
                            border="1px solid gray.200"
                          />
                        </Box>
                      ) : (
                        <Avatar
                          src="https://bit.ly/broken-link"
                          height="60px"
                          width="60px"
                          maxW="60px"
                          maxH="60px"
                        />
                      )}
                      <Flex direction="column" gap="5px">
                        <Text
                          color="#415161"
                          lineHeight="1.5em"
                          fontWeight="700"
                        >
                          {freelancerCurrentOffer.freelancer?.displayName}
                        </Text>
                        <Text fontSize="sm">
                          {
                            freelancerCurrentOffer.freelancer
                              ?.activityDescription
                          }
                        </Text>
                        <Text fontSize="sm">
                          {freelancerCurrentOffer.freelancer?.zipCode}
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex direction="column" gap="5px">
                      <Flex mt={2} align="center">
                        <Box as={MdStar} color="pink.light" fontSize="md" />
                        <Text fontSize="md" color="purple.average">
                          <b>4.84</b> (190)
                        </Text>
                      </Flex>
                      <Text fontSize="sm">
                        {freelancerCurrentOffer.freelancer?.experienceYear}{" "}
                        année(s) d'expérience
                      </Text>
                      <Text fontSize="sm">0 mission(s) effectuée(s)</Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex direction="column" gap="5px">
                      <Text
                        fontSize="md"
                        color="purple.average"
                        fontWeight="700"
                      >
                        {freelancerCurrentOffer.price?.toFixed(2)}€
                      </Text>
                      <Text fontSize="sm">
                        en {freelancerCurrentOffer.availableIn}
                      </Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex gap="5px">
                      <IconButton
                        w="50px"
                        aria-label="View Offer"
                        icon={<SearchIcon />}
                        onClick={onDetailOpen}
                      />
                      <IconButton
                        w="50px"
                        aria-label="Modify Offer"
                        icon={<EditIcon />}
                        onClick={onEditOpen}
                      />
                      <OfferDetailModal
                        isOpen={isDetailOpen}
                        onOpen={onDetailOpen}
                        onClose={onDetailClose}
                        offer={freelancerCurrentOffer}
                      />
                      <EditOfferModal
                        isOpen={isEditOpen}
                        onOpen={onEditOpen}
                        onClose={onEditClose}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Tag>{freelancerCurrentOffer.status}</Tag>
                  </Td>
                </Tr>
              )}
            </Tbody>
          )}
        </Table>
      </TableContainer>
    </Flex>
  );
}
