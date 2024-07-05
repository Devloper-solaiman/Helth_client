import ScrollToTop from "@/hooks/ScrollToTop";
import "../../assets/Mission.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);
  return (
    <motion.div
      ref={view}
      animate={
        inView
          ? { opacity: 1, y: 0, transition: { duration: 1 } }
          : { opacity: 0, y: 150, transition: { duration: 1 } }
      }
      className="h-[100vh] flex justify-center items-center contact"
    >
      <ScrollToTop />
      <form className="w-[670px] h-[600px] flex justify-center rounded-3xl flex-wrap">
        <h1 className="text-white font-bold mt-5 w-[500px] text-center leading-3">
          Contact Us Form
        </h1>
        <input type="text" id="firstName" placeholder="First Name" required />
        <input type="text" id="lastName" placeholder="Last Name" required />
        <input type="email" id="email" placeholder="Email" required />
        <input type="text" id="mobile" placeholder="Mobile" required />
        <h4>Type Your Message Here...</h4>
        <textarea required></textarea>
        <input type="submit" value="Send" id="button" />
      </form>
    </motion.div>
  );
};

export default Contact;
