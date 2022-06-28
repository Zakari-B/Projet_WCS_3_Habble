import {
  Text,
  Select,
  Box,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";

import backendAPI from "../../services/backendAPI";

export default function Services() {
  // useState pour chaque input //
  const [tags, setTags] = useState([]);
  const [services, setServices] = useState([]);

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
  const getAllServices = () => {
    backendAPI
      .get("/api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => getAllServices(), []);

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
        {services.map((element) => (
          <option value={element.name}>{element.name}</option>
        ))}
      </Select>
    </Box>
  );
}
