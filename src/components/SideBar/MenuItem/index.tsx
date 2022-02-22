import { Flex, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const MenuItem = ({ icon, name, isActive, onClick }: {
    icon: any;
    name: string;
    isActive: boolean;
    onClick: () => void;
}) => {
  return (
    <GridItem
      cursor="pointer"
      _hover={{
        backgroundColor: "gray.100",
        color: "gray.800",
        borderRadius: "5px",
      }}
      onClick={onClick}
    >
      <Flex
        justifyContent={"center"}
        flexDirection="column"
        alignItems={"center"}
      >
        <Flex
          bgColor={isActive ? "purple.500" : "gray.100"}
          h={"50px"}
          w={"50px"}
          alignItems="center"
          justifyContent={"center"}
          borderRadius="md"
        >
          {icon} 
        </Flex>
        <Text
          fontSize="sm"
          color={isActive ? "#000" : "gray"}
          mt={2}
          fontWeight={isActive ? "bold" : "normal"}
        >
          {name}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default MenuItem;
