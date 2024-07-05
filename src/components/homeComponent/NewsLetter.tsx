import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import AnimatedUnderLine from "../ui/AnimatedUnderLine";
import { useAppSelector } from "@/redux/hooks";

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
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

const NewsLetter = () => {
  const { darkMode } = useAppSelector((store) => store.theme);

  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="py-20 dark:bg-gray-800">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2">
            Comments
          </h2>
          <AnimatedUnderLine className="mx-auto bg-red-500" />
        </div>
        <motion.div
          className="pb-20 flex justify-center items-center text-center flex-col"
          ref={view}
          variants={intro}
          initial="hidden"
          animate={inView ? "visible" : ""}
        >
          <motion.h2
            className="text-primary dark:text-white text-2xl font-bold mb-5"
            variants={introChildren}
          >
            Stay Connected with Us! <br />
            and Create A Comment
          </motion.h2>
          <motion.p
            className=" w-[95%] sm:w-[80%] md:w-[60%] text-slate-700 dark:text-slate-400"
            variants={introChildren}
          >
            a temporary activity that provides free, subsidized, or sponsored
            medical or dental services to underserved communities
          </motion.p>
          <motion.div
            className="mt-10 w-full flex justify-center items-center"
            variants={introChildren}
          >
            <input
              className="w-[70%] sm:w-[500px] py-2 px-2 md:py-3 md:px-5  outline-none border-none shadow-md rounded-lg text-black"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="py-2 px-2 md:py-3 md:px-5 ms-[-50px] md:ms-[-110px] outline-none bg-primary dark:bg-secondary text-white dark:text-primary rounded-e-lg">
              <span className="flex justify-center items-center">comment</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsLetter;
