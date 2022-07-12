import { Flex, Box, Text, Checkbox, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer";
import backendAPI from "../../../services/backendAPI";
import ProfileCard from "../../Search/ProfileCard";

export default function AnnonceFreelancerSearchForm() {
  const { annonceId } = useParams();
  const [freelancers, setFreelancers] = useState([]);

  const searchMatchingFreelancer = () => {
    // get pour récupérer les services demandés dans l'annonce
    const promiseAnnonceServices = backendAPI.get(
      `api/annonce/${parseInt(annonceId, 10)}/services`
    );

    // get l'annonce en cours
    const promiseCurrentAnnonce = backendAPI.get(
      `api/annonces/${parseInt(annonceId, 10)}`
    );

    // get pour filtrer les freelancer dans le secteur de l'annonce et avec les services
    Promise.all([promiseAnnonceServices, promiseCurrentAnnonce]).then(
      (response) => {
        const services = response[0].data.map((e) => e.fk_service_id.name);

        backendAPI
          .get(
            `api/freelancers/search/filtered?cityCode=${response[1].data.zipCode}&serviceList=${services}`
          )
          .then((res) => {
            setFreelancers(res.data);
          });
      }
    );
  };

  useEffect(() => {
    searchMatchingFreelancer();
  }, []);

  // fonction ajout freelancer via checkbox//

  const [expertiseList, setExpertiseList] = useState([]);

  const updateExpertise = (e) => {
    if (e.target.checked && !expertiseList.includes(e.target.value)) {
      setExpertiseList([...expertiseList, e.target.value]);
    } else if (!e.target.checked) {
      const expertiseListFilter = expertiseList.filter(
        (elem) => elem !== e.target.value
      );
      expertiseList.splice(expertiseList.indexOf(e.target.value), 1);

      setExpertiseList(expertiseListFilter);
    }
  };
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        paddingTop="150px"
        minH="60vh"
        paddingBottom="50px"
        gap="50px"
      >
        <Flex direction="column" gap="10px" alignItems="center">
          <Text
            as="h2"
            color="purple.average"
            w={{ base: "95%", lg: "80%" }}
            fontSize="1.5em"
            fontWeight="700"
            m="auto"
            align="center"
          >
            Étape 2 : Sélectionnez les professionnels
          </Text>
          {freelancers.length !== 0 && (
            <>
              <Flex justify="center" gap="3px">
                <Text color="purple.average">
                  Envoyez directement votre annonce jusqu'à 10 professionnels
                </Text>
                <Text
                  color="pink.light"
                  fontWeight="700"
                >{`(${expertiseList.length}/10)`}</Text>
              </Flex>
              <Button
                variant="solid_PrimaryColor"
                type="submit"
                width="fit-content"
                isDisabled={
                  !expertiseList.length > 0 || expertiseList.length > 10
                }
              >
                J'ai terminé, je publie mon annonce
              </Button>
            </>
          )}
        </Flex>
        <Flex
          direction="column"
          bgColor="white"
          boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
          p="100px"
          borderRadius="21px"
          border="1px solid #ededed"
          paddingY="30px"
          w={{ base: "95%", lg: "80%" }}
          m="auto"
          gap="50px"
        >
          {freelancers?.length !== 0 ? (
            <Flex
              direction="column"
              bgColor="white"
              m="auto"
              borderRadius="21px"
              gap="40px"
              marginTop="20px"
            >
              <Text
                as="h2"
                color="purple.average"
                fontSize="1.5em"
                fontWeight="700"
              >
                {freelancers?.length > 1
                  ? `${freelancers?.length} Professionnels correspondent à votre recherche`
                  : `${freelancers?.length} Professionnel correspond à votre recherche`}
              </Text>

              {freelancers?.map((freelancer) => (
                <Box
                  key={freelancer?.id}
                  borderColor="#ededed"
                  borderWidth="2px"
                  boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
                  p="20px"
                  borderRadius="md"
                >
                  <Checkbox
                    size="lg"
                    colorScheme="white"
                    borderColor="gray"
                    _checked={{
                      borderColor: "pink.light",
                      bgColor: "pink.light",
                      iconColor: "white",
                    }}
                    value={freelancer?.id}
                    onChange={updateExpertise}
                  />
                  <ProfileCard freelancer={freelancer} key={freelancer.id} />
                </Box>
              ))}
            </Flex>
          ) : (
            <Flex
              direction="column"
              bgColor="white"
              boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
              border="1px solid #ededed"
              p="30px 80px"
              m="auto"
              borderRadius="21px"
              width="80%"
              mt="0px"
              maxW="1200px"
              marginTop="20px"
              gap="40px"
              justify="flex-start"
            >
              <Text
                as="h2"
                color="purple.average"
                fontSize="1.5em"
                fontWeight="700"
              >
                Aucun professionnel ne correspond à votre recherche
              </Text>
              <Box>
                <Flex gap="10px" alignItems="flex-start" justify="flex-start">
                  <Checkbox
                    marginTop="5px"
                    size="lg"
                    colorScheme="white"
                    borderColor="gray"
                    _checked={{
                      borderColor: "pink.light",
                      bgColor: "pink.light",
                      iconColor: "white",
                    }}
                    value="Habble"
                    onChange={updateExpertise}
                  />
                  <Flex gap="10px" direction="column">
                    <Text
                      as="h3"
                      color="pink.light"
                      fontSize="1.3em"
                      fontWeight="600"
                    >
                      Transmettre ma demande à Habble
                    </Text>
                    <Text>
                      Un membre de notre équipe vous contactera via email pour
                      vous aider dans votre démarche. (Pensez à vérifier votre
                      dossier "spams")
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Button
                variant="solid_PrimaryColor"
                type="submit"
                width="fit-content"
                isDisabled={
                  !expertiseList.length > 0 || expertiseList.length > 10
                }
              >
                Transmettre ma demande
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
