import { Flex, Tag } from "@chakra-ui/react";
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
      justifyContent="flex-start"
      columnGap="3"
      rowGap="2"
      flexWrap="wrap"
      h="fit-content"
      w="fit-content"
    >
      {serviceList.map((element) => (
        <Tag fontSize="sm" w="fit-content" key={element}>
          {element}
        </Tag>
      ))}
    </Flex>
  );
}
