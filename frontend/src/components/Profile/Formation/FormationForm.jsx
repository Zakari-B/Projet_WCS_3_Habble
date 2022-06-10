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
import FormationFormContext from "../../../contexts/FormationFormContext";
import SelectMonth from "../../SelectMonth";
import getDropList from "../../../services/Utils";

export default function FormationForm() {
  const [yearList, setYearList] = useState([]);
  const { setIsVisible } = useContext(FormationFormContext);
  const { isOpen, onToggle } = useDisclosure();

  const [level, setlevel] = useState("");
  const [institution, setInstitution] = useState("");
  const [fromMonth, setFromMonth] = useState("");
  const [fromYear, setFromYear] = useState("");
  const [toMonth, setToMonth] = useState("");
  const [toYear, setToYear] = useState("");
  const [description, setDescription] = useState("");

  const handleLevelChange = (e) => {
    e.preventDefault();
    setlevel(e.target.value);
  };
  const handleInstitutionChange = (e) => {
    e.preventDefault();
    setInstitution(e.target.value);
  };
  const handleFromMonthChange = (e) => {
    e.preventDefault();
    setFromMonth(e.target.value);
  };
  const handleFromYearChange = (e) => {
    e.preventDefault();
    setFromYear(e.target.value);
  };
  const handleToMonthChange = (e) => {
    e.preventDefault();
    setToMonth(e.target.value);
  };
  const handleToYearChange = (e) => {
    e.preventDefault();
    setToYear(e.target.value);
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
    setlevel("");
    setInstitution("");
    setFromMonth("");
    setFromYear("");
    setToMonth("");
    setToYear("");
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
      m="1rem"
      onSubmit={handleSubmit}
      w="100%"
      transition="all 0.3s ease-in-out"
      isRequired
    >
      <Flex flexDir="column" w="100%">
        <Input
          placeholder="Niveau (ex: CAP, BEP, DEUG, LICENCE, Titre niveau III rncp, ...)"
          w={{ base: "95%", md: "65%" }}
          onChange={handleLevelChange}
          value={level}
        />
        <Input
          placeholder="Établissement"
          w={{ base: "95%", md: "65%" }}
          mt="0.5rem"
          onChange={handleInstitutionChange}
          value={institution}
        />
        <FormLabel
          htmlFor="date"
          fontSize="xl"
          fontWeight="bold"
          lineHeight="28px"
          color="purple.average"
          mt="1rem"
        >
          Du
        </FormLabel>
        <HStack>
          <SelectMonth onChange={handleFromMonthChange} value={fromMonth} />
          <Select
            w={{ base: "45.8%", md: "32.1%" }}
            placeholder="Année"
            onChange={handleFromYearChange}
            value={fromYear}
          >
            {yearList.map((year) => year)}
          </Select>
        </HStack>

        <FormLabel
          htmlFor="date"
          fontSize="xl"
          fontWeight="bold"
          lineHeight="28px"
          color="purple.average"
          mt="1rem"
        >
          Au
        </FormLabel>
        <HStack>
          <SelectMonth onChange={handleToMonthChange} value={toMonth} />

          <Select
            w={{ base: "45.8%", md: "32.1%" }}
            placeholder="Année"
            onChange={handleToYearChange}
            value={toYear}
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
