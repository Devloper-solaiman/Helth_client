import useScrollGrow from "@/hooks/ScrollHook";
import { TVolunteerCard } from "@/types/volunteer.type";
import { motion } from "framer-motion";
import {
  AtSign,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const VolunteerCard = ({ volunteer }: { volunteer: TVolunteerCard }) => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      className="w-[250px] group bg-white dark:bg-zinc-950 rounded-md dark:shadow-zinc-900 border dark:border-primary border-secondary shadow-md"
      style={style}
      ref={componentRef}
    >
      <img className="h-64 w-full rounded-t-md" src={volunteer.image} alt="" />
      <div className="mt-2 w-full px-2">
        <p className=" font-bold mb-1 flex items-center">
          <span className="text-secondary">
            <AtSign width={20} height={16} className="text-secondary" />
          </span>{" "}
          {volunteer.name}
        </p>
        <p className="font-bold text-sm flex items-center  mb-1">
          <MapPin width={20} height={16} className="text-secondary" />
          <span>{volunteer.location}</span>
        </p>
        <p className="font-bold text-sm flex items-center  mb-1">
          <Phone width={20} height="16" className="text-secondary" />
          <span>{volunteer.phoneNumber}</span>
        </p>
      </div>
      <div className="flex justify-around items-center gap-5 mt-2 py-2 bg-primary w-full rounded-b-md">
        <Linkedin className="text-secondary cursor-pointer" />
        <Instagram className="text-secondary cursor-pointer" />
        <Twitter className="text-secondary cursor-pointer" />
      </div>
    </motion.div>
  );
};

export default VolunteerCard;
