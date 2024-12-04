import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function MagneticEffect({ children }) {
  const ref = useRef(null);
  const [cordinates, setCordinates] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setCordinates({ x, y });
  };
  const onMouseLeave = () => {
    setCordinates({ x: 0, y: 0 });
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: cordinates.x, y: cordinates.y }}
      transition={{ type: "spring", stiffness: 150, damping: 10, mass: 1.25 }}
    >
      {children}
    </motion.div>
  );
}

export default MagneticEffect;
