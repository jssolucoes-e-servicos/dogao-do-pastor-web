"use client";
import { Fragment, useState } from "react";
import Moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";
import ModalDeleteInvestment from "@/components/ModalDelete";
import { BsAndroid2 } from "react-icons/bs";
import { FaWhatsapp, FaPause, FaCheck } from "react-icons/fa";
import { MdEdit, MdOutlinePause } from "react-icons/md";
import { FiMoreVertical, FiPlus } from "react-icons/fi";
import "moment/locale/pt-br";
import { FaTrash, FaLock } from "react-icons/fa";
import type { Empresa } from "@/types/empresa";
import Link from "next/link";
import { EditComapanyUniti } from "@/actions/companies/post-data-componies-uniti.action";
import { UserType } from "@/types";

export default function ListEmpreendomentos({ data,userData }: { data: Empresa ,userData:UserType}) {
  Moment.locale("pt-br");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [empresaData, setEmpresaData] = useState<Empresa>(data);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  //console.log(data,'Componente')
  // const handleDeactivateClick = () => {
  //   console.log(`Desativar disparos para a empresa com o ID: ${data.id}`);
  //   if (!data.id) {
  //     toast.error("Erro ao editar Empreendimento. Índice inválidos.");
  //     console.error("Erro ao editar Empreendimento: Índice inválidos.");
  //     return;
  //   }

  //   const enable = !data.enabled;
  //   EditComapanyUniti(data.id, enable)
  //     .then(() => {
  //       toast.success("Empreendimento alterado com sucesso!");
  //     })
  //     .catch((error) => {
  //       toast.error("Erro ao editar Empreendimento. Por favor, tente novamente.");
  //       console.error("Erro ao editar Empreendimento:", error);
  //     });
  // };

  // const handleDeactivateClick = () => {
  //   console.log(`Desativar disparos para a empresa com o ID: ${data.id}`);
  //   if (data.id) {
  //     const enable = !data.enabled; // Altere a variável de enable para receber apenas o valor booleano inverso
  //     console.log(`meu eee: ${enable}`);
  //     EditComapanyUniti(data.id, enable) // Passe data.id e enable como argumentos
  //       .then(() => {
  //         toast.success("Empreendimento alterado com sucesso!");
  //       })
  //       .catch((error) => {
  //         toast.error("Erro ao editar Empreendimento. Por favor, tente novamente.");
  //         console.error("Erro ao editar Empreendimento:", error);
  //       });
  //   } else {
  //     toast.error("Erro ao editar Empreendimento.  índice inválidos.");
  //     console.error("Erro ao editar Empreendimento: índice inválidos.");
  //   }
  // };

  // const handleDeactivateClick = () => {
  //   console.log(`Desativar disparos para a empresa com o ID: ${data.id}`);
  //   if (data.id) {
  //     const enable = !data.enabled;
  //     EditComapanyUniti(data.id, enable)
  //       .then(() => {
  //         toast.success("Empreendimento alterado com sucesso!");
  //         // Atualize o estado da empresa para refletir a mudança
  //         setEmpresaData(prevState => ({ ...prevState, enabled: enable }));
  //       })
  //       .catch((error) => {
  //         toast.error("Erro ao editar Empreendimento. Por favor, tente novamente.");
  //         console.error("Erro ao editar Empreendimento:", error);
  //       });
  //   } else {
  //     toast.error("Erro ao editar Empreendimento.  índice inválidos.");
  //     console.error("Erro ao editar Empreendimento: índice inválidos.");
  //   }
  // };

  //   const handleDeactivateClick = (type: string) => {
  //   if (data.id) {
  //     let updatedEnabled: boolean = data.enabled;
  //     let updatedEnableToSendUsToLead: boolean = data.enable_to_send_us_to_lead;

  //     if (type === 'bot') { // Se a ação for para alterar o enabled
  //       updatedEnabled = !data.enabled;
  //     } else if (type === 'template') { // Se a ação for para alterar o enable_to_send_us_to_lead
  //       updatedEnableToSendUsToLead = !data.enable_to_send_us_to_lead;
  //     }

  //     EditComapanyUniti(data.id, updatedEnabled, updatedEnableToSendUsToLead)
  //       .then(() => {
  //         toast.success("Empreendimento alterado com sucesso!");
  //         // Atualize o estado da empresa para refletir a mudança
  //         setEmpresaData(prevState => ({
  //           ...prevState,
  //           enabled: updatedEnabled,
  //           enable_to_send_us_to_lead: updatedEnableToSendUsToLead
  //         }));
  //       })
  //       .catch((error) => {
  //         toast.error("Erro ao editar Empreendimento. Por favor, tente novamente.");
  //         console.error("Erro ao editar Empreendimento:", error);
  //       });
  //   } else {
  //     toast.error("Erro ao editar Empreendimento. Índice inválido.");
  //     console.error("Erro ao editar Empreendimento: Índice inválido.");
  //   }
  // };


  const handleDeactivateClick = (type: string) => {
    if (data.id) {
      let updatedEnabled: boolean = data.enabled ?? false;
      let updatedEnableToSendUsToLead: boolean = data.enable_to_send_us_to_lead ?? false;
      let updatedNoInterationSend: boolean = data.no_interation_send ?? false;
  
      if (type === "bot") {
        updatedEnabled = !updatedEnabled;
      } else if (type === "template") {
        updatedEnableToSendUsToLead = !updatedEnableToSendUsToLead;
      } else if (type === "interation") {
        updatedNoInterationSend = !updatedNoInterationSend;
      }
  
      EditComapanyUniti(
        data.id,
        type === "bot" ? updatedEnabled : data.enabled,
        type === "template" ? updatedEnableToSendUsToLead : data.enable_to_send_us_to_lead,
        type === "interation" ? updatedNoInterationSend : data.no_interation_send
      )
        .then(() => {
          toast.success("Empreendimento alterado com sucesso!");
          setEmpresaData((prevState) => ({
            ...prevState,
            enabled: type === "bot" ? updatedEnabled : prevState.enabled,
            enable_to_send_us_to_lead: type === "template" ? updatedEnableToSendUsToLead : prevState.enable_to_send_us_to_lead,
            no_interation_send: type === "interation" ? updatedNoInterationSend : prevState.no_interation_send,
          }));
        })
        .catch((error) => {
          toast.error("Erro ao editar Empreendimento. Por favor, tente novamente.");
          console.error("Erro ao editar Empreendimento:", error);
        });
    } else {
      toast.error("Erro ao editar Empreendimento. Índice inválido.");
      console.error("Erro ao editar Empreendimento: Índice inválido.");
    }
  };
  
  
  // const handleDeactivateClick = (type: string) => {
  //   if (data.id) {
  //     let updatedEnabled: boolean = data.enabled;
  //     let updatedEnableToSendUsToLead: boolean = data.enable_to_send_us_to_lead;
  //     let no_interation_send:boolean = data.no_interation_send;

  //     if (type === "bot") {
  //       updatedEnabled = !data.enabled;
  //     } else if (type === "template") {
  //       updatedEnableToSendUsToLead = !data.enable_to_send_us_to_lead;
  //     }else if (type === "interation") {
  //       no_interation_send = !data.no_interation_send;
  //     }

  //     // Atualizar apenas o campo correspondente ao tipo de ação
  //     EditComapanyUniti(
  //       data.id,
  //       type === "bot" ? updatedEnabled : data.enabled,
  //       type === "template"
  //         ? updatedEnableToSendUsToLead
  //         : data.enable_to_send_us_to_lead,
  //         type === "interation"
  //         ? no_interation_send
  //         : data.no_interation_send
  //     )
  //       .then(() => {
  //         toast.success("Empreendimento alterado com sucesso!");
  //         // Atualizar o estado da empresa para refletir a mudança
  //         setEmpresaData((prevState) => ({
  //           ...prevState,
  //           enabled: type === "bot" ? updatedEnabled : prevState.enabled,
  //           enable_to_send_us_to_lead:
  //             type === "template"
  //               ? updatedEnableToSendUsToLead
  //               : prevState.enable_to_send_us_to_lead,
  //               type === "interation" ? updatedEnableToSendUsToLead : prevState.enable_to_send_us_to_lead,
              
  //         }));
  //       })
  //       .catch((error) => {
  //         toast.error(
  //           "Erro ao editar Empreendimento. Por favor, tente novamente."
  //         );
  //         console.error("Erro ao editar Empreendimento:", error);
  //       });
  //   } else {
  //     toast.error("Erro ao editar Empreendimento. Índice inválido.");
  //     console.error("Erro ao editar Empreendimento: Índice inválido.");
  //   }
  // };

  // const handleDeactivateClick = (type:string) => { // Adicione o parâmetro type
  //   console.log(`Desativar disparos para a empresa com o ID: ${data.id}`);
  //   if (data.id) {
  //     let enable: boolean =!data.enabled;
  //     let enableToSendUsToLead: boolean = !data.enable_to_send_us_to_lead;;

  //     // Defina os valores de enable e enableToSendUsToLead com base no type
  //     if (type === 'bot') {
  //       enable = !data.enabled;
  //       enableToSendUsToLead = data.enable_to_send_us_to_lead;
  //     } else if (type === 'template') {
  //       enableToSendUsToLead = !data.enable_to_send_us_to_lead;
  //       enable = data.enabled;
  //     }
  //     console.log(`typesss: ${type}`);
  //     EditComapanyUniti(data.id, enable, enableToSendUsToLead)
  //     .then(() => {
  //       toast.success("Empreendimento alterado com sucesso!");
  //       // Atualize o estado da empresa para refletir a mudança
  //       setEmpresaData(prevState => ({ ...prevState, enabled: enable, enable_to_send_us_to_lead: enableToSendUsToLead }));
  //     })
  //     .catch((error) => {
  //       toast.error("Erro ao editar Empreendimento. Por favor, tente novamente.");
  //       console.error("Erro ao editar Empreendimento:", error);
  //     });
  //   } else {
  //     toast.error("Erro ao editar Empreendimento.  índice inválidos.");
  //     console.error("Erro ao editar Empreendimento: índice inválidos.");
  //   }
  // };

  return (
    <>
      <div className=" dark:text-white text-gray-500  m-2" key={empresaData.id}>
        <div className="flex flex-row">
          <div className=" flex flex-col sticky top-0 z-10 w-full">
            <div className="dark:bg-neutral-800/30 bg-white border dark:border-neutral-900 border-neutral-200  shadow-lg  rounded-2xl p-4">
              <div className="flex-none sm:flex">
                {/* <div className="flex justify-center items-center relative h-10 w-10  sm:mb-0 mb-1 bg-green-700 rounded-full mt-4">
                <FaWhatsapp size={22}/>

                </div> */}

                <div className="flex-auto sm:ml-2 justify-evenly ">
                  <div className="flex items-center justify-between sm:mt-2">
                    <div className="flex items-center w-full">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between space-x-3.5">
                          <div className="relative inline-block text-left">
                          {userData.profile === "master" ? (
                            <div className="relative w-[40]  p-2 inline-block text-left">
                              <button
                                type="button"
                                onClick={toggleDropdown}
                                className="flex items-center justify-center p-2 w-10 h-10 text-sm font-medium text-gray-700 hover:bg-neutral-800 focus:outline-none rounded-full"
                                id="options-menu"
                                aria-expanded="true"
                                aria-haspopup="true"
                              >
                                <FiMoreVertical className="ml-1 text-danger" />
                              </button>
                            </div>
                          ):(null)}
                          
                            {isDropdownOpen && (
                              <div className="min-h-[60px] origin-top-right absolute left-0 mt-2 p-4 w-56 rounded-md shadow-lg bg-neutral-800 ring-1 ring-black ring-opacity-5">
                                <div
                                  className="py-4"
                                  role="menu"
                                  aria-orientation="vertical"
                                  aria-labelledby="options-menu"
                                >
                                  {/* <button
                                    onClick={() => handleDeactivateClick()} // Defina o tipo como 'bot'
                                    className="flex px-4 py-2 gap-2 items-center justify-start text-sm  text-orange-500  hover:dark:bg-orange-500/50 hover:dark:bg-opacity-20 w-full text-left rounded-sm"
                                    role="sendcompany"
                                  >
                                    <MdOutlinePause size={12}/>  
                                    {empresaData.enabled === true ? "Pausar Bot" : "Iniciar Bot"}
                                  </button> */}
                                  <button
                                    onClick={() => handleDeactivateClick("bot")} // Defina o tipo como 'bot'
                                    className="flex px-4 py-2 gap-2 items-center justify-start text-sm  text-orange-500  hover:dark:bg-orange-500/50 hover:dark:bg-opacity-20 w-full text-left rounded-sm"
                                    role="sendcompany"
                                  >
                                    <MdOutlinePause size={12} />
                                    {empresaData.enabled === true
                                      ? "Pausar Bot"
                                      : "Iniciar Bot"}
                                  </button>
                                  {/* <button
                                    onClick={() =>
                                      handleDeactivateClick("template")
                                    } // Defina o tipo como 'template'
                                    className="flex px-4 py-2 gap-2 items-center justify-start text-sm  text-red-800  hover:dark:bg-red-600/40 hover:dark:bg-opacity-20 w-full text-left rounded-sm"
                                    role="sendTemplate"
                                  >
                                    <MdOutlinePause size={12} />
                                    {empresaData.enable_to_send_us_to_lead ===
                                    true
                                      ? "Pausar Template"
                                      : "Iniciar Template"}
                                  </button> */}
                                    <button
                                      onClick={() =>
                                        handleDeactivateClick("template")
                                      } // Defina o tipo como 'template'
                                      className="flex px-4 py-2 gap-2 items-center justify-start text-sm text-red-800 hover:dark:bg-red-600/40 hover:dark:bg-opacity-20 w-full text-left rounded-sm"
                                      role="sendTemplate"
                                    >
                                      <MdOutlinePause size={12} />
                                      {empresaData.campaign_number_business ? (
                                        empresaData.enable_to_send_provider ? (
                                          "Pausar Template"
                                        ) : (
                                          "Iniciar Template"
                                        )
                                      ) : empresaData.enable_to_send_us_to_lead ? (
                                        "Pausar Template"
                                      ) : (
                                        "Iniciar Template"
                                      )}
                                    </button>
                                     
                                     {/* INTERATION */}
                                     <button
      onClick={() => handleDeactivateClick("interation")}
      className="flex px-4 py-2 gap-2 items-center justify-start text-sm text-red-800 hover:dark:bg-red-600/40 hover:dark:bg-opacity-20 w-full text-left rounded-sm"
      role="sendInteration"
    >
      <MdOutlinePause size={12} />
      {empresaData.campaign_number_business ? (
        empresaData.no_interation_send ? (
          "Pausar interação"
        ) : (
          "Iniciar interação"
        )
      ) : empresaData.no_interation_send ? (
        "Pausar interação"
      ) : (
        "Iniciar interação"
      )}
    </button>
                                </div>
                              </div>
                            )}
                          </div>
                          <Link
                            href={`/dashboard/empresa/bot/${data.id}`}
                            className=" flex text-center items-center  justify-between w-full text-white p-3 text-xs bg-transparent hover:bg-zinc-600/20  font-medium tracking-wider  transition ease-in duration-300 rounded-sm"
                          >
                            
                            <div className="flex-none text-lg gap-3 flex items-center w-full justify-between  leading-none">
                              <h3 className="text-neutral-600 dark:text-gray-200 font-bold">{data.name.substring(0, 20)}</h3>
                              <div className="flex justify-center  items-center relative h-10 w-10  bg-green-700 rounded-full ">
                                <FaWhatsapp size={20} />
                              </div>{" "}
                            </div>

                            {/* <FiMoreVertical className="ml-1 text-danger" /> */}
                          </Link>
                        </div>
                        {userData.profile === "master" ? (
                          <>
                        <div className="flex w-full text-gray-400 my-1 px-2 justify-between">
                          <span className="mr-3 ">Status</span>
                          <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                          <span
                            className={`${
                              empresaData.enabled === true
                                ? "text-green-500"
                                : "text-rose-600"
                            }`}
                          >
                            {empresaData.enabled === true
                              ? "Iniciado"
                              : "Em pausa"}
                            {/* {data.enabled === true ? "Iniciado" : "Em pausa"}  */}
                          </span>
                        </div>
                        <div className="flex w-full text-gray-400 my-1 px-2 justify-between">
                          <span className="mr-3">Campanhas</span>
                          <span className="mr-0 border-r w-2 bg-gray-600 border-gray-600 max-h-0"></span>
                          {empresaData.campaign_number_business ? (
                            <span
                              className={
                                empresaData.enable_to_send_provider
                                  ? "text-green-500"
                                  : "text-rose-600"
                              }
                            >
                              {empresaData.enable_to_send_provider
                                ? "Ativação"
                                : "Pausado"}
                            </span>
                          ) : empresaData.enable_to_send_us_to_lead ? (
                            <span className="text-green-500">Ativação</span>
                          ) : (
                            <span className="text-rose-600">Pausado</span>
                          )}
                        </div>
                        </>
                          ):(null)}
                        {/* <div className="flex w-full text-gray-400 my-1 px-2 justify-between">
                          <span className="mr-3 ">Campanhas</span>

                          <span className="mr-0 border-r w-2 bg-gray-600 border-gray-600  max-h-0"></span>
                          <span
                            className={`${
                              empresaData.enable_to_send_us_to_lead === true
                                ? "text-green-500"
                                : "text-rose-600"
                            }`}
                          >
                            {empresaData.enable_to_send_us_to_lead === true
                              ? "Ativação"
                              : "Pausado"}
                          </span>
                        </div> */}
                        <div className="flex w-full text-gray-400 my-1 px-2 justify-between">
                          <span className="mr-3 ">Tipo</span>

                          <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                          <span className="text-yellow-500">
                            {empresaData.enabled === true
                              ? "Recorrente"
                              : "Desativado"}
                          </span>
                        </div>
                        <div className="flex w-full text-gray-400 my-1 px-2 justify-between">
                          <span className="mr-3 ">Interação</span>

                          <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                          <span  className={`flex flex-row justify-center items-center gap-4 ${
                              empresaData.no_interation_send === true
                                ? "text-green-500"
                                : "text-rose-600"
                            }`}>
                            {empresaData.no_interation_send === true ? (
                                <>
                                <FaCheck className="text-gray-500 dark:text-gray-400" /> Envio Recorrente
                                </>
                              ) : (
                                "Desativado"
                              )}
                          </span>
                        </div>
                        <div className="flex w-full text-gray-400 my-1 px-2 justify-between">
                          <span className="mr-3 ">Plataforma</span>

                          <span className="mr-0 border-r w-2 bg-gray-600 border-gray-600  max-h-0"></span>
                          <span className="text-blue-700">
                            {empresaData.campaign_number_business != null
                              ? "Baileys"
                              : "Meta Oficial"}
                          </span>
                        </div>
                        <div className="flex w-full text-gray-400 my-1 px-2 justify-between">
                          <span className="mr-3 ">Modo</span>

                          <span className="mr-0 border-r w-2 bg-gray-600 border-gray-600  max-h-0"></span>
                          <span
                            className={`${
                              empresaData.enabled === true
                                ? "text-green-500"
                                : "text-blue-700"
                            }`}
                          >
                            {empresaData.enabled === true
                              ? "ChatGPT 3.5"
                              : "Watson"}
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
    </>
  );
}
