import React, { useState } from "react";
import { Stack, Button, FormControl, Input } from "@chakra-ui/react";
import "../App.css";

const signupForm = () => {
  const [signupFirstname, setSignupFirstname] = useState("");
  const [signupLastname, setSignupLastname] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupNickname, setSignupNickname] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordRepeat, setSignupPasswordRepeat] = useState("");

  return (
    <div className="signupForm">
      <Stack
        className="noAccount"
        spacing={6}
        width="50vw"
        maxWidth="768px"
        margin="auto"
      >
        <h2>Créer un compte gratuitement</h2>
        <FormControl>
          <Input
            type="text"
            id="signupFirstname"
            name="Prénom"
            placeholder="Prénom"
            value={signupFirstname}
            onChange={(e) => setSignupFirstname(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            type="text"
            id="signupLastname"
            name="Nom"
            placeholder="Nom"
            value={signupLastname}
            onChange={(e) => setSignupLastname(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            type="text"
            id="signupEmail"
            name="Email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            type="text"
            id="signupNickname"
            name="Pseudo"
            placeholder="Pseudo"
            value={signupNickname}
            onChange={(e) => setSignupNickname(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            type="password"
            id="signupPassword"
            name="Mot de passe"
            placeholder="Mot de passe"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            type="password"
            id="signupPasswordRepeat"
            name="Retapez votre mot de passe"
            placeholder="Retapez votre mot de passe"
            value={signupPasswordRepeat}
            onChange={(e) => setSignupPasswordRepeat(e.target.value)}
          />
        </FormControl>
        <Button
          variant="solid_PrimaryColor"
          type="button"
          onClick={() => null()}
        >
          S'inscrire
        </Button>
        <p>
          En m'inscrivant pour créer un compte, j'accepte les{" "}
          <a href="CGU">
            Conditions générales d'utilisation et de confidentialité
          </a>
        </p>
        <div
          className="linebreak"
          style={{ borderTop: "1px solid lightgrey" }}
        />
        <p>
          Vous avez déjà un compte ?&nbsp;<a href="LOGIN FORM">Se connecter</a>
        </p>
      </Stack>
    </div>
  );
};

export default signupForm;
