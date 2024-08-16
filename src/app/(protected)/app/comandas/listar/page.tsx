'use server';

import { Fragment } from "react";
import { getCommandAction } from "@/actions/companies/comando/get-all-comando.action";
import { Comando } from "@/types/comando/comando";
import { CustomTableComando } from "@/components/CompaniesDatas/ComandaPedido/ListaPedido/PedidoList";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
export default async function ListaPedidos() {
  const commandData = await getCommandAction();
 

  function renderComponentOrPlaceholder(commandData: Comando[] | null) {
    if (commandData) {
      return  <CustomTableComando commandData={commandData} /> ;
      // <ComandosMessageCompanie commandData={[commandData]}  />
    } else {
      return <span>Não encontrado</span>;
    }
  }

  return (
    <Fragment>
      <Breadcrumb pageName="layout" />
      {/* <ComandosMessageCompanie commandData={[commandData]}  /> */}
      {renderComponentOrPlaceholder(commandData)}
    </Fragment>
  );
}

