'use client'

import Image from 'next/image'
import heroImg from '../../../public/assets/img/hero.png'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const heroRef = useRef(null)
    const imageRef = useRef(null)
    const headingRef = useRef(null)
    const paragraphRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                { scale: 1.2 },
                {
                    scale: 1,
                    duration: 2.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'restart restart restart reset',
                    },
                }
            )

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'restart restart restart reset',
                },
            })

            tl.fromTo(
                headingRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
            )
                .fromTo(
                    paragraphRef.current,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
                    '-=0.8'
                )
                .fromTo(
                    buttonRef.current,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
                    '-=0.8'
                )
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={heroRef}
            className="relative w-full min-h-screen flex items-center overflow-hidden"
            id="personal"
        >

            <div ref={imageRef} className="absolute inset-0 w-full h-full">
                <Image
                    src={heroImg}
                    alt="Hero Background"
                    fill
                    priority
                    quality={90}
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            <div className="absolute inset-0 z-[1] bg-black/40 lg:bg-black/20"></div>

            <div className="relative z-10 max-w-[1440px] w-full mx-auto h-full">
                <div
                    className="
                        w-full
                        lg:w-[85%]
                        px-5 sm:px-10 md:px-20 lg:px-[86px]
                        flex
                        items-center
                        min-h-[500px] md:min-h-[600px] lg:min-h-screen
                        pt-[80px] pb-[80px]
                    "
                >
                    <div
                        className="
                            w-full
                            max-w-full
                            flex
                            flex-col
                            gap-6
                            sm:gap-8
                            md:gap-10
                            text-white
                        "
                    >
                        <div ref={headingRef}>
                            <h1 className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[43px] lg:text-[50px] font-medium leading-[1.2] md:leading-[1.3] font-sf-pro tracking-[-0.02em]">
                                Use Crypto In Everyday Life.
                                <br />
                                Pay Bills and Spend Anywhere
                            </h1>
                        </div>

                        <div ref={paragraphRef}>
                            <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-sf-pro font-normal leading-[1.5] max-w-[640px] text-white/90">
                                Wave Money Connects Your Crypto To Real World Payments, Instantly And Securely
                            </p>
                        </div>

                        <div ref={buttonRef}>
                            <Link
                                href="https://play.google.com/store/apps/details?id=com.onewave.money"
                                className="inline-flex rounded-[12px] sm:rounded-[12px] bg-white text-[#484848] uppercase font-normal h-[48px] sm:h-[56px] lg:h-[64px] text-[14px] sm:text-[16px] lg:text-[24px] items-center justify-center px-8 sm:px-10 hover:bg-[#BBFF2A] hover:text-black hover:scale-105 transition-all duration-300 ease-in-out shadow-lg font-inter"
                            >
                                JOIN NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
