import {
  Box,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BsShieldShaded } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import AddNewTransaction from "../../AddNewTransaction";

const ActivityHeader = ({
  title,
  subtitle,
  setTransactions,
  
}: {
  title: string;
  subtitle: string;
  setTransactions: any;
}) => {
  const AddNewTransactionUseDisclosure = useDisclosure();
  return (
    <>
      <AddNewTransaction
        AddNewTransactionUseDisclosure={AddNewTransactionUseDisclosure}
        setTransactions={setTransactions}
      />
      <Flex justifyContent={"space-between"}>
        <Box>
          <Text fontSize={"3xl"} fontWeight="bold">
            {title}
          </Text>
          <Text fontWeight={"semibold"} color="gray.500">
            {subtitle}
          </Text>
        </Box>
        <Box textAlign={"center"}>
          <Text textDecoration={"underline"}>edit</Text>
        </Box>
        <Flex>
          <IconButton
            aria-label="Settings"
            mr={2}
            icon={<AiOutlineSetting size={25} />}
          />
          <IconButton
            bgColor={"rebeccapurple"}
            aria-label="Add"
            onClick={AddNewTransactionUseDisclosure.onOpen}
            icon={<IoAdd color="#fff" size={30} />}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default ActivityHeader;
