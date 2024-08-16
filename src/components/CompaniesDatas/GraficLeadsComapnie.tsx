// components/CompaniesDatas/GraficLeadsCompanie.tsx
"use client";

import type { Empresa } from "@/types/empresa";
import { useState, useEffect } from "react";
import {
  FaUsers,
  FaWhatsapp,
  FaUserSlash,
  FaPlus,
  FaUserTag,
  FaUserPlus,
  FaFilePdf,
  FaRegFileExcel,
  FaFileExcel,
} from "react-icons/fa";
import CardDataStats from "./CardDataStats";
import ProgressDataStats from "./ProgressLead";
import AreaChartComponent from "./chartsteste";
import CompsDateCharts from "./ChatsCompanieList";
import { Lead } from "@/types/leads/leads";
import Image from "next/image";
import { BiSolidMessageRoundedError, BiSolidUserVoice, BiSolidUserX } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import { RiSignalWifiErrorFill } from "react-icons/ri";
import MessagesComapny from "./Leads-list-company/messages-company-hors";
import { UserType } from "@/types";
import { saveAs } from "file-saver";
import * as ExcelJS from "exceljs";
import jsPDF from "jspdf"; // Adicionando a importação do jsPDF
import "jspdf-autotable";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { SiCivicrm } from "react-icons/si";
import SecondDateCharts from "./ChartSecondTemplate";
import SecondDateChartsDispatch from "./ChartDispatch";

interface GraficosLeeadsProps {
  companyData: Empresa;
  leadData: Lead[];
  leadSecond:Lead[];
  leadsChart: any;
  messageData: any;
  userData: UserType;
}
type StatusData = /*unresolved*/ any;

// const exportToExcel = (leadData: Lead[], status?: string, companyData:any) => {

 

//   // Verifica se leadData é uma matriz antes de iterar sobre ela
//   if (!Array.isArray(leadData)) {
//     console.error("leadData não é uma matriz:", leadData);
//     return;
//   }

//   const workbook = new ExcelJS.Workbook();
//   let worksheet: ExcelJS.Worksheet;

//   if (status) {
//     worksheet = workbook.addWorksheet(`Leads - ${status}`);

//     // Adicione cabeçalhos
//     worksheet.addRow(["Nome", "Telefone", "Status"]);

//     // Adicione os dados dos leads com o status especificado
//     leadData.forEach((lead) => {
//       if (lead.status === status) {
//         worksheet.addRow([lead.name, lead.phone, lead.status]);
//       }
//     });
//   } else {
//     worksheet = workbook.addWorksheet(`Todos os Leads ${companyData?.name}`);

//     // Adicione cabeçalhos
//     worksheet.addRow(["Nome", "Telefone", "Status"]);

//     // Adicione todos os dados dos leads
//     leadData.forEach((lead) => {
//       worksheet.addRow([lead.name, lead.phone, lead.status]);
//     });
//   }

//   // Salve o arquivo Excel
//   workbook.xlsx.writeBuffer().then((buffer) => {
//     const blob = new Blob([buffer], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });
//     const filename = status ? `leads_${status}.xlsx` : `todos_os_leads-${companyData?.name}.xlsx`;
//     saveAs(blob, filename);
//   });
// };

const exportToExcel = (leadData: Lead[], status?: string, companyData?: Empresa) => {
  // Verifica se leadData é uma matriz antes de iterar sobre ela
  console.log(status,'nammmmm')
  if (!Array.isArray(leadData)) {
    console.error("leadData não é uma matriz:", leadData);
    return;
  }

  const workbook = new ExcelJS.Workbook();
  let worksheet: ExcelJS.Worksheet;

  // Use "Unknown_Company" se companyData ou companyData.name estiverem indefinidos
  const companyName = companyData|| "Unknown_Company";
  console.log(companyName,'nammmmm')
  if (status) {
    worksheet = workbook.addWorksheet(`Leads - ${status}`);

    // Adicione cabeçalhos
    worksheet.addRow(["Nome", "Telefone", "Status"]);

    // Adicione os dados dos leads com o status especificado
    leadData.forEach((lead) => {
      if (lead.status === status) {
        worksheet.addRow([lead.name, lead.phone, lead.status]);
      }
    });
  } else {
    worksheet = workbook.addWorksheet(`Todos os Leads ${companyName}`);

    // Adicione cabeçalhos
    worksheet.addRow(["Nome", "Telefone", "Status"]);

    // Adicione todos os dados dos leads
    leadData.forEach((lead) => {
      worksheet.addRow([lead.name, lead.phone, lead.status]);
    });
  }

  // Salve o arquivo Excel
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const filename = status ? `leads_${status}_${companyName}.xlsx` : `todos_os_leads_${companyName}.xlsx`;
    saveAs(blob, filename);
  }).catch((error) => {
    console.error("Erro ao gerar o arquivo Excel:", error);
  });
};

