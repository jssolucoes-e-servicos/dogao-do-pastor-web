"use client";
import React, { ReactNode, useState, useEffect, useRef } from "react";

import { Lead } from "@/types/leads/leads";
import {
  FaDownload,
  FaEllipsisV,
  FaFilePdf,
  FaList,
  FaWhatsapp,
} from "react-icons/fa";

import "jspdf-autotable";
import Link from "next/link";
import { FaUserGroup } from "react-icons/fa6";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  color: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
  status: string;
}

const today = new Date().toISOString().split("T")[0];

const ProgressDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  color,
  rate,
  levelUp,
  levelDown,
  children,
  status,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [modalTitle, setModalTitle] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const formatNumber = (number: number) => {
    return number.toLocaleString("pt-BR");
  };


  return (
    <>
      <div className="dark:bg-neutral-900 bg-slate-50 text-white p-2 w-full">
        <div className="flex flex-row">
          <div className="flex flex-col sticky top-0  w-full">
            <div className=" bg-white dark:bg-neutral-800/60 border-none dark:border-neutral-900 shadow-md  rounded-2xl p-4">
              <div className="flex-none sm:flex">
                <div
                  className={`flex justify-center items-center relative h-10 w-10  sm:mb-0 mb-1 ${color} rounded-full mt-4 `}
                >
                  {children}
                </div>
                <div className="flex-auto sm:ml-2 justify-evenly ">
                  <div className="flex items-center justify-between sm:mt-2">
                    <div className="flex items-center w-full">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center space-x-3.5 pl-4">
                          <div className="flex text-center items-center  justify-between w-full  my-3 text-xs bg-transparent  font-medium tracking-wider  transition ease-in duration-300 rounded-sm">
                            <div className="flex w-full text-lg  first-letter:flex items-center justify-between dark:text-gray-200 text-neutral-500   leading-none">
                              {/* <div className={`${color} h-8 w-14`}></div> */}
                              <h3>{title}</h3>
                            </div>
                          </div>
                        </div>
                        {/* <div className="mb-1 w-full flex justify-center items-center text-base font-medium text-red-700 dark:text-red-500">
                          {total}%
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 mb-4 dark:bg-gray-700">
                          <div
                            className="bg-red-600 h-4 rounded-full dark:bg-red-500"
                            style={{ width: `${total}%` }}
                          ></div>
                        </div> */}

                        <div className="flex w-full  my-1  px-0 justify-between">
                          <div className="flex w-full  first-letter:flex items-center justify-between dark:text-gray-200 text-neutral-500   leading-none ">
                            <div className="flex w-full flex-col gap-10 pt-5 xl:pt-4">
                              <div className="relative h-5 w-full rounded-full dark:bg-green-600/15 bg-green-600/15">
                                <div
                                 style={{ width: `${total}%` }}
                                  className={`absolute left-0 h-full  rounded-full ${color}`}
                                >
                                  <span className={`absolute -right-4 bottom-full z-1 mb-2 inline-block rounded-sm  ${color} px-2 py-1 text-xl font-bold text-white`}>
                                    <span className={`absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 ${color}`}></span>
                                    {total}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressDataStats;
