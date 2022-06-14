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
        <BannerProfile />
        <Flex w="80%" gap="20px" m="auto" paddingY="30px">
          <Flex
            bgColor="background.gray"
            minW="33%"
            minH="20vh"
            direction="column"
            gap="20px"
          >
            <AccountCard />
            <Verifications />
            <Expertises />
            <Tarif />
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
