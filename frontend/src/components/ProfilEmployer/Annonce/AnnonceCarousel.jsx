import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AnnonceCard from "./AnnonceCard";
import backendAPI from "../../../services/backendAPI";

export default function AnnonceCarousel() {
  // const [annoncelist] = useState([
  //   {
  //     id: 1,
  //     title: "Aide aux devoirs",
  //     description:
  //       "J'ai besoin d'aide pour les devoirs de mon fils souffrant de troubles autistiques",
  //     expertise: "conseils éducatifs",
  //     price: 40,
  //     zipCode: "83000",
  //     location: "domicile",
  //     emergency: true,
  //   },
  //   {
  //     id: 1,
  //     title: "Aide aux devoirs",
  //     description:
  //       "J'ai besoin d'aide pour les devoirs de mon fils souffrant de troubles autistiques",
  //     expertise: "conseils éducatifs",
  //     price: 40,
  //     zipCode: "83000",
  //     location: "domicile",
  //     emergency: true,
  //   },
  // ]);

  const { employerId } = useParams();
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState([]);

  const getannouncements = () => {
    backendAPI
      .get(`api/employers/${employerId}/annonces`)
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.warn(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    getannouncements();
  }, []);

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
        <Link to={`/deposer-une-annonce/${employerId}`}>
          <Button variant="outline_Pink">Ajouter</Button>
        </Link>
      </Flex>

      <Flex direction="column">
        {announcements.length === 0 ? (
          <Text color="gray" fontSize="16px" fontWeight="500">
            Il n'y a pas encore d'activité.
          </Text>
        ) : (
          announcements.map((annonce) => (
            <AnnonceCard annonce={annonce} key={annonce.id} />
          ))
        )}
      </Flex>
    </Flex>
  );
}
