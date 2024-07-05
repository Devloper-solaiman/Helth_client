import { NavLink } from "react-router-dom";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { toggleTheme } from "@/redux/features/theme/themeSlice";
import Container from "../ui/Container";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode } = useAppSelector((store) => store.theme);
  const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const items = [
    <ul
      key="navigation-items"
      className="flex justify-end items-center gap-5 lg:flex-row flex-col lg:py-0 py-8"
    >
      <li className="group relative text-white">
        <NavLink
          to="/about-us"
          className={({ isActive }) => cn({ "text-secondary": isActive })}
        >
          About
        </NavLink>
      </li>
      <li className=" group relative text-white">
        <NavLink
          to="/donations"
          className={({ isActive }) => cn({ "text-secondary": isActive })}
        >
          All Donations
        </NavLink>
      </li>
      <li className=" group relative text-white">
        <NavLink
          to="/leaderboard"
          className={({ isActive }) => cn({ "text-secondary": isActive })}
        >
          Leaderboard
        </NavLink>
      </li>
      <li className=" group relative text-white">
        <NavLink
          to="/community"
          className={({ isActive }) => cn({ "text-secondary": isActive })}
        >
          Community
        </NavLink>
      </li>
      <li key="volunteer" className="  group relative text-white">
        <NavLink
          to="/volunteer"
          className={({ isActive }) => cn({ "text-secondary": isActive })}
        >
          Volunteer
        </NavLink>
      </li>
      {user ? (
        <li className=" group relative text-white">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => cn({ "text-secondary": isActive })}
          >
            DashBoard
          </NavLink>
        </li>
      ) : (
        ""
      )}
      {user ? (
        <li key="Logout" onClick={handleLogout}>
          <Button className="bg-white text-black h-7 p-1">Logout</Button>
        </li>
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => cn({ "text-secondary": isActive })}
          >
            LogIn
          </NavLink>
        </li>
      )}
      <button
        onClick={handleToggleTheme}
        className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
      >
        {darkMode ? <Sun /> : <Moon size={24} />}
      </button>
    </ul>,
  ];
  return (
    <motion.div
      className={`bg-primary text-white z-50 ${darkMode ? "dark" : ""}`}
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Container className=" dark:bg-black dark:text-white">
        <header className="w-[80%] mx-auto py-3 flex justify-between items-center z-50 ">
          {user ? (
            <NavLink to="/">
              <img
                className="h-6 p-0"
                src="https://i.ibb.co/sH3NS2c/helth-logo.png"
                alt="/"
              />
            </NavLink>
          ) : (
            <NavLink to="/">
              <img
                className="h-12 p-0"
                src="https://i.ibb.co/Gnt1JR5/logoD.png"
                alt="/"
              />
            </NavLink>
          )}

          <nav
            className={
              mobileMenuOpen
                ? " w-full lg:static absolute top-[50px] left-0 lg:bg-none bg-primary transition-all lg:z-0 -z-50 "
                : " w-full lg:static absolute top-[-600px] left-0 transition-all lg:z-0 -z-50"
            }
          >
            <div className="hidden lg:block dark:bg-black dark:text-white ">
              {items}
            </div>
            <div className="block lg:hidden dark:bg-black dark:text-white">
              {items}
            </div>
          </nav>
          <div className="lg:hidden">
            {mobileMenuOpen ? (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <h1 className="cursor-pointer font-bold text-xl border-2 border-white rounded-full px-2 ">
                  X
                </h1>
              </div>
            ) : (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <h1 className="cursor-pointer font-bold text-xl px-2 ">
                  <TiThMenu />
                </h1>
              </div>
            )}
          </div>
        </header>
      </Container>
    </motion.div>
  );
};

export default Navbar;
