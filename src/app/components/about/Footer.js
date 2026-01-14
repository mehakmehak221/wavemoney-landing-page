import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Linkedin, telegram as Telegram, twitter as Twitter, instagram as Instagram, Facebook, Youtube } from "../../../VectorImages";
import { scrollToSection } from "../../../utils/scrollUtils";

export default function Footer() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      mouseX.set(clientX - rect.left - 10);
      mouseY.set(clientY - rect.top - 10);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);


  return (
    <div ref={containerRef} className="bg-black text-white pt-20 pb-10 px-4 md:px-6 lg:px-10 xxl:px-20 overflow-hidden relative cursor-none">
      <motion.div
        style={{ x, y }}
        className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="max-w-[1440px] w-full mx-auto mb-12">
        <h3 className="text-white font-inter text-[16px] font-medium tracking-wider uppercase flex items-center mb-2">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          CRYPTO PAYMENTS MADE SIMPLE
        </h3>
        <p className="text-white/80 font-inter text-[16px] font-normal ml-3">
          Wave Money Helps You Convert Crypto To Fiat, Pay Bills, Send Money Globally, And Spend Anywhere — Securely And Instantly.
        </p>
      </div>
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div>
            <div className="mb-8">
              <h3 className="text-white font-inter text-[16px] font-medium tracking-wider uppercase">DISCOVER</h3>
            </div>
            <ul className="space-y-5">

              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.onewave.money"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-inter hover:text-white/80 text-[16px] font-medium transition-colors cursor-none text-left block"
                >
                  APP
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('wave-cards')} className="text-white font-inter hover:text-white/80 text-[16px] font-medium transition-colors cursor-none text-left">
                  CARDS
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faqs')} className="text-white font-inter hover:text-white/80 text-[16px] font-medium transition-colors cursor-none text-left">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-white font-inter text-[16px] font-medium tracking-wider uppercase">LEGAL</h3>
            </div>
            <ul className="space-y-5">
              <li>
                <Link href="/acceptance-of-terms" className="text-white font-inter hover:text-white/80 text-[16px] font-medium transition-colors cursor-none uppercase">
                  Acceptance of Terms
                </Link>
              </li>
              <li>
                <Link href="/regulatory-compliance" className="text-white font-inter hover:text-white/80 text-[16px] font-medium transition-colors cursor-none uppercase">
                  Regulatory Compliance
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-white font-inter text-[16px] font-medium tracking-wider uppercase">COMPANY</h3>
            </div>
            <ul className="space-y-5">
              <li>
                <Link href="/about" className="text-white font-inter hover:text-white/80 text-[16px] font-medium transition-colors cursor-none uppercase">
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>


          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="mb-8">
                <h3 className="text-white font-inter text-[16px] font-medium tracking-wider uppercase">CONTACT</h3>
              </div>
              <ul className="space-y-5">
                <li>
                  <Link href="mailto:contact@wavemoney.com" className="text-white font-inter hover:text-white/80 text-[16px] font-medium transition-colors cursor-none uppercase">
                    EMAIL
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="w-full h-[1px] bg-white/20 mb-8 relative">

          <div className="absolute right-0 bottom-4 flex items-center gap-3">
            <Link href="https://www.facebook.com/thewavemoney/" className="w-10 h-10 border border-white rounded-[4px] flex items-center justify-center hover:border-white transition-colors">
              <Facebook />
            </Link>
            <Link href="https://www.youtube.com/@thewavemoney" className="w-10 h-10 border border-white rounded-[4px] flex items-center justify-center hover:border-white transition-colors">
              <Youtube />
            </Link>
            <Link href="https://x.com/thewavemoney" className="w-10 h-10 border border-white rounded-[4px] flex items-center justify-center hover:border-white transition-colors">
              <Twitter />
            </Link>
            <Link href="https://www.instagram.com/thewavemoneyofficial/" className="w-10 h-10 border border-white rounded-[4px] flex items-center justify-center hover:border-white transition-colors">
              <Instagram />
            </Link>
          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
          <div className="flex items-center gap-4">
            <button className="px-4 py-1.5 bg-[#FFFFFF] text-[#484848] text-xs font-normal rounded-[2px] hover:bg-white/90 transition-colors uppercase tracking-wide font-inter">
              <a href="https://play.google.com/store/apps/details?id=com.onewave.money&pli=1">  USE Crypto for Payments</a>
            </button>
          </div>
        </div>



        <div className="flex justify-center w-full">
          <Image
            src="/assets/img/logo-light.png"
            alt="Wave Money"
            width={1276}
            height={240}
            className="w-full max-w-[900px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
