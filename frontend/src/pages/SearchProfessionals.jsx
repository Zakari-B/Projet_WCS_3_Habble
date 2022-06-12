import { Flex, Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import SearchResultCarousel from "../components/Search/SearchResultCarousel";

export default function SearchProfessionals() {
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky isStickyWhite />
      <Flex bgColor="background.gray" paddingTop="100px">
        <SearchResultCarousel itemsPerPage={6} />
      </Flex>

      <Footer />
    </Box>
  );
}
