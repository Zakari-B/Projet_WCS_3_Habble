import { Flex, Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ProAccountForm from "../components/ProAccountForm";

export default function RegisterOnboardingPro() {
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} />
      <Flex bgColor="background.gray" direction="column" justify="flex-start">
        <ProAccountForm />
      </Flex>
      <Footer />
    </Box>
  );
}
