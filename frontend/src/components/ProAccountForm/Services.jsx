import {
  Text,
  Select,
  Box,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
// import axios from "axios";
// import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

export default function Profil() {
  //   const { freelancerId } = useParams();

  // useState pour chaque input //
  const [tags, setTags] = useState([]);

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

  // axios qui va chercher les services
  const getOneService = () => {};

  useEffect(() => getOneService(), []);

  return (
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
          <ListItem m="0.2rem" p="0.2rem" bgColor="#f2f5f7" display="flex">
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
        onKeyUp={(event) => (event.key === "Enter" ? addItem(event) : null)}
      >
        <option value="Conseils éducatifs">Conseils éducatifs</option>
        <option value="Activités ludiques et sportives">
          Activités ludiques et sportives
        </option>
        <option value="Garde d’enfant">Garde d’enfant</option>
        <option value="Coaching professionnel">Coaching professionnel</option>
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
        <option value="Soutien psychologique">Soutien psychologique</option>
        <option value="Transport, logistique, voyage">
          Transport, logistique, voyage
        </option>
        <option value="Santé">Santé</option>
        <option value="Bien être">Bien être</option>
        <option value="Aide technique">Aide technique</option>
        <option value="Agencement PMR">Agencement PMR</option>
      </Select>
    </Box>
  );
}
