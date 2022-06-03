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
  Divider,
  Avatar,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  Checkbox,
  CheckboxGroup,
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
        padding="2%"
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
          <Flex
            justifyContent="space-between"
            direction={{ base: "column-reverse", md: "row" }}
            rowGap="5"
          >
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
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
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
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
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
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
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
                  _placeholder={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "gray",
                  }}
                  // value={signupFirstname}
                  // onChange={(e) => setSignupFirstname(e.target.value)}
                />
              </FormControl>
            </VStack>
            <VStack align="center" alignSelf="center">
              <Avatar src="https://bit.ly/broken-link" size="2xl" />
              <Text
                color="pink.light"
                fontWeight="800"
                align="center"
                fontSize={{ base: "md", md: "0.8rem" }}
              >
                Changer votre photo
              </Text>
            </VStack>
          </Flex>
          <FormControl
            display="flex"
            justifyContent="left"
            gap="3"
            flexWrap="wrap"
            h="fit-content"
            w="fit-content%"
          >
            <FormLabel
              htmlFor="amount"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
              my="auto"
            >
              Depuis combien d'années exercez-vous ? *
            </FormLabel>
            <Flex justifyContent="left" gap="3">
              <NumberInput max={50} min={0} w="80px">
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
            </Flex>
          </FormControl>
          <FormControl display="flex" justifyContent="left" gap="3">
            <FormLabel
              htmlFor="amount"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
              my="auto"
            >
              Quel est le prix moyen de vos prestations ? *
            </FormLabel>
            <Flex justifyContent="left" gap="3">
              <NumberInput min={0} w="80px">
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
            </Flex>
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
              _placeholder={{
                fontSize: "0.8rem",
                fontWeight: "500",
                color: "gray",
              }}
              // value={signupFirstname}
              // onChange={(e) => setSignupFirstname(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              htmlFor="service"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
            >
              Sélectionnez un ou plusieurs services que vous proposez *
            </FormLabel>
            <Input
              type="text"
              id="formProService"
              name="Service"
              placeholder="Choisissez un ou plusieurs services dans la liste, tapez des mots clés pour filtrer"
              _placeholder={{
                fontSize: "0.8rem",
                fontWeight: "500",
                color: "gray",
              }}
              // value={signupFirstname}
              // onChange={(e) => setSignupFirstname(e.target.value)}
            />
          </FormControl>
          <Checkbox defaultChecked size="sm">
            Envoyez moi par email les annonces en rapportt avec les services que
            je propose
          </Checkbox>
          <Text fontSize="md" fontWeight="800" color="purple.average">
            Champs d'expertises (optionnel)
          </Text>
          <Text fontSize="sm" fontWeight="800" color="purple.average">
            Soins aux personnes agées
          </Text>
          <CheckboxGroup>
            <Flex
              justifyContent="left"
              columnGap="3"
              rowGap="2"
              flexWrap="wrap"
              h="fit-content"
              w="fit-content%"
            >
              <Checkbox value="" size="sm">
                Démence
              </Checkbox>
              <Checkbox value="" size="sm">
                Maladie d'Alzheimer
              </Checkbox>
            </Flex>
          </CheckboxGroup>
          <Text fontSize="sm" fontWeight="800" color="purple.average">
            Maladies chroniques
          </Text>
          <CheckboxGroup>
            <Flex
              justifyContent="left"
              columnGap="3"
              rowGap="2"
              flexWrap="wrap"
              h="fit-content"
              w="fit-content%"
            >
              <Checkbox value="" size="sm">
                Arthrite
              </Checkbox>
              <Checkbox value="" size="sm">
                Asthme
              </Checkbox>
              <Checkbox value="" size="sm">
                Diabète
              </Checkbox>
              <Checkbox value="" size="sm">
                Maladie respiratoire
              </Checkbox>
              <Checkbox value="" size="sm">
                Maladie cardiovasculaire
              </Checkbox>
            </Flex>
          </CheckboxGroup>
          <Text fontSize="sm" fontWeight="800" color="purple.average">
            Handicap
          </Text>
          <CheckboxGroup>
            <Flex
              justifyContent="left"
              columnGap="3"
              rowGap="2"
              flexWrap="wrap"
              h="fit-content"
              w="fit-content%"
            >
              <Checkbox value="" size="sm">
                Lésion cérébrale acquise
              </Checkbox>
              <Checkbox value="" size="sm">
                Autisme
              </Checkbox>
              <Checkbox value="" size="sm">
                Infirmité motric cérébrale
              </Checkbox>
              <Checkbox value="" size="sm">
                Syndrome de down (trisomie 21)
              </Checkbox>
              <Checkbox value="" size="sm">
                Fibrose kystique
              </Checkbox>
              <Checkbox value="" size="sm">
                Épilepsie
              </Checkbox>
              <Checkbox value="" size="sm">
                Déficience auditive
              </Checkbox>
              <Checkbox value="" size="sm">
                Handicap intellectuel
              </Checkbox>
              <Checkbox value="" size="sm">
                Maladie du motoneurone
              </Checkbox>
              <Checkbox value="" size="sm">
                Dystrophie musculaire
              </Checkbox>
              <Checkbox value="" size="sm">
                Handicap physique, moteur
              </Checkbox>
              <Checkbox value="" size="sm">
                Spina-bifida
              </Checkbox>
              <Checkbox value="" size="sm">
                Lésion de la moelle épinière
              </Checkbox>
              <Checkbox value="" size="sm">
                Handicap visuel
              </Checkbox>
              <Checkbox value="" size="sm">
                Handicap auditif
              </Checkbox>
              <Checkbox value="" size="sm">
                Trouble DYS
              </Checkbox>
            </Flex>
          </CheckboxGroup>
          <Text fontSize="sm" fontWeight="800" color="purple.average">
            Santé mentale
          </Text>
          <CheckboxGroup>
            <Flex
              justifyContent="left"
              columnGap="3"
              rowGap="2"
              flexWrap="wrap"
              h="fit-content"
              w="fit-content%"
            >
              <Checkbox value="" size="sm">
                Anxiété
              </Checkbox>
              <Checkbox value="" size="sm">
                Trouble bipolaire
              </Checkbox>
              <Checkbox value="" size="sm">
                Dépression
              </Checkbox>
              <Checkbox value="" size="sm">
                Troubles de l'alimentation
              </Checkbox>
              <Checkbox value="" size="sm">
                Trouble de la thésaurisation
              </Checkbox>
              <Checkbox value="" size="sm">
                Trouble obsessionnel-compulsif (TOC)
              </Checkbox>
              <Checkbox value="" size="sm">
                Trouble de stress post-traumatique (TSPT)
              </Checkbox>
              <Checkbox value="" size="sm">
                Skizophrénie
              </Checkbox>
              <Checkbox value="" size="sm">
                Abus de substances et toxicomanie
              </Checkbox>
              <Checkbox value="" size="sm">
                Trouble de l'attention avec ou sans hyperactivité (TDAH)
              </Checkbox>
            </Flex>
          </CheckboxGroup>
          <Text fontSize="md" fontWeight="800" color="purple.average">
            Votre entreprise (optionnel)
          </Text>
          <FormControl>
            <FormLabel
              htmlFor="siret"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
            >
              SIRET
            </FormLabel>
            <Input
              type="text"
              id="formSiret"
              name="Siret"
              placeholder="Numéro de 14 chiffres"
              _placeholder={{
                fontSize: "0.8rem",
                fontWeight: "500",
                color: "gray",
              }}
              // value={signupFirstname}
              // onChange={(e) => setSignupFirstname(e.target.value)}
            />
          </FormControl>
          <Text fontSize="xs" color="gray.light">
            Le numéro de Siret est un identifiant de 14 chiffres (exemple :
            12002701600357)
          </Text>
          <Button
            variant="solid_PrimaryColor"
            type="button"
            onClick={() => null()}
          >
            Enregistrer
          </Button>
          <Button textAlign="left" fontSize="xs" fontWeight="600">
            Annulez
          </Button>
          <Divider />
          Vous avez déjà un compte ?&nbsp;
          <Text
            fontSize="xs"
            fontWeight="800"
            color="purple.average"
            align="center"
          >
            * Champs obligatoires
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}
