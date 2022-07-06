import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import EmployerSelect from "../components/EmployerAnnonces/EmployerSelect";
import EmployerPrevious from "../components/EmployerAnnonces/EmployerPrevious";
import { getSubListforAnId } from "../services/ProfileProUtils";

function ProAnnonces() {
  // const { freelancerId } = useParams();
  const { employerId } = useParams();
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    getSubListforAnId("employers", employerId, "annonces").then((res) => {
      setAnnonces(res.data);
    });
  }, []);
  const currentAnnonces = annonces.filter(
    (annonce) => annonce.status !== "Terminé"
  );

  const oldAnnonces = annonces.filter(
    (annonce) => annonce.status === "Terminé"
  );
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
        <Tabs align="center" colorScheme="purple.average" variant="unstyled">
          <TabList>
            <Tab
              fontWeight="bold"
              color="grey"
              _selected={{
                borderBottom: "2px solid",
                borderColor: "purple.average",
                color: "pink.light",
              }}
            >
              Annonces en cours
            </Tab>
            <Tab
              fontWeight="bold"
              color="grey"
              _selected={{
                borderBottom: "2px solid",
                borderColor: "purple.average",
                color: "pink.light",
              }}
            >
              Annonces précédentes
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <EmployerSelect annonces={currentAnnonces} />
            </TabPanel>
            <TabPanel>
              <EmployerPrevious annonces={oldAnnonces} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Footer />
    </Box>
  );
}

export default ProAnnonces;
