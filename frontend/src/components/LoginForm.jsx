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
} from "@chakra-ui/react";

const loginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="loginForm">
      <Stack
        className="loginConnexion"
        spacing={6}
        width="90vw"
        maxWidth="540px"
        margin="auto"
      >
        <h2>Connectez vous à votre compte</h2>
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
          textDecoration="underline"
          color="#342c50"
          _hover={{ color: "#A7197F" }}
          href="PAGE MDP OUBLIE"
        >
          Mot de passe oublié ?
        </Link>
        <Link
          bgColor="transparent"
          borderRadius="4px"
          color="#342c50"
          border="2px solid"
          borderColor="#342c50"
          _hover={{ bgColor: "#342c50", color: "white" }}
          href="LIEN PAGE SIGNUP"
        >
          Pas encore inscrit ?
        </Link>
      </Stack>
    </div>
  );
};

export default loginForm;
