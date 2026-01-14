'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Community() {
    const containerRef = useRef(null)
    const headingRef = useRef(null)
    const phoneRef = useRef(null)
    const cardTopLeftRef = useRef(null)
    const cardTopRightRef = useRef(null)
    const cardBottomLeftRef = useRef(null)
    const cardBottomRightRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(
                [
                    headingRef.current,
                    phoneRef.current,
                    cardTopLeftRef.current,
                    cardTopRightRef.current,
                    cardBottomLeftRef.current,
                    cardBottomRightRef.current,
                ],
                { opacity: 0 }
            )

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'restart none none reset',
                },
            })

            tl.fromTo(
                headingRef.current,
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                0
            )
                .fromTo(
                    phoneRef.current,
                    { opacity: 0, scale: 0.98 },
                    { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' },
                    0.15
                )
                .fromTo(
                    cardTopLeftRef.current,
                    { opacity: 0, x: -20, y: -10 },
                    { opacity: 1, x: 0, y: 0, duration: 0.55, ease: 'power2.out' },
                    0.25
                )
                .fromTo(
                    cardTopRightRef.current,
                    { opacity: 0, x: 20, y: -10 },
                    { opacity: 1, x: 0, y: 0, duration: 0.55, ease: 'power2.out' },
                    0.3
                )
                .fromTo(
                    cardBottomLeftRef.current,
                    { opacity: 0, x: -20, y: 10 },
                    { opacity: 1, x: 0, y: 0, duration: 0.55, ease: 'power2.out' },
                    0.35
                )
                .fromTo(
                    cardBottomRightRef.current,
                    { opacity: 0, x: 20, y: 10 },
                    { opacity: 1, x: 0, y: 0, duration: 0.55, ease: 'power2.out' },
                    0.4
                )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const testimonials = [
        '"I pay my bills and manage daily expenses directly with crypto now."',
        '"I travel frequently and Wave Money works everywhere I go."',
        '"I didn\'t expect to use crypto for bills, but Wave Money made it easy."',
        '"We tested crypto payments before. This is the first time it felt practical"',
    ]

    return (
        <section
            ref={containerRef}
            id="how-it-works"
            className="relative overflow-hidden bg-[#FFFEFB] pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-0"
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
                {/* Heading */}
                <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
                    <h2
                        ref={headingRef}
                        className="font-normal text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] tracking-tight leading-[1.15] text-[#2B2B2B] font-sf-pro px-4"
                    >
                        Hear from Our Community
                    </h2>
                </div>

                {/* Desktop Layout (lg and above) */}
                <div className="relative max-w-[1200px] mx-auto hidden lg:block pb-20 min-h-[800px]">
                    {/* Center Phone */}
                    <div
                        ref={phoneRef}
                        className="relative z-20 w-[340px] xl:w-[380px] mx-auto"
                    >
                        <Image
                            src="/assets/img/mobilemockup.png"
                            alt="Wave Money App"
                            width={380}
                            height={760}
                            priority
                            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Top Left Card */}
                    <div
                        ref={cardTopLeftRef}
                        className="absolute left-0 xl:left-[4%] top-[18%] xl:top-[20%]
                        w-[320px] xl:w-[360px] bg-[#FFFFFF] border-2 border-[#9FE870]
                        rounded-[18px] xl:rounded-[20px] px-5 xl:px-6 py-5 xl:py-6 
                        text-[#546E3A] text-[17px] xl:text-[20px] leading-[1.5] xl:leading-[1.4] 
                        text-left shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10"
                    >
                        {testimonials[0]}
                    </div>

                    {/* Bottom Left Card */}
                    <div
                        ref={cardBottomLeftRef}
                        className="absolute left-[2%] xl:left-[6%] bottom-[14%] xl:bottom-[16%]
                        w-[340px] xl:w-[380px] bg-[#FFFFFF] border-2 border-[#9FE870]
                        rounded-[18px] xl:rounded-[20px] px-5 xl:px-6 py-5 xl:py-6 
                        text-[#546E3A] text-[17px] xl:text-[20px] leading-[1.5] xl:leading-[1.4] 
                        text-left shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-30"
                    >
                        {testimonials[2]}
                    </div>

                    {/* Top Right Card */}
                    <div
                        ref={cardTopRightRef}
                        className="absolute right-0 xl:right-[4%] top-[16%] xl:top-[18%]
                        w-[320px] xl:w-[360px] bg-[#FFFFFF] border-2 border-[#9FE870]
                        rounded-[18px] xl:rounded-[20px] px-5 xl:px-6 py-5 xl:py-6 
                        text-[#546E3A] text-[17px] xl:text-[20px] leading-[1.5] xl:leading-[1.4] 
                        text-left shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-30"
                    >
                        {testimonials[1]}
                    </div>

                    {/* Bottom Right Card */}
                    <div
                        ref={cardBottomRightRef}
                        className="absolute right-0 xl:right-[4%] bottom-[28%] xl:bottom-[30%]
                        w-[320px] xl:w-[360px] bg-[#FFFFFF] border-2 border-[#9FE870]
                        rounded-[18px] xl:rounded-[20px] px-5 xl:px-6 py-5 xl:py-6 
                        text-[#546E3A] text-[17px] xl:text-[20px] leading-[1.5] xl:leading-[1.4] 
                        text-left shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10"
                    >
                        {testimonials[3]}
                    </div>
                </div>

                {/* Tablet Layout (md to lg) */}
                <div className="hidden md:flex lg:hidden flex-col items-center pb-12 gap-8">
                    {/* Phone */}
                    <div className="w-[300px] mb-4">
                        <Image
                            src="/assets/img/mobilemockup.png"
                            alt="Wave Money App"
                            width={300}
                            height={600}
                            priority
                            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Cards in 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-4 max-w-[700px] w-full px-4">
                        {testimonials.map((text, idx) => (
                            <div
                                key={idx}
                                className="bg-[#FFFFFF] border-2 border-[#9FE870] rounded-[16px] 
                                px-5 py-5 text-[#546E3A] text-[15px] leading-[1.5] 
                                shadow-[0_8px_24px_rgba(0,0,0,0.08)] text-left"
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout (below md) */}
                <div className="md:hidden flex flex-col items-center pb-8 gap-6">
                    {/* Phone */}
                    <div className="w-[260px] sm:w-[300px] mb-4">
                        <Image
                            src="/assets/img/mobilemockup.png"
                            alt="Wave Money App"
                            width={300}
                            height={600}
                            priority
                            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                        />
                    </div>

                    {/* Cards Stacked */}
                    <div className="flex flex-col gap-4 w-full max-w-[400px] px-4">
                        {testimonials.map((text, idx) => (
                            <div
                                key={idx}
                                className="bg-[#FFFFFF] border-2 border-[#9FE870] rounded-[16px] 
                                px-5 py-5 text-[#546E3A] text-[14px] sm:text-[15px] leading-[1.6] 
                                shadow-[0_8px_24px_rgba(0,0,0,0.08)] text-left"
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Wave */}
            <div className="relative w-full z-0 pointer-events-none mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                <img
                    src="/assets/img/faqbg.png"
                    alt="Background Wave"
                    className="w-full h-auto object-cover object-bottom"
                />
            </div>
        </section>
    )
}
