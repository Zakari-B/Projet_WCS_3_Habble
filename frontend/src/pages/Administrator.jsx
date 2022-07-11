import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Select,
  Avatar,
  Button,
  Image,
  Heading,
  useDisclosure,
  Tag,
} from "@chakra-ui/react";

import dateFormat from "dateformat";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import UserDeleteModal from "../components/Admin/UserDeleteModal";
import AdminDoc from "../components/Admin/AdminDoc";
import backendAPI from "../services/backendAPI";
import { getSubListforAnId } from "../services/ProfileProUtils";

export default function Administrator() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [userToAdministrate, setUserToAdministrate] = useState("");
  const [userDocuments, setUserDocuments] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [cityInfo, setCityInfo] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      backendAPI.get("/api/auth/sessionControl").then((res) => {
        if (res.code === "401") {
          navigate("/error");
        }
      });
    } else {
      navigate("/error");
    }
    backendAPI.get("/api/users").then((res) => setUserList(res.data));
  }, []);

  const changeUser = (e) => {
    const id = parseInt(e.target.value, 10);
    if (e.target.value !== "") {
      setSelectedUser(id);
    }
  };

  useEffect(() => {
    if (selectedUser !== "") {
      backendAPI.get(`/api/users/adminGetOne/${selectedUser}`).then((res) => {
        setUserToAdministrate(res.data);
      });
    }
  }, [selectedUser, updated]);

  useEffect(() => {
    if (selectedUser !== "") {
      if (userToAdministrate.userResult.role === "freelancer") {
        backendAPI
          .get(`/api/freelancers/${userToAdministrate.roleResult.id}/documents`)
          .then((res) => setUserDocuments(res.data))
          .then(() => {
            getSubListforAnId(
              "freelancers",
              userToAdministrate.roleResult.id,
              "city"
            )
              .then((response) => {
                setCityInfo(response.data[0]);
              })
              .catch((error) => {
                console.warn(error);
              });
            backendAPI
              .get(
                `/api/freelancers/${userToAdministrate.roleResult.id}/services`
              )
              .then((response) => {
                setServiceList(response.data.map((e) => e.fk_services_id.name));
              })
              .catch((error) => {
                console.warn(error);
              });
          });
      }
    }
  }, [userToAdministrate]);

  const handleUserAvailability = () => {
    console.warn("User availability");
    backendAPI.put(`api/freelancers/${userToAdministrate.roleResult.id}`, {
      available: false,
    });
    setUpdated(!updated);
  };

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite isSignUp />
      <Flex
        bgColor="background.gray"
        minHeight="100px"
        flexDirection="column"
        width="100%"
        pt={{ base: "8rem" }}
        pb={{ base: "2rem" }}
      >
        <Flex
          bgColor="white"
          width="90%"
          m="auto"
          alignItems="center"
          justifyContent="center"
          boxShadow="0px 1px 1px 0px rgb(185 184 184 / 75%)"
          borderRadius="25px"
          padding={{ base: "0", md: "20px", lg: "25px" }}
          minHeight="120px"
        >
          <Flex
            flexDirection="column"
            height="100%"
            width="33%"
            alignItems="center"
          >
            <Text fontWeight="bold">Familles</Text>
            <Select mt="10px" w="90%" onChange={changeUser}>
              <option value="">---</option>
              {userList &&
                userList
                  .filter((elem) => elem.role === "employer")
                  .map((elem) => {
                    return (
                      <option value={elem.id}>
                        {elem.id} - {elem.firstname} {elem.lastname}
                      </option>
                    );
                  })}
            </Select>
          </Flex>
          <Flex
            flexDirection="column"
            height="100%"
            width="33%"
            alignItems="center"
          >
            <Text fontWeight="bold">Coordinateurs</Text>
            <Select mt="10px" w="90%" onChange={changeUser}>
              <option value="">---</option>
              {userList &&
                userList
                  .filter((elem) => elem.role === "coordinator")
                  .map((elem) => {
                    return (
                      <option value={elem.id}>
                        {elem.id} - {elem.firstname} {elem.lastname}
                      </option>
                    );
                  })}
            </Select>
          </Flex>
          <Flex
            flexDirection="column"
            height="100%"
            width="33%"
            alignItems="center"
          >
            <Text fontWeight="bold">Freelancers</Text>
            <Select mt="10px" w="90%" onChange={changeUser}>
              <option value="">---</option>
              {userList &&
                userList
                  .filter((elem) => elem.role === "freelancer")
                  .map((elem) => {
                    return (
                      <option value={elem.id}>
                        {elem.id} - {elem.firstname} {elem.lastname}
                      </option>
                    );
                  })}
            </Select>
          </Flex>
        </Flex>
      </Flex>
      <Flex bgColor="background.gray">
        {userToAdministrate && (
          <Flex
            w={{ base: "95%", lg: "80%" }}
            direction="column"
            alignSelf="center"
            boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
            border="1px solid #ededed"
            borderRadius="25px"
            m="auto"
            mb="30px"
            bgColor="white"
          >
            <Flex
              bgColor="purple.average"
              minH="60%"
              p="10px"
              flexDir={{ base: "column", md: "row" }}
              borderRadius="25px 25px 0 0"
            >
              <Flex
                my="2rem"
                minW="250px"
                w={{ base: "100%", md: "15%" }}
                alignItems="center"
                justifyContent="center"
              >
                {userToAdministrate.roleResult.picture ? (
                  <Image
                    src={userToAdministrate.roleResult.picture}
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
              </Flex>
              <Flex
                direction="column"
                w={{ base: "95%", md: "40%" }}
                margin="auto 0"
              >
                <Text
                  fontSize="2rem"
                  fontWeight="700"
                  color="white"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {userToAdministrate.roleResult.displayName}
                </Text>
                <Text
                  fontSize="1.5rem"
                  fontWeight="700"
                  color="white"
                  marginBottom="1.2rem"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {userToAdministrate.roleResult.activityDescription} à{" "}
                  {userToAdministrate.roleResult.zipCode} {cityInfo?.ville_nom}
                </Text>
                <Text
                  color="white"
                  marginBottom="1.2rem"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {userToAdministrate.roleResult.experienceYear} années
                  d'expérience
                </Text>
                <Text
                  color="white"
                  marginBottom="1.2rem"
                  textAlign={{ base: "center", md: "left" }}
                >
                  Membre depuis le{" "}
                  {dateFormat(
                    userToAdministrate.roleResult.dateCreated,
                    "dd/mm/yyyy"
                  )}
                </Text>
                <Text color="white" textAlign={{ base: "center", md: "left" }}>
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
                </Text>

                <Flex
                  direction={{ base: "column", sm: "row" }}
                  p="0.75rem"
                  gap={5}
                  margin="auto"
                  w="auto"
                  display={{ base: "flex", md: "none" }}
                >
                  <Button marginTop="0.75rem" variant="solid_PrimaryColor">
                    Modifier
                  </Button>
                  <Button marginTop="0.75rem" variant="outlineWhite">
                    Voir mon profil en ligne
                  </Button>
                </Flex>
              </Flex>

              <Flex
                direction="column"
                p="0.75rem"
                gap={5}
                margin="0 0 0 auto"
                w="auto"
                display={{ base: "none", md: "flex" }}
              >
                <Button
                  marginTop="0.75rem"
                  variant="solid_PrimaryColor"
                  onClick={onOpen}
                >
                  Supprimer utilisateur
                </Button>
                <Button variant="outlineWhite" onClick={handleUserAvailability}>
                  Rendre indisponible
                </Button>
                {userToAdministrate.userResult.role === "freelancer" &&
                userToAdministrate.roleResult.available === true ? (
                  <Text fontSize="1.3rem" fontWeight="700" color="#B7EE92">
                    Disponible
                  </Text>
                ) : null}
                {userToAdministrate.userResult.role === "freelancer" &&
                userToAdministrate.roleResult.available === false ? (
                  <Text fontSize="1.3rem" fontWeight="700" color="#EE9C92">
                    Indisponible
                  </Text>
                ) : null}
              </Flex>
            </Flex>

            <Flex
              bgColor="lightgray"
              direction="column"
              minH="25%"
              p="20px"
              borderRadius="0 0 25px 25px"
            >
              <Text fontWeight="700" fontSize="1.2rem" p="5px">
                À propos de {userToAdministrate.roleResult.displayName}
              </Text>
              <Text p="5px">{userToAdministrate.roleResult.description}</Text>
            </Flex>
            <Flex
              bgColor="white"
              minH="60%"
              p="10px"
              mt="10px"
              flexDir="column"
            >
              <Heading
                as="h2"
                textAlign="left"
                fontSize="1.4rem"
                fontWeight="600"
                color="purple.average"
              >
                Validations
              </Heading>

              <Flex
                bgColor="white"
                minH="60%"
                p="10px"
                flexDir={{ base: "column", md: "row" }}
                flexWrap="wrap"
                borderRadius="25px 25px 0 0"
                mt="10px"
                gap="10px"
                justifyContent="center"
              >
                {userDocuments &&
                  userDocuments.map((elem) => <AdminDoc data={elem} />)}
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
      <UserDeleteModal
        isOpen={isOpen}
        onClose={onClose}
        userId={selectedUser}
        updated={updated}
        setUpdated={setUpdated}
      />
      <Footer />
    </Box>
  );
}
