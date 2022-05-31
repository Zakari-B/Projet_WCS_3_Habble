import React, { useState } from "react";
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Divider,
  Link,
  Flex,
  Heading,
} from "@chakra-ui/react";

const loginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Flex className="loginForm" padding={{ base: "0", lg: "50px" }}>
      <Stack
        className="loginConnexion"
        spacing={6}
        width="90vw"
        maxWidth="540px"
        margin="auto"
      >
        <Heading as="h2" fontSize="1.6rem" fontWeight="700">
          Connectez vous à votre compte
        </Heading>
        <FormControl>
          <FormLabel htmlFor="loginEmail">Pseudo ou Email</FormLabel>
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
          <FormLabel htmlFor="loginPassword">Mot de passe</FormLabel>
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
          onClick={() => null()}
        >
          Se connecter
        </Button>
        <Divider />
        <Link
          to="/forgot-password"
          textDecoration="underline"
          color="#342c50"
          _hover={{ color: "#A7197F" }}
        >
          Mot de passe oublié ?
        </Link>
        <Link
          to="/register"
          padding="10px"
          fontWeight="500"
          bgColor="transparent"
          borderRadius="4px"
          color="#342c50"
          border="2px solid"
          borderColor="#342c50"
          _hover={{ bgColor: "#342c50", color: "white" }}
        >
          Pas encore inscrit ?
        </Link>
      </Stack>
    </Flex>
  );
};

export default loginForm;
