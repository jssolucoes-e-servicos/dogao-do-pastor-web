"use client"

import { Fragment, useState, useEffect } from "react";
import ListComapanyAll from "@/components/company-all/company-list-item-all.component";
import { getCompaniesAction } from "@/actions/companies/get-companies.action";
import { Empresa } from "@/types/empresa";
import FakeCard from "../FakeCard/fakecard";

export default function ListCompanies() {
  const [companiesList, setCompaniesList] = useState<Empresa[]>([]);
  const [enabledFilter, setEnabledFilter] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const result = await getCompaniesAction();
        //console.log(result, 'empresa');
        setCompaniesList(result.companies);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEnabledFilter(event.target.value === "enabled");
  };

  const filteredCompanies = companiesList.filter(
    (company) => company.active === enabledFilter
  );
  //console.log(filteredCompanies, 'apos filtro');

  if (loading) {
    return(
      <div className="flex flex-col justify-center m-10 p-12 h-auto bg-white  dark:bg-neutral-800/30 border border-neutral-200 dark:border-neutral-800/30 shadow-md hover:shodow-lg rounded-2xl ">
        <FakeCard count={6}/>
        </div>
      
    );
  }
  return (
    <Fragment>
      <div className="dark:bg-neutral-900 bg-slate-50 text-white p-8 min-h-[100vh]" suppressHydrationWarning>
        <div className="flex flex-col justify-center m-2 p-4 bg-white dark:bg-neutral-800/30 border border-neutral-200 dark:border-neutral-800/30 shadow-md hover:shodow-lg rounded-2xl h-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="font-medium leading-none text-rose-700">
                  Companies empreendimento
                </div>
                <p className="text-sm text-neutral-400 dark:text-gray-100 leading-none mt-1">
                  visualização de empreendimento disponiveis na plataforma.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <select
                onChange={handleFilterChange}
                //className="text-black bg-white border border-gray-400 rounded p-2"
                className="block w-full p-2 px-8 text-gray-600 border border-gray-400 rounded-lg bg-gray-50 focus:ring-rose-700 focus:border-rose-700 dark:bg-neutral-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-700 dark:focus:border-rose-700"
              >
                <option value="enabled">Operacionais</option>
                <option value="disabled">Suspensas</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {filteredCompanies.length > 0 &&
            filteredCompanies.map((item: Empresa) => (
              <ListComapanyAll key={`user-${item.id}`} data={item} />
            ))}
        </div>
      </div>
    </Fragment>
  );
}




// import { Fragment, useState } from "react";
// import ListComapanyAll from "@/components/company-all/company-list-item-all.component"
// //import {  useState } from "react";
// import { getCompaniesAction } from "@/actions/companies/get-companies.action";
// import { getCompaniesPaginateAction } from "@/actions/companies/get-companies-paginate.action";
// import { Empresa } from "@/types/empresa";
// import Link from "next/link";
// import { MdEdit } from "react-icons/md";

// //import ChangeCompanyButton from "../buttons/change-table-button-modal";

// export default async function ListCompanies() {

//   const companiesList = await getCompaniesAction();
// //console.log(companiesList,'companie')

//   return (
//     <Fragment>
//       <div className="dark:bg-black bg-slate-50 text-white p-8 min-h-[100vh]" suppressHydrationWarning>
//         <div className=" border-gray-800 flex flex-col justify-center m-2 p-4 dark:bg-neutral-800/30 border border-neutral-800/30 shadow-md hover:shodow-lg rounded-2xl h-20">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <div className="flex flex-col">
//                 <div className="font-medium leading-none text-rose-700">
//                   Companies empreendimento
//                 </div>
//                 <p className="text-sm text-neutral-400 dar:text-gray-100 leading-none mt-1">
//                   visualização de empreendimento disponiveis na plataforma.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
//           {companiesList.companies.length > 0 &&
//             companiesList.companies.map((item: Empresa) => {
//               return (
//                 <ListComapanyAll
//                   key={`user-${item.id}` }
//                   data={item}
//                 />
//               );
//             })}
//         </div>
//       </div>
//     </Fragment>
//   );
// }