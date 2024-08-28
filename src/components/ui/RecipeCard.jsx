import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      textAlign={"center"}
      {...props}
    >
      {children}
    </CTag>
  );
};
