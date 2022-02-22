import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export type ActivityHeaderProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  walletTitle: string;
  walletDescription: string;
  transDate: string;
  balance: string;
  bgColor: string;
};

const ActivityItem = ({
  title,
  subtitle,
  icon,
  walletTitle,
  walletDescription,
  transDate,
  balance,
  bgColor
}: ActivityHeaderProps) => {
  return (
    <Flex justifyContent={"space-between"} alignItems="center" mt={2}>
      <Flex alignItems="center">
        <Box bgColor={bgColor} padding={3} rounded="lg">
          {icon}
        </Box>
        <Box ml={3}>
          <Text fontSize={"2xl"} fontWeight="bold">
            {title}
          </Text>
          <Text fontWeight={"semibold"} color="gray.500">
            {subtitle}
          </Text>
        </Box>
      </Flex>

      <Box>
        <Text fontSize={"xl"} fontWeight="bold">
          {walletTitle}
        </Text>
        <Text fontWeight={"semibold"} color="gray.500">
          {walletDescription}
        </Text>
      </Box>
      <Box>
        <Text fontSize={"xl"} fontWeight="bold">
          {transDate}
        </Text>
        <Text fontWeight={"semibold"} color="gray.500">
          Last Payment
        </Text>
      </Box>
      <Box>
        <Text fontSize={"xl"} fontWeight="bold">
          {balance}
        </Text>
        <Text fontWeight={"semibold"} color="gray.500">
          Balance
        </Text>
      </Box>
    </Flex>
  );
};

export default ActivityItem;
