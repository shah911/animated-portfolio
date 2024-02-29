import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Card from "./Card";

const heading = {
  initial: { x: "100%" },
  whileInView: {
    x: 0,
    transition: {
      type: "tween",
      duration: 2,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const data = [
  {
    title: "Portfolio website",
    url: "/undraw_Portfolio_website_re_jsdd.png",
    desc: "Showcase your work and potentail.",
    color: "#8CB9BD",
  },
  {
    title: "Responsive web Design",
    url: "/undraw_Responsive_re_e1nn.png",
    desc: "adjust your website on all screens.",
    color: "#FEFBF6",
  },
  {
    title: "Blogging Website",
    url: "/undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_(1)_d6br.png",
    desc: "Document your journey along the way.",
    color: "#ECB159",
  },
  {
    title: "Ecommerce Store with shopify",
    url: "/undraw_web_shopping_re_owap.png",
    desc: "Start your online business.",
    color: "#B67352",
  },
  {
    title: "Landing Page design",
    url: "/undraw_Web_development_0l6v.png",
    desc: "design it your way.",
    color: "#5FBDFF",
  },
];

function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <div className="min-h-[700px] flex flex-col items-center justify-evenly">
      <div className="overflow-hidden">
        <motion.h1
          variants={heading}
          initial="initial"
          whileInView="whileInView"
          // viewport={{ once: true }}
          className="leading-[100%] opacity-20 font-bold uppercase text-[150px]"
        >
          services
        </motion.h1>
      </div>
      <div ref={ref}>
        {data.map((item, i) => {
          const targetScale = 1 - (data.length - i) * 0.05;
          return (
            <Card
              key={i}
              item={item}
              i={i}
              targetScale={targetScale}
              range={[i * 0.25, 1]}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
