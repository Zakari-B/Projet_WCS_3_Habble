import { Flex, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer";
import EmployerForm from "../../EmployerForm";

export default function FormAnnonce() {
  const { freelancerId } = useParams();
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite isSignUp />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        paddingY="30px"
        paddingTop="100px"
      >
        <EmployerForm freelancerId={freelancerId} />
      </Flex>
      <Footer />
    </Box>
  );
}
