import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  Button,
  DrawerOverlay,
  Box,
  IconButton,
  Text,
  Flex,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import Logo from "../Logo";

export default function HeaderDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box display={{ base: "flex", md: "none", lg: "none" }}>
      <IconButton
        ref={btnRef}
        variant="solid_PrimaryColor"
        onClick={onOpen}
        aria-label="Open-Menu"
        icon={<HamburgerIcon />}
      />
      <Drawer
        closeOnEsc
        closeOnOverlayClick={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex align="center">
            <DrawerCloseButton />
            <DrawerHeader>
              <Logo onDark={false} />
            </DrawerHeader>
          </Flex>

          <DrawerBody w="100%">
            <Flex direction="column" align="flex-start" w="100%" gap="16px">
              <Link to="/le-projet" w="-webkit-fill-available%">
                <Text
                  color="purple.dark"
                  w="100%"
                  align="left"
                  _hover={{
                    bgImage:
                      "linear-gradient(to right, #f2366f 33%, #a423ad 33%, #a7197f 66%, #4d1582 66%)",
                    bgSize: "306% 100%",
                    bgPosition: "100% 0",
                    transition: "2s background-position",
                    animation: "moveGradient2 4s alternate infinite",
                    bgClip: "text",
                  }}
                >
                  Notre Mission
                </Text>
              </Link>

              <Flex
                justify="space-between"
                align="flex-start"
                gap="16px"
                direction="column"
                w="100%"
              >
                <Link
                  to="/professionnel-handicap"
                  minW="-webkit-fill-available%"
                >
                  <Button variant="outline_Purple_Gradient" w="300px" h="50px">
                    Je suis un professionnel
                  </Button>
                </Link>
                <Link to="/login" w="100%" minW="-webkit-fill-available%">
                  <Button variant="outline_Purple" w="300px" h="50px">
                    Connexion
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant="solid_PrimaryColor"
                    borderColor="pink.light"
                    h="50px"
                    w="300px"
                  >
                    Inscription
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
