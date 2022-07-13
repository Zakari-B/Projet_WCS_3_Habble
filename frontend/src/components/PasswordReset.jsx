import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Stack,
  Button,
  FormControl,
  Input,
  Divider,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";

import Header from "./Header/Header";
import Footer from "./Footer";
import backendAPI from "../services/backendAPI";

export default function PasswordReset() {
  const [resetEmail, setResetEmail] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const sendReset = () => {
    backendAPI
      .post("/api/auth/forgotPassword", {
        email: resetEmail,
      })
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: "Demande envoyée.",
            description: "Veuillez vérifier votre adresse mail.",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
          navigate("/");
        }
      })
      .catch((e) => {
        toast({
          title: `${e.response.data}`,
          status: "error",
          duration: 7000,
          position: "bottom-right",
          isClosable: true,
        });
      });
  };

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} />
      <Flex bgColor="background.gray" alignItems="center" h="85vh">
        <Flex
          className="loginForm"
          bgColor="white"
          maxWidth={{ base: "100vw", md: "482px" }}
          m="auto"
          alignItems="center"
          boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
          marginTop={{ base: "0", md: "100px" }}
          marginBottom={{ base: "0", md: "30px" }}
          borderRadius="25px"
          padding={{ base: "0", md: "30px", lg: "40px" }}
        >
          <Stack
            className="passwordResetForm"
            spacing={6}
            w={{ base: "100vw", md: "90vw", lg: "90vw" }}
            maxWidth={{ base: "100vw", md: "482px" }}
            margin={{ base: "20px", md: "auto" }}
          >
            <Heading
              as="h2"
              textAlign="center"
              fontSize="1.4rem"
              fontWeight="700"
            >
              Réinitialisez votre mot de passe
            </Heading>
            <Text textAlign="center" lineHeight="2">
              Saisissez votre adresse e-mail ci-dessous. Nous chercherons votre
              compte et vous enverrons un e-mail de réinitialisation de mot de
              passe.
            </Text>
            <FormControl>
              <Input
                type="text"
                id="resetEmail"
                name="Email"
                placeholder="Votre adresse mail"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
            </FormControl>

            <Button
              variant="solid_PrimaryColor"
              type="button"
              onClick={sendReset}
            >
              Envoyer la réinitialisation du mot de passe
            </Button>
            <Divider />
            <Text textAlign="center">
              Vous avez déjà un compte ?&nbsp;
              <Link to="/login">
                <Text
                  color="#342c50"
                  _hover={{ textDecoration: "none", color: "#A7197F" }}
                >
                  Se connecter
                </Text>
              </Link>
            </Text>
          </Stack>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
