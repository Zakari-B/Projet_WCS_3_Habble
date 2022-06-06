import { Flex, Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function Confidentialite() {
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} />
      <Flex bgColor="background.gray" direction="column" justify="flex-start">
        <Flex w="70%" gap="20px" m="auto" paddingY="30px">
          <Flex bgColor="red" minW="33%" minH="20vh" />
          <Flex bgColor="blue" minW="66%" />
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}