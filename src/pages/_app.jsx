import Scroll from "@/components/scroll";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  return (
    <div className={montserrat.className}>
      <Scroll>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Scroll>
    </div>
  );
}
