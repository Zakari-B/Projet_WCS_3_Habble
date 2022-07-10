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
import { useParams } from "react-router-dom";

import backendAPI from "../../../services/backendAPI";

export default function Services({ annonce }) {
  const { employerId } = useParams();
  const [servicesList, setServicesList] = useState([]);
  const [serviceName, setServiceName] = useState([]);
  const [serviceNumber, setServiceNumber] = useState([]);

  // axios qui va chercher la liste des services
  const getAllServices = () => {
    backendAPI
      .get("/api/services")
      .then((response) => {
        setServicesList(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  // axios qui va chercher les services d'un freelancer
  const getAllServicesByEmployer = () => {
    backendAPI
      .get(`/api/employer/${employerId}/annonce/${annonce.id}/services`)
      .then((response) => {
        setServiceName(response.data.map((e) => e.fk_service_id.name));
        setServiceNumber(response.data.map((e) => e.fk_service_id.id));
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getAllServices();
    getAllServicesByEmployer();
  }, []);

  // fonction retrait d'ajout d'un item //
  const addItem = (e) => {
    const nameService = e.target.options[e.target.selectedIndex].text;
    if (nameService !== "" && !serviceName.includes(nameService)) {
      setServiceName([...serviceName, nameService]);
      setServiceNumber([...serviceNumber, e.target.value]);
      backendAPI.post(
        `/api/employer/${employerId}/annonce/${annonce.id}/services/${e.target.value}`
      );
    }
  };

  // fonction retrait d'un item //
  const removeItem = (indexToRemove) => {
    const serviceId = serviceNumber.filter(
      (_, index) => index === indexToRemove
    );
    setServiceName([
      ...serviceName.filter((_, index) => index !== indexToRemove),
    ]);
    setServiceNumber([
      ...serviceNumber.filter((_, index) => index !== indexToRemove),
    ]);
    backendAPI.delete(`/api/annonce/${annonce.id}/services/${serviceId}`);
  };

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
        {serviceName.map((element, index) => (
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
        {servicesList.map((element) => (
          <option value={element.id}>{element.name}</option>
        ))}
      </Select>
    </Box>
  );
}
