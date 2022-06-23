import { Select } from "@chakra-ui/react";

export default function SelectMonth({ onChange, monthDelivered }) {
  return (
    <Select
      w={{ base: "45.8%", md: "32.1%" }}
      placeholder="Mois"
      onChange={onChange}
      value={monthDelivered}
    >
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
