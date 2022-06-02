import { Flex, Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ProfessionalDiplomes from "../components/ProfessionalDiplomes";

export default function Confidentialite() {
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} />
      <Flex bgColor="background.gray" direction="column" justify="flex-start" />
      <ProfessionalDiplomes />
      <Footer />
    </Box>
  );
}
