import {
  Flex,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Button,
  useDisclosure,
  Link,
  Box,
  Grid,
  GridItem,
  ScaleFade,
} from "@chakra-ui/react";

import { useState } from "react";

import { CloseIcon } from "@chakra-ui/icons";

import admin from "../assets/admin.svg";
import care from "../assets/care.svg";
import education from "../assets/education.svg";
import hBuilding from "../assets/h-building.svg";
import hFamily from "../assets/h-family.svg";
import hServiceWorkers from "../assets/h-service-workers.svg";
import house from "../assets/house.svg";
import listingProsIphone from "../assets/listing-pros-iphone-600x575-2.png";
import reseauEntreprendre from "../assets/logo_horizontal_re_couleur_nord.png";
import evident from "../assets/logo-evident.png";
import psychologyHead from "../assets/psychology-head.svg";
import wheelchairTransport from "../assets/wheelchair_transport.svg";

function Mission() {
  const family = useDisclosure();
  const service = useDisclosure();
  const building = useDisclosure();
  const coFond1 = useDisclosure();
  const coFond2 = useDisclosure();

  const pro = (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      pb="2rem"
      textAlign="start"
      w="90%"
      m="auto"
    >
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Trouver un professionnel de santé ou du soutien spécialisé dans le
        handicap
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Vous avez besoin de l'aide d'un professionnel du handicap rapidement ?
        De materiel ou un logiciel ? Vous cherchez une structure dédiée ?
        Trouvez toutes les ressources dont vous avez besoin sont sur Habble :
      </Text>
      <UnorderedList ml="2rem">
        <ListItem mb="1rem" fontSize="sm" color="white">
          Professionnels sélectionnés qualifiés et certifiés (éducateurs
          spécialisés, enseignants spécialisés, auxiliaire de vie, assistantes
          sociale, paramédicaux, médecins libéraux et spécialisés, transport
          spécialisé, hébergement,…);
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Services médico-sociaux et à la personne : établissements, services,
          dispositifs;
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Fabricants et distributeurs de matériel spécialisé, points de revente,
          éditeurs de logiciels.
        </ListItem>
      </UnorderedList>
      <Text mb="1rem" fontSize="sm" color="white">
        Echangez par messagerie ou chat en ligne sur ce dont vous avez besoin et
        à quel moment et payez la prestation directement sur la plateforme en
        toute sécurité. Ayez l'esprit tranquille, nous vérifions les
        qualifications des intervenants !
      </Text>
    </Flex>
  );
  const demarche = (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      pb="2rem"
      textAlign="start"
      w="90%"
      m="auto"
    >
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Démarches en ligne : faites vous accompagner dans le montage de votre
        dossier administratif
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Consultez en ligne une assistante sociale ou trouver les aides
        auxquelles vous avez droit en toute sérénité :
      </Text>
      <UnorderedList ml="2rem">
        <ListItem mb="1rem" fontSize="sm" color="white">
          Définition du plan d’aides;
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Aide aux démarches administrives.
        </ListItem>
      </UnorderedList>
    </Flex>
  );
  const guarentee = (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      pb="2rem"
      textAlign="start"
      w="90%"
      m="auto"
    >
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Garanties et paiement sécurisé avec un arbitrage pour les litiges
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Nous assurons une sélection drastique des professionnels pour garantir
        leurs compétences et leur fiabilité afin d'assurer une haute qualité de
        service.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Lorsqu’un utilisateur demande notre assistance, le paiement au
        professionnel est momentanément suspendu jusqu’à résolution du problème.
      </Text>
    </Flex>
  );

  const info = (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      pb="2rem"
      textAlign="start"
      w="90%"
      m="auto"
    >
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Informations, conseils
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Notre blog vous permet d'accéder aux dernières actualités du secteur:
        les droits applicables, des dossiers thématiques, des informations sur
        les modalités d'accompagnement, ... Enfin, un espace vous permet
        d'échanger simplement sur vos besoins et de recevoir des conseils
        d'autres personnes sensibilisées à votre problématique.
      </Text>
      <UnorderedList ml="2rem">
        <ListItem mb="1rem" fontSize="sm" color="white">
          Information de qualité actualisée;
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Echanges entre pairs.
        </ListItem>
      </UnorderedList>
    </Flex>
  );
  const coordination = (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      pb="2rem"
      textAlign="start"
      w="90%"
      m="auto"
    >
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Coordination de services
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Vous recourez à plusieurs intervenants? Simplifiez vous la vie en
        suivant leur programmation sur un même agenda.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Nous mettons à votre disposition un tableau de bord pour suivre votre
        projet personnalisé.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Vous choississez les informations que vous souhaitez partager avec les
        professionnels et vous conservez un accès permanent à l'ensemble de vos
        données.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Notre vise donc à faciliter le maintien à domicile de la personne, à
        garantir une qualité d’accompagnement ainsi qu’à alléger voire supprimer
        la charge des proches aidants (parents, amis, ...).
      </Text>
    </Flex>
  );
  const goal = (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      pb="2rem"
      textAlign="start"
      w="90%"
      m="auto"
    >
      <Text
        fontWeight="bold"
        textAlign="left"
        fontSize="xl"
        mb="1rem"
        color="white"
      >
        Objectifs et gouvernance
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Habble est un acteur de l'économie sociale et solidaire. Nous sommes une
        société d'utilité sociale régit par des valeurs et une charte éthique.
        Notre but est de changer le regard sur le handicap.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Notre fonctionnement est simple: toutes les personnes concernées par
        notre service méritent notre écoute et sont invitées à nous faire
        connaître leurs souhaits d'évolution. Nous avons la conviction que
        l'intelligence collective est bien plus efficace qu'une organisation
        pyramidale. Notre structure est autonome et son coût de fonctionnement
        est garantie par les frais d'assurance qualité et nos prestations
        d'éditeurs.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Notre politique est de vous offrir la meilleure expérience possible au
        juste coût. C'est pourquoi nos frais de gestion sont limités au stricte
        minimum.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Nous sommes également engagés pour la planète, notre société veille à
        préserver l'environnement en appliquant notamment une politique 0
        papier.
      </Text>
      <Text mb="1rem" fontSize="sm" color="white">
        Le choix d'une structure solidaire nous a donc paru évident ; ce statut
        reflêtant les valeurs que nous souhaitons porter :
      </Text>
      <UnorderedList ml="2rem">
        <ListItem mb="1rem" fontSize="sm" color="white">
          Démocratie, égalité des membres, laïcité
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Solidarité, Economie sociale et solidaire
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Responsabilité sociétale des entreprises, intelligence collective
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Utilité et impact social
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Liberté d’actions
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Amélioration des conditions d’existence
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Épanouissement de la personne humaine
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Lutte contre les injustices
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Responsabilité, formation des individus
        </ListItem>
        <ListItem mb="1rem" fontSize="sm" color="white">
          Innovation économique et sociale
        </ListItem>
      </UnorderedList>
    </Flex>
  );

  const [text, setText] = useState(pro);

  return (
    <div>
      <Flex justifyContent="space-between" pl="1rem" pb="2rem">
        <Flex flexDirection="column" justifyContent="space-around" p="1rem">
          <Heading
            bgGradient="linear(45deg, #4d1582 0%, #a7197f 100%)"
            bgClip="text"
            textAlign="left"
            lineHeight="1.5"
          >
            Habble : votre pouvoir d'agir
          </Heading>
          <Text w="90%" fontSize="2xl" textAlign="left">
            La première plateforme de services gratuite de professionnels du
            handicap et du soin.
          </Text>
          <Flex flexDirection="column" justifyContent="space-around" h="50%">
            <Flex justifyContent="space-around">
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image src={house} alt="house" width="60px" />
                <Text>Soutien a domicile</Text>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image src={care} alt="care" width="60px" />
                <Text>Santé</Text>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image src={psychologyHead} alt="psychologyHead" width="60px" />
                <Text>Bien être</Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-around">
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image src={education} alt="education" width="60px" />
                <Text>Enseignement, Education</Text>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image
                  src={wheelchairTransport}
                  alt="wheelchairTransport"
                  width="60px"
                />
                <Text>Transport, Aides techniques</Text>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="30%"
              >
                <Image src={admin} alt="admin" width="60px" />
                <Text>Administratif et Social</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Image src={listingProsIphone} alt="listingProsIphone" maxH="90%" />
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        pb="2rem"
        textAlign="start"
        w="80%"
        m="auto"
      >
        <Text
          bgGradient="linear(45deg, #4d1582 0%, #a7197f 20%)"
          bgClip="text"
          textAlign="left"
          fontSize="4xl"
          mb="1rem"
        >
          Notre mission
        </Text>
        <Text mb="1rem" fontSize="sm">
          L’objectif de notre service est de favoriser la qualité de vie des
          personnes en situation de handicap ou atteintes de problèmes de santé.
          Il vise à proposer des solutions de répit, d'accompagnement, de soin
          et de soutien. Il référence toutes les ressources nécessaires à
          l’accompagnement : information,aides humaines, techniques et
          technologiques.
        </Text>
        <Text mb="1rem" fontSize="sm">
          {" "}
          Habble propose deux services complémentaires :
        </Text>
        <UnorderedList m="0">
          <ListItem mb="1rem" fontSize="sm">
            <strong Style="background: linear-gradient(45deg, #4d1582 0%, #a7197f 100%); background-clip: text; -webkit-background-clip: text; color: transparent;">
              Habble
            </strong>
            , application pour faciliter l'autonomie et le droit au repit des
            personnes en situation de handicap et/ou connaissant des problèmes
            de santé. Présentée sous forme d'annuaire, elle permet de trouver
            des intervenants disponibles et compétents pour les accompagner
            ponctuellement ou durablement : garde, aide aux devoirs, aide
            administrative, repas, transport, bien-être... Pour les
            professionnels (libéraux, autoentrepreneurs, société,
            association,...), elle permet de mettre en avant leur savoir faire
            et de faire connaître leur offre de services.
          </ListItem>
          <ListItem mb="1rem" fontSize="sm">
            <strong Style="background: linear-gradient(45deg, #4d1582 0%, #a7197f 100%); background-clip: text; -webkit-background-clip: text; color: transparent;">
              Handiplanner
            </strong>
            , plateforme de services coordonnés dédiée aux acteurs du médico
            social et des services à la personne. Elle vise à valoriser leur
            offre et coordonner les interventions. Elle facilite la continuité
            des accompagnements ainsi que le soutien auprès des aidants. Elle
            est interopérable avec les dossiers de l'usager et les outils de
            gestion préexistants.
          </ListItem>
        </UnorderedList>
        <Text mb="1rem" fontSize="sm">
          Notre solution permet aux personnes en situation de handicap,
          atteintes de problèmes de santé et à leurs proches de trouver
          simplement une solution d'aide ou de répit adaptée à leur besoins.
          Elle s’appuie sur une plateforme digitale facilitant l’accès aux
          droits et permettant d’apporter un service à la carte (mise en
          relation, coordination des intervenants libéraux, éducatifs, médico
          sociaux, services à la personne, transports spécialisés …). Elle vise
          à mettre en avant les spécificités des acteurs existants et garantir
          le savoir faire des intervenants. Nos prestations permettent en
          corollaire aux travailleurs sociaux, médico sociaux et pédagogiques de
          proposer leur offre de service de manière simple et accessible.
        </Text>
        <Text mb="1rem" fontSize="sm">
          Les services proposés doivent ainsi{" "}
          <strong>permettre sans délai</strong> la définition d’un plan de
          compensation en adéquation avec les besoins et capacités de la
          personne en situation de handicap ou atteinte de problèmes de santé.
          Ceux-ci doivent permettre un accompagnement adapté, simple et sans
          délai et enfin faciliter le quotidien de la personne et de son proche
          de soutien.
        </Text>
      </Flex>
      <Flex h="auto" justifyContent="center" gap="2">
        {!family.isOpen && !service.isOpen && !building.isOpen && (
          <Box w="32%" h="30vh" onClick={family.onToggle}>
            <Button
              flexDirection="column"
              justifyContent="space-around"
              h="100%"
              background="white"
              _hover={{ background: "white" }}
              borderY="2px solid #4d1582"
              borderLeft="2px solid #4d1582"
              borderRadius="0"
            >
              <Image src={hFamily} alt="hFamily" w="60px" />
              <Text
                whiteSpace="pre-wrap"
                color="#4d1582"
                _hover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 25%)",
                  bgClip: "text",
                }}
              >
                Vous êtes en situation de handicap, avec un problème santé ou un
                proche aidant
              </Text>
            </Button>
          </Box>
        )}
        {family.isOpen && (
          <ScaleFade
            initialScale={0.9}
            in={family.isOpen}
            justifyContent="center"
          >
            <Flex
              flexDirection="column"
              justifyContent="space-around"
              bgColor="white"
              z-index="1"
              h="40vh"
              w="98vw"
              border="2px solid #4d1582"
              alignItems="center"
            >
              <CloseIcon
                onClick={family.onClose}
                alignSelf="flex-end"
                m="0.5rem"
                color="#4d1582"
                boxSize={4}
              />
              <Text
                whiteSpace="pre-wrap"
                color="#4d1582"
                _hover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                  bgClip: "text",
                }}
                fontSize="2xl"
                w="90%"
                fontWeight="bold"
              >
                Trouvez tous les professionnels du handicap de votre secteur
                susceptibles de vous accompagner.
              </Text>
              <Image src={hFamily} alt="hFamily" w="60px" />
              <Flex justifyContent="space-between" w="90%">
                <Flex
                  flexDirection="column"
                  w="40%"
                  justifyContent="space-around"
                >
                  <Text> Inscrivez vous et décrivez votre besoin</Text>
                  <Link href="/SignupForm">
                    <Button>M'incrire maintenant</Button>
                  </Link>
                </Flex>
                <Flex
                  flexDirection="column"
                  w="40%"
                  justifyContent="space-around"
                >
                  <Text>
                    N'hésitez pas également à soutenir le développement de notre
                    service
                  </Text>
                  <Link href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U">
                    <Button>Faire un don</Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </ScaleFade>
        )}
        {!family.isOpen && !service.isOpen && !building.isOpen && (
          <Box w="32%" h="30vh" onClick={service.onToggle}>
            <Button
              flexDirection="column"
              justifyContent="space-around"
              h="100%"
              background="white"
              _hover={{ background: "white" }}
              borderY="2px solid #4d1582"
              borderLeft="2px solid #4d1582"
              borderRadius="0"
            >
              <Image src={hServiceWorkers} alt="hServiceWorkers" w="60px" />
              <Text
                whiteSpace="pre-wrap"
                color="#4d1582"
                _hover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 25%)",
                  bgClip: "text",
                }}
              >
                Vous êtes un travailleur social, professionnel de santé en
                libéral ou auto-entrepreneur
              </Text>
            </Button>
          </Box>
        )}
        {service.isOpen && (
          <ScaleFade
            initialScale={0.9}
            in={service.isOpen}
            justifyContent="center"
          >
            <Flex
              flexDirection="column"
              justifyContent="space-around"
              bgColor="white"
              z-index="1"
              h="40vh"
              w="98vw"
              border="2px solid #4d1582"
              alignItems="center"
            >
              <CloseIcon
                onClick={service.onClose}
                alignSelf="flex-end"
                m="0.5rem"
                color="#4d1582"
                boxSize={4}
              />
              <Text
                whiteSpace="pre-wrap"
                color="#4d1582"
                _hover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                  bgClip: "text",
                }}
                fontSize="2xl"
                w="90%"
                fontWeight="bold"
              >
                Inscrivez vous et partagez vos compétences
              </Text>
              <Image src={hServiceWorkers} alt="hServiceWorkers" w="60px" />
              <Flex justifyContent="space-between" w="90%">
                <Flex
                  flexDirection="column"
                  w="40%"
                  justifyContent="space-around"
                >
                  <Text>
                    Renseignez vos disponibilités et trouvez des missions
                  </Text>
                  <Link href="/SignupForm">
                    <Button>M'incrire maintenant</Button>
                  </Link>
                </Flex>
                <Flex
                  flexDirection="column"
                  w="40%"
                  justifyContent="space-around"
                >
                  <Text>
                    N'hésitez pas également à soutenir le développement de notre
                    service
                  </Text>
                  <Link href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U">
                    <Button>Faire un don</Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </ScaleFade>
        )}
        {!family.isOpen && !service.isOpen && !building.isOpen && (
          <Box w="32%" h="30vh" onClick={building.onToggle}>
            <Button
              flexDirection="column"
              justifyContent="space-around"
              h="100%"
              background="white"
              _hover={{ background: "white" }}
              borderY="2px solid #4d1582"
              borderLeft="2px solid #4d1582"
              borderRadius="0"
            >
              <Image src={hBuilding} alt="hBuilding" w="60px" />
              <Text
                whiteSpace="pre-wrap"
                color="#4d1582"
                _hover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 25%)",
                  bgClip: "text",
                }}
              >
                Vous êtes un établissement médico social, un service à domicile,
                un fabricant ou distributeur de matériel
              </Text>
            </Button>
          </Box>
        )}
        {building.isOpen && (
          <ScaleFade
            initialScale={0.9}
            in={building.isOpen}
            justifyContent="center"
          >
            <Flex
              flexDirection="column"
              justifyContent="space-around"
              bgColor="white"
              z-index="1"
              h="40vh"
              w="98vw"
              border="2px solid #4d1582"
              alignItems="center"
            >
              <CloseIcon
                onClick={building.onClose}
                alignSelf="flex-end"
                m="0.5rem"
                color="#4d1582"
                boxSize={4}
              />
              <Text
                whiteSpace="pre-wrap"
                color="#4d1582"
                _hover={{
                  bgGradient: "linear(45deg, #4d1582 0%, #a7197f 50%)",
                  bgClip: "text",
                }}
                fontSize="2xl"
                w="90%"
                fontWeight="bold"
              >
                Valorisez votre offre de service, de prestations ou de vente.
              </Text>
              <Image src={hBuilding} alt="hBuilding" w="60px" />
              <Flex justifyContent="space-between" w="90%">
                <Flex
                  flexDirection="column"
                  w="40%"
                  justifyContent="space-around"
                >
                  <Text>
                    Inscrivez-vous et détaillez vos prestations et services.
                  </Text>
                  <Link href="/SignupForm">
                    <Button>M'incrire maintenant</Button>
                  </Link>
                </Flex>
                <Flex
                  flexDirection="column"
                  w="40%"
                  justifyContent="space-around"
                >
                  <Text>
                    Vous souhaitez créer votre propre plateforme, nous sommes là
                    pour vous accompagner.
                  </Text>
                  <Link href="/Contact">
                    <Button> Demande de rendez-vous</Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </ScaleFade>
        )}
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        pb="2rem"
        textAlign="start"
        w="80%"
        m="auto"
      >
        <Text
          bgGradient="linear(45deg, #4d1582 0%, #a7197f 20%)"
          bgClip="text"
          textAlign="left"
          fontSize="4xl"
          mb="1rem"
        >
          Pourquoi s'inscrire ?
        </Text>
        <Text mb="1rem" fontSize="sm">
          Notre service de mise en relation est gratuit. Dès votre inscription
          il vous est possible de déposer votre annonce ou de trouver un
          intervenant.
        </Text>
        <Text mb="1rem" fontSize="sm">
          Pour les professionnels, notre site vous aide à développer votre
          visibilité et faciliter la mise en relation. L’inscription est
          gratuite et aucun frais ne vous sera demandé pour être présent dans
          l’annuaire. Nous vous proposons également des services pour vous
          faciliter le quotidien.
        </Text>
        <Link href="/SignupForm">
          <Button>M'inscrire maintenant</Button>
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        pb="2rem"
        textAlign="start"
        w="80%"
        m="auto"
      >
        <Text
          bgGradient="linear(45deg, #4d1582 0%, #a7197f 20%)"
          bgClip="text"
          textAlign="left"
          fontSize="4xl"
          mb="1rem"
        >
          Pourquoi nous aider ?
        </Text>
        <Text mb="1rem" fontSize="sm">
          Aujourd’hui en France, plus de 12 000 000 de personnes souffrent d'un
          handicap ou d'un problème de santé. Plus de 50 000 sont sans solution
          d’accompagnement. Certaines doivent parfois attendre près de 10 ans
          pour trouver un établissement adapté. Beaucoup souhaitent également un
          accompagnement à domicile, souple et adapté. Notre service vise à
          répondre à ces personnes et à leurs proches,à simplifier leur
          quotidien en apportant un accompagnement à la carte. Votre soutien
          vise à accélerer le démarrage du service. Votre aide sert à développer
          la plateforme et informer les personnes en situation de handicap des
          solutions proposées.
        </Text>
        <Link href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U">
          <Button>Faire un don</Button>
        </Link>
      </Flex>
      <Flex
        bgColor="#5f3984"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Heading textAlign="left" color="white" fontSize="3xl" m="1rem">
          Fonctionnalités et principes clés
        </Heading>
        <Flex justifyContent="space-around" m="1rem">
          <Box w="50%">{text}</Box>
          <Grid
            alignSelf="center"
            w="580px"
            h="410px"
            templateColumns="repeat(9, 1fr)"
            templateRows="repeat(8, 1fr)"
            gap="2"
          >
            <GridItem colStart={2} colEnd={3} rowStart={1} rowEnd={2}>
              <Button
                onClick={() => setText(pro)}
                border="1px solid #a7197f"
                bgColor="white"
                bgRepeat="no-repeat"
                bgSize="65px"
                bgPosition="center"
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-1.svg"
                _hover="none"
              />
            </GridItem>
            <GridItem colStart={5} colEnd={6} rowStart={1} rowEnd={2}>
              <Button
                onClick={() => setText(demarche)}
                border="1px solid #a7197f"
                bgColor="white"
                bgRepeat="no-repeat"
                bgSize="30px"
                bgPosition="center"
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-2.svg"
                _hover="none"
              />
            </GridItem>
            <GridItem colStart={8} colEnd={9} rowStart={1} rowEnd={2}>
              <Button
                onClick={() => setText(guarentee)}
                border="1px solid #a7197f"
                bgColor="white"
                bgRepeat="no-repeat"
                bgSize="30px"
                bgPosition="center"
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-3.svg"
                _hover="none"
              />
            </GridItem>
            <GridItem colStart={1} colEnd={4} rowStart={2} rowEnd={3}>
              Trouver un professionnel
            </GridItem>
            <GridItem colStart={4} colEnd={7} rowStart={2} rowEnd={3}>
              Démarches
            </GridItem>
            <GridItem colStart={7} colEnd={10} rowStart={2} rowEnd={3}>
              Garanties
            </GridItem>
            <GridItem
              colStart={2}
              colEnd={4}
              rowStart={3}
              rowEnd={5}
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/top-left.svg"
              bgRepeat="no-repeat"
              bgPosition="top"
            />
            <GridItem
              colStart={4}
              colEnd={7}
              rowStart={3}
              rowEnd={4}
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/top.svg"
              bgRepeat="no-repeat"
              bgPosition="top"
            />
            <GridItem
              colStart={7}
              colEnd={9}
              rowStart={3}
              rowEnd={5}
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/top-right.svg"
              bgRepeat="no-repeat"
              bgPosition="top"
            />
            <GridItem colStart={4} colEnd={7} rowStart={4} rowEnd={6}>
              <Flex
                color="white"
                bgColor="#a7197f"
                borderRadius="100%"
                w="50%"
                h="100%"
                m="auto"
              >
                <Text color="white" alignSelf="center" m="auto">
                  Habble
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              colStart={2}
              colEnd={4}
              rowStart={5}
              rowEnd={7}
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/bottom-left.svg"
              bgRepeat="no-repeat"
              bgPosition="bottom"
            />
            <GridItem
              colStart={4}
              colEnd={7}
              rowStart={6}
              rowEnd={7}
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/bottom.svg"
              bgRepeat="no-repeat"
              bgPosition="bottom"
            />
            <GridItem
              colStart={7}
              colEnd={9}
              rowStart={5}
              rowEnd={7}
              bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/bottom-right.svg"
              bgRepeat="no-repeat"
              bgPosition="bottom"
            />
            <GridItem colStart={1} colEnd={4} rowStart={7} rowEnd={8}>
              Informations, conseils
            </GridItem>
            <GridItem colStart={4} colEnd={7} rowStart={7} rowEnd={8}>
              Coordination
            </GridItem>
            <GridItem colStart={7} colEnd={10} rowStart={7} rowEnd={8}>
              Objectif, gouvernance
            </GridItem>
            <GridItem colStart={2} colEnd={3} rowStart={8} rowEnd={9}>
              <Button
                onClick={() => setText(info)}
                border="1px solid #a7197f"
                bgColor="white"
                bgRepeat="no-repeat"
                bgSize="65px"
                bgPosition="center"
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-4.svg"
                _hover="none"
              />
            </GridItem>
            <GridItem colStart={5} colEnd={6} rowStart={8} rowEnd={9}>
              <Button
                onClick={() => setText(coordination)}
                border="1px solid #a7197f"
                bgColor="white"
                bgRepeat="no-repeat"
                bgSize="65px"
                bgPosition="center"
                bgImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-5.svg"
                _hover="none"
              />
            </GridItem>
            <GridItem colStart={8} colEnd={9} rowStart={8} rowEnd={9}>
              <Button
                onClick={() => setText(goal)}
                border="1px solid #a7197f"
                bgColor="white"
                bgRepeat="no-repeat"
                bgSize="30px"
                bgPosition="center"
                bgImage="	https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/icon-6.svg"
                _hover="none"
              />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
      <Flex>
        <Heading>Les fondateurs</Heading>
        <Flex>
          <Flex>
            <Box
              bgImage="https://app.habble.fr/wp-content/uploads/2020/02/patrice-warembourg-550.jpg"
              onClick={coFond1.onToggle}
              bgSize="cover"
            >
              <ScaleFade initialScale={0.9} in={coFond1.isOpen}>
                <Box
                  opacity="0.5"
                  p="40px"
                  color="white"
                  bg="#a7197f"
                  z-index="1"
                  h="100%"
                >
                  <Text>
                    Conseiller en innovation sociale, ancien directeur médico
                    social.
                  </Text>
                  <Link href="envoie mail">
                    <Image src="" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/patrice-warembourg-44109319/">
                    <Image src="" />
                  </Link>
                </Box>
              </ScaleFade>
            </Box>
            <Text>Patrice Warembourg</Text>
            <Text>Co-fondateur</Text>
            <Text>Stratégie et Développement</Text>
          </Flex>
          <Flex>
            <Box
              bgImage="	https://app.habble.fr/wp-content/uploads/2020/01/francois-duforest.jpg"
              onClick={coFond2.onToggle}
              bgSize="cover"
            >
              <ScaleFade initialScale={0.9} in={coFond2.isOpen}>
                <Box
                  opacity="0.5"
                  p="40px"
                  color="white"
                  bg="#a7197f"
                  z-index="1"
                  h="100%"
                >
                  <Text>Consultant digital</Text>
                  <Link href="envoie mail">
                    <Image src="" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/francois-duforest/">
                    <Image src="" />
                  </Link>
                </Box>
              </ScaleFade>
            </Box>
            <Text>François Duforest</Text>
            <Text>Co-fondateur</Text>
            <Text>François Duforest</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Heading>Partenaires et Soutiens</Heading>
        <Flex>
          <Image src={evident} alt="logo evident" />
          <Image src={reseauEntreprendre} alt="logo reseau entreprendre" />
        </Flex>
      </Flex>
    </div>
  );
}

export default Mission;
