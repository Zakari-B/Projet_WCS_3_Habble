import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import DocumentCarouselCoordo from "../components/ProfilCoordinator/DocumentCarouselCoordo";
import BannerProfileCoordinator from "../components/ProfilCoordinator/InfoProfilCoordinator/BannerProfileCoordinator";
import AnnonceCarouselCoordo from "../components/ProfilCoordinator/Annonces/AnnonceCarouselCoordo";
import AccountCard from "../components/ProfileFreelancer/Account/AccountCard";
import Verifications from "../components/ProfileFreelancer/Verifications";
import Accompagnement from "../components/ProfilCoordinator/Accompagnement";
import backendAPI from "../services/backendAPI";
// import { getSubListforAnId } from "../services/ProfileProUtils";

export default function ProfilPageCoordinator() {
  const navigate = useNavigate();

  const { coordinatorId } = useParams();
  const [coordinator, setCoordinator] = useState({});
  const [updated, setUpdated] = useState(false);
  const [coordoUser, setCoordoUser] = useState([]);
  const [loggedUser, setLoggedUser] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [cityInfo, setCityInfo] = useState([]);

  const getCoordinator = () => {
    backendAPI
      .get(`/api/coordinator/${coordinatorId}/user`)
      .then((response) => {
        setCoordoUser(response.data);
        setCoordinator(response.data.coordinator);
      })
      .catch((error) => {
        console.warn(error);
        navigate("/error");
      });
  };

  // getSubListforAnId("coordinators", coordinatorId, "city").then((response) => {
  //   console.log(response.data[0]);
  //   setCityInfo(response.data[0]);
  // });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      backendAPI.get("/api/auth/sessionControl").then((res) => {
        setLoggedUser(res.data);
        if (res.code === "401") {
          navigate("/login");
        }
      });
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    getCoordinator();
  }, [updated]);

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        paddingY="30px"
        paddingTop="150px"
      >
        <BannerProfileCoordinator
          coordinator={coordinator}
          city={cityInfo}
          updated={updated}
          setUpdated={setUpdated}
          loggedUser={loggedUser}
        />
        <Flex
          w={{ base: "95%", lg: "80%" }}
          gap="20px"
          m="auto"
          paddingY="30px"
          direction={{ base: "column", lg: "row" }}
        >
          <Flex
            minW={{ base: "100%", lg: "33%" }}
            minH="20vh"
            bgColor="background.gray"
            gap="20px"
            flexDir="column"
          >
            <AccountCard user={coordoUser} />
            <Verifications freelancer={coordinator} loggedUser={loggedUser} />
            <Accompagnement />
          </Flex>
          <Flex
            bgColor="background.gray"
            minW={{ base: "100%", lg: "66%" }}
            direction="column"
            gap="20px"
          >
            <DocumentCarouselCoordo setUpdated={setUpdated} />
            <AnnonceCarouselCoordo updated={updated} setUpdated={setUpdated} />
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  );
}
