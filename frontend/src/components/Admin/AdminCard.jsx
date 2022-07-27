import { Flex, Button } from "@chakra-ui/react";

import backendAPI from "../../services/backendAPI";

export default function AdminCard({ user, updated, setUpdated }) {
  const unsetAdmin = () => {
    backendAPI.put(`api/users/${user.id}`, {
      isAdmin: false,
    });
    setUpdated(!updated);
  };

  return (
    <Flex justifyContent="center" alignSelf="center" w="90%" flexWrap="wrap">
      <span style={{ fontWeight: "bold" }}>ID : &nbsp;</span> &nbsp;
      {user.id} &nbsp;&nbsp;
      <span style={{ fontWeight: "bold" }}>Nom : &nbsp;</span>
      {user.firstname} {user.lastname}
      &nbsp;&nbsp; <span style={{ fontWeight: "bold" }}>Admin :</span> &nbsp;
      <Button
        alignSelf="center"
        variant="solid_PrimaryColor"
        onClick={() => unsetAdmin()}
        h="1.1rem"
      >
        {" "}
        Retirer admin.
      </Button>
    </Flex>
  );
}
