import { Flex, Box } from "@chakra-ui/react";
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

export default function ProfilPageProfessional() {
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

  const fakeFreelancer = {
    id: 1,
    displayName: "LoraLala",
    activityDescription: "Assistante maternelle",
    userId: 1,
    zipCode: 75000,
    phone: "0612345678",
    experienceYear: 2,
    price: "40.00",
    description: "Je suis une super professionnelle",
    acceptEmails: true,
    siret: "12345567",
    available: false,
    dateCreated: "2022-02-01",
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
        <BannerProfile freelancer={fakeFreelancer} />
        <Flex w="80%" gap="20px" m="auto" paddingY="30px">
          <Flex
            bgColor="background.gray"
            minW="33%"
            minH="20vh"
            direction="column"
            gap="20px"
          >
            <AccountCard user={fakeUser} />
            <Verifications />
            <Expertises />
            <Tarif freelancer={fakeFreelancer} />
          </Flex>
          <Flex
            bgColor="background.gray"
            minW="66%"
            direction="column"
            gap="20px"
          >
            <DocumentCarousel />
            <FormationCarousel />
            <DiplomeCarousel />
            <ExperienceCarousel />
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
