import { Flex, Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import BannerProfileEmployer from "../components/Profile/BannerProfileEmployer";
import AnnonceCarousel from "../components/Profile/Annonce/AnnonceCarousel";
import AccountCard from "../components/Profile/Account/AccountCard";

export default function ProfilPageEmployer({ annonce }) {
  // créer une fonction pour get user
  // utiliser useeffect pour appeler ces deux fonctions

  const fakeUser = {
    id: 1,
    firstname: "Lora",
    lastname: "Perrichon",
    email: "lora@gmail.com",
    password: "jhnlzejbfalzebf",
    pseudo: "LoraLala",
    role: "employer",
    profileIsComplete: true,
  };

  const fakeEmployer = {
    id: 1,
    displayName: "Lora Perrichon",
    dateCreated: "01-01-2022",
    description: "Maman d'un enfant souffrant de troubles autistiques...",
    available: true,
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
        <BannerProfileEmployer employer={fakeEmployer} />
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
          </Flex>
          <Flex
            bgColor="background.gray"
            minW={{ base: "100%", lg: "66%" }}
            direction="column"
            gap="20px"
          >
            <AnnonceCarousel annonce={annonce} />
          </Flex>
        </Flex>
      </Flex>
      )
      <Footer />
    </Box>
  );
}
