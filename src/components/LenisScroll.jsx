// import { useEffect } from "react";
// import Lenis from "lenis";

// export default function LenisScroll() {
//   useEffect(() => {
//     const lenis = new Lenis();

//     lenis.on("scroll", (e) => {
//       console.log(e);
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return null;
// }

import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

export default function LenisScroll({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}

// import { ReactLenis } from "lenis/react";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function LenisScroll({ children }) {
//   const lenisRef = useRef();

//   useEffect(() => {
//     function update(time) {
//       lenisRef.current?.lenis?.raf(time * 1000);
//     }

//     gsap.ticker.add(update);

//     return () => gsap.ticker.remove(update);
//   }, []);

//   return (
//     <ReactLenis options={{ autoRaf: false }} ref={lenisRef}>
//       {children}
//     </ReactLenis>
//   );
// }
