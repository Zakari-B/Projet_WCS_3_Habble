import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import FormationCarousel from "../components/ProfileFreelancer/Formation/FormationCarousel";
import DocumentCarouselCoordo from "../components/ProfilCoordinator/DocumentCarouselCoordo";
import BannerProfileCoordinator from "../components/ProfilCoordinator/InfoProfilCoordinator/BannerProfileCoordinator";
import AccountCard from "../components/ProfileFreelancer/Account/AccountCard";
import DiplomeCarousel from "../components/ProfileFreelancer/Diplomes/DiplomeCarousel";
import ExperienceCarousel from "../components/ProfileFreelancer/Experience/ExperienceCarousel";
import Verifications from "../components/ProfileFreelancer/Verifications";
import Tarif from "../components/ProfileFreelancer/Tarif";
import Expertises from "../components/ProfileFreelancer/Expertises/Expertises";
import MissionCarousel from "../components/ProfileFreelancer/Mission/MissionCarousel";
import { getListforAnId, getSubListforAnId } from "../services/ProfileProUtils";
import backendAPI from "../services/backendAPI";

export default function ProfilPageProfessionalCoord() {
  const navigate = useNavigate();
  const { coordinatorId } = useParams();
  const [coordinator, setCoordinator] = useState({});
  const [updated, setUpdated] = useState(false);
  const [coordoUser, setCoordoUser] = useState([]);
  const [loggedUser, setLoggedUser] = useState("");
  const [cityInfo, setCityInfo] = useState([]);
  const [formations, setFormations] = useState([]);
  const [diplomes, setDiplomes] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const getCoordinator = () => {
    getListforAnId("coordinators", coordinatorId)
      .then((response) => {
        setCoordinator(response.data);
        setDiplomes(response.data.diplomes_coordinator);
        setFormations(response.data.formations_coordinator);
        setExperiences(response.data.experience_pro_coordinator);
      })
      .catch((error) => {
        console.warn(error);
        navigate("/error");
      });

    getSubListforAnId("coordinators", parseInt(coordinatorId, 10), "city").then(
      (response) => {
        setCityInfo(response.data[0]);
      }
    );

    getSubListforAnId("coordinator", parseInt(coordinatorId, 10), "user").then(
      (response) => {
        setCoordoUser(response.data);
      }
    );
  };

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
      <Header onDark={false} isSticky={false} isStickyWhite updated={updated} />
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
            {loggedUser.userId === coordinator.userId ? (
              <AccountCard user={coordoUser} />
            ) : null}
            <Verifications freelancer={coordinator} loggedUser={loggedUser} />
            <Expertises freelancer={coordinator} />
            <Tarif freelancer={coordinator} />
          </Flex>
          <Flex
            bgColor="background.gray"
            minW={{ base: "100%", lg: "66%" }}
            direction="column"
            gap="20px"
          >
            {loggedUser.userId === coordinator.userId ? (
              <DocumentCarouselCoordo
                updated={updated}
                setUpdated={setUpdated}
              />
            ) : null}

            <FormationCarousel
              formations={formations}
              updated={updated}
              setUpdated={setUpdated}
              freelancer={coordinator}
              loggedUser={loggedUser}
            />
            <DiplomeCarousel
              diplomes={diplomes}
              updated={updated}
              setUpdated={setUpdated}
              freelancer={coordinator}
              loggedUser={loggedUser}
            />
            <ExperienceCarousel
              experiences={experiences}
              updated={updated}
              setUpdated={setUpdated}
              freelancer={coordinator}
              loggedUser={loggedUser}
            />
            <MissionCarousel freelancer={coordinator} loggedUser={loggedUser} />
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  );
}
