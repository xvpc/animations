import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Animations
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";


export default function App({ Component, pageProps }: AppProps) {

  return(
    <ParallaxProvider>
      <AnimatePresence mode="wait" >
        <Component {...pageProps} />
      </AnimatePresence>
    </ParallaxProvider>
  );
}
