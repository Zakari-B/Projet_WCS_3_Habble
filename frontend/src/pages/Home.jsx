// import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import "../components/header.css";

export default function Home() {
  return (
    <div>
      <Header isSticky />
      <p style={{ height: "120vh", backgroundColor: "red" }}>blabla</p>
    </div>
  );
}
