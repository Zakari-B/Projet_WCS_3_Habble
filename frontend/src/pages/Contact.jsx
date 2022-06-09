import React, { useState } from "react";
import {
  Box,
  Text,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
  Textarea,
  Flex,
  Heading,
} from "@chakra-ui/react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const contact = () => {
  const [contactLastname, setContactLastname] = useState("");
  const [contactFirstname, setContactFirstname] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  return (
    <Box bgColor="background.gray" h="100vh">
      <Header onDark={false} isSticky={false} />
      <Flex bgColor="background.gray">
        <Flex
          direction="column"
          w="100vw"
          maxWidth={{ base: "1140px" }}
          m={{ base: "0", md: "auto" }}
        >
          <Heading as="h2" m="auto" fontSize="3rem" fontWeight="500" mt="75px">
            Contact
          </Heading>
          <Flex
            className="contactForm"
            bgColor="white"
            w={{ base: "100vw", md: "90vw", lg: "90vw" }}
            maxWidth={{ base: "1140px" }}
            m="auto"
            alignItems="center"
            boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
            marginTop={{ base: "50" }}
            marginBottom={{ base: "0", md: "30px" }}
            borderRadius="25px"
            padding={{ base: "0", md: "20px", lg: "25px" }}
          >
            <Stack
              className="loginConnexion"
              spacing={10}
              w={{ base: "100vw", md: "90vw", lg: "90vw" }}
              maxWidth={{ base: "100vw", md: "800px" }}
              margin={{ base: "20px", md: "0" }}
            >
              <FormControl>
                <FormLabel
                  htmlFor="contactName"
                  fontSize="1.5rem"
                  fontWeight="600"
                >
                  <Flex>
                    Comment vous appelez-vous ?&nbsp;<Text color="red">*</Text>
                  </Flex>
                </FormLabel>
                <Flex>
                  <Input
                    type="text"
                    id="contactLastname"
                    name="lastname"
                    placeholder="Nom"
                    value={contactLastname}
                    onChange={(e) => setContactLastname(e.target.value)}
                    marginRight="10px"
                  />
                  <Input
                    type="text"
                    id="contactFirstname"
                    name="firstname"
                    placeholder="Prénom"
                    value={contactFirstname}
                    onChange={(e) => setContactFirstname(e.target.value)}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel
                  htmlFor="contactEmail"
                  fontSize="1.5rem"
                  fontWeight="600"
                >
                  <Flex>
                    Votre e-mail ?&nbsp;<Text color="red">*</Text>
                  </Flex>
                </FormLabel>
                <Input
                  type="text"
                  id="contactEmail"
                  name="Email"
                  placeholder="Email"
                  value={contactEmail}
                  onChange={(e) => {
                    setContactEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  htmlFor="contactPhone"
                  fontSize="1.5rem"
                  fontWeight="600"
                >
                  Votre numéro de téléphone
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon width="4rem">+33</InputLeftAddon>
                  <Input
                    type="tel"
                    id="contactPhone"
                    name="Phone"
                    placeholder=""
                    value={contactPhone}
                    onChange={(e) => {
                      setContactPhone(e.target.value);
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel
                  htmlFor="loginPassword"
                  fontSize="1.5rem"
                  fontWeight="600"
                >
                  <Flex>
                    Que souhaitez vous nous demander ?&nbsp;
                    <Text color="red">*</Text>
                  </Flex>
                </FormLabel>
                <Textarea
                  w={{
                    base: "100%",
                    md: "calc(90vw - 41px)",
                    lg: "calc(90vw - 51px)",
                  }}
                  maxWidth={{ base: "100vw", md: "1090px" }}
                  type="textarea"
                  id="contactMessage"
                  name="Message"
                  placeholder="Votre message"
                  value={contactMessage}
                  onChange={(e) => {
                    setContactMessage(e.target.value);
                  }}
                />
              </FormControl>
              <Button
                w={{
                  base: "100%",
                  md: "calc(90vw - 41px)",
                  lg: "calc(90vw - 51px)",
                }}
                maxWidth={{ base: "100vw", md: "1090px" }}
                variant="gradient"
                justifyContent="center"
                fontSize="1rem"
                type="button"
                onClick={() => null()}
              >
                Envoyer
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default contact;
