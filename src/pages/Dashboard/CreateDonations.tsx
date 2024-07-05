import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { usePostDonationMutation } from "@/redux/features/donation/donationApi";
import useImgUpload from "@/hooks/useImgUpload";
import { useAppSelector } from "@/redux/hooks";
import ScrollToTop from "@/hooks/ScrollToTop";
import { Button } from "@/components/ui/button";

const CreateDonations = () => {
  const [postDonation] = usePostDonationMutation();

  const { register, handleSubmit, reset } = useForm();
  const { uploadImage } = useImgUpload();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating post....");
    try {
      const imageData = data.image;
      const imageUrl = await uploadImage(imageData);

      const donationData = {
        image: imageUrl?.data?.url,
        title: data.title,
        amount: Number(data.amount),
        category: data.category,
        description: data.description,
      };

      postDonation(donationData).unwrap();

      toast.success("Donation Post Created Successfully", {
        id: toastId,
        duration: 1000,
      });
      reset();
    } catch (err) {
      toast.error("Something Want Wrong", {
        id: toastId,
        duration: 1000,
      });
    }
  };
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={` min-h-screen w-full  dark:bg-black `}>
        <ScrollToTop />
        <motion.div
          className="py-10 dark:text-white"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <form
            className="md:grid md:grid-cols-2 gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-5">
              <label className="flex items-center text-primary dark:text-white">
                Image Link :
              </label>
              <input
                type="file"
                {...register("image")}
                name="image"
                placeholder="Enter Your Image Link"
                required
                className="border-20 dark:bg-gray-700 dark:text-gray-200 p-2 ms-2 outline-none w-full mt-3 rounded"
              />
            </div>
            <div className="mb-5">
              <label className="flex items-center text-primary dark:text-white">
                Category :
              </label>
              <select
                className="border-20 dark:bg-gray-700 dark:text-gray-200 p-2 outline-none w-[95%] mt-3 rounded"
                {...register("category")}
                name="category"
              >
                <option label="Select Category" />
                <option value="Medisin Sost">Medisin Cost</option>
                <option value="Doctor Cost">Doctor Cost</option>
                <option value="Madical camp Cost">Madical camp Cost</option>
                <option value="Blood donation Cost">Blood donation Cost</option>
                <option value="Oparation Cost">Oparation Cost</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="flex items-center text-primary dark:text-white">
                Title :
              </label>
              <input
                type="text"
                {...register("title")}
                name="title"
                placeholder="Enter Your Title"
                required
                className="border-20 dark:bg-gray-700 dark:text-gray-200 p-2 ms-2 outline-none w-full mt-3 rounded"
              />
            </div>
            <div className="mb-5">
              <label className="flex items-center text-primary dark:text-white">
                Amount :
              </label>
              <input
                type="number"
                {...register("amount")}
                name="amount"
                placeholder="Enter Your Amount"
                required
                className="border-20 dark:bg-gray-700 dark:text-gray-200 p-2 outline-none w-[95%] mt-3 rounded"
              />
            </div>
            <div className="mb-5 col-span-2">
              <label className="flex items-center text-primary dark:text-white">
                Description :
              </label>
              <textarea
                {...register("description")}
                name="description"
                placeholder="Enter Your Description"
                required
                className="border-20 dark:bg-gray-700 dark:text-gray-200 p-2 outline-none w-[50%] h-32 mt-3 rounded"
              />
            </div>
            <div className=" mt-6 col-span-2 flex justify-center items-center ">
              <Button className=" bg-primary dark:bg-gray-400 text-white dark:text-black">
                Create Donation
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateDonations;
