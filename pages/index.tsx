import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Activity from "../src/features/Activity";
import SideBar from "../src/components/SideBar";
import LeftSideBar from "../src/components/LeftSideBar";
import Head from "next/head";

const DashBoard = () => {
  return (
    <Flex>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Container
        borderLeftColor={"black"}
        borderWidth={1}
        bgColor={"gray.50"}
        maxH={"full"}
        w="20%"
        minH={"100vh"}
      >
        <SideBar />
      </Container>
      <Container maxW={"full"} w="70%" minH={"100vh"}>
        <Activity />
      </Container>
      <Container bgColor={"gray.50"} maxW={"full"} w="30%" minH={"100vh"}>
        <LeftSideBar />
      </Container>
    </Flex>
  );
};

export default DashBoard;
