import { useGetDonationsQuery } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
import Spninner from "../ui/Spninner";
import ScrollToTop from "@/hooks/ScrollToTop";
import Container from "../ui/Container";
import AnimatedUnderLine from "../ui/AnimatedUnderLine";
import { TDonationCard } from "@/types/donation.type";
import DonationCard from "../ui/DonationCard";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

const Donations = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const { data: donationData, isFetching } = useGetDonationsQuery(undefined);

  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <div className={` min-h-screen w-full dark:bg-gray-800`}>
        <ScrollToTop />
        <Container>
          <div className="py-20 overflow-hidden">
            <motion.div
              className="text-center mb-20"
              variants={intro}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2"
                variants={introChildren}
              >
                All Donations
              </motion.h2>

              <motion.div variants={introChildren}>
                <AnimatedUnderLine className="bg-red-500 mx-auto" />
              </motion.div>
            </motion.div>
            <motion.div
              className="w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center gap-3 mx-auto"
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              {donationData?.data?.map((donation: TDonationCard) => (
                <DonationCard
                  key={donation._id}
                  donation={donation}
                ></DonationCard>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Donations;
