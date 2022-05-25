import { Box, Img } from "@chakra-ui/react";

import HomeImg from "../assets/habble-bkg-1024x684.jpg";

export default function LandingPage() {
  return (
    <Box
      w="95%"
      h="50vh"
      position="absolute"
      border="5px solid black"
      objectFit="contain"
      bgImage={HomeImg}
      bgRepeat="no-repeat"
    >
      <Img
        src={HomeImg}
        alt="autism"
        w="100%"
        objectFit="contain"
        bgPos="center"
      />
    </Box>
  );
}
