import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import BannerProfileEmployer from "../components/ProfilEmployer/InfoProfil/BannerProfileEmployer";
import AnnonceCarousel from "../components/ProfilEmployer/Annonce/AnnonceCarousel";
import AccountCard from "../components/ProfileFreelancer/Account/AccountCard";
import backendAPI from "../services/backendAPI";

export default function ProfilPageEmployer() {
  const navigate = useNavigate();
  const { employerId } = useParams();
  const [user, setUser] = useState({});
  const [employer, setEmployer] = useState({});
  const [updated, setUpdated] = useState(false);

  const getuser = () => {
    backendAPI
      .get(`/api/employers/${employerId}/user`)
      .then((response) => {
        setUser(response.data);
        setEmployer(response.data.employer);
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

  useEffect(() => getuser(), [updated]);

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
        <BannerProfileEmployer
          employer={employer}
          setEmployer={setEmployer}
          updated={updated}
          setUpdated={setUpdated}
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
            <AccountCard user={user} />
          </Flex>
          <Flex
            bgColor="background.gray"
            minW={{ base: "100%", lg: "66%" }}
            direction="column"
            gap="20px"
          >
            <AnnonceCarousel updated={updated} setUpdated={setUpdated} />
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
