import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { getOneItemOfList } from "../services/ProfileProUtils";
import DocumentCarousel from "../components/ProfileFreelancer/DocumentUpload/DocumentCarousel";
import ModalDeletionFamily from "../components/ProfilCoordinator/ModalDeletionFamily";
import ModalUpdateFamily from "../components/ProfilCoordinator/ModalUpdateFamily";

function FamilyOverview() {
  const { freelancerId, familyId } = useParams();

  const [oneFamily, setOneFamily] = useState([]);
  const [updated, setUpdated] = useState(false);

  const GetAFamily = () => {
    getOneItemOfList("coordinators", "famille", freelancerId, familyId).then(
      (res) => {
        setOneFamily(res.data);
      }
    );
  };

  useEffect(() => {
    GetAFamily();
  }, [updated]);

  return (
    <Box bgColor="background.gray" h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        w={{ base: "95%", lg: "80%" }}
        gap="20px"
        m="auto"
        paddingY="30px"
        direction={{ base: "column", lg: "row" }}
        paddingTop="150px"
      >
        <Box
          w={{ base: "95%", lg: "49%" }}
          h="auto"
          bgColor="white"
          borderRadius="21px"
          p="25px"
          boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
        >
          <Heading
            as="h2"
            color="purple.light"
            fontSize="1.5rem"
            fontWeight="700"
            paddingBottom="2rem"
            textAlign="center"
          >
            Fiche récapitulative de l'accompagnement
          </Heading>
          <Heading as="h3" color="purple.average" fontSize="1em">
            Prénom et nom de la personne
          </Heading>
          <Text color="grey" pt="0.1rem">
            {oneFamily.firstname} {oneFamily.lastname}
          </Text>
          <Heading as="h3" color="purple.average" fontSize="1em" pt="1rem">
            Responsable légal de la personne
          </Heading>
          <Text color="grey" pt="0.1rem">
            {oneFamily.legalGuardian}
          </Text>
          <Heading as="h3" color="purple.average" fontSize="1em" pt="1rem">
            Adresse de la personne
          </Heading>
          <Text color="grey" pt="0.1rem">
            {oneFamily.address}
          </Text>
          <Heading as="h3" color="purple.average" fontSize="1em" pt="1rem">
            Numéro de téléphone de la personne
          </Heading>
          <Text color="grey" pt="0.1rem">
            {oneFamily.phoneNumber}
          </Text>
          <Heading as="h3" color="purple.average" fontSize="1em" pt="1rem">
            Adresse mail de la personne
          </Heading>
          <Text color="grey" pt="0.1rem">
            {oneFamily.email}
          </Text>
          <Heading as="h3" color="purple.average" fontSize="1em" pt="1rem">
            Type de handicap de la personne
          </Heading>
          <Text color="grey" pt="0.1rem">
            {oneFamily.disabilityType}
          </Text>
          <Heading as="h3" color="purple.average" fontSize="1em" pt="1rem">
            Informations complémentaires sur la personne
          </Heading>
          <Text color="grey" pt="0.1rem">
            {oneFamily.complementary_info}
          </Text>
          <Flex
            justifyContent="center"
            flexDir={{ base: "column", lg: "row" }}
            alignItems="center"
          >
            <ModalUpdateFamily oneFamily={oneFamily} />
            <ModalDeletionFamily />
          </Flex>
        </Box>
        <Box w={{ base: "95%", lg: "49%" }} borderRadius="21px">
          <DocumentCarousel setUpdated={setUpdated} />
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}

export default FamilyOverview;
