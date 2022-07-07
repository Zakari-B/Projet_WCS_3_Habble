import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import backendAPI from "../../../services/backendAPI";

export default function Services() {
  const { freelancerId } = useParams();

  const [serviceList, setServiceList] = useState([]);

  const getAllServicesByFreelancer = () => {
    backendAPI
      .get(`/api/freelancers/${freelancerId}/services`)
      .then((response) => {
        setServiceList(response.data.map((e) => e.fk_services_id.name));
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  useEffect(() => {
    getAllServicesByFreelancer();
  }, []);

  return (
    <Flex
      justifyContent="center"
      alignSelf="center"
      columnGap="3"
      rowGap="2"
      flexWrap="wrap"
      h="fit-content"
      w="fit-content"
    >
      {serviceList.map((element) => (
        <Text
          m="0.2rem"
          p="0.2rem"
          bgColor="#f2f5f7"
          fontSize="sm"
          w="fit-content"
        >
          {element}
        </Text>
      ))}
    </Flex>
  );
}
