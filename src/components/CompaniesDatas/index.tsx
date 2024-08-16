'use client';

import { useState, useEffect } from "react";
import type { Empresa } from "@/types/empresa";
import { UserType } from "@/types";
import { Lead } from "@/types/leads/leads";
import ProfileCompany from "./ProfileCompany";
import GraficosLeeads from "@/components/CompaniesDatas/GraficLeadsComapnie";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DateFilter from "@/components/CompaniesDatas/DatePickerLead";
import { getCompanyUnitiesAction } from "@/actions/companies/get-company-unities.action";

interface CompaniesDatasProps {
  botId: string;
  userData: UserType;
}

export default function CompaniesDatas({ botId, userData }: CompaniesDatasProps) {
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);
  const [companyData, setCompanyData] = useState<Empresa | null>(null);
  const [leadData, setLeadData] = useState<Lead[]>([]);
  const [Leadsecond, setLeadSecond] = useState<Lead[]>([]);
  const [leadsChart, setLeadsChart] = useState<any>(null);
  const [leadsMessages, setLeadsMessages] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchingData, setFetchingData] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setFetchingData(true); // Set fetching data to true
      setError(null);

      try {
        const data = await getCompanyUnitiesAction(botId, startDate, endDate);
        //console.log(data,'api-teste');
        if (data.error) {
          setError(data.error);
          setCompanyData(null);
        } else {
          setCompanyData(data.company.companyUnity);
          setLeadData(data.company.charts);
          setLeadSecond(data.company.chartsSeconde);
          setLeadsChart(data.company.countLeads);
          setLeadsMessages(data.company.messages);
        }
      } catch (error) {
        setError("Erro ao buscar dados da empresa");
        setCompanyData(null);
      } finally {
        setLoading(false);
        setFetchingData(false); // Set fetching data to false
      }
    };

    fetchData();
  }, [botId, startDate, endDate]);

  const handleFetchData = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleResetFilters = () => {
    setStartDate(undefined);
    setEndDate(undefined);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-6">
     {userData.profile === "master"? (
                <>
      <DateFilter onFetchData={handleFetchData} onResetFilters={handleResetFilters} fetchingData={fetchingData} />
      </>
    ):(null)}
      {error && <div>{error}</div>}
      {companyData ? (
        <>
          <ProfileCompany companyData={companyData} userData={userData} />
          <GraficosLeeads companyData={companyData} leadData={leadData} leadSecond={Leadsecond} leadsChart={leadsChart} messageData={leadsMessages} userData={userData} />
          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            {/* Outros componentes */}
          </div>
        </>
      ) : (
        !fetchingData && <div className="p-4 text-white dark:text-gray-400">No data available</div>
      )}
    </div>
  );
}



// import type { Empresa } from "@/types/empresa";
// import Link from "next/link";
// import ChartCompanie from "./ChartCompanie";
// import MessageWhCompanie from "./MessageWhCompanie";
// import ProfileCompany from "./ProfileCompany";
// //import TemplateinIcial from "./templateInitial";
// import MessageIntentsCompanie from "./MessageIntentsCompanie";
// import MessageTriggerCompanie from "./MessageTriggerCompanie";
// import GraficosLeeads from "@/components/CompaniesDatas/GraficLeadsComapnie";
// import MessagesComapny from "./Leads-list-company/messages-company-hors";

// import { UserType } from "@/types";
// import { Lead } from "@/types/leads/leads";

// interface CompaniesDatasProps {
//   companyData: Empresa;
//   userData: UserType;
//   leadData: Lead[];
//   leadsChart: any;
//   leadsMessages:boolean
// }

// export default function CompaniesDatas({ companyData, userData, leadData, leadsChart,leadsMessages }: CompaniesDatasProps) {
//   return (
//     <div className="mx-6">
//       <ProfileCompany companyData={companyData} userData={userData} />
//       {/* <MessagesComapny messageData={leadsMessages} companyData={companyData}/> */}
//       <GraficosLeeads companyData={companyData} leadData={leadData} leadsChart={leadsChart} messageData={leadsMessages} userData={userData}/>
//       <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
//         {/* Outros componentes */}
//       </div>
//     </div>
//   );
// }


// "use client"
// import { useState, useEffect } from "react";
// import type { Empresa } from "@/types/empresa";
// import ProfileCompany from "./ProfileCompany";
// import GraficosLeeads from "@/components/CompaniesDatas/GraficLeadsComapnie";
// import MessageIntentsCompanie from "./MessageIntentsCompanie";
// import MessageLeadCompanie from "@/components/CompaniesDatas/Leads-list-company/MessageLeadCompanie";
// import { UserType } from "@/types";
// import { Lead } from "@/types/leads/leads";
// import { getLeadsCompanyUnitiesAction } from "@/actions/leads/get-leads-company-unities.action";
// import { getLeadsChartsDataCompanyUnitiesAction } from "@/actions/leads/get-leads-charts-Date-company-unities.action";
// import MessagesComapny from "./Leads-list-company/messages-company-hors";

// interface CompaniesDatasProps {
//   companyData: Empresa;
//   userData: UserType;
//   leadData: Lead[];
//   leadsChart: any;
//   leadsMessages:boolean
// }

// export default function CompaniesDatas({ companyData, userData, leadData, leadsChart,leadsMessages }: CompaniesDatasProps) {
//   const [activeComponent, setActiveComponent] = useState<string>('graficosLeads');
//   const [leadsData, setLeadsData] = useState<{ leads: Lead[] }>({ leads: [] });
//   const [leadsChartData, setLeadsChartData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     if (activeComponent === 'leads') {
//       setLoading(true);
//       const fetchLeadsData = async () => {
//         try {
//           const leadsResponse = await getLeadsCompanyUnitiesAction(companyData.id);
//           const leadsChartResponse = await getLeadsChartsDataCompanyUnitiesAction(companyData.id);
//           setLeadsData({ leads: leadsResponse.leads });
//           setLeadsChartData(leadsChartResponse);
//         } catch (error) {
//           console.error('Error fetching leads data:', error);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchLeadsData();
//     }
//   }, [activeComponent, companyData.id]);

//   const renderActiveComponent = () => {
//     if (loading) {
//       return <div>Loading...</div>;
//     }
//     switch (activeComponent) {
//       case 'graficosLeads':
//         return (
//         <>
//          <MessagesComapny messageData={leadsMessages}/>
//         <GraficosLeeads companyData={companyData} leadData={leadData} leadsChart={leadsChart} />
//         </>
//         )
//       case 'intents':
//         return <MessageIntentsCompanie intentsData={companyData} />;
//       case 'leads':
//         return <MessageLeadCompanie leadsData={leadsData} leadDate={leadsChartData} />;
//       default:
//         return (
//           <>
//            <MessagesComapny messageData={leadsMessages}/>
//           <GraficosLeeads companyData={companyData} leadData={leadData} leadsChart={leadsChart} />
//           </>
//           )
//     }
//   };

//   return (
//     <div className="m-6">
//       <ProfileCompany companyData={companyData} userData={userData} setActiveComponent={setActiveComponent} />
      
//       {renderActiveComponent()}
//       <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
//         {/* Outros componentes */}
//       </div>
//     </div>
//   );
// }