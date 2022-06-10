import { useState } from "react";
import { Flex, Divider } from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";

export default function SearchResultCarousel() {
  const [fakefreelancers] = useState([
    {
      id: 1,
      firstname: "Nadège",
      lastname: "Roar",
      displayName: "Nadège Roar",
      activityPro: "Travailleuse sociale libérale",
      cityPro: "35520",
      phonePro: "0606060606",
      experienceYearPro: 10,
      pricePro: 40.0,
      descriptionPro:
        "Bonjour, Je suis travailleuse sociale depuis 2010, qualifiée par mon diplôme d’état de Conseillère en Économie Sociale Familiale. J’ai une expérience professionnelle autour de la lutte contre l’exclusion et la précarité. Je poursuis ma carrière avec une approche du travail social innovante et complémentaire : le travail social libéral. Mon objectif ? répondre à des besoins, de manière souple et réactive pour favoriser l’inclusion sociale. Je propose une intervention sociale sur-mesure pour les particuliers et les professionnels. Visite à domicile, action collective, permanence, accompagnement physique… tous les modes d’intervention sont possibles. Ma volonté : m’adapter à vos besoins ! Vous pouvez consulter mon site web : https://www.nadege-ruelland.fr/ ou mes profils sur les réseaux sociaux : LinkedIn et Facebook. Vous pouvez également me retrouver sur l’annuaire national des travailleurs sociaux libéraux d’Humacitia.",
      tags: [
        "Conseils éducatifs",
        "Aide administrative",
        "démarches",
        "dossiersSanté",
        "Bien être",
        "Aide technique",
      ],
      expertise: ["Démence"],
      siretPro: "",
      picturePro: "https://i.pravatar.cc/300",
    },
    {
      id: 1,
      firstname: "Rolland",
      lastname: "Barthes",
      displayName: "Rolland Barthes",
      activityPro: "Travailleuse sociale libérale",
      cityPro: "35520",
      phonePro: "0606060606",
      experienceYearPro: 1,
      pricePro: 20.0,
      descriptionPro:
        "Bonjour, Je suis travailleuse sociale depuis 2010, qualifiée par mon diplôme d’état de Conseillère en Économie Sociale Familiale. J’ai une expérience professionnelle autour de la lutte contre l’exclusion et la précarité. Je poursuis ma carrière avec une approche du travail social innovante et complémentaire : le travail social libéral. Mon objectif ? répondre à des besoins, de manière souple et réactive pour favoriser l’inclusion sociale. Je propose une intervention sociale sur-mesure pour les particuliers et les professionnels. Visite à domicile, action collective, permanence, accompagnement physique… tous les modes d’intervention sont possibles. Ma volonté : m’adapter à vos besoins ! Vous pouvez consulter mon site web : https://www.nadege-ruelland.fr/ ou mes profils sur les réseaux sociaux : LinkedIn et Facebook. Vous pouvez également me retrouver sur l’annuaire national des travailleurs sociaux libéraux d’Humacitia.",
      tags: ["Conseils éducatifs", "Aide administrative"],
      expertise: ["Alzeihmer"],
      siretPro: "",
      picturePro: "",
    },
  ]);
  return (
    <Flex bgColor="background.gray" w="100%">
      <Flex
        direction="column"
        bgColor="white"
        boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
        border="1px solid #ededed"
        p="50px 80px"
        m="auto"
        borderRadius="21px"
        width="80%"
        maxW="1200px"
        gap="40px"
      >
        {fakefreelancers.map((freelancer) => (
          <>
            <ProfileCard freelancer={freelancer} key={freelancer.id} />
            <Divider />
          </>
        ))}
      </Flex>
    </Flex>
  );
}
