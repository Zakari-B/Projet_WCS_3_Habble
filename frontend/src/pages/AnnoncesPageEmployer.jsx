import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import AnnonceRecap from "../components/MatchingAnnonce/AnnonceRecap";
import AnnonceOffers from "../components/MatchingAnnonce/AnnonceOffers";
import { getListforAnId, getSubListforAnId } from "../services/ProfileProUtils";

export default function AnnoncesPageEmployer() {
  const { id } = useParams();

  const [currentAnnonce, setCurrentAnnonce] = useState({});
  const [updated, setUpdated] = useState(false);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getListforAnId("annonces", id)
      .then((res) => {
        setCurrentAnnonce(res.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [updated, offers]);

  useEffect(() => {
    getSubListforAnId("annonces", id, "offers")
      .then((res) => {
        setOffers(res.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [updated]);

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
        <AnnonceRecap
          annonce={currentAnnonce}
          offers={offers}
          updated={updated}
          setUpdated={setUpdated}
        />
        <AnnonceOffers
          offers={offers}
          updated={updated}
          setUpdated={setUpdated}
        />
      </Flex>
    </Box>
  );
}
