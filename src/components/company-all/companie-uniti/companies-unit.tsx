"use server"
import { Fragment, useState } from "react";
//import {  useState } from "react";
import { getCompanyAction } from "@/actions/companies/get-company.action";
import { Empresa } from "@/types/empresa";
import ListEmpreendomentos from "./company-unit-list-item-all.component";
import { UserType } from "@/types";

interface CompaniesAllProp {
  companyData: Empresa;
  userData:UserType;
}
export default async function ListCompaniesUnit({ 
  companyData,
  userData,

 } : CompaniesAllProp,
) {
  //const userData = await getAuthenticatedAction();

  return (
    <Fragment>
      <div className=" dark:bg-neutral-900 bg-slate-50 text-white p-8 min-h-[100vh] " suppressHydrationWarning>
        <div className=" flex flex-col justify-center m-2 p-4 bg-white dark:bg-neutral-800/30 border border-neutral-200 dark:border-neutral-800/30 shadow-md hover:shodow-lg rounded-2xl h-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="font-medium leading-none text-rose-700">
                Corporadores empreendimentos
                </div>
                <p className="text-sm text-neutral-400 dar:text-gray-100 leading-none mt-1">
                  visualização de empreendimentos disponiveis na plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {companyData.acelera_parceiro_configs && companyData.acelera_parceiro_configs.length > 0 ?
          companyData.acelera_parceiro_configs.map((item: Empresa) => (
            <ListEmpreendomentos
              key={`COMPANY-${item.id}`}
              data={item}
              userData={userData}
            />
          )) :
          <div className=" bg-rose-700 border-gray-800 flex flex-col justify-center m-2 p-4 dark:bg-neutral-800/30 border border-neutral-800/30 shadow-md hover:shodow-lg rounded-2xl h-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="font-medium leading-none text-gray-100 dark:text-gray-400 ">
                  Infelizmente não encontramos empresa vinculada para sua pesquisa.
                </div>
              </div>
            </div>
          </div>
        </div>
        }

        </div>
      </div>
    </Fragment>
  );
}
