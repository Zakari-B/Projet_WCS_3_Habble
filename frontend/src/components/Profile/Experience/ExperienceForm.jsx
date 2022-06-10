import {
  Flex,
  HStack,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import ExperienceFormContext from "../../../contexts/ExperienceFormContext";
import SelectMonth from "../../SelectMonth";
import getDropList from "../../../services/Utils";

export default function ExperienceForm() {
  const [yearList, setYearList] = useState([]);
  const { setIsVisible } = useContext(ExperienceFormContext);
  const { isOpen, onToggle } = useDisclosure();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [fromMonth, setFromMonth] = useState("");
  const [fromYear, setFromYear] = useState("");
  const [toMonth, setToMonth] = useState("");
  const [toYear, setToYear] = useState("");
  const [currentJob, setCurrentJob] = useState(false);
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleDeliverChange = (e) => {
    e.preventDefault();
    setCompany(e.target.value);
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
  const handleCheck = (e) => {
    e.preventDefault();
    setCurrentJob(e.target.checked);
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
    setCompany("");
    setFromMonth("");
    setFromYear("");
    setToMonth("");
    setToYear("");
    setDescription("");
    setCurrentJob(false);
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
      ml="1rem"
      mt="1rem"
      mb="1rem"
      onSubmit={handleSubmit}
      isRequired
    >
      <Flex flexDir="column">
        <Input
          placeholder="Titre"
          w={{ base: "95%", md: "65%" }}
          onChange={handleTitleChange}
          value={title}
        />
        <Input
          placeholder="Entreprise"
          w={{ base: "95%", md: "65%" }}
          mt="0.5rem"
          onChange={handleDeliverChange}
          value={company}
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
        <Checkbox
          mt="0.5rem"
          colorScheme="pink"
          onChange={handleCheck}
          value={currentJob}
          isChecked={currentJob}
        >
          Y travaille actuellement
        </Checkbox>
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
