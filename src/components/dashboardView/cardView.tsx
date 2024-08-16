"use client";
import React from "react";
type InputFormType = {
 
  globalMessageCounts:any;
};

export default  function CardViewDetails({
  globalMessageCounts,
}: InputFormType) {
 
  const formatNumber = (number:number) => {
    return number.toLocaleString('pt-BR');
  };
 if (!globalMessageCounts) {
    return(
      <div className="border border-neutral-800 shadow rounded-md p-4 max-w-sm w-full mx-auto flex justify-center">
      <div className="animate-pulse flex space-x-4 items-center">
        <div className="rounded-full bg-neutral-800 h-14 w-14"></div>
        <div className="flex-1 space-y-6 py-1">
          
          <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
              <div className="h-3 bg-neutral-800 rounded col-span-2"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-3 bg-neutral-800 rounded col-span-2"></div>
              <div className="h-3 bg-neutral-800 rounded col-span-1"></div>
            </div>
            {/* <div className="h-2 bg-slate-700 rounded"></div> */}
          </div>
        </div>
      </div>
    </div>
    );
  }
//console.log('aqui',globalMessageCounts.totalMessages)
  return (
    <>
      <div className="flex w-full flex-col bg-white dark:bg-neutral-900 rounded-sm  p-6">
        <div className="mb-6">
          <h3 className=" bold text-muted-800 dark:text-white">
            <div>
              <div className=" ">
                <span className="text-neutral-600 dark:text-white">
                  Suas estatísticas rápidas
                </span>
              </div>
            </div>
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7 dark:bg-neutral-900 bg-white">
          <div className="bg-gray-100/80 dark:bg-neutral-800 flex items-center gap-2 rounded-md px-5 py-10">
             <div className="p-4 rounded-full  bg-rose-200 text-primary-500 dark:bg-rose-700/20 dark:text-gray-400 ">
              <svg
                data-v-b4402e20=""
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="icon size-5"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="#de3a3a">
                  <path
                    d="m219.84 73.16l-88-48.16a8 8 0 0 0-7.68 0l-88 48.18a8 8 0 0 0-4.16 7v95.64a8 8 0 0 0 4.16 7l88 48.18a8 8 0 0 0 7.68 0l88-48.18a8 8 0 0 0 4.16-7V80.18a8 8 0 0 0-4.16-7.02M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
                    opacity=".2"
                  ></path>
                  <path d="M128 80a48 48 0 1 0 48 48a48.06 48.06 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m95.68-93.85l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 224l-88-48.18V80.18L128 32l88 48.17v95.63Z"></path>
                </g>
              </svg>
            </div>
            <div>
               <h2 className="font-medium text-slate-500 dark:text-white">
                <div>
                  <div className="vertical-align: inherit;">
                     <span className="font-black text-neutral-400 dark:text-gray-200">{formatNumber(globalMessageCounts.totalMessages)}</span>
                  </div>
                </div>
              </h2>
               <div className="paragraph paragraph-sm weight-normal lead-normal">
                <div className="text-muted-500 dark:text-muted-400">
                  <div className="vertical-align: inherit;">
                     <span className=" text-neutral-400 dark:text-gray-200">
                      Total de mensagens
                    </span>
                  </div>
                </div>
                </div>
            </div>
          </div>
 
          <div className="bg-gray-100/80 dark:bg-neutral-800 flex items-center gap-2 rounded-md px-5 py-10">
             <div className="p-4 rounded-full bg-orange-200 text-primary-500 dark:bg-orange-500/20 dark:text-gray-400 ">
              <svg
                data-v-b4402e20=""
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="icon size-5"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="#f2994a">
                  <path
                    d="m219.84 73.16l-88-48.16a8 8 0 0 0-7.68 0l-88 48.18a8 8 0 0 0-4.16 7v95.64a8 8 0 0 0 4.16 7l88 48.18a8 8 0 0 0 7.68 0l88-48.18a8 8 0 0 0 4.16-7V80.18a8 8 0 0 0-4.16-7.02M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
                    opacity=".2"
                  ></path>
                  <path d="M128 80a48 48 0 1 0 48 48a48.06 48.06 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m95.68-93.85l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 224l-88-48.18V80.18L128 32l88 48.17v95.63Z"></path>
                </g>
              </svg>
            </div>
            <div>
               <h2 className="font-medium text-slate-500 dark:text-white">
                <div>
                  <div className="vertical-align: inherit;">
                     <span className="font-black text-neutral-400 dark:text-gray-200">{formatNumber(globalMessageCounts.veraMessages)}</span>
                  </div>
                </div>
              </h2>
               <div className="paragraph paragraph-sm weight-normal lead-normal">
                <div className="text-muted-500 dark:text-muted-400">
                  <div className="vertical-align: inherit;">
                     <span className=" text-neutral-400 dark:text-gray-200">
                      Mensagens enviadas
                    </span>
                  </div>
                </div>
                </div>
            </div>
          </div>
          <div className="bg-gray-100/80 dark:bg-neutral-800 flex items-center gap-2 rounded-md px-5 py-10">
            <div className="p-4 rounded-full  bg-green-200 text-primary-500 dark:bg-green-600/15 dark:text-gray-400 ">
              <svg
                data-v-b4402e20=""
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="icon size-5"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="#16a34a">
                  <path
                    d="m219.84 73.16l-88-48.16a8 8 0 0 0-7.68 0l-88 48.18a8 8 0 0 0-4.16 7v95.64a8 8 0 0 0 4.16 7l88 48.18a8 8 0 0 0 7.68 0l88-48.18a8 8 0 0 0 4.16-7V80.18a8 8 0 0 0-4.16-7.02M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
                    opacity=".2"
                  ></path>
                  <path d="M128 80a48 48 0 1 0 48 48a48.06 48.06 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m95.68-93.85l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 224l-88-48.18V80.18L128 32l88 48.17v95.63Z"></path>
                </g>
              </svg>
            </div>
            <div>
               <h2 className="font-medium text-slate-500 dark:text-white">
                <div>
                  <div className="vertical-align: inherit;">
                     <span className="font-black text-neutral-400 dark:text-gray-200">{formatNumber(globalMessageCounts.leadMessages)}</span>
                  </div>
                </div>
              </h2>
              <div className="paragraph paragraph-sm weight-normal lead-normal">
                <div className="text-muted-500 dark:text-muted-400">
                  <div className="">
                  <span className=" text-neutral-400 dark:text-gray-200">
                     Mensagem recebidas
                    </span>
                  </div>
                </div>
                </div>
            </div>
          </div>

        </div>

      

      </div>
     
    </>
  );
}
