import { Link } from "react-router-dom";
import Spninner from "../ui/Spninner";
import { useGetAllSubscriptionQuery } from "@/redux/features/subscription/subscription.api";
import AnimatedUnderLine from "../ui/AnimatedUnderLine";
import { TSubscribCard } from "@/types/subscribCard";
import SubcscriptionCard from "../ui/SubcscriptionCard";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";

const TopDonations = () => {
  const { data: subscribData, isFetching } =
    useGetAllSubscriptionQuery(undefined);
  const { darkMode } = useAppSelector((store) => store.theme);
  if (isFetching) {
    return (
      <div className="h-96">
        <Spninner />
      </div>
    );
  }
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`py-10 dark:bg-gray-800  dark:text-white`}>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-gray-300 font-extrabold mb-2">
            Top Subscriptionar
          </h2>
          <AnimatedUnderLine className="bg-yellow-400 mx-auto" />
        </div>
        <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center gap-10 mx-auto">
          {subscribData?.data?.slice(0, 6).map((items: TSubscribCard) => (
            <SubcscriptionCard
              key={items._id}
              items={items}
            ></SubcscriptionCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button className=" text-white dark:text-primary bg-primary font-semibold dark:bg-gray-300">
            <Link to="/subscriptions">View All</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopDonations;
