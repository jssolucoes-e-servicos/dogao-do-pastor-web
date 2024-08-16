"use client";

import { MouseEventHandler, useEffect, useState } from "react";
import { Comando } from "@/types/comando/comando";
import { toast } from "react-toastify";
import { saveCommandMessage } from "@/actions/companies/comando/post-command.action";
import { MdDelete, MdEdit, MdAccessTime, MdOutlinePause } from "react-icons/md";
import { FiMoreVertical, FiPlus } from "react-icons/fi";
import { FaPencilAlt, FaPlus, FaStickyNote } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { getClientAuthenticatedAction } from "@/actions/users/get-client-authenticated.action";
import { getClientCommandAction } from "@/actions/companies/comando/get-all-client-comando.action";
import { IUser } from "@/interfaces";


interface InterMessages {
  content: string;
  intentmessage: any;
}
interface SelectedIntent {
  messages: InterMessages[]; // Assuming InterMessages is a type defined elsewhere
  // other properties...
}

interface Cell {
  id: string;
  name: string;
}

interface Dog {
  amount :      number;
  isComplete: Boolean;
  potato: Boolean;
  ketchup: Boolean;
  peas: Boolean;
  mayonnaise: Boolean;
  corn: Boolean;
  redSauce: Boolean;
  cheeseSauce: Boolean;
  mustard: Boolean;
  bread: Boolean;
  gratedCheese: Boolean;
  sausage: Boolean;
}

interface Seller {
  id?: string;
  name: string
  phone: string
}

interface Customer {
  id: string;
    name: string;
    phone: string;
    address: string;
    reference: string;
}

