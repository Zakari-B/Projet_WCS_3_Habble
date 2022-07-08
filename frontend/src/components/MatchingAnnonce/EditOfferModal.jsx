import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Box,
  ModalBody,
  ModalCloseButton,
  Select,
  Flex,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  FormLabel,
  Input,
  ModalFooter,
  useToast,
  Button,
  Textarea,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  updateItemList,
  getOneItemfromtwoLists,
} from "../../services/ProfileProUtils";

export default function EditOfferModal({ isOpen, onClose }) {
  const { freelancerId } = useParams();
  const { id } = useParams();
  const toast = useToast();
  const [currentOffer, setCurrentOffer] = useState({});
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [periodicity, setPeriodicity] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    getOneItemfromtwoLists(
      "freelancers",
      "annonces",
      "offers",
      freelancerId,
      id
    ).then((res) => {
      setCurrentOffer(res.data[0]);
      setPrice(res.data[0].price);
      setTime(res.data[0].availableIn.split(" ")[0]);
      setPeriodicity(res.data[0].availableIn.split(" ")[1]);
      setDescription(res.data[0].description);
    });
  }, []);

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handlePeriodicityChange = (e) => {
    setPeriodicity(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleReset = () => {
    setPrice("");
    setTime("");
    setPeriodicity("");
    setDescription("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateItemList("freelancers", "offers", freelancerId, currentOffer.id, {
      price,
      availableIn: `${time} ${periodicity}`,
      description,
    })
      .then(() =>
        toast({
          title: "Votre Proposition a bien été modifiée",
          status: "success",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        })
      )
      .catch(() =>
        toast({
          title: "Votre proposition n'a pas pu être modifiée",
          status: "error",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        })
      );

    handleReset();
    onClose();
  };

  return (
    <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="0px 0px 21px 21px">
        <ModalHeader
          paddingY="30px"
          color="purple.average"
          fontWeight="600"
          fontSize="lg"
          bgColor="#FAFAFA"
        >
          Modifier votre proposition pour cette offre
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingY="30px">
          <Flex
            direction="column"
            description
            justify="flex-start"
            alignItems="flex-start"
            gap="20px"
          >
            <Box as="form">
              <FormLabel
                htmlFor="price"
                fontSize="xl"
                fontWeight="bold"
                lineHeight="28px"
                color="purple.average"
                mt="1rem"
              >
                Votre Offre
              </FormLabel>
              <Flex alignItems="center" gap="20px">
                <NumberInput
                  defaultValue={0}
                  min={0}
                  step={0.2}
                  precision={2}
                  value={price && parseFloat(price, 10)}
                  onChange={(value) => setPrice(parseFloat(value, 10))}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                €
              </Flex>
              <FormLabel
                htmlFor="time"
                fontSize="xl"
                fontWeight="bold"
                lineHeight="28px"
                color="purple.average"
                mt="1rem"
              >
                Dans combien de temps pouvez vous intervenir?
              </FormLabel>
              <Flex gap="20px">
                <Input
                  name="time"
                  placeholder="15"
                  onChange={handleTimeChange}
                  value={time}
                />
                <Select onChange={handlePeriodicityChange} value={periodicity}>
                  <option value="" disabled selected>
                    Période
                  </option>{" "}
                  <option value="Jours">Jours</option>
                  <option value="Semaines">Semaines</option>
                  <option value="Mois">Mois</option>
                </Select>
              </Flex>
              <FormLabel
                htmlFor="message"
                fontSize="xl"
                fontWeight="bold"
                lineHeight="28px"
                color="purple.average"
                mt="1rem"
              >
                Votre Message
              </FormLabel>
              <Textarea
                name="message"
                placeholder="Votre Message"
                onChange={handleDescriptionChange}
                value={description}
                minH="150px"
              />
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter w="100%" gap="30px" m="auto">
          <Button
            variant="solid_PrimaryColor"
            type="submit"
            onClick={handleSubmit}
          >
            Envoyer la proposition
          </Button>
          <Button color="gray.dark" mr={3} onClick={onClose} variant="link">
            Annuler
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
EditOfferModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
