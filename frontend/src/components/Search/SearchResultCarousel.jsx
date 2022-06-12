import { useState, useEffect } from "react";
import {
  Flex,
  Divider,
  Input,
  InputGroup,
  IconButton,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import ReactPaginate from "react-paginate";
import ProfileCard from "./ProfileCard";
import "../../styles/SearchResultCarousel.css";

export default function SearchResultCarousel({ itemsPerPage }) {
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
      id: 2,
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
    {
      id: 3,
      firstname: "Will",
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
      id: 4,
      firstname: "Leila",
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
    {
      id: 5,
      firstname: "Fanny",
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
      id: 6,
      firstname: "Jean",
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
    {
      id: 7,
      firstname: "Pierre",
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
      id: 8,
      firstname: "Paul",
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
    {
      id: 9,
      firstname: "Jacques",
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
      id: 10,
      firstname: "Simon",
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
    {
      id: 11,
      firstname: "Abdel",
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
      id: 12,
      firstname: "Lena",
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
  ]);

  const [search, setSearch] = useState("");

  const [currentItems, setCurrentItems] = useState(fakefreelancers);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(fakefreelancers.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(fakefreelancers.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % fakefreelancers.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  const handleSearch = (event) => setSearch(event.target.value);

  return (
    <Flex bgColor="background.gray" w="100%" direction="column">
      <Flex
        bgColor="#e1dde4"
        w="100%"
        p="30px"
        display="flex"
        alignItems="center"
        position="fixed"
        zIndex="998"
      >
        <InputGroup display="flex" alignItems="center">
          <InputLeftElement
            pointerEvents="none"
            display="flex"
            alignItems="center"
            h="100%"
          >
            <IconButton
              variant="unstyled"
              color="gray.500"
              aria-label="Search database"
              icon={<Search2Icon />}
            />
          </InputLeftElement>
          <Input
            type="search"
            id="search"
            variant="outline"
            bgColor="white"
            h="50px"
            name="search"
            placeholder="Recherchez une compétence"
            value={search}
            onChange={handleSearch}
          />
        </InputGroup>
      </Flex>
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
        marginTop="150px"
      >
        {currentItems
          .filter((freelancer) => freelancer.activityPro)
          .map((freelancer) => (
            <>
              <ProfileCard freelancer={freelancer} key={freelancer.id} />
              <Divider />
            </>
          ))}
      </Flex>
      <ReactPaginate
        previousLabel="< Précédent"
        nextLabel="Suivant >"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName={itemOffset > 0 ? "previousClassName" : "alldisabled"}
        previousLinkClassName="page-link"
        nextClassName={
          currentPage === Math.ceil(fakefreelancers.length / itemsPerPage)
            ? "alldisabled"
            : "nextClassName"
        }
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="break"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="containerClassName"
        activeClassName="activePage"
      />
    </Flex>
  );
}