const exportToPDFAllStatus = (data: StatusData[]) => {
  if (!data) {
    console.error("Data is undefined.");
    return;
  }

  const today = new Date().toLocaleDateString(); // Get current date
  const doc = new jsPDF();

  // Define estilos
  const titleStyle = {
    fontSize: 22,
    textColor: "Arial", // Nome da fonte
    fontStyle: "bold",
  };

  const textStyle = {
    fontSize: 16,
    textColor: "Arial", // Nome da fonte
  };

  // Adiciona o cabeçalho
  doc.setFont(titleStyle.textColor);
  doc.setFontSize(titleStyle.fontSize);

  doc.text("Relatório de Leads", 105, 20, { align: "center" });

  // Adiciona os dados
  let yPos = 40;
  data.forEach(({ title, total }) => {
    doc.setFont(textStyle.textColor);
    doc.setFontSize(textStyle.fontSize);

    doc.text(`${title}: ${total}`, 20, yPos);
    yPos += 10;
  });

  doc.save(`${today}-relatorio-todos-status.pdf`);
};

const calculateStatusTotals = (leads: Lead[]) => {
  const statusTotals = leads.reduce((acc, lead) => {
    if (acc[lead.status]) {
      acc[lead.status]++;
    } else {
      acc[lead.status] = 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(statusTotals).map(([status, total]) => ({
    title: status,
    total,
  }));
};

const calculateDaysRemaining = (totalLeads: number, leadsPerDay: number) => {
  return Math.ceil(totalLeads / leadsPerDay);
};

export default function GraficosLeeads({
  companyData,
  leadData,
  leadSecond,
  leadsChart,
  messageData,
  userData,
}: GraficosLeeadsProps) {
 
  const [loading, setLoading] = useState(true);
  //console.log(leadsChart,'LISTA GERAL DE EXPORT')

  useEffect(() => {
    if (leadsChart) {
      setLoading(false);
    }
  }, [leadsChart]);

  if (!messageData) {
    return <div>Loading...</div>;
  }

  const statusData: any = calculateStatusTotals(leadsChart.LeadList);
 
  const totalLeads = leadsChart.NOVO; // Total de leads no gráfico
  const leadsPerDay = 100; // Número de leads disparados por dia (mude conforme necessário)
  const daysRemaining = calculateDaysRemaining(totalLeads, leadsPerDay); 
  const exportAllStatus = () => {
    exportToPDFAllStatus(statusData);
  };
 // Função para filtrar leads sem curation
 const filterLeadsWithoutCuration = (leads: Lead[]) => {
  return leads.filter(
    (lead) =>
      (lead.status === "NOTSCHEDULED" || lead.status === "SCHEDULED") &&
      (!lead.curation || Object.keys(lead.curation).length === 0) // Verifica se o campo 'curation' não existe ou é vazio
  );
};




const filteredLeads = filterLeadsWithoutCuration(leadsChart.LeadList);
//console.log(filteredLeads,'CURATION')
  return (
    <div className="flex w-full flex-col dark:bg-neutral-900 bg-slate-50 px-4">
      {loading ? (
        <div className="relative z-40 top-0 left-0 right-0 bottom-0 h-full flex items-center justify-center p-5 dark:bg-[#000] bg-gray-200  bg-opacity-90">
          <div className="h-auto min-h-[50vh] flex items-center justify-center">
            <Image
              src="/assets/funilv.svg"
              alt=""
              width={120}
              height={120}
              className="animate-spin-2 duration-1800"
            />
          </div>
        </div>
      ) : (
        leadsChart && (
          <>
          {userData.profile === "master"? (
                <>
        {/* voltar esse botoes prodution*/}
        <div className="flex flex-row gap-4">
             
             <button
               className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-rose-700 rounded-md hover:bg-rose-900 focus:outline-none focus:bg-rose-600"
               onClick={() => exportToExcel(leadsChart.LeadList,undefined,companyData?.name)}
             >
               Exportar para Excel <FaRegFileExcel /> <FaFileExcel />
             </button>
             <button
               className="flex items-center justify-center px-4 py-2 gap-2 text-sm font-medium text-white bg-rose-700 rounded-md hover:bg-rose-900 focus:outline-none focus:bg-rose-600"
               onClick={exportAllStatus}
             >
               Gerar Relatório para Todos os Status
               <FaFilePdf />
             </button>
           </div>
           {/* voltar esse botoes */}
      </>
    ):(null)}
          


            <div className="flex flex-col">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-4 dark:bg-neutral-900 bg-slate-50">
                <MessagesComapny
                  messageData={messageData}
                  companyData={companyData}
                />
              </div>
            </div>


            <div className="grid grid-cols-12 gap-2 md:gap-2 2xl:gap-2 ">
              <div className="col-span-12 rounded-sm flex flex-col  xl:col-span-9">
                {/* grafico gerais */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-4 dark:bg-neutral-900 bg-slate-50">
                  <div className="col-span-2">
                  <CardDataStats
                    title="Base Total"
                    total={leadsChart.total}
                    rate="0.43%"
                    levelUp
                    color="bg-rose-700"
                    leads={leadsChart.LeadList}
                    status=""
                  >
                    <FaUsers size={20} />
                  </CardDataStats>
                  </div>
                  <CardDataStats
                    title="Novo Fila"
                    total={leadsChart.NOVO}
                    rate="4.35%"
                    levelUp
                    color="bg-blue-500"
                    leads={leadsChart.LeadList}
                    status=""
                  >
                    <FaUserPlus size={20} />
                  </CardDataStats>
                  <CardDataStats
                    title="Em contato"
                    total={leadsChart.STARTED}
                    rate="2.59%"
                    levelUp
                    color="bg-blue-400"
                    leads={leadsChart.LeadList}
                    status="STARTED"
                  >
                    <BiSolidUserVoice size={20} />
                  </CardDataStats>
                 
                </div>
                {/* <div className=" grid grid-cols-1  md:grid-cols-4  xl:grid-cols-4  dark:bg-neutral-900 bg-slate-50"> */}
                {/* <div className={`grid grid-cols-1 md:grid-cols-${userData?.profile === "admin" ? 4 : 3} xl:grid-cols-${userData?.profile === "admin" ? 4 : 3} dark:bg-neutral-900 bg-slate-50`}> */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${userData?.profile === "admin" ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} dark:bg-neutral-900 bg-slate-50 gap-4`}>
                <CardDataStats
                    title="Em Atendimento"
                    total={leadsChart.REPLIED}
                    rate="2.59%"
                    levelUp
                    color="bg-[#17a2b8]"
                    leads={leadsChart.LeadList}
                    status="REPLIED"
                  >
                    <FaWhatsapp size={20} />
                  </CardDataStats>
                  <CardDataStats
                    title="interessados"
                    total={leadsChart.NOTSCHEDULED}
                    rate="0.95%"
                    levelDown
                    color="bg-teal-600"
                    leads={leadsChart.LeadList}
                    status="NOTSCHEDULED"
                  >
                    <FaUserTag size={20} />
                  </CardDataStats>
                  <CardDataStats
                    title="Interesse avançado"
                    total={leadsChart.SCHEDULED}
                    rate="0.95%"
                    levelDown
                    color="bg-emerald-700"
                    leads={leadsChart.LeadList}
                    status="SCHEDULED"
                  >
                    <FaUserTag size={20} />
                  </CardDataStats>
                  {userData?.profile === "admin" && (
                  <CardDataStats
                  title="Sem Curadoria"
                  total={filteredLeads.length}
                  rate="0.95%"
                  levelUp
                  color="bg-[#6704a9]"
                  leads={filteredLeads}
                  status="CURADORIA"
                >
                  <BiSolidUserX size={20} />
                </CardDataStats>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-4 dark:bg-neutral-900 bg-white">
                  <CardDataStats
                    title="Sem retorno"
                    total={leadsChart.NOTREPLIED}
                    rate="2.59%"
                    levelUp
                    color="bg-[#ff5926]"
                    leads={leadsChart.LeadList}
                    status="NOTREPLIED"
                  >
                    <FaUserSlash size={20} />
                  </CardDataStats>
                  <CardDataStats
                    title="Sem interesse"
                    total={leadsChart.STOPPED}
                    rate="0.95%"
                    levelDown
                    color="bg-red-700"
                    leads={leadsChart.LeadList}
                    status="STOPPED"
                  >
                    <FaUserSlash size={20} />
                  </CardDataStats>
                  <CardDataStats
                    title="Error"
                    total={leadsChart.ERROR}
                    rate="2.59%"
                    levelUp
                    color="bg-[#c21131]"
                    leads={leadsChart.LeadList}
                    status="ERROR"
                  >
                    <BiSolidMessageRoundedError size={20} />
                  </CardDataStats>
                  <CardDataStats
                    title="Sem WhatsApp"
                    total={leadsChart.INVALIDNUMBER}
                    rate="2.59%"
                    levelUp
                    color="bg-[#e91f47]"
                    leads={leadsChart.LeadList}
                    status="INVALIDNUMBER"
                  >
                    <RiSignalWifiErrorFill size={20} />
                  </CardDataStats>
                </div>
              </div>

              {/* card convertidos */}
              <div className="col-span-12 rounded-sm  xl:col-span-3 ">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-1 dark:bg-neutral-900 bg-slate-50">
                  <CardDataStats
                    title="Total impactados"
                    total={leadsChart.IMPACTED}
                    rate="0.95%"
                    levelDown
                    color="bg-green-900"
                    leads={leadsChart.LeadList}
                    status=""
                  >
                    <MdGroups size={20} />
                  </CardDataStats>
                  <CardDataStats
                    title="Taxa de Conversão"
                    total={leadsChart.PERCENTENTAGESCHEDULED}
                    rate="0.95%"
                    levelDown
                    color="bg-orange-400"
                    leads={leadsChart.LeadList}
                    status=""
                  >
                    <BsGraphUpArrow size={20} />
                  </CardDataStats>

                  <CardDataStats
                    title="Total integrados CRM"
                    total={leadsChart.TOTALSCHEDULED}
                    rate="0.95%"
                    levelDown
                    color="bg-sky-500"
                    leads={leadsChart.LeadList}
                    status=""
                  >
                    <SiCivicrm size={20} />
                  </CardDataStats>

                  <ProgressDataStats
                    title="Processados"
                    total={leadsChart.SENDTOTALDISPACH}
                    rate="0.95%"
                    levelDown
                    color="bg-green-600"
                    status=""
                  >
                    <GiProgression size={20} />
                  </ProgressDataStats>
                </div>
                <div className="col-span-12 mt-6 mb-6 rounded-sm xl:col-span-3">
                  <CardDataStats
                  title="Sem Curadoria"
                  total={filteredLeads.length}
                  rate="0.95%"
                  levelUp
                  color="bg-[#6704a9]"
                  leads={filteredLeads}
                  status="CURADORIA"
                >
                  <BiSolidUserX size={20} />
                </CardDataStats>
                </div>

              </div>
            </div>
           
               {(userData.profile === "master" ||
                userData.profile === "manager") && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-4.5 ">
                <div className="w-full m-4 dark:bg-neutral-800/60 bg-white">
                  <div className="w-full p-10">
                    <SecondDateChartsDispatch dispatchDailyGrafic={companyData?.DailyDispatch}/>
                  </div>
                  </div>
                </div>
              )} 
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-4.5 ">
              <div className="w-full m-4 dark:bg-neutral-800/60 bg-white">
                <AreaChartComponent metric={leadsChart} />
              </div>
              {(userData.profile === "master" ||
                userData.profile === "manager") && (
                <div className="w-full m-4 dark:bg-neutral-800/60 bg-white">
                  <div className="w-full p-10">
                    <CompsDateCharts metric={leadData} secondaryMetric={leadSecond}/>
                  </div>
                </div>
              )}
             
            </div>

             {/* Exibindo os dias restantes */}
             <div className="flex justify-center mt-6">
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Dias restantes para terminar os disparos: {daysRemaining}
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
