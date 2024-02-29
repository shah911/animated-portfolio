import CallToAction from "@/components/CallToAction";
import Curve from "@/components/Curve";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <Curve>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <Hero />
      <Section />
      <Projects />
      <CallToAction />
    </Curve>
  );
}
