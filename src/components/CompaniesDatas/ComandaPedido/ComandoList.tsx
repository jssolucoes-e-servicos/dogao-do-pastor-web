"use server"
import { Cell } from "@/types/comando/comando";
import ComandosMessageCompanie from "@/components/CompaniesDatas/ComandaPedido/Comands";

export async function CustomTableComando({cells}:{cells:Cell[]}) {
  
//const companiesList = await getCompaniesPaginateAction();
//console.log(companiesList,'MEUS DADOS')
  return (
    <>
      <div className=" text-black dark:text-white p-8">
      {/* block text-sm font-medium text-black dark:text-white */}
        {/* <div className="border-gray-100 flex flex-col justify-center p-4 bg-card border border-neutral-800/30 shadow-md hover:shodow-lg rounded-2xl h-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="font-medium leading-none text-gray-100">
                  Empresas atribuido a plataforma
                </div>
                <p className="text-sm text-gray-500 leading-none mt-1">
                  visualização de todos colaboradores.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-1 m-1">
        {cells ? (
       <ComandosMessageCompanie cells={cells} />
      ) : (
        <div>Error: Lista de comando não disponivel!</div>
      )}
        
        </div>
      </div>
    </>
  );
}
