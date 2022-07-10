import {
  Flex,
  FormLabel,
  Text,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import backendAPI from "../../../services/backendAPI";

export default function Lieux({ annonce }) {
  const { employerId } = useParams();
  // useState pour chaque input //
  const [locations, setLocations] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [locationListFiltered, setLocationListFiltered] = useState([]);

  // Constante valeur par défaut //

  const locationsIndex = locationListFiltered.filter((e) =>
    ["1", "2", "3", "4", "5", "6"].includes(e)
  );

  // fonction retrait et d'ajout d'une expertise //
  const updateLocation = (e) => {
    if (e.target.checked && !locationList.includes(e.target.value)) {
      setLocationList([...locationList, e.target.value]);
      backendAPI.post(
        `/api/employer/${employerId}/annonce/${annonce.id}/locations/${e.target.value}`
      );
    } else if (!e.target.checked) {
      const locationListFilter = locationList.filter(
        (elem) => elem !== e.target.value
      );
      locationList.splice(locationList.indexOf(e.target.value), 1);
      setLocationList(locationListFilter);
      backendAPI.delete(
        `/api/employer/${employerId}/annonce/${annonce.id}/locations/${e.target.value}`
      );
    }
  };

  // axios qui va chercher tous les lieux possibles
  const getAllLocations = () => {
    backendAPI
      .get("/api/locations")
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  // axios qui va chercher les services d'un freelancer
  const getAllLocationsByAnnonce = () => {
    backendAPI
      .get(`/api/employer/${employerId}/annonce/${annonce.id}/locations`)
      .then((response) => {
        setLocationList(response.data.map((e) => e.fk_lieu_id.id.toString()));
        setLocationListFiltered(
          response.data.map((e) => e.fk_lieu_id.id.toString())
        );
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getAllLocations();
    getAllLocationsByAnnonce();
  }, []);

  return (
    <Flex flexDirection="column" gap="5">
      <FormLabel
        htmlFor="expertise"
        fontSize="md"
        fontWeight="800"
        color="purple.average"
      >
        Lieu
      </FormLabel>
      <Flex
        justifyContent="left"
        columnGap="3"
        rowGap="2"
        flexWrap="wrap"
        h="fit-content"
        w="fit-content%"
      >
        {locations.map((element) => (
          <CheckboxGroup defaultValue={locationsIndex}>
            <Checkbox
              defaultChecked
              iconColor="pink.light"
              colorScheme="white"
              borderColor="gray"
              _checked={{ borderColor: "pink.light" }}
              value={element.id.toString()}
              onChange={updateLocation}
            >
              <Text fontSize="sm">{element.name}</Text>
            </Checkbox>
          </CheckboxGroup>
        ))}
      </Flex>
    </Flex>
  );
}
