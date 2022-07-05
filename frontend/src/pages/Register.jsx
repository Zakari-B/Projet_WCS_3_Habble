import { Link, useSearchParams } from "react-router-dom";

import {
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";

export default function Register() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  return (
    <Box bgColor="background.gray" h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      {role === "freelancer" || role === "employer" ? (
        <SignupForm />
      ) : (
        <Flex
          bgColor="background.gray"
          alignItems="center"
          h="90vh"
          paddingTop="100px"
        >
          <Flex
            direction="column"
            bgColor="white"
            w={{ sm: "95%", lg: "55%" }}
            m="auto"
            alignItems="center"
            boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
            padding="40px 0px 0px 0px"
            marginY="100px"
            borderRadius="25px"
          >
            <Heading as="h2" size="md" color="purple.average">
              Que cherchez vous ?
            </Heading>
            <HStack
              paddingY="60px"
              justify="center"
              alignItems="flex-start"
              wrap={{ base: "wrap", lg: "nowrap" }}
            >
              <VStack
                w={{ sm: "100%", lg: "33%" }}
                p="20px"
                alignItems="center"
                borderRight={{ base: "none", lg: "1px solid #eee" }}
                borderBottom={{ base: "1px solid #eee", lg: "none" }}
              >
                <Text color="#415161" fontWeight="700">
                  Une aide
                </Text>
                <Text color="#415161">
                  Déposez une annonce, recevez des propositions personnalisées,
                  discutez par messagerie privée des détails, choisissez le ou
                  les professionnel(s), profitez !
                </Text>
                <Link to="/register/?role=employer">
                  <Button
                    variant="solid_PrimaryColor"
                    src="/register/?role=employer"
                    fontWeight="700"
                  >
                    S'INSCRIRE
                  </Button>
                </Link>
              </VStack>
              <VStack
                w={{ sm: "100%", lg: "33%" }}
                p="20px"
                alignItems="center"
                borderRight={{ base: "none", lg: "1px solid #eee" }}
                borderBottom={{ base: "1px solid #eee", lg: "none" }}
              >
                <Text color="#415161" fontWeight="700">
                  A coordoner
                </Text>
                <Text color="#415161">
                  Vous êtes un service de répit? Coordoner vos intervenants,
                  gérez les missions et recevez des demandes.
                </Text>
                <Link to="/register/?role=coordinator">
                  <Button
                    variant="solid_PrimaryColor"
                    src="/register/?role=coordinator"
                    fontWeight="700"
                  >
                    S'INSCRIRE
                  </Button>
                </Link>
              </VStack>
              <VStack
                p="20px"
                w={{ sm: "100%", lg: "33%" }}
                alignItems="center"
              >
                <Text color="#415161" fontWeight="700">
                  Un job
                </Text>
                <Text color="#415161">
                  Créer un compte professionnel pour trouver des projets de
                  compensation du handicap intéressants et travailler
                </Text>
                <Link to="/register/?role=freelancer">
                  <Button variant="solid_PrimaryColor" fontWeight="700">
                    S'INSCRIRE
                  </Button>
                </Link>
              </VStack>
            </HStack>
          </Flex>
        </Flex>
      )}
      <Footer />
    </Box>
  );
}
