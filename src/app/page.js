'use client';
import { useEffect } from 'react';
import { handleInitialScroll } from '../utils/scrollUtils';
import DownloadWave from "./components/about/DownloadWave";
import Footer from "./components/about/Footer";
import Worldwide from "./components/about/Worldwide";
import Bot from "./components/Bot";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import CryptoSection from './components/CryptoSection';
import Join from "./components/Join";
import SafeTrusted from "./components/SafeTrusted";
import UseCrypto from "./components/UseCrypto";
import UsingWave from "./components/UsingWave";
import Utility from "./components/Utility";
import WaveCards from "./components/WaveCards";
import Space from './components/Space';
import WorldwideSection from './components/Worldwide';
import Offering from './components/Offering';
import Community from './components/Community';
// import { useRef } from 'react';


// gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {
  useEffect(() => {
    handleInitialScroll();

    const handlePopState = () => {
      if (window.location.pathname === '/') {
        handleInitialScroll();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  // const main = useRef();
  // const smoother = useRef();

  // useGSAP(
  //   () => {
  //     smoother.current = ScrollSmoother.create({
  //       smooth: 2,
  //       effects: true,
  //     });
  //   },
  //   { scope: main }
  // );

  return (
    <>
      <Hero />
      <UsingWave />
      <Space />
      <Utility />

      <CryptoSection />
      <SafeTrusted />
      <Offering />
      {/* <Bot /> */}
      <Features />
      <WaveCards />
      <WorldwideSection />
      <Community />
      <FAQs />
      <Footer />
    </>
  );
}
