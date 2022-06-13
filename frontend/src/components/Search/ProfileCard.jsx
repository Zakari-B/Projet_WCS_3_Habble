import {
  Flex,
  Button,
  Text,
  Image,
  Heading,
  Tag,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsGeoAltFill } from "react-icons/bs";

export default function ProfileCard({ freelancer }) {
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
          {freelancer.picturePro ? (
            <Image
              src={freelancer.picturePro}
              height="200px"
              width="200px"
              borderRadius="100%"
              border="1px solid gray.200"
            />
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
              {`${freelancer.firstname} ${freelancer.lastname}`}
            </Heading>
            <Text fontWeight="600">{freelancer.activityPro}</Text>
            <Flex gap="60px" width="fit-content" alignItems="center">
              <Flex gap="5px" alignItems="center">
                <BsGeoAltFill />
                <Text>{freelancer.cityPro}</Text>
              </Flex>
              <Flex>
                <Text fontWeight="700">
                  {freelancer.pricePro}€ /h * (indicatif)
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              wrap="wrap"
              justify={{ lg: "flex-start", base: "center" }}
            >
              {freelancer.tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Link to={`/profil/${freelancer.firstname}_${freelancer.lastname}`}>
          <Button variant="solid_PrimaryColor">Voir le profil</Button>
        </Link>
      </Flex>
      <Flex>
        <Text
          noOfLines={{ lg: 2, md: 3, base: 4 }}
          fontWeight="500"
          textAlign={{ lg: "left", base: "center" }}
        >
          {freelancer.descriptionPro}
        </Text>
      </Flex>
    </Flex>
  );
}
