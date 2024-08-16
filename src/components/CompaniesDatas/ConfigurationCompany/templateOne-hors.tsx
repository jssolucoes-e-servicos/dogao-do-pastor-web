"use client";
import React, { useState } from "react";
import CustomModalTemplateOne from "@/components/Modals/ModalTemplateOne";
import { Empresa } from "@/types/empresa";
import { FaPowerOff, FaWhatsapp } from "react-icons/fa";

interface TemplateOneinIcialProps {
  templateData: Empresa;
}

export default function TemplateOneinIcialHors({
  templateData,
}: TemplateOneinIcialProps) {

  const [updatedTemplateData, setUpdatedTemplateData] = useState(templateData);



  return (
    <div className="col-span-12 rounded-sm border border-none bg-white dark:bg-neutral-800 px-7 py-2 shadow dark:border-strokedark xl:col-span-12">
      <div>
        <div className="flex flex-1 items-center justify-between">
          <div className="py-1 flex flex-col">
            <span className="text-sm  text-neutral-600 dark:text-neutral-400">
              STATUS
            </span>
            <p
              className={`${
                updatedTemplateData.enabled === true
                  ? "text-green-700"
                  : "text-orange-600"
              } font-medium flex flex-row gap-3 items-center`}
            >
              <FaPowerOff size={15} />
              {updatedTemplateData.enabled === true
                ? "Iniciado"
                : "Não Iniciado"}
            </p>
          </div>
          <div className="py-1 flex flex-col">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              TIPO DE INTERAÇÃO
            </span>
            <p
              className={`text-neutral-600 dark:text-gray-200 font-medium flex flex-row gap-3 items-center`}
            >
              {updatedTemplateData.is_conversation_ia === true
                ? "Com Assistente IA"
                : "Intervenção Humana"}
            </p>
          </div>
          <div className="py-1 flex flex-col">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              INÍCIO
            </span>
            <p
              className={`text-neutral-600 dark:text-gray-200 font-medium flex flex-row gap-3 items-center`}
            >
              9H
            </p>
          </div>
          <div className="py-1 flex flex-col">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              TERMINO
            </span>
            <p
              className={`text-neutral-600 dark:text-gray-200 font-medium flex flex-row gap-3 items-center`}
            >
              18H
            </p>
          </div>

          {updatedTemplateData.enabled !== false && (
            <div
              className={`inline-flex h-6 w-6 items-center justify-center py-1 px-3 p-1 rounded-md text-sm font-medium text-white
                    ${
                      updatedTemplateData.enabled ? "bg-primary" : "bg-danger"
                    }`}
            >
              <span className="text-sm font-medium text-neutral-600 dark:text-gray-200">
                {" "}
                ok
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
