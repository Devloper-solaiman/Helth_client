/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import useImgUpload from "@/hooks/useImgUpload";
import { usePostVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import { useAppSelector } from "@/redux/hooks";
import ScrollToTop from "@/hooks/ScrollToTop";
import AnimatedUnderLine from "../ui/AnimatedUnderLine";
import { Button } from "../ui/button";

const SignUpVolunteer = () => {
  const { register, handleSubmit, reset } = useForm();
  const { uploadImage } = useImgUpload();
  const [postVolunteer] = usePostVolunteerMutation();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating Volunteer Account....");
    const imageData = data.image;
    const imageUrl = await uploadImage(imageData);

    const volunteerData = {
      image: imageUrl?.data?.url,
      name: data.name.toLowerCase(),
      email: data.email,
      passion: data.passion,
      phoneNumber: data.phoneNumber,
      location: data.location,
    };

    try {
      await postVolunteer(volunteerData).unwrap();

      toast.success("Volunteer Account Created Successfully", {
        id: toastId,
        duration: 1000,
      });
      reset();
    } catch (err: any) {
      toast.error(`${err?.data?.message}`, {
        id: toastId,
        duration: 1200,
      });
    }
  };
  const { darkMode } = useAppSelector((store) => store.theme);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`dark:bg-black min-h-screen w-auto mx-auto `}>
        <motion.div
          className="py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <ScrollToTop />

          <div className="text-center mb-20">
            <h4 className="text-secondary text-lg font-semibold mb-3">
              Sign Up For Volunteer
            </h4>

            <AnimatedUnderLine className="mx-auto bg-red-500" />
          </div>
          <motion.div
            className="py-10 dark:text-black"
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
                  className="border border-primary dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-full mt-3 rounded"
                />
              </div>
              <div className="mb-5">
                <label className="flex items-center text-primary dark:text-white">
                  User Name :
                </label>
                <input
                  type="text"
                  {...register("name")}
                  name="name"
                  placeholder="Enter Your Name"
                  required
                  className="border border-primary dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-full mt-3 rounded"
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
                  required
                  className="border border-primary dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-full mt-3 rounded"
                />
              </div>
              <div className="mb-5">
                <label className="flex items-center text-primary dark:text-white">
                  Your Passion :
                </label>
                <input
                  type="text"
                  {...register("passion")}
                  name="passion"
                  placeholder="Passion"
                  required
                  className="border border-primary dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-full mt-3 rounded"
                />
              </div>
              <div className="mb-5">
                <label className="flex items-center text-primary dark:text-white">
                  <Phone width={20} height="16" className="text-secondary" />
                  Phone Number :
                </label>
                <input
                  type="text"
                  {...register("phoneNumber")}
                  name="phoneNumber"
                  placeholder="016000000"
                  required
                  className="border border-primary dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-full mt-3 rounded"
                />
              </div>

              <div className="mb-5">
                <label className="flex items-center text-primary dark:text-white">
                  <MapPin width={20} height="16" className="text-secondary" />
                  Location :
                </label>
                <input
                  type="text"
                  {...register("location")}
                  name="location"
                  placeholder="Dhaka, Bangladesh"
                  required
                  className="border border-primary dark:bg-gray-800 dark:text-gray-200 p-2 outline-none w-full mt-3 rounded"
                />
              </div>

              <div className=" flex justify-center items-center mt-6 col-span-2">
                <Button className=" border-2 border-primary bg-primary text-white font-semibold  rounded dark:bg-secondary duration-500 transition-alln p-3">
                  Create Volunteer Account
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUpVolunteer;
