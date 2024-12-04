import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/expertise": "Expertise",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const text = {
  initial: {
    opacity: 1,
  },

  enter: {
    opacity: 0,
    top: -100,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: "47.5%" },
  },

  exit: {
    opacity: 1,
    top: "40%",
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

const curve = (initialPath, targetPath) => {
  return {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

const translate = {
  initial: {
    top: "-300px",
  },

  enter: {
    top: "-100vh",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: "100vh",
    },
  },

  exit: {
    top: "-300px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Curve({ children }) {
  const router = useRouter();

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve">
      <div
        style={{ opacity: dimensions.width == 0 ? 1 : 0 }}
        className="bg-black transition-opacity duration-0 delay-100 ease-linear z-[99] w-[100vw] h-[calc(100vh+600px)] fixed top-0 left-0 pointer-events-none"
      />

      <motion.p
        className="absolute left-[50%] top-[40%] text-white text-[46px] z-[100] translate-x-[-50%] text-center"
        {...anim(text)}
      >
        {routes.hasOwnProperty(router.route) ? routes[router.route] : 404}
      </motion.p>
      {dimensions.width > 0 && <SVG {...dimensions} />}

      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `

      M0 300
      Q${width / 2} 0 ${width} 300
      L${width} ${height + 300}
      Q${width / 2} ${height + 600} 0 ${height + 300}
      L0 0
  `;

  const targetPath = `

      M0 300
      Q${width / 2} 0 ${width} 300
      L${width} ${height}
      Q${width / 2} ${height} 0 ${height}
      L0 0
  `;

  return (
    <motion.svg
      className="z-[99] w-[100vw] h-[calc(100vh+600px)] fixed top-0 left-0 pointer-events-none"
      {...anim(translate)}
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
