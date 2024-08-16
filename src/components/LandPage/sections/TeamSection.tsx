import React from "react";
import Header from "../common/Header";
import TeamCard from "../cards/TeamCard";
import {FaDatabase,FaCommentAlt,FaRegComment , FaWhatsapp,FaComment , FaStar, FaThumbsUp, FaMoneyBill } from "react-icons/fa";
import { BsPlusCircle ,BsGraphUp } from "react-icons/bs";
function TeamSection() {
  const teamData = [
    {
      id: 0,
      icon:FaRegComment ,
      imageUrl:'FaWhatsapp',
      name: "WhatsApp Integrado e Temperatura do Lead",
      paragraf:'ACELERAIA envia respostas imediatas via WhatsApp para iniciar a qualificação do lead, avaliando sua "temperatura" e probabilidade de fechamento.'
    },
    {
      id: 1,
      icon:FaDatabase,
      imageUrl: 'FaWhatsapp',
      name: "Scoring Avançado de Leads",
      paragraf:'Com base em 250 variáveis, a ACELERAIA estabelece um score para cada lead, identificando aqueles probabilidade de fechamento, otimizando o tempo e esforços.'
    },
    {
      id: 2,
    icon:BsPlusCircle,
      imageUrl:'BsPlusCircle',
      name: "Foco em Leads de Alta Qualidade",
      paragraf:'A ACELERAIA permite que corretores se concentrem em leads com maior potencial, evitando perda de tempo com visitas improdutivas e aumentando a eficiência nas vendas'
    },
    {
      id: 2,
    icon:BsGraphUp,
      imageUrl:'FaWhatsapp',
      name: "Investimentos Inteligentes",
      paragraf:'Com o scoring contínuo de leads, as imobiliárias podem alocar investimentos de forma mais inteligente em canais de origem de leads, melhorando o retorno sobre o investimento.'
    },
   

  ];
  return (
   
     <section className="mt-[9rem] flex flex-col justify-center items-center">
      <Header title="USO INTELIGENTE ACELERAIA" subtitle={`Alcance   <strong style="color: #fb1949;"> conversão de Leads </strong> com o apoio da IA`} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8 md:mt-[6.75rem] max-w-[1900px]">
        <div className="w-full min-h-[550px] flex justify-center items-start flex-col">
          <p className="text-lightBlue font-bold text-2xl">
            Principais vantagens com Acelera by Vera
          </p>
          <p className="text-customLightGray text-[1.2rem] mt-4 mb-8">
            Integração com WhatsApp e CRM
          </p>
          <p className="text-customLightGray text-[1.2rem] mt-4 mb-8">
            Potencializamos sua presença digital com integrações diretas com Meta e WhatsApp, aumentando o alcance e eficiência na geração de leads e engajamento do público.
          </p>
        </div>
        <div className="w-full min-h-[550px] flex justify-center items-center p-1">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 mt-1 md:mt-[3.31rem]">
            {teamData.map((team) => (
              <TeamCard
                key={team.id}
                icon={team.icon}
                name={team.name}
                paragraf={team.paragraf}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
