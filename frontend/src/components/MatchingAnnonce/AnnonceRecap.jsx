import {
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  IconButton,
  Divider,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import DeleteConfirmModal from "../DeleteConfirmModal";
import MakeOfferModal from "./MakeOfferModal";
import {
  deleteItemList,
  getSubListforAnId,
} from "../../services/ProfileProUtils";

export default function AnnonceRecap({ annonce, offers, updated, setUpdated }) {
  let tagColor = "";
  if (annonce.status === "Brouillon") {
    tagColor = "gray";
  } else if (annonce.status === "Rejetée") {
    tagColor = "red";
  } else if (annonce.status === "Ouverte" || annonce.status === "En Cours") {
    tagColor = "green";
  } else {
    tagColor = "gray";
  }
  const { freelancerId } = useParams();
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [cityAnnonce, setCityAnnonce] = useState({});
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const currentFreeOffer = offers?.filter(
    (offer) => offer.freelancerId === parseInt(freelancerId, 10)
  );

  const role = localStorage.getItem("role");
  const handleDelete = () => {
    deleteItemList(
      "freelancers",
      "offers",
      freelancerId,
      currentFreeOffer[0].id
    )
      .then(() => {
        setUpdated(!updated);
        toast({
          title: "Votre Proposition a bien été retirée",
          status: "success",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        });
      })
      .finally(window.location.reload());
  };

  useEffect(() => {
    getSubListforAnId("annonces", parseInt(id, 10), "city").then((response) => {
      setCityAnnonce(response.data[0]);
    });

    getSubListforAnId("annonce", parseInt(id, 10), "services").then(
      (response) => {
        setServices(response.data);
      }
    );
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
      <Flex justify="space-between" alignItems="flex-start">
        <Flex direction="column" gap="30px" alignItems="flex-start" w="90%">
          <Flex direction="column" gap="30px">
            <Flex gap="10px">
              <Heading
                as="h1"
                color="#415161"
                lineHeight="1.5em"
                fontWeight="700"
                fontSize="20px"
              >
                {annonce.title}
              </Heading>

              <Tag colorScheme={tagColor}> {annonce.status}</Tag>
            </Flex>

            <Text
              color="#415161"
              lineHeight="1.5em"
              fontWeight="500"
              fontSize="14px"
              noOfLines={2}
            >
              {annonce.description}
            </Text>
            <Flex minW="100%" justify="space-between" gap="100px">
              <Flex direction="column" gap="3px">
                <Text
                  color="#415161"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  Offres
                </Text>
                <Text
                  color="pink.light"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  {offers?.length}
                </Text>
              </Flex>
              <Flex direction="column" gap="3px">
                <Text
                  color="#415161"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  Offre moyenne
                </Text>
                {offers.length > 0 ? (
                  <Text
                    color="pink.light"
                    lineHeight="1.5em"
                    fontWeight="700"
                    fontSize="14px"
                  >
                    {(
                      offers
                        .map((free) => free.price)
                        .reduce((acc, value) => acc + value, 0) / offers.length
                    ).toFixed(2)}{" "}
                    €
                  </Text>
                ) : (
                  <Text
                    color="pink.light"
                    lineHeight="1.5em"
                    fontWeight="700"
                    fontSize="14px"
                  >
                    -
                  </Text>
                )}
              </Flex>
              <Flex direction="column" gap="3px">
                <Text
                  color="#415161"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  Où
                </Text>
                <Text
                  color="pink.light"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  {`${cityAnnonce?.ville_nom} (${cityAnnonce?.ville_departement})`}
                </Text>
              </Flex>
              <Flex direction="column" gap="3px">
                <Text
                  color="#415161"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  Publiée le
                </Text>
                <Text
                  color="pink.light"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  {dateFormat(annonce.dateCreated, "dd/mm/yyyy")}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Divider />
          <Flex w="100%" justify="space-between">
            <Flex direction="column" gap="10px">
              <Text
                color="#415161"
                lineHeight="1.5em"
                fontWeight="700"
                fontSize="14px"
              >
                Services requis
              </Text>

              <Flex gap="10px">
                {services.map((service) => (
                  <Tag>{service?.fk_service_id?.name}</Tag>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" gap="10px" alignItems="flex-end">
          {(role === "employer" || role === "coordinator") &&
            annonce.status === "Brouillon" && (
              <Button variant="solid_PrimaryColor">Modifier</Button>
            )}
          {(role === "employer" || role === "coordinator") &&
            annonce.status === "Ouverte" && (
              <IconButton
                colorScheme="gray"
                aria-label="Search database"
                icon={<DeleteIcon />}
                onClick={onDeleteOpen}
              />
            )}
          <DeleteConfirmModal
            onOpen={onDeleteOpen}
            isOpen={isDeleteOpen}
            onClose={onDeleteClose}
            updated={updated}
            setUpdated={setUpdated}
            type="annonce"
            item={annonce}
          />
          {role === "freelancer" && currentFreeOffer?.length === 0 && (
            <Button variant="solid_PrimaryColor" onClick={onOpen}>
              Faire une Proposition
            </Button>
          )}
          {role === "freelancer" && currentFreeOffer?.length !== 0 && (
            <Button variant="solid_PrimaryColor" onClick={handleDelete}>
              Retirer ma Proposition
            </Button>
          )}
        </Flex>
        <MakeOfferModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          updated={updated}
          setUpdated={setUpdated}
        />
      </Flex>
    </Flex>
  );
}
