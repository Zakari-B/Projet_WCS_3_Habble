import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Text,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import backendAPI from "../services/backendAPI";

import Header from "./Header/Header";
import Footer from "./Footer";

const loginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (loginEmail && loginPassword) {
      backendAPI
        .post("/api/auth/login", {
          email: loginEmail,
          password: loginPassword,
          remember: rememberMe,
        })
        .then((response) => {
          if (response.status === 200) {
            window.localStorage.setItem("isUserLoggedIn", true);
          }
          if (
            response.data.type !== "freelancer" ||
            response.data.type !== "employer"
          ) {
            navigate("/");
          }
          if (response.data.type === "freelancer") {
            navigate(`/profil/${response.data.fkId}`);
          }
          if (response.data.type === "employer") {
            navigate(`/profil-employer/${response.data.fkId}`);
          }
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  };

  return (
    <Box bgColor="background.gray" h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex bgColor="background.gray" alignItems="center" paddingY="50px">
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
          padding={{ base: "0", md: "20px", lg: "25px" }}
        >
          <Stack
            className="loginConnexion"
            spacing={12}
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
              Connectez vous à votre compte
            </Heading>
            <FormControl>
              <FormLabel htmlFor="loginEmail" fontWeight="600">
                Pseudo ou Email
              </FormLabel>
              <Input
                type="text"
                id="loginEmail"
                name="Pseudo ou Email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="loginPassword" fontWeight="600">
                Mot de passe
              </FormLabel>
              <Input
                type="password"
                id="loginPassword"
                name="Mot de passe"
                placeholder="Mot de passe"
                value={loginPassword}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
            </FormControl>
            <Checkbox
              colorScheme="pink"
              isChecked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe);
              }}
            >
              Se rappeler de moi
            </Checkbox>

            <Button
              variant="solid_PrimaryColor"
              type="button"
              onClick={() => handleSubmit()}
            >
              Se connecter
            </Button>
            <Divider />
            <Link to="/forgot-password">
              <Text
                fontWeight="500"
                textDecoration="underline"
                color="#342c50"
                _hover={{ color: "#A7197F" }}
              >
                Mot de passe oublié ?
              </Text>
            </Link>
            <Link to="/register">
              <Button
                padding="10px"
                w="100%"
                fontWeight="500"
                bgColor="transparent"
                borderRadius="4px"
                color="#342c50"
                border="2px solid"
                borderColor="#342c50"
                _hover={{ bgColor: "#342c50", color: "white" }}
              >
                Pas encore inscrit ?
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default loginForm;
