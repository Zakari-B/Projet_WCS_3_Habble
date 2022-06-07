import React from "react";
import { Image, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import carousel1 from "../../assets/carousel1test.png";
import carousel2 from "../../assets/carousel2test.png";
import carousel3 from "../../assets/carousel3test.png";

function CarouselWorking() {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      dynamicHeight={false}
    >
      <Box>
        <Image src={carousel1} alt="test" />
      </Box>
      <Box>
        <Image src={carousel2} alt="test" />
      </Box>
      <Box>
        <Image src={carousel3} alt="test" />
      </Box>
    </Carousel>
  );
}

export default CarouselWorking;
