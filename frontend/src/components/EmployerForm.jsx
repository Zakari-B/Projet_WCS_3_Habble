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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Select,
  Box,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function EmployerForm() {
  // useState pour chaque input //
  const [displayTitle, setDisplayTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pricePro, setPricePro] = useState("");
  const [tags, setTags] = useState([]);
  const [expertise, setExpertise] = useState([]);

  // fonction retrait d'un item //
  const removeItem = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  // fonction retrait d'ajout d'un item //
  const addItem = (e) => {
    if (e.target.value !== "" && !tags.includes(e.target.value)) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  // fonction retrait et d'ajout d'une expertise //
  const updateExpertise = (e) => {
    if (e.target.checked && !expertise.includes(e.target.value)) {
      setExpertise([...expertise, e.target.value]);
    } else if (!e.target.checked) {
      expertise.splice(expertise.indexOf(e.target.value), 1);
      setExpertise(expertise);
    }
  };

  return (
    <Flex bgColor="background.gray" direction="column" justify="flex-start">
      <FormControl
        alignSelf="center"
        dir="column"
        mx="10%"
        my="5%"
        className="employerForm"
        bgColor="white"
        maxWidth="900px"
        alignItems="center"
        boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
        borderRadius="25px"
        padding="2%"
      >
        <Stack
          className="noAccount"
          spacing={8}
          width="95%"
          margin="auto"
          maxW="95%"
        >
          <Heading
            as="h2"
            textAlign="left"
            fontSize="1.2rem"
            fontWeight="600"
            color="purple.average"
          >
            Détaillez votre besoin et trouvez un professionnel du handicap
            adapté
          </Heading>
          <VStack alignItems="left">
            <FormLabel
              htmlFor="name"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
            >
              Titre de l'annonce *
            </FormLabel>
            <Input
              type="text"
              id="proFormTitle"
              name="title"
              placeholder="Résumez votre besoin ici"
              _placeholder={{
                fontSize: "0.8rem",
                fontWeight: "500",
                color: "gray",
              }}
              value={displayTitle}
              onChange={(e) => setDisplayTitle(e.target.value)}
            />
            <FormLabel
              htmlFor="description"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
            >
              Description de l'annonce *
            </FormLabel>
            <Textarea
              type="text"
              id="description"
              name="description"
              placeholder="Bonjour, Je recherche une personne de confiance ayant une expérience avec les troubles autistiques pour mon fils de 9 ans. Il s'agirait de l'aider dans ses activités quotidiennes : retour d'école, devoirs... Merci de me contacter pour plus d'informations. (30 caratères minimum)"
              _placeholder={{
                fontSize: "0.8rem",
                fontWeight: "500",
                color: "gray",
              }}
              height="10rem"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Text fontSize="xs" as="i" color="gray.400">
              Nous vous invitons à ne pas indiquer de données de santé dans
              votre annonce : antécédents médicaux, maladies, prestations de
              soins réalisés, résultats d’examens, traitements, handicap, etc.
            </Text>

            <FormLabel
              htmlFor="skills"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
            >
              Sélectionnez la ou les compétence(s) dont vous pensez avoir besoin
              * (pas de mauvaises réponses !)
            </FormLabel>
            <Box borderColor="gray.200" borderWidth="1.5px" borderRadius="10px">
              <List
                display="flex"
                justifyContent="left"
                columnGap="3"
                rowGap="2"
                flexWrap="wrap"
                h="fit-content"
                w="fit-content"
              >
                {tags.map((element, index) => (
                  <ListItem
                    m="0.2rem"
                    p="0.2rem"
                    bgColor="#f2f5f7"
                    display="flex"
                  >
                    <Text fontSize="0.9rem" fontWeight="400">
                      {element}
                    </Text>
                    <IconButton
                      as={CloseIcon}
                      boxSize="12px"
                      alignSelf="center"
                      _hover={{ bgColor: "none" }}
                      onClick={() => removeItem(index)}
                    />
                  </ListItem>
                ))}
              </List>
              <Select
                border="none"
                type="text"
                id="formProService"
                name="Service"
                fontSize="0.8rem"
                fontWeight="500"
                color="gray"
                placeholder="Choisissez un ou plusieurs services dans la liste, tapez des mots clés pour filtrer"
                onChange={addItem}
                onKeyUp={(event) =>
                  event.key === "Enter" ? addItem(event) : null
                }
              >
                <option value="Conseils éducatifs">Conseils éducatifs</option>
                <option value="Activités ludiques et sportives">
                  Activités ludiques et sportives
                </option>
                <option value="Garde d’enfant">Garde d’enfant</option>
                <option value="Coaching professionnel">
                  Coaching professionnel
                </option>
                <option value="Compagnie et support social">
                  Compagnie et support social
                </option>
                <option value="Service original">Service original</option>
                <option value="Aide à domicile">Aide à domicile</option>
                <option value="Rééducation, paramédical">
                  Rééducation, paramédical
                </option>
                <option value="Soins personnels : toilette, habillement, …">
                  Soins personnels : toilette, habillement, …
                </option>
                <option value="Soins infirmiers">Soins infirmiers</option>
                <option value="Aide administrative, démarches, dossiers">
                  Aide administrative, démarches, dossiers
                </option>
                <option value="Soutien scolaire">Soutien scolaire</option>
                <option value="Soutien à la parentalité">
                  Soutien à la parentalité
                </option>
                <option value="Soutien psychologique">
                  Soutien psychologique
                </option>
                <option value="Transport, logistique, voyage">
                  Transport, logistique, voyage
                </option>
                <option value="Santé">Santé</option>
                <option value="Bien être">Bien être</option>
                <option value="Aide technique">Aide technique</option>
                <option value="Agencement PMR">Agencement PMR</option>
              </Select>
            </Box>
            <Text fontSize="xs" as="i" color="gray.400">
              Si vous ne savez pas ou ne trouvez pas la compétence, sélectionnez
              "autre" dans la liste
            </Text>
          </VStack>
          <Flex
            justifyContent="left"
            gap="3"
            flexWrap="wrap"
            h="fit-content"
            w="fit-content%"
          >
            <FormLabel
              htmlFor="price"
              fontSize="md"
              fontWeight="800"
              color="purple.average"
              my="auto"
            >
              Salaire horaire net proposé (indicatif) *
            </FormLabel>
            <Flex justifyContent="left" gap="3">
              <NumberInput
                min={0}
                w="80px"
                value={pricePro}
                onChange={(value) => setPricePro(value)}
              >
                <NumberInputField
                  id="proFormPrice"
                  name="price"
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
          </Flex>

          <FormLabel
            htmlFor="care"
            fontSize="sm"
            fontWeight="800"
            color="purple.average"
          >
            Date de début (optionnel)
          </FormLabel>
          <CheckboxGroup>
            <Flex
              justifyContent="left"
              columnGap="3"
              rowGap="2"
              flexWrap="wrap"
              h="fit-content"
              w="fit-content%"
            >
              <Checkbox
                iconColor="pink.light"
                colorScheme="white"
                borderColor="gray"
                _checked={{ borderColor: "pink.light" }}
                value="Domicile"
                onChange={updateExpertise}
              >
                <Text fontSize="sm">Domicile</Text>
              </Checkbox>
              <Checkbox
                iconColor="pink.light"
                colorScheme="white"
                borderColor="gray"
                _checked={{ borderColor: "pink.light" }}
                value="École"
                onChange={updateExpertise}
              >
                <Text fontSize="sm">École</Text>
              </Checkbox>
              <Checkbox
                iconColor="pink.light"
                colorScheme="white"
                borderColor="gray"
                _checked={{ borderColor: "pink.light" }}
                value="Travail"
                onChange={updateExpertise}
              >
                <Text fontSize="sm">Travail</Text>
              </Checkbox>
              <Checkbox
                iconColor="pink.light"
                colorScheme="white"
                borderColor="gray"
                _checked={{ borderColor: "pink.light" }}
                value="Hopital"
                onChange={updateExpertise}
              >
                <Text fontSize="sm">Hopital</Text>
              </Checkbox>
              <Checkbox
                iconColor="pink.light"
                colorScheme="white"
                borderColor="gray"
                _checked={{ borderColor: "pink.light" }}
                value="Activités et loisirs"
                onChange={updateExpertise}
              >
                <Text fontSize="sm">Activités et loisirs</Text>
              </Checkbox>
              <Checkbox
                iconColor="pink.light"
                colorScheme="white"
                borderColor="gray"
                _checked={{ borderColor: "pink.light" }}
                value="Autre"
                onChange={updateExpertise}
              >
                <Text fontSize="sm">Autre</Text>
              </Checkbox>
            </Flex>
          </CheckboxGroup>
          <FormLabel
            htmlFor="chronicDiseases"
            fontSize="sm"
            fontWeight="800"
            color="purple.average"
          >
            Demande urgente
          </FormLabel>
          <CheckboxGroup>
            <Flex
              justifyContent="left"
              columnGap="3"
              rowGap="2"
              flexWrap="wrap"
              h="fit-content"
              w="fit-content%"
              flexDirection="column"
            >
              <Checkbox
                iconColor="pink.light"
                colorScheme="white"
                borderColor="gray"
                _checked={{ borderColor: "pink.light" }}
                value="Urgence"
                onChange={updateExpertise}
              >
                <Text fontSize="sm">Oui</Text>
              </Checkbox>

              <Button variant="solid_PrimaryColor" type="submit">
                J'ai terminé, je dépose mon annonce
              </Button>
              <Divider />
              <Text
                fontSize="xs"
                fontWeight="800"
                color="purple.average"
                align="left"
              >
                * Champs obligatoires
              </Text>
            </Flex>
          </CheckboxGroup>
        </Stack>
      </FormControl>
    </Flex>
  );
}
