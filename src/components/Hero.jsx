import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const text = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: 0,
    transition: {
      delay: 1 + i * 0.05,
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

const circle = {
  initial: (mousePosition) => ({
    opacity: 0,
    scale: 0,
    x: mousePosition.x - 50,
    y: mousePosition.y - 50,
    transition: {
      type: "tween",
      ease: "backOut",
    },
  }),
  animate: (mousePosition) => ({
    opacity: 1,
    scale: 1,
    x: mousePosition.x - 25,
    y: mousePosition.y - 25,
    transition: { type: "tween", ease: "backOut" },
  }),
  exit: (mousePosition) => ({
    opacity: 0,
    scale: 0,
    x: mousePosition.x - 25,
    y: mousePosition.y - 25,
    transition: {
      type: "tween",
      ease: "backOut",
      duration: 0.75,
    },
  }),
};

function Hero() {
  // const handleMouseEnter = (e) => {
  //   setOutOfScope(false);
  //   const { clientX, clientY } = e;
  //   const { left, top } = e.currentTarget.getBoundingClientRect();
  //   setMousePosition({ x: clientX - left, y: clientY - top });
  // };
  // const handleMouseLeave = () => {
  //   setOutOfScope(true);
  // };

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // const [outOfScope, setOutOfScope] = useState(true);

  const firstPhrase = useRef(null);
  const secondPhrase = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  const direction = useRef(-1);

  const animate = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstPhrase?.current, { xPercent: xPercent });
    gsap.set(secondPhrase?.current, { xPercent: xPercent });
    xPercent += 0.1 * direction.current;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-100px",
    });

    requestAnimationFrame(animate);
  });

  return (
    <div
      // onMouseMove={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {/* <AnimatePresence mode="wait">
        {!outOfScope && (
          <motion.div
            custom={mousePosition}
            variants={circle}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-10 absolute hidden lg:block h-[50px] w-[50px] rounded-[50%] bg-orange-500"
          ></motion.div>
        )}
      </AnimatePresence> */}
      <div className="h-[768px] md:h-[840px] lg:h-[100vh] flex items-center justify-center relative">
        <div className="z-[99] absolute top-0">
          <Header home={true} />
        </div>
        <Image
          src="/pexels-stefan-stefancik-91227.jpg"
          alt="john doe"
          fill
          className="object-cover"
        />
        <div className="absolute top-[calc(25%-80px)] right-0 w-[25%]">
          <span className="capitalize text-[4vw] text-white">
            freelance designer & developer
          </span>
        </div>
        <div
          ref={slider}
          className="w-[100%] absolute top-[calc(80%-17.9vw)] flex items-center justify-center overflow-hidden whitespace-nowrap gap-0"
        >
          <h1
            ref={firstPhrase}
            className="relative text-white text-[17.9vw] font-[500] capitalize"
          >
            John Doe -
          </h1>
          <h1
            ref={secondPhrase}
            className="absolute left-[100%] text-white text-[17.9vw] font-[500] capitalize"
          >
            John Doe -
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
