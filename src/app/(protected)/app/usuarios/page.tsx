import { Metadata } from "next";

import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import Instancias from "@/components/Manager/instancias";
import { getAuthenticatedAction } from "@/actions/users/get-authenticated.action";

export const metadata: Metadata = {
  // title: jsonParams.pages.protected.ava.dashboard.title,
  // description: jsonParams.pages.protected.ava.dashboard.description,
  title: "Pagina de  | instancia Dashboard AceleraIa",
  description: "AceleraIa instancia envio de mensagem WhatsApp",
  // other metadata
};

export default async function UsuarioCompany() {
  const userData = await getAuthenticatedAction();

  return (
    <>
    <Breadcrumb pageName="layout" />
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
    {/* <Breadcrumb pageName="Manager" /> */}
   
        {userData && userData.profile === "master" ? (
          <div className="w-full bg-rose-700 rounded-lg pl-2 py-3">
          <span className="text-white text-sm">  Usuário não autorizado</span>
         </div>

        ) : (
          <div className="w-full bg-rose-700 rounded-lg pl-2 py-3">
            <span className="text-white text-sm">  Usuário não autorizado</span>
           </div>
        )
       }
    </div>
    </>
  );
}
