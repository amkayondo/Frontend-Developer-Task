import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";

export type cryptoProps = {
  title: string;
  icon: any;
  value: String;
  conversion: String;
  bgColor: String;
};

export const crypto: cryptoProps[] = [
  {
    title: "Bitcoin",
    value: "0.2231345 BTC",
    conversion: "8399.63 USD",
    bgColor: "orange.100",
    icon: BsCurrencyBitcoin,
  },
  {
    title: "Etherium",
    value: "10.612356 ETH",
    conversion: "399489.41 USD",
    bgColor: "pink.100",
    icon: FaEthereum,
  },
  {
    title: "Litecoin",
    value: "120.235 LTC",
    conversion: "12616.26 USD",
    bgColor: "blue.100",
    icon: SiLitecoin,
  },
];
