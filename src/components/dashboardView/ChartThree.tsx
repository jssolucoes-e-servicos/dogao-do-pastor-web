
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
    <>

 {/* <div className="flex items-center justify-center  bg-gray-300 w-full">
    <section
      className="w-full p-6 rounded-lg max-w-2xl shadow-lg shadow-gray-300 bg-white"
    >
      <header className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 shrink-0 w-6 h-6 text-gray-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 19l16 0"></path>
          <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
        </svg>
        <h3 className="font-medium text-lg">Area Liveability Score</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 shrink-0 w-6 h-6 text-gray-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 9h.01"></path>
          <path d="M11 12h1v4h1"></path>
        </svg>
      </header>
      <section className="py-4 grid grid-cols-2 gap-x-6">
        <div className="flex items-center py-3">
          <span
            className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M7 21l3 -4"></path>
              <path d="M16 21l-2 -4l-3 -3l1 -6"></path>
              <path d="M6 12l2 -3l4 -1l3 3l3 1"></path>
            </svg>
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex items-center">
              <h4
                className="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Walkability
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
              </h4>
              <span className="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                6.2 / 10
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-blue-500 w-full block rounded-full"
                styles={{width:'62%'}}
              ></span>
            </div>
          </div>
        </div>
        <div className="flex items-center py-3">
          <span
            className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M7 21l3 -4"></path>
              <path d="M16 21l-2 -4l-3 -3l1 -6"></path>
              <path d="M6 12l2 -3l4 -1l3 3l3 1"></path>
            </svg>
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex items-center">
              <h4
                className="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Health
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
              </h4>
              <span className="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                6.8 / 10
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-blue-500 w-full block rounded-full"
                style={{width:'62%'}}
              ></span>
            </div>
          </div>
        </div>
        <div className="flex items-center py-3 border-t border-gray-100">
          <span
            className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 21h18"></path>
              <path d="M19 21v-4"></path>
              <path
                d="M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2z"
              ></path>
              <path d="M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14"></path>
              <path d="M9 17v4"></path>
              <path d="M8 13h2"></path>
              <path d="M8 9h2"></path>
            </svg>
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex items-center">
              <h4
                className="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Schools
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
              </h4>
              <span
                className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
              >
                7.3 / 10
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-blue-500 w-full block rounded-full"
                style={{width:'62%'}}
              ></span>
            </div>
          </div>
        </div>
        <div className="flex items-center py-3 border-t border-gray-100">
          <span
            className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"
              ></path>
              <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
            </svg>
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex items-center">
              <h4
                className="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Shopping
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
              </h4>
              <span className="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                6.4 / 10
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-blue-500 w-full block rounded-full"
                style={{width:'62%'}}
              ></span>
            </div>
          </div>
        </div>
        <div className="flex items-center py-3 border-t border-gray-100">
          <span
            className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h5- w-5 text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 13l-2 -2"></path>
              <path d="M12 12l2 -2"></path>
              <path d="M12 21v-13"></path>
              <path
                d="M9.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z"
              ></path>
            </svg>
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex items-center">
              <h4
                className="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Parklands
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
              </h4>
              <span
                className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
              >
                8 / 10
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-blue-500 w-full block rounded-full"
                style={{width:'62%'}}
              ></span>
            </div>
          </div>
        </div>
        <div className="flex items-center py-3 border-t border-gray-100">
          <span
            className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path
                d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"
              ></path>
              <path d="M16 5l1.5 7l4.5 0"></path>
              <path d="M2 10l15 0"></path>
              <path d="M7 5l0 5"></path>
              <path d="M12 5l0 5"></path>
            </svg>
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex items-center">
              <h4
                className="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Public Transport
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
              </h4>
              <span
                className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
              >
                8.7 / 10
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-blue-500 w-full block rounded-full"
                style={{width:'62%'}}
              ></span>
            </div>
          </div>
        </div>
      </section>
    
    </section>
  </div>  */}
