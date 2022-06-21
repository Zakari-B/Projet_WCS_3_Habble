// import {
//   Flex,
//   Heading,
//   Text,
//   Divider,
//   useDisclosure,
//   Button,
// } from "@chakra-ui/react";
// import { EditIcon } from "@chakra-ui/icons";
// import { useContext } from "react";
// //import PropTypes from "prop-types";
// import AnnonceFormContext from "../../../contexts/AnnonceFormContext";

// import DeleteConfirmModal from "../../DeleteConfirmModal";

// export default function AnnonceCard({ annonce }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { isVisible, setIsVisible } = useContext(AnnonceFormContext);

//   const showForm = () => {
//     setIsVisible(!isVisible);
//   };
//   return (
//     <Flex direction="column" gap="10px" paddingY="10px">
//       <Heading as="h2" color="purple.average" fontSize="1.5em" fontWeight="700">
//         {annonce.title}
//       </Heading>
//       <Heading as="h3" color="purple.average" fontSize="16px" fontWeight="600">
//         {annonce.expertise}
//       </Heading>
//       <Heading as="h4" color="purple.average" fontSize="14px" fontWeight="600">
//         {annonce.location}
//       </Heading>
//       <Text color="purple.average" fontSize="14px">
//         {annonce.description}
//       </Text>
//       <Button
//         leftIcon={<EditIcon />}
//         variant="text"
//         color="pink.light"
//         padding="0px"
//         onClick={showForm}
//       >
//         Modifier
//       </Button>
//       <DeleteConfirmModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} />

//       <Divider paddingTop="10px" colorScheme="gray" />
//     </Flex>
//   );
// }

// // AnnonceCard.propTypes = {
// //   annonce: PropTypes.shape({
// //     id: PropTypes.number.isRequired,
// //     title: PropTypes.string.isRequired,
// //     description: PropTypes.string.isRequired,
// //     expertise: PropTypes.string.isRequired,
// //     location: PropTypes.string.isRequired,
// //   }).isRequired,
// // };

import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import PropTypes from "prop-types";
import AnnonceFormContext from "../../../contexts/AnnonceFormContext";

import DeleteConfirmModal from "../../DeleteConfirmModal";

export default function AnnonceCard({ annonce }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isVisible, setIsVisible } = useContext(AnnonceFormContext);

  const showForm = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Flex direction="column" gap="10px" paddingY="10px">
      <Heading as="h2" color="purple.average" fontSize="1.5em" fontWeight="700">
        {annonce.title}
      </Heading>
      <Heading as="h3" color="purple.average" fontSize="16px" fontWeight="600">
        {annonce.description}
      </Heading>
      <Heading as="h4" color="purple.average" fontSize="14px" fontWeight="600">
        {annonce.location}
      </Heading>
      <Text color="purple.average" fontSize="14px">
        {annonce.expertise}
      </Text>
      <Flex gap="20px">
        <Button
          leftIcon={<EditIcon />}
          variant="text"
          color="pink.light"
          padding="0px"
          onClick={showForm}
        >
          Modifier
        </Button>
        <Button
          rightIcon={<DeleteIcon />}
          variant="text"
          color="pink.light"
          padding="0px"
          onClick={onOpen}
        >
          Supprimer
        </Button>

        <DeleteConfirmModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Divider paddingTop="10px" colorScheme="gray" />
    </Flex>
  );
}

AnnonceCard.propTypes = {
  annonce: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    expertise: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
