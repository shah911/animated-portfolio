import LenisScroll from "@/components/LenisScroll";
import Loader from "@/components/Loader";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

const saveScrollPosition = (url) => {
  const scrollPositions =
    JSON.parse(sessionStorage.getItem("scrollPositions")) || {};
  scrollPositions[url] = window.scrollY;
  sessionStorage.setItem("scrollPositions", JSON.stringify(scrollPositions));
};

const restoreScrollPosition = (url) => {
  const scrollPositions =
    JSON.parse(sessionStorage.getItem("scrollPositions")) || {};
  if (scrollPositions[url] !== undefined) {
    window.scrollTo(0, scrollPositions[url]);
  }
};

export default function App({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    } else {
      history.scrollRestoration = "auto";
    }

    const handleRouteChangeStart = (url) => saveScrollPosition(url);
    const handleRouteChangeComplete = (url) => restoreScrollPosition(url);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <div className={montserrat.className}>
      <LenisScroll />
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <AnimatePresence mode="wait" initial={false}>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
