import {
  Box,
  Flex,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function WelcomeInscCoordo() {
  const navigate = useNavigate();
  const { coordinatorId } = useParams();

  const handleNavigate = () => {
    navigate(`/register-onboarding-coordo/${coordinatorId}`);
  };

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        bgColor="background.gray"
        direction="column"
        justifyContent="flex-start"
        h="90.6vh"
      >
        <Box
          w={{ base: "95%", lg: "65%" }}
          h="auto"
          ml="auto"
          mr="auto"
          mt="8rem"
          mb="1rem"
          p="1rem"
          bgColor="white"
          boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
          borderRadius="25px"
        >
          <Heading
            as="h1"
            fontWeight="700"
            color="purple.average"
            fontSize="3rem"
          >
            Merci pour votre inscription !
          </Heading>
          <Heading
            as="h2"
            fontSize="1.4rem"
            fontWeight="600"
            color="purple.average"
            mt="2rem"
          >
            Il ne vous reste plus qu'à détailler vos prestations pour que votre
            profil professionel soit visible en ligne
          </Heading>
          <Text fontWeight="600" color="purple.average" mt="2rem">
            Vous pourrez ensuite transmettre vos documents (pièce d'identité,
            justificatif de qualification, extrait de casier judiciaire), pour
            que votre profil apparaisse comme vérifié
          </Text>
          <OrderedList
            fontWeight="600"
            color="purple.average"
            pt="3.5rem"
            pl="1.5rem"
          >
            <ListItem pb="0.5rem">Créez votre profil professionnel</ListItem>
            <ListItem pb="0.5rem">Importez vos documents</ListItem>
            <ListItem>
              Faites vérifier votre profil et recevez des propositions de
              mission
            </ListItem>
          </OrderedList>
          <Button
            variant="solid_PrimaryColor"
            onClick={handleNavigate}
            mt="2rem"
          >
            Démarrez
          </Button>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
