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

    return (
        <section
            ref={containerRef}
            id="how-it-works"
            className="relative overflow-hidden bg-[#FFFEFB] pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-0"
        >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 xl:px-24">
                
                <div className="text-center mb-16 lg:mb-20">
                    <h2
                        ref={headingRef}
                        className="font-normal text-[32px] md:text-[48px] xl:text-[56px] tracking-tight leading-[1.1] text-[#2B2B2B] font-sf-pro"
                    >
                        Hear from Our Community
                    </h2>
                </div>

              
                <div className="relative max-w-[1200px] mx-auto hidden lg:block pb-20">
                   
                    <div
                        ref={phoneRef}
                        className="relative z-20 w-[380px] mx-auto"
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

                    
                    <div
                        ref={cardTopLeftRef}
                        className="hidden lg:block absolute left-[6%] top-[23%]
                        w-[360px] bg-[#FFFFFF] border-2 border-[#9FE870]
                        rounded-[20px] px-6 py-6 text-[#546E3A] text-[20px] leading-[1.4] text-left shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10"
                    >
                        “I pay my bills and manage daily expenses directly with crypto now.”
                    </div>

                    <div
                        ref={cardBottomLeftRef}
                        className="hidden lg:block absolute left-[9%] bottom-[16%]
                        w-[380px] bg-[#FFFFFF] border-2 border-[#9FE870]
                        rounded-[20px] px-6 py-6 text-[#546E3A] text-[20px] leading-[1.4] text-left shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-30"
                    >
                        “I didn’t expect to use crypto for bills, but Wave Money made it easy.”
                    </div>

                    
                    <div
                        ref={cardTopRightRef}
                        className="hidden lg:block absolute right-[6%] top-[21%]
                        w-[360px] bg-[#FFFFFF] border-2 border-[#9FE870]
                        rounded-[20px] px-6 py-6 text-[#546E3A] text-[20px] leading-[1.4] text-left
                        shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-30"
                    >
                        “I travel frequently and Wave Money works everywhere I go.”
                    </div>

                    <div
                        ref={cardBottomRightRef}
                        className="hidden lg:block absolute right-[6%] bottom-[30%]
                        w-[360px] bg-[#FFFFFF] border-2 border-[#9FE870]
                        rounded-[20px] px-6 py-6 text-[#546E3A] text-[20px] leading-[1.4] text-left
                        shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10"
                    >
                        We tested crypto payments before. This is the first time it felt practical
                    </div>
                </div>

               
                <div className="lg:hidden flex flex-col items-center pb-8">
                    <div className="w-[280px] sm:w-[320px] mb-12">
                        <Image
                            src="/assets/img/mobilemockup.png"
                            alt="Wave Money App"
                            width={320}
                            height={640}
                            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[700px]">
                        {[
                            '“I pay my bills and manage daily expenses directly with crypto now.”',
                            '“I travel frequently and Wave Money works everywhere I go.”',
                            '“I didn’t expect to use crypto for bills, but Wave Money made it easy.”',
                            'We tested crypto payments before. This is the first time it felt practical',
                        ].map((text, idx) => (
                            <div
                                key={idx}
                                className="bg-[#FFFEFB] border-2 border-[#9FE870] rounded-[18px] px-6 py-6
                                text-[#4A4A4A] text-[15px] leading-[1.6] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative w-full z-0 pointer-events-none mt-0 md:mt-[119px]">
                <img
                    src="/assets/img/faqbg.png"
                    alt="Background Wave"
                    className="w-full h-auto object-cover object-bottom"
                />
            </div>
        </section>
        
    )
}
