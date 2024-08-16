import React from "react";
import { IconType } from "react-icons";

interface IProps {
  icon: IconType;
  name: string;
  paragraf: string;
}

function TeamCard({ icon: Icon, name, paragraf }: IProps) {
  return (
    <div className="flex bg-white max-w-80 h-[420px] flex-grow flex-col gap-[0.56rem] pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center shadow-md rounded-[1.2rem]">
      <div className="w-full flex items-start">
        <Icon   className=" text-primary text-5xl"/> {/* Renderizar o ícone */}
      </div>
      <p className="text-gray-800 font-bold text-[1.2rem] my-2">{name}</p>
      <p className="text-[#484848] text-sm mt-2">{paragraf}</p>
    </div>
  );
}

export default TeamCard;

 {/* <div className="flex justify-around items-center h-[3.6875rem]  bg-white shadow  rounded-b-[1rem]">
        <div>
          <img src="/images/x_icon.png" alt="social icon" />
        </div>
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]" />
        <div>
          <img src="/images/facebook_icon.png" alt="social icon" />
        </div>
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]" />
        <div>
          <img src="/images/dribble_icon.png" alt="social icon" />
        </div>
      </div> */}
//  <img
//             src={imageUrl}
//             alt="team member photo"
//             className="w-[5rem] h-[5rem] rounded-full"
//           />