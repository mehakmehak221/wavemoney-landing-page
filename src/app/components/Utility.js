'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Utility() {
    const containerRef = useRef(null)
    const headingRef = useRef(null)
    const headingMobileRef = useRef(null)
    const cardsRef = useRef([])
    const bannerRef = useRef(null)

    const data = [
        { icon: '/assets/img/card1.png', pos: 'top-[-10%] left-[5%]', w: 200, h: 200 },
        { icon: '/assets/img/card2.png', pos: 'top-[-40%] left-1/2 -translate-x-1/2', w: 200, h: 200 },
        { icon: '/assets/img/card3.png', pos: 'top-[-10%] right-[5%]', w: 200, h: 200 },
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (headingRef.current) {
                gsap.fromTo(
                    headingRef.current,
                    {
                        opacity: 0,
                        y: 40,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            toggleActions: 'restart restart restart reset',
                        },
                    }
                )
            }

            if (headingMobileRef.current) {
                gsap.fromTo(
                    headingMobileRef.current,
                    {
                        opacity: 0,
                        y: 40,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: headingMobileRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            toggleActions: 'restart restart restart reset',
                        },
                    }
                )
            }

            cardsRef.current.forEach((card, index) => {
                if (card) {

                    gsap.fromTo(
                        card,
                        {
                            opacity: 0,
                            scale: 0.85,
                            y: 20,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.8,
                            delay: index * 0.15,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: 'top 80%',
                                end: 'bottom 20%',
                                toggleActions: 'restart restart restart reset',
                            },
                        }
                    )


                    gsap.to(card, {
                        y: -8,
                        duration: 2 + (index * 0.2),
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        delay: index * 0.15,
                    })
                }
            })

            if (bannerRef.current) {
                gsap.fromTo(
                    bannerRef.current,
                    {
                        opacity: 0,
                        y: 60,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: bannerRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                )
            }
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const Card = ({ icon, pos, w, h, index }) => {
        return (
            <div
                ref={(el) => (cardsRef.current[index] = el)}
                className={`absolute z-10 ${pos}`}
            >
                <div className="relative" style={{ width: w, height: h }}>
                    <Image
                        src={icon}
                        fill
                        alt="Crypto Utility Card"
                        className="object-contain drop-shadow-lg"
                    />
                </div>
            </div>
        )
    }

    return (
        <div
            ref={containerRef}
            className="mx-auto bg-[#FFFEFB]
                       relative overflow-hidden py-16 md:py-36 lg:py-48 xl:py-56"
            id='services'
        >
            <div className='max-w-[1440px] w-full mx-auto relative px-4 md:px-6 lg:px-10 xxl:px-20'>


                <div className='md:hidden flex flex-col items-center mb-16 pt-8'>


                    <div className='relative w-full max-w-[400px] h-[260px] mb-8'>

                        <div
                            ref={(el) => (cardsRef.current[4] = el)}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] z-30 shadow-[0_20px_40px_rgba(0,0,0,0.12)] rounded-[20px] overflow-hidden"
                        >
                            <Image
                                src={data[1].icon}
                                width={120}
                                height={120}
                                alt="Feature 2"
                                className="w-full h-auto object-contain"
                            />
                        </div>


                        <div
                            ref={(el) => (cardsRef.current[3] = el)}
                            className="absolute bottom-0 left-0 w-[110px] z-20 shadow-[0_15px_30px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden"
                        >
                            <Image
                                src={data[0].icon}
                                width={110}
                                height={110}
                                alt="Feature 1"
                                className="w-full h-auto object-contain"
                            />
                        </div>


                        <div
                            ref={(el) => (cardsRef.current[5] = el)}
                            className="absolute bottom-0 right-0 w-[110px] z-20 shadow-[0_15px_30px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden"
                        >
                            <Image
                                src={data[2].icon}
                                width={110}
                                height={110}
                                alt="Feature 3"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>


                    <div ref={headingMobileRef} className='max-w-[90%] text-center relative z-20'>
                        <h2 className='font-normal text-[28px] xs:text-[32px] leading-[1.2] text-[#5B5141] bg-gradient-to-b from-[#452508] via-[#666666] to-[#564637] bg-clip-text text-transparent'>
                            A global digital wallet and payment ecosystem that connects crypto and real-world utility into one app.
                        </h2>
                    </div>
                </div>


                <div className='relative w-full h-[450px] sm:h-[480px] md:h-[500px] xl:h-[550px] max-w-[1400px] mx-auto mt-2 hidden md:block'>


                    <div className='absolute inset-0 flex items-center justify-center z-0'>
                        <h2 ref={headingRef} className='font-normal text-[32px] lg:text-[44px] xl:text-6xl leading-[1.2] text-center py-10 bg-gradient-to-b from-[#452508] via-[#666666] to-[#564637] bg-clip-text text-transparent mt-32 md:mt-36 xl:mt-40'>
                            A Global Digital Wallet And Payment <br />
                            Ecosystem That Connects Crypto <br />
                            And Real-World Utility Into One App.
                        </h2>
                    </div>

                    <div className="absolute top-[5%] md:top-0 lg:top-[-5%] xl:top-[-10%] left-[5%] w-[160px] lg:w-[180px] xl:w-[200px]">
                        <Card index={0} icon={data[0].icon} pos="relative" w="100%" h="200px" />
                    </div>

                    <div className="absolute top-[-25%] md:top-[-30%] lg:top-[-35%] xl:top-[-40%] left-1/2 -translate-x-1/2 w-[160px] lg:w-[180px] xl:w-[200px]">
                        <Card index={1} icon={data[1].icon} pos="relative" w="100%" h="200px" />
                    </div>

                    <div className="absolute top-[5%] md:top-0 lg:top-[-5%] xl:top-[-10%] right-[5%] w-[160px] lg:w-[180px] xl:w-[200px]">
                        <Card index={2} icon={data[2].icon} pos="relative" w="100%" h="200px" />
                    </div>
                </div>

                <div
                    ref={bannerRef}
                    className='flex justify-center items-center mt-8 md:mt-12 pb-10'
                >
                    <div className='w-full max-w-[1200px] overflow-hidden rounded-[24px] md:rounded-[48px] shadow-2xl border border-[#E8E1D5]/30'>
                        <Image
                            src="/assets/img/digitalwallet.png"
                            width={1200}
                            height={600}
                            alt="Digital Wallet Ecosystem"
                            className="w-full h-auto object-cover scale-[1.01]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
