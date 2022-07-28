import { useState, useEffect } from "react";

import { Flex, Heading, ListItem, Text, List, Tag } from "@chakra-ui/react";

import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

import backendAPI from "../../services/backendAPI";

export default function Verifications({ freelancer }) {
  const [itemList, setItemList] = useState([]);
  const [profileStatus, setProfileStatus] = useState({
    cni: false,
    diplome: false,
    agrement: false,
    casier: false,
  });
  const [profileKey, setProfileKey] = useState(0);

  useEffect(() => {
    if (freelancer.id !== undefined) {
      backendAPI
        .get(`/api/freelancers/${freelancer.id}/documents`)
        .then((res) => {
          setItemList(res.data);
        });
    }
  }, [freelancer]);

  useEffect(() => {
    let cni = false;
    let diplome = false;
    let agrement = false;
    let casier = false;
    if (
      itemList.some(
        (elem) => elem.verified === true && elem.name === "Carte d'identité"
      )
    ) {
      cni = true;
    }
    if (
      itemList.some((elem) => elem.verified === true && elem.name === "Diplôme")
    ) {
      diplome = true;
    }
    if (
      itemList.some(
        (elem) => elem.verified === true && elem.name === "Agrément"
      )
    ) {
      agrement = true;
    }
    if (
      itemList.some(
        (elem) => elem.verified === true && elem.name === "Casier judiciaire"
      )
    ) {
      casier = true;
    }
    setProfileStatus({ cni, diplome, agrement, casier });
  }, [itemList]);

  useEffect(() => {
    if (Object.values(profileStatus).every((elem) => elem === true)) {
      setProfileKey(2);
    } else if (profileStatus.cni === true) {
      setProfileKey(1);
    } else {
      setProfileKey(0);
    }
  }, [profileStatus]);

  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
      gap="40px"
    >
      <Flex justify="space-between" direction="column">
        <Flex direction="row" w="100%">
          <Heading
            as="h2"
            color="purple.light"
            fontSize="1.5em"
            fontWeight="700"
            paddingBottom="2rem"
          >
            Vérifications :
          </Heading>
          {profileKey === 2 ? (
            <Tag fontWeight="bold" h="1.5rem" color="blue" marginX="10px">
              Profil vérifié
            </Tag>
          ) : null}
          {profileKey === 1 ? (
            <Tag fontWeight="bold" h="1.5rem" color="green" marginX="10px">
              Identité vérifiée
            </Tag>
          ) : null}
          {profileKey === 0 ? (
            <Tag fontWeight="bold" h="1.5rem" color="red" marginX="10px">
              Profil non vérifié
            </Tag>
          ) : null}
        </Flex>
        <Text color="purple.average" fontSize="14px" marginBottom="2rem">
          Nous veillons à ce que chaque professionnel soit contrôlé et vérifié
          pour offrir une expérience fiable et positive.
        </Text>

        <List spacing={1.5}>
          {itemList.map((item) => (
            <ListItem
              color={item.isVerified ? "purple.average" : "gray.500"}
              fontSize="14px"
              key={item.id}
            >
              {item.verified ? (
                <CheckIcon color="green.500" marginRight="1rem" />
              ) : (
                <CloseIcon color="gray.500" marginRight="1rem" />
              )}
              {item.name}
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
}
