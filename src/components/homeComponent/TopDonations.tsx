import { useGetDonationsQuery } from "@/redux/features/donation/donationApi";
import Spninner from "../ui/Spninner";
import AnimatedUnderLine from "../ui/AnimatedUnderLine";
import { TDonationCard } from "@/types/donation.type";
import DonationCard from "../ui/DonationCard";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";

const TopDonations = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const { data: donationData, isFetching } = useGetDonationsQuery(undefined);

  if (isFetching) {
    return (
      <div className="h-96">
        <Spninner />
      </div>
    );
  }
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`py-20 dark:bg-gray-700 `}>
        <div className="text-center mb-20">
          <h4 className="text-secondary text-lg font-semibold mb-3">
            Please Donate Any Service
          </h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2">
            Top Donate
          </h2>
          <AnimatedUnderLine className="mx-auto bg-yellow-300" />
        </div>
        <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center gap-10 mx-auto">
          {donationData?.data?.slice(0, 6).map((donation: TDonationCard) => (
            <DonationCard key={donation._id} donation={donation}></DonationCard>
          ))}
        </div>
        <div className="mt-28 text-center">
          <Link
            className="text-xl text-primary dark:text-secondary underline font-bold"
            to="/donations"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopDonations;
