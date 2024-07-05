import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { usePostSubscriptionMutation } from "@/redux/features/subscription/subscription.api";
import ScrollToTop from "@/hooks/ScrollToTop";
import { useAppSelector } from "@/redux/hooks";
import useImgUpload from "@/hooks/useImgUpload";
import { Button } from "@/components/ui/button";

const CreateSubscription = () => {
  const [addSubscription] = usePostSubscriptionMutation();

  const { register, handleSubmit, reset } = useForm();
  const { uploadImage } = useImgUpload();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Subscription Created Successfully");
    try {
      const imageData = data.image;
      const imageUrl = await uploadImage(imageData);

      const subscriptionData = {
        image: imageUrl?.data?.url,
        title: data.title,
        amount: Number(data.amount),
        description: data.description,
      };

      addSubscription(subscriptionData).unwrap();

      toast.success("Donation Post Created Successfully", {
        id: toastId,
        duration: 1000,
      });
      reset();
    } catch (err) {
      toast.error("Something Want Wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  const { darkMode } = useAppSelector((store) => store.theme);

  return (
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <ScrollToTop />
      <motion.div
        className="py-10 dark:bg-black"
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <form
          className="md:grid md:grid-cols-2 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5">
            <label className="flex underline items-center text-xs font-semibold text-primary dark:text-white">
              Upload Image
            </label>
            <input
              type="file"
              {...register("image")}
              name="image"
              required
              className="border-2 ms-2 dark:bg-gray-800 p-2 outline-none w-full mt-3 rounded "
            />
          </div>
          <div className="mb-5">
            <label className="flex underline items-center text-xs font-semibold text-primary dark:text-white">
              Title
            </label>
            <input
              type="text"
              {...register("title")}
              name="title"
              placeholder="Enter Your Service Title"
              required
              className="border-2 dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-[95%] mt-3 rounded"
            />
          </div>
          <div className="mb-5">
            <label className="flex underline items-center text-xs font-semibold text-primary dark:text-white">
              Subscription amount
            </label>
            <input
              type="number"
              {...register("amount")}
              name="amount"
              required
              className="border-20 dark:bg-gray-800 ms-2 dark:text-gray-200 p-2 outline-none w-full mt-3 rounded"
            />
          </div>
          <div className="mb-5">
            <label className="flex underline items-center text-xs  font-semibold text-primary dark:text-white">
              Description
            </label>
            <textarea
              {...register("description")}
              name="description"
              placeholder="Enter Your Description"
              required
              className="h-20 border-2 w-[95%] dark:bg-gray-800 dark:text-gray-200 p-2 outline-none mt-3 rounded"
            />
          </div>
          <div className=" mt-6 col-span-2 flex justify-center items-center">
            <Button className="bg-primary dark:bg-gray-400 text-white dark:text-black">
              Create Subscription
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateSubscription;
