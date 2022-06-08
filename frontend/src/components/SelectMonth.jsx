import { Select } from "@chakra-ui/react";

export default function SelectMonth() {
  return (
    <Select w="32.1%" placeholder="Mois">
      <option>Janvier</option>
      <option>Février</option>
      <option>Mars</option>
      <option>Avril</option>
      <option>Mai</option>
      <option>Juin</option>
      <option>Juillet</option>
      <option>Août</option>
      <option>Septembre</option>
      <option>Octobre</option>
      <option>Novembre</option>
      <option>Décembre</option>
    </Select>
  );
}
