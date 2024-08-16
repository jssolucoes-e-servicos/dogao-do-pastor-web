"use client";

import React, { useState, useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

ChartJS.register(...registerables);

interface Lead {
  date: string;
  count: number;
}

interface CompsDateChartsProps {
  metric: [string, { count: number }][];
  secondaryMetric: [string, { count: number }][];
}

export default function CompsDateCharts({ metric, secondaryMetric }: CompsDateChartsProps) {
  const [leadCounts, setLeadCounts] = useState<{ [key: string]: number }>({});
  const [secondaryLeadCounts, setSecondaryLeadCounts] = useState<{ [key: string]: number }>({});
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const countLeadsByDate = (leads: [string, { count: number }][]) => {
      const counts: { [key: string]: number } = {};
      leads.forEach(([date, { count }]) => {
        const formattedDate = new Date(date).toISOString().slice(5, 10);
        counts[formattedDate] = count;
      });
      return counts;
    };

    setLeadCounts(countLeadsByDate(metric));
    setSecondaryLeadCounts(countLeadsByDate(secondaryMetric));
  }, [metric, secondaryMetric]);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const datesOfMonth = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    return `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  });

  const leadData = datesOfMonth.map(date => leadCounts[date] || 0);
  const secondaryLeadData = datesOfMonth.map(date => secondaryLeadCounts[date] || 0);
  const backgroundColors = leadData.map(count => count < 15 ? '#ffa726' : '#e0234e');
  const backgroundColorsv2 = secondaryLeadData.map(count => count < 15 ?  '#ff5722'  : '#17b6d6');
  const data = {
    labels: datesOfMonth,
    datasets: [
      {
        label: "Leads Primários por Data",
        backgroundColor: backgroundColors,
        data: leadData,
      },
      {
        label: "Leads Secundários por Data",
        backgroundColor: backgroundColorsv2,
        data: secondaryLeadData,
      }
    ]
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: "Quantidade de disparos por Data"
      }
    }
  };

  const handlePreviousMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-around items-center ml-3 my-4 gap-20">
        <button className="text-sm bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePreviousMonth}>
          <FaAngleLeft size={20} />
        </button>
        <h2 className="w-80 text-sm font-semibold text-center text-gray-500 dark:text-neutral-500">Pesquisa por Data - {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button className="text-sm bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNextMonth}>
          <FaAngleRight size={20} />
        </button>
      </div>
      <div className="h-[500px] w-[100%] p-10">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}





// "use client"

// import React, { useState, useEffect } from "react";
// import { Chart as ChartJS, registerables } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { Lead } from "@/types/leads/leads";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// ChartJS.register(...registerables);

// interface GraficosLeeadsProps {
    
//     metric: Lead[];
  
//   }

//   //export default function CompsDateCharts({ metric }: { metric: { [key: string]: Lead[] } }) {
// //export default function CompsDateCharts({ metric }: { metric:  Lead[] }) {

//   export default function CompsDateCharts({ metric }: { metric:  Lead[] }) {
//     //console.log(metric,'METROCA LEAD')
//     console.log(metric,'data');
//     const [leadCounts, setLeadCounts] = useState<{ [key: string]: number }>({});
//     const [currentDate, setCurrentDate] = useState<Date>(new Date());

//     useEffect(() => {
//         const countLeadsByDate = () => {
//             const counts: { [key: string]: number } = {};
        
//             Object.values(metric).flat().forEach((lead:any) => {
//                 if (lead && lead) {
//                     const startDate = new Date(lead);
//                     const formattedDate = startDate.toISOString().slice(5, 10); // Pegando apenas mês e dia
//                     counts[formattedDate] = (counts[formattedDate] || 0) + 1;
//                 }
//             });

//             return counts;
//         };

//         const counts = countLeadsByDate();
//         setLeadCounts(counts);
//     }, [metric]);

//     const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
//     const datesOfMonth = Array.from({ length: daysInMonth }, (_, i) => {
//         const day = i + 1;
//         return `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
//     });

//     const leadData = datesOfMonth.map(date => leadCounts[date] || 0);
//     const backgroundColors = leadData.map(count => count < 15 ? '#ff5722c9' : '#e0234e');
//     const leadDataWithLabels = datesOfMonth.map((date, index) => ({
//         x: date,
//         y: leadData[index],
//         label: leadData[index] < 15 ? 'Nível Baixo' : leadData[index].toString(),
//     }));

