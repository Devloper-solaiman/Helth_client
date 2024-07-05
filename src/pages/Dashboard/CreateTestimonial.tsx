import { useAppSelector } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSingleDonorQuery } from "@/redux/features/donor/donorApi";
import Spninner from "@/components/ui/Spninner";
import { usePostTestimonialMutation } from "@/redux/features/testimonial/testimonial";
import useImgUpload from "@/hooks/useImgUpload";
import ScrollToTop from "@/hooks/ScrollToTop";
import { Button } from "@/components/ui/button";

const CreateTestimonial = () => {
  const user = useAppSelector(selectCurrentUser);

  const { data: donorData, isFetching } = useGetSingleDonorQuery(user!.email);
  console.log(donorData);

  const [postTestimonial] = usePostTestimonialMutation();

  const { register, handleSubmit, reset } = useForm();
  const { uploadImage } = useImgUpload();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating Testimonial....");
    try {
      const imageData = data.image;
      const imageUrl = await uploadImage(imageData);

      const testimonialData = {
        image: imageUrl?.data?.url,
        name: data.name.toLowerCase(),
        email: data.email,
        amount: Number(data.amount),
        testimonial: data.testimonial,
      };

      postTestimonial(testimonialData).unwrap;

      toast.success("Testimonial Post Successfully", {
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
  if (isFetching) {
    return (
      <div className="h-screen">
        <Spninner />
      </div>
    );
  }
  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <ScrollToTop />
      <div className={` min-h-screen w-full dark:bg-black`}>
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
                className="border-20 ms-2 dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-full mt-3 rounded"
              />
            </div>
            <div className="mb-5">
              <label className="flex items-center text-primary dark:text-white">
                Name :
              </label>
              <input
                type="text"
                {...register("name")}
                name="name"
                defaultValue={donorData?.data?.name || ""}
                placeholder="Enter Your Name"
                required
                className="border-20 dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-[95%] mt-3 rounded"
              />
            </div>
            <div className="mb-5">
              <label className="flex items-center text-primary dark:text-white">
                Email :
              </label>
              <input
                type="text"
                {...register("email")}
                name="email"
                placeholder="Enter Your Email"
                defaultValue={donorData?.data?.email || ""}
                required
                className="border-20 ms-2 dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-full mt-3 rounded"
              />
            </div>
            <div className="mb-5">
              <label className="flex items-center text-primary dark:text-white">
                Your Donated Amount :
              </label>
              <input
                type="number"
                {...register("amount")}
                name="amount"
                defaultValue={donorData?.data?.amount || 0}
                placeholder="Amonut"
                required
                className="border-20 dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-[95%] mt-3 rounded"
              />
            </div>
            <div className="mb-5 col-span-2">
              <label className="flex items-center text-primary dark:text-white">
                Testimonial :
              </label>
              <textarea
                {...register("testimonial")}
                name="testimonial"
                placeholder="Enter Your Testimonial"
                required
                className="border-20 dark:bg-gray-800 dark:text-gray-200 p-2 outline-none h-32 w-[50%] ms-2 mt-3 rounded"
              />
            </div>

            <div className=" mt-6 col-span-2  flex justify-center items-center">
              <Button className="bg-primary dark:bg-gray-400 text-white dark:text-black">
                Create Testimonial
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateTestimonial;
