import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const CryptoCard = ({
  title,
  icon,
  value,
  conversion,
  bgColor,
  index,
}: {
  title: string;
  icon: React.ReactNode;
  value: String;
  conversion: String;
  bgColor: String;
  index: number;
}) => {
  return (
    <Box
      ml={index === 0 ? "0" : "1.5rem"}
      bgColor={`${bgColor}`}
      maxW="52"
      h={"64"}
      p={4}
      borderRadius={"md"}
    >
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"bold"}>{title}</Text>
        <FiMoreVertical />
      </Flex>
      {icon}
      <Box mt={2}>
        <Text fontWeight={"semibold"} fontSize="2xl">
          {value}
        </Text>
        <Text fontWeight={"semibold"} fontSize="sm">
          {conversion}
        </Text>
      </Box>
    </Box>
  );
};

export default CryptoCard;
