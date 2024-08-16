"use client";
import { FaWhatsapp, FaTimes, FaChartBar } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
type InputFormType = {
  total: number;
  NOVO: number;
  STARTED: number;
  STOPPED: number;
  REPLIED: number;
  NOTREPLIED: number;
  NOTSCHEDULED: number;
  SCHEDULED: number;
  ERROR: number;
  INVALIDNUMBER: number;
  IMPACTED: number;
  TOTALSCHEDULED: number;
  PERCENTENTAGESCHEDULED: number;
  JULI: number;
  BLOCKED: number;
};

const ChartThree: React.FC<InputFormType> = ({
  total,
  NOVO,
  STARTED,
  STOPPED,
  REPLIED,
  NOTREPLIED,
  NOTSCHEDULED,
  SCHEDULED,
  ERROR,
  INVALIDNUMBER,
  IMPACTED,
  TOTALSCHEDULED,
  PERCENTENTAGESCHEDULED,
  JULI,
  BLOCKED,
}) => {
  console.log(total, "Total leads");
  return (
    <div className="flex w-full flex-col bg-white dark:bg-neutral-900 rounded-sm  p-6">
      
      <div className="flex flex-col gap-4 sm:flex-row md:gap-6 xl:flex-col xl:gap-7.5">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative rounded-sm border border-stroke bg-white dark:bg-neutral-800 py-8 pl-7.5 pr-12  border-white dark:border-neutral-700  xl:py-11 2xl:pl-12 2xl:pr-16">
            <div className="flex flex-col gap-3 2xsm:flex-row 2xsm:items-center 2xl:gap-5 items-center justify-center ">
              <div className=" w-full flex flex-col justify-center items-center">
                <h3 className=" text-2xl font-bold text-neutral-400 dark:text-neutral-400">
                  Taxa de conversão
                </h3>
              </div>

              <div
                className="relative flex items-center justify-center"
                x-data="{ percent: 30 }"
              >
                <div
                  className="flex flex-col items-center justify-center"
                  style={{ width: "150px", height: "150px" }}
                >
                  <svg
                    className=" -rotate-90 transform"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <circle
                      className="text-gray-200 dark:text-strokedark"
                      strokeWidth="16"
                      stroke="currentColor"
                      fill="transparent"
                      r="58"
                      cx="66"
                      cy="66"
                    ></circle>
                    <circle
                      className="text-[#14b8a6]"
                      strokeWidth="16"
                      strokeDasharray="364.42"
                      strokeDashoffset={
                        364.42 - (PERCENTENTAGESCHEDULED / 100) * 364.42
                      }
                      stroke="currentColor"
                      fill="transparent"
                      r="58"
                      cx="66"
                      cy="66"
                    ></circle>
                  </svg>
                  <span
                    className="absolute text-xl font-bold text-black dark:text-white"
                    x-text={`${PERCENTENTAGESCHEDULED}%`}
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    {PERCENTENTAGESCHEDULED}%
                  </span>
                </div>
              </div>

              <div className="w-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Leads impactados
                </h3>
                <p className="mt-3 gap-2">
                  <span className="text-sm text-black dark:text-white gap-4">
                    <strong className="text-2xl font-bold text-[#14b8a6] pr-2"> {IMPACTED} </strong> de <strong className="pl-2 text-2xl font-bold text-rose-700"> {total} </strong>
                  </span>
                </p>
                <p className="mt-3.5 font-medium">
                  <span className="text-black dark:text-white">
                    {" "}
                    Media de mensagens
                  </span>
                  <span className="text-sm"> 05</span>
                </p>
              </div>

              <div className=" w-full flex flex-col justify-center items-center">
                <div className=" text-white p-2 w-full h-auto">
                  <div className="flex flex-row">
                    <div className="flex flex-col sticky top-0  w-full">
                      <div className=" p-4">
                        <div className="flex-none sm:flex  mb-2">
                          <div
                            className={`flex justify-center items-center relative h-10 w-10  sm:mb-0 mb-1 bg-green-800 rounded-full mt-4 `}
                          >
                            <GiProgression size={20} />
                          </div>
                          <div className="flex-auto sm:ml-2 justify-evenly ">
                            <div className="flex items-center justify-between sm:mt-2">
                              <div className="flex items-center w-full">
                                <div className="flex flex-col w-full">
                                  <div className="flex items-center space-x-3.5 pl-4">
                                    <div className="flex text-center items-center  justify-between w-full  my-3 text-xs bg-transparent  font-medium tracking-wider  transition ease-in duration-300 rounded-sm">
                                      <div className="flex w-full text-lg  first-letter:flex items-center justify-between dark:text-gray-200 text-neutral-500   leading-none">
                                        {/* <div className={`${color} h-8 w-14`}></div> */}
                                        <h3>Processados</h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex w-full  my-20  px-0 justify-between">
                          <div className="flex w-full  first-letter:flex items-center justify-between dark:text-gray-200 text-neutral-500   leading-none ">
                            <div className="flex w-full flex-col gap-10 pt-5 xl:pt-4">
                              <div className="relative h-3 w-full rounded-full dark:bg-green-600/15 dark:dark:bg-green-600/15">
                                <div
                                  style={{
                                    width: `${PERCENTENTAGESCHEDULED}%`,
                                  }}
                                  className={`absolute left-0 h-full  rounded-full bg-green-800`}
                                >
                                  <span
                                    className={`absolute -right-4 bottom-full z-1 mb-2 inline-block rounded-sm  bg-green-800 px-2 py-1 text-xl font-bold text-white`}
                                  >
                                    <span
                                      className={`absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-green-800`}
                                    ></span>
                                    {PERCENTENTAGESCHEDULED + 20}%
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

              <button className="absolute -right-5 top-1/2 -translate-y-1/2 rotate-[270deg] rounded-t-lg bg-[#f3ce3d] py-1 px-4 font-medium text-white">
                Ativo
              </button>
            </div>
          </div>

          <div className="flex-grow rounded-sm border border-stroke bg-white dark:bg-neutral-800 p-4  border-white dark:border-neutral-700  md:p-6 xl:p-7.5">
            <div className="mt-5 flex gap-2 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
                <FaWhatsapp className="text-green-600" size={25} />
              </div>

              <div className="flex-grow">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-black dark:text-white">
                    Media disparos por dia
                  </span>
                  <span className="text-sm font-medium text-black dark:text-white">
                    40
                  </span>
                </div>

                <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                  <span className="absolute left-0 block h-1.5 w-full rounded-full bg-green-600"></span>
                </div>
              </div>
              {/* //#fb1949 */}
            </div>

            <div className="mt-5 flex gap-2 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_608_18010)">
                    <path
                      d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
                      fill="#f2524a"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="myClip">
                      <rect
                        // width="23.1404"
                        // height="23.1404"
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(0.324219 0.0314941)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="flex-grow">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-black dark:text-white">
                    Total de leads
                  </span>
                  <span className="text-sm font-medium text-black dark:text-white">
                    {total}
                  </span>
                </div>

                <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                  <span className="absolute left-0 block h-1.5 w-full rounded-full bg-[#f2524a]"></span>
                </div>
              </div>
            </div>
            <div className="mt-5 flex gap-2 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_608_18010)">
                    <path
                      d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
                      fill="#60a5fa"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="myClip">
                      <rect
                        // width="23.1404"
                        // height="23.1404"
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(0.324219 0.0314941)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="flex-grow">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-black dark:text-white">
                    Em contato
                  </span>
                  <span className="text-sm font-medium text-black dark:text-white">
                    {STARTED}
                  </span>
                </div>

                <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                  <span className="absolute left-0 block h-1.5 w-1/3 rounded-full bg-blue-400"></span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-6 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_608_18010)">
                    <path
                      d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
                      fill="#17a2b8"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="myClip">
                      <rect
                        // width="23.1404"
                        // height="23.1404"
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(0.324219 0.0314941)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="flex-grow">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-black dark:text-white">
                    Com interesse
                  </span>
                  <span className="text-sm font-medium text-black dark:text-white">
                    {NOTSCHEDULED}
                  </span>
                </div>

                <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                  <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-[#17a2b8]"></span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-6 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_608_18010)">
                    <path
                      d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
                      fill="#2eb38d"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="myClip">
                      <rect
                        // width="23.1404"
                        // height="23.1404"
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(0.324219 0.0314941)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="flex-grow">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-black dark:text-white">
                    Interesse avançado
                  </span>
                  <span className="text-sm font-medium text-black dark:text-white">
                    {SCHEDULED}
                  </span>
                </div>

                <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                  <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-[#2eb38d]"></span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-6 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_608_18010)">
                    <path
                      d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
                      fill="#F2994A"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="myClip">
                      <rect
                        // width="23.1404"
                        // height="23.1404"
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(0.324219 0.0314941)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="flex-grow">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-black dark:text-white">
                    Sem retorno
                  </span>
                  <span className="text-sm font-medium text-black dark:text-white">
                    {NOTREPLIED}
                  </span>
                </div>

                <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                  <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-[#F2994A]"></span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-6 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_608_18010)">
                    <path
                      d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
                      fill="#e00404"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="myClip">
                      <rect
                        // width="23.1404"
                        // height="23.1404"
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(0.324219 0.0314941)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="flex-grow">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-black dark:text-white">
                    Sem interesse
                  </span>
                  <span className="text-sm font-medium text-black dark:text-white">
                    {STOPPED}
                  </span>
                </div>

                <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                  <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-[#e00404]"></span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-6 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_608_18010)">
                    <path
                      d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
                      fill="#e00404"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="myClip">
                      <rect
                        // width="23.1404"
                        // height="23.1404"
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(0.324219 0.0314941)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="flex-grow">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-black dark:text-white">
                    WhatsApp invalidos
                  </span>
                  <span className="text-sm font-medium text-black dark:text-white">
                    {INVALIDNUMBER}
                  </span>
                </div>

                <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                  <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-[#e00404]"></span>
                </div>
              </div>
            </div>
            {/* 
          <div className="mt-5 flex gap-6 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
           <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_608_18010)">
                  <path
                    d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
                    fill="#F2994A"
                  ></path>
                </g>
                <defs>
                  <clipPath id="myClip" >
                    
                    <rect
                      // width="23.1404"
                      // height="23.1404"
                      width="100" height="100"
                      fill="white"
                      transform="translate(0.324219 0.0314941)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex-grow">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium text-black dark:text-white">
                  Mensagens WhatsApp
                </span>
                <span className="text-sm font-medium text-black dark:text-white">250</span>
              </div>

              <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-[#F2994A]"></span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-6 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
            <FaTimes className="text-red-500"/>
            </div>

            <div className="flex-grow">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium text-black dark:text-white">
                  Sem retorno
                </span>
                <span className="text-sm font-medium text-black dark:text-white">120</span>
              </div>

              <div className="relative h-2 w-full rounded-full bg-stroke dark:bg-strokedark">
                <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-red-700"></span>
              </div>
            </div>
          </div>

           <div className="mt-5 flex gap-6 bg-gray-100/80 dark:bg-neutral-800  rounded-md px-2 py-2">
           <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
             < FaChartBar className="text-green-600"/>
            </div>

            <div className="flex-grow">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium text-black dark:text-white">
                  Positivas
                </span>
                <span className="text-sm font-medium text-black dark:text-white">180</span>
              </div>

              <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-green-600"></span>
              </div>
            </div>
          </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;


// import {
//   FaWhatsapp,
//   FaTimes,
//   FaChartBar,

// } from "react-icons/fa";
// export default function ChartThree() {
//   return (
//     <div className="flex w-full flex-col bg-white dark:bg-neutral-900 rounded-sm  p-6">
//       <div className="flex flex-col gap-4 sm:flex-row md:gap-6 xl:flex-col xl:gap-7.5">
//       <div className="grid gap-4 md:grid-cols-2">
//         <div className="relative rounded-sm border border-stroke bg-white dark:bg-neutral-800 py-8 pl-7.5 pr-12  border-white dark:border-neutral-700  xl:py-11 2xl:pl-12 2xl:pr-16">
//           <div className="flex flex-col gap-3 2xsm:flex-row 2xsm:items-center 2xl:gap-9 items-center justify-center">
//             <div
//               className="relative flex items-center justify-center"
//               x-data="{ percent: 30 }"
//             >
//               <div
//                 className="flex flex-col items-center justify-center"
//                 style={{ width: "150px", height: "150px" }}
//               >
//                 <svg
//                   className=" -rotate-90 transform"
//                   style={{ width: "150px", height: "150px" }}
//                 >
//                   <circle
//                     className="text-gray-200 dark:text-strokedark"
//                     strokeWidth="16"
//                     stroke="currentColor"
//                     fill="transparent"
//                     r="58"
//                     cx="66"
//                     cy="66"
//                   ></circle>
//                   <circle
//                     className="text-rose-700"
//                     strokeWidth="16"
//                     strokeDasharray="364.42"
//                     strokeDashoffset={364.42 - (30 / 100) * 364.42}
//                     stroke="currentColor"
//                     fill="transparent"
//                     r="58"
//                     cx="66"
//                     cy="66"
//                   ></circle>
//                 </svg>
//                 <span
//                   className="absolute text-xl font-bold text-black dark:text-white"
//                   x-text="`${percent}%`"
//                   style={{ top: "50%", transform: "translateY(-50%)" }}
//                 >
//                   30%
//                 </span>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-1xl font-bold text-black dark:text-white">
//                 Mensagem disponivel
//               </h3>
//               <p className="mt-3.5 font-medium">
//                 <span className="text-black dark:text-white">250</span>
//                 <span className="text-sm"> MSG</span> /
//                 <span className="text-black dark:text-white">500</span>
//                 <span className="text-sm"> MSG</span>
//               </p>
//             </div>

//             <button className="absolute -right-5 top-1/2 -translate-y-1/2 rotate-[270deg] rounded-t-lg bg-[#f3ce3d] py-1 px-4 font-medium text-white">
//               Ativo
//             </button>
//           </div>
//         </div>

//         <div className="flex-grow rounded-sm border border-stroke bg-white dark:bg-neutral-800 p-4  border-white dark:border-neutral-700  md:p-6 xl:p-7.5">
//           <div className="flex gap-4">
//             <div className="flex h-11.5 w-11.5 items-center justify-center rounded-md ">
             
//               <FaWhatsapp className="text-success"/>
//             </div>

//             <div className="flex-grow">
//               <div className="mb-3 flex items-center justify-between">
//                 <span className="font-medium text-black dark:text-white">
//                   Media por diaparos
//                 </span>
//                 <span className="text-sm font-medium">20 MSG</span>
//               </div>

//               <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
//                 <span className="absolute left-0 block h-1.5 w-5/6 rounded-full bg-primary"></span>
//               </div>
//             </div>
//           </div>

//           <div className="mt-5 flex gap-4">
//            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* <g >
//                   <path
//                     d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
//                     fill="#F2994A"
//                   ></path>
//                 </g> */}
//                 <defs>
//                   <clipPath id="myClip" >
                    
//                     <rect
//                       // width="23.1404"
//                       // height="23.1404"
//                       width="100" height="100"
//                       fill="white"
//                       transform="translate(0.324219 0.0314941)"
//                     ></rect>
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>

//             <div className="flex-grow">
//               <div className="mb-3 flex items-center justify-between">
//                 <span className="font-medium text-black dark:text-white">
//                   Mensagens WhatsApp
//                 </span>
//                 <span className="text-sm font-medium text-black dark:text-white">250</span>
//               </div>

//               <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
//                 <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-[#F2994A]"></span>
//               </div>
//             </div>
//           </div>

//           <div className="mt-5 flex gap-4">
//             <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
//             <FaTimes className="text-red-500"/>
//             </div>

//             <div className="flex-grow">
//               <div className="mb-3 flex items-center justify-between">
//                 <span className="font-medium text-black dark:text-white">
//                   Sem retorno
//                 </span>
//                 <span className="text-sm font-medium text-black dark:text-white">120</span>
//               </div>

//               <div className="relative h-2 w-full rounded-full bg-stroke dark:bg-strokedark">
//                 <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-red-700"></span>
//               </div>
//             </div>
//           </div>

//           <div className="mt-5 flex gap-4">
//            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-800">
//              < FaChartBar className="text-green-600"/>
//             </div>

//             <div className="flex-grow">
//               <div className="mb-3 flex items-center justify-between">
//                 <span className="font-medium text-black dark:text-white">
//                   Positivas
//                 </span>
//                 <span className="text-sm font-medium text-black dark:text-white">180</span>
//               </div>

//               <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
//                 <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-green-600"></span>
//               </div>
//             </div>
//           </div>

//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }
