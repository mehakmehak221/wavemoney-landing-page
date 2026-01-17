'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Space() {
    const containerRef = useRef(null)
    const textContentRef = useRef(null)
    const shieldContainerRef = useRef(null)
    const headingRef = useRef(null)
    const paragraphRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.set([headingRef.current, paragraphRef.current], {
                opacity: 0,
                y: 30
            })
            gsap.set(shieldContainerRef.current, {
                opacity: 0,
                scale: 0.8,
                rotate: -5
            })


            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            })

            tl.to(headingRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .to(paragraphRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                }, '-=0.6')
                .to(shieldContainerRef.current, {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1.2,
                    ease: 'elastic.out(1, 0.75)'
                }, '-=0.8')


            gsap.to(shieldContainerRef.current, {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className='w-full bg-[#FFFEFB] overflow-hidden' id='personal'>
            <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-[30px] sm:py-[30px] md:py-[80px] lg:py-[96px]'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16'>
                    <div ref={textContentRef} className='w-full lg:w-1/2 text-center lg:text-left'>
                        <h1
                            ref={headingRef}
                            className='text-4xl xs:text-[28px] sm:text-5xl md:text-6xl font-medium leading-tight text-[#191C1F] tracking-tight'
                        >
                            Your Money's Safe
                            <br className='hidden xs:block' />
                            <span className='xs:hidden'> </span>
                            Space
                        </h1>
                        <p
                            ref={paragraphRef}
                            className='mt-6 text-base sm:text-lg text-[#191C1F] leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0'
                        >
                            Your money is protected by Wave Money’s security.<br className='hidden sm:block' />
                            <span className='sm:hidden'> </span>
                            We use encrypted infrastructure, compliance-first design, and continuous fraud monitoring to safeguard every transaction, 24/7
                        </p>
                    </div>

                    <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0'>
                        <div
                            ref={shieldContainerRef}
                            className='relative w-full max-w-[320px] sm:max-w-[380px] px-4 sm:px-6 lg:px-0'
                        >
                            <img
                                src="/assets/img/shield.png"
                                alt="Security Shield"
                                className="w-full h-auto "
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}