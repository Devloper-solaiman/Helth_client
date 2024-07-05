import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import HeroImg from "../../assets/gallary-2.png";

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
const Banner = () => {
  return (
    <motion.div
      className="bg-center bg-no-repeat bg-cover h-screen flex justify-center items-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${HeroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 1 }}
    >
      <motion.div
        className=" mx-auto  flex justify-center items-center text-center flex-col"
        variants={intro}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-gray-300 text-lg md:text-2xl lg:text-7xl font-serif mb-4"
          variants={introChildren}
        >
          Palistine Helth Community
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl text-orange-400 mb-2"
          variants={introChildren}
        >
          Please Help & Doneted
        </motion.h2>
        <motion.img
          className="h-44 w-44 mb-5 rounded-full"
          src="https://i.ibb.co/q9wPgVY/hero-img.jpg"
          alt=""
        />

        <motion.div variants={introChildren}>
          <Link to="/subscriptions">
            <Button className="bg-primary text-white ">Save the child</Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
