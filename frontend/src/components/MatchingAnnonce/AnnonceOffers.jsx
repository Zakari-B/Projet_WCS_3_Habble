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
  Text,
  TableContainer,
  Box,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { MdStar, MdCall } from "react-icons/md";
import { getOneItemOfList } from "../../services/ProfileProUtils";
import AcceptOfferModal from "./AcceptOfferModal";
import OfferDetailModal from "./OfferDetailModal";

// import { useState } from "react";

export default function AnnonceOffers({ offers }) {
  console.warn(offers);
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

  const { employerId } = useParams();

  console.warn(employerId);
  const { freelancerId } = useParams();
  const { id } = useParams();
  const [freelancerCurrentOffer, setFreelancerCurrentOffer] = useState({
    id: 1,
    annonceId: 1,
    freelancerId: 3,
    price: 20.0,
    message:
      "Bonjour je peux vous aider sur la partie accompagnement scolaireBonjour je peux vous aider sur la partie accompagnement scolaireBonjour je peux vous aider sur la partie accompagnement scolaireBonjour je peux vous aider sur la partie accompagnement scolaire",
    availableIn: "4 jours",
    status: "Acceptée",
    freelancer: {
      displayName: "MarieS",
      activityDescription: "Assistante devoir",
      zipCode: "83600",
      experienceYear: 3,
      picture: "",
    },
  });

  const role = localStorage.getItem("role");
  let offersForAFreelancer = [];
  console.warn(employerId);
  // si le role est employer on va voir toutes les offres
  // se le role est freelancer on va checker si une offre existe pour ce freelancer

  if (freelancerId) {
    const idCheck = freelancerId;
    offersForAFreelancer = offers.filter(
      (offer) => offer.freelancerId === idCheck
    );
    console.warn(offersForAFreelancer);
  }

  // si une offre existe on affiche l'offre en question
  if (offersForAFreelancer.length > 0) {
    getOneItemOfList("freelancer", "offers", freelancerId, id).then((res) =>
      setFreelancerCurrentOffer(res.data)
    );
  }

  // si elle n'existe pas on va afficher un message au freelancer

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
          {role === "employer"
            ? `Offres reçues (${offers.length})`
            : `Offres en cours`}
        </Heading>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead bgColor="gray.200">
            <Tr>
              <Th>OFFRES({offers.length})</Th>
              <Th>REPUTATION</Th>
              <Th> DETAILS</Th>
              <Th> ACTION</Th>
            </Tr>
          </Thead>
          {employerId ? (
            <Tbody>
              {offers.map((offer) => (
                <Tr>
                  <Td role="group">
                    <Flex alignItems="center" gap="20px">
                      {offer.freelancer.picture ? (
                        <Image
                          src={offer.freelancer.picture}
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
                            onClick={onAcceptOpen}
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
                          <AcceptOfferModal
                            isOpen={isAcceptOpen}
                            onOpen={onAcceptOpen}
                            onClose={onAcceptClose}
                          />
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
                        onClick={onDetailOpen}
                      />
                      <OfferDetailModal
                        isOpen={isDetailOpen}
                        onOpen={onDetailOpen}
                        onClose={onDetailClose}
                        offer={offers[0]}
                      />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          ) : (
            <Tbody>
              <Tr>
                <Td role="group">
                  <Flex alignItems="center" gap="20px">
                    {freelancerCurrentOffer.freelancer.picture ? (
                      <Image
                        src={freelancerCurrentOffer.freelancer.picture}
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
                      <Text color="#415161" lineHeight="1.5em" fontWeight="700">
                        {freelancerCurrentOffer.freelancer.displayName}
                      </Text>
                      <Text fontSize="sm">
                        {freelancerCurrentOffer.freelancer.activityDescription}
                      </Text>
                      <Text fontSize="sm">
                        {freelancerCurrentOffer.freelancer.zipCode}
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
                      {freelancerCurrentOffer.freelancer.experienceYear}{" "}
                      année(s) d'expérience
                    </Text>
                    <Text fontSize="sm">0 mission(s) effectuée(s)</Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex direction="column" gap="5px">
                    <Text fontSize="md" color="purple.average" fontWeight="700">
                      {freelancerCurrentOffer.price.toFixed(2)}€
                    </Text>
                    <Text fontSize="sm">
                      en {freelancerCurrentOffer.availableIn}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex direction="column" gap="5px">
                    <IconButton
                      w="50px"
                      aria-label="Search database"
                      icon={<SearchIcon />}
                      onClick={onDetailOpen}
                    />
                    <OfferDetailModal
                      isOpen={isDetailOpen}
                      onOpen={onDetailOpen}
                      onClose={onDetailClose}
                      offer={freelancerCurrentOffer}
                    />
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          )}
        </Table>
      </TableContainer>
    </Flex>
  );
}
