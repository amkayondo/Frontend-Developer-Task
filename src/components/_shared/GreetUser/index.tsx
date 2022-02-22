import { Badge, Flex, Text } from "@chakra-ui/react";
import React from "react";

const GreetUser = ({
  firstName,
  notificationCount,
  style,
}: {
  firstName: string;
  notificationCount: number;
  style: any;
}) => {
  return (
    <Flex style={style}>
      <Text fontSize="4xl" fontWeight={"bold"}>
        Hi,
      </Text>{" "}
      &nbsp;
      <Text fontSize="4xl">
        {firstName}
        <Badge
          ml="1"
          bgColor="red.500"
          mt={-12}
          borderRadius="full"
          p={1}
          color="#fff"
        >
          {notificationCount}
        </Badge>
      </Text>
    </Flex>
  );
};

export default GreetUser;
