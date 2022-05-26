import {
  Text,
  Input,
  Button,
  Image,
  Box,
  Flex,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

function ProAccueil() {
  const slide = keyframes`0% {background-position: 0% 0%} 100% {background-position: 100% 0%} 100% {background-position: 50% 0%}`;

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${slide} 0.5s linear`;

  return (
    <Box marginLeft="1.5rem" marginRight="1.5rem">
      <Text align="left" variant="titleH1" marginBottom="2rem">
        Professionnels du handicap,
        <br />
        Valorisez votre savoir-faire
        <br />
        et trouvez rapidement des missions
      </Text>
      <Flex align="center" marginBottom="2rem">
        <Image
          boxSize="2.3rem"
          src="../src/assets/checkbox.png"
          marginRight="0.5rem"
        />
        <Text variant="titleH2">Développez votre visibilité gratuitement</Text>
      </Flex>
      <Flex align="center" marginBottom="2rem">
        <Image
          boxSize="2.3rem"
          src="../src/assets/checkbox.png"
          marginRight="0.5rem"
        />
        <Text variant="titleH2">Choisissez vos missions</Text>
      </Flex>
      <Flex align="center" marginBottom="2.5rem">
        <Image
          boxSize="2.3rem"
          src="../src/assets/checkbox.png"
          marginRight="0.5rem"
        />
        <Text variant="titleH2">L'administratif simplifié</Text>
      </Flex>
      <Input
        borderRadius="4px"
        size="lg"
        marginBottom="2rem"
        placeholder="Saisissez votre email*"
        _placeholder={{
          fontSize: "0.7rem",
          color: "gray.300",
          fontWeight: "semibold",
        }}
      />
      <Button variant="gradient" animation={animation}>
        Je m'inscris maintenant
      </Button>
      <Flex direction="column" align="center" marginTop="4.5rem">
        <Image
          boxSize="2.3rem"
          marginBottom="1rem"
          src="../src/assets/coche.png"
          alt="coche"
        />
        <Text variant="titleH3" marginBottom="1rem">
          Développez votre visibilité
        </Text>
        <Text variant="corps">
          Aucun frais pour vous rendre visible et accéder directement à notre
          communauté d'utilisateurs. Dès votre inscription, vous serez référencé
          dans notre annuaire.
        </Text>
        <Box
          bgGradient="linear-gradient(to-r, #4d1582 0%, #a7197f 51%, #4d1582 100%)"
          bgSize="200%"
          height="10px"
          width="100%"
        />
      </Flex>
      <Flex direction="column" align="center" marginTop="3rem">
        <Image
          boxSize="2.3rem"
          marginBottom="1rem"
          src="../src/assets/coche.png"
          alt="coche"
        />
        <Text variant="titleH3" marginBottom="1rem">
          Choisissez vos missions
        </Text>
        <Text variant="corps">
          Choisissez le type de service à fournir, le public visé, vos heures de
          travail et votre zone d'intervention. Quoi qu'il arrive c'est vous qui
          décidez.
        </Text>
      </Flex>

      <Flex direction="column" align="center" marginTop="3rem">
        <Image
          boxSize="2.3rem"
          marginBottom="1rem"
          src="../src/assets/coche.png"
          alt="coche"
        />
        <Text variant="titleH3" marginBottom="1rem">
          L'administratif simplifié
        </Text>
        <Text variant="corps">
          La plateforme sécurisée Habble gère pour vous l'administratif pour que
          vous puissiez vous concentrer sur votre travail en toute tranquillité.
        </Text>
      </Flex>
      <div className="fonctionnement">
        <h3>Comment ça marche ?</h3>
        <div className="detail-fonctionnement">
          <h4>1. Décrivez vos prestations</h4>
          <p>Dites-nous votre spécialité et vos champs d'intervention</p>
        </div>
        <div className="detail-fonctionnement">
          <h4>2. Choisissez</h4>
          <p>
            Recevez des demandes de personnes ou de services en lien avec vos
            compétences. Echangez pour affiner les détails de la mission.
          </p>
        </div>
        <div className="detail-fonctionnement">
          <h4>3. Réalisez</h4>
          <p>
            La plateforme sécurisée Habble gère pour vous l'administratif pour
            vous permettre de vous consacrer à votre coeur de métier.
          </p>
        </div>
      </div>
      <div className="avantages-reseau">
        <h3>
          Rejoignez le 1er réseau spécialisé dans l'accompagnement du handicap
          et des problèmes de santé.
        </h3>
        <p>
          Vous êtes engagé pour l'autonomie et l'inclusion des personnes en
          situation de handicap? Faites-vous connaître.
        </p>
        <p>
          Que vous soyez en libéral, auto-entrepreneur, un service à la
          personne, un distributeur d'aides techniques, une association
          médico-sociale ou étudiant en santé/social, développez votre activité
          et entrez facilement en relation avec les aidants grâce à notre
          application dédiée.
        </p>
        <Input placeholder="Saisissez votre email*" />
        <Button variant="gradient">Je m'inscris</Button>
      </div>
      <img src="../src/assets/access-care-network.png" alt="Yoga" />
      <section className="process-pro">
        <div className="description-process">
          <h4>Pas d'abonnement coûteux</h4>
          <p>
            Dès votre inscription, vous êtes référencé sur l'annuaire. Notre
            service est gratuit.
          </p>
        </div>
        <div className="description-process">
          <h4>Un outil adapté à vos besoins</h4>
          <p>
            Un tableau de bord dédié pour suivre simplement vos prestations :
            agenda, cahier de liaison, suivi.
          </p>
        </div>
        <div className="description-process">
          <h4>C'est vous le patron</h4>
          <p>
            Vous souhaitez développer votre activité ? Vous recherchez des
            missions, prestations de services, contrats (CDD, gré à gré,...),
            définissez vous même vos critères.
          </p>
        </div>
      </section>
      <section className="secteurs-activite">
        <div className="icones-secteurs">
          <div className="icone-texte">
            <Image
              boxSize="3rem"
              src="../src/assets/house.svg"
              alt="Soutien domicile"
            />
            <p>Soutien à domicile</p>
          </div>
          <div className="icone-texte">
            <Image boxSize="3rem" src="../src/assets/care.svg" alt="Santé" />
            <p>Santé</p>
          </div>
          <div className="icone-texte">
            <Image
              boxSize="3rem"
              src="../src/assets/psychology-head.svg"
              alt="Bien-être"
            />
            <p>Bien être</p>
          </div>
          <div className="icone-texte">
            <Image
              boxSize="3rem"
              src="../src/assets/education.svg"
              alt="Enseignement"
            />
            <p>Enseignement, Education</p>
          </div>
          <div className="icone-texte">
            <Image
              boxSize="3rem"
              src="../src/assets/wheelchair_transport.svg"
              alt="Transport"
            />
            <p>Transport, Aides techniques</p>
          </div>
          <div className="icone-texte">
            <img src="" alt="Administratif et Social" />
            <p>Administratif et Social</p>
          </div>
        </div>
        <h3>N'attendez plus pour proposer vos services</h3>
        <p>
          Vous cherchez à compléter vos revenus, à valorisez votre offre ou à
          développer vos missions ? Notre plateforme de mise en relation vous
          simplifie la vie et réduit votre temps à consacrer à la prospection et
          à l'administratif.
        </p>
      </section>
      <section className="features">
        <h3>Fonctionnalités</h3>
        {/* carroussel */}
      </section>
      <section className="join-us">
        <h3>
          Vous êtes en situation de handicap, avec des problèmes de santé ou un
          proche ?
        </h3>
        <p>Trouvez facilement l'aide dont vous avez besoin !</p>
        <Input placeholder="Saisissez votre email" />
        <Button>Je m'inscris, c'est gratuit !</Button>
      </section>
      <section className="partners">
        <h3>Partenaires et Soutiens</h3>
        <Box boxSize="10rem">
          <Image
            src="../src/assets/logo_horizontal_re_couleur_nord.png"
            alt="Réseau Entreprendre"
          />
        </Box>
        <Box boxSize="10rem">
          <Image src="../src/assets/logo-evident.png" alt="Evident" />
        </Box>
      </section>
    </Box>
  );
}

export default ProAccueil;
