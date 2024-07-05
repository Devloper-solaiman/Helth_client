import DeleteDonationModal from "@/components/ui/DeleteDonationModal";
import EditDonationModal from "@/components/ui/EditDonationModal";
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
import { useGetDonationsQuery } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";
import { TDonationDetail } from "@/types/donation.type";
import { motion } from "framer-motion";

const DashBoardDonations = () => {
  const { data: donationData, isFetching } = useGetDonationsQuery(undefined);
  const { darkMode } = useAppSelector((store) => store.theme);

  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
  return (
    <motion.div
      className={`mb-20 ${darkMode ? "dark" : ""}`}
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <ScrollToTop />
      <Table className="dark:bg-gray-800 dark:text-gray-200">
        <TableCaption>All Donation Post </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>N0.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donationData?.data?.map(
            (donation: TDonationDetail, index: number) => (
              <TableRow key={donation._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">{donation.title}</TableCell>
                <TableCell>{donation.category}</TableCell>
                <TableCell>{donation.amount}</TableCell>
                <TableCell className="text-center flex items-center justify-center">
                  <EditDonationModal donation={donation} />
                  <DeleteDonationModal donation={donation} />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default DashBoardDonations;
