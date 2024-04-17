import MagneticEffect from "@/components/MagneticEffect";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Curve from "@/components/Curve";

const NotFound = () => {
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
    <Curve>
      <Header />
      <div className="h-[600px] lg:h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex flex-col items-center justify-evenly relative">
        <div className="h-[75%] w-[95vw] lg:w-[100%] flex flex-col items-center justify-center">
          <div className="h-[70%] md:h-[50%] w-[100%] lg:w-[70%] flex flex-col items-center justify-between">
            <div className="flex items-center justify-between w-[100%]">
              <div className="z-10 overflow-hidden">
                <h1 className="leading-[100%] tracking-tighter  font-[500] uppercase text-[15vw] md:text-[9vw] lg:text-[7vw]">
                  404, are you lost?
                </h1>
              </div>
            </div>
            <div className="w-[100%] relative">
              <hr className="w-[100%] border-black" />
              <div className="absolute top-[-75px] right-[10%]">
                <MagneticEffect>
                  <Link href="/">
                    <button className="capitalize border border-black rounded-[50%] h-[150px] w-[150px] bg-black text-white text-[16px] transition duration-300 hover:text-black hover:bg-white">
                      back to home
                    </button>
                  </Link>
                </MagneticEffect>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-[25%] w-[95vw] md:flex items-center justify-center">
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
    </Curve>
  );
};

export default NotFound;
