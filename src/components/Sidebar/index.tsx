"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaWhatsapp,
  FaTelegram,
  FaBars,
  FaTimes,
  FaServer,
  FaChartBar,
  FaRegFilePdf,
  FaChevronDown,
  FaList,
} from "react-icons/fa";
import Link from "next/link";
import type { UserType } from "@/types";
import api from "@/services/api";
import { destroyCookie } from "nookies";
import { useTheme } from "../ThemeProvider";
import { getClientAuthenticatedAction } from "@/actions/users/get-client-authenticated.action";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserType | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeLink, setActiveLink] = useState<string | null>("/");
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getClientAuthenticatedAction();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const toggleSubmenu = (submenuId: number) => {
    setActiveSubmenu((prevSubmenu) =>
      prevSubmenu === submenuId ? null : submenuId
    );
  };

  const isSubmenuOpen = (submenuId: number) => activeSubmenu === submenuId;

  const closeAllSubmenus = () => {
    setActiveSubmenu(null);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 950;
      if (isMobile) {
        closeAllSubmenus();
        setIsSidebarOpen(false);
      } else if (isOpen) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const handleLogout = () => {
    destroyCookie(undefined, "acl1");
    destroyCookie(undefined, "acl0");
    router.replace("/login");
  };

  return (
    <div
      className={`dark:bg-neutral-800 bg-white  text-white ${
        isOpen && isSidebarOpen ? "w-60" : "w-0"
      } flex flex-col transition-all duration-300 `}
    >
      <div
        className="py-4 pl-4 col-span-full h-[64px] lg:h-[64px] px-4 lg:pr-8  flex items-center justify-center"
        style={{ position: "relative" }}
      >
        <img src="/assets/ivera.svg" alt="Logo" className="w-48 h-10" />
      </div>
      <div>
        <div className="p-4">
          {isOpen && (
            <>
              <div className="dark:bg-gray-800/15 bg-gray-100  parent-container rounded-lg py-1 pl-2 dar:hover:bg-neutral-800 w-100 flex flex-col items-start justify-start md:flex-row hover:text-zinc-600 transition-all duration-300 mb-2 ">
                <div className="py-4 pl-4">
                  <p className="text-[10px] dark:text-gray-300  text-gray-500">
                    {userData?.profile === "master"
                      ? "Administrador master"
                      : userData?.profile === "manager"
                      ? "Gerente"
                      : "Empreendimento"}
                  </p>
                  <p className="text-[12px] dark:text-gray-300  text-gray-500">
                    Pertence á{" "}
                    <span className="text-rose-700 dark:text-rose-700 font-bold">
                      {" "}
                      {userData && userData.company?.name}
                    </span>
                  </p>
                </div>
              </div>
              <Link
                href="/dashboard"
                onClick={() => {
                  closeAllSubmenus();
                  handleLinkClick("/");
                }}
                className={`text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 hover:text-zinc-600 font-medium mb-1 py-3  pl-2  rounded-md w-full flex items-center  transition-all duration-300 ${
                  activeLink === "/" ? "text-white bg-rose-700" : ""
                }`}
              >
                <FaHome className="mr-2 text-neutral-400" />
                Home
              </Link>

             
              {/* {userData && userData?.profile === "master" || userData?.profile === "manager" &&( */}
             
                  <Link
                    href="/dashboard/comanda/pedido"
                    onClick={() => {
                      handleLinkClick("/dashboard/comanda/pedido");
                      closeAllSubmenus();
                    }}
                    className={`text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2 w-full flex items-center  transition-all duration-300 ${
                      activeLink === "/dashboard/comanda/pedido"
                        ? "text-white bg-rose-700"
                        : ""
                    }`}
                  >
                    <FaList className="mr-2 text-neutral-400" />
                    Pedidos
                  </Link>
                  <Link
                    href="/dashboard/comanda/lista"
                    onClick={() => {
                      handleLinkClick("/dashboard/comanda/lista");
                      closeAllSubmenus();
                    }}
                    className={`text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2 w-full flex items-center  transition-all duration-300 ${
                      activeLink === "/dashboard/comanda/lista"
                        ? "text-white bg-rose-700"
                        : ""
                    }`}
                  >
                    <FaHome className="mr-2 text-neutral-400" />
                    Lista de pedidos
                  </Link>
            

              <div
                className={`text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2 w-full flex items-center cursor-pointer  transition-all duration-300 
             
              ${isSubmenuOpen(4) ? "text-white bg-rose-700" : ""}`}
                onClick={() => {
                  toggleSubmenu(4);
                  handleLinkClick("#");
                }}
              >
                <FaServer className="mr-2" />
                Relatorios
                <FaChevronDown className="py-1 pl-1 mr-2" />
              </div>

              {isSubmenuOpen(4) && (
                <div className="pl-0 transition ease-in-out duration-500">
                  
                    <>
                      <Link
                        href="/dashboard/"
                        onClick={() => {
                          handleLinkClick("/dashboard/");
                          closeAllSubmenus();
                        }}
                        className={`text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2 w-full flex items-center transition-all duration-300 ${
                          activeLink === "/dashboard/"
                            ? "text-white bg-rose-700"
                            : ""
                        }`}
                      >
                        <FaHome className="mr-2 text-neutral-400" />
                        Vendas
                      </Link>
                     
                     
                    </>
                 
                </div>
              )}

          

              <div
                className={`text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2 w-full flex items-center cursor-pointer  transition-all duration-300 ${
                  isSubmenuOpen(1) ? "text-white bg-rose-700" : ""
                }`}
                onClick={() => {
                  toggleSubmenu(1);
                  handleLinkClick("/app/accout");
                }}
              >
                <FaUser className="mr-2" />
                Minha Conta
                <FaChevronDown className="py-1 pl-1 mr-2" />
              </div>

              {isSubmenuOpen(1) && (
                <div className="pl-0 transition-all duration-600">
                   <Link
                        href="/dashboard/usuario"
                        onClick={() => {
                          handleLinkClick("/dashboard/usuario");
                          closeAllSubmenus();
                        }}
                        className={`text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2 w-full flex items-center transition-all duration-300 ${
                          activeLink === "/dashboard/usuario"
                            ? "text-white bg-rose-700"
                            : ""
                        }`}
                      >
                        <FaHome className="mr-2 text-neutral-400" />
                        Usuarios
                      </Link>
                 
                  <Link
                    href="/dashboard/minha-conta/atualizar"
                    onClick={() => {
                      handleLinkClick("/dashboard/minha-conta/atualizar");
                      closeAllSubmenus();
                    }}
                    className={`text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2 w-full flex items-center  transition-all duration-300 ${
                      activeLink === "/dashboard/minha-conta/atualizar"
                        ? "text-white bg-rose-700"
                        : ""
                    }`}
                  >
                    <FaHome className="mr-2 text-neutral-400" />
                    Configurar
                  </Link>
                </div>
              )}

              <Link
                href="#"
                className="text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2  w-full flex items-center"
                target="_blank"
              >
                <FaRegFilePdf className="mr-2" />
                Instrução de uso
              </Link>

              <Link
                href="https://wa.me/555182488374?text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20AceleraIA."
                target="_blank"
                className="text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2  w-full flex items-center"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </Link>

              {/* <Link
                target="_blank"
                href="#"
                className="text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2  w-full flex items-center"
              >
                <FaTelegram className="mr-2" />
                Telegram Global
              </Link> */}
              <Link
                target="_blank"
                href="#"
                className="text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium rounded-md mb-1 py-3  pl-2 hover:bg-zinc-200  w-full flex items-center"
              >
                <FaTelegram className="mr-2" />
                Telegram
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm dark:text-white text-neutral-800 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-md mb-1 py-3  pl-2  w-full flex items-center transition-all duration-300"
              >
                <FaSignOutAlt className="mr-2" />
                Sair
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
