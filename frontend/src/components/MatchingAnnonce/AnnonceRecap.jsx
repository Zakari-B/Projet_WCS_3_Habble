import { Flex, Heading, Text, Button, Tag, Divider } from "@chakra-ui/react";

export default function AnnonceRecap({ annonce, offers }) {
  let tagColor = "";
  if (annonce.status === "En cours de vérification") {
    tagColor = "gray";
  } else if (annonce.status === "Rejetée") {
    tagColor = "red";
  } else if (annonce.status === "Actif") {
    tagColor = "green";
  } else {
    tagColor = "gray";
  }

  const role = localStorage.getItem("role");

  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      border="1px solid #ededed"
      paddingY="30px"
      w={{ base: "95%", lg: "80%" }}
      m="auto"
    >
      <Flex justify="space-between" alignItems="flex-start">
        <Flex direction="column" gap="30px" alignItems="flex-start" maxW="70%">
          <Flex direction="column" gap="30px">
            <Flex gap="10px">
              <Heading
                as="h1"
                color="#415161"
                lineHeight="1.5em"
                fontWeight="700"
                fontSize="20px"
              >
                {annonce.title}
              </Heading>
              <Tag colorScheme={tagColor}> {annonce.status}</Tag>
            </Flex>

            <Text
              color="#415161"
              lineHeight="1.5em"
              fontWeight="500"
              fontSize="14px"
              noOfLines={2}
            >
              {annonce.description}
            </Text>
            <Flex w="100%" justify="space-between">
              <Flex direction="column" gap="3px">
                <Text
                  color="#415161"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  Offres
                </Text>
                <Text
                  color="pink.light"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  {offers.length}
                </Text>
              </Flex>
              <Flex direction="column" gap="3px">
                <Text
                  color="#415161"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  Offre moyenne
                </Text>
                <Text
                  color="pink.light"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  {offers.length > 0 &&
                    offers
                      .map((free) => free.price)
                      .reduce((acc, value) => acc + value, 0) / offers.length}
                  €
                </Text>
              </Flex>
              <Flex direction="column" gap="3px">
                <Text
                  color="#415161"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  Où
                </Text>
                <Text
                  color="pink.light"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  {annonce.zipCode}
                </Text>
              </Flex>
              <Flex direction="column" gap="3px">
                <Text
                  color="#415161"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  Publiée le
                </Text>
                <Text
                  color="pink.light"
                  lineHeight="1.5em"
                  fontWeight="700"
                  fontSize="14px"
                >
                  {annonce.createdAt}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Divider />
          <Flex w="100%" justify="space-between">
            <Flex direction="column" gap="10px">
              <Text
                color="#415161"
                lineHeight="1.5em"
                fontWeight="700"
                fontSize="14px"
              >
                Services requis
              </Text>

              <Flex gap="10px">
                {annonce.services.map((service) => (
                  <Tag>{service}</Tag>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" gap="10px" alignItems="flex-end">
          {role === "employer" ? (
            <Button variant="solid_PrimaryColor">Modifier</Button>
          ) : (
            <Button variant="solid_PrimaryColor">Faire une Proposition</Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
