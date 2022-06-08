import {
  Box,
  Flex,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <Box h="100vh">
      <Header onDark={false} isSticky={false} />
      <Flex bgColor="background.gray" direction="column" justify="flex-start">
        <Heading
          as="h2"
          p="4rem 0"
          fontWeight="400"
          fontSize="22px"
          align="left"
          w="80%"
          m="auto"
        >
          Contact
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
            Protection des données personnelles de la plateforme web Habble.fr
          </Heading>
          <Text align="left" mt="15px" mb="15px">
            Vos demandes de modifications de vos données personnelles
            <UnorderedList>
              <ListItem>
                En tant qu’utilisateur des services de la plateforme web
                Habble.fr vous pouvez accéder et modifier les données
                personnelles vous concernant depuis votre{" "}
                <Link color="pink.light" href="https://app.habble.fr/login/">
                  compte client
                </Link>
                .
              </ListItem>
              <ListItem>
                Pour toute demande d’accès, d’obtention, de rectification ou
                d’effacement de vos données personnelles nous vous invitons à
                contacter notre service de protection de vos données.
              </ListItem>
            </UnorderedList>
          </Text>
          <Text align="left" mt="15px" mb="15px">
            <Text align="left" mt="10px" mb="10px " fontWeight="800">
              Introduction:
            </Text>{" "}
            Cette page décrit les principes avec lesquels Habble recueille
            différents types de données sur ses clients. Les éléments décrits
            dans cette page sont expliqués en détail dans les principes de
            protection des données de la plateforme web Habble.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Aussi cette page détaille les engagements concernant la politique de
            sécurité et de protection des données de la plateforme web Habble
            afin de respecter, au maximum, votre vie privée.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            HABBLE participe et est conforme à l’ensemble des Spécifications et
            Politiques du Transparency & Consent Framework de l’IAB Europe.
            HABBLE utilise la Consent Management Platform n°92.
          </Text>
          <Text align="left" mt="10px" mb="10px " fontWeight="800">
            Définitions
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Afin d’éviter une interprétation imprécise voici quelques éléments
            de compréhension de termes utilisés :
            <UnorderedList>
              <ListItem>
                Données à caractère personnel : toute information se rapportant
                à une personne physique identifiée ou identifiable est réputée
                être « une personne physique identifiable » une personne
                physique qui peut être identifiée, directement ou indirectement.
              </ListItem>
              <ListItem>
                Traitement : toute opération ou tout ensemble d’opérations
                effectuées ou non à l’aide de procédés automatisés et appliquées
                à des données ou des ensembles de données à caractère personnel
                (collecte, enregistrement, transmission, stockage, conservation,
                extraction, consultation, utilisation, interconnexion,
                segmentation, etc.)
              </ListItem>
            </UnorderedList>
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Responsable du traitement
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Tout traitement des informations personnelles communiquées à la
            plateforme web Habble est effectué sous la responsabilité de
            l’association Habble, A la boutillerie 62840 Fleurbaix.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Comment recueillons-nous des données à votre sujet ?
          </Text>
          <Text align="left" mt="15px" mb="15px">
            La collecte de vos données personnelles (telles que le nom et les
            coordonnées) est le plus souvent basée sur votre relation client ou
            une autre relation pertinente avec nous. Par exemple, nous
            collectons des données lorsque vous effectuez des actions sur nos
            services, en vous inscrivant en tant qu’utilisateur de notre site,
            en utilisant les services de la plateforme web de Habble ou en nous
            fournissant d’autres informations.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            Lorsque vous utilisez les services réseau et de communication de la
            plateforme web Habble, par exemple en passant un appel ou en créant
            votre compte client ou en envoyant un e-mail, les données
            d’identification sont stockées dans nos systèmes pour l’utilisation
            des services.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Lorsque vous visitez la plateforme web Habble ou que vous en chargez
            des pages, vous nous laissez différents types de données de
            navigation anonymes, telles que votre adresse IP et votre historique
            de navigation. Le fonctionnement des services est basé sur
            l’utilisation de cookies. Nous pouvons collecter des données en
            fonction de votre consentement. Nous collectons également les
            données de nos clients potentiels lorsqu’ils participent à des
            concours, des tirages au sort ou des événements clients.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Quelles données recueillons-nous?
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Ces données comprennent votre nom, prénom, adresse, numéro de
            téléphone, adresse e-mail, date de naissance, informations de
            marketing direct et consentement, informations sur la personne
            contact de l’entreprise, nom de la société, informations fournies
            par vous-même, informations de classification client, accord et
            facturation. Nous stockons ce qui peut être connecté à vous.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            Les données créées et collectées pendant la communication
            comprennent des informations sur les parties communicantes, l’heure
            de la connexion, les informations de routage, le protocole de
            transfert de données, le format de la connexion et les informations
            de localisation.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Lors de la navigation sur Internet, les données de “mesure” sont
            collectées à l’aide de cookies.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Ces données ne peuvent pas être associées à une personne.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            Les informations clients que nous collectons nous aident à
            personnaliser et à améliorer continuellement votre expérience sur
            les services de la plateforme web Habble. Nous utilisons ces
            informations pour le bon fonctionnement du service, traiter les
            paiements et communiquer avec vous concernant vos paiement des frais
            de transaction, les produits, les services et offres
            promotionnelles, conserver et mettre à jour nos fichiers et ainsi
            vos comptes chez nous, mettre à votre disposition du contenu tel que
            les listes d’envies et les commentaires clients et recommander des
            produits et services susceptibles de vous intéresser. Nous utilisons
            également ces informations pour améliorer nos boutiques et sites
            internet, prévenir ou détecter les fraudes ou abus sur notre site
            Internet et permettre à des parties tierces de fournir des fonctions
            techniques, logistiques ou autres pour notre compte.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Liste des types d’informations que nous collectons :
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Informations que vous nous communiquez{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous collectons et enregistrons toutes les informations que vous
            nous communiquez via notre site Web ou par d’autres biais. Vous
            pouvez choisir de ne pas nous communiquer certaines informations,
            cette décision risque néanmoins de limiter l’usage de nos services.
            Nous utilisons les informations que vous nous communiquez, notamment
            afin de répondre à vos demandes, de personnaliser vos futurs achats,
            d’améliorer nos services et de communiquer avec vous.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Informations collectées automatiquement{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            À chaque fois que vous entrez en contact avec nous, nous recevons et
            enregistrons certains types d’informations. Comme de nombreux autres
            sites Internet, nous utilisons notamment des « cookies » et obtenons
            certains types d’informations lorsque votre navigateur accède au
            site habble.fr ou à des publicités et autres contenus affichés sur
            d’autres sites Internet par Habble ou pour son compte.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Informations relatives aux e-mails{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Pour optimiser l’utilité et l’intérêt de nos e-mails, si votre
            ordinateur le permet, nous recevons fréquemment une confirmation des
            e-mails envoyés par la plateforme web Habble que vous avez ouverts.
            Si vous ne souhaitez pas recevoir d’e-mail de notre part, il vous
            suffit de nous le notifier dans votre compte.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Comment gérons-nous vos informations?
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Veuillez noter que Habble et leurs sous-traitants agissent sous
            l’obligation du secret lorsqu’ils traitent des données vous
            concernant.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous maintenons la confidentialité des données vous concernant et
            veillons à ce qu’elles ne soient utilisées qu’à des fins
            prédéfinies.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Vos données sont traitées dans le but de produire et de livrer les
            services de communication et autres contenus, développer les
            services, vous fournir le meilleur et le plus complet des services
            possibles, et vous informer de nos services.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            Nous utilisons également vos données pour la communication avec les
            clients, telles que l’envoi d’informations concernant nos services
            et à des fins de marketing direct. Nous utilisons également les
            données pour le profilage des clients à l’aide de la durée de la
            relation client et des classifications externes.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            Nous utilisons à la fois des données d’utilisation résumées et des
            données spécifiques aux personnes pour créer des groupes cibles pour
            le marketing. Nous traitons les données de nos clients potentiels à
            des fins de marketing direct.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            Nous nous efforçons de nous assurer que les données du client sont à
            jour et correctes.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            Nous supprimons les données obsolètes et inutiles lorsque cela est
            possible.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous protégeons toutes les données vous concernant par le biais de
            droits d’accès personnels basés sur des tâches et empêchons l’accès
            des tiers aux données.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Où envoyons-nous vos données?
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous ne soumettons vos données que dans la mesure permise par la
            législation applicable et comme indiqué dans la description du
            fichier aux autorités et autres entreprises de télécommunication.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Quand nous utiliserons des sous-traitants, nous signerons avec eux
            un accord de sécurité qui couvre également l’utilisation de vos
            données. Nous sommes également responsables de ce genre de
            manipulation pour vous.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Les principes de protection des données de la plateforme web Habble
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Le but de cette politique de protection des données est de décrire
            les principes et les pratiques que nous observons pour assurer la
            protection de la vie privée, la confidentialité de la communication
            et la protection juridique de nos clients.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            La plateforme web Habble.fr met régulièrement à jour cette politique
            au fur et à mesure que les opérations ou services changent ou se
            développent. Pour cette raison, nous vous encourageons à consulter
            régulièrement la dernière déclaration.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Les valeurs de base importantes pour la plateforme web Habble
            comprennent la confidentialité des données des clients et de la
            communication, ainsi que la protection de la vie privée des clients
            dans toutes les opérations de l’entreprise.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Lors de la manipulation des données personnelles de nos clients,
            nous suivons la législation française, les ordres et les
            instructions des autorités et les bonnes pratiques de traitement des
            données.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Sur la plateforme web Habble nous mettons en œuvre un niveau élevé
            de protection des données. Les données personnelles et
            d’identification ainsi que les données liées à l’emplacement sont
            collectées uniquement à des fins spécifiques prédéfinies et légales
            et ne sont pas traitées d’une manière incompatible avec ces
            objectifs.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous protégeons la sécurité de vos informations personnelles lors de
            leur transmission en utilisant le logiciel SSL (Secure Sockets Layer
            Software) qui crypte les informations que vous entrez avant qu’elles
            ne nous soient envoyées.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            Nous maintenons des mesures de sécurité physiques, électroniques et
            des procédures de sauvegarde en rapport avec la collecte, la
            conservation et la communication d’informations personnelles de
            clients. Nos procédures de sécurité peuvent nous amener à vous
            demander une preuve de votre identité avant de pouvoir vous
            communiquer vos informations personnelles.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous formons constamment notre personnel sur les principes du
            traitement des données et surveillons l’utilisation des données par
            des moyens appropriés.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Les principes généraux de la gestion des données clients
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Le traitement des données personnelles doit toujours être justifié
            pour les opérations de la plateforme web Habble.fr. Nous avons
            défini l’objectif de la collecte, de la manipulation et de la
            soumission des données personnelles dans la section suivante .{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            La plateforme web Habble traite uniquement les données client
            nécessaires à ses opérations, telles que définies dans le but
            d’utilisation indiqué dans la description du fichier pour le
            registre client. Nous nous efforçons de ne pas traiter les données
            incorrectes, incomplètes ou obsolètes.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Le traitement des données client est généralement basé sur une
            relation pertinente, des informations reçues lors de l’utilisation
            ou de l’enregistrement d’un service ou votre consentement. Nous
            pouvons également traiter vos données pour d’autres motifs, par
            exemple à votre demande ou lorsque la loi l’exige. Vos informations
            peuvent être traitées au sein de la plateforme web Habble. Nous
            incitons nos clients à mettre régulièrement à jour leurs
            coordonnées.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous enregistrons vos conversations avec notre service client pour
            vérifier une transaction commerciale, pour répondre à vos demandes
            et pour surveiller et développer la qualité du service.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Veuillez noter qu’en tant que client de la plateforme web Habble.fr,
            vous avez le droit de vérifier quelles données vous concernant ont
            été stockées dans nos systèmes d’information, ou qu’il n’y a pas de
            données vous concernant dans notre fichier. Vous pouvez également
            refuser l’utilisation de vos données conformément à la législation
            pertinente. L’inspection peut être effectuée une fois par an sans
            frais. La demande d’inspection des données doit être faite avec un
            document signé entre Habble et vous.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Collecte, conservation, extraction et traitement des données
            personnelles
          </Text>
          <Text
            align="left"
            mt="15px"
            mb="15px"
            fontWeight="600"
            color="pink.light"
          >
            Registre des données collectées directement via les services de la
            plateforme web Habble :
          </Text>
          <Text
            align="left"
            mt="15px"
            mb="15px"
            color="pink.light"
            textDecoration="underline"
          >
            Formulaire de contact
          </Text>
          <Text align="left" mt="15px" mb="15px">
            <UnorderedList>
              <ListItem>Données collectées : email et message</ListItem>
              <ListItem>
                Objectif poursuivi : Gestion de la relation client
              </ListItem>
              <ListItem>
                Conservation des données : Enregistrement en base de données
              </ListItem>
              <ListItem>Durée de conservation : 1 an</ListItem>
              <ListItem>
                Accès aux données : Le service relation client de la plateforme
                web Habble
              </ListItem>
              <ListItem>
                Les données sont-elles stockées ou traitées hors UE : Non
              </ListItem>
            </UnorderedList>
          </Text>
          <Text
            align="left"
            mt="15px"
            mb="15px"
            color="pink.light"
            textDecoration="underline"
          >
            Création de compte client
          </Text>
          <Text align="left" mt="15px" mb="15px">
            <UnorderedList>
              <ListItem>
                Données collectées : nom, prénom, adresse, numéro de téléphone,
                adresse e-mail, informations de marketing direct et
                consentement, informations sur la personne contact de
                l’entreprise, nom de la société, informations fournies par
                vous-même, informations de classification client, nous stockons
                ce qui peut être connecté à vous.
              </ListItem>
              <ListItem>
                Objectif poursuivi : Bon fonctionnement du service de mise en
                relation / Gestion de la fidélité
              </ListItem>
              <ListItem>
                Conservation des données : Enregistrement en base de données
              </ListItem>
              <ListItem>
                Durée de conservation : Durée de vie de l’utilisateur ou du
                client / Les clients / utilisateurs inactifs depuis 2 ans sont
                supprimés
              </ListItem>
              <ListItem>
                Accès aux données : Le service marketing / Le service client
              </ListItem>
              <ListItem>
                Les données sont-elles stockées ou traitées hors UE : Non
              </ListItem>
            </UnorderedList>
          </Text>
          <Text
            align="left"
            mt="15px"
            mb="15px"
            color="pink.light"
            textDecoration="underline"
          >
            Formulaire optin newsletter
          </Text>
          <Text align="left" mt="15px" mb="15px">
            <UnorderedList>
              <ListItem>Données collectées : email </ListItem>
              <ListItem>Objectif poursuivi : Emails marketing</ListItem>
              <ListItem>
                Conservation des données : Optin en base de données
              </ListItem>
              <ListItem>
                Durée de conservation : Durée optin du client hors refus de la
                part du client
              </ListItem>
              <ListItem>Accès aux données : Le service marketing</ListItem>
              <ListItem>
                Les données sont-elles stockées ou traitées hors UE : Non
              </ListItem>
            </UnorderedList>
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Conformément à la loi « informatique et libertés », vous pouvez
            exercer votre droit d’accès aux données vous concernant et les faire
            rectifier via le bouton de contact disponible en haut de cette page
          </Text>
          <Text
            align="left"
            mt="15px"
            mb="15px"
            fontWeight="600"
            color="pink.light"
          >
            Registre des données collectées directement via les services de la
            plateforme web Habble :
          </Text>
          <Text
            align="left"
            mt="15px"
            mb="15px"
            color="pink.light"
            textDecoration="underline"
          >
            Mailchimp{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            <UnorderedList>
              <ListItem>
                Informations prestataire :{" "}
                <Link href=" https://MailChimp.com">https://MailChimp.com</Link>
              </ListItem>
              <ListItem>Localisation prestataire : Etats-Unis</ListItem>
              <ListItem>Objectif poursuivi : Emails marketing</ListItem>
              <ListItem>
                Les données sont-elles stockées ou traitées hors UE : Oui
              </ListItem>
              <ListItem>
                Charte RGPD du prestataire :
                https://MailChimp.com/legal/privacy/
              </ListItem>
            </UnorderedList>
          </Text>
          <Text
            align="left"
            mt="15px"
            mb="15px"
            color="pink.light"
            textDecoration="underline"
          >
            Facebook{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            <UnorderedList>
              <ListItem>
                Informations prestataire :{" "}
                <Link href="https://www.facebook.com/">
                  https://www.facebook.com/
                </Link>
              </ListItem>
              <ListItem>Localisation prestataire : Etats unis</ListItem>
              <ListItem>
                Objectif poursuivi : Connexion à votre compte client sur le site
                via votre compte Facebook
              </ListItem>
              <ListItem>
                Les données sont-elles stockées ou traitées hors UE : Oui
              </ListItem>
              <ListItem>
                Charte RGPD du prestataire : https://www.facebook.com/
              </ListItem>
            </UnorderedList>
          </Text>
          <Text
            align="left"
            mt="15px"
            mb="15px"
            color="pink.light"
            textDecoration="underline"
          >
            Google Analytics
          </Text>
          <Text align="left" mt="15px" mb="15px">
            <UnorderedList>
              <ListItem>
                Informations prestataire :{" "}
                <Link href="https://analytics.google.com/analytics">
                  https://analytics.google.com/analytics
                </Link>
              </ListItem>
              <ListItem>Localisation prestataire : Etats-Unis</ListItem>
              <ListItem>
                Objectif poursuivi : Analyse trafic du site + Remarketing
              </ListItem>
              <ListItem>
                Les données sont-elles stockées ou traitées hors UE : Oui
              </ListItem>
              <ListItem>
                Charte RGPD du prestataire :
                https://privacy.google.com/intl/fr_fr/businesses/compliance/
              </ListItem>
            </UnorderedList>
          </Text>
          <Text
            align="left"
            mt="15px"
            mb="15px"
            color="pink.light"
            textDecoration="underline"
          >
            Google Adwords
          </Text>
          <Text align="left" mt="15px" mb="15px">
            <UnorderedList>
              <ListItem>
                Informations prestataire :{" "}
                <Link href="https://adwords.google.com">
                  https://adwords.google.com{" "}
                </Link>
              </ListItem>
              <ListItem>Localisation prestataire : Etats-Unis</ListItem>
              <ListItem>Objectif poursuivi : Publicité + Remarketing</ListItem>
              <ListItem>
                Les données sont-elles stockées ou traitées hors UE : Oui
              </ListItem>
              <ListItem>
                Charte RGPD du prestataire :
                https://privacy.google.com/intl/fr_fr/businesses/compliance
              </ListItem>
            </UnorderedList>
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Dépôt de cookies par Sirdata
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Sirdata est une entreprise de data marketing qui permet à ses
            Clients d’adresser aux Utilisateurs des offres pertinentes adaptées
            à leurs centres d’intérêt.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Les Données collectées par Sirdata sont conservées pour une durée
            maximale de 365 jours, selon la finalité du traitement, conformément
            aux lois en vigueur et principe de minimisation.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            En savoir plus :{" "}
            <Link
              href="https://www.sirdata.com/vie-privee/"
              color="pink.average"
            >
              https://www.sirdata.com/vie-privee/
            </Link>
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Vous souhaitez désactiver la collecte de vos données par Sirdata :{" "}
            <Link
              href="https://www.sirdata.com/opposition/"
              color="pink.average"
            >
              https://www.sirdata.com/opposition/
            </Link>
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Envoi et partage des données
          </Text>
          <Text align="left" mt="15px" mb="15px">
            La plateforme web Habble ne peut soumettre vos données à des tiers
            que conformément à la législation en vigueur. Nous soumettons des
            informations sur demande aux autorités, par exemple la police et les
            autorités de sécurité, ainsi que d’autres autorités pour les motifs
            spécifiés par la législation.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            sLes informations relatives à nos clients représentent une part
            importante de notre activité et notre métier n’est pas d’en faire le
            commerce. Nous partageons ces informations uniquement dans les cas
            précédemment exprimés et pour les finalités décrites dans cette
            politique de confidentialité avec la plateforme web Habble contrôle
            et qui sont, soit soumises à cette politique de confidentialité,
            soit appliquent des règles au moins aussi protectrices que celles
            décrites dans cette politique de confidentialité.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            En outre, nous pouvons soumettre vos données à des sous-traitants,
            auquel cas nous veillerons à ce que la confidentialité des données
            soit maintenue, et nous serons également responsables de la gestion
            des données dans ce cas. Si nous traitons vos données en dehors de
            la région EU, nous protégerons vos données en nous assurant que le
            sous-traitant garantit le traitement approprié des données.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            L'acceptation de la politique de confidentialité autorise de plein
            droit Habble à transférer expressément les informations collectées
            au profit de la structure administrative et juridique portant
            l’application web de Habble. Lors de ce transfert, un courriel sera
            transmis à l’ensemble des utilisateurs enregistrés à cette date afin
            de les en informer. En cas d’absence de réponse sous 48 heures,
            chaque compte sera automatiquement transféré et vaudra acceptation
            des nouvelles conditions d’utilisation.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Traitement des données d’identification et de localisation liées à
            la communication électronique{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            La plateforme web de Habble traite toutes les données et tous les
            messages créés pendant la communication comme confidentiels. Notre
            personnel est tenu par une obligation de secret et une interdiction
            d’utiliser des messages ou d’autres informations confidentielles.
            Lorsque la communication se fait via un réseau, elle laisse toujours
            une trace. Ces traces de réseau sont appelées données
            d’identification si elles peuvent être connectées à une personne.
            Des traces de réseau sont créées, par exemple, lors d’appels
            téléphoniques, d’envoi de messages électroniques et SMS et de
            navigation sur Internet, et peuvent contenir des informations sur
            les correspondants, la route de connexion ou le routage, le
            protocole de transfert de données utilisé, l’événement et les
            terminaux utilisés ou leur emplacement.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            La plateforme web de Habble gère les informations d’identification
            et de localisation de la communication conformément à la loi en
            vigueur aux fins, par exemple, de la mise en œuvre et de
            l’utilisation des services, de la facturation et du développement
            technique. consentement, marketing. Les données peuvent également
            être utilisées pour la facturation d’autres fournisseurs de services
            dans la mesure où cela est nécessaire.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            La plateforme web de Habble peut également gérer les données
            d’identification en cas d’utilisation abusive, de violation de la
            sécurité des données et de réparation de panne.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Dans toutes les situations ci-dessus, nous ne traitons les données
            d’identification et de localisation que dans la mesure où cela est
            nécessaire pour accomplir une certaine tâche spécifique.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Utilisation des données de localisation
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Une méthode de localisation réelle où une autre personne peut suivre
            où se trouve une autre personne nécessite le consentement de la
            personne à être localisée. Le client peut ne pas être localisé du
            tout s’il refuse les services de géolocalisation.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            Si nous soumettons des informations de localisation aux fournisseurs
            de services de localisation, nous nous assurons par des moyens
            appropriés qu’il y a un consentement de la personne à localiser.
          </Text>{" "}
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Personnes autorisées à gérer les données d’identification et de
            localisation
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Seules des personnes spécifiques dont le travail nécessite l’accès à
            des données d’identification et de localisation, peuvent traiter ces
            données.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            En pratique, l’autorisation est uniquement accordée aux personnes
            effectuant des tâches liées à la facturation, à la maintenance ou au
            développement de réseaux ou de services de communication, à la
            prévention et à l’investigation des abus, au service client et au
            marketing. Les personnes ayant le droit de manipuler les données ne
            peuvent les gérer que dans la mesure requise pour effectuer des
            tâches individuelles.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Durée du traitement des données d’identification et de localisation
            et stockage des données{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous traitons les données d’identification et de localisation aussi
            longtemps que nécessaire à des fins de facturation, de développement
            technique, de réparation de pannes, de marketing, d’enquête sur une
            mauvaise utilisation ou de sécurité des données. Cependant, la
            manipulation n’a lieu que dans la mesure requise par les actions et
            sans compromettre indûment la confidentialité d’un message et la
            protection de la vie privée.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous stockons les données requises de la facturation pendant au
            moins un an à compter de la date d’échéance de la facture et pour
            une période n’excédant pas trois ans à compter de la date d’échéance
            de la facture, sauf nécessité de conserver les données pour une
            période plus longue. lié à la collecte de la facture. Sinon, les
            données sont stockées dans la mesure permise et requise par la
            législation pertinente.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Sites Web, le suivi des visites
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous collectons également des données concernant les visites de
            sites Web. Ces données comprennent l’adresse IP et le nom DNS
            correspondant, l’organisation qui a enregistré l’adresse IP, le nom
            et l’adresse de la page visitée, l’heure de chargement de la page et
            le type de navigateur.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Veuillez noter que l’adresse IP est une identification requise pour
            le fonctionnement d’Internet, utilisée pour diriger les messages
            transmis sur Internet vers les endroits appropriés. En règle
            générale, l’adresse IP n’est pas connectée à la personne qui utilise
            l’ordinateur, mais elle peut être connectée à l’organisation qui a
            enregistré l’adresse IP. La connexion d’adresse IP peut être établie
            à la demande des autorités.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Cookies
          </Text>
          <Text align="left" mt="15px" mb="15px">
            En tant que client de la plateforme web Habble, vous pouvez
            consulter nos sites Web de manière anonyme. Cependant, comme la
            majeure partie des sites Web, nous utilisons la technologie des
            cookies. Lorsque vous affichez notre site web, le cookie définit un
            numéro aléatoire pour le navigateur qui n’indique pas votre
            identité. Les cookies aident la plateforme web Habble à déterminer
            quelles sont les sections les plus populaires de ses sites Web, où
            vont les visiteurs et combien de temps y restent-ils. Les données
            sont utilisées pour mettre en œuvre et développer des services et
            cibler des publicités sur les sites Web.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Vous pouvez empêcher le stockage du cookie en modifiant les
            paramètres de votre navigateur. Dans certains cas, la prévention
            peut ralentir ou rendre impossible la navigation sur les pages ou le
            site Web.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Sécurité des données
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Nous assurons la sécurité des données de nos services en utilisant
            des méthodes proportionnées à la gravité et à la sophistication des
            menaces ainsi qu’au coût.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            La plateforme web Habble prend soin d’effectuer des actions visant à
            prévenir les violations de la sécurité des données ou à éliminer les
            perturbations qui affectent la sécurité des données. En outre, nous
            utilisons tous les moyens pour garantir que la confidentialité des
            messages ou la protection de la vie privée ne soit pas indûment
            compromise lors de l’exécution des actions ci-dessus.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            {" "}
            Nous fournissons des informations sur les actions liées à la
            sécurité des données de nos services et d’autres questions
            concernant la sécurité des données par le biais de canaux
            appropriés, tels que notre site Web ou les bulletins des clients.
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Afin de prévenir les violations de la sécurité des données et
            d’éliminer les perturbations affectant la sécurité des données, nous
            pouvons, entre autres, empêcher la réception de messages
            électroniques, supprimer les virus et autres logiciels malveillants
            des messages et prendre d’autres mesures techniques comparables.
            mesures nécessaires dans les limites autorisées et requises
            spécifiées dans la législation pertinente. Nous utilisons des
            mesures de protection physiques, administratives et techniques pour
            garder secrets les messages et les données d’identification transmis
            sur le réseau de communication. Ces actions diminuent le risque que
            des données vous concernant soient divulguées à des tiers et
            empêchent toute utilisation abusive ou autre accès non autorisé.
            Certains de nos services utilisent également des méthodes de
            cryptage normalisées.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            Veuillez noter qu’en tant qu’utilisateur des services de la
            plateforme web Habble, vous devez également utiliser les méthodes
            les plus appropriées pour assurer votre propre sécurité des données.
            Nous vous encourageons à stocker et utiliser nos services et vos
            terminaux avec soin et contrôler leur utilisation, par exemple en
            utilisant des codes sécurisés et des mots de passe uniques, et
            d’utiliser des services antivirus et de pare-feu suffisants et les
            garder ainsi que le système d’exploitation mis à jour.
          </Text>
          <Text align="left" mt="15px" mb="15px" fontWeight="800">
            Communication client et marketing direct
          </Text>
          <Text align="left" mt="15px" mb="15px">
            La plateforme web Habble envoie des messages clients concernant ses
            produits et services à ses clients via le consentement disponible
            dans le compte client.{" "}
          </Text>
          <Text align="left" mt="15px" mb="15px">
            La plateforme web Habble envoie également des messages de marketing
            direct en format électronique. Vous avez le droit d’interdire à la
            plateforme web de Habble d’envoyer des messages de marketing direct.
            Vous pouvez interdire le marketing en suivant les instructions
            incluses dans le message de marketing direct ou via votre compte
            client disponible sur notre site internet.
          </Text>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
