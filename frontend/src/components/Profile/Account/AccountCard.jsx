import {
  Flex,
  Heading,
  Button,
  Collapse,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";

import AccountForm from "./AccountForm";
// import AccountFormPassword from "./AccountFormPassword";
import FormationFormContext from "../../../contexts/FormationFormContext";
import EditPassWordModal from "../../EditPasswordModal";

export default function FormationCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const [email] = useState("[EMAIL]");
  const context = useMemo(() => ({ isVisible, setIsVisible }), []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
    >
      <Flex direction="column">
        <Flex direction="column">
          <Flex justify="space-between" align="center">
            <Heading
              as="h2"
              color="purple.light"
              fontSize="1.5em"
              fontWeight="700"
            >
              Mon compte
            </Heading>
            {!isVisible && (
              <Button variant="outline_Pink" onClick={toggleForm}>
                Modifier
              </Button>
            )}
          </Flex>
          {!isVisible && <Text paddingTop="2rem">Adresse email :</Text>}
          {!isVisible && (
            <Text paddingTop="0.8rem" paddingBottom="3rem">
              {email}
            </Text>
          )}
          {!isVisible && (
            <Button onClick={onOpen} variant="solid_PrimaryColor">
              Changer mon mot de passe
            </Button>
          )}
        </Flex>
      </Flex>

      <Collapse in={isVisible}>
        {isVisible && (
          <FormationFormContext.Provider value={context}>
            <AccountForm />
          </FormationFormContext.Provider>
        )}
      </Collapse>

      <EditPassWordModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
