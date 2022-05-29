// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

// import { useEffect, useState } from "react";
// import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
// import HeaderDrawer from "./Header/HeaderDrawer";
// import Logo from "./Logo";

// function NavBar(props) {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     // eslint-disable-next-line react/jsx-props-no-spreading
//     <NavBarContainer {...props}>
//       <Logo onDark={false} />
//       <HeaderDrawer />
//       <MenuLinks isOpen={isOpen} />
//     </NavBarContainer>
//   );
// }

// function CloseIcon() {
//   return (
//     <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
//       <title>Close</title>
//       <g>
//         <path
//           id="gradient"
//           style={{ fill: "url(#linear-gradient)" }}
//           d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
//         />
//         <linearGradient
//           id="linear-gradient"
//           gradientUnits="userSpaceOnUse"
//           x1="-8.7563"
//           y1="46.8716"
//           x2="360.5718"
//           y2="46.8716"
//         >
//           <stop offset="0" style={{ stopColor: "#683689" }} />
//           <stop offset="2.013695e-02" style={{ stopColor: "#6D3689" }} />
//           <stop offset="0.149" style={{ stopColor: "#863688" }} />
//           <stop offset="0.2922" style={{ stopColor: "#9A3588" }} />
//           <stop offset="0.4553" style={{ stopColor: "#A83587" }} />
//           <stop offset="0.6553" style={{ stopColor: "#B13587" }} />
//           <stop offset="1" style={{ stopColor: "#B33587" }} />
//         </linearGradient>
//       </g>
//     </svg>
//   );
// }

// function MenuIcon() {
//   return (
//     <svg
//       width="24px"
//       viewBox="0 0 20 20"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//     >
//       <title>Menu</title>
//       <g>
//         <rect
//           xmlns="http://www.w3.org/2000/svg"
//           width="800"
//           height="200"
//           fill="url(#gradient-fill)"
//         />
//         <path
//           d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
//           id="gradient"
//           style={{ fill: "url(#linear-gradient)" }}
//         />
//         <linearGradient
//           xmlns="http://www.w3.org/2000/svg"
//           id="linear-gradient"
//           x1="0"
//           y1="0"
//           x2="800"
//           y2="0"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop offset="0" style={{ stopColor: "#4d1582" }} />
//           <stop offset="0.14285714285714285" style={{ stopColor: "#720f81" }} />
//           <stop offset="0.2857142857142857" style={{ stopColor: "#900c7e" }} />
//           <stop offset="0.42857142857142855" style={{ stopColor: "#aa1479" }} />
//           <stop offset="0.5714285714285714" style={{ stopColor: "#c12373" }} />
//           <stop offset="0.7142857142857142" style={{ stopColor: "#d5366d" }} />
//           <stop offset="0.8571428571428571" style={{ stopColor: "#e54a67" }} />
//           <stop offset="1" style={{ stopColor: "#f25f61" }} />
//         </linearGradient>
//       </g>
//     </svg>
//   );
// }

// function MenuToggle({ toggle, isOpen }) {
//   return (
//     <Box display={{ base: "block", md: "none" }} onClick={toggle}>
//       {isOpen ? <CloseIcon /> : <MenuIcon />}
//     </Box>
//   );
// }

// function MenuItem({ children, isLast, to = "/", ...rest }) {
//   return (
//     <Link to={to} color="purple.average">
//       <Text
//         {...rest}
//         color="purple.dark"
//         _hover={{
//           bgImage:
//             "linear-gradient(to right, #f2366f 33%, #a423ad 33%, #a7197f 66%, #4d1582 66%)",
//           bgSize: "306% 100%",
//           bgPosition: "100% 0",
//           transition: "2s background-position",
//           animation: "moveGradient2 4s alternate infinite",
//           bgClip: "text",
//         }}
//       >
//         {children}
//       </Text>
//     </Link>
//   );
// }

// function MenuLinks({ isOpen, isSticky = false }) {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const handleScroll = () => {
//     setScrollPosition(window.pageYOffset);
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Box
//       display={{ base: isOpen ? "block" : "none", md: "block" }}
//       flexBasis={{ base: "100%", md: "auto" }}
//     >
//       <Stack
//         spacing={{ base: "4", lg: "8" }}
//         align="center"
//         justify={["center", "center", "space-between", "space-between"]}
//         direction={["column", "row", "row", "row"]}
//       >
//         <MenuItem to="/le-projet"> Notre Mission</MenuItem>
//         <Flex gap="10px">
//           <MenuItem to="/professionnel-handicap">
//             <Button
//               variant={
//                 isSticky && scrollPosition <= 50
//                   ? "outline_White_Gradient"
//                   : "outline_Purple_Gradient"
//               }
//             >
//               Je suis un professionnel
//             </Button>
//           </MenuItem>
//           <MenuItem to="/login">
//             <Button
//               variant={
//                 isSticky && scrollPosition <= 50
//                   ? "outline_White_Purple"
//                   : "outline_Purple"
//               }
//             >
//               Connexion
//             </Button>
//           </MenuItem>
//           <MenuItem to="/register" isLast>
//             <Button
//               variant="solid_PrimaryColor"
//               borderColor={
//                 isSticky && scrollPosition <= 50 ? "white" : "pink.light"
//               }
//             >
//               Inscription
//             </Button>
//           </MenuItem>
//         </Flex>
//       </Stack>
//     </Box>
//   );
// }

// function NavBarContainer({ children, isSticky = false, ...props }) {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const handleScroll = () => {
//     setScrollPosition(window.pageYOffset);
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       wrap="wrap"
//       w="100%"
//       mb={8}
//       p={8}
//       bg={["primary.500", "primary.500", "transparent", "transparent"]}
//       color={["white", "white", "primary.700", "primary.700"]}
//       {...props}
//       className={isSticky && scrollPosition <= 50 ? "not-active" : "active"}
//       position={isSticky ? "fixed" : "relative"}
//       paddingX="5%"
//       transition="all 0.2s ease-in-out"
//       paddingY="30px"
//       bgColor={isSticky === false && "white"}
//     >
//       {children}
//     </Flex>
//   );
// }

// export default NavBar;
