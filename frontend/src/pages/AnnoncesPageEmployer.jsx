import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import AnnonceRecap from "../components/MatchingAnnonce/AnnonceRecap";
import AnnonceOffers from "../components/MatchingAnnonce/AnnonceOffers";
// import { getOneItemOfList } from "../services/ProfileProUtils";

export default function AnnoncesPageEmployer() {
  // const { roleid, id } = useParams();
  const [currentAnnonce] = useState({
    id: 1,
    title: "Aide aux devoirs",
    description:
      "J'ai besoin d'aide pour les devoirs de mon fils souffrant de troubles autistiques J'ai besoin d'aide pour les devoirs de mon fils souffrant de troubles autistiques J'ai besoin d'aide pour les devoirs de mon fils souffrant de troubles autistiques",
    expertise: "conseils éducatifs",
    price: 40,
    zipCode: "83000",
    location: "domicile",
    emergency: true,
    createdAt: "25/06/2022",
    status: "Actif",
    services: [
      "Activités ludiques et sportives",
      "Compagnie et support social",
    ],
  });

  const [fakeOffers] = useState([
    {
      id: 1,
      annonceId: 1,
      freelancerId: 7,
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
    },
    {
      id: 2,
      annonceId: 1,
      freelancerId: 8,
      price: 80.0,
      message:
        "Bonjour je peux vous aider sur la partie accompagnement scolaire",
      availableIn: "4 jours",
      status: "Refusée",
      freelancer: {
        displayName: "Pierre Jacques",
        activityDescription: "Assistante devoir",
        zipCode: "83600",
        experienceYear: 3,
        picture: "",
      },
    },
    {
      id: 2,
      annonceId: 1,
      freelancerId: 8,
      price: 20.0,
      message:
        "Bonjour je peux vous aider sur la partie accompagnement scolaire",
      availableIn: "4 jours",
      status: "Refusée",
      freelancer: {
        displayName: "Pierre Jacques",
        activityDescription: "Assistante devoir",
        zipCode: "83600",
        experienceYear: 3,
        picture: "",
      },
    },
  ]);
  // getOneItemOfList("employers", roleid, "annonces", id)
  //   .then((res) => setCurrentAnnonce(res.data))
  //   .catch((error) => {
  //     console.warn(error);
  //   });
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        paddingY="30px"
        paddingTop="150px"
        gap="20px"
      >
        <AnnonceRecap annonce={currentAnnonce} offers={fakeOffers} />
        <AnnonceOffers offers={fakeOffers} />
      </Flex>
    </Box>
  );
}
