import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MagneticEffect from "./MagneticEffect";
import Image from "next/image";

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

function CallToAction() {
  const [time, setTime] = useState();

  useEffect(() => {
    const updateTime = () => {
      let date = new Date();
      let localTime = date.toLocaleString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      setTime(localTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[600px] 2xl:h-[768px] flex flex-col items-center justify-evenly relative overflow-hidden">
      <div className="h-[75%] w-[95%] lg:w-[100%] flex flex-col items-center justify-center">
        <div className="h-[90%] md:h-[75%] w-[100%] lg:w-[70%] flex flex-col items-center justify-between">
          <div className="flex items-center justify-between w-[100%]">
            <div className="h-[100px] w-[100px] 2xl:h-[150px] 2xl:w-[150px] relative">
              <Image
                src="/pexels-stefan-stefancik-91227.jpg"
                alt=""
                fill
                className="object-cover rounded-[50%]"
              />
            </div>
            <h1 className="overflow-hidden z-10 leading-[100%] tracking-tighter  font-[500] uppercase text-[9vw] md:text-[11vw] lg:text-[8.5vw]">
              {"Get in Touch".split("").map((char, i) =>
                char === " " ? (
                  <span key={i}>&nbsp;</span>
                ) : (
                  <motion.span
                    variants={heading}
                    initial="initial"
                    whileInView="whileInView"
                    key={i}
                    custom={i}
                    className="relative inline-flex whitespace-nowrap"
                  >
                    {char}
                  </motion.span>
                )
              )}
            </h1>
          </div>
          <div className="w-[100%] relative">
            <hr className="w-[100%] border-black" />
            <div className="absolute top-[-75px] right-[10%]">
              <MagneticEffect>
                <Link href="/contact">
                  <button className="capitalize border border-black rounded-[50%] h-[150px] w-[150px] bg-black text-white text-[18px] transition duration-300 hover:text-black hover:bg-white">
                    contact me
                  </button>
                </Link>
              </MagneticEffect>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center lg:items-start lg:justify-start gap-2 md:gap-6 w-[100%]">
            <MagneticEffect>
              <div className="cursor-pointer rounded-[24px] w-[90vw] md:w-auto py-2 px-4 flex items-center justify-center border border-black bg-black text-white transition duration-300 hover:text-black hover:bg-white">
                info@johndoe.com
              </div>
            </MagneticEffect>
            <MagneticEffect>
              <div className="cursor-pointer rounded-[24px] w-[90vw] md:w-auto py-2 px-4 flex items-center justify-center border border-black bg-black text-white transition duration-300 hover:text-black hover:bg-white">
                +123 456 789
              </div>
            </MagneticEffect>
          </div>
        </div>
      </div>
      <div className="h-[25%] w-[95vw] flex items-center justify-center">
        <div className="flex-[1] flex flex-col justify-evenly h-[100%]">
          <h2 className="font-bold text-lg">Local Time</h2>
          {time}
        </div>
        <div className="flex-[1] flex flex-col items-end justify-evenly h-[100%]">
          <div className="h-[100%] flex flex-col justify-evenly">
            <h2 className="font-bold text-lg">Socials</h2>
            <div className="flex items-center justify-center gap-8">
              <div className="w-fit">
                <MagneticEffect>
                  <a href="#" className="underline-effect font-[500]">
                    Twitter
                  </a>
                </MagneticEffect>
              </div>
              <div className="w-fit">
                <MagneticEffect>
                  <a href="#" className="underline-effect font-[500]">
                    LinkedIn
                  </a>
                </MagneticEffect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
