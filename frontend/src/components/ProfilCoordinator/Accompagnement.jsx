import { useState, useEffect } from "react";
import { Flex, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import backendAPI from "../../services/backendAPI";
import ModalAddFamily from "./ModalAddFamily";

export default function Accompagnement() {
  const navigate = useNavigate();
  const [family, setFamily] = useState([]);
  const { freelancerId } = useParams();

  useEffect(() => {
    backendAPI
      .get(`/api/coordinators/${freelancerId}/familles`)
      .then((res) => setFamily(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
      gap="40px"
    >
      <Flex justify="space-between" direction="column">
        <Heading
          as="h2"
          color="purple.light"
          fontSize="1.5em"
          fontWeight="700"
          paddingBottom="2rem"
        >
          Mes accompagnements
        </Heading>
        <VStack alignItems="left">
          {family.length === 0 ? (
            <Text color="purple.average" fontSize="14px">
              Vous n'avez pas encore créé de famille.
            </Text>
          ) : (
            family.map((fam) => {
              return (
                <Button
                  color="pink.light"
                  bgColor="white"
                  w="100%"
                  fontWeight="0"
                  _hover={{ bgColor: "white" }}
                  _focus={{ bgColor: "white" }}
                  mb="0.5rem"
                  onClick={() =>
                    navigate(
                      `/profil-coordinator/${freelancerId}/famille/${fam.id}`
                    )
                  }
                >
                  {fam.firstname} {fam.lastname}
                </Button>
              );
            })
          )}
        </VStack>
        <ModalAddFamily />
      </Flex>
    </Flex>
  );
}