//     const data = {
//         labels: datesOfMonth,
//         datasets: [{
//             label: "Leads por Data",
//             backgroundColor: backgroundColors,
//             data: leadDataWithLabels
//         }]
//     };

//     const options = {
//         scales: {
//             x: {
//                 beginAtZero: true
//             },
//             y: {
//                 beginAtZero: true
//             }
//         },
//         plugins: {
//             legend: {
//                 display: false
//             },
//             title: {
//                 display: true,
//                 text: "Quantidade de disparos por Data"
//             }
//         }
//     };

//     const handlePreviousMonth = () => {
//         setCurrentDate(prevDate => {
//             const newDate = new Date(prevDate);
//             newDate.setMonth(prevDate.getMonth() - 1);
//             return newDate;
//         });
//     };

//     const handleNextMonth = () => {
//         setCurrentDate(prevDate => {
//             const newDate = new Date(prevDate);
//             newDate.setMonth(prevDate.getMonth() + 1);
//             return newDate;
//         });
//     };

//     return (
//         <div className="overflow-hidden">
//             <div className="flex justify-around items-center ml-3 my-4 gap-20">
//                 <button className="text-sm bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePreviousMonth}>
//                 <FaAngleLeft size={20}/> 
//                 </button>
//                 <h2 className=" w-80 text-sm font-semibold text-center text-gray-500 dark:text-neutral-500">Pesquisa por Data - {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
//                 <button className="text-sm bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNextMonth}>
//                 <FaAngleRight size={20}/>
//                 </button>
//             </div>
//             <div className="h-[500px] w-[100%] p-10">
//                 <Bar data={data} options={options} />
//             </div>
//         </div>
//     );
// }


// import React, { useState, useEffect } from "react";
// import { Chart as ChartJS, registerables } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { Lead } from "@/types/leads/leads";

// ChartJS.register(...registerables);

// export default function CompsDateCharts({ metric }: { metric: { [key: string]: Lead[] } }) {
    
//     const [leadCounts, setLeadCounts] = useState<{ [key: string]: number }>({});

//     useEffect(() => {
//         const flattenedMetric = Object.values(metric).flat(); // Mesclar os subarrays em um único array

//         const countLeadsByDate = () => {
//             const counts: { [key: string]: number } = {};
        
//             flattenedMetric.forEach((lead) => {
//                 // Verificar se o objeto de lead contém a propriedade start_message
//                 if (lead && lead.start_message) {
//                     // Extrair a data do campo start_message
//                     const startDate = new Date(lead.start_message).toLocaleDateString();
        
//                     // Contar o lead para a data correspondente
//                     if (counts[startDate]) {
//                         counts[startDate] += 1;
//                     } else {
//                         counts[startDate] = 1;
//                     }
//                 }
//             });
        
//             return counts;
//         };

//         const counts = countLeadsByDate();
//         setLeadCounts(counts);
//     }, [metric]);

//     // Dados do gráfico
//     const data = {
//         labels: Object.keys(leadCounts),
//         datasets: [{
//             label: "Leads por Data",
//             backgroundColor: ["#e0234e", "#36A2EB", "#ffa726","#17a2b8","#0b922f","#03af67c8","#c3002d","#ff5722c9"],
//             //backgroundColor: "#36A2EB",
//             data: Object.values(leadCounts)
//         }]
//     };

//     // Opções do gráfico
//     const options = {
//         scales: {
//             x: {
//                 beginAtZero: true
//             },
//             y: {
//                 beginAtZero: true
//             }
//         },
//         plugins: {
//             legend: {
//                 display: false
//             },
//             title: {
//                 display: true,
//                 text: "Quantidade de Leads por Data"
//             }
//         }
//     };

//     return (
//         <div className="w-full p-10">
//             <Bar data={data} options={options} />
//         </div>
//     );
// }


// import React, { useState, useEffect } from "react";
// import { Chart as ChartJS, registerables } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { Lead } from "@/types/leads/leads";

// ChartJS.register(...registerables);

// export default function CompsDateCharts({ metric }: { metric: { [key: string]: Lead[] } }) {
    
//     const [leadCounts, setLeadCounts] = useState<{ [key: string]: number }>({});

//     useEffect(() => {
//         const flattenedMetric = Object.values(metric).flat(); // Mesclar os subarrays em um único array

