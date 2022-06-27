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
import ProSelect from "../components/ProAnnonces/ProSelect";

function ProAnnonces() {
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
              <ProSelect />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Footer />
    </Box>
  );
}

export default ProAnnonces;
