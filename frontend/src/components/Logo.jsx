import { Img } from "@chakra-ui/react";
import PropTypes from "prop-types";
import LogoImgDegrade from "../assets/logo-habble-degrade.svg";
import LogoImgWhite from "../assets/logo-habble-white.svg";

export default function Logo({ onDark = false }) {
  return (
    <a href="/">
      <Img
        src={onDark ? LogoImgDegrade : LogoImgWhite}
        minW="130px"
        h="auto"
        marginRight="50px"
      />
    </a>
  );
}

Logo.propTypes = {
  onDark: PropTypes.bool.isRequired,
};
