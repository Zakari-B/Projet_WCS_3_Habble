import { Flex, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ProAccountForm from "../components/ProAccountForm/ProAccountForm";

export default function RegisterOnboardingPro() {
  const { freelancerId } = useParams();
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        paddingTop="100px"
      >
        <ProAccountForm freelancerId={freelancerId} onModal={false} />
      </Flex>
      <Footer />
    </Box>
  );
}
