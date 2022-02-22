import {
  Badge,
  Box,
  Container,
  Flex,
  Text,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsCurrencyBitcoin, BsShieldShaded } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import CryptoCard from "../../components/CryptoCard";
import GreetUser from "../../components/_shared/GreetUser";
import SearchBar from "../../components/_shared/SearchBar";
import ActivityHeader from "../../components/_shared/ActivityHeader";
import { crypto, cryptoProps } from "./data";
import ActivityItem from "../../components/ActivityItem";
import axios from "axios";

const Activity = () => {
  const [transactions, setTransactions] = React.useState([]);
  console.log(transactions);
  useEffect(() => {
    (async () =>
      axios
        .get("/api/transactions/all")
        .then((res) => setTransactions(res.data)))();
    return () => {};
  }, [axios]);
  return (
    <Container maxW={"full"} pt={5}>
      <SearchBar />
      <GreetUser
        style={{
          marginTop: "2rem",
        }}
        firstName="Mike"
        notificationCount={23}
      />
      <Flex mt={"10"}>
        {crypto.map((item: cryptoProps, index) => (
          <CryptoCard
            index={index}
            key={index}
            bgColor={item.bgColor}
            title={"Bitcoin"}
            value={"0.3434 BTC"}
            conversion={"222 USD"}
            icon={<item.icon color="#fff" size={130} />}
          />
        ))}
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection="column"
      >
        <Flex
          mt={"12"}
          bgColor="gray.100"
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius="full"
          w={"50%"}
        >
          <Box bgColor={"blue"} h="2" w={"20"} borderRadius="full"></Box>
        </Flex>
        <IconButton
          mt={10}
          boxShadow="2xl"
          p="5"
          rounded="full"
          bg="white"
          aria-label="more"
          icon={<FiChevronDown size={30} />}
        />
      </Flex>
      <Box mt={5}>
        <ActivityHeader
          setTransactions={setTransactions}
          title={"Latest Activity"}
          subtitle="Updated 12 minutes ago"
        />
      </Box>
      <Box pb={"10"} mt="5">
        {transactions.length > 0 ? (
          <>
            {transactions.map((item: any, index) => (
              <ActivityItem
                bgColor={"blue.100"}
                title={item.title}
                subtitle={item.subtitle}
                walletTitle={item.walletTitle}
                walletDescription={item.walletDescription}
                transDate={item.transDate}
                balance={item.balance}
                key={index}
                icon={<BsShieldShaded size={30} />}
              />
            ))}
          </>
        ) : (
          <Text>No transactions</Text>
        )}
      </Box>
    </Container>
  );
};

export default Activity;