export default function ComandosMessageCompanie({
  cells,
}: {
  cells: Cell[];
}) {
  
  const [dogs, setDogs] = useState<Dog[]|null>([])


  const [userDatas, setUserData] = useState<IUser | null>(null);

 

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 


  useEffect(() => {
    // Define an async function to fetch the user data
    const fetchUserData = async () => {
      try {
        // Await the promise to get the resolved value
        const userData = getClientAuthenticatedAction();
        // Set the state with the resolved value
        setUserData(userData);
      } catch (error) {
        // Handle errors if any
        console.error("Error fetching user data:", error);
      }
    };

    // Call the async function to fetch user data when the component mounts
    fetchUserData();
  }, []);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [selectedIntentName, setSelectedIntentName] = useState<string | null>(
    null
  );

  const [selectedIntent, setSelectedIntent] = useState<SelectedIntent | null>(
    null
  );

  const [selectedIntentColor, setSelectedIntentColor] = useState(null);
  const [selectedTab, setSelectedTab] = useState("utterances");
  const [isLoading, setIsLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editMessageIndex, setEditMessageIndex] = useState(-1);
  const [editMessageContent, setEditMessageContent] = useState("");
  const [editIntentName, setEditIntentName] = useState("");

  const [newIntentContent, setNewIntentContent] = useState("");

  const [newPhone, setPhone] = useState<string>("");
  const [newEndereco, setEndereco] = useState<string>("");
  const [newReferencia, setReferencia] = useState<string>("");
  const [newCelula, setCelula] = useState("");
  const [newQuantidade, setQuantidade] = useState<number>(1);
  const [newIntentType, setNewIntentType] = useState<string>("");
  const [isObservationOpen, setIsObservationOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  //lista de produto
  const [prodBatata, setProdutcBabata] = useState(true);

  const handleOpenModal = () => {
    setIsObservationOpen((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    setIsObservationOpen(false);
  };

  const handleInsertIntent = () => {

    handleInsert(newIntentContent, newIntentType);
    setNewIntentContent("");
    setNewIntentType("");
    setIsObservationOpen(true);
  };

 
  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setDeleteModalOpen(false);
  };

  

  const handleInsertClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    // Chame handleInsert com os argumentos necessários
    handleInsert(newIntentContent, newIntentType);
  };

  const handleInsert = (newIntentContent: string, newIntentType: string) => {
    console.log("Botão 'Adicionar comando' clicado!");
    setIsObservationOpen(true);
    if (newIntentContent && newIntentType) {
      const parsedContent =
        newIntentType === "hold"
          ? parseInt(newIntentContent, 10)
          : newIntentContent;

      console.info(newIntentContent, parsedContent, "etsa na pagina");

      saveCommandMessage(newIntentContent, newIntentType)
        .then(() => {
          toast.success("Comando adicionado com sucesso!");
          getClientCommandAction()
            .then((newData) => {
              setIntentListMessage(newData);
            })
            .catch((error) => {
              console.error("Erro ao buscar os novos dados:", error);
            });
          handleCloseEditModal();
          setIsObservationOpen(false);
        })
        .catch((error) => {
          toast.error(
            "Erro ao adicionar o comando. Por favor, tente novamente."
          );
          console.error("Erro ao adicionar o comando:", error);
        });
    } else {
      toast.error("Erro ao editar a mensagem. Intenção ou índice inválidos.");
      console.error("Erro ao editar a mensagem: Intenção ou índice inválidos.");
    }
  };

  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Batata palha', checked: true },
    { id: 2, label: 'Catchup', checked: true },
    { id: 3, label: 'Ervilha', checked: true },
    { id: 4, label: 'Maionese', checked: true },
    { id: 5, label: 'Milho', checked: true },
    { id: 6, label: 'Molho vermelho', checked: true },
    { id: 7, label: 'Molho 4 queijos', checked: true },
    { id: 8, label: 'Mostarda', checked: true },
    { id: 9, label: 'Pão', checked: true },
    { id: 10, label: 'Queijo ralado', checked: true },
    { id: 11, label: 'Salsicha', checked: true },
  ]);
   // Função para alterar o estado de um checkbox específico
   const handleCheckboxChange = (id:any) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };
  return (
    <div className="col-span-12 h-auto  shadow-default   dark:bg-transparent xl:col-span-12">
      <div
        className="flex flex-col items-start justify-between relative  w-full  p-2"
        style={{ zIndex: "99999!important" }}
      >
        <div className=" py-1  border-b border-neutral-300 w-full">
          <h4 className="text-2xl font-bold mb-4 text-neutral-500 dark:text-neutral-300">
          Comanda de pedido do Dogão
          </h4>
        </div>
      </div>
      <div className="overflow-y-auto mt-4 grid grid-cols-12 gap-4 md:mt-2 md:gap-6  2xl:gap-7 pl-4 pr-4 ">
       
          <div className="col-span-12 flex flex-col w-full overflow-y-auto max-h-auto bg-white dark:bg-neutral-800 p-7.5 shadow-md dark:border-stroke dark:shadow-lg rounded-2xl p-4">
            <div className="w-full	 min-h-96 dark:bg-neutral-800 bg-white rounded-lg">
              
              {/* DADOS DO VENDEDOR */}
              <div className="flex justify-between py-4">
              <h3 className="w-full text-xl font-bold mb-4 dark:text-white text-gray-500">
                  Dados do Vendedor
                </h3>
                <div className="w-full gap-4 flex flex-row  justify-end items-center">
                  <label className="mb-3.5 block text-black dark:text-white">
                    Célula:
                  </label>
                  <div className="w-[300px] relative z-20 bg-transparent dark:bg-form-input">
                    <select
                      className="relative z-20 w-full appearance-none rounded border border-stroke bg-gray-200 dark:bg-neutral-600 py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      value="1"
                      //onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option value="1">1 - Disparo</option>
                      <option value="2">2 - Disparos</option>
                      <option value="3">3 - Disparos</option>
                      <option value="4">4 - Disparos</option>
                      <option value="5">5 - Disparos</option>
                      <option value="6">6 - Disparos</option>
                      <option value="6">6 - Disparos</option>
                      <option value="7">7 - Disparos</option>
                      <option value="8">8 - Disparos</option>
                      <option value="9">9 - Disparos</option>
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleOpenModal}
                  className="bg-rose-700 rounded-md dark:hover:bg-rose-900 focus:outline-none focus:bg-rose-600 text-gray-300 px-4 py-2 mx-4 dark:bg-rose-700"
                >
                  <FaPencilAlt size={15}/>
                </button>
              </div>
              
              <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Nome vendedor:
                  </label>
                  <input
                    type="text"
                    placeholder="Nome do cliente"
                    className="w-full rounded border border-neutral-300 bg-transparent py-3 px-5 font-medium outline-none transition focus:border-rose-500 active:border-rose-700 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-rose-700"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Telefone (Whatsapp) vendedor:
                  </label>
                  <input
                    type="text"
                    placeholder="Telefone WhatsApp"
                    className="w-full rounded border border-neutral-300 bg-transparent py-3 px-5 font-medium outline-none transition focus:border-rose-500 active:border-rose-700 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-rose-700"
                  />
                </div>
              </div>

              {/* DADOS DO CLIENTE */}

              <div className="flex justify-between pt-4">
                <h3 className="text-xl font-bold mb-4 dark:text-white text-gray-500">
                  Dados do Cliente
                </h3>
              </div>
              <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Nome do Cliente:
                  </label>
                  <input
                    value={newIntentContent}
                    onChange={(e) => setNewIntentContent(e.target.value)}
                    type="text"
                    placeholder="Nome do cliente"
                    className="w-full rounded border border-neutral-300 bg-transparent py-3 px-5 font-medium outline-none transition focus:border-rose-500 active:border-rose-700 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-rose-700"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Telefone (Whatsapp):
                  </label>
                  <input
                    value={newIntentContent}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="Telefone WhatsApp"
                    className="w-full rounded border border-neutral-300 bg-transparent py-3 px-5 font-medium outline-none transition focus:border-rose-500 active:border-rose-700 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-rose-700"
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Endereço do cliente:
                  </label>
                  <input
                    value={newEndereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    type="text"
                    placeholder="Endereço completo"
                    className="w-full rounded border border-neutral-300 bg-transparent py-3 px-5 font-medium outline-none transition focus:border-rose-500 active:border-rose-700 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-rose-700"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Referência:
                  </label>
                  
                  <input
                   value={newReferencia}
                   onChange={(e) => setReferencia(e.target.value)}
                    type="text"
                    placeholder="Referência"
                    className="w-full rounded border border-neutral-300 bg-transparent py-3 px-5 font-medium outline-none transition focus:border-rose-500 active:border-rose-700 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-rose-700"
                  />
                  
                 
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Horario:
                  </label>
                  <div className="relative ">
                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="time"
                      id="time"
                      className="bg-transparent border leading-none border-gray-300  border-1 text-gray-900 text-sm rounded focus:border-rose-700 active:border-rose-700 disabled:cursor-default disabled:bg-whiter block w-full p-3.5 dark:bg-transparent dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      min="09:00"
                      max="18:00"
                      value="00:00"
                      required
                    />
                  </div>
                </div>
              </div>

             {isObservationOpen && (
              <>
                  {/* DESCRICAO E OBSERVAÇÇAO DO CLIENTE */}
                  <div className="mb-2 py-2">
                  <div className="flex justify-start">
                    <span className="py-2 dark:text-white text-gray-500">
                      Descrição da intenção
                    </span>
                  </div>
                  </div>
                  <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                  <textarea
                    rows={1}
                    value={newIntentType}
                    onChange={(e) => setNewIntentType(e.target.value)}
                    className="text-gray-800 dark:text-white peer h-full min-h-[80px] w-full overflow-hidden rounded-md border border-neutral-300 bg-transparent px-3 py-3 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:borderborder-neutral-300 placeholder-shown:border-t-blue-gray-200 focus:border focus:border-rose-700  focus:outline-0 disabled:border-1 disabled:bg-blue-gray-50"
                    placeholder="Messagem descritivo * "
                  />
                  </div>
                  </>
             )}
             

              {/* LISTA DE PRODUTO */}
              <div className="flex flex-col ">
                <div className="flex justify-between pt-4">
                  <h4 className="text-xl font-bold mb-4 dark:text-white text-gray-500">
                    Selecione os ingredientes
                  </h4>
                </div>
                <div className="mb-4 flex flex-col gap-8 xl:flex-row items-center ">
                <div className="w-[200px] flex flex-row items-center justify-between gap-4">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Qtd:
                  </label>
                  
                  <input
                   value={newQuantidade}
                   onChange={(e) => setQuantidade(e.target.value)}
                    type="number"
                    placeholder="1"
                    className="w-full rounded border border-neutral-300 bg-transparent py-3 px-5 font-medium outline-none transition focus:border-rose-500 active:border-rose-700 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-rose-700"
                  />
  
                </div>
               
                <div className="flex flex-row gap-4 flex-wrap">
                    {checkboxes.map((checkbox) => (
                      <div key={checkbox.id} className="flex items-center ">
                        <input
                          checked={checkbox.checked}
                          onChange={() => handleCheckboxChange(checkbox.id)}
                          id={`checkbox-${checkbox.id}`}
                          type="checkbox"
                          name={`checkbox-${checkbox.id}`}
                          className="w-5 text-blue-600 bg-gray-100 border-gray-300 rounded border-1 border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-rose-700 active:border-rose-700 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        <label htmlFor={`checkbox-${checkbox.id}`} className="ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                          {checkbox.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="">
                  
                  <button
                    
                    //onClick={handleInsert}
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-rose-700 rounded-md hover:bg-rose-900 focus:outline-none focus:bg-rose-600"
                  >
                    <FaPlus className="mr-2" />
                    Adicionar
                  </button>
                </div>
                  </div>
               
              </div>
              {/* FINAL DA LISTA DE PRODUTO */}

              <div className="flex justify-end">
              {dogs?.length >= 1 && (
                <>
                  <button
                    onClick={handleInsertClick}
                    className="bg-rose-700 hover:bg-rose-600 text-white px-4 py-2 rounded-md w-full"
                  >
                    Finalizar Pedido
                  </button>
                </>  
                )}

                
              </div>
            </div>
          </div>
  
      </div>


    </div>
  );
}