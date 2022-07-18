import { Flex, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ProAccountFormCoordo from "../components/ProfilCoordinator/InfoProfilCoordinator/ProAccountFormCoordinator";

export default function RegisterOnboardingCoordo() {
  const { coordinatorId } = useParams();
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        paddingTop="100px"
      >
        <ProAccountFormCoordo coordinator={coordinatorId} onModal={false} />
      </Flex>
      <Footer />
    </Box>
  );
}
