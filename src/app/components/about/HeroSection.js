import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-white pt-20 sm:pt-24 lg:pt-26 relative z-10">
      <div className="xxl:px-20 lg:px-10 md:px-6 px-4  md:pt-20 sm:pt-16 pt-10">
        <div className="max-w-[1440px] w-full mx-auto  ">
          <h1 className="2xl:text-[64px] lg:text-[48px] sm:text-[38px] text-[32px] text-[#141410] font-semibold leading-[100%] tracking-[-0.64px] lg:mb-8 mb-4">
            Not just another app. <br />A revolution in your pocket.
          </h1>
          <div className="lg:space-y-4 space-y-2 md:max-w-[650px] max-w-[400px] w-full">
            <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] ">
              At Wave Money, we’re on a mission to{" "}
              <span className="font-semibold ">
                {" "}
                make crypto actually useful.{" "}
              </span>
            </p>
            <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] ">
              Whether you want to{" "}
              <span className="font-semibold">
                {" "}
                pay your electricity bill, book a last-minute flight, automate
                trading, or even receive a voice call from an AI,{" "}
              </span>{" "}
              you can do it all — instantly, securely, and without converting to
              fiat.
            </p>
            <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] ">
              Welcome to the{" "}
              <span className="font-semibold ">
                {" "}
                future of everyday payments.
              </span>
            </p>
          </div>
        </div>
      </div>

      <img
        src="/assets/img/ab-hero-bg.png"
        alt="hero"
        className=" md:block hidden w-full  lg:-mt-20 mt-10"
      />
      <img
        src="/assets/img/about_us_m-banner.webp"
        alt="hero"
        className="md:hidden block   w-full  lg:-mt-20 mt-10"
      />
    </div>
  );
}
