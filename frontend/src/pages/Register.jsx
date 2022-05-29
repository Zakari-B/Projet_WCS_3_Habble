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

export default function Register() {
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} />

      <Flex bgColor="background.gray" alignItems="center">
        <Flex
          direction="column"
          bgColor="white"
          w={{ sm: "100%", md: "750px" }}
          m="auto"
          alignItems="center"
          boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
          padding="40px 0px 0px 0px"
          marginTop="100px"
        >
          <Heading as="h2" size="md" color="purple.average">
            Que cherchez vous ?
          </Heading>
          <HStack
            paddingY="60px"
            justify="center"
            alignItems="flex-start"
            wrap="wrap"
          >
            <VStack
              w={{ sm: "100%", md: "40%" }}
              p="20px"
              alignItems="center"
              borderRight={{ base: "none", md: "1px solid #eee" }}
              borderBottom={{ base: "1px solid #eee", md: "none" }}
            >
              <Text color="#415161" fontWeight="600">
                Une aide
              </Text>
              <Text color="#415161">
                Déposez une annonce, recevez des propositions personnalisées,
                discutez par messagerie privée des détails, choisissez le ou les
                professionnel(s), profitez !
              </Text>
              <Button variant="solid_PrimaryColor">S'INSCRIRE</Button>
            </VStack>
            <VStack p="20px" w={{ sm: "100%", md: "40%" }} alignItems="center">
              <Text color="#415161" fontWeight="600">
                Un job
              </Text>
              <Text color="#415161">
                Créer un compte professionnel pour trouver des projets de
                compensation du handicap intéressants et travailler
              </Text>
              <Button variant="solid_PrimaryColor">S'INSCRIRE</Button>
            </VStack>
          </HStack>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}

// const Register() => (
//   const param = useSearchParam()

//   if not param or param not in ("freelancer", "employeer"):
//     return (
//       <Button linkTo="/register?param=freelancer">Subribe Freelancer</Button>
//       <Button linkTo="/register?param=employeer">Subribe Employer</Button>
//     )

//   onSubmit() => (
//     axios.post(data, userType=param)
//   )

//   return (
//     <form onSubmit=onSubmit>

//     </form>
//   )
// )
