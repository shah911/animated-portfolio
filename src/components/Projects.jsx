import React, { useState } from "react";
import Modal from "./Modal";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    title: "Lorem ipsum",
    src: "/pexels-format-1029757.jpg",
  },
  {
    title: "dolor sit",
    src: "/pexels-miggy-rivera-5665104.jpg",
  },
  {
    title: "consectetur",
    src: "/pexels-stefan-stefancik-91227.jpg",
  },
  {
    title: "adipiscing",
    src: "/pexels-tranmautritam-326502.jpg",
  },
];

const heading = {
  initial: { y: "100%" },
  whileInView: (i) => ({
    y: 0,
    transition: {
      type: "tween",
      duration: 0.75,
      delay: i * 0.05,
      ease: [0, 0.55, 0.45, 1],
    },
  }),
};

function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className="min-h-[768px] lg:h-[768px] 2xl:h-[900px] w-[95vw] mx-auto flex flex-col items-center justify-evenly relative overflow-hidden">
      <div className="pb-10">
        <h1 className="overflow-hidden text-[12vw] capitalize font-[500]">
          {"recent work".split("").map((char, i) =>
            char === " " ? (
              <span key={i}>&nbsp;</span>
            ) : (
              <motion.span
                variants={heading}
                initial="initial"
                whileInView="whileInView"
                key={i}
                custom={i}
                className="inline-flex whitespace-nowrap"
              >
                {char}
              </motion.span>
            )
          )}
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 h-[100%] w-[100%] lg:hidden">
        {data.map((item, i) => (
          <div
            className="flex flex-col items-center justify-center gap-4 overflow-hidden"
            key={i}
          >
            <div className="relative w-[300px] h-[250px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
              <Image
                src={item.src}
                alt={item.title}
                priority={true}
                fill
                className="object-cover"
              />
            </div>
            <span className="inline-flex overflow-hidden">
              {item.title.split("").map((char, i) =>
                char === " " ? (
                  <span key={i}>&nbsp;</span>
                ) : (
                  <motion.span
                    variants={heading}
                    initial="initial"
                    whileInView="whileInView"
                    key={i}
                    custom={i}
                    className="relative inline-flex whitespace-nowrap uppercase font-[500] 2xl:text-lg"
                  >
                    {char}
                  </motion.span>
                )
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="h-[100%] w-[100%] hidden lg:block">
        {data.map((item, i) => (
          <div
            className="h-[20%] w-[100%] 2xl:h-[25%] flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ease-linear hover:opacity-40 hover:translate-x-[10px]"
            key={i}
            onMouseEnter={() => setModal({ active: true, index: i })}
            onMouseLeave={() => setModal({ active: false, index: i })}
          >
            <hr className="w-[100%] border-black border border-b-0" />
            <a
              href="#"
              className="h-[100%] flex items-center text-[48px] 2xl:text-[64px] capitalize w-[100%]"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {modal.active && (
          <motion.div
            key={modal.index}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
            }}
            exit={{
              scale: 0,
              transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
            }}
            className="absolute pointer-events-none z-10 top-[calc(50% - 350px)] 2xl:top-[calc(50% - 450px)] right-0"
          >
            <Modal data={data[modal.index]} modal={modal} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
