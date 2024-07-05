import useImgUpload from "@/hooks/useImgUpload";
import { usePostDonorMutation } from "@/redux/features/donor/donorApi";
import { TDonationDetail } from "@/types/subscribCard";
import { FieldValues, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { Button } from "./button";
import { useAppSelector } from "@/redux/hooks";

const DonationModal = ({
  donation,
  user,
}: {
  donation: TDonationDetail;
  user: {
    name: string;
    email: string;
  } | null;
}) => {
  const { darkMode } = useAppSelector((store) => store.theme);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [postDonor] = usePostDonorMutation();
  const { uploadImage } = useImgUpload();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please Wait! Donation added....");
    try {
      const imageData = data.image;
      const imageUrl = await uploadImage(imageData);
      if (user) {
        const donorData = {
          name: user?.name,
          email: user?.email,
          amount: Number(data.amount),
          image: imageUrl?.data?.url,
        };

        await postDonor(donorData);

        toast.success("Donated Successfully", {
          id: toastId,
          duration: 1000,
        });
        navigate(`/admin/dashboard`);
      } else {
        navigate(`/admin/dashboard`);
        throw new Error("You Must Login First");
      }
    } catch (error: any) {
      toast.error(`${error}`, {
        id: toastId,
        duration: 1000,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {user ? (
          <Button>Donate Now</Button>
        ) : (
          <Button>
            {" "}
            <NavLink to="/login">Login Now </NavLink>
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className={`sm:max-w-[425px] ${darkMode ? "dark" : ""}`}>
        <h5 className="text-xs dark:text-white font-bold"> {donation.title}</h5>
        <div className="dark:bg-gray-700">
          <div>
            <div className="flex justify-center items-center">
              {" "}
              <img className="h-36 w-52 rounded" src={donation.image} alt="" />
            </div>
            <div className="text-primary dark:text-white grid grid-cols-2">
              <div>Amount :{`$${donation.amount}`}</div>
              <div>
                <h2 className=" text-primary text-sm dark:text-white">
                  Email {user?.email}
                </h2>
              </div>
            </div>
          </div>

          <form
            className="grid grid-cols-2 gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                type="file"
                {...register("image")}
                name="image"
                placeholder="Enter Your Image Link"
                required
                className="border-2 focus:border-secondary focus:ring-secondary  outline-none w-full mt-3 rounded"
              />
            </div>
            <div className="">
              <label className="flex items-center text-primary dark:text-white">
                Amount :
              </label>
              <input
                type="number"
                {...register("amount")}
                name="amount"
                placeholder="Enter Your Amount"
                required
                max={donation.amount}
                className="border-2 mb-1 focus:border-secondary focus:ring-secondary outline-none w-full rounded"
              />
            </div>
            <div className=" flex justify-end items-end">
              <button className=" border-2 border-primary bg-primary text-white font-bold px-5 mb-2 rounded dark:bg-secondary duration-500 transition-all">
                Donate
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
