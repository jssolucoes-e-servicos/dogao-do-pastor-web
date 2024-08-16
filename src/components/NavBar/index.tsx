// "use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaReply, FaSun, FaMoon } from "react-icons/fa";
import SliderButton from "../buttom/menuSlider";
import { useTheme } from "../ThemeProvider";
import { UserType } from "@/types";
import { getClientAuthenticatedAction } from "@/actions/users/get-client-authenticated.action";
import { FaBarsStaggered } from "react-icons/fa6";

interface NavbarProps {
  toggleSidebar: () => void;
  isOpen: boolean;
  theme: string;
  onThemeToggle:()=> void
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isOpen, theme }) => {
  const [userData, setUserData] = useState<UserType | null>(null);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    getAuthenticatedUserData();
  }, []);

  const getAuthenticatedUserData = async () => {
    try {
      const data = await getClientAuthenticatedAction();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div className="col-span-full h-[64px] lg:h-[64px] px-4 lg:pr-8 bg-rose-700 dark:bg-neutral-800  border border-transparent border-b-stone-700 flex items-center justify-between">
      <div className="flex justify-between items-center w-140">
        <button
          className="py-4 pl-4 col-span-full h-[72px] lg:h-[70px] px-4 lg:pr-8  border border-transparent  flex items-center justify-between"
          onClick={toggleSidebar}
          style={{ position: "relative" }}
        >
          {isOpen ? <FaBarsStaggered /> : <FaBars />}
        </button>
      </div>
      <div className="flex justify-center items-center gap-4 w-40">
        <SliderButton />
        <button
          onClick={handleToggleTheme}
          className="p-3 rounded-full text-white hover:text-neutral-700 "
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
