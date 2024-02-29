import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const data = [
  { title: "about", url: "/about" },
  { title: "expertise", url: "/expertise" },
  { title: "contact", url: "/contact" },
];

const main = {
  initial: {
    scale: 0,
    transformOrigin: "top right",
  },
  animate: {
    scale: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    scale: 0,
    transition: { delay: 0.35, duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

const menuTitle = {
  initial: { opacity: 0, rotateX: 90, translateX: -20, translateY: 80 },
  animate: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      duration: 0.75,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const scrollEvent = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", scrollEvent);

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  const handleHamburgerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="flex items-center justify-end gap-2 relative">
        <label
          className="burger z-[14]"
          htmlFor="burger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <input
            type="checkbox"
            id="burger"
            checked={isOpen}
            readOnly
            onClick={handleHamburgerClick}
          />
          <span></span>
          <span></span>
        </label>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute z-[12] top-[-20px] right-[-5px] flex items-center justify-center h-[400px] w-[300px] bg-black rounded-[12px] border border-white"
          >
            <div className="flex flex-col justify-center gap-6 w-[90%]">
              {data.map((item, i) => (
                <motion.div key={i} custom={i} variants={menuTitle}>
                  <Link
                    href={item.url}
                    className="text-4xl capitalize font-[500] text-white"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