//         const countLeadsByDate = () => {
//             const counts: { [key: string]: number } = {};
        
//             flattenedMetric.forEach((lead) => {
//                 // Verificar se o objeto de lead contém a propriedade start_message
//                 if (lead && lead.start_message) {
//                     // Extrair a data do campo start_message
//                     const startDate = new Date(lead.start_message);
//                     const formattedDate = startDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
        
//                     // Contar o lead para a data correspondente
//                     if (counts[formattedDate]) {
//                         counts[formattedDate] += 1;
//                     } else {
//                         counts[formattedDate] = 1;
//                     }
//                 }
//             });

//             // Adicionar os dias do mês atual que não têm leads e definir a contagem como zero
//             const today = new Date();
//             const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
//             const currentMonth = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}`;
//             for (let i = 1; i <= lastDayOfMonth; i++) {
//                 const formattedDay = `${currentMonth}-${i.toString().padStart(2, '0')}`;
//                 if (!counts[formattedDay]) {
//                     counts[formattedDay] = 0;
//                 }
//             }
        
//             return counts;
//         };

//         const counts = countLeadsByDate();
//         setLeadCounts(counts);
//     }, [metric]);

//     // Dados do gráfico
//     const data = {
//         labels: Object.keys(leadCounts),
//         datasets: [{
//             label: "Disparos nessa data",
//             backgroundColor: Object.values(leadCounts).map(count => count === 0 ? 'red' : '#36A2EB'),
//             data: Object.values(leadCounts).map(count => count === 0 ? 0.1 : count)
//         }]
//     };

//     // Opções do gráfico
//     const options = {
//         scales: {
//             x: {
//                 beginAtZero: true
//             },
//             y: {
//                 beginAtZero: true
//             }
//         },
//         plugins: {
//             legend: {
//                 display: false
//             },
//             title: {
//                 display: true,
//                 text: "Quantidade de Leads por Data"
//             }
//         }
//     };

//     return (
//         <div className="w-full p-10">
//             <Bar data={data} options={options} />
//         </div>
//     );
// }

// funcionando grafico
// import React, { useState, useEffect } from "react";
// import { Chart as ChartJS, registerables } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { Lead } from "@/types/leads/leads";

// ChartJS.register(...registerables);

// export default function CompsDateCharts({ metric }: { metric: { [key: string]: Lead[] } }) {
    
//     const [leadCounts, setLeadCounts] = useState<{ [key: string]: number }>({});

//     useEffect(() => {
//         const countLeadsByDate = () => {
//             const counts: { [key: string]: number } = {};
        
//             Object.values(metric).flat().forEach((lead) => {
//                 if (lead && lead.start_message) {
//                     const startDate = new Date(lead.start_message);
//                     const formattedDate = startDate.toISOString().slice(0, 10);
//                     counts[formattedDate] = (counts[formattedDate] || 0) + 1;
//                 }
//             });

//             console.log("Lead Counts:", counts); // Verificar os dados dos leads no console

//             return counts;
//         };

//         const counts = countLeadsByDate();
//         setLeadCounts(counts);
//     }, [metric]);

//     console.log("Lead Counts:", leadCounts); // Verificar os dados dos leads após atualização

//     // Criar um array de datas para o mês atual
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const currentMonth = today.getMonth() + 1;
//     const daysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // Último dia do mês atual
//     const datesOfMonth = Array.from({ length: daysInMonth }, (_, i) => {
//         const day = i + 1;
//         return `${currentYear}-${(currentMonth).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
//     });

//     console.log("Dates of Month:", datesOfMonth); // Verificar datas do mês atual

//     // Configurar os dados do gráfico
//     const data = {
//         labels: datesOfMonth,
//         datasets: [{
//             label: "Leads por Data",
//             backgroundColor: '#36A2EB',
//             data: datesOfMonth.map(date => leadCounts[date] || 0)
//         }]
//     };

//     console.log("Data for Chart:", data); // Verificar dados para o gráfico

//     // Opções do gráfico
//     const options = {
//         scales: {
//             x: {
//                 beginAtZero: true
//             },
//             y: {
//                 beginAtZero: true
//             }
//         },
//         plugins: {
//             legend: {
//                 display: false
//             },
//             title: {
//                 display: true,
//                 text: "Quantidade de Leads por Data"
//             }
//         }
//     };

