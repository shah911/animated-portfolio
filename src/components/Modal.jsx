import Image from "next/image";
import React from "react";

function Modal({ data }) {
  return (
    <div className="border border-black pointer-events-none">
      <div className="h-[350px] w-[350px] 2xl:h-[450px] 2xl:w-[450px]  flex items-center justify-center relative">
        <Image src={data.src} alt="" fill className="object-cover" />
      </div>
    </div>
  );
}

export default Modal;
