export type TSubscribCard = {
    _id: string;
    image: string;
    title: string;
    description: string;
    amount: number;
};
export type TDonationDetail = TSubscribCard & {
    description: string;
};
