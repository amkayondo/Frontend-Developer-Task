import { MdDashboard, MdIncompleteCircle } from "react-icons/md";
import { FaCalculator, FaMoneyBillAlt, FaUserAlt } from "react-icons/fa";
import { IoWalletOutline, IoWatch } from "react-icons/io5";
import { BsFillBasket2Fill, BsCupFill } from "react-icons/bs";
import { IoMdFlame } from "react-icons/io";
import { ReactFragment } from "react";

export const sideBarTopMenu: {
  name: string;
  icon: ReactFragment;
  isActive: boolean;
}[] = [
  {
    name: "Dashboard",
    icon: MdDashboard,
    isActive: true,
  },
  {
    name: "Wallet",
    icon: IoWalletOutline,
    isActive: false,
  },
  {
    name: "Currencies",
    icon: FaMoneyBillAlt,
    isActive: false,
  },
  {
    name: "Calculator",
    icon: FaCalculator,
    isActive: false,
  },
  {
    name: "Savings",
    icon: MdIncompleteCircle,
    isActive: false,
  },
  {
    name: "Expenses",
    icon: BsFillBasket2Fill,
    isActive: false,
  },
];

export const sideBarBottomMenu: {
  name: string;
  icon: ReactFragment;
  isActive: boolean;
}[] = [
  {
    name: "Upcoming",
    icon: IoMdFlame,
    isActive: false,
  },
  {
    name: "Health",
    icon: IoWatch,
    isActive: false,
  },
  {
    name: "Food",
    icon: BsCupFill,
    isActive: false,
  },
  {
    name: "Account",
    icon: FaUserAlt,
    isActive: false,
  },
];
