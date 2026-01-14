import React from "react";
import TiltCard from "../TiltCard";

const teamMembers = [
  {
    img: "/assets/img/blanck-img.svg",
    title: "Founder & CEO",
    name: "Aryan Mehta",
    description:
      "Ex-fintech founder turned Web3 pioneer. Leading Wave’s vision, growth, and partnerships.",
  },
  {
    img: "/assets/img/blanck-img.svg",
    title: "CPO",
    name: "Ishita Roy",
    description:
      "Crypto UX nerd. Builds intuitive, scalable user journeys across Android & iOS.",
  },
  {
    img: "/assets/img/blanck-img.svg",
    title: "CTO",
    name: "Karan Sethi",
    description:
      "Blockchain architect with 10+ years in payments. Heads all things tech & infrastructure.",
  },
  {
    img: "/assets/img/blanck-img.svg",
    title: "Head of Operations",
    name: "Divya Kapoor",
    description:
      "Ensures Wave stays compliant, secure, and smooth — from crypto to fiat.",
  },
  {
    img: "/assets/img/blanck-img.svg",
    title: "Lead Engineer",
    name: "Manav Arora",
    description:
      "Builds Wave’s core crypto engine, swap logic, and arbitrage integrations.",
  },
  {
    img: "/assets/img/blanck-img.svg",
    title: "Marketing & Growth",
    name: "Sonal Jain",
    description:
      "Crafts narratives, drives user growth, and runs creative campaigns for Web3 natives.",
  },
  {
    img: "/assets/img/blanck-img.svg",
    title: "Product Lead",
    name: "Rehan Qureshi",
    description:
      "Brain behind the AI Calling Assistant and customer automation workflows.",
  },
  {
    img: "/assets/img/blanck-img.svg",
    title: "Head of Customer Experience",
    name: "Jia Deshmukh",
    description:
      "Creates delightful, crypto-friendly support experiences for every user.",
  },




];

export default function HumansBehind() {
  return (
    <div>
      <div className="xxl:px-20 lg:px-10 md:px-6 px-4 xl:py-[120px] lg:py-[100px] md:py-[80px] sm:py-[60px] py-[40px] ">
        <div className="max-w-[1440px] w-full mx-auto ">
          <div className="w-full lg:space-y-20 md:space-y-14 sm:space-y-10 space-y-8">
            <div className="space-y-4 max-w-[572px] w-full ">
              <h3 className="2xl:text-[64px] lg:text-[48px] sm:text-[38px] text-[32px] text-[#141410] font-semibold leading-[100%] tracking-[-0.64px] ">
                The Humans     <br />   
                   Behind the Tech
              </h3>
              <p className="text-[#1A1A19] lg:text-base text-sm font-medium md:leading-[150%] leading-[120%] ">
                We’re a remote-first team of builders, engineers, product
                experts, and DeFi believers — working across{" "}
                <span> India, UAE, and Southeast Asia, </span> backed by years
                of fintech and crypto experience.
              </p>
              <p className="text-[#2C2C2B] lg:text-base text-sm font-semibold md:leading-[140%] leading-[120%] ">
                P.S. We’re always looking for rebels, creators, and engineers.
              </p>
            </div>
            <div className="grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  lg:gap-6 sm:gap-4 gap-2">
              {teamMembers.map((member, idx) => (
                   <TiltCard className={"w-full h-full"} intensity={20} scale={1.01} glow={false}>
                <div
                  key={member.name + idx}
                  className="flex flex-col h-full self-stretch overflow-hidden lg:rounded-[32px] md:rounded-[24px] sm:rounded-[18px] rounded-[10px] bg-[#1A1A19]"
                >
                  <div className="lg:h-[272px] h-[200px] self-stretch ">
                    <img src={member.img} className="w-full h-full object-cover " />
                  </div>
                  <div className="lg:p-[32px] md:p-[24px] sm:p-[18px] p-[16px] flex flex-col gap-6 ">
                    <div className="h-[25px] flex items-center justify-center w-fit sm:px-2.5 px-2 rounded-[40px] border border-background text-background text-[13px]  font-semibold  leading-[25px]  uppercase">
                      {member.title}
                    </div>
                    <div className="space-y-2">
                      <h4 className="md:text-2xl sm:text-[20px] text-[18px] font-semibold leading-[100%] tracking-[-0.24px]  text-bg-beage ">
                        {member.name}
                      </h4>
                      <p className="sm:text-sm text-xs font-semibold leading-[130%] text-bg-beage">
                        {member.description}
                      </p>
                    </div>
                  </div>
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
