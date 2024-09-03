import { Checkbox, Flex } from "@chakra-ui/react";

export const HealthFilter = ({ selectedFilters, onFilterChange }) => {
  const healthOptions = ["Vegan", "Vegetarian", "Pescatarian"];

  return (
    <Flex flexDirection={["column", "row"]} align="start" spacing={2} >
      {healthOptions.map((option) => (
        <Checkbox
        pl= {[0, 2]}
          key={option}
          isChecked={selectedFilters.includes(option)}
          onChange={() => onFilterChange(option)}
        >
          {option}
        </Checkbox>
      ))}
    </Flex>
  );
};
