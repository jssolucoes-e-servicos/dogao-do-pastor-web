import React from "react";

interface IProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: IProps) {
  return (
    <div className="flex gap-[1.19rem] flex-col">
      <p className="text-customGray tracking-[0.39375rem] uppercase text-[0.875rem] font-[700] text-center">
       {title}
      </p>
      <div
        className="flex justify-center items-center text-darkBlue text-2xl md:text-[3.25rem] font-[700] text-center"
        
      ><span className="w-[550px]  leading-tight" dangerouslySetInnerHTML={{ __html: subtitle }}></span></div>
    </div>
  );
}

export default Header;
