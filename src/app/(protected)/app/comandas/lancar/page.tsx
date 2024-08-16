'use server';

import { Fragment } from "react";
import { getCellsAction } from "@/actions/cells/get-cells.action";
import type { Cell } from "@/types/comando/comando";
import { CustomTableComando } from "@/components/CompaniesDatas/ComandaPedido/ComandoList";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
export default async function Pedidos() {
  const cellsList = await getCellsAction();
 

  function renderComponentOrPlaceholder(cells: Cell[] | null) {
    if (cellsList) {
      return  <CustomTableComando cells={cellsList} /> ;
      // <ComandosMessageCompanie commandData={[commandData]}  />
    } else {
      return <span>Não encontrado</span>;
    }
  }

  return (
    <Fragment>
      <Breadcrumb pageName="layout" />
      {/* <ComandosMessageCompanie commandData={[commandData]}  /> */}
      {renderComponentOrPlaceholder(cellsList)}
    </Fragment>
  );
}

