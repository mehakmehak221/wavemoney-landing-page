'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function ExchangeSection() {
  return (
    <motion.div
      className="py-20 px-4 md:px-6 lg:px-10 bg-gradient-to-b from-[#FFFCF7] to-[#EFFEE3] flex flex-col justify-center items-center font-sans overflow-hidden"
      id="integration"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
    >
      <motion.div
        className="relative w-full max-w-[800px] mb-12"
      >
        {[2, 1, 0].map((i) => (
          <motion.div
            key={i}
            initial={{ x: 0, opacity: 0 }}
            whileInView={{
              x: (i + 1) * 16,
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
            className={`absolute top-0 left-0 right-0 bottom-0 rounded-[2rem] border border-[#264EB0] bg-white z-${i} hidden sm:block`}
            style={{
              transform: `translateX(${i * 16}px)`,
              opacity: 1 - (i * 0.3)
            }}
          />
        ))}

        <motion.div
          variants={scaleUp}
          className="relative z-10 border border-[#264EB0] rounded-[2rem] bg-white overflow-hidden shadow-sm p-8 md:p-12"
        >
          <motion.div
            className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
            variants={fadeInUp}
          >
            <motion.svg
              className="absolute top-20 left-0 w-[55%] h-auto"
              viewBox="0 0 436 136"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <path
                d="M308.907 24.0519C348.986 22.5194 388.576 25.8185 435.956 29.9478C389.3 12.7283 314.632 0 258.355 0C165.894 0 74.3692 22.4342 0.446981 56.9369L0 135.648C70.6869 63.5565 193.99 22.8812 308.907 24.0519Z"
                fill="#264EB0"
              />
            </motion.svg>

            <motion.svg
              className="absolute bottom-30 right-0 w-[50%] h-auto"
              viewBox="0 0 369 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <path
                d="M193.563 111.405C258.439 100.805 294.772 95.8668 368.503 60.4275L368.566 -0.000106812C299.859 68.6435 171.703 109.532 47.804 108.51C31.8404 108.297 6.34116 108.872 -0.00172424 107.999C65.9812 118.429 131.539 119.833 193.563 111.383"
                fill="#264EB0"
              />
            </motion.svg>
          </motion.div>

          <motion.div
            className="relative z-10 flex flex-col min-h-[300px] md:min-h-[350px]"
            variants={container}
          >
            <motion.div
              className="flex justify-between items-start mb-8 md:mb-12"
              variants={fadeInUp}
            >
              <motion.div
                className="flex items-center gap-2 border border-[#264EB0] rounded-full px-4 py-1.5 bg-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#264EB0]"></span>
                <span className="text-[#264EB0] text-sm md:text-base font-medium">
                  services
                </span>
              </motion.div>

              <motion.div
                className="w-[50px] md:w-[70px]"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="/assets/img/greenlogo.png"
                  alt="Wave Money Logo"
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 flex items-center mt-20"
              variants={fadeInUp}
            >
              <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-tight text-[#264EB0]">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block font-normal"
                >
                  Instant crypto
                </motion.span>{" "}
                <motion.span
                  className="inline-block align-middle text-[2rem] md:text-[3rem] lg:text-[3.5rem]"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.3
                  }}
                >
                  ⇌
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-block"
                >
                  fiat
                </motion.span>
                <motion.br
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="inline-block"
                >
                  exchange
                </motion.span>
              </h2>
            </motion.div>

            <motion.div
              className="mt-auto pt-6"
              variants={fadeInUp}
            >
              <motion.p
                className="text-[#172E95] text-sm md:text-base lg:text-lg max-w-[600px] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                One-tap swaps at real-time rates. Low fee, high convenience and
                designed for seamless spending
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>


    </motion.div>
  );
}