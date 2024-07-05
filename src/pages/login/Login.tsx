import Container from "@/components/ui/Container";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
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

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((store) => store.theme);
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.token) as TUser;

      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Loge In Successfully", {
        id: toastId,
        duration: 1200,
      });
      navigate(from, { replace: true });
    } catch (error: any) {
      toast.error(`${error.data.message}`, {
        id: toastId,
        duration: 1000,
      });
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <ScrollToTop />
      <div className={` min-h-screen w-full dark:bg-gray-800 `}>
        <Container>
          <div className="min-h-fit pb-20">
            <div className=" flex justify-center items-center flex-col mb-10">
              <motion.div
                className="text-center my-10"
                variants={intro}
                initial="hidden"
                animate="visible"
              >
                <motion.h4
                  className="text-secondary text-lg font-semibold mb-3"
                  variants={introChildren}
                >
                  Login and Support Use
                </motion.h4>
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2"
                  variants={introChildren}
                >
                  Sign In Now!
                </motion.h2>
                <motion.div variants={introChildren}>
                  <AnimatedUnderLine className="bg-yellow-400 mx-auto" />
                </motion.div>
              </motion.div>
              <motion.div
                className="mt-10 rounded-md border-2 border-primary dark:border-secondary dark:bg-zinc-950 p-5 md:p-10 w-90% sm:w-[70%] md:w-[50%] lg:w-[30%]"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="flex items-center text-primary dark:text-white ">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      name="email"
                      required
                      className="border-2 shadow-md p-2 outline-none w-full mt-3 rounded text-black"
                    />
                  </div>
                  <div className="py-3">
                    <label className="flex items-center text-primary dark:text-white">
                      Password
                    </label>
                    <input
                      {...register("password")}
                      name="password"
                      type="password"
                      required
                      className="border-2 shadow-md p-2 outline-none w-full mt-3 rounded text-black"
                    />
                  </div>
                  <div>
                    <Button
                      htmlType="submit"
                      className="w-full border-2 border-primary dark:border-secondary bg-primary dark:bg-secondary text-white font-bold py-5 rounded duration-500 transition-all flex justify-center items-center gap-2"
                    >
                      Login
                    </Button>
                  </div>
                </form>
                <p className="mt-10 text-primary dark:text-white">
                  Are You New !!
                  <Link to="/register" className=" text-red-400 font-semibold">
                    Please Register Now !
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

export default Login;
