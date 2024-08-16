"use client"
import React, { ReactNode, useState,useEffect, useRef  } from 'react';
import CustomModalLeadsmessage from "@/components/Modals/ModalLeads";
import { Lead } from '@/types/leads/leads';
import { FaDownload, FaEllipsisV, FaFilePdf, FaList, FaWhatsapp } from 'react-icons/fa';
import { MdMoreVert, MdOutlinePause } from 'react-icons/md';
import { FiMoreVertical } from 'react-icons/fi';
import { saveAs } from 'file-saver';
import * as ExcelJS from 'exceljs';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Link from 'next/link';
import { FaUserGroup } from 'react-icons/fa6';

interface CardDataStatsProps {
  title: string;
  total: number;
  rate: string;
  color:string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
  leads: Lead[]; 
  status:string;
 
}

const today = new Date().toISOString().split('T')[0];
const exportToExcel = (leadData: Lead[], status?: string) => {
  // Verifica se leadData é uma matriz antes de iterar sobre ela
  if (!Array.isArray(leadData)) {
    console.error('leadData não é uma matriz:', leadData);
    return;
  }

  const workbook = new ExcelJS.Workbook();
  let worksheet: ExcelJS.Worksheet;

  if (status) {
    worksheet = workbook.addWorksheet(`Leads - ${status}`);

    // Adicione cabeçalhos
    worksheet.addRow(['Nome', 'Telefone', 'Status']);

    // Adicione os dados dos leads com o status especificado
    leadData.forEach(lead => {
      if (lead.status === status) {
        worksheet.addRow([lead.name, lead.phone, lead.status]);
      }
    });
  } else {
    worksheet = workbook.addWorksheet('Todos os Leads');

    // Adicione cabeçalhos
    worksheet.addRow(['Nome', 'Telefone', 'Status']);

    // Adicione todos os dados dos leads
    leadData.forEach(lead => {
      worksheet.addRow([lead.name, lead.phone, lead.status]);
    });
  }

  // Salve o arquivo Excel
  workbook.xlsx.writeBuffer().then(buffer => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const filename = status ? `leads_${status}.xlsx` : 'todos_os_leads.xlsx';
    saveAs(blob, filename);
  });
};



const exportToPDF = (title: string, total: string, leadData: Lead[], status: string) => {
  // Criar uma instância do jsPDF
  const doc = new jsPDF();

  // Definir o título e o total
  doc.text(`Título: ${title}`, 10, 10);
  doc.text(`Total: ${total}`, 10, 20);

  // Adicionar uma tabela para os dados dos leads
  const leadRows = leadData.map((lead, index) => [lead.name, lead.phone, lead.status]);
  doc.autoTable({
    head: [['Nome', 'Telefone', 'Status']],
    body: leadRows,
    startY: 30,
  });

  // Salvar o PDF
  doc.save(`${today}-relatorio-${status}.pdf`);
};

// const exportToPDFAllStatus = (title: string, allStatus: { status: string, total: number }[]) => {
//   // Criar uma instância do jsPDF
//   const doc = new jsPDF();

//   // Definir o título
//   doc.text(`Título: ${title}`, 10, 10);

//   // Adicionar título e total para cada status
//   let startY = 20;
//   allStatus.forEach((statusObj, index) => {
//     const { status, total } = statusObj;
//     doc.text(`Status: ${status}, Total: ${total}`, 10, startY);
//     startY += 10; // Ajustar a posição inicial para o próximo status
//   });

//   // Salvar o PDF
//   doc.save(`${today}-relatorio-todos-status.pdf`);
// };




