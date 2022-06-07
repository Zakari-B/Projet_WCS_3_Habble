import React from "react";
import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";

export default function UploadedDoc() {
  const bddDocName = "Carte d'identité.jpg";
  const bddDocImage =
    "https://app.habble.fr/wp-content/uploads/2020/02/patrice-warembourg-550.jpg";

  return (
    <Flex
      p="10px"
      flexDirection="column"
      alignItems="center"
      h="fit-content"
      w="fit-content"
    >
      <Box
        role="group"
        h="240px"
        w="293px"
        bgImage={`url(${bddDocImage})`}
        bgSize="cover"
        position="relative"
      >
        {/* Image du document uploadé */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="space-between"
          height="0"
          w="100%"
          overflow="hidden"
          transition="all 0.3s ease-in-out"
          mt="240px"
          position="absolute"
          bgColor="rgba(150, 150, 150, 0.8)"
          _groupHover={{
            height: "100%",
            mt: "0",
            p: "10px",
          }}
        >
          <Text h="10%" textAlign="center" color="white">
            {bddDocName}
          </Text>
          <Flex h="90%" alignItems="flex-end" justifyContent="space-around">
            <Link _hover={{ textDecor: "none" }} href="AFFICHER LE DOC">
              <Image
                h="50px"
                w="50px"
                src="data:image/png;base64,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"
              />
            </Link>
            <Link _hover={{ textDecor: "none" }} href="EFFACER LE DOC">
              <Image
                h="50px"
                w="50px"
                src="data:image/png;base64,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"
              />
            </Link>
          </Flex>
        </Box>
      </Box>
      <Text color="#342c50">{bddDocName}</Text>
    </Flex>
  );
}
