import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnnonceCard from "./AnnonceCard";
import backendAPI from "../../../services/backendAPI";

export default function AnnonceCarousel({ updated, setUpdated }) {
  const { employerId } = useParams();
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState([]);

  const getannouncements = () => {
    backendAPI.get(`api/employers/${employerId}/annonces`).then((response) => {
      if (response.data !== "Il n'y a pas encore d'activité") {
        setAnnouncements(response.data);
      }
    });
  };

  const postAnnonce = () => {
    backendAPI
      .post(`api/employers/${employerId}/annonce`, {
        title: "Nouvelle Annonce ",
        description: "Exemple description",
        zipCode: "00000",
        emergency: false,
        price: 0,
        status: "Brouillon",
      })
      .then((response) => {
        backendAPI.put(
          `api/employers/${employerId}/annonce/${response.data.id}`,
          { title: `Nouvelle Annonce #${response.data.id}` }
        );
        navigate(
          `/deposer-une-annonce/${employerId}/annonce/${response.data.id}`
        );
      })
      .catch((error) => {
        console.warn(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    getannouncements();
  }, [updated]);

  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
    >
      <Flex justify="space-between" alignItems="center" mb="40px">
        <Heading as="h2" color="purple.light" fontSize="1.5em" fontWeight="700">
          Mes annonces
        </Heading>

        <Button variant="outline_Pink" onClick={postAnnonce}>
          Ajouter
        </Button>
      </Flex>

      <Flex direction="column">
        {announcements.length === 0 ? (
          <Text color="gray" fontSize="16px" fontWeight="500">
            Il n'y a pas encore d'annonce.
          </Text>
        ) : (
          announcements
            .filter((ann) => ann.status !== "uncompleted")
            .sort((a, b) => b.status.localeCompare(a.status))
            .map((annonce) => (
              <AnnonceCard
                annonce={annonce}
                key={annonce.id}
                updated={updated}
                setUpdated={setUpdated}
              />
            ))
        )}
      </Flex>
    </Flex>
  );
}
