import React from "react";
import { Text, Image, Box, Divider } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import messagerie from "../../assets/messagerie.svg";
import annuaire from "../../assets/annuaire.svg";

function CarouselImages() {
  return (
    <Carousel
      centerMode
      centerSlidePercentage="34"
      infiniteLoop
      autoPlay={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      dynamicHeight={false}
    >
      <Box marginX="3rem" role="group">
        <Image boxSize="2.4rem" src={messagerie} alt="test" />
        <Text
          variant="corpsBold"
          fontSize="0.8rem"
          marginTop="1rem"
          marginBottom="1rem"
        >
          Messagerie
        </Text>
        <Text variant="corps" fontSize="0.8rem" marginBottom="2rem">
          Echangez par messagerie (chat en ligne) pour discuter directement des
          détails avec les personnes.
        </Text>
        <Divider
          opacity="0%"
          height="3px"
          _groupHover={{
            hidden: "false",
            bgGradient:
              "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
            opacity: "100%",
            height: "3px",
            width: "100%",
            animationScale: "1s scale(1)",
            animation: "ease-in-out 4s infinite",
          }}
          _active={{
            hidden: "false",
            bgGradient:
              "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
            opacity: "100%",
            height: "3px",
            width: "100%",
            animationScale: "1s scale(1)",
            animation: "ease-in-out 4s infinite",
          }}
        />
      </Box>
      <Box marginX="3rem" role="group">
        <Image boxSize="2.4rem" src={annuaire} alt="test" />
        <Text
          variant="corpsBold"
          fontSize="0.8rem"
          marginTop="1rem"
          marginBottom="1rem"
        >
          Garanties
        </Text>
        <Text variant="corps" fontSize="0.8rem" marginBottom="2rem">
          Notre charte qualité vise au confort, à la sérénité et à la sécurité
          de tous. Nous sommes un tiers de confiance qui facilite la mise en
          relation.
        </Text>
        <Divider
          opacity="0%"
          height="3px"
          _groupHover={{
            hidden: "false",
            bgGradient:
              "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
            opacity: "100%",
            height: "3px",
            width: "100%",
            animationScale: "1s scale(1)",
            animation: "ease-in-out 4s infinite",
          }}
          _active={{
            hidden: "false",
            bgGradient:
              "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
            opacity: "100%",
            height: "3px",
            width: "100%",
            animationScale: "1s scale(1)",
            animation: "ease-in-out 4s infinite",
          }}
        />
      </Box>
      <Box marginX="3rem" role="group">
        <Image boxSize="2.4rem" src="../src/assets/messagerie.svg" alt="test" />
        <Text
          variant="corpsBold"
          fontSize="0.8rem"
          marginTop="1rem"
          marginBottom="1rem"
        >
          Infos pratiques
        </Text>
        <Text variant="corps" fontSize="0.8rem" marginBottom="2rem">
          Nous mettons à disposition des contenus pour faciliter votre exercice
          professionnel. Vous pouvez partager vos outils ou échanger sur votre
          pratique.
        </Text>
        <Divider
          opacity="0%"
          height="3px"
          _groupHover={{
            hidden: "false",
            bgGradient:
              "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
            opacity: "100%",
            height: "3px",
            width: "100%",
            animationScale: "1s scale(1)",
            animation: "ease-in-out 4s infinite",
          }}
          _active={{
            hidden: "false",
            bgGradient:
              "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
            opacity: "100%",
            height: "3px",
            width: "100%",
            animationScale: "1s scale(1)",
            animation: "ease-in-out 4s infinite",
          }}
        />
      </Box>
      <Box marginX="3rem" role="group">
        <Image boxSize="2.4rem" src={annuaire} alt="test" />
        <Text
          variant="corpsBold"
          fontSize="0.8rem"
          marginTop="1rem"
          marginBottom="1rem"
        >
          Tableau de bord
        </Text>
        <Text variant="corps" fontSize="0.8rem" marginBottom="2rem">
          Suivez vos prestations simplement: demandes en cours, agenda, infos
          clés (projet de la personne, fiche de liaison d’urgence)
        </Text>
        <Divider
          opacity="0%"
          height="3px"
          _groupHover={{
            hidden: "false",
            bgGradient:
              "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
            opacity: "100%",
            height: "3px",
            width: "100%",
            animationScale: "1s scale(1)",
            animation: "ease-in-out 4s infinite",
          }}
          _active={{
            hidden: "false",
            bgGradient:
              "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
            opacity: "100%",
            height: "3px",
            width: "100%",
            animationScale: "1s scale(1)",
            animation: "ease-in-out 4s infinite",
          }}
        />
      </Box>
      <Box marginX="3rem" role="group">
        <Image boxSize="2.4rem" src={annuaire} alt="test" />
        <Text
          variant="corpsBold"
          fontSize="0.8rem"
          marginTop="1rem"
          marginBottom="1rem"
        >
          Annuaire en ligne
        </Text>
        <Text variant="corps" fontSize="0.8rem" marginBottom="2rem">
          Présentez vos prestations et compétences. Indiquez vos disponibilités
          puis recevez des demandes de personnes concernées
        </Text>
        <Divider
          opacity="0%"
          height="3px"
          _groupHover={{
            hidden: "false",
            bgGradient:
              "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
            opacity: "100%",
            height: "3px",
            width: "100%",
            animationScale: "1s scale(1)",
            animation: "ease-in-out 4s infinite",
          }}
          _active={{
            hidden: "false",
            bgGradient:
              "linear-gradient(to right, #6541c1 0%, #d43396 98%, #d43396 100%)",
            opacity: "100%",
            height: "3px",
            width: "100%",
            animationScale: "1s scale(1)",
            animation: "ease-in-out 4s infinite",
          }}
        />
      </Box>
    </Carousel>
  );
}

export default CarouselImages;
