import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export interface Dispatch {
  id: string;
  dispatchDate: string; // A data de despacho do lead
  dispatchCount: number; // O número de despachos no dia
  createdAt: string; // Data de criação do registro
  updatedAt: string; // Data de atualização do registro
  config_id: string; // ID da configuração associada
  isPrimary: number; // Indica se é disparo primário (1) ou secundário (2)
}

const SecondDateChartsDispatch = ({ dispatchDailyGrafic }: { dispatchDailyGrafic?: Dispatch[] }) => {
  const [leadCounts, setLeadCounts] = useState<{ [key: string]: { primary: number; secondary: number } }>({});
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    if (!dispatchDailyGrafic) return; // Verifica se dispatchDailyGrafic é undefined

    const counts: { [key: string]: { primary: number; secondary: number } } = {};

    dispatchDailyGrafic.forEach((dispatch: Dispatch) => {
      const formattedDate = new Date(dispatch.dispatchDate).toISOString().slice(5, 10);
      if (!counts[formattedDate]) {
        counts[formattedDate] = { primary: 0, secondary: 0 };
      }
      if (dispatch.isPrimary === 1) {
        counts[formattedDate].primary += dispatch.dispatchCount;
      } else if (dispatch.isPrimary === 2) {
        counts[formattedDate].secondary += dispatch.dispatchCount;
      }
    });

    setLeadCounts(counts);
  }, [dispatchDailyGrafic]);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const datesOfMonth = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    return `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  });

  const primaryData = datesOfMonth.map(date => leadCounts[date]?.primary || 0);
  const secondaryData = datesOfMonth.map(date => leadCounts[date]?.secondary || 0);

  const backgroundColors = primaryData.map(count => count < 15 ? '#ffa726' : '#e0234e');
  const secondaryBackgroundColors = secondaryData.map(count => count < 15 ?  '#ff5722'  : '#17b6d6');

  const data = {
    labels: datesOfMonth,
    datasets: [
      {
        label: "Quantidade de Disparos Primários",
        backgroundColor: backgroundColors,
        data: primaryData
      },
      {
        label: "Quantidade de Disparos Secundários",
        backgroundColor: secondaryBackgroundColors,
        data: secondaryData
      }
    ]
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true, // Exibe a legenda para os dois conjuntos de dados
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
          <FaAngleLeft size={20}/>
        </button>
        <h2 className="w-80 text-sm font-semibold text-center text-gray-500 dark:text-neutral-500">
          Pesquisa por Data - {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button className="text-sm bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNextMonth}>
          <FaAngleRight size={20}/>
        </button>
      </div>
      <div className="h-[500px] w-[100%] p-10">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default SecondDateChartsDispatch;
