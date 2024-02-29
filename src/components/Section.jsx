import { motion } from "framer-motion";
import MagneticEffect from "./MagneticEffect";
import Link from "next/link";

const about =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const text = {
  initial: {
    y: "100%",
  },
  animate: (i) => ({
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.5,
    },
  }),
};

function Section() {
  return (
    <div className="h-[500px] flex flex-col items-center justify-center relative">
      <div className="flex flex-col lg:flex-row items-center justify-center h-[100%] w-[100%]">
        <div className="flex-[1] flex items-center justify-center">
          <p className="w-[90%] flex flex-wrap items-center justify-center gap-1 capitalize overflow-hidden text-center">
            {about.split(" ").map((char, i) => (
              <span className="inline-flex overflow-hidden" key={i}>
                <motion.span
                  variants={text}
                  initial="initial"
                  whileInView="animate"
                  className="font-[500] text-[16px]"
                  custom={i}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </p>
        </div>
        <div className="flex-[1] h-[100%] w-[100%] flex items-center justify-center">
          <MagneticEffect>
            <Link href="/about">
              <button className="capitalize border border-black rounded-[50%] h-[150px] w-[150px] bg-black text-white text-[18px] transition duration-300 hover:text-black hover:bg-white">
                about me
              </button>
            </Link>
          </MagneticEffect>
        </div>
      </div>
    </div>
  );
}

export default Section;
