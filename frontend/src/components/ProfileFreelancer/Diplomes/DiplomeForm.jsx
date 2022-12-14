import {
  Flex,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Box,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import DiplomeFormContext from "../../../contexts/DiplomeFormContext";
import SelectMonth from "../../SelectMonth";
import getDropList from "../../../services/Utils";
import { addToList, updateItemList } from "../../../services/ProfileProUtils";

export default function DiplomeForm({ updated, setUpdated }) {
  const toast = useToast();
  const [yearList, setYearList] = useState([]);
  const { setIsVisible, currentDiploma } = useContext(DiplomeFormContext);
  const { isOpen, onToggle } = useDisclosure();
  const { freelancerId, coordinatorId } = useParams();
  const [title, setTitle] = useState(currentDiploma.title);
  const [school, setSchool] = useState(currentDiploma.school);
  const [monthDelivered, setMonthDelivered] = useState(
    currentDiploma.monthDelivered
  );
  const [yearDelivered, setYearDelivered] = useState(
    currentDiploma.yearDelivered
  );
  const [description, setDescription] = useState(
    currentDiploma.description || ""
  );
  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleSchoolChange = (e) => {
    e.preventDefault();
    setSchool(e.target.value);
  };
  const handleMonthChange = (e) => {
    e.preventDefault();
    setMonthDelivered(e.target.value);
  };
  const handleYearChange = (e) => {
    e.preventDefault();
    setYearDelivered(parseInt(e.target.value, 10));
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
    setSchool("");
    setMonthDelivered("");
    setYearDelivered("");
    setDescription("");
    hideForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (freelancerId !== undefined) {
      addToList("freelancers", "diplomes", freelancerId, {
        title,
        school,
        monthDelivered,
        yearDelivered,
        description,
      })
        .then(() => {
          setUpdated(!updated);
          toast({
            title: "Votre dipl??me a bien ??t?? ajout??",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          });
        })
        .catch(() =>
          toast({
            title: "Votre dipl??me n'a pas pu ??tre ajout??",
            status: "error",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        );
    }
    if (coordinatorId !== undefined) {
      addToList("coordinator", "diplomes", coordinatorId, {
        title,
        school,
        monthDelivered,
        yearDelivered,
        description,
      })
        .then(() => {
          setUpdated(!updated);

          toast({
            title: "Votre dipl??me a bien ??t?? ajout??",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          });
        })
        .catch(() =>
          toast({
            title: "Votre dipl??me n'a pas pu ??tre ajout??",
            status: "error",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        );
    }

    handleReset();
    setIsVisible(false);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (freelancerId !== undefined) {
      updateItemList(
        "freelancers",
        "diplomes",
        freelancerId,
        currentDiploma.id,
        {
          title,
          school,
          monthDelivered,
          yearDelivered,
          description,
        }
      )
        .then(() => {
          setUpdated(!updated);
          toast({
            title: "Votre dipl??me a bien ??t?? modifi??",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          });
        })
        .catch(() =>
          toast({
            title: "Votre dipl??me n'a pas pu ??tre modifi??",
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
        "diplomes",
        coordinatorId,
        currentDiploma.id,
        {
          title,
          school,
          monthDelivered,
          yearDelivered,
          description,
        }
      )
        .then(() => {
          setUpdated(!updated);
          toast({
            title: "Votre dipl??me a bien ??t?? modifi??",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          });
        })
        .catch(() =>
          toast({
            title: "Votre dipl??me n'a pas pu ??tre modifi??",
            status: "error",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        );
    }

    handleReset();
    setIsVisible(false);
  };

  useEffect(() => {
    setYearList(getDropList());
  }, []);

  return (
    <FormControl
      ml={{ base: "none", md: "1rem" }}
      mt="1rem"
      mb="1rem"
      onSubmit={currentDiploma.id ? handleUpdate : handleSubmit}
    >
      <Box as="form">
        <Flex flexDir="column">
          <Input
            placeholder="Nom de la certification"
            w={{ base: "95%", md: "65%" }}
            onChange={handleTitleChange}
            value={title}
          />
          <Input
            placeholder="D??livr?? par"
            w={{ base: "95%", md: "65%" }}
            mt="0.5rem"
            onChange={handleSchoolChange}
            value={school}
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
            <SelectMonth
              onChange={handleMonthChange}
              monthDelivered={monthDelivered}
            />
            <Select
              w={{ base: "45.8%", md: "32.1%" }}
              placeholder="Ann??e"
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
