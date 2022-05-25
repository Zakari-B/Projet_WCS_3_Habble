import {
  Flex,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function Mission() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Flex>
        <Flex>
          <Heading> Habble : votre pouvoir d'agir</Heading>
          <Text>
            La première plateforme de services gratuite de professionnels du
            handicap et du soin.
          </Text>
          <Flex>
            <Flex>
              <Flex>
                <Image src="" alt="" />
                <Text>Soutien a domicile</Text>
              </Flex>
              <Flex>
                <Image src="" alt="" />
                <Text>Santé</Text>
              </Flex>
              <Flex>
                <Image src="" alt="" />
                <Text>Bien être</Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex>
                <Image src="" alt="" />
                <Text>Enseignement, Education</Text>
              </Flex>
              <Flex>
                <Image src="" alt="" />
                <Text>Transport, Aides techniques</Text>
              </Flex>
              <Flex>
                <Image src="" alt="" />
                <Text>Administratif et Social</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Image />
      </Flex>
      <Flex>
        <Heading>Notre mission</Heading>
        <Text>
          L’objectif de notre service est de favoriser la qualité de vie des
          personnes en situation de handicap ou atteintes de problèmes de santé.
          Il vise à proposer des solutions de répit, d'accompagnement, de soin
          et de soutien. Il référence toutes les ressources nécessaires à
          l’accompagnement : information,aides humaines, techniques et
          technologiques.
        </Text>
        <UnorderedList>
          Habble propose deux services complémentaires :
          <ListItem>
            Habble, application pour faciliter l'autonomie et le droit au repit
            des personnes en situation de handicap et/ou connaissant des
            problèmes de santé. Présentée sous forme d'annuaire, elle permet de
            trouver des intervenants disponibles et compétents pour les
            accompagner ponctuellement ou durablement : garde, aide aux devoirs,
            aide administrative, repas, transport, bien-être... Pour les
            professionnels (libéraux, autoentrepreneurs, société,
            association,...), elle permet de mettre en avant leur savoir faire
            et de faire connaître leur offre de services.
          </ListItem>
          <ListItem>
            Handiplanner, plateforme de services coordonnés dédiée aux acteurs
            du médico social et des services à la personne. Elle vise à
            valoriser leur offre et coordonner les interventions. Elle facilite
            la continuité des accompagnements ainsi que le soutien auprès des
            aidants. Elle est interopérable avec les dossiers de l'usager et les
            outils de gestion préexistants.
          </ListItem>
        </UnorderedList>
        <Text>
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
        <Text>
          Les services proposés doivent ainsi permettre sans délai la définition
          d’un plan de compensation en adéquation avec les besoins et capacités
          de la personne en situation de handicap ou atteinte de problèmes de
          santé. Ceux-ci doivent permettre un accompagnement adapté, simple et
          sans délai et enfin faciliter le quotidien de la personne et de son
          proche de soutien.
        </Text>
      </Flex>
      <Flex>
        <Box>
          <Button onClick={onOpen}>
            <Image src="" alt="" />
            <Text>
              Vous êtes en situation de handicap, avec un problème santé ou un
              proche aidant
            </Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Heading>
                  Trouvez tous les professionnels du handicap de votre secteur
                  susceptibles de vous accompagner.
                </Heading>
                <Image src="" />
                <Flex>
                  <Flex>
                    <Text>Inscrivez vous et décrivez votre besoin</Text>
                    <Link href="/SignupForm">
                      <Button>M'incrire maintenant</Button>
                    </Link>
                  </Flex>
                  <Flex>
                    <Text>
                      N'hésitez pas également à soutenir le développement de
                      notre service
                    </Text>
                    <Link href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U">
                      <Button>Faire un don</Button>
                    </Link>
                  </Flex>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
        <Box>
          <Button onClick={onOpen}>
            <Image src="" alt="" />
            <Text>
              Vous êtes un travailleur social, professionnel de santé en libéral
              ou auto-entrepreneur
            </Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Heading>Inscrivez vous et partagez vos compétences</Heading>
                <Image src="" />
                <Flex>
                  <Flex>
                    <Text>
                      Renseignez vos disponibilités et trouvez des missions
                    </Text>
                    <Link href="/SignupForm">
                      <Button>M'incrire maintenant</Button>
                    </Link>
                  </Flex>
                  <Flex>
                    <Text>
                      N'hésitez pas également à soutenir le développement de
                      notre service
                    </Text>
                    <Link href="https://www.paypal.com/donate/?hosted_button_id=ANWRC6DX6X56U">
                      <Button>Faire un don</Button>
                    </Link>
                  </Flex>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
        <Box>
          <Button onClick={onOpen}>
            <Image src="" alt="" />
            <Text>
              Vous êtes un établissement médico social, un service à domicile,
              un fabricant ou distributeur de matériel
            </Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Heading>
                  Valorisez votre offre de service, de prestations ou de vente.
                </Heading>
                <Image src="" />
                <Flex>
                  <Flex>
                    <Text>
                      Inscrivez-vous et détaillez vos prestations et services.
                    </Text>
                    <Link href="/SignupForm">
                      <Button>M'incrire maintenant</Button>
                    </Link>
                  </Flex>
                  <Flex>
                    <Text>
                      Vous souhaitez créer votre propre plateforme, nous sommes
                      là pour vous accompagner.
                    </Text>
                    <Link href="/Contact">
                      <Button> Demande de rendez-vous</Button>
                    </Link>
                  </Flex>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
      <Flex>
        <Heading>Pourquoi s'inscrire ?</Heading>
        <Text>
          Notre service de mise en relation est gratuit. Dès votre inscription
          il vous est possible de déposer votre annonce ou de trouver un
          intervenant.
        </Text>
        <Text>
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
      <Flex>
        <Heading>Pourquoi nous aider ?</Heading>
        <Text>
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
      <Flex>
        <Flex>
          <Heading>Fonctionnalités et principes clés</Heading>
          <Text>BLa</Text>
        </Flex>
        <Grid templateColumns="repeat(9, 1fr)" templateRows="repeat(8, 1fr)">
          <GridItem colStart={2} colEnd={3} rowStart={1} rowEnd={2}>
            <Button bgColor="yellow">
              <Image src="" alt="" />
            </Button>
          </GridItem>
          <GridItem colStart={5} colEnd={6} rowStart={1} rowEnd={2}>
            <Button bgColor="blue">
              <Image src="" alt="" />
            </Button>
          </GridItem>
          <GridItem colStart={8} colEnd={9} rowStart={1} rowEnd={2}>
            <Button bgColor="red">
              <Image src="" alt="" />
            </Button>
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
          <GridItem colStart={2} colEnd={4} rowStart={3} rowEnd={5}>
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/top-left.svg"
              w="100%"
            />
          </GridItem>
          <GridItem colStart={4} colEnd={7} rowStart={4} rowEnd={6}>
            <Box bgColor="pink" borderRadius="100%" w="50%" h="100%" m="auto">
              Habble
            </Box>
          </GridItem>
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
            <Button bgColor="yellow">
              <Image src="" alt="" />
            </Button>
          </GridItem>
          <GridItem colStart={5} colEnd={6} rowStart={8} rowEnd={9}>
            <Button bgColor="blue">
              <Image src="" alt="" />
            </Button>
          </GridItem>
          <GridItem colStart={8} colEnd={9} rowStart={8} rowEnd={9}>
            <Button bgColor="red">
              <Image src="" alt="" />
            </Button>
          </GridItem>
        </Grid>
      </Flex>
    </div>
  );
}

export default Mission;
