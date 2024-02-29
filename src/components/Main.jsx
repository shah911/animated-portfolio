import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    title: "Design",
    url: "/pexels-tranmautritam-326502.jpg",
  },
  {
    title: "Develop",
    url: "/pexels-format-1029757.jpg",
  },
];

const text = {
  initial: { y: "100%" },
  animate: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      type: "tween",
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const img = {
  initial: { opacity: 0, x: "-30%" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

function Main() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-[100vh] flex items-center justify-center w-[90vw] mx-auto">
      <AnimatePresence mode="wait">
        {data.map(
          (item, i) =>
            active === i && (
              <div key={i}>
                <div className="absolute top-[calc(50%-80px)] left-0 z-10">
                  <p className="flex items-center justify-center gap-6 text-[10vw] font-[500] tracking-tighter">
                    I
                    <span className="overflow-hidden inline-flex">
                      <motion.span
                        variants={text}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        {item.title}
                      </motion.span>
                    </span>
                  </p>
                </div>
                <motion.div
                  variants={img}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="ml-[20%] relative h-[450px] w-[60vw]"
                >
                  <Image src={item.url} alt="" fill className="object-cover" />
                </motion.div>
              </div>
            )
        )}
      </AnimatePresence>
    </div>
  );
}

export default Main;
