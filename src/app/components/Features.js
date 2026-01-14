'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Features() {
    const containerRef = useRef(null)
    const headingRef = useRef(null)
    const cardsRef = useRef([])
    const backgroundRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            gsap.to(backgroundRef.current, {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            })

            gsap.fromTo(headingRef.current,
                { opacity: 0, y: 20, scale: 0.8, rotationX: -20 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            )


            gsap.to(headingRef.current, {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1
            })

            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 120, rotationY: -15, scale: 0.8 },
                    {
                        opacity: 1,
                        y: 0,
                        rotationY: 0,
                        scale: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        },
                        delay: index * 0.15
                    }
                )
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    const data = [
        {
            title: 'International Wallet',
            content: 'We onboard users from 120+ countries whether you hold a passport or a residence permit we\'ve got you covered.'
        },
        {
            title: 'Instant Conversions',
            content: 'Swap crypto and fiat in seconds with smart routing for the best rates. No hidden markups. No delays. Just seamless trading.'
        },
        {
            title: 'Wave Physical & Digital Cards',
            content: 'Spend your crypto like cash. Use Wave virtual cards online or tap-to-pay worldwide with the physical card powered by instant conversion.'
        },
        {
            title: 'Trusted Security',
            content: 'Military-grade protection for your assets. Insurance-backed infrastructure, advanced fraud defense, and continuous monitoring keep your funds safe.',
        },
    ]

    const Card = ({ title, content, link, className, index }) => {
        const cardRef = useRef(null)

        const handleMouseMove = (e) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angleX = (y - centerY) / 15;
            const angleY = (centerX - x) / 15;

            gsap.to(cardRef.current, {
                rotationX: angleX,
                rotationY: angleY,
                transformPerspective: 1200,
                z: 20,
                boxShadow: `${-angleY * 3}px ${angleX * 3}px 30px rgba(30, 74, 199, 0.2)`,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            if (!cardRef.current) return;
            gsap.to(cardRef.current, {
                rotationX: 0,
                rotationY: 0,
                z: 0,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        const handleMouseEnter = () => {
            if (!cardRef.current) return;
            gsap.to(cardRef.current, {
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(30, 74, 199, 0.15)',
                duration: 0.3,
                ease: "power2.out"
            });
        };

        return (
            <div
                ref={(el) => {
                    if (el) cardsRef.current[index] = el
                }}
                className={`perspective-[1000px] h-[420px] ${className}`}
            >
                <div
                    ref={cardRef}
                    className="bg-white p-8 lg:p-10 shadow-sm transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between h-full"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    style={{
                        transformStyle: 'preserve-3d',
                        willChange: 'transform',
                    }}
                >
                    <div style={{ transform: 'translateZ(30px)' }}>
                        <h3 className='text-[#1E4AC7] text-[24px] sm:text-[32px] lg:text-[42px] leading-[1.1] font-normal font-inter tracking-tight mb-4 transition-colors hover:text-[#264EB0] overflow-hidden'>
                            {title}
                        </h3>
                    </div>
                    <div style={{ transform: 'translateZ(20px)' }}>
                        <p className='text-base leading-relaxed  font-medium text-[#2851B2] font-inter'>
                            {content}
                        </p>
                        {link && (
                            <a
                                href="#"
                                className="text-[#1E4AC7]/60 text-[15px] underline mt-4 inline-block hover:text-[#1E4AC7] transition-colors font-inter"
                            >
                                {link}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            ref={containerRef}
            className="relative flex justify-center overflow-hidden bg-white pb-16"
            id='features'
            style={{
                paddingLeft: 'max(1rem, calc((100vw - 1510px) / 2))',
                paddingRight: 'max(1rem, calc((100vw - 1510px) / 2))'
            }}
        >
            <div
                ref={backgroundRef}
                className='absolute inset-0 z-0'
            >
                <Image
                    src='/assets/img/featuresbackground.png'
                    alt='Features Background'
                    fill
                    priority
                />
            </div>

            <div className='relative z-10 w-full mx-auto mt-[90px] px-[27px]'>
                <div className='flex justify-center mb-16'>
                    <h2
                        ref={headingRef}
                        className='font-normal text-[28px] xs:text-[32px] sm:text-[40px] md:text-[64px] lg:text-[64px] xl:text-[64px] leading-[1.1] font-semibold mb-6 font-inter text-white text-center tracking-tight'
                        style={{
                            textShadow: '0 0 20px rgba(255,255,255,0.3)',
                        }}
                    >
                        Why Wave Money?
                    </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-end mt-10 pb-[8px]'>
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            index={index}
                            title={item.title}
                            content={item.content}
                            link={item.link}
                            className={`${index === 1 || index === 2 ? 'xl:mb-24' : ''} h-[420px]`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}