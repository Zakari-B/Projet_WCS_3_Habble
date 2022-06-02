import {
  Flex,
  Heading,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link,
  Divider,
  Avatar,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
} from "@chakra-ui/react";

export default function ProAccountForm() {
  return (
    <Flex bgColor="background.gray" direction="column" justify="flex-start">
      <Flex
        alignSelf="center"
        dir="column"
        mx="10%"
        my="5%"
        className="signupForm"
        bgColor="white"
        maxWidth="700px"
        alignItems="center"
        boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
        borderRadius="25px"
        padding={{ base: "0", md: "30px", lg: "40px" }}
      >
        <Stack className="noAccount" spacing={8} width="90vw" margin="auto">
          <Heading
            as="h2"
            textAlign="left"
            fontSize="1.4rem"
            fontWeight="600"
            color="purple.average"
          >
            Mon profil
          </Heading>
          <Flex justifyContent="space-between">
            <VStack>
              <FormControl>
                <FormLabel
                  htmlFor="firstname-lastname"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                >
                  Affichage de votre prénom et nom *
                </FormLabel>
                <Input
                  type="text"
                  id="formProFirstnameLastname"
                  name="PrénomNom"
                  placeholder="Prénom Nom"
                  _placeholder={{ fontSize: "0.8rem" }}
                  // value={signupFirstname}
                  // onChange={(e) => setSignupFirstname(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  htmlFor="activity"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                >
                  Votre activité *
                </FormLabel>
                <Input
                  type="text"
                  id="formProActivity"
                  name="Activity"
                  placeholder="Titre professionnel"
                  _placeholder={{ fontSize: "0.8rem" }}
                  // value={signupFirstname}
                  // onChange={(e) => setSignupFirstname(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  htmlFor="city"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                >
                  Code postal de votre lieu d'intervention *
                </FormLabel>
                <Input
                  type="text"
                  id="formProCity"
                  name="Activity"
                  placeholder="Veuillez saisir un code postal et selectionnez une ville dans la liste"
                  _placeholder={{ fontSize: "0.8rem" }}
                  // value={signupFirstname}
                  // onChange={(e) => setSignupFirstname(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  htmlFor="phone"
                  fontSize="md"
                  fontWeight="800"
                  color="purple.average"
                >
                  N° de téléphone
                </FormLabel>
                <Input
                  type="text"
                  id="formPhone"
                  name="Phone"
                  placeholder="Ex: 0672690594"
                  _placeholder={{ fontSize: "0.8rem" }}
                  // value={signupFirstname}
                  // onChange={(e) => setSignupFirstname(e.target.value)}
                />
              </FormControl>
            </VStack>
            <VStack align="center" alignSelf="center">
              <Avatar src="https://bit.ly/broken-link" size="2xl" />
              <Text align="center" fontSize="0.8rem">
                Changer votre photo
              </Text>
            </VStack>
          </Flex>
          <FormControl display="flex" justifyContent="space-between">
            <FormLabel
              htmlFor="amount"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
              my="auto"
            >
              Depuis combien d'années exercez-vous ? *
            </FormLabel>
            <NumberInput max={50} min={0} w="15%">
              <NumberInputField
                id="amount"
                placeholder="7"
                fontSize="0.9rem"
                _placeholder={{ fontSize: "0.9rem" }}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Text my="auto" fontSize="0.9rem">
              {" "}
              ans d'expérience
            </Text>
          </FormControl>
          <FormControl display="flex" justifyContent="space-between">
            <FormLabel
              htmlFor="amount"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
              my="auto"
            >
              Quel est le prix moyen de vos prestations ? *
            </FormLabel>
            <NumberInput min={0} w="15%">
              <NumberInputField
                id="amount"
                placeholder="25"
                fontSize="0.9rem"
                _placeholder={{ fontSize: "0.9rem" }}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Text my="auto" fontSize="0.9rem">
              {" "}
              €/h (indicatif)
            </Text>
          </FormControl>
          <FormControl>
            <FormLabel
              htmlFor="city"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
            >
              Présentez-vous en quelques mots *
            </FormLabel>
            <Textarea
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam quidem magnam quo cum pariatur laboriosam, exercitationem deserunt. Molestias suscipit facilis voluptates id. Quaerat voluptates debitis magnam a recusandae ab."
              _placeholder={{ fontSize: "0.8rem" }}
              // value={signupFirstname}
              // onChange={(e) => setSignupFirstname(e.target.value)}
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
}
