import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "../../assets/gallary-8.png";
import AnimatedUnderLine from "../ui/AnimatedUnderLine";
import { useAppSelector } from "@/redux/hooks";

const SectionAboutUs = () => {
  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);
  const { darkMode } = useAppSelector((store) => store.theme);

  const aboutImage = {
    initial: { y: 0, scale: 5 },
    animate: {
      y: 15,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className=" bg-slate-100 dark:bg-gray-700">
        <motion.div
          ref={view}
          className="py-20 overflow-hidden"
          animate={
            inView
              ? { opacity: 1, y: 0, transition: { duration: 1 } }
              : { opacity: 0, y: -200, transition: { duration: 1 } }
          }
        >
          <div className="text-center mb-20">
            <h1 className="text-secondary text-4xl font-semibold mb-3">
              About
            </h1>

            <AnimatedUnderLine className="mx-auto bg-red-500" />
          </div>
          <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center-between items-center gap-5 lg:gap-20">
            <div>
              <h1 className="text-2xl md:text-32l dark:text-gray-200 font-bold mb-5">
                About Us
              </h1>
              {/* <AnimatedUnderline /> */}
              <p className="text-slate-700 text-justify dark:text-slate-400">
                Health camps in Palestine play a crucial role in addressing the
                healthcare needs of its population, especially in areas affected
                by conflict and limited access to medical services. These camps
                serve as vital platforms for delivering essential healthcare
                services, including medical consultations, vaccinations,
                screenings, and health education initiatives.providing them with
                much-needed medical attention and support. In Palestine, where
                healthcare infrastructure faces numerous challenges due to
                political tensions and resource constraints, these camps serve
                as lifelines for many individuals who would otherwise struggle
                to access healthcare. Additionally, they contribute to raising
                awareness about preventive healthcare measures and promoting
                overall well-being within communities. Despite facing obstacles,
                health camps in Palestine demonstrate resilience and
                determination in ensuring that every individual has the
                opportunity to receive proper medical care and lead a healthier
                life.
              </p>
            </div>
            <motion.div
              variants={aboutImage}
              initial="initial"
              animate="animate"
            >
              <img className="w-full max-h-96" src={aboutImg} alt="" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionAboutUs;
