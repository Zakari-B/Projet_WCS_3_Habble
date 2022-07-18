import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import backendAPI from "../services/backendAPI";

export default function PasswordReset() {
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const resetToken = searchParams.get("token");
  const resetId = searchParams.get("id");
  const navigate = useNavigate();
  const toast = useToast();

  const resetSubmit = () => {
    if (newPassword === newPasswordRepeat) {
      if (resetToken !== "" || resetId !== "") {
        toast({
          title:
            "Erreur avec la réinitialisation du mot de passe. Merci de faire une nouvelle demande de réinitialisation.",
          description: "Token et/ou ID utilisateur inexistants",
          status: "error",
          duration: 7000,
          position: "bottom-right",
          isClosable: true,
        });
      } else {
        backendAPI
          .post("/api/auth/resetPassword", {
            userToken: resetToken,
            userId: parseInt(resetId, 10),
            password: newPassword,
          })
          .then((response) => {
            if (response) {
              toast({
                title: "Le mot de passe a été correctement modifié.",
                description: "Modification réussie.",
                status: "success",
                duration: 7000,
                position: "bottom-right",
                isClosable: true,
              });
              navigate("/");
            }
          })
          .catch((error) => {
            if (error) {
              toast({
                title:
                  "Un problème est survenu dans la modification du mot de passe.",
                description: `${error.response.data.message}`,
                status: "error",
                duration: 7000,
                position: "bottom-right",
                isClosable: true,
              });
            }
            console.warn(error);
          });
      }
    } else if (newPassword !== newPasswordRepeat) {
      toast({
        title: "Les mots de passe ne sont pas identiques.",
        description: "Mots de passe différents",
        status: "error",
        duration: 7000,
        position: "bottom-right",
        isClosable: true,
      });
    }
  };

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex bgColor="background.gray" alignItems="center" paddingTop="80px">
        <Flex
          className="signupForm"
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
            className="noAccount"
            spacing={8}
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
              Réinitialisation du mot de passe
            </Heading>

            <FormControl>
              <Input
                type="password"
                id="loginPassword"
                name="Nouveau mot de passe"
                placeholder="Nouveau mot de passe"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                id="loginPasswordRepeat"
                name="Retapez le nouveau mot de passe"
                placeholder="Retapez le nouveau mot de passe"
                value={newPasswordRepeat}
                onChange={(e) => setNewPasswordRepeat(e.target.value)}
              />
            </FormControl>
            <Button
              variant="solid_PrimaryColor"
              type="button"
              onClick={() => resetSubmit()}
            >
              Envoyer
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
