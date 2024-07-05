import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/ScrollHook";
import { TSubscribCard } from "@/types/subscribCard";
import { Button } from "./button";
import { useAppSelector } from "@/redux/hooks";

const SubcscriptionCard = ({ items }: { items: TSubscribCard }) => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const { style, componentRef } = useScrollGrow();
  const { _id, amount, image, title } = items;
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <motion.div
        className="w-[250px] sm:min-w-80 lg:min-w-full bg-white dark:bg-zinc-950 rounded-md shadow-md dark:shadow-zinc-900 overflow-hidden"
        style={style}
        ref={componentRef}
      >
        <img
          className="w-full hover:scale-105 duration-500 h-56 rounded-xl"
          src={image}
          alt=""
        />
        <div className="p-3 flex justify-between flex-col h-auto">
          <div>
            <h3 className="text-lg text-primary dark:text-white font-bold">
              {title}
            </h3>
            <p className="italic text-secondary font-semibold">
              <span className=" text-primary dark:text-secondary">
                Total service
              </span>
              {amount}
            </p>
          </div>
          <div className="mt-5 text-center w-full">
            <Link to={`/subscription/${_id}`}>
              <Button className="text-white bg-primary dark:bg-secondary duration-500">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SubcscriptionCard;