//     return (
//         <div className="w-full p-10">
//             <Bar data={data} options={options} />
//         </div>
//     );
// }


// "use client"
// import React, { useState, useEffect } from "react";
// import { Chart as ChartJS, registerables } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { Lead } from "@/types/leads/leads";

// ChartJS.register(...registerables);

// export default function CompsDateCharts({ metric }: { metric: { [key: string]: Lead[] } }) {
    
//     const [leadCounts, setLeadCounts] = useState<{ [key: string]: number }>({});
//     const [currentDate, setCurrentDate] = useState<Date>(new Date());

//     useEffect(() => {
//         const countLeadsByDate = () => {
//             const counts: { [key: string]: number } = {};
        
//             Object.values(metric).flat().forEach((lead) => {
//                 if (lead && lead.start_message) {
//                     const startDate = new Date(lead.start_message);
//                     const formattedDate = startDate.toISOString().slice(0, 10);
//                     counts[formattedDate] = (counts[formattedDate] || 0) + 1;
//                 }
//             });

//             console.log("Lead Counts:", counts); // Verificar os dados dos leads no console

//             return counts;
//         };

//         const counts = countLeadsByDate();
//         setLeadCounts(counts);
//     }, [metric]);

//     console.log("Lead Counts:", leadCounts); // Verificar os dados dos leads após atualização

//     // Criar um array de datas para o mês atual
//     const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // Último dia do mês atual
//     const datesOfMonth = Array.from({ length: daysInMonth }, (_, i) => {
//         const day = i + 1;
//         return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
//     });

//     // Criar um array de datas para o mês atual
// // const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // Último dia do mês atual
// // const datesOfMonth = Array.from({ length: daysInMonth }, (_, i) => {
// //     const day = i + 1;
// //     return `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
// // });

//     // Criar um array de datas para o mês atual


//     console.log("Dates of Month:", datesOfMonth); // Verificar datas do mês atual

//     // Mapear os leads para cada data do mês atual
//     const leadData = datesOfMonth.map(date => leadCounts[date] || 0);

//     // Definir cores para as barras
//     const backgroundColors = leadData.map(count => count < 16 ? '#ff5722c9' : '#e0234e'); // Cor vermelha para quantidade menor que 14, caso contrário, azul

    
//     // Configurar os dados do gráfico
//     const data = {
//         labels: datesOfMonth,
//         datasets: [{
//             label: "Disparos Leads por Data",
//             backgroundColor: backgroundColors,
//             data: leadData
//         }]
//     };

//     console.log("Data for Chart:", data); // Verificar dados para o gráfico

//     // Opções do gráfico
//     const options = {
//         scales: {
//             x: {
//                 beginAtZero: true
//             },
//             y: {
//                 beginAtZero: true
//             }
//         },
//         plugins: {
//             legend: {
//                 display: false
//             },
//             title: {
//                 display: true,
//                 text: "Quantidade de disparos por Data"
//             }
//         }
//     };

//     const handlePreviousMonth = () => {
//         setCurrentDate(prevDate => {
//             const newDate = new Date(prevDate);
//             newDate.setMonth(prevDate.getMonth() - 1);
//             return newDate;
//         });
//     };

//     const handleNextMonth = () => {
//         setCurrentDate(prevDate => {
//             const newDate = new Date(prevDate);
//             newDate.setMonth(prevDate.getMonth() + 1);
//             return newDate;
//         });
//     };

//     return (
//         <div className=" overflow-hidden">
//             <div className="flex justify-start items-center ml-3 my-4 gap-20">
//                 <button className="text-sm bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePreviousMonth}>
//                     {'<'}
//                 </button>
//                 <h2 className="text-sm font-semibold text-gray-500 dark:text-neutral-500">Pesquisa por Data - {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
//                 <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNextMonth}>
//                    {'>'}
//                 </button>
//             </div>
//             <div className="h-[500px] w-[100%] p-10 ">
//                 <Bar data={data} options={options} />
//             </div>
            
//         </div>
//     );
// }






// const data = {
//     labels: Object.keys(leadCounts),
//     datasets: [{
//         label: "Leads por Data",
//         backgroundColor: '#36A2EB',
//         data: Object.keys(leadCounts).map(date => leadCounts[date] || 0)
//     }]
// };


// sem o ano no grafico

