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

    const data = [
        { icon: '/assets/img/card1.png', pos: 'top-[5%] left-[5%]', w: 200, h: 200 },
        { icon: '/assets/img/card2.png', pos: 'top-[-8%] left-1/2 -translate-x-1/2', w: 200, h: 200 },
        { icon: '/assets/img/card3.png', pos: 'top-[5%] right-[5%]', w: 200, h: 200 },
        { icon: '/assets/img/card4.png', pos: 'bottom-[5%] left-[8%]', w: 200, h: 200 },
        { icon: '/assets/img/card5.png', pos: 'bottom-[-8%] left-1/2 -translate-x-1/2', w: 200, h: 200 },
        { icon: '/assets/img/card6.png', pos: 'bottom-[5%] right-[8%]', w: 200, h: 200 },
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
            className="mx-auto bg-gradient-to-b from-[#FFFCF5] via-white to-[#FFFCF6] 
                       relative overflow-hidden py-16 md:py-24"
            id='services'
        >
            <div className='max-w-[1440px] w-full mx-auto relative px-4 md:px-6 lg:px-10 xxl:px-20'>

                <div className='flex justify-center items-center xl:hidden mb-12'>
                    <div ref={headingMobileRef} className='max-w-[800px] text-center px-4 relative z-20'>
                        <h2 className='font-normal text-3xl md:text-5xl leading-[1.2] text-[#5B5141] bg-gradient-to-b from-[#452508] via-[#666666] to-[#564637] bg-clip-text text-transparent'>
                            A Global Digital Wallet And Payment Ecosystem That Connects Crypto, Fiat, And Real-World Utility Into One App.
                        </h2>
                    </div>
                </div>

                <div className='relative w-full h-[1000px] max-w-[1400px] mx-auto hidden xl:block mt-10'>

                    <div className='absolute inset-0 flex items-center justify-center z-0'>
                        <h2 ref={headingRef} className='font-normal text-6xl leading-[1.2] text-center py-20 bg-gradient-to-b from-[#452508] via-[#666666] to-[#564637] bg-clip-text text-transparent'>
                            A Global Digital Wallet And Payment <br />
                            Ecosystem That Connects Crypto, Fiat, <br />
                            And Real-World Utility Into One App.
                        </h2>
                    </div>

                    {data.map((item, index) => (
                        <Card key={index} {...item} index={index} />
                    ))}
                </div>

                <div className='hidden md:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="relative"
                        >
                            <Image
                                src={item.icon}
                                width={item.w}
                                height={item.h}
                                alt={`Card ${index + 1}`}
                                className="max-w-[240px] drop-shadow-lg"
                            />
                        </div>
                    ))}
                </div>

                <div className='grid grid-cols-2 gap-4 sm:gap-6 md:hidden'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index + 6] = el)}
                            className="flex justify-center"
                        >
                            <Image
                                src={item.icon}
                                width={160}
                                height={160}
                                alt={`Card ${index + 1}`}
                                className="max-w-[160px] drop-shadow-md"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
