import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { SiLitecoin } from "react-icons/si";

const LeftSideBar = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems="center" mt="2">
        <Text>Quit</Text>
        <Text>Personal</Text>
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          borderRadius={"lg"}
        />
      </Flex>
      <Flex justifyContent={"space-between"} alignItems="center" mt={6}>
        <Text fontSize="2xl" fontWeight="bold">
          Payments
        </Text>
        <Button bg={"#fff"}>Clear</Button>
      </Flex>
      <Flex flexDirection={"column"} mt="5">
        {[
          {
            icon: "home",
            recievedTokens: "LTC",
            amount: "+ 15.00 USD",
            date: "12/12/2020 12:45",
          },
          {
            icon: "home",
            recievedTokens: "LTC",
            amount: "+ 15.00 USD",
            date: "12/12/2020 12:45",
          },
        ].map((item, index) => (
          <Box
            boxShadow={index === 0 ? "2xl" : "xs"}
            rounded="md"
            bg="white"
            key={index}
            bgColor="#fff"
            width={"100%"}
            height={"130"}
            mt={2}
            p={2}
          >
            <Flex alignItems={"center"} justifyContent="space-between">
              <Flex alignItems={"center"}>
                <Flex
                  alignItems={"center"}
                  justifyContent="center"
                  bgColor={"gray.100"}
                  borderRadius="full"
                  w="30px"
                  h="30px"
                >
                  <SiLitecoin size={20} />
                </Flex>
                <Text fontWeight={"bold"} ml={2}>
                  Recived {item.recievedTokens}
                </Text>
              </Flex>
              <Badge ml={2} borderRadius={"md"}>
                {item.amount}
              </Badge>
            </Flex>
            <Flex alignItems={"center"} justifyContent="space-between" mt={12}>
              <Text>{item.date}</Text>
              <AvatarGroup size="sm" max={2}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
            </Flex>
          </Box>
        ))}
      </Flex>
      <Flex>
        <Button
          leftIcon={<IoAddSharp />}
          width="100%"
          mt={5}
          colorScheme="gray"
          variant="solid"
        >
          New Transfer
        </Button>
      </Flex>
      <Box mt={5}>
        <Text fontSize="2xl" fontWeight="bold">
          Wallets
        </Text>
        {[1, 2, 3].map((item, index) => (
          <Flex mt={5} key={index} justifyContent="space-between">
            <Flex flexDirection={"row"} alignItems={"center"}
                justifyContent="center">
              <Flex
                bgColor={"gray.100"}
                borderRadius="md"
                w="50px"
                h="50px"
                alignItems={"center"}
                justifyContent="center"
              >
                <SiLitecoin size={30} />
              </Flex>
              <Flex flexDirection={"column"} justifyContent="space-between">
                <Text fontWeight={"bold"} ml={2}>
                  LTC
                </Text>
                <Text ml={2} fontSize="sm">
                  Litcoin
                </Text>
              </Flex>
            </Flex>

            <Flex flexDirection={"column"} justifyContent="space-between">
              <Text fontWeight={"bold"} ml={2}>
                37%
              </Text>
              <Text ml={2} fontSize="sm">
                -24%
              </Text>
            </Flex>
          </Flex>
        ))}
      </Box>
    </>
  );
};

export default LeftSideBar;
