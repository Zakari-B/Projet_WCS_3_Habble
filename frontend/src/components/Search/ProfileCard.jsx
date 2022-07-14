import {
  Flex,
  Tag,
  Button,
  Text,
  Box,
  Image,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsGeoAltFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getSubListforAnId } from "../../services/ProfileProUtils";

export default function ProfileCard({ freelancer }) {
  const [city, setCity] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    getSubListforAnId("freelancers", freelancer.id, "city").then((response) => {
      setCity(response.data[0]);
    });
    getSubListforAnId("freelancers", freelancer.id, "services").then(
      (response) => {
        setServices(response.data);
      }
    );
  }, []);

  return (
    <Flex direction="column" color="purple.average" gap="30px">
      <Flex
        gap="30px"
        direction={{ lg: "row", base: "column" }}
        justify={{ lg: "space-between", base: "center" }}
        alignItems={{ lg: "flex-start", base: "center" }}
      >
        <Flex
          gap="30px"
          direction={{ lg: "row", base: "column" }}
          alignItems="center"
          justify="center"
        >
          {freelancer.picture ? (
            <Box
              minW="200px"
              minH="200px"
              maxW="200px"
              maxH="200px"
              height="200px"
              width="200px"
            >
              <Image
                width="fill-available"
                height="fill-available"
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                  freelancer.picture
                }`}
                borderRadius="100%"
                border="1px solid gray.200"
              />
            </Box>
          ) : (
            <Avatar
              src="https://bit.ly/broken-link"
              height="200px"
              width="200px"
              maxW="200"
              maxH="200"
            />
          )}
          <Flex
            direction="column"
            gap="10px"
            w="100%"
            alignItems={{ lg: "flex-start", base: "center" }}
          >
            <Heading as="h2" fontSize="calc(1rem + 0.5vw)" fontWeight="600">
              {`${freelancer.displayName}`}
            </Heading>
            <Text fontWeight="600">{freelancer.activityDescription}</Text>
            <Flex gap="60px" width="fit-content" alignItems="center">
              <Flex gap="5px" alignItems="center">
                <BsGeoAltFill />
                <Text>{`${city?.ville_nom}`}</Text>
                {freelancer.distanceInMeters !== undefined && (
                  <Tag
                    variant="outline"
                    color="pink.light"
                    boxShadow="inset 0 0 0px 1px #A7197F"
                  >
                    {`${parseFloat(
                      (freelancer.distanceInMeters / 1000).toFixed(1)
                    )} km`}
                  </Tag>
                )}
              </Flex>

              <Flex>
                <Text fontWeight="700">
                  {freelancer.price}€ /h * (indicatif)
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              wrap="wrap"
              justify={{ lg: "flex-start", base: "center" }}
            >
              {services.map((service) => (
                <Tag>{service?.fk_services_id?.name}</Tag>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Link to={`/profil/${freelancer.id}`} target="_blank">
          <Button variant="solid_PrimaryColor">Voir le profil</Button>
        </Link>
      </Flex>
      <Flex>
        <Text
          noOfLines={{ lg: 2, md: 3, base: 4 }}
          fontWeight="500"
          textAlign={{ lg: "left", base: "center" }}
        >
          {freelancer.description}
        </Text>
      </Flex>
    </Flex>
  );
}
