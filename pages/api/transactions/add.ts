type Data = {
  title: string;
  subtitle: string;
  walletTitle: string;
  walletDescription: string;
  transDate: string;
  balance: string;
}[];

const transactions: Data = [];

export default function handler(req: any, res: any) {
  transactions.push(req.body.payload);
  res.status(200).json(transactions);
}
