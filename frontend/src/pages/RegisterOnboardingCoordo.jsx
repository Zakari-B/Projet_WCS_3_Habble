import { Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ProAccountFormCoordo from "../components/ProfilCoordinator/InfoProfilCoordinator/ProAccountFormCoordinator";

export default function RegisterOnboardingCoordo() {
  const { coordinatorId } = useParams();
  const [updated, setUpdated] = useState(false);

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite updated={updated} />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        paddingTop="100px"
      >
        <ProAccountFormCoordo
          coordinator={coordinatorId}
          onModal={false}
          updated={updated}
          setUpdated={setUpdated}
        />
      </Flex>
      <Footer />
    </Box>
  );
}
