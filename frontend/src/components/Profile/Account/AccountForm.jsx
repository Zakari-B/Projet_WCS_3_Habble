import {
  Flex,
  Button,
  FormControl,
  Input,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import FormationFormContext from "../../../contexts/FormationFormContext";

export default function AccountForm() {
  const { setIsVisible } = useContext(FormationFormContext);
  const { isOpen, onToggle } = useDisclosure();

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const hideForm = () => {
    setIsVisible(false);
    onToggle(!isOpen);
  };

  const handleReset = () => {
    hideForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      m="1rem"
      onSubmit={handleSubmit}
      w="100%"
      transition="all 0.3s ease-in-out"
      isRequired
    >
      <Flex w="100%" direction="column">
        <Text>Adresse e-mail</Text>
        <Input
          type="email"
          name="Adresse email"
          placeholder={email}
          w="65%"
          onChange={handleEmailChange}
          value={email}
          id="emailAddress"
        />

        <Button w="65%" mt="1rem" variant="solid_PrimaryColor">
          Enregistrer
        </Button>
        <Button
          w="65%"
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
