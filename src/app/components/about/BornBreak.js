import React from "react";
import TiltCard from "../TiltCard";

const cardData = [
  {
    icon: "/assets/img/pay-u-bill.svg",
    highlight: "Pay Utility Bills ",
    desc: "using BTC, ETH, or USDT",
    comingSoon: false
    ,
  },
  {
    icon: "/assets/img/mobile-r-sv.svg",
    highlight: "Recharge",
    desc: "your mobile or DTH with crypto",
    comingSoon: false,
  },
  {
    icon: "/assets/img/auto-bot.svg",
    highlight: "Automate Passive Earnings",
    desc: "with our Arbitrage BOT",
    comingSoon: false,
  },
  {
    icon: "/assets/img/book-flight.svg",
    highlight: "Book Flights, Buses & Hotels",
    desc: "directly in-app",
    comingSoon: false,
  },
  {
    icon: "/assets/img/ai-video-call.svg",
    highlight: "Let AI Make Voice Calls",
    desc: "for reminders, confirmations, and more..",
    comingSoon: false,
  },
  {
    icon: "/assets/img/crypto-to-f.svg",
    highlight: "Crypto to Fiat Conversion",
    desc: "(INR & more)",
    comingSoon: false,
  },
  {
    icon: "/assets/img/swap-icon.svg",
    highlight: "Swap & Send Tokens",
    desc: "anytime, across chains",
    comingSoon: false,
  },
  {
    icon: "/assets/img/accept-py.svg",
    highlight: "Accept Crypto Payments",
    desc: " as a merchant",
    comingSoon: false,
  },
  {
    icon: "/assets/img/sned-cash.svg",
    highlight: "Get a Wave Crypto Card to ",
    desc: " spend like cash",
    comingSoon: true,
  },
];

export default function BornBreak() {
  return (
    <div className="bg-[#1A1A19]">
      <div className="xxl:px-20 lg:px-10 md:px-6 px-4 xl:py-[120px] lg:py-[100px] md:py-[80px] sm:py-[60px] py-[40px] ">
        <div className="max-w-[1440px] w-full mx-auto ">
          <div className="w-full flex flex-col xxl:gap-[120px] xl:gap-[90px] lg:gap-[70px] md:gap-[50px] sm:gap-[30px] gap-[28px]">
            <h3 className="text-[32px] text-bg-beage font-semibold leading-[110%] tracking-[-0.32px]">
              Born to Break     <br /> 
                the Rules of Finance
            </h3>
            <img src="/assets/img/text-con-sv.svg" className="mr-10" />
            <div className="space-y-2">
              <p className="text-bg-beage/50 sm:text-base text-sm font-medium leading-[120%]   ">
                So you can spend, swap, earn, automate, and call — all with your
                crypto.
              </p>
              <p className="text-bg-beage/50 sm:text-base text-sm font-medium leading-[120%]   ">
                Wave Money is India’s first all-in-one crypto utility app, built
                to help you use your crypto where it matters — in real life.
              </p>
            </div>
            <div className="h-[1px] w-full bg-[#F2F2E8]/20 self-stretch" />
            <div className="sm:space-y-4 space-y-2">
              <p className="text-bg-beage/50 sm:text-base text-sm font-medium leading-[120%]   ">
                You’ll be surprised how much one app can do.
              </p>
              <h3 className="2xl:text-[64px] lg:text-[48px] sm:text-[38px] text-[32px] text-bg-beage font-semibold leading-[100%] tracking-[-0.64px] ">
                Things you can do     <br />  
                  with Wave?
              </h3>
            </div>
            <div className="grid sm:grid-cols-3   lg:gap-6 sm:gap-4 gap-2">
              {cardData.map((card, idx) => (
                  <TiltCard className={"w-full"} intensity={20} scale={1.01} glow={false}>
                <div
                  key={idx}
                  className="lg:p-[32px] md:p-[24px] sm:p-[18px] p-[16px] relative flex flex-col lg:gap-8 md:gap-6 gap-4 sm:h-[260px]  lg:rounded-[32px] md:rounded-[24px] sm:rounded-[18px] rounded-[10px] border border-[#2C2C2B] "
                >
                  <div className="flex justify-between items-center ">
                    <img
                      src={card.icon}
                      className="md:h-[46px] h-[40px] md:w-[46px] w-[40px]"
                    />
                    {card.comingSoon && (
                      <div className="py-2  sm:px-2.5 px-2 rounded-[40px] bg-bg-yellow text-bg-black lg:text-[15px] sm:text-[13px] text-[10px] font-medium leading-[90%] tracking-[0.6px] uppercase">
                        Coming Soon
                      </div>
                    )}
                  </div>
                  <p className="lg:text-[26px] md:text-[20px] sm:text-[18px] text-[16px] font-medium leading-[130%] text-bg-beage">
                    <span className="text-[#686864] font-bold">{card.highlight}   </span>
                     {card.desc}
                  </p>
                </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
