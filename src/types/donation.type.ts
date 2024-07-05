export type TDonationCard = {
  _id: string;
  image: string;
  title: string;
  category: string;
  amount: number;
};
export type TDonationDetail = TDonationCard & {
  description: string;
};
