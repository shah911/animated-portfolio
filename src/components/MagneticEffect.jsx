import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticEffect({ children }) {
  const magnetic = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 10, mass: 1.25 });
  const springY = useSpring(y, { stiffness: 150, damping: 10, mass: 1.25 });

  useEffect(() => {
    const currentMagnetic = magnetic.current;
    if (!currentMagnetic) return;

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        currentMagnetic.getBoundingClientRect();
      const xValue = clientX - (left + width / 2);
      const yValue = clientY - (top + height / 2);

      x.set(xValue);
      y.set(yValue);
    };

    const mouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    currentMagnetic.addEventListener("mousemove", mouseMove);
    currentMagnetic.addEventListener("mouseleave", mouseLeave);

    return () => {
      if (currentMagnetic) {
        currentMagnetic.removeEventListener("mousemove", mouseMove);
        currentMagnetic.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, [x, y]);

  return (
    <motion.div ref={magnetic} style={{ x: springX, y: springY }}>
      {children}
    </motion.div>
  );
}
