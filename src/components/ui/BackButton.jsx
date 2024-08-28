import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const BackButton = ({ onClick }) => {
  return (
    <IconButton
      icon={<ChevronLeftIcon />}
      aria-label="Go back"
      onClick={onClick}
      variant="ghost"
      fontSize={"3xl"}
      color={"blue.500"}

      
      
    />
  );
};
