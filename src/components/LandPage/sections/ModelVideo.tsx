// import React, { useEffect, useState } from "react";



// export default function Modalvideo({
//   id = "influencer_modal",
//   onClose = () => {},
// }) {

//   // animacao
//   const HandleOutsideClick = (e) => {
//     if (e.target.id === id) onClose();
//   };

//   return (
//     <section id={id} onClick={HandleOutsideClick}>
//       <div>
//         <section>
//           <>
           
//             <div>
//             {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/T_dt59svURo?si=SSiE54h5fK6Ql-_N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
//               <iframe
//                 allow="autoplay"
//                 id="Vidf"
//                 src="https://www.youtube.com/embed/T_dt59svURo?si=SSiE54h5fK6Ql-_N"
//                 //https://youtu.be/T_dt59svURo?si=hj0rYD6fs1IpP14l
//               />
//               <section>
 
//               </section>
//             </div>
//           </>
//         </section>
//       </div>
//     </section>
//   );
// }

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/T_dt59svURo?si=8mMWoWAUvMWfIvMm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

import React, { MouseEventHandler } from "react";

interface ModalvideoProps {
  id?: string;
  onClose?: () => void;
}

const Modalvideo: React.FC<ModalvideoProps> = ({
  id = "influencer_modal",
  onClose = () => {},
}) => {
  const HandleOutsideClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if ((e.target as HTMLElement).id === id) onClose();
  };

  return (
    <section
      id={id}
      onClick={HandleOutsideClick}
      className="mt-0 w-full max-w-full h-[550px] absolute rounded-[20px] m-0 z-[999999] flex justify-center items-center transition-all ease-in-out duration-[2s] bg-cover bg-no-repeat"
    //   style={{ backgroundImage: 'url("https://luvasmapa.com.br/image/webp/Video/PlayerGlobal.webp")' }}
    >
      <section className="absolute w-full max-w-full h-[550px] min-h-[550px] rounded-[20px] flex justify-center items-center z-1 lg:max-w-[1200px]">
        <section className="flex flex-col justify-center items-center mt-0 w-full max-w-full h-[550px] bg-black rounded-[20px] md:h-[550px] md:rounded-none">
          <div className="w-full max-w-full">
            <iframe
              //allow=""
              id="Vidf"
              className="w-[100%] h-[450px] rounded-[20px] outline-none border-none md:h-[450px]"
              src="https://www.youtube.com/embed/T_dt59svURo?autoplay=1"
              title="Youtube video player"
              //frameborder="0" 
              allow="autoplay; encrypted-media ,accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             // https://youtu.be/T_dt59svURo?si=hj0rYD6fs1IpP14l
             //https://www.youtube.com/embed/T_dt59svURo?si=8mMWoWAUvMWfIvMm
            />
            {/* <iframe 
            class="rounded" 
            width="800"
             height="450"
              src="https://www.youtube.com/embed/T_dt59svURo"
               title="Youtube video player"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">
                        </iframe> */}
            <section className="z-[99999] w-full max-w-full flex justify-center items-center bg-transparent relative bottom-0 md:max-w-full"></section>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Modalvideo;
