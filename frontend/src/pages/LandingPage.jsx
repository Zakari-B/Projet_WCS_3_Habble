import { Box, Heading } from "@chakra-ui/react";

import HomeImg from "../assets/habble-bkg-1024x684.jpg";

export default function LandingPage() {
  return (
    <Box
      w="100%"
      h="82.0021299254526vh"
      position="absolute"
      bgImage={HomeImg}
      objectFit="contain"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      alignItems="center"
    >
      <Box w="25%" h="50%" bgColor="white" borderRadius="21px" color="black">
        <Heading as="h1">
          Trouvez un professionnel du handicap ou du soin, de confiance près de
          chez vous
        </Heading>
      </Box>
    </Box>
  );
}
