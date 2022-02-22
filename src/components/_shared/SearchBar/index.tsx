import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <Box>
      <InputGroup
        bgColor={"gray.50"}
        borderRadius={"full"}
        borderColor={"transparent"}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="gray.300" />}
        />
        <Input type="text" borderRadius={"full"} placeholder="Search...." />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
