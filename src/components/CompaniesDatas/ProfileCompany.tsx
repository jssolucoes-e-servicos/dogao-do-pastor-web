"use client"
import { useState } from "react";
import { formatarTelefone } from '@/util/formatPhone';
import { FaTelegramPlane, FaYoutube, FaWhatsapp, FaPowerOff , } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { useRouter } from 'next/navigation'
import { Empresa } from "@/types/empresa";
import { UserType } from "@/types";
import  Link  from "next/link";



export default function Profile({ companyData, userData }: { companyData: Empresa, userData: UserType }) {
  //const telefoneFormatado = formatarTelefone(companyData.phone);
  const router = useRouter();

  const handleIntentClick = () => {
    console.log('clicou');
    const intentUrl = `/dashboard/empresa/bot/${companyData.id}/tipo/intent`;
    
 
    router.push(intentUrl);
  };

  const handleLeadsClick = () => {
    const leadsUrl = `/dashboard/empresa/bot/${companyData.id}/tipo/lead`;
    router.push(leadsUrl);
  };
  const handleComandClick = () => {
    const leadsUrl = `/dashboard/empresa/detail/${companyData.id}`;
    router.push(leadsUrl);
  };
  return (
    <>
      <div className="col-span-12 rounded-sm dark:bg-neutral-900 bg-slate-50 border-none dark:border-neutral-800/30 px-4 mt-2 xl:col-span-12">
      <div className="overflow-hidden rounded-sm dark:border-neutral-800/30 bg-slate-50  dark:border-strokedark dark:bg-neutral-900">
          <div className="px-4 pb-2 text-start lg:pb-2 xl:pb-11.5">
            <div className="mt-4">
              <span className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                {companyData.name}
              </span>
              
              {/* <p className={`${companyData.enabled === true ? "text-green-700" : "text-orange-600"} font-medium flex flex-row gap-3 items-center`}>
                <FaPowerOff size={15}/>{companyData.enabled === true ? "Iniciado" : "Não Iniciado"}</p> */}
            </div>
          </div>
         
             <div className="flex justify-start gap-4 px-4 py-2 ">
             {userData.profile === "master" ? (
             <button 
             onClick={handleComandClick}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-rose-700 rounded-md hover:bg-rose-900 focus:outline-none focus:bg-rose-600">
                 <BiSolidMessage className="mr-2" />
                Configuração
               </button>
                ):(null)}
               {userData.profile === "master" || userData.profile === "manager" || userData.profile === "admin"? (
                <>
             <button onClick={handleIntentClick} className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-rose-700 rounded-md hover:bg-rose-900 focus:outline-none focus:bg-rose-600">
                 <FaTelegramPlane className="mr-2" />
                 Ver Intenção
               </button>
               <button onClick={handleLeadsClick} className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-rose-700 rounded-md hover:bg-rose-900 focus:outline-none focus:bg-rose-600">
                 <FaWhatsapp className="mr-2" />
                 Ver Leads
               </button>
               </>
               ):(null)}
             </div>
         
         
        </div>
      </div>
    </>
  );
}

// esse funciona redenização
// "use client"
// import { FaTelegramPlane, FaWhatsapp, FaPowerOff } from "react-icons/fa";
// import { BiSolidMessage } from "react-icons/bi";
// import { useRouter } from 'next/navigation';
// import { Empresa } from "@/types/empresa";
// import { UserType } from "@/types";

// interface ProfileProps {
//   companyData: Empresa;
//   userData: UserType;
//   setActiveComponent: (component: string) => void;
// }

// export default function ProfileCompany({ companyData, userData, setActiveComponent }: ProfileProps) {
//   const telefoneFormatado = companyData.phone;  // formatarTelefone function if needed
//   const router = useRouter();

//   const handleIntentClick = () => {
//     setActiveComponent('intents');
//   };

//   const handleLeadsClick = () => {
//     setActiveComponent('leads');
//   };

//   const handleComandClick = () => {
//     const leadsUrl = `/dashboard/empresa/detail/${companyData.id}`;
//     router.push(leadsUrl);
//   };

