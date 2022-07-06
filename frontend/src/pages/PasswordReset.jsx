import { Box, Flex, Text, Heading, Link, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import backendAPI from "../services/backendAPI";

export default function PasswordReset() {
  const goBack = () => {
    window.history.back();
  };
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const tokentest = searchParams.get("token");
  const idtest = searchParams.get("id");

  const resetSubmit = () => {
    backendAPI.post("/api/auth/resetPassword", {
      userToken: tokentest,
      userId: parseInt(idtest, 10),
      password: newPassword,
    });
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
            HELLO WORLD
          </Text>
          <Text>
            Search params : {tokentest} et {idtest}
          </Text>
          <Input
            type="password"
            id="loginPassword"
            name="Mot de passe"
            placeholder="Mot de passe"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <Text
            align="center"
            mt="15px"
            mb="15px"
            fontWeight="400"
            fontSize="md"
            color="#737c85"
          >
            <button type="button" onClick={resetSubmit}>
              My super reset button
            </button>
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
