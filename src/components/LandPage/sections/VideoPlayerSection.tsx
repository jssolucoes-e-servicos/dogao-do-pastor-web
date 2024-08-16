import React from "react";
import MainButton from "../common/MainButton";

function VideoPlayerSection() {
  return (
    // <section className="flex flex-col md:flex-row justify-between items-center gap-8 " > 
    // <section className=" bg-purpleivera grid grid-cols-2 md:grid-cols-2 gap-2 md:mt-1  md:gap-2 2xl:mt-2 2xl:gap-2">
//     <section className="bg-purpleivera grid grid-cols-2 md:grid-cols-1 gap-2 2xl:mt-2 2xl:gap-2">
//   <div className="w-full flex flex-col justify-center items-center">
//     <p className="text-white font-bold text-2xl">
//       Acelera by Vera
//     </p>
//     <p className="text-white text-[1.2rem] mt-4 mb-8">
//       Transforma a sua incorporadora em uma máquina de vendas com inteligência e agilidade.
//     </p>
//     <MainButton
//       text="Explore"
//       classes="!h-[3.01544rem] hover:bg-white w-[8.2925rem] text-primary font-bold text-[1rem] rounded-[6.25rem] border-[4px] border-[#EBEAED] bg-white shadow-none"
//     />
//   </div>
//   <div className="w-full">
//     <img src="https://aceleraia.com.br/images/landingpage/acelera/acionando-compra.png" alt="video player" className="w-full"/>
//   </div>
// </section>
<section className="bg-purpleivera grid grid-cols-1 900px:grid-cols-1 550px:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 2xl:mt-2 2xl:gap-2">
  <div className="w-full flex flex-col justify-center items-center py-12">
    <p className="text-white font-bold text-2xl">
      Acelera by Vera
    </p>
    <p className="text-white text-[1.2rem] mt-4 mb-8">
      Transforma a sua incorporadora em uma máquina de vendas com inteligência e agilidade.
    </p>
    <MainButton
      text="Explore"
      classes="!h-[3.01544rem] hover:bg-white w-[8.2925rem] text-primary font-bold text-[1rem] rounded-[6.25rem] border-[4px] border-[#EBEAED] bg-white shadow-none"
    />
  </div>
  <div className="w-full">
    <img src="https://aceleraia.com.br/images/landingpage/acelera/acionando-compra.png" alt="video player" className="w-full "/>
  </div>
</section>


  );
}

export default VideoPlayerSection;
