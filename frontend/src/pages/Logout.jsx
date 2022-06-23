import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Flex } from "@chakra-ui/react";
import backendAPI from "../services/backendAPI";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.removeItem("isUserLoggedIn");
    backendAPI.get("/api/auth/logout").then(() => {
      navigate("/");
    });
  }, []);
  return (
    <div>
      <Flex justify="center" alignItems="center" h="100vh">
        <Spinner color="pink.average" size="xl" />
      </Flex>
    </div>
  );
}

export default Logout;
