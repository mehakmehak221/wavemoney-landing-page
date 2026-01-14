'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from 'next/navigation';
import { scrollToSection } from "../../utils/scrollUtils";

let gsap;
if (typeof window !== 'undefined') {
  gsap = require('gsap').default;
  const { ScrollToPlugin } = require('gsap/ScrollToPlugin');
  gsap.registerPlugin(ScrollToPlugin);
}

const navLinks = [
  { label: "App", href: "https://play.google.com/store/apps/details?id=com.onewave.money" },
  { label: "Cards", href: "#wave-cards" },
  { label: "FAQ", href: "#faqs" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setSidebarOpen(false);

    if (href.startsWith('http')) {
      window.open(href, '_blank');
      return;
    }

    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <>
      <header className="py-4 xxl:px-20 lg:px-10 md:px-6 px-4 bg-white border-b border-gray-100 fixed top-0 left-0 w-full z-30">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="flex items-center justify-between gap-4">


            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/assets/img/logo.png"
                alt="wave logos"
                width={200}
                height={35}
                priority
              />
            </a>


            <nav className="hidden lg:flex flex-1 justify-center gap-10 text-[13px] tracking-[0.16em] uppercase font-inter text-[#484848]">
              {navLinks.map((item) => {
                const isExternal = item.href.startsWith('http');

                if (isExternal) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold leading-[120%] transition-colors hover:text-black"
                    >
                      {item.label}
                    </a>
                  );
                }

                const sectionId = item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    className="scroll-link font-semibold leading-[120%] transition-colors hover:text-black cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>


            <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-[#555]">
              <a
                href="https://play.google.com/store/apps/details?id=com.onewave.money&pli=1"
                className="text-[13px] tracking-[0.16em] uppercase font-semibold text-[#111] hover:text-black"
              >
                DOWNLOAD NOW
              </a>
            </div>

            <button
              className="lg:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center group relative z-50"
              aria-label="Toggle menu"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span
                className={`block w-7 h-0.5 bg-[#1A1A19] rounded transition-all duration-300 ${sidebarOpen ? "rotate-45 translate-y-2" : "group-hover:w-8"
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#1A1A19] rounded transition-all duration-300 ${sidebarOpen ? "opacity-0" : "group-hover:w-8"
                  }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#1A1A19] rounded transition-all duration-300 ${sidebarOpen ? "-rotate-45 -translate-y-2" : "group-hover:w-8"
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/assets/img/logo.png"
              alt="wave logos"
              width={200}
              height={35}
              priority
            />
          </a>
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="py-6">
          {navLinks.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`scroll-link block px-6 py-4 text-[#1A1A19] font-medium hover:bg-gray-50 hover:text-bg-yellow transition-all duration-200 transform ${sidebarOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
                }`}
              style={{
                transitionDelay: sidebarOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://play.google.com/store/apps/details?id=com.onewave.money&pli=1"
            onClick={() => handleNavClick("#open-account")}
            className={`block px-6 py-4 text-[#1A1A19] font-medium hover:bg-gray-50 hover:text-bg-yellow transition-all duration-200 transform ${sidebarOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-4 opacity-0"
              }`}
            style={{
              transitionDelay: sidebarOpen ? `${navLinks.length * 50}ms` : "0ms",
            }}
          >
            DOWNLOAD NOW
          </a>
        </nav>


      </aside>
    </>
  );
}
