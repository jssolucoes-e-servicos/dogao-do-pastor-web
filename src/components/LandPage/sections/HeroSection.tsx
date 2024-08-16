import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center min-h-[800px]">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
        Quer transformar sua incorporadora em uma máquina de vendas?
        {/* Impulsionamos o crescimento do seu negócio inicial */}
        </p>
        <p className="text-[1.375rem] font-[500]">
        Conheça Acelera by Vera, a inteligência e agilidade no atendimento dos clientes
        {/* Nosso objetivo é estar no centro da indústria de serviços de criatividade como criador digital. Em tem um comentário posterior */}
        </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" />
          <div className="flex gap-[1.56rem] items-center">
            <img src="/images/fancy_play_icon.png" alt="play icon" />
            <p className="font-bold text-normal">Saber mais</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/happy_guy.png"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  );
}

export default HeroSection;
