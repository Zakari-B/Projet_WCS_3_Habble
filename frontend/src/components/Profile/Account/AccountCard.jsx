import { Flex, Heading, Button, Collapse, Text } from "@chakra-ui/react";
import { useState, useMemo } from "react";

import AccountForm from "./AccountForm";
// import AccountFormPassword from "./AccountFormPassword";
import FormationFormContext from "../../../contexts/FormationFormContext";

export default function FormationCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const [email] = useState("email");
  const context = useMemo(() => ({ isVisible, setIsVisible }), []);

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Flex
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
      direction="column"
    >
      <Flex direction="column">
        <Flex direction="column" mb="40px">
          <Flex justify="space-between">
            <Heading
              as="h2"
              color="purple.average"
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
          {!isVisible && <Text>Adresse email :</Text>}
          {!isVisible && <Text>{email}</Text>}
        </Flex>
      </Flex>

      <Collapse in={isVisible}>
        {isVisible && (
          <FormationFormContext.Provider value={context}>
            <AccountForm />
          </FormationFormContext.Provider>
        )}
      </Collapse>
    </Flex>
  );
}
