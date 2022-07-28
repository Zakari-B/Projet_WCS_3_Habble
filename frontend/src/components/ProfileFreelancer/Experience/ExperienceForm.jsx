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
  useToast,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import ExperienceFormContext from "../../../contexts/ExperienceFormContext";
import SelectMonth from "../../SelectMonth";
import getDropList from "../../../services/Utils";
import { addToList, updateItemList } from "../../../services/ProfileProUtils";

export default function ExperienceForm({ updated, setUpdated }) {
  const toast = useToast();
  const [yearList, setYearList] = useState([]);
  const { setIsVisible, currentExperience } = useContext(ExperienceFormContext);
  const { isOpen, onToggle } = useDisclosure();
  const { freelancerId, coordinatorId } = useParams();
  const [title, setTitle] = useState(currentExperience.title);
  const [company, setCompany] = useState(currentExperience.company);
  const [startMonth, setStartMonth] = useState(currentExperience.startMonth);
  const [startYear, setStartYear] = useState(currentExperience.startYear);
  const [endMonth, setEndMonth] = useState(currentExperience.endMonth);
  const [endYear, setEndYear] = useState(currentExperience.endYear);
  const [currentJob, setCurrentJob] = useState(currentExperience.currentJob);
  const [description, setDescription] = useState(currentExperience.description);

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
    setStartMonth(e.target.value);
  };
  const handleFromYearChange = (e) => {
    e.preventDefault();
    setStartYear(parseInt(e.target.value, 10));
  };
  const handleToMonthChange = (e) => {
    e.preventDefault();
    setEndMonth(e.target.value);
  };
  const handleToYearChange = (e) => {
    e.preventDefault();
    setEndYear(parseInt(e.target.value, 10));
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
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
    setCurrentJob(false);
    hideForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (freelancerId !== undefined) {
      addToList("freelancers", "experiencePro", freelancerId, {
        title,
        company,
        startMonth,
        startYear,
        endMonth,
        endYear,
        currentJob,
        description,
      })
        .then(() =>
          toast({
            title: "Votre Expérience a bien été ajoutée",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        )
        .catch(() =>
          toast({
            title: "Votre Expérience n'a pas pu être ajoutée",
            status: "error",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        );
    }
    if (coordinatorId !== undefined) {
      addToList("coordinator", "experiencePro", coordinatorId, {
        title,
        company,
        startMonth,
        startYear,
        endMonth,
        endYear,
        currentJob,
        description,
      })
        .then(() =>
          toast({
            title: "Votre Expérience a bien été ajoutée",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        )
        .catch(() =>
          toast({
            title: "Votre Expérience n'a pas pu être ajoutée",
            status: "error",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        );
    }

    handleReset();
    setIsVisible(false);
    setUpdated(!updated);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (freelancerId !== undefined) {
      updateItemList(
        "freelancers",
        "experiencePro",
        freelancerId,
        currentExperience.id,
        {
          title,
          company,
          startMonth,
          startYear,
          endMonth,
          endYear,
          currentJob,
          description,
        }
      )
        .then(() =>
          toast({
            title: "Votre Expérience a bien été modifiée",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        )
        .catch(() =>
          toast({
            title: "Votre Expérience n'a pas pu être modifiée",
            status: "error",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        );
    }
    if (coordinatorId !== undefined) {
      updateItemList(
        "coordinator",
        "experiencePro",
        coordinatorId,
        currentExperience.id,
        {
          title,
          company,
          startMonth,
          startYear,
          endMonth,
          endYear,
          currentJob,
          description,
        }
      )
        .then(() =>
          toast({
            title: "Votre Expérience a bien été modifiée",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        )
        .catch(() =>
          toast({
            title: "Votre Expérience n'a pas pu être modifiée",
            status: "error",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        );
    }

    handleReset();
    setIsVisible(false);
    setUpdated(!updated);
  };

  useEffect(() => {
    setYearList(getDropList());
  }, []);

  return (
    <FormControl
      ml={{ base: "none", md: "1rem" }}
      mt="1rem"
      mb="1rem"
      onSubmit={currentExperience.id ? handleUpdate : handleSubmit}
    >
      <Box as="form">
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
            <SelectMonth
              onChange={handleFromMonthChange}
              value={startMonth}
              defaultMonth={startMonth}
            />
            <Select
              w={{ base: "45.8%", md: "32.1%" }}
              placeholder="Année"
              onChange={handleFromYearChange}
              value={startYear}
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
            <SelectMonth
              onChange={handleToMonthChange}
              value={endMonth}
              defaultMonth={endMonth}
            />
            <Select
              w={{ base: "45.8%", md: "32.1%" }}
              placeholder="Année"
              onChange={handleToYearChange}
              value={endYear}
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
            type="submit"
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
      </Box>
    </FormControl>
  );
}
