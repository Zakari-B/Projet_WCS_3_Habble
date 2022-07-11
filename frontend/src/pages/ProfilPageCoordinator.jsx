import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import DocumentCarousel from "../components/ProfileFreelancer/DocumentUpload/DocumentCarousel";
// import AnnonceCarousel from "../components/ProfilEmployer/Annonce/AnnonceCarousel";
import BannerProfile from "../components/ProfileFreelancer/Banner/BannerProfile";
import AccountCard from "../components/ProfileFreelancer/Account/AccountCard";
import Verifications from "../components/ProfileFreelancer/Verifications";
import Accompagnement from "../components/ProfilCoordinator/Accompagnement";
import Agrement from "../components/ProfilCoordinator/Agrement";
import { getListforAnId } from "../services/ProfileProUtils";
import backendAPI from "../services/backendAPI";

export default function ProfilPageCoordinator() {
  const navigate = useNavigate();

  const { freelancerId } = useParams();
  const [coordinator, setCoordinator] = useState({});
  const [updated, setUpdated] = useState(false);

  const getCoordinator = () => {
    getListforAnId("coordinators", freelancerId)
      .then((response) => {
        setCoordinator(response.data);
      })
      .catch((error) => {
        console.warn(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      backendAPI.get("/api/auth/sessionControl").then((res) => {
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

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      backendAPI.get("/api/auth/sessionControl").then((res) => {
        if (res.code === "401") {
          navigate("/login");
        }
      });
    } else {
      navigate("/login");
    }
  }, []);

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
        <BannerProfile freelancer={coordinator} />
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
            <AccountCard user={coordinator} />
            <Verifications />
            <Accompagnement />
          </Flex>
          <Flex
            bgColor="background.gray"
            minW={{ base: "100%", lg: "66%" }}
            direction="column"
            gap="20px"
          >
            <DocumentCarousel setUpdated={setUpdated} />
            <Agrement setUpdated={setUpdated} />
            {/* <AnnonceCarousel annonce={fakeAnnonce} /> */}
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  );
}
