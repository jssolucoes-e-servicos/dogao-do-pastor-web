
"use server";
import { CardHome } from "@/components/DataHome/card-home.component";
import { getAuthenticatedAction } from "@/actions/users/get-authenticated.action";
//import { getCompaniesAction } from "@/actions/companies/get-companies.action";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { CardHomeAceleraAdmin } from "@/components/CompaniesDatas/CardAceleraUser/cardUserAcelera";

export default async function Dashboard() {
  const userData = await getAuthenticatedAction();

  if (!userData || ("error" in userData)) {
    return (
      <div className="bg-rose-700 items-center p-5 m-8">
        <span className="text-white text-lg">Error: Usuário não autenticado</span>
      </div>
    );
  }

 

  return (
    <>
      <Breadcrumb pageName="layout" />
      <main className="flex min-h-screen flex-col items-start justify-start px-24 py-2 bg-gray-100 dark:bg-neutral-900">
        <CardHomeAceleraAdmin />
      </main>
    </>
  );
}



