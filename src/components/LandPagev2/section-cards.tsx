'use client'

import { useEffect, useRef } from 'react';

import Image from 'next/image';

//import Mockup from '/public/asset/mockup-main.png';

// import Card01 from '/asset/image-01.png';
// import Card02 from '/asset/image-02.png';
// import Card03 from '/asset/image-03.png';
// import Card04 from '/asset/image-04.png';
// import Card05 from '/asset/image-05.png';
// import Card06 from '/asset/image-06.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export function SectionCards() {
  const mockupRef = useRef(null)
  const titleRef = useRef(null)
  const sectionRef = useRef(null)

  const section = sectionRef.current

  const card01Ref = useRef(null);
  const card02Ref = useRef(null);
  const card03Ref = useRef(null);
  const card04Ref = useRef(null);
  const card05Ref = useRef(null);
  const card06Ref = useRef(null);

  function animateCards(images: null[], position: number) {
    gsap.fromTo(images, {
      opacity: 0,
      x: position
    }, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: .1,
      scrollTrigger: {
        trigger: section,
        start: 'center center'
      }
    })
  }

  useEffect(() => {
    const mockupPhone = mockupRef.current;
    const title = titleRef.current;


    gsap.fromTo(mockupPhone, {
      opacity: 0,
      scale: .5
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power5.out',
    })

    gsap.fromTo(title, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: '65% center',
      }
    })

    const img01 = card01Ref.current;
    const img02 = card02Ref.current;
    const img03 = card03Ref.current;
    const img04 = card04Ref.current;
    const img05 = card05Ref.current;
    const img06 = card06Ref.current;

    const leftImages = [img01, img02, img03];
    const rightImages = [img04, img05, img06];

    animateCards(leftImages, 50)
    animateCards(rightImages, -50)
  }, []);
  return (
    <>
      <section className='w-full pb-20' ref={sectionRef}>
        <img
          src="/asset/mockup-main.png"
          alt="Mockup main"
          className='sticky z-10 top-56 mx-auto -mt-[32rem] mb-16 opacity-0'
          ref={mockupRef}
        />

        <h2 className='text-center text-7xl font-semibold text-neutral-600 mb-56 opacity-0' ref={titleRef}>Faça <span className='text-purpleivera'>você</span> mesmo de casa</h2>

        <div className='relative w-full max-w-area-cards h-area-cards mx-auto'>
          <div  ref={card01Ref} className='bg-purpleivera absolute top-8 left-44 opacity-0 w-[250px] h-[175px] rounded-md' />
          <img src="/asset/image-02.png" ref={card02Ref} className='absolute left-0 bottom-32 opacity-0' alt='Card 01' />
          <img src="/asset/image-03.png" ref={card03Ref} className='absolute bottom-0 left-80 opacity-0' alt='Card 01' />
          <img src="/asset/image-04.png" ref={card04Ref} className='absolute top-0 right-32 opacity-0' alt='Card 01' />
          <img src="/asset/image-05.png" ref={card05Ref} className='absolute right-0 bottom-28 opacity-0' alt='Card 01' />
          <img src="/asset/image-06.png" ref={card06Ref} className='absolute bottom-0 right-80 opacity-0' alt='Card 01' />
        </div>
      </section>
    </>
  )
}