import { Input } from "@chakra-ui/react";

export const SearchBar = ({ searchTerm, onSearch }) => (
  <Input
    backgroundColor={"white"}
    width={""}
    placeholder="Search recipes..."
    value={searchTerm}
    onChange={onSearch}
  />
);
