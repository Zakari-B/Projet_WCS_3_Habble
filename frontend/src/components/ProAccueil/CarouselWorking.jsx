import React from "react";
import { Image, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      width="50%"
    >
      <Box>
        <Image src="../src/assets/carousel1.png" alt="test" />
      </Box>
      <Box>
        <Image src="../src/assets/carousel2.png" alt="test" />
      </Box>
      <Box>
        <Image src="../src/assets/carousel3.png" alt="test" />
      </Box>
    </Carousel>
  );
}

export default CarouselWorking;
