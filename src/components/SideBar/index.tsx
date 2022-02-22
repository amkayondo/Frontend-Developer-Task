import { Box, Button, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { IoRocket } from "react-icons/io5";
import { sideBarBottomMenu, sideBarTopMenu } from "./menu";
import MenuItem from "./MenuItem";

const SideBar = () => {
  return (
    <>
      <Box>
        <Text fontSize="xl" fontWeight="bold" textAlign={"center"} mt="5">
          GND CRYP
        </Text>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={3} mt={9}>
        {sideBarTopMenu.map((item: any, index: any) => (
          <MenuItem
            icon={<item.icon color={item.isActive && "#fff"} />}
            name={item.name}
            isActive={item.isActive}
            onClick={() => {}}
            key={index}
          />
        ))}
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={3} mt={10}>
        {sideBarBottomMenu.map((item: any, index: any) => (
          <MenuItem
            icon={<item.icon color={item.isActive && "#fff"} />}
            name={item.name}
            isActive={item.isActive}
            onClick={() => {}}
            key={index}
          />
        ))}
      </Grid>
      <Box mt={10} boxShadow="base" p="6" rounded="md" bg="purple.200" h={"56"}>
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems="center" >
          <IoRocket size={100}/>
          <Button mt={12} color={"purple.500"}  bgColor={"#fff"}>
            Get Pro Now
          </Button>
        </Flex>
      </Box>
      <Spacer mb={10}/>
    </>
  );
};

export default SideBar;