<div className="w-full flex flex-col gap-4 sm:flex-row md:gap-6 xl:flex-col xl:gap-7 ">
  <div className="grid gap-4 md:grid-cols-3">
 
       {/* 1card */}
       {/* class="flex px-4 py-2 gap-2 items-center justify-start text-sm text-red-800 hover:dark:bg-red-600/40 hover:dark:bg-opacity-20 w-full text-left rounded-sm" */}

       <div className="flex w-full flex-col bg-white dark:bg-neutral-800/30 dark:bg-opacity-20 rounded-sm  p-6">
        <div className="grid gap-4 md:grid-cols-1">
          <div className="relative rounded-sm bg-white dark:bg-neutral-800 py-8 pl-7 pr-12   xl:py-11 2xl:pl-12 2xl:pr-16">
            <div className="flex flex-col gap-3 2xsm:flex-row 2xsm:items-center 2xl:gap-5 items-center justify-center ">
              <div className="w-full flex flex-col justify-center items-start">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Leads impactados
                </h3>
                <p className="mt-3 gap-2">
                  <span className="text-sm text-black dark:text-white gap-4">
                    <strong className="text-2xl font-bold text-[#14b8a6] pr-2">
                      {" "}
                      {IMPACTED}{" "}
                    </strong>{" "}
                    de{" "}
                    <strong className="pl-2 text-2xl font-bold text-rose-700">
                      {" "}
                      {total}{" "}
                    </strong>
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
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col bg-gray-300 dark:bg-neutral-300 rounded-sm p-6 col-span-2">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7">
        <div className="rounded-sm bg-gray-100/80 p-4 shadow-default  dark:bg-neutral-800 md:p-6 xl:p-7">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                197
              </h3>
              <p className="font-medium">Clients Added</p>
              <span className="mt-2 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-md bg-[#10b981] p-1 text-xs font-medium text-white">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0155 5.24683H9.49366C9.23116 5.24683 9.01241 5.46558 9.01241 5.72808C9.01241 5.99058 9.23116 6.20933 9.49366 6.20933H11.6593L8.85928 8.09058C8.74991 8.17808 8.59678 8.17808 8.46553 8.09058L5.57803 6.18745C5.11866 5.8812 4.54991 5.8812 4.09053 6.18745L0.721783 8.44058C0.503033 8.5937 0.437408 8.89995 0.590533 9.1187C0.678033 9.24995 0.831157 9.33745 1.00616 9.33745C1.09366 9.33745 1.20303 9.31558 1.26866 9.24995L4.65928 6.99683C4.76866 6.90933 4.92178 6.90933 5.05303 6.99683L7.94053 8.92183C8.39991 9.22808 8.96866 9.22808 9.42803 8.92183L12.5124 6.8437V9.27183C12.5124 9.53433 12.7312 9.75308 12.9937 9.75308C13.2562 9.75308 13.4749 9.53433 13.4749 9.27183V5.72808C13.5187 5.46558 13.278 5.24683 13.0155 5.24683Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>+2.5%</span>
                </span>
                <span className="text-sm font-medium">Since last week</span>
              </span>
            </div>
            <div>
              <svg className="h-[80px] w-[80px]">
                <circle
                  className="text-stroke dark:text-neutral-200"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                ></circle>
                <circle
                  className="text-primary"
                  strokeWidth="10"
                  // stroke-dasharray="188.49555921538757"
                  // stroke-dashoffset="75.39822368615502"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="rounded-sm bg-gray-100/80 p-4 shadow-default  dark:bg-neutral-800 md:p-6 xl:p-7.5">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                745
              </h3>
              <p className="font-medium">Contracts Signed</p>
              <span className="mt-2 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-md bg-primary p-1 text-xs font-medium text-white">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0157 5.24683C12.7532 5.24683 12.5344 5.46558 12.5344 5.72808V8.1562L9.40631 6.07808C8.94693 5.77183 8.37818 5.77183 7.91881 6.07808L5.0313 8.00308C4.92193 8.09058 4.7688 8.09058 4.63755 8.00308L1.24693 5.74995C1.02818 5.59683 0.721929 5.66245 0.568804 5.8812C0.415679 6.09995 0.481304 6.4062 0.700054 6.55933L4.09068 8.81245C4.55005 9.1187 5.1188 9.1187 5.57818 8.81245L8.46568 6.88745C8.57506 6.79995 8.72818 6.79995 8.85943 6.88745L11.6594 8.7687H9.4938C9.23131 8.7687 9.01256 8.98745 9.01256 9.24995C9.01256 9.51245 9.23131 9.7312 9.4938 9.7312H13.0157C13.2782 9.7312 13.4969 9.51245 13.4969 9.24995V5.72808C13.5188 5.46558 13.2782 5.24683 13.0157 5.24683Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>+1.5%</span>
                </span>
                <span className="text-sm font-medium">Since last week</span>
              </span>
            </div>
            <div x-data="{percent : 10}">
              <svg className="h-[80px] w-[80px] -rotate-160 transform bg-white">
                <circle
                  className="text-stroke dark:text-strokedark"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                ></circle>
                <circle
                  className="text-primary"
                  strokeWidth="10"
                  // stroke-dasharray="188.49555921538757"
                  // stroke-dashoffset="131.9468914507713"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="rounded-sm bg-gray-100/80 p-4 shadow-default  dark:bg-neutral-800 md:p-6 xl:p-7.5">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                512
              </h3>
              <p className="font-medium">Invoice Sent</p>
              <span className="mt-2 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-md bg-blue-500 p-1 text-xs font-medium text-white">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0155 5.24683H9.49366C9.23116 5.24683 9.01241 5.46558 9.01241 5.72808C9.01241 5.99058 9.23116 6.20933 9.49366 6.20933H11.6593L8.85928 8.09058C8.74991 8.17808 8.59678 8.17808 8.46553 8.09058L5.57803 6.18745C5.11866 5.8812 4.54991 5.8812 4.09053 6.18745L0.721783 8.44058C0.503033 8.5937 0.437408 8.89995 0.590533 9.1187C0.678033 9.24995 0.831157 9.33745 1.00616 9.33745C1.09366 9.33745 1.20303 9.31558 1.26866 9.24995L4.65928 6.99683C4.76866 6.90933 4.92178 6.90933 5.05303 6.99683L7.94053 8.92183C8.39991 9.22808 8.96866 9.22808 9.42803 8.92183L12.5124 6.8437V9.27183C12.5124 9.53433 12.7312 9.75308 12.9937 9.75308C13.2562 9.75308 13.4749 9.53433 13.4749 9.27183V5.72808C13.5187 5.46558 13.278 5.24683 13.0155 5.24683Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>+0.5%</span>
                </span>
                <span className="text-sm font-medium">Since last week</span>
              </span>
            </div>
            <div>
              <svg className="h-[80px] w-[80px] -rotate-90 transform">
                <circle
                  className="text-stroke dark:text-strokedark"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                ></circle>
                <circle
                  className="text-primary"
                  strokeWidth="10"
                  // stroke-dasharray="188.49555921538757"
                  // stroke-dashoffset="56.548667764616255"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="rounded-sm bg-gray-100/80 p-4 shadow-default  dark:bg-neutral-800 md:p-6 xl:p-7.5">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                512
              </h3>
              <p className="font-medium">Invoice Sent</p>
              <span className="mt-2 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-md bg-blue-500 p-1 text-xs font-medium text-white">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0155 5.24683H9.49366C9.23116 5.24683 9.01241 5.46558 9.01241 5.72808C9.01241 5.99058 9.23116 6.20933 9.49366 6.20933H11.6593L8.85928 8.09058C8.74991 8.17808 8.59678 8.17808 8.46553 8.09058L5.57803 6.18745C5.11866 5.8812 4.54991 5.8812 4.09053 6.18745L0.721783 8.44058C0.503033 8.5937 0.437408 8.89995 0.590533 9.1187C0.678033 9.24995 0.831157 9.33745 1.00616 9.33745C1.09366 9.33745 1.20303 9.31558 1.26866 9.24995L4.65928 6.99683C4.76866 6.90933 4.92178 6.90933 5.05303 6.99683L7.94053 8.92183C8.39991 9.22808 8.96866 9.22808 9.42803 8.92183L12.5124 6.8437V9.27183C12.5124 9.53433 12.7312 9.75308 12.9937 9.75308C13.2562 9.75308 13.4749 9.53433 13.4749 9.27183V5.72808C13.5187 5.46558 13.278 5.24683 13.0155 5.24683Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>+0.5%</span>
                </span>
                <span className="text-sm font-medium">Since last week</span>
              </span>
            </div>
            <div>
              <svg className="h-[80px] w-[80px] -rotate-90 transform">
                <circle
                  className="text-stroke dark:text-strokedark"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                ></circle>
                <circle
                  className="text-primary"
                  strokeWidth="10"
                  // stroke-dasharray="188.49555921538757"
                  // stroke-dashoffset="56.548667764616255"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
</div>

     

      {/* 2card */}
      <div className="flex w-full flex-col bg-white dark:bg-neutral-900 rounded-sm  p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative rounded-sm border border-stroke bg-white dark:bg-neutral-800 py-2 pl-7  border-white dark:border-neutral-700  xl:py-2 2xl:pl-2 2xl:pr-2">
            <div className="flex flex-col gap-3 2xsm:flex-row 2xsm:items-center 2xl:gap-5 items-center justify-center ">
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
                                  <div className="flex items-center space-x-3 pl-4">
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

                        <div className="flex w-full  my-8 bg-rose-700 px-0 justify-between">
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
            </div>
          </div>
        </div>
      </div>
      {/* 3card */}
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
                      <strong className="text-2xl font-bold text-[#14b8a6] pr-2">
                        {" "}
                        {IMPACTED}{" "}
                      </strong>{" "}
                      de{" "}
                      <strong className="pl-2 text-2xl font-bold text-rose-700">
                        {" "}
                        {total}{" "}
                      </strong>
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
                    <g>
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
                    <g>
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
                    <g>
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
                    <g>
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
                    <g>
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
                    <g>
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
                    <g>
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
          
            </div>
          </div>
        </div>
      </div>
    </>
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
