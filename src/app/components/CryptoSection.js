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
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)', skewY: 2 },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      skewY: 0,
      transition: {
        duration: 1.0,
        ease: [0.22, 1, 0.36, 1]
      },
    },
  }

  const imageEntry = {
    hidden: { opacity: 0, x: 80, scale: 0.8, rotate: 5 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      },
    },
  }

  const floatingAnimation = {
    y: [0, -30, 0],
    rotate: [0, 3, -3, 0],
    scale: [1, 1.03, 1],
    filter: [
      'drop-shadow(0px 15px 30px rgba(0,0,0,0.15))',
      'drop-shadow(0px 40px 60px rgba(0,0,0,0.3))',
      'drop-shadow(0px 15px 30px rgba(0,0,0,0.15))'
    ],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <section
      id="crypto"
      className="relative w-full bg-[#FFFEFB] overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-[120px]">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
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
              WaveMoney App
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-[28px] xs:text-[28px] sm:text-[28px] md:text-[32px] lg:text-[48px] leading-[1.2] font-semibold mb-6 font-inter"
            >
              Global Payouts
              <br />
              Instant. Secure. Seamless
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[18px] md:text-[20px] leading-relaxed text-black/80 text-sf-pro max-w-[520px]"
            >
              Send, receive, and manage value globally powered by crypto,
              delivered as real money.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full lg:w-[52%] flex justify-center lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageEntry}
          >
            <motion.div
              animate={floatingAnimation}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center lg:justify-end"
            >
              <Image
                src="/assets/img/globalpayout.png"
                alt="Global Payouts"
                width={800}
                height={600}
                className="object-contain w-full h-auto max-w-[320px] sm:max-w-[480px] lg:max-w-full"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CryptoSection
