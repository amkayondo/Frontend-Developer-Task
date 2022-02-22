import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import React from "react";
import moment from "moment";
import axios from "axios";

const AddNewTransaction = ({
  AddNewTransactionUseDisclosure,
  setTransactions,
  
}: {
  AddNewTransactionUseDisclosure: any;
  setTransactions: any;
}) => {
  const { isOpen, onOpen, onClose } = AddNewTransactionUseDisclosure;
  const [service, setService] = React.useState("");
  const [wallet, setWallet] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      title: service,
      subtitle:
        service === "Insurance" ? "Property Coverage" : "Utility Coverage",
      walletTitle: wallet,
      walletDescription: "Personal account",
      transDate: moment(new Date()).format("DD, MMM, YYYY"),
      balance: amount,
    };
    axios
      .post("/api/transactions/add", {
        payload: data,
      })
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={onSubmit}>
          <ModalHeader
            borderTopLeftRadius={"md"}
            borderTopRightRadius={"md"}
            textAlign="center"
            color={"#fff"}
            bgColor={"rebeccapurple"}
          >
            Bill Payment
          </ModalHeader>
          <ModalBody>
            <FormControl isRequired mt={2}>
              <FormLabel htmlFor="Service">Service</FormLabel>
              <Select
                placeholder="Select Service"
                onChange={(e: any) => setService(e.target.value)}
              >
                <option value="Insurance">Insurance</option>
                <option value="Electricity">Electricity</option>
              </Select>
            </FormControl>
            <FormControl isRequired mt={2}>
              <FormLabel htmlFor="Wallet">Wallet</FormLabel>
              <Select
                placeholder="Select Wallet"
                onChange={(e: any) => setWallet(e.target.value)}
              >
                <option value="BTC-Wallet">BTC Wallet</option>
                <option value="LTC-Wallet">LTC Wallet</option>
              </Select>
            </FormControl>
            <FormControl isRequired mt={2}>
              <FormLabel htmlFor="Ammount">Ammount</FormLabel>
              <Input
                id="Ammount"
                placeholder="Ammount"
                type={"number"}
                onChange={(e: any) => setAmount(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              width={"50%"}
              bgColor={"#fff"}
              color="red"
              borderColor={"red"}
              borderWidth={1}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              type="submit"
              width={"50%"}
              bgColor="rebeccapurple"
              color={"#fff"}
            >
              Pay
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddNewTransaction;
