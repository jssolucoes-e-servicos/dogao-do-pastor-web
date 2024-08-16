"use client";

import { useState } from "react";
import {  X } from "lucide-react";
import MainButton from "./MainButton";
import Link from "next/link";
function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 w-full bg-white">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between md:mx-[9rem] items-center">
          <div>
            {/* <img src="/images/epixelap_logo.png" alt="logo" /> */}
            <img src="/assets/ivera.svg" alt="logo" className=" w-40"/>
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
          <Link href="#anchor_home">
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Inicio
            </p>
            </Link>
            <Link href="#anchor_solution">  
             <span
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Soluções
            </span>
            </Link>
            <Link href="#anchor_quemsomos">
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Quem Somos
            </p>
            </Link>
            <Link href="#anchor_contact">
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Contato
            </p>
            </Link>
          </div>
          <div className="flex items-center gap-[40px] select-none">
          <Link href="/login">
            <span
              className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 px-4 py-2 bg-primary text-white w-[10rem] md:w-[10rem] select-none rounded-[0.625rem] hover:opacity-90 hover:bg-primary h-[3.1215rem] shadow-none`}
            >
              Acessar o Acelera
            </span>
           </Link>
            {/* <MainButton text="Acessar o Acelera" classes="shadow-none" /> */}
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-[#ff6600] py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img
              src="/assets/ivera.svg"
              alt="logo"
              className="w-[7rem]"
            />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/svgs/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Inicio
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Quem Somos
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Soluções
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Contato
              </p>

              <div className="flex flex-col gap-[40px] select-none">
              <Link href="/login">
                <span
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                Acessar o Acelera
                </span>
               </Link>
               <MainButton text="Acessar o Acelera" classes="shadow-none" />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
