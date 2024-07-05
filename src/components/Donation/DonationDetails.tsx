import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSingleDonationQuery } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "react-router-dom";
import Spninner from "../ui/Spninner";
import ScrollToTop from "@/hooks/ScrollToTop";
import DonationModal from "../ui/DonationModal";
import { Card, Row } from "antd";

const DonationDetails = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const user = useAppSelector(selectCurrentUser);

  const { id } = useParams();
  const { data: donation, isFetching } = useGetSingleDonationQuery(id);

  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
  const { title, image, amount, description } = donation.data;

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <ScrollToTop />
      <div
        className={`dark:bg-gray-800 h-screen grid grid-cols-1 md:grid-cols-2 md:gap-14 place-items-center gap-4 my-10`}
      >
        <div>
          <img
            className="w-full rounded-2xl shadow-xl p-2"
            src={image}
            alt={title}
          />
        </div>
        <div className=" flex justify-center items-center dark:bg-black">
          <div className=" w-2/3 dark:bg-black">
            <Row gutter={82}>
              <Card className="dark:bg-black dark:border-none dark:text-gray-200">
                <h1 className="text-2xl font-semibold">Title: {title}</h1>
                <p className="text-justify text-sm">
                  Description: {description}
                </p>
                <h1 className=" my-5 italic text-secondary text-xl font-semibold">
                  Amount: <span className=" underline "> {amount}</span>
                </h1>
                <DonationModal donation={donation?.data} user={user} />
              </Card>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
