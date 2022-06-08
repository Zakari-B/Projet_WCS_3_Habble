import { Flex, Box, Button, useDisclosure } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import FormationCarousel from "../components/Profile/Formation/FormationCarousel";
import DocumentCarousel from "../components/Profile/DocumentUpload/DocumentCarousel";
import BannerProfile from "../components/Profile/BannerProfile";
import EditPassWordModal from "../components/EditPasswordModal";

export default function ProfilPageProfessional() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Button onClick={onOpen} variant="solid_PrimaryColor">
              Change Password
            </Button>
            <EditPassWordModal
              onOpen={onOpen}
              isOpen={isOpen}
              onClose={onClose}
            />
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
