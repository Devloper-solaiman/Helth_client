import { Link } from "react-router-dom";

import {
  Facebook,
  Linkedin,
  MessageCircleCodeIcon,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";

const Footer = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <footer className="bg-primary dark:bg-black text-secondary">
        <div className="pt-12">
          <div className="grid grid-cols-12 px-4 lg:px-8 xl:px-16">
            <div className="col-span-12 md:col-span-4 lg:col-span-5">
              <div>
                <Link to="/" className=" flex items-end gap-1">
                  <img
                    className="h-28"
                    src="https://i.ibb.co/sH3NS2c/helth-logo.png"
                    alt=""
                  />
                </Link>
              </div>

              <p className=" text-gray-400 text-start">
                <p className="text-xl font-bold my-2">
                  Gaza's fragile health system needs help here
                </p>
                The health system in Gaza has long faced significant challenges
                due to various factors, including political conflict, economic
                instability, and limited resources..
              </p>
            </div>

            <div className="col-span-8 md:col-span-4 lg:col-span-4 relative top-5 text-center">
              <p className="text-xl font-semibold pb-7 pt-10 md:pt-2">
                <Button className="text-2xl">
                  Contact <MessageCircleCodeIcon className="w-10 h-10 ms-2" />
                </Button>
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="leading-relaxed w-10/12">
                  Barishal, Barishal Sadar, Bangladesh
                </li>
                <li>
                  Contact:
                  <span className="text-secondary"> (+880) 177-7778777 </span>
                </li>
                <li>
                  Email:
                  <span className="text-secondary"> palistine@helth.com</span>
                </li>
              </ul>
              <div className="flex justify-center items-center gap-5 my-5">
                <Facebook className="text-secondary cursor-pointer" />
                <Linkedin className="text-secondary cursor-pointer" />

                <Twitter className="text-secondary cursor-pointer" />
              </div>
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-3 relative top-5">
              <img src="https://i.ibb.co/q9wPgVY/hero-img.jpg" alt="" />
            </div>
          </div>
          <hr className="w-full mx-auto " />
          <div className="flex justify-center text-gray-500 text-xs">
            <span>Paword By P Herro @ {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
