import { Flex, Heading, Text, Button, Collapse } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import AnnonceCard from "./AnnonceCard";
import AnnonceFormContext from "../../../contexts/AnnonceFormContext";
import FormAnnonce from "./AnnonceForm";

export default function AnnonceCarousel() {
  const [annoncelist] = useState([
    {
      id: 1,
      title: "Aide aux devoirs",
      description:
        "J'ai besoin d'aide pour les devoirs de mon fils souffrant de troubles autistiques",
      expertise: "conseils éducatifs",
      price: 40,
      zipCode: "83000",
      location: "domicile",
      emergency: true,
    },
    {
      id: 1,
      title: "Aide aux devoirs",
      description:
        "J'ai besoin d'aide pour les devoirs de mon fils souffrant de troubles autistiques",
      expertise: "conseils éducatifs",
      price: 40,
      zipCode: "83000",
      location: "domicile",
      emergency: true,
    },
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const context = useMemo(() => ({ isVisible, setIsVisible }), []);
  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

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
        <Heading
          as="h2"
          color="purple.average"
          fontSize="1.5em"
          fontWeight="700"
        >
          Mes annonces
        </Heading>
        {!isVisible && (
          <Link to="/deposer-une-annonce">
            <Button variant="outline_Pink" onClick={toggleForm}>
              Ajouter
            </Button>
          </Link>
        )}
      </Flex>
      <Collapse in={isVisible}>
        {isVisible && (
          <AnnonceFormContext.Provider value={context}>
            <FormAnnonce />
          </AnnonceFormContext.Provider>
        )}
      </Collapse>

      <Flex direction="column">
        {annoncelist.length === 0 ? (
          <Text color="gray" fontSize="16px" fontWeight="500">
            Il n'y a pas encore d'activité.
          </Text>
        ) : (
          annoncelist.map((annonce) => (
            <AnnonceFormContext.Provider value={context}>
              <AnnonceCard annonce={annonce} key={annonce.id} />
            </AnnonceFormContext.Provider>
          ))
        )}
      </Flex>
    </Flex>
  );
}
