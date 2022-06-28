import { Box } from "@chakra-ui/react";

import Header from "../components/Header/Header";

export default function AnnoncesDashboard() {
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite isSignUp />
    </Box>
  );
}
