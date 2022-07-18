import { Flex, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import backendAPI from "../services/backendAPI";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import SearchResultCarousel from "../components/Search/SearchResultCarousel";

export default function SearchProfessionals() {
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      backendAPI.get("/api/auth/sessionControl").then((res) => {
        if (res.code === "401") {
          navigate("/login");
        }
      });
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex bgColor="background.gray" paddingTop="100px" paddingBottom="80px">
        <SearchResultCarousel />
      </Flex>

      <Footer />
    </Box>
  );
}
