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
    <Box display={{ sm: "flex", lg: "none" }}>
      <IconButton
        ref={btnRef}
        variant="solid_PrimaryColor"
        onClick={onOpen}
        aria-label="Open-Menu"
        icon={<HamburgerIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex align="center">
            <DrawerCloseButton />
            <DrawerHeader>
              <Logo onDark={false} />
            </DrawerHeader>
          </Flex>

          <DrawerBody>
            <Flex direction="column" align="center" w="100%">
              <Link to="/le-projet">
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
                align="center"
                gap="16px"
                direction="column"
                w="100%"
              >
                <Link to="/professionnel-handicap" w="100%">
                  <Button variant="outline_Purple_Gradient" w="100%">
                    Je suis un professionnel
                  </Button>
                </Link>
                <Link to="/login" w="100%">
                  <Button variant="outline_Purple" w="100%">
                    Connexion
                  </Button>
                </Link>
                <Link to="/register" w="100%">
                  <Button
                    variant="solid_PrimaryColor"
                    borderColor="pink.light"
                    w="100%"
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
