import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backendAPI from "../services/backendAPI";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.removeItem("isUserLoggedIn");
    backendAPI.get("/api/auth/logout").then(() => {
      navigate("/");
    });
  }, []);
  return <div />;
}

export default Logout;
