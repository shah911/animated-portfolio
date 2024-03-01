import Loader from "@/components/Loader";
import Scroll from "@/components/scroll";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <div className={montserrat.className}>
      <Scroll>
        <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Scroll>
    </div>
  );
}
