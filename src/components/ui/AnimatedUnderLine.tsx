import { motion } from "framer-motion";

const AnimatedUnderLine = ({ className = "" }) => {
  return (
    <div>
      <motion.p
        className={`w-28 h-1 rounded-xl  ${className}`}
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.p>
    </div>
  );
};

export default AnimatedUnderLine;
