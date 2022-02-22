import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
  subtitle: string;
  walletTitle: string;
  walletDescription: string;
  transDate: string;
  balance: string;
}[];

const transactions: Data = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(transactions);
}
