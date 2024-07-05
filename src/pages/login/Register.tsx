/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/hooks";
import { useRegisterMutation } from "@/redux/features/auth/authApi";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import ScrollToTop from "@/hooks/ScrollToTop";
import AnimatedUnderLine from "@/components/ui/AnimatedUnderLine";
import { Button } from "antd";

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

const Register = () => {
  const navigate = useNavigate();
  const { darkMode } = useAppSelector((store) => store.theme);
  const [registration] = useRegisterMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading....");
    try {
      const userInfo = {
        name: data.name.toLowerCase(),
        email: data.email,
        password: data.password,
      };

      await registration(userInfo).unwrap();
      toast.success("Account Created Successfully", {
        id: toastId,
        duration: 1000,
      });

      navigate(`/login`);
    } catch (error: any) {
      toast.error(`${error.data.message}`, {
        id: toastId,
        duration: 1000,
      });
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={` min-h-screen w-full dark:bg-black`}>
        <Container>
          <ScrollToTop />
          <div className="min-h-fit">
            <div className=" flex justify-center items-center flex-col">
              <motion.div
                className="text-center"
                variants={intro}
                initial="hidden"
                animate="visible"
              >
                <motion.h2
                  className="text-2xl md:text-3xl dark:text-white lg:text-4xl text-primary  font-bold mb-2"
                  variants={introChildren}
                >
                  Register
                </motion.h2>
                <motion.div variants={introChildren} className="bg-red-500">
                  <AnimatedUnderLine className=" bg-gray-600 " />
                </motion.div>
              </motion.div>
              <motion.div
                className="mt-10 rounded-md   dark:bg-gray-600 p-5 md:p-10 w-90% sm:w-[70%] md:w-[50%] lg:w-[30%]"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5">
                    <label className="flex items-center text-primary dark:text-white">
                      Name :
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      name="name"
                      required
                      className="border-2 shadow-xl p-2 dark:bg-gray-900 dark:text-gray-400 outline-none w-full mt-2 rounded text-black"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="flex items-center text-primary dark:text-white">
                      Email :
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      name="email"
                      required
                      className="border-2 dark:bg-gray-900 dark:text-gray-400 shadow-xl p-2 outline-none w-full mt-3 rounded text-black"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="flex items-center text-primary dark:text-white">
                      Password :
                    </label>
                    <input
                      {...register("password")}
                      name="password"
                      type="password"
                      required
                      className="border-2 dark:bg-gray-900 dark:text-gray-400 shadow-xl p-2 outline-none w-full mt-3 rounded text-black"
                    />
                  </div>
                  <div className=" mt-3">
                    <Button
                      htmlType="submit"
                      className="w-full border-2  border-primary bg-primary  text-white font-bold py-5 rounded duration-500 transition-all flex justify-center items-center gap-2"
                    >
                      Register
                    </Button>
                  </div>
                </form>
                <p className="mt-10 text-primary dark:text-white">
                  All ready have an account!!!
                  <Link to="/login" className=" text-red-400 font-semibold">
                    Please Login
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Register;
