import CallToAction from "@/components/CallToAction";
import Curve from "@/components/Curve";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <Curve>
      <div className="">
        <Header home={false} />
        <div className="flex flex-col items-center justify-center pt-20">
          <div className="flex flex-col items-center justify-center gap-6 py-10">
            <h1 className="w-[90%] lg:w-[60%] 2xl:w-[80%] mx-auto text-[12vw] lg:text-[100px] font-[400] tracking-tighter leading-[100%]">
              Lorem ipsum dolor sit amet
            </h1>
            <hr className="w-[90%] lg:w-[60%] 2xl:w-[80%] mx-auto" />
          </div>
          <div className="relative w-[90%] lg:w-[80%] h-[960px] lg:h-[768px] 2xl:h-[960px] flex flex-col lg:flex-row items-center justify-center">
            <div className="flex-[2] h-[100%] w-[100%] flex flex-col items-center gap-2 pt-[10%]">
              <p className="w-[80%] font-[500]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="#" className="w-[80%] font-bold">
                Learn More
              </Link>
            </div>
            <div className="flex-[3] relative h-[100%] w-[100%] overflow-hidden flex items-center justify-center">
              <Image
                src="/pexels-stefan-stefancik-91227.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <CallToAction />
      </div>
    </Curve>
  );
}

export default About;
