"use client"
import React, { useState } from "react";

import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";
import Modalvideo from "./ModelVideo";
import { FaCirclePlay } from "react-icons/fa6";
function HeroVideoSection() {
  const appReviewData = [
    {
      id: 0,
      imageUrl: "https://aceleraia.com.br/images/landingpage/acelera/verificando-celular.png",
      reviewerName: "Rayhan Curran",
      review:
        "Transforma a sua incorporadora em uma máquina de vendas com inteligência e agilidade.",
    },

    {
      id: 1,
      imageUrl: "https://aceleraia.com.br/images/landingpage/acelera/celular-funcao.png",
      reviewerName: "Kayley Frame",
      review:
        "Chat automatizado e personalizado para cada tipo de cliente (por empreendimento, base antiga ou captação AceleraIa) [somente via WhatsApp na fase 1]",
    },
    {
      id: 2,
      imageUrl: "https://aceleraia.com.br/images/landingpage/acelera/familia.png",
      reviewerName: "Gene Whitfield",
      review: "AceleraIa classifica cada um deles e entrega uma lista de perfil qualificada, só para o time de corretores agendar a visita.",
    },
    {
      id: 3,
      imageUrl: "/images/alan.jpg",
      reviewerName: "Allan Kim",
      review:
        "I've built my website with Startup just in one day, and it was ready-to-go. ",
    },
  ];
  const [modalinfluence, setmodalInfluence] = useState(false); //modal INSERT
  function ModalInfluences() {
    setmodalInfluence(true);
  }

  return (
    <section className="mt-[2rem]">
      <Header title="AceleraIa, Parceiria com Incorporadores " subtitle={`Aumente seus  <strong style="color: #fb1949;"> fechamentos em </strong> estratégicas`}  />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
      <div className="w-full h-[550px] flex justify-center items-center ">
     
            <div 
            style={{ backgroundImage: 'url("/assets/maxresdefault.jpg")',
            position:'relative',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'

          
             }}
            className=" rounded-md  w-[1120px] min-h-[550px] flex justify-center items-center flex-wrap relative flex-col">
              <button className=" p-4 w-[150px] min-h-[550px]">
                <div className="w-[120px] h-[120px] bg-primary rounded-full flex justify-center items-center"
                // style={{ backgroundImage: 'url("https://luvasmapa.com.br/image/webp/Video/PlayerGlobal.webp")' }}
                 onClick={ModalInfluences}>
                    <div className=" w-[80px] h-[80px] bg-no-repeat flex justify-center items-center"
                    // style={{ backgroundImage: 'url(" /images/fancy_play_icon.png")' }}
                   ><FaCirclePlay size={40} className="text-white"/></div>
                 </div>
              </button>
              {modalinfluence === true ? (
                <Modalvideo
                  onClose={() => {
                    setmodalInfluence(false);
                    setmodalInfluence(false);
                  }}
                ></Modalvideo>
              ) : (
                <React.Fragment />
              )}
            </div>
            </div>
            {/* <div className="w-full min-h-[550px] flex justify-center items-center">
            <div className="w-[1120px] min-h-[200px] flex justify-center items-center flex-wrap relative flex-col">
              <span  className=" text-5xl items-center text-gray-700">Expansão de Receitas</span>
              <span  className=" text-2xl items-center text-gray-700">
              Revolucionando a administração de Leads
              </span>
            </div>
          </div> */}
          <div className="w-full min-h-[550px] flex justify-center items-start flex-col">
        <p className="text-lightBlue font-bold text-2xl ">
        Principais vantagens com Acelera by Vera
        </p>
        <p className="text-customLightGray text-[1.2rem] mt-4 mb-8">
        Integração com WhatsApp e CRM
        </p>
        <p className="text-customLightGray text-[1.2rem] mt-4 mb-8">
       

Potencializamos sua presença digital com integrações diretas com Meta e WhatsApp, aumentando o alcance e eficiência na geração de leads e engajamento do público.
        </p>
        {/* <span
          
          className="mr-2 h-4  bg-primary  p-4 w-[8.2925rem] text-lightBlue font-bold text-[1rem] rounded-[6.25rem] border-[4px] border-[#EBEAED]  shadow-none"
        >Explore</span> */}
      </div>
      </div>
    </section>
  );
}

export default HeroVideoSection;
