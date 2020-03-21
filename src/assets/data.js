import icon1 from "./blue-money.png";
import icon2 from "./grn-icon.png";
import spentIMG1 from "./grn-money.png";
import spentIMG2 from "./purplemoney.png";
import balanceIMG1 from "./grmpp.png";
import balanceIMG2 from "./yellow-money.png";
import statusIcon1 from "./yellowcon.png";
import statusIcon2 from "./redcon.png";

export const budgetData = [
  {
    name: "CAPEX",
    id: "1",
    iconBG: "rgba(81, 44, 98, 0.2)",
    icon: icon1,
    spent: "18,000,000",
    spentIMG: spentIMG1,
    balanceIMG: balanceIMG1,
    balance: "32,000,000",
    remaining: "64%",
    remainingColor: "#6915cf",
    budget: "50,000,000"
  },
  {
    name: "OPEX",
    id: "2",
    iconBG: "rgba(77, 213, 153, 0.2)",
    icon: icon2,
    spent: "10,000,000",
    spentIMG: spentIMG2,
    balanceIMG: balanceIMG2,
    balance: "10,000,000",
    remaining: "50%",
    remainingColor: "#fb0091",
    budget: "20,000,000"
  }
];

export const statusData = [
  {
    name: "Pending Budget Reassignment Status",
    image: statusIcon1,
    id: "1",
    amount: "200"
  },
  {
    name: "Approved Budget Reassignment Status",
    image: icon2,
    id: "2",
    amount: "373"
  },
  {
    name: "Declined Budget Reassignment Status",
    image: statusIcon2,
    id: "3",
    amount: "372"
  }
];

export const totalBudgetData = [
  {
    name: "OPEX",
    id: "1",
    totalSpent: "N 8,282,289",
    totalBalance: "N 8,282,289"
  },
  {
    name: "CAPEX",
    id: "1",
    totalSpent: "N 8,282,289",
    totalBalance: "N 8,282,289"
  }
];
