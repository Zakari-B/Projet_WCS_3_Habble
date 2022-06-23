import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { getList } from "../services/ProfileProUtils";
import Footer from "../components/Footer";
import SearchResultCarousel from "../components/Search/SearchResultCarousel";

export default function SearchProfessionals() {
  const [freelancers, setFreelancers] = useState([]);
  useEffect(() => {
    getList("freelancers").then((res) => setFreelancers(res.data));
  }, []);

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite isSignUp />
      <Flex bgColor="background.gray" paddingTop="100px">
        <SearchResultCarousel freelancers={freelancers} />
      </Flex>

      <Footer />
    </Box>
  );
}
