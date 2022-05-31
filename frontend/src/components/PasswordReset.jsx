import React, { useState } from "react";
import {
  Stack,
  Button,
  FormControl,
  Input,
  Divider,
  Link,
  Flex,
  Heading,
} from "@chakra-ui/react";

const passwordReset = () => {
  const [resetEmail, setResetEmail] = useState("");

  return (
    <Flex className="loginForm" padding={{ base: "0", lg: "50px" }}>
      <Stack
        className="passwordResetForm"
        spacing={6}
        width="90vw"
        maxWidth="482px"
        margin="auto"
      >
        <Heading as="h2" fontSize="1.6rem" fontWeight="700">
          Réinitialisez votre mot de passe
        </Heading>
        <p>
          Saisissez votre adresse e-mail ci-dessous. Nous chercherons votre
          compte et vous enverrons un e-mail de réinitialisation de mot de
          passe.
        </p>
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
        <p>
          Vous avez déjà un compte ?&nbsp;
          <Link
            to="/login"
            color="#342c50"
            _hover={{ textDecoration: "none", color: "#A7197F" }}
          >
            Se connecter
          </Link>
        </p>
      </Stack>
    </Flex>
  );
};

export default passwordReset;
