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
import UploadedDocsFamily from "./UploadedDocsFamily";
import backendAPI from "../../services/backendAPI";

export default function DocumentCarouselFamily({ updated, setUpdated }) {
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState([]);
  const [profileDocuments, setProfileDocuments] = useState(["test"]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { freelancerId, familyId } = useParams();

  useEffect(() => {
    backendAPI
      .get(`api/coordinators/${freelancerId}/family/${familyId}/documents`)
      .then((res) => {
        setProfileDocuments(res.data);
      });
  }, [updated]);

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("name", fileType);

    backendAPI
      .post(`/api/family/${familyId}/file`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.warn(res);
        setUpdated(!updated);
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
              <option>Carte d'identit??</option>
              <option>SIRET</option>
              <option>Casier judiciaire</option>
              <option>Assurance RCP</option>
              <option>Certificat de formation aux premiers secours</option>
              <option>Agr??ment</option>
              <option>Dipl??me</option>
              <option>Permis de conduire</option>
              <option>Autre</option>
            </Select>
            <Button variant="outlineAlternative" w="100%" fontWeight="700">
              <label style={{ width: "100%" }} htmlFor="fileInputHandler">
                T??l??charger un fichier
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
              (La taille maximale du fichier est limit??e ?? 10 Mo, les types de
              fichiers autoris??s au format image : png, jpg, jpeg.)
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
        {profileDocuments &&
          profileDocuments.map((elem) => (
            <UploadedDocsFamily
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
