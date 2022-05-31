import React, { useState } from "react";
import {
  Stack,
  Button,
  FormControl,
  Input,
  Divider,
  Link,
  Flex,
} from "@chakra-ui/react";
import "../App.css";

const signupForm = () => {
  const [signupFirstname, setSignupFirstname] = useState("");
  const [signupLastname, setSignupLastname] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupNickname, setSignupNickname] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordRepeat, setSignupPasswordRepeat] = useState("");

  return (
    <Flex className="signupForm" padding={{ base: "0", lg: "50px" }}>
      <Stack
        className="noAccount"
        spacing={6}
        width="90vw"
        maxWidth="540px"
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
          <Link
            href="CGU"
            fontWeight="bold"
            color="#A7197F"
            _hover={{ textDecoration: "none" }}
          >
            Conditions générales d'utilisation et de confidentialité
          </Link>
        </p>
        <Divider />
        <p>
          Vous avez déjà un compte ?&nbsp;
          <Link
            href="LOGIN FORM"
            color="#A7197F"
            _hover={{ textDecoration: "none" }}
          >
            Se connecter
          </Link>
        </p>
      </Stack>
    </Flex>
  );
};

export default signupForm;
