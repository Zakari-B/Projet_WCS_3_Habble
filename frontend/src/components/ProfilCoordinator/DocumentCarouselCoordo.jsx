import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Flex,
  Heading,
  Button,
  Select,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import UploadedDocsCoordo from "./UploadedDocsCoordo";
import backendAPI from "../../services/backendAPI";

export default function DocumentCarouselCoordo({ updated, setUpdated }) {
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState([]);
  const [profileCoordoDocuments, setProfileCoordoDocuments] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { coordinatorId } = useParams();

  useEffect(() => {
    backendAPI
      .get(`/api/coordinator/${coordinatorId}/documents`)
      .then((res) => {
        setProfileCoordoDocuments(res.data);
      });
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("name", fileType);

    backendAPI
      .post("/api/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.warn(res);
        onClose();
      });
  };

  return (
    <Flex
      direction="column"
      bgColor="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 2px 6px"
      p="25px"
      borderRadius="21px"
      minW="100%"
      gap="40px"
    >
      <Flex justify="space-between" alignItems="center">
        <Heading as="h2" color="purple.light" fontSize="1.5em" fontWeight="700">
          Documents
        </Heading>
        <Button variant="outline_Pink" onClick={onOpen}>
          Ajouter
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth={{ base: "95%", lg: "50vw" }}>
          <ModalHeader
            bgColor="background.gray"
            pt="30px"
            pb="40px"
            paddingX="50px"
          >
            Ajouter un nouveau document
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as="h2" fontSize="1.4rem" fontWeight="700">
              Type de document
            </Heading>
            <Select
              onChange={(e) => setFileType(e.target.value)}
              margin="20px auto"
              id="docType"
              placeholder="--Choisir--"
            >
              <option>Carte d'identité</option>
              <option>SIRET</option>
              <option>Casier judiciaire</option>
              <option>Assurance RCP</option>
              <option>Certificat de formation aux premiers secours</option>
              <option>Agrément</option>
              <option>Diplôme</option>
              <option>Permis de conduire</option>
              <option>Autre</option>
            </Select>
            <Button variant="outlineAlternative" w="100%" fontWeight="700">
              <label style={{ width: "100%" }} htmlFor="fileInputHandler">
                Télécharger un fichier
                <input
                  id="fileInputHandler"
                  style={{ display: "none" }}
                  type="file"
                  accept="application/pdf, image/png, image/jpeg, image/jpg"
                  onChange={(e) => setFiles(e.target.files)}
                />
              </label>
            </Button>

            <Text color="gray" marginTop="20px">
              (La taille maximale du fichier est limitée à 10 Mo, les types de
              fichiers autorisés au format image : png, jpg, jpeg.)
            </Text>
          </ModalBody>

          <ModalFooter justifyContent={{ base: "center", md: "flex-end" }}>
            <Button
              onClick={handleForm}
              type="submit"
              variant="solid_PrimaryColor"
              mr={3}
            >
              Enregistrer
            </Button>
            <Button variant="ghost" fontWeight="700" onClick={onClose}>
              Annuler
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        wrap="wrap"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-evenly"
        alignItems="center"
        alignSelf="center"
        w={{ base: "100%", "2xl": "90%" }}
        m="auto"
      >
        {profileCoordoDocuments &&
          profileCoordoDocuments.map((elem) => (
            <UploadedDocsCoordo
              key={elem.id}
              data={elem}
              updated={updated}
              setUpdated={setUpdated}
            />
          ))}
      </Flex>
    </Flex>
  );
}
