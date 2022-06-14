import { Box, Flex, Text, Heading, Link } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function Erreur() {
  const goBack = () => {
    window.history.back();
  };
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        h="90vh"
      >
        <Heading
          as="h2"
          p="4rem 0"
          fontWeight="400"
          fontSize="22px"
          align="left"
          w="80%"
          mx="auto"
          mt="100px"
        >
          Introuvable
        </Heading>
        <Box
          bgColor="white"
          w="80%"
          mx="auto"
          mb="20px"
          boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
          p="30px"
          borderRadius="21px"
          fontWeight="500"
          color="purple.average"
          fontSize="md"
          lineHeight="1.7em"
        >
          <Heading
            as="h1"
            m="2rem 0 2rem 0"
            fontSize="3xl"
            align="center"
            fontWeight="600"
          >
            Erreur 404
          </Heading>
          <Text
            align="center"
            mt="15px"
            mb="15px"
            fontWeight="500"
            fontSize="md"
          >
            Désolé, la page que vous recherchez n'existe pas!
          </Text>
          <Text
            align="center"
            mt="15px"
            mb="15px"
            fontWeight="400"
            fontSize="md"
            color="#737c85"
          >
            Retournez à la{" "}
            <Link href="/" textDecor="underline">
              page d'accueil
            </Link>{" "}
            ou à la{" "}
            <Link href="##" onClick={goBack} textDecor="underline">
              page précédente
            </Link>{" "}
            .
          </Text>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
