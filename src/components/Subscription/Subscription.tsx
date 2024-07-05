import { useGetAllSubscriptionQuery } from "@/redux/features/subscription/subscription.api";
import { useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
import Spninner from "../ui/Spninner";
import ScrollToTop from "@/hooks/ScrollToTop";
import Container from "../ui/Container";
import AnimatedUnderLine from "../ui/AnimatedUnderLine";
import { TSubscribCard } from "@/types/subscribCard";
import SubcscriptionCard from "../ui/SubcscriptionCard";

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

const Subscription = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const { data: subscribData, isFetching } =
    useGetAllSubscriptionQuery(undefined);

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
      <Container className="dark:bg-gray-800 dark:text-white">
        <div className="py-20 overflow-hidden">
          <motion.div
            className="text-center mb-20"
            variants={intro}
            initial="hidden"
            animate="visible"
          >
            <motion.h4
              className="text-primary text-4xl font-semibold mb-3 dark:text-gray-400"
              variants={introChildren}
            >
              All Subcscriptions
            </motion.h4>
            <motion.div variants={introChildren}>
              <AnimatedUnderLine className="mx-auto bg-red-500 dark:bg-white dark:h-2" />
            </motion.div>
          </motion.div>
          <motion.div
            className="w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center gap-10 mx-auto"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            {subscribData?.data?.map((items: TSubscribCard) => (
              <SubcscriptionCard
                key={items._id}
                items={items}
              ></SubcscriptionCard>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Subscription;
