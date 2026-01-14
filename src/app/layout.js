"use client";
import { myFont } from "./font";
import "./globals.css";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import ScrollToTop from "./components/ScrollToTopAppRouter";
import Header from "./components/Header";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function RootLayout({ children }) {
  const smoother = useRef();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const destroySmoother = () => {
    if (smoother.current && typeof smoother.current.kill === "function") {
      smoother.current.kill();
      smoother.current = null;
      if (process.env.NODE_ENV !== "production")
        console.log("GSAP ScrollSmoother destroyed");
    } else if (window.ScrollSmoother && window.ScrollSmoother.get) {
      const s = window.ScrollSmoother.get();
      if (s && typeof s.kill === "function") {
        s.kill();
        if (process.env.NODE_ENV !== "production")
          console.log("GSAP ScrollSmoother destroyed (window)");
      }
    }
  };


  const createSmoother = () => {
    destroySmoother();
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true);
    const content = document.getElementById("smooth-content");
    if (!content) {
      if (process.env.NODE_ENV !== "production")
        console.warn("GSAP: #smooth-content not found!");
      return;
    }
    smoother.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });
    if (process.env.NODE_ENV !== "production")
      console.log("GSAP ScrollSmoother created");
  };


  useGSAP(
    () => {
      createSmoother();
    },
    {
      dependencies: [],
    }
  );


  return (

    <html lang="en" className={myFont.variable}>
      <head>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZS76923C8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8ZS76923C8');
            `
          }}
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="icon" href="/assets/img/favicon.ico" />


        <title>Wave Money – Simple & Secure Crypto Services for Users</title>
        <meta name="description" content="Pay bills, book travel, earn with bots, and access AI services — all using crypto. Join millions using Wave Money, the all-in-one crypto utility app." />


        <meta name="keywords" content="Wave Money, crypto payments, pay bills with crypto, book flights with crypto, crypto utility app, Web3 payments, AI calling, crypto wallet, arbitrage bot, convert crypto to INR, crypto to fiat India" />


        <meta property="og:title" content="Wave Money – Simple & Secure Crypto Services for Users" />
        <meta property="og:description" content="A revolution in crypto payments. Pay bills, travel, and more using BTC, ETH, USDT, and other cryptocurrencies. Try Wave now." />
        <meta property="og:image" content="/og-image.png" />
        {/* <meta property="og:url" content="#" /> */}
        <meta property="og:type" content="website" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wave Money – Simple & Secure Crypto Services for Users" />
        <meta name="twitter:description" content="Pay for bills, travel, AI services and more using crypto. Download Wave Money and experience the future of daily crypto use." />
        <meta name="twitter:image" content="/og-image.png" />

        <meta name="apple-mobile-web-app-title" content="Wave Money" />
        <meta name="theme-color" content="#000000" />


        <link rel="canonical" href="https://wavemoney.app/" />
      </head>

      <body className="antialiased">
        <Header />
        <SmoothScrollProvider key={pathname}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            >
              <ScrollToTop />
              {children}
            </motion.div>
          </AnimatePresence>
        </SmoothScrollProvider>
      </body>
    </html>

  );
}
