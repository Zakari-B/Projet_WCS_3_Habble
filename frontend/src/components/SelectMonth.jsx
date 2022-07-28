import { Select } from "@chakra-ui/react";

export default function SelectMonth({
  onChange,
  monthDelivered,
  defaultMonth,
}) {
  return (
    <Select
      w={{ base: "45.8%", md: "32.1%" }}
      placeholder="Mois"
      onChange={onChange}
      value={monthDelivered}
    >
      <option value="Janvier" selected={defaultMonth === "Janvier"}>
        Janvier
      </option>
      <option value="Février" selected={defaultMonth === "Février"}>
        Février
      </option>
      <option value="Mars" selected={defaultMonth === "Mars"}>
        Mars
      </option>
      <option value="Avril" selected={defaultMonth === "Avril"}>
        Avril
      </option>
      <option value="Mai" selected={defaultMonth === "Mai"}>
        Mai
      </option>
      <option value="Juin" selected={defaultMonth === "Juin"}>
        Juin
      </option>
      <option value="Juillet" selected={defaultMonth === "Juillet"}>
        Juillet
      </option>
      <option value="Août" selected={defaultMonth === "Août"}>
        Août
      </option>
      <option value="Septembre" selected={defaultMonth === "Septembre"}>
        Septembre
      </option>
      <option value="Octobre" selected={defaultMonth === "Octobre"}>
        Octobre
      </option>
      <option value="Novembre" selected={defaultMonth === "Novembre"}>
        Novembre
      </option>
      <option value="Décembre" selected={defaultMonth === "Décembre"}>
        Décembre
      </option>
    </Select>
  );
}