//   return (
//     <div className="col-span-12 rounded-sm dark:bg-neutral-900 bg-white border-none dark:border-neutral-800/30 p-4 shadow-lg xl:col-span-12">
//       <div className="overflow-hidden rounded-sm dark:border-neutral-800/30 bg-white  dark:border-strokedark dark:bg-neutral-900">
//         <div className="px-4 pb-2 text-start lg:pb-2 xl:pb-11.5">
//           <div className="mt-4">
//             <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
//               {companyData.name}
//             </h3>
//             <p className={`${companyData.enabled === true ? "text-green-700" : "text-orange-600"} font-medium flex flex-row gap-3 items-center`}>
//               <FaPowerOff size={15} />{companyData.enabled === true ? "Iniciado" : "Não Iniciado"}
//             </p>
//           </div>
//         </div>
//         {userData.profile === "master" || userData.profile === "manager" ? (
//           <div className="flex justify-start gap-4 px-4 py-2 ">
//             <button 
//               onClick={handleComandClick}
//               className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-rose-700 rounded-md hover:bg-rose-900 focus:outline-none focus:bg-rose-600">
//               <BiSolidMessage className="mr-2" />
//               Configuração
//             </button>
//             <button onClick={handleIntentClick} className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-rose-700 rounded-md hover:bg-rose-900 focus:outline-none focus:bg-rose-600">
//               <FaTelegramPlane className="mr-2" />
//               Ver Intenção
//             </button>
//             <button onClick={handleLeadsClick} className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-rose-700 rounded-md hover:bg-rose-900 focus:outline-none focus:bg-rose-600">
//               <FaWhatsapp className="mr-2" />
//               Ver Leads
//             </button>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }





// import type { Empresa } from "@/types/empresa";
// import { formatarTelefone } from '@/util/formatPhone';
// import { FaTelegramPlane, FaYoutube, FaWhatsapp } from "react-icons/fa";
// //import ChangeCompanyButton from "../buttons/change-table-button-modal";
// import Image from "next/image";
// import Link from "next/link";
// export default function Profile({ companyData }: { companyData: Empresa }) {
//   const telefoneFormatado = formatarTelefone(companyData.phone);
  


//   return (
//     <>
//       <div className="col-span-12 rounded-sm border border-neutral-800/30 bg-black p-7.5 shadow-default dark:border-strokedark dark:bg-aibitMenu xl:col-span-12">
//        <div className="overflow-hidden rounded-sm border border-neutral-800/30 bg-black shadow-default dark:border-strokedark dark:bg-aibitMenu">
//         <div className="px-4 pb-6 text-start lg:pb-8 xl:pb-11.5">
//           <div className="mt-4">
//             <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
//             {companyData.name}
//             </h3>
//             <p className="font-medium">{companyData.enabled === true ? "Ativa" : "Pausa"}</p>
//           </div>
//         </div>
//       </div>
//       </div>
    
    
//     </>
//   );
// }

// "use client"
// import { Empresa } from "@/types/empresa";
// import { formatarTelefone } from '@/util/formatPhone';
// import { FaTelegramPlane, FaYoutube, FaWhatsapp } from "react-icons/fa";
// import Image from "next/image";
// import { redirect } from "next/navigation";

// export default function Profile({ companyData }: { companyData: Empresa }) {
//   const telefoneFormatado = formatarTelefone(companyData.phone);

//   const handleIntentClick = () => {
//     console.log('clicou')
//     const intentUrl = `/dashboard/empresa/bot/${companyData.id}/intent`;
//     redirect(intentUrl);
//   };

//   const handleLeadsClick = () => {
//     const leadsUrl = `/dashboard/empresa/bot/${companyData.id}/leads`;
//     redirect(leadsUrl);
//   };

//   return (
//     <>
//       <div className="col-span-12 rounded-sm border border-neutral-800/30 bg-black p-7.5 shadow-default dark:border-strokedark dark:bg-aibitMenu xl:col-span-12">
//         <div className="overflow-hidden rounded-sm border border-neutral-800/30 bg-black shadow-default dark:border-strokedark dark:bg-aibitMenu">
//           <div className="px-4 pb-6 text-start lg:pb-8 xl:pb-11.5">
//             <div className="mt-4">
//               <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
//                 {companyData.name}
//               </h3>
//               <p className="font-medium">{companyData.enabled === true ? "Ativa" : "Pausa"}</p>
//             </div>
//           </div>
//           <div className="flex justify-between px-4 py-2 bg-gray-800">
//             <button onClick={handleIntentClick} className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//               <FaTelegramPlane className="mr-2" />
//               Ver Intenção
//             </button>
//             <button onClick={handleLeadsClick} className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
//               <FaWhatsapp className="mr-2" />
//               Ver Leads
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

