import Link from "next/link";
import React from "react";

export default function DownloadWave() {
  return (
    <div className=" bg-bg-black xxl:px-20 lg:px-10 md:px-6 px-4 md:pt-20 sm:pt-16 pt-10" id="app">
      <div className=" max-w-[1440px] w-full mx-auto  grid lg:grid-cols-2 gap-6 overflow-hidden ">
        <div className="flex flex-col xl:gap-[33px] md:gap-[24px] sm:gap-[18px] gap-[16px] justify-center lg:items-start items-center lg:text-left text-center">
          <h3 className="lg:text-[32px] md:text-[28px] text-[24px] text-background font-semibold leading-[110%] tracking-[-0.32px]">
            Download Wave Money Now
          </h3>
          <h2 className=" 2xl:text-[64px] text-[32px]  sm:text-[38px] lg:text-[48px]   text-background font-semibold leading-[100%] tracking-[-0.64px] ">
            Start Using Crypto for
            <br className="xl:flex hidden" /> Everything
          </h2>

          <p className="sm:text-base text-sm leading-[130%] text-background font-semibold ">
            Pay bills. Book travel. Earn with bots.     <br />
            Talk to AI. All in one app, powered by crypto.
          </p>

          <div className="flex items-center gap-2">
            <Link href={"#"} className="">
              <img className="sm:h-[50px] h-[40px]" src="/assets/img/app-store.png" />
            </Link>
            <a href={"https://play.google.com/store/apps/details?id=com.onewave.money"} target="_blank" className="">
              <img className="sm:h-[50px] h-[40px]" src="/assets/img/google-play.png" />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/assets/img/phone-cam.png" className="lg:w-auto w-[500px]" />
        </div>
      </div>
    </div>
  );
}
