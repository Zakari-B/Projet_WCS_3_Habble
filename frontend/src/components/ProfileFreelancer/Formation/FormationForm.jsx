import {
  Flex,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Textarea,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import FormationFormContext from "../../../contexts/FormationFormContext";
import SelectMonth from "../../SelectMonth";
import getDropList from "../../../services/Utils";
import { addToList, updateItemList } from "../../../services/ProfileProUtils";

export default function FormationForm({ updated, setUpdated }) {
  const toast = useToast();
  const [yearList, setYearList] = useState([]);
  const { setIsVisible, currentFormation } = useContext(FormationFormContext);
  const { isOpen, onToggle } = useDisclosure();
  const { freelancerId, coordinatorId } = useParams();
  const [level, setlevel] = useState(currentFormation.level);
  const [institution, setInstitution] = useState(currentFormation.institution);
  const [startMonth, setStartMonth] = useState(currentFormation.startMonth);
  const [startYear, setStartYear] = useState(currentFormation.startYear);
  const [endMonth, setEndMonth] = useState(currentFormation.endMonth);
  const [endYear, setEndYear] = useState(currentFormation.endYear);
  const [description, setDescription] = useState(
    currentFormation.description || ""
  );

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
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
    hideForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (freelancerId !== undefined) {
      addToList("freelancers", "formations", freelancerId, {
        level,
        institution,
        startMonth,
        startYear,
        endMonth,
        endYear,
        description,
      })
        .then(() => {
          setUpdated(!updated);

          toast({
            title: "Votre formation a bien été ajoutée",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          });
        })
        .catch((e) => {
          console.error(e);
          toast({
            title: "Votre formation n'a pas pu être ajoutée",
            status: "error",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          });
        });
    }
    if (coordinatorId !== undefined) {
      addToList("coordinator", "formations", coordinatorId, {
        level,
        institution,
        startMonth,
        startYear,
        endMonth,
        endYear,
        description,
      })
        .then(() => {
          setUpdated(!updated);

          toast({
            title: "Votre formation a bien été ajoutée",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          });
        })
        .catch((e) => {
          console.error(e);
          toast({
            title: "Votre formation n'a pas pu être ajoutée",
            status: "error",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          });
        });
    }
    handleReset();
    setIsVisible(false);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (freelancerId !== undefined) {
      updateItemList(
        "freelancers",
        "formations",
        freelancerId,
        currentFormation.id,
        {
          level,
          institution,
          startMonth,
          startYear,
          endMonth,
          endYear,
          description,
        }
      )
        .then(() =>
          toast({
            title: "Votre formation a bien été modifiée",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        )
        .catch(() =>
          toast({
            title: "Votre formation n'a pas pu être modifiée",
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
        "formations",
        coordinatorId,
        currentFormation.id,
        {
          level,
          institution,
          startMonth,
          startYear,
          endMonth,
          endYear,
          description,
        }
      )
        .then(() =>
          toast({
            title: "Votre formation a bien été modifiée",
            status: "success",
            position: "bottom-right",
            duration: 7000,
            isClosable: true,
          })
        )
        .catch(() =>
          toast({
            title: "Votre formation n'a pas pu être modifiée",
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
      onSubmit={currentFormation.id ? handleUpdate : handleSubmit}
      w="100%"
      transition="all 0.3s ease-in-out"
    >
      <Box as="form">
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
