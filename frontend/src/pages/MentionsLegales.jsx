import {
  Box,
  Flex,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function MentionsLegales() {
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} isStickyWhite />
      <Flex
        bgColor="background.gray"
        direction="column"
        justify="flex-start"
        paddingTop="100px"
      >
        <Heading
          as="h2"
          p="4rem 0"
          fontWeight="400"
          fontSize="22px"
          align="left"
          w="80%"
          m="auto"
        >
          Mentions Légales
        </Heading>
        <Box
          bgColor="white"
          w="80%"
          m="auto"
          mb="20px"
          boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
          p="30px"
          borderRadius="21px"
          fontWeight="500"
          color="purple.average"
          fontSize="md"
          lineHeight="1.7em"
        >
          <Heading
            as="h1"
            m="2rem 0 2rem 0"
            fontSize="calc(1.5rem + 1.5vw)"
            align="left"
            fontWeight="600"
          >
            Mentions légales des sites internet Habble.fr
          </Heading>
          <Text align="left" mt="15px" mb="15px">
            En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l’économie numérique, il est précisé aux
            utilisateurs du site habble.fr l’identité des différents
            intervenants dans le cadre de sa réalisation et de son suivi :
          </Text>
          <Text align="left" mt="15px" mb="15px">
            <Text align="left" mt="10px" mb="10px " fontWeight="800">
              Propriétaires:
            </Text>{" "}
            Association Habble{" "}
            <Text align="left" mt="10px" mb="10px " fontWeight="800">
              Webdesign:{" "}
            </Text>
            Agence Web KEYNETIC{" "}
            <Text align="left" mt="10px" mb="10px " fontWeight="800">
              Développements:{" "}
            </Text>
            Wild business school Responsable publication: Mr Patrice Warembourg
            <Text align="left" mt="10px" mb="10px " fontWeight="800">
              Adresse postale :
            </Text>{" "}
            A la Boutillerie, 62840 Fleurbaix Hébergeur: Données stockées en
            Europe
          </Text>
          <Text align="left" mt="10px" mb="10px " fontWeight="800">
            1. Conditions générales d’utilisation du site et des services
            proposés.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            L’utilisation du site Habble.fr implique l’acceptation pleine et
            entière des conditions générales d’utilisation ci-après décrites.
            Ces conditions d’utilisation sont susceptibles d’être modifiées ou
            complétées à tout moment, les utilisateurs du site Habble.fr sont
            donc invités à les consulter de manière régulière. Ce site est
            normalement accessible à tout moment aux utilisateurs. Une
            interruption pour raison de maintenance technique peut être
            toutefois décidée par l’association. Le site Habble.fr est mis à
            jour régulièrement. De la même façon, les mentions légales peuvent
            être modifiées à tout moment : elles s’imposent néanmoins à
            l’utilisateur qui est invité à s’y référer le plus souvent possible
            afin d’en prendre connaissance. Les copies et téléchargements ne
            sont autorisées que pour un usage personnel, privé et
            non-commercial.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            2. Description des services fournis.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Le site Habble.fr a pour objet de fournir une information concernant
            l’ensemble des activités de la plateforme Habble.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Toutefois, il ne pourra être tenu responsable des omissions, des
            inexactitudes et des carences dans la mise à jour, qu’elles soient
            de son fait ou du fait des tiers partenaires qui lui fournissent ces
            informations. Toutes les informations indiquées sur le site
            Habble.fr sont données à titre indicatif, et sont susceptibles
            d’évoluer. Par ailleurs, les renseignements figurant sur le site
            Habble.fr ne sont pas exhaustifs. Ils sont donnés sous réserve de
            modifications ayant été apportées depuis leur mise en ligne.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            3. Limitations contractuelles sur les données techniques.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            L’association Habble ne pourra être tenue responsable de dommages
            matériels liés à l’utilisation du site Habble.fr. De plus,
            l’utilisateur du site s’engage à accéder au site en utilisant un
            matériel récent, ne contenant pas de virus et avec un navigateur de
            dernière génération mis-à-jour.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            4. Propriété intellectuelle et contrefaçons.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            L’association Habble est propriétaire des droits de propriété
            intellectuelle ou détient les droits d’usage sur tous les éléments
            accessibles sur les sites, notamment les textes, images, graphismes,
            logo, icônes, sons, logiciels. Toute reproduction, représentation,
            modification, publication, adaptation de tout ou partie des éléments
            du site, quel que soit le moyen ou le procédé utilisé, est
            interdite, sauf autorisation écrite préalable des membres du conseil
            d’administration. Toute exploitation non autorisée du site ou de
            l’un des éléments qu’il contient sera considérée comme constitutive
            d’une contrefaçon et poursuivie conformément aux dispositions des
            articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            5. Limitations de responsabilité.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            L’association Habble ne pourra être tenue responsable des dommages
            directs et indirects causés au matériel de l’utilisateur, lors de
            l’accès au site Habble.fr, et résultant soit de l’utilisation d’un
            matériel ne répondant pas aux spécifications indiquées au point 3,
            soit de l’apparition d’un bug ou d’une incompatibilité.
            L’association Habble ne pourra également être tenue responsable des
            dommages indirects (tels par exemple qu’une perte de marché ou perte
            d’une chance) consécutifs à l’utilisation du site Habble.fr
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            6. Liens hypertextes et cookies.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Le site Habble.fr contient un certain nombre de liens hypertextes
            vers d’autres sites, mis en place avec l’autorisation des membres de
            l’association. Cependant, l’association Habble n’a pas la
            possibilité de vérifier le contenu des sites ainsi visités, et
            n’assumera en conséquence aucune responsabilité de ce fait. La
            navigation sur le site Habble.fr est susceptible de provoquer
            l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un
            cookie est un fichier de petite taille, qui ne permet pas
            l’identification de l’utilisateur, mais qui enregistre des
            informations relatives à la navigation d’un ordinateur sur un site.
            Les données ainsi obtenues visent à faciliter la navigation
            ultérieure sur les sites, et ont également vocation à permettre
            diverses mesures de fréquentation.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            7. Droit applicable et attribution de juridiction.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Tout litige en relation avec l’utilisation du site Habble.fr est
            soumis au droit français. Il est fait attribution exclusive de
            juridiction aux tribunaux compétents de Lille.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            8. Rôle et Responsabilité
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            1. Rôle et responsabilité des Membres
          </Text>
          <Text align="left" mt="15px" mb="15px">
            L’Utilisateur a pour obligation de :
            <UnorderedList>
              <ListItem>
                Ne pas utiliser La plateforme web Habble à d’autres fins que
                celles définies dans l’article 2.
              </ListItem>
              <ListItem>
                Ne pas divulguer sur son profil des informations personnelles
                permettant aux autres Utilisateurs de le contacter sans passer
                par l’intermédiaire des services proposés par La plateforme web
                Habble.fr.
              </ListItem>
              <ListItem>
                Ne pas poster, indiquer, ni diffuser sous quelque forme que ce
                soit des informations ou contenus ayant pour effet de diminuer,
                de désorganiser, d’empêcher l’utilisation normale des Services,
                d’interrompre et/ou de ralentir la circulation normale des
                communications entre les Utilisateurs par l’intermédiaire des
                Services, tels que des logiciels, virus, bombes logiques, envoi
                massif de messages, etc. La plateforme web Habble.fr se réserve
                le droit de supprimer les messages qui sont envoyés massivement
                par un Utilisateur afin de préserver une qualité d’utilisation
                normale du Service pour les autres Utilisateurs.
              </ListItem>
              <ListItem>
                Ne pas poster, indiquer, ni diffuser sous quelque forme que ce
                soit, ne tenir aucun propos, n’avoir aucun comportement de
                nature ou à caractère diffamatoire, injurieux, obscène,
                pornographique, vulgaire, offensant, agressif, déplacé, violent,
                menaçant, harcelant, raciste, xénophobe, à connotation sexuelle,
                incitant à la haine, à la violence, à la discrimination ou à la
                haine, encourageant les activités ou l’usage de substances
                illégales ou, plus généralement, contraires aux finalités de la
                Plateforme Habble.fr ou de nature à porter atteinte aux droits
                de la plateforme web Habble.fr ou d’un tiers ou contraires aux
                bonnes mœurs ;
              </ListItem>
              <ListItem>
                Ne pas poster, indiquer ni diffuser sous quelque forme que ce
                soit des informations ou contenus intégrant des liens vers des
                sites tiers qui auraient un caractère illégal, contraires aux
                bonnes mœurs et/ou non conformes à l’objet de La plateforme web
                Habble.fr.
              </ListItem>
            </UnorderedList>
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Il est rappelé aux Utilisateurs qu’il leur est interdit d’indiquer
            ou de divulguer auprès d’autres Utilisateurs des informations
            permettant leur identification, telles que le nom de famille,
            adresse postale, adresse électronique, numéro de téléphone, aux
            autres Utilisateurs par l’intermédiaire du site Habble.fr.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            2. Rôle et responsabilité:
          </Text>
          <Text align="left" mt="15px" mb="15px">
            l’association Habble et les Membres sont des parties indépendantes,
            chacune agissant en son nom personnel et pour son propre compte. La
            plateforme web Habble.fr ne conclut aucun contrat au nom et/ou pour
            le compte d’un Intervenant ou d’un Demandeur, ces derniers
            contractant directement entre eux par l’intermédiaire de la
            Plateforme. Dès lors, l’association Habble n’est pas partie prenante
            aux contrats qui seraient conclus entre les Utilisateurs, ils ne
            sauraient en aucun cas voir leur responsabilité engagée au titre des
            difficultés pouvant intervenir lors de la conclusion ou de
            l’exécution de ces contrats conclu entre Utilisateurs, ni être
            partie à quelques litiges éventuels que ce soit entre eux, à raison
            de garanties, déclarations ou obligations quelconques auxquelles les
            Utilisateurs seraient tenus.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            L’association Habble n’est ainsi notamment pas responsable de la
            qualité ou de la conformité de la Mission réalisée par
            l’Intervenant. En conséquence, La plateforme web Habble.fr ne peut
            en aucun cas être considérée comme employé/employeur d’un Membre et
            les Intervenants ne peuvent pas être considérés comme des
            sous-traitants de La plateforme web Habble.fr. La plateforme web
            Habble.fr décline toute responsabilité pour tous les incidents ou
            accidents qui pourraient survenir aux Membres ou aux tiers durant la
            Mission.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Plus généralement, La plateforme web Habble.fr ne pourra être tenue
            responsable d’un préjudice d’aucune nature (personnelle, physique,
            matérielle, financière ou autre) survenu à l’occasion d’une Mission.
            Aucune réclamation ne sera acceptée à ce titre. La plateforme web
            Habble.fr s’engage à fournir les Services avec diligence et selon
            les règles de l’art, étant précisé qu’il pèse sur elle une
            obligation de moyens, à l’exclusion de toute obligation de résultat,
            ce que les Utilisateurs reconnaissent et acceptent expressément. La
            responsabilité de l'association est exclusivement limitée à la
            fourniture des Services selon les modalités décrites aux présentes.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            La plateforme web Habble.fr ne peut être tenue pour responsable des
            Contenus, dont les auteurs sont des tiers. Aussi, toute réclamation
            éventuelle devra être dirigée en premier lieu vers l’auteur des
            Contenus en question. Les Contenus qui porteraient atteinte à une
            personne quelle qu’elle soit, peuvent faire l’objet d’une
            notification à Habble selon les modalités prévues à l’article 6-I-5
            de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
            l’économie numérique, l’association Habblese réservant de prendre
            les mesures décrites aux articles 11 et 1
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            9 : Sanction des manquements
          </Text>
          <Text align="left" mt="15px" mb="15px">
            En cas de manquement à l’une quelconque des dispositions des
            présentes conditions générales, ou plus généralement, d’infraction
            aux lois et règlements par l’Utilisateur, l’association Habble se
            réserve le droit de :
            <UnorderedList>
              <ListItem>
                Suspendre, supprimer ou empêcher l’accès aux Services du Membre,
                auteur du manquement ou de l’infraction, ou y ayant participé ;
              </ListItem>
              <ListItem>
                Supprimer tout Contenu en lien avec le manquement ou
                l’infraction considéré(e), en totalité ou en partie ;
              </ListItem>
              <ListItem>
                Prendre toutes mesures appropriées et engager toute action en
                justice ;
              </ListItem>
              <ListItem>
                Avertir le cas échéant les autorités compétentes, coopérer avec
                elles et leur fournir toutes les informations utiles à la
                recherche et à la répression d’activités illégales ou illicites.
              </ListItem>
            </UnorderedList>
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            10 : Suspension et résiliation
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Compte de l’Intervenant
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Chaque Membre Intervenant peut mettre fin à tout moment à son
            inscription sur La plateforme web Habble.fr en demandant la clôture
            de son compte sans motif et sans frais autres que ceux liés à la
            transmission de sa demande ou dans la partie Mon compte, Désactiver
            mon compte, Me désinscrire. Afin de clôturer un compte, aucune
            mission ne doit être en cours de réalisation. Un Membre Intervenant
            qui souhaite clôturer son compte alors qu’une Mission est en cours
            devra préalablement annuler sa ou ses Mission(s).
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Compte du Demandeur
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Chaque Membre Demandeur peut mettre fin à tout moment à son
            inscription sur La plateforme web Habble.fr en demandant la clôture
            de son compte sans motif et sans frais autres que ceux liés à la
            transmission de sa demande ou sur son profil en cliquant sur le
            crayon de modification du profil et en cliquant sur « Se désinscrire
            » et cliquer sur « Oui » Si le Demandeur a un ou des Mission(s) en
            cours de réalisation, il devra au préalable annuler sa ou ses
            mission(s).
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Dispositions générales
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Sans préjudice des autres dispositions des présentes, en cas de
            manquement grave du Membre, la plateforme web Habble.fr peut
            résilier son compte sans préavis ni mise en demeure. Cette
            résiliation produit les mêmes effets que celle décidée par le
            Membre. Cette résiliation interviendra sans préjudice de tous
            dommages et intérêts qui pourraient être réclamés par La plateforme
            web Habble.fr au Membre ou ses ayants droit et représentants légaux
            en réparation des préjudices éventuels subis par La plateforme web
            Habble.fr du fait de tels manquements.
          </Text>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
