import {
  Flex,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import DiplomeFormContext from "../../../contexts/DiplomeFormContext";
import SelectMonth from "../../SelectMonth";
import getDropList from "../../../services/Utils";

export default function DiplomeForm() {
  const [yearList, setYearList] = useState([]);
  const { setIsVisible } = useContext(DiplomeFormContext);
  const { isOpen, onToggle } = useDisclosure();

  const [title, setTitle] = useState("");
  const [delivered, setDelivered] = useState("");
  const [monthDelivered, setMonthDelivered] = useState("");
  const [yearDelivered, setYearDelivered] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleDeliverChange = (e) => {
    e.preventDefault();
    setDelivered(e.target.value);
  };
  const handleMonthChange = (e) => {
    e.preventDefault();
    setMonthDelivered(e.target.value);
  };
  const handleYearChange = (e) => {
    e.preventDefault();
    setYearDelivered(e.target.value);
  };
  const handleDescChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const hideForm = () => {
    setIsVisible(false);
    onToggle(!isOpen);
  };

  const handleReset = () => {
    setTitle("");
    setDelivered("");
    setMonthDelivered("");
    setYearDelivered("");
    setDescription("");
    hideForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setYearList(getDropList());
  }, []);

  return (
    <FormControl
      ml={{ base: "none", md: "1rem" }}
      mt="1rem"
      mb="1rem"
      onSubmit={handleSubmit}
    >
      <Flex flexDir="column">
        <Input
          placeholder="Nom de la certification"
          w={{ base: "95%", md: "65%" }}
          onChange={handleTitleChange}
          value={title}
        />
        <Input
          placeholder="Délivré par"
          w={{ base: "95%", md: "65%" }}
          mt="0.5rem"
          onChange={handleDeliverChange}
          value={delivered}
        />
        <FormLabel
          htmlFor="date"
          fontSize="xl"
          fontWeight="bold"
          lineHeight="28px"
          color="#2F1D2C"
          mt="1rem"
        >
          Date d'obtention
        </FormLabel>
        <HStack>
          <SelectMonth onChange={handleMonthChange} value={monthDelivered} />
          <Select
            w={{ base: "45.8%", md: "32.1%" }}
            placeholder="Année"
            onChange={handleYearChange}
            value={yearDelivered}
          >
            {yearList.map((year) => year)}
          </Select>
        </HStack>
        <Textarea
          w={{ base: "95%", md: "65%" }}
          mt="0.5rem"
          h="15vh"
          placeholder="Description (optionnel)."
          onChange={handleDescChange}
          value={description}
        />
        <Button
          w={{ base: "95%", md: "65%" }}
          mt="1rem"
          variant="solid_PrimaryColor"
        >
          Enregistrer
        </Button>
        <Button
          w={{ base: "95%", md: "65%" }}
          mt="1rem"
          variant="solid_SecondaryColor"
          onClick={handleReset}
        >
          Annuler
        </Button>
      </Flex>
    </FormControl>
  );
}
