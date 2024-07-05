import Spninner from "@/components/ui/Spninner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ScrollToTop from "@/hooks/ScrollToTop";
import { useGetDonorQuery } from "@/redux/features/donor/donorApi";
import { useAppSelector } from "@/redux/hooks";
import { TDonorData } from "@/types/donor.type";
import { motion } from "framer-motion";

const Leaderboard = () => {
  const { data, isFetching } = useGetDonorQuery(undefined);
  const { darkMode } = useAppSelector((store) => store.theme);
  const donorData = data?.DonoarData;

  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }

  const sortedDonorData = donorData?.slice();

  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <motion.div
        className={`pb-10 w-auto dark:bg-gray-800 mx-auto`}
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <ScrollToTop />
        <Table>
          <TableCaption>All Donor Data</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedDonorData?.map((donation: TDonorData) => (
              <TableRow key={donation._id}>
                <TableCell className="font-medium">
                  <img
                    src={donation.image}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </TableCell>
                <TableCell className="dark:text-white">
                  {donation.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
};

export default Leaderboard;