const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  color,
  rate,
  levelUp,
  levelDown,
  children,
  leads,
  status
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [modalTitle, setModalTitle] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  // const dropdownRef = useRef<HTMLDivElement | null>(null);

  // const toggleDropdown = (id: any) => {
  //   if (openDropdownId === id) {
  //     setOpenDropdownId(null);
  //   } else {
  //     setOpenDropdownId(id);
  //   }
  // };

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
  //     setOpenDropdownId(null);
  //   }
  // };


  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (id: string) => {
    if (openDropdownId === id) {
      setOpenDropdownId(null);
    } else {
      setOpenDropdownId(id);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
    // if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target as Node))) {
      setOpenDropdownId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = (action: string) => {
    if (action === 'downloadExcel') {
      exportToExcel(filteredLeads, status);
    } else if (action === 'downloadPdf') {
      exportToPDF(title, total, filteredLeads, status);
    } else if (action === 'viewList') {
      openModal();
    }
    setOpenDropdownId(null);
  };
  

  const openModal = () => {
    // Filtra os leads com base no status do card
    const filtered = leads.filter(lead => lead.status === status);
    setFilteredLeads(filtered);
    setModalTitle(`Leads - ${status}`);
    setModalOpen(true);
  };
 
  // const openModal = () => {
  //   setFilteredLeads(leads.filter(lead => lead.status === 'REPLIED')); // Filtra os leads com status REPLIED
  //   setModalOpen(true);
  // };

  // const openModal = (status: string) => {
  //   // Filtra os leads com base no status fornecido
  //   const filtered = leads.filter(lead => lead.status === status);
  //   setFilteredLeads(filtered);
  //   setModalTitle(`Leads - ${status}`);
  //   setModalOpen(true);
  // };

  const closeModal = () => {
    setModalOpen(false);
  };
  const exportLeadsByStatus = () => {
    exportToExcel(filteredLeads, status);
  };

  const formatNumber = (number:number) => {
    return number.toLocaleString('pt-BR');
  };


  return (
    <>
      <div className="dark:bg-neutral-900 bg-slate-50 text-white p-2 w-full]">
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
                              <h3 > {title}</h3>
                              {status && status !== null && (
                                <>
                                
                                  <div className="flex items-center justify-between">
                                  
                                      
                                        <button
                                          type="button"
                                          //onClick={toggleDropdown}
                                          onClick={() => toggleDropdown(status)}
                                          // className="flex items-center justify-center-2 text-sm font-medium text-gray-700 hover:bg-neutral-800 focus:outline-none rounded-full"
                                          // id="options-menu"
                                          // aria-expanded="true"
                                          // aria-haspopup="true"
                                          className=" text-xl text-gray-400 dark:text-gray-200 hover:text-rose-700 hover:dark:text-rose-700">
                                        
                                          <FaEllipsisV/>
                                        </button>
                                     

                                  </div>
                                  {openDropdownId === status && (
              <div key={status} style={{ zIndex: '99999!important' }} className="z-10 min-h-[60px] origin-top-right absolute right-14 mt-20 p-4 w-56 ring-opacity-5 ring-1 bg-white rounded-lg shadow-lg dark:bg-neutral-700">
                  <span>{status}</span>
                  <div className="py-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => handleButtonClick('viewList')}
                      className="flex px-4 py-2 gap-2 items-center justify-start text-sm text-orange-500 hover:dark:bg-orange-500/50 hover:dark:bg-opacity-20 w-full text-left rounded-sm">
                      <FaUserGroup /> Visualizar lista
                    </button>
                    <button
                      onClick={() => handleButtonClick('downloadExcel')}
                      className="flex px-4 py-2 gap-2 items-center justify-start text-sm text-orange-500 hover:bg-orange-500/50 hover:dark:bg-orange-500/50 hover:dark:bg-opacity-20 w-full text-left rounded-sm"
                      role="sendcompany">
                      <FaDownload size={12} className="text-neutral-600 dark:text-white" />
                      Download Excel
                    </button>
                    <button
                      onClick={() => handleButtonClick('downloadPdf')}
                      className="flex px-4 py-2 gap-2 items-center justify-start text-sm dark:text-gray-300 text-gray-500 dark:hover:bg-gray-600 hover:dark:text-rose-700 w-full text-left rounded-sm"
                      role="sendTemplate">
                      <FaFilePdf size={12} />
                      Download PDF
                    </button>
                  </div>
                </div>
              )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full  my-1 pl-4 px-0 justify-between">
                          <div className="flex w-full  first-letter:flex items-center justify-between dark:text-gray-200 text-neutral-500   leading-none">
                            <span className="mr-3 text-3xl gap-3 dark:text-white text-black font-bold">
                              {formatNumber(total)}
                            </span>
                            {/* <button
                              onClick={exportLeadsByStatus}
                              className=" text-base text-gray-400 dark:text-gray-200 hover:text-rose-700 hover:dark:text-rose-700"
                            >
                              <FaDownload />
                            </button>
                            <button
                              className="dark:bg-neutral-900 text-white"
                              onClick={() =>
                                exportToPDF(title, total, filteredLeads, status)
                              }
                            >
                              <FaFilePdf />
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* {status && status !== null &&(
                      <button onClick={openModal} className="text-sm text-gray-400 dark:text-gray-200">
                        <FaEllipsisV/>
                      </button>
                    )} */}

                  {/* Botões para abrir o modal com diferentes status */}
                  {/* <button onClick={() => openModal('VALIDO-WP')} className="text-sm text-rose-500">Ver Leads Novos</button>
                  <button onClick={() => openModal('STARTED')} className="text-sm text-blue-500">Ver Leads Atendimento</button>
                  <button onClick={() => openModal('REPLIED')} className="text-sm text-sky-500">Ver Leads Respondidos</button>
                  <button onClick={() => openModal('NOTREPLIED')} className="text-sm text-yellow-500">Ver Leads Não Respondidos</button>
                  <button onClick={() => openModal('NOTSCHEDULED')} className="text-sm text-green-700">Ver Leads Interessados</button>
                  <button onClick={() => openModal('SCHEDULED')} className="text-sm text-green-500">Ver Leads Agendados</button>
                  <button onClick={() => openModal('STOPPED')} className="text-sm text-red-500">Ver Leads Agendados</button> */}

                  {/* Adicione mais botões conforme necessário para outros status */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Conteúdo do modal (exibido condicionalmente) */}
      {modalOpen && (
        <div className="fixed z-50 overflow-y-hidden top-0 left-0 w-full h-full flex justify-center items-center  bg-black bg-opacity-90">
          <div className=" bg-white dark:bg-neutral-800 p-4 rounded-lg h-4/5 max-h-[90%] w-6/12 overflow-y-auto">
            <div className="flex flex-row justify-between items-center p-4">
              <h2 className="text-xl font-bold mb-4 text-gray-500 dark:text-gray-200">
                {modalTitle}
              </h2>
              <button
                onClick={closeModal}
                className="h-10 w-10 rounded-full  text-gray-500  dark:text-gray-200 hover:text-rose-700 dark:hover:text-rose-700 hover:bg-gray-400 hover:dark:bg-neutral-500 "
              >
                X
              </button>
            </div>

            {/* <ul>
              {filteredLeads.map(lead => (
                <li key={lead.name}>{lead.name}</li>
              ))}
            </ul> */}
            <CustomModalLeadsmessage
              leads={filteredLeads}
              onRequestClose={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      )}

      {/* <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark  dark:bg-neutral-800/30 ">
      <div className="flex h-50 w-50 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 bg-black">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {title}
          </h4>
          <span className="text-sm font-bold">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && 'text-meta-3'
          } ${levelDown && 'text-meta-5'} `}
        >
          {rate}

          {levelUp && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div> */}

      {/* <div className="dark:bg-black bg-white text-white p-2 w-full">
          <div className="flex flex-row">
            <div className=" flex flex-col sticky top-0 z-10 w-full">
              <div className="dark:bg-neutral-800/30 border-none dark:border-neutral-900 shadow-lg  rounded-2xl p-4">
                <div className="flex-none sm:flex">
                  <div className={`flex justify-center items-center relative h-10 w-10  sm:mb-0 mb-1 ${color} rounded-full mt-4 `}>
               {children}

                </div>
                  <div className="flex-auto sm:ml-2 justify-evenly ">
                    <div className="flex items-center justify-between sm:mt-2">
                      <div className="flex items-center w-full">
                        <div className="flex flex-col w-full">
                          <div className="flex items-center space-x-3.5 pl-4">
                            <div className=" flex text-center items-center  justify-between w-full  my-3 text-xs bg-transparent  font-medium tracking-wider  transition ease-in duration-300 rounded-sm">
                              <div className="flex-none text-lg  first-letter:flex items-center justify-center dark:text-gray-200 text-neutral-500   leading-none">
                                <h3> {title}</h3>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full  my-1 pl-4 px-2 justify-between">
                            <span className="mr-3 text-3xl gap-3 dark:text-white text-black font-bold">
                            {total}
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
        </div> */}
    </>
  );
};

export default CardDataStats;
