'use client'

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SafeTrusted() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const badge1Ref = useRef(null);
  const ampersandRef = useRef(null);
  const badge2Ref = useRef(null);
  const image1Ref = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

      // Badge animations
      if (badge1Ref.current) {
        gsap.fromTo(
          badge1Ref.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: badge1Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

      if (ampersandRef.current) {
        gsap.fromTo(
          ampersandRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: ampersandRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

      if (badge2Ref.current) {
        gsap.fromTo(
          badge2Ref.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: badge2Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }


      if (image1Ref.current) {
        gsap.fromTo(
          image1Ref.current,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image1Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

      if (card1Ref.current) {
        gsap.fromTo(
          card1Ref.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card1Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }


      if (card2Ref.current) {
        gsap.fromTo(
          card2Ref.current,
          { opacity: 0, y: -30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card2Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

      if (image2Ref.current) {
        gsap.fromTo(
          image2Ref.current,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image2Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#FFFEFB] overflow-hidden" id="payment">
      <div className="max-w-[1440px] w-full mx-auto relative z-10 py-12 md:py-12 px-6 md:px-6 lg:px-[180px]">
        <div className="text-center mb-10 md:mb-16">
          <h1 ref={headingRef} className="font-normal text-4xl md:text-[48px] lg:text-[60px] leading-[1.1] text-[#1F2937] mb-6 md:mb-8 font-sf-pro">
            Built For
          </h1>

          <div className="flex justify-center items-center gap-1 flex-wrap">
            <div
              ref={badge1Ref}
              className="bg-[#405FD2] text-white px-5 md:px-8 py-2 md:py-3 rounded-md text-sm md:text-lg font-medium flex items-center gap-2 font-sf-pro"
            >
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full text-[#FFFFFF]"></span>
              Individuals
            </div>
            <span
              ref={ampersandRef}
              className="bg-[#405FD2] text-white px-6 rounded-full py-2 md:py-3 font-medium text-sm md:text-base"
            >
              &
            </span>
            <div
              ref={badge2Ref}
              className="bg-[#405FD2] text-white px-5 md:px-8 py-2 md:py-3 rounded-md text-sm md:text-lg font-medium flex items-center gap-2"
            >
              <span className="font-inter w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full text-[#FFFFFF]"></span>
              Businesses
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          <div className="flex flex-col gap-6 items-center w-full">
            <div
              ref={image1Ref}
              className="relative overflow-hidden group w-full"
            >
              <Image
                src="/assets/img/Globalfundtransfer.png"
                alt="Global Fund Transfer"
                width={500}
                height={494}
                className="w-full h-auto"
              />
            </div>

            <div
              ref={card1Ref}
              className="bg-[#405FD2] rounded-[16px] md:rounded-[32px] p-6 md:p-10 min-h-auto md:min-h-[152px] h-auto w-full flex flex-col justify-center transition-transform"
            >
              <h3 className="text-white text-2xl md:text-[28px] lg:text-[32px] font-normal mb-3 md:mb-4">
                Staking Integration
              </h3>
              <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-full md:max-w-[400px] leading-relaxed font-normal">
                Staking models will be fully integrated into the Wave Money dashboard.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center w-full">
            <div
              ref={card2Ref}
              className="bg-[#405FD2] rounded-[16px] md:rounded-[32px] p-6 md:p-10 min-h-auto md:min-h-[152px] h-auto w-full flex flex-col justify-center transition-transform order-2 md:order-1"
            >
              <h3 className="text-white text-2xl md:text-[28px] lg:text-[32px] font-normal mb-3 md:mb-4">
                Quick Account Setup
              </h3>
              <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-full md:max-w-[400px] leading-relaxed font-normal font-inter">
                Accounts are opened within minutes. Onboarding takes less than an hour.
              </p>
            </div>

            <div
              ref={image2Ref}
              className="bg-[#D4F5B3] rounded-[16px] md:rounded-[32px] w-full relative overflow-hidden group order-1 md:order-2"
            >
              <div className="">
                <Image
                  src="/assets/img/Virtualcards.png"
                  alt="Virtual Cards"
                  width={500}
                  height={494}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}