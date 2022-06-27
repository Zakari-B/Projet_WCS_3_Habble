import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import FormationCarousel from "../components/Profile/Formation/FormationCarousel";
import DocumentCarousel from "../components/Profile/DocumentUpload/DocumentCarousel";
import BannerProfile from "../components/Profile/BannerProfile";
import AccountCard from "../components/Profile/Account/AccountCard";
import DiplomeCarousel from "../components/Profile/Diplomes/DiplomeCarousel";
import ExperienceCarousel from "../components/Profile/Experience/ExperienceCarousel";
import Expertises from "../components/Profile/Expertises/Expertises";
import Verifications from "../components/Profile/Verifications";
import Tarif from "../components/Profile/Tarif";
import MissionCarousel from "../components/Profile/Mission/MissionCarousel";
import { getListforAnId } from "../services/ProfileProUtils";
import backendAPI from "../services/backendAPI";

export default function ProfilPageProfessional() {
  const navigate = useNavigate();

  const { freelancerId } = useParams();
  const [freelancer, setFreelancer] = useState({});
  const [updated, setUpdated] = useState(false);
  const [diplomes, setDiplomes] = useState([]);
  const [formations, setFormations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const getfreelancer = () => {
    getListforAnId("freelancers", freelancerId)
      .then((response) => {
        setFreelancer(response.data);
        setDiplomes(response.data.diplomes);
        setFormations(response.data.formations);
        setExperiences(response.data.experience_pro);
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
    getfreelancer();
  }, [updated]);

  const fakeUser = {
    id: 1,
    firstname: "Lora",
    lastname: "Perrichon",
    email: "lora@gmail.com",
    password: "jhnlzejbfalzebf",
    pseudo: "LoraLala",
    role: "freelancer",
    profileIsComplete: true,
  };

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite isSignUp />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        paddingY="30px"
        paddingTop="150px"
      >
        <BannerProfile freelancer={freelancer} />
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
            <AccountCard user={fakeUser} />
            <Verifications />
            <Expertises freelancer={freelancer} />
            <Tarif freelancer={freelancer} />
          </Flex>
          <Flex
            bgColor="background.gray"
            minW={{ base: "100%", lg: "66%" }}
            direction="column"
            gap="20px"
          >
            <DocumentCarousel />
            <FormationCarousel
              formations={formations}
              updated={updated}
              setUpdated={setUpdated}
            />
            <DiplomeCarousel
              diplomes={diplomes}
              updated={updated}
              setUpdated={setUpdated}
            />
            <ExperienceCarousel
              experiences={experiences}
              updated={updated}
              setUpdated={setUpdated}
            />
            <MissionCarousel />
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  );
}
