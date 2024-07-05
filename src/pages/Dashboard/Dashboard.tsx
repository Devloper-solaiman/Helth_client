import Spninner from "@/components/ui/Spninner";
import ScrollToTop from "@/hooks/ScrollToTop";
import { useGetDonationsQuery } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";

import { TDonationDetail } from "@/types/donation.type";
import { motion } from "framer-motion";
import { Chart } from "react-google-charts";

const DashBoard = () => {
  const { data: donationData, isFetching } = useGetDonationsQuery(undefined);

  const { darkMode } = useAppSelector((store) => store.theme);

  const categoryAmounts = donationData?.data?.reduce(
    (
      accumulator: { [category: string]: number },
      donation: TDonationDetail
    ) => {
      const { category, amount } = donation;
      accumulator[category] = (accumulator[category] || 0) + amount;
      return accumulator;
    },
    {} as { [category: string]: number }
  );

  if (categoryAmounts) {
    const data = Object.entries(categoryAmounts).map(([category, amount]) => [
      category,
      amount,
    ]);

    data.unshift(["Category", "Amount"]);

    const options = {
      title: "Donation Activities",
    };

    if (isFetching) {
      return (
        <div className="h-screen">
          <Spninner />
        </div>
      );
    }

    return (
      <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
        <ScrollToTop />
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-5"
        >
          <Chart
            chartType="PieChart"
            data={data}
            options={{
              ...options,
              backgroundColor: `${darkMode ? "rgb(0, 0, 0)" : "#fff"}`,
            }}
            width={"100%"}
            height={"400px"}
            className=" dark:text-white"
          />
        </motion.div>
      </div>
    );
  }
};

export default DashBoard;
