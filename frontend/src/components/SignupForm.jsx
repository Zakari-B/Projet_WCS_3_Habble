import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Stack,
  Text,
  Button,
  FormControl,
  Input,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import "../App.css";

const signupForm = () => {
  const [signupFirstname, setSignupFirstname] = useState("");
  const [signupLastname, setSignupLastname] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupNickname, setSignupNickname] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordRepeat, setSignupPasswordRepeat] = useState("");
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  return (
    <Flex bgColor="background.gray" alignItems="center">
      <Flex
        className="signupForm"
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
          className="noAccount"
          spacing={8}
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
            {role === "employer"
              ? "Créer un compte gratuitement"
              : "Inscription Professionnels"}
          </Heading>
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
          <Text textAlign="center">
            En m'inscrivant pour créer un compte, j'accepte les
            <Link to="/mentions-legales">
              <Text
                fontWeight="bold"
                color="#A7197F"
                _hover={{ textDecoration: "underline" }}
              >
                Conditions générales d'utilisation et de confidentialité
              </Text>
            </Link>
          </Text>

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
  );
};

export default signupForm;
