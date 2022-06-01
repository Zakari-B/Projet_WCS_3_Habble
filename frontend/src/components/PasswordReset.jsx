import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "@chakra-ui/react";

import Header from "./Header/Header";
import Footer from "./Footer";

const passwordReset = () => {
  const [resetEmail, setResetEmail] = useState("");

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} />
      <Flex bgColor="background.gray" alignItems="center" h="85vh">
        <Flex
          className="loginForm"
          bgColor="white"
          maxWidth="482px"
          m="auto"
          alignItems="center"
          boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
          marginTop="100px"
          marginBottom="30px"
          borderRadius="25px"
          padding={{ base: "0", md: "30px", lg: "40px" }}
        >
          <Stack
            className="passwordResetForm"
            spacing={6}
            width="90vw"
            maxWidth="482px"
            margin="auto"
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
              onClick={() => null()}
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
};

export default passwordReset;
