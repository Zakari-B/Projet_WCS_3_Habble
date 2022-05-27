import React, { useState } from "react";
import { Stack, Button, FormControl, Input, Checkbox } from "@chakra-ui/react";
import "../forms.css";

const loginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div className="loginForm">
      <Stack
        className="loginConnexion"
        spacing={6}
        width="50vw"
        maxWidth="768px"
        margin="auto"
      >
        <h2>Connectez vous à votre compte</h2>
        <FormControl>
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
          <Input
            type="password"
            id="loginPassword"
            name="Mot de passe"
            placeholder="Mot de passe"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </FormControl>
        <Checkbox>Se rappeler de moi</Checkbox>

        <Button
          variant="solid_PrimaryColor"
          type="button"
          onClick={() => null()}
        >
          Se connecter
        </Button>
        <div
          className="linebreak"
          style={{ borderTop: "1px solid lightgrey" }}
        />
        <a href="PAGE MDP OUBLIE">Mot de passe oublié ?</a>
        <a href="LIEN PAGE SIGNUP">Pas encore inscrit ?</a>
      </Stack>
    </div>
  );
};

export default loginForm;
