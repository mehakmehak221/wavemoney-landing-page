'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CryptoSection = () => {

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }


  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.0,
        ease: [0.22, 1, 0.36, 1] // Custom bezier for a very smooth "snap"
      },
    },
  }

  const imageEntry = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      },
    },
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <section
      id="crypto"
      className="relative w-full bg-[#FFFFFF] py-32 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 mb-40">
          <motion.div
            className="w-full lg:w-[48%] text-black"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[#96C96A] text-sm md:text-base lg:text-lg font-bold mb-4 text-sf-pro"
            >
              Global Payout
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-[16px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[50px]  leading-[1.1] font-semibold mb-6 font-inter"
            >
              Send Crypto, Receive
              <br />
              Local Currency
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[18px] md:text-[20px] leading-relaxed text-black/80 text-sf-pro max-w-[520px]"
            >
              Experience hassle-free sending. Every transaction protected, every
              recipient just moments away.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full lg:w-[52%] flex justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageEntry}
          >
            <motion.div animate={floatingAnimation}>
              <Image
                src="/assets/img/send-crypto.png"
                alt="Send Crypto"
                width={420}
                height={820}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 mb-40">
          <motion.div
            className="w-full lg:w-[48%] text-black"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[#96C96A] text-sm md:text-base lg:text-lg font-bold mb-4 text-sf-pro"
            >
              Multi-Currency Wallet
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-[16px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[50px]  leading-[1.1] font-semibold mb-6 font-inter"
            >
              Bridging Crypto and
              <br />
              Everyday Life
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[18px] md:text-[20px] leading-relaxed text-black/80 text-sf-pro max-w-[520px]"
            >
              Crypto or Local Currency. Jump straight into action and access
              your funds easily.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full lg:w-[52%] flex justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageEntry}
          >
            <motion.div animate={floatingAnimation}>
              <Image
                src="/assets/img/bridging-crypto.png"
                alt="Multi Currency Wallet"
                width={420}
                height={820}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <motion.div
            className="w-full lg:w-[48%] text-black"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[#96C96A] text-sm md:text-base lg:text-lg font-bold mb-4 text-sf-pro"
            >
              Swap
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-[16px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[50px]  leading-[1.1] font-semibold mb-6 font-inter"
            >
              Swap Assets
              <br />
              Instantly
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[18px] md:text-[20px] leading-relaxed text-black/80 text-sf-pro max-w-[520px]"
            >
              Convert your crypto in real time with transparent rates and zero
              friction.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full lg:w-[52%] flex justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageEntry}
          >
            <motion.div animate={floatingAnimation}>
              <Image
                src="/assets/img/crypto-swap.png"
                alt="Crypto Credit"
                width={420}
                height={820}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CryptoSection

