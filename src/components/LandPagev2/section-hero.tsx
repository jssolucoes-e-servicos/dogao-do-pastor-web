'use client'


import { useEffect, useRef } from "react";

import { GridContainer } from "./grid";

// import IconFile from '/asset/icon-file.svg'
// import IconHand from '/asset/icon-hand.svg'
// import IconHand02 from '/asset/icon-hand-02.svg'
// import IconMockup from '/asset/mockup.svg'
import gsap from "gsap";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export function SectionHero() {
  const textHeroRef = useRef(null)
  const mockupLeftRef = useRef(null)
  const mockupRightRef = useRef(null)

  useEffect(() => {
    const textHero = textHeroRef.current
    const mLeft = mockupLeftRef.current
    const mRight = mockupRightRef.current

    gsap.fromTo(textHero, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
    })

    gsap.fromTo(mLeft, {
      rotate: 0
    }, {
      rotate: -10,
      duration: 1
    })

    gsap.fromTo(mRight, {
      rotate: 0
    }, {
      rotate: 10,
      duration: 1
    })
  }, []);

  return (
    <section className="relative mt-16 w-full h-section-hero bg-hero bg-no-repeat bg-top bg-purpleivera border-t border-t-gray-400 pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-text-hero text-center opacity-0" ref={textHeroRef}>
          <h3 className="text-xl font-medium text-white mb-4">Inteligência Artificial, resultados de verdade</h3>
          <h1 className="text-white text-3xl/normal font-semibold mb-2">Acelere com leads que vendem de verdade!</h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2 text-gray-200">
              <img
                src="/asset/icon-file.svg"
                alt="Icon File"
              />
              <span className="text-white font-medium">Assinar lista de espera</span>
            </button>
            <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-area-icons h-28 mt-4">
          <div className="absolute left-0 top-0 flex justify-center  items-center  h-10 w-10  bg-transparent border-[.3px] border-gray-400 rounded-full ">
            <IoLogoWhatsapp size={20} className="text-green-700"/>
          </div>
          {/* <img
            src="/asset/icon-hand.svg"
            alt="Icon hand"
            className="absolute left-0 bottom-0"
          /> */}
          <img
            src="/asset/icon-hand-02.svg"
            alt="Icon hand 02"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <img
            src="/asset/mockup.svg"
            alt="Mockup"
            className="relative top-[1.1rem] left-[3.3rem]"
            ref={mockupLeftRef}
          />
          <img
            src="/asset/mockup.svg"
            alt="Mockup"
            className="relative top-[1.1rem] right-[3.3rem]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  )
}