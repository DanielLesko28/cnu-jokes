import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ placeholderText, onChange }) => {
  return (
    <Box py="4">
      <InputGroup>
        <Input
          variant="pill"
          placeholder={placeholderText}
          onChange={(e) => onChange(e.target.value)}
          px="2"
        />
        <InputRightElement children={<FaSearch cursor="pointer" />} />
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
