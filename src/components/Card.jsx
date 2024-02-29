import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function Card({ item, i, targetScale, range, progress }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={ref} className="h-[700px] sticky top-[15%]">
      <motion.div
        style={{ backgroundColor: item.color, scale }}
        className="flex flex-col items-center justify-evenly h-[400px] w-[800px] rounded-[12px]"
      >
        <h2 className="my-4 font-bold text-3xl capitalize">{item.title}</h2>
        <div className="flex items-center justify-evenly h-[100%] w-[100%]">
          <p className="font-[500] text-center capitalize">{item.desc}</p>
          <div className="relative h-[90%] w-[50%] overflow-hidden rounded-xl">
            <motion.div
              style={{ scale: imgScale }}
              className="relative h-[100%] w-[100%] overflow-hidden rounded-xl"
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
