import { Flex, Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import FormationCarousel from "../components/Profile/Formation/FormationCarousel";
import DocumentCarousel from "../components/Profile/DocumentUpload/DocumentCarousel";
import BannerProfile from "../components/Profile/BannerProfile";
import DiplomeCarousel from "../components/Profile/Diplomes/DiplomeCarousel";
import ExperienceCarousel from "../components/Profile/Experience/ExperienceCarousel";

export default function ProfilPageProfessional() {
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        paddingY="30px"
      >
        <BannerProfile />
        <Flex w="80%" gap="20px" m="auto" paddingY="30px">
          <Flex bgColor="red" minW="33%" minH="20vh" />
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
