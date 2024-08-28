import { Box, Text,} from "@chakra-ui/layout";
import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      m={1}
      textTransform={"uppercase"}
      fontSize={"xs"}
      {...props}
    >
      {children}
    </CTag>
  );
};


export const NutrientBox = ({ quantity, unit, label }) => {
  return (
    <Box>
      {Math.round(quantity)} {unit}
      <Text textTransform={"uppercase"} fontSize={"xs"}>
        <strong>{label}</strong>
      </Text>
    </Box>
  );
};

