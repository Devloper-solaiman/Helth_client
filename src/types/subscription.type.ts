export type TSubscription = {
  _id: string;
  image: string;
  title: string;
  amount: number;
};
export type TSubscriptionDetail = TSubscription & {
  description: string;
};
