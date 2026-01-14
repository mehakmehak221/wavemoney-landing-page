'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { leftcurl as LeftCurl } from '@/VectorImages'
import { rightcurl as RightCurl } from '@/VectorImages'

gsap.registerPlugin(ScrollTrigger)

export default function UsingWave() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const containerRef = useRef(null)
    const leftCurlRef = useRef(null)
    const rightCurlRef = useRef(null)
    const headingRef = useRef(null)
    const subheadingRef = useRef(null)
    const leftCardTextRef = useRef(null)
    const leftCardImageRef = useRef(null)
    const centerMockupRef = useRef(null)
    const walletCard1Ref = useRef(null)
    const walletCard2Ref = useRef(null)
    const rightCardTextRef = useRef(null)
    const rightCardImageRef = useRef(null)

    const toggleMockup = () => {
        setIsDarkMode(!isDarkMode)
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([
                leftCurlRef.current,
                rightCurlRef.current,
                headingRef.current,
                subheadingRef.current,
                leftCardTextRef.current,
                leftCardImageRef.current,
                centerMockupRef.current,
                walletCard1Ref.current,
                walletCard2Ref.current,
                rightCardTextRef.current,
                rightCardImageRef.current
            ], { opacity: 0 })


            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'restart none none reset',
                },
            })


            tl.fromTo(
                leftCurlRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
                0
            )
                .fromTo(
                    rightCurlRef.current,
                    { opacity: 0, x: 30 },
                    { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
                    0
                )


                .fromTo(
                    headingRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                    0.1
                )
                .fromTo(
                    subheadingRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                    0.2
                )

                .fromTo(
                    leftCardTextRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
                    0.3
                )
                .fromTo(
                    leftCardImageRef.current,
                    { opacity: 0, scale: 0.95 },
                    { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
                    0.35
                )


                .fromTo(
                    centerMockupRef.current,
                    { opacity: 0, scale: 0.98 },
                    { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
                    0.25
                )


                .fromTo(
                    walletCard1Ref.current,
                    { opacity: 0, scale: 0.9, y: 15 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to(walletCard1Ref.current, {
                                y: -10,
                                duration: 3.5,
                                repeat: -1,
                                yoyo: true,
                                ease: 'sine.inOut',
                            })
                        }
                    },
                    0.4
                )
                .fromTo(
                    walletCard2Ref.current,
                    { opacity: 0, scale: 0.9, y: 15 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to(walletCard2Ref.current, {
                                y: -10,
                                duration: 3.5,
                                repeat: -1,
                                yoyo: true,
                                ease: 'sine.inOut',
                                delay: 0.4,
                            })
                        }
                    },
                    0.45
                )


                .fromTo(
                    rightCardTextRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
                    0.3
                )
                .fromTo(
                    rightCardImageRef.current,
                    { opacity: 0, scale: 0.95 },
                    { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
                    0.35
                )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className='relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden bg-[#FFFCF7]'
            id='how-it-works'
        >
            <div
                ref={leftCurlRef}
                className='hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none'
            >
                <LeftCurl />
            </div>
            <div
                ref={rightCurlRef}
                className='hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none'
            >
                <RightCurl />
            </div>

            <div className='max-w-[1440px] w-full mx-auto px-4 md:px-6 lg:px-10 xxl:px-20'>
                <div className='text-center mb-12 md:mb-16 lg:mb-24'>
                    <h2
                        ref={headingRef}
                        className='font-semibold text-[32px] md:text-[48px] xl:text-[64px] tracking-tight leading-[1.1] text-[#2B2B2B]'
                    >
                        Wave Money App
                    </h2>
                    <p
                        ref={subheadingRef}
                        className='mt-3 md:mt-4 text-[18px] md:text-[32px] lg:text-[40px] font-medium text-[#2B2B2B]'
                    >
                        The Future Of Everyday Payments
                    </p>
                </div>


                <div className='lg:hidden flex flex-col items-center gap-0 relative'>

                    <div className='flex flex-row items-center justify-between w-full max-w-[700px] px-4 md:px-10 mb-4 md:mb-0'>
                        <div
                            ref={leftCardTextRef}
                            className='flex-1 max-w-[180px] md:max-w-[240px]'
                        >
                            <p className='text-[13px] md:text-[16px] lg:text-[16px] xl:text-[20px] font-normal leading-[1.5] text-left text-[#40570F] font-inter'>
                                Convert crypto to fiat and fund your wallet via UPI, card, or bank transfers
                            </p>
                        </div>
                        <div
                            ref={leftCardImageRef}
                            className='hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0'
                        >
                            <Image
                                src='/assets/img/cryptopay.png'
                                alt='Fund wallet'
                                width={200}
                                height={200}
                                className='w-[120px] md:w-[160px] h-auto rounded-2xl shadow-xl'
                            />
                        </div>
                    </div>


                    <div className='flex justify-center items-center relative z-20 w-full -mt-4 md:-mt-8'>
                        <div
                            ref={centerMockupRef}
                            className='relative w-[300px] md:w-[360px] cursor-pointer hover:scale-105 transition-transform duration-300'
                            onClick={toggleMockup}
                        >
                            <div>
                                <Image
                                    src={isDarkMode ? '/assets/img/darkmobilemockup.png' : '/assets/img/mobilemockup.png'}
                                    alt='App Mockup'
                                    width={360}
                                    height={720}
                                    priority
                                    className='w-full h-auto drop-shadow-2xl relative z-10'
                                />
                            </div>


                            <div
                                ref={walletCard1Ref}
                                className='absolute top-6 md:top-10 -right-8 md:-right-16 w-[130px] md:w-[170px] z-20'
                                style={{ willChange: 'transform' }}
                            >
                                <Image
                                    src='/assets/img/wallet-card2.png'
                                    alt='Wallet EUR'
                                    width={220}
                                    height={160}
                                    className='w-full h-auto drop-shadow-lg'
                                />
                            </div>


                            <div
                                ref={walletCard2Ref}
                                className='absolute bottom-6 md:bottom-10 -left-8 md:-left-16 w-[140px] md:w-[190px] z-20'
                                style={{ willChange: 'transform' }}
                            >
                                <Image
                                    src='/assets/img/wallet-card.png'
                                    alt='Wallet BTC'
                                    width={240}
                                    height={180}
                                    className='w-full h-auto drop-shadow-lg'
                                />
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-row items-end justify-between w-full max-w-[700px] px-6 md:px-10 mt-8 md:mt-0'>
                        <div
                            ref={rightCardImageRef}
                            className='hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0'
                        >
                            <Image
                                src='/assets/img/sendmoney.png'
                                alt='Send Money'
                                width={200}
                                height={300}
                                className='w-[130px] md:w-[160px] h-auto rounded-2xl shadow-xl'
                            />
                        </div>
                        <div className='flex-1 max-w-[200px] md:max-w-[240px] pb-8 md:pb-12 text-right'>
                            <p
                                ref={rightCardTextRef}
                                className='text-[14px] md:text-[16px]
                                lg:text-[18px] xl:text-[20px]
                                font-normal leading-[1.5] text-right text-[#40570F] font-inter'
                            >
                                Send money globally in crypto or fiat
                            </p>
                        </div>
                    </div>
                </div>


                <div className='hidden lg:grid grid-cols-12 gap-0'>


                    <div className='col-span-4 flex justify-end items-start relative z-10 mt-12 xl:mt-16 pr-8'>
                        <div className='flex flex-row items-end gap-6 xl:gap-8'>
                            <div className='flex-1 max-w-[180px] xl:max-w-[200px]'>
                                <p
                                    ref={leftCardTextRef}
                                    className='text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] font-normal leading-[1.5] text-left  text-[#40570F] font-inter'
                                >
                                    Convert crypto to fiat and fund your wallet via UPI, card, or bank transfers
                                </p>
                            </div>
                            <div
                                ref={leftCardImageRef}
                                className='hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0'
                            >
                                <Image
                                    src='/assets/img/cryptopay.png'
                                    alt='Fund wallet'
                                    width={200}
                                    height={200}
                                    className='w-[140px] xl:w-[160px] h-auto rounded-2xl shadow-xl'
                                />
                            </div>
                        </div>
                    </div>


                    <div className='col-span-4 flex justify-center items-center relative z-20'>
                        <div
                            ref={centerMockupRef}
                            className='relative w-[340px] xl:w-[360px] cursor-pointer hover:scale-105 transition-transform duration-300'
                            onClick={toggleMockup}
                        >
                            <div>
                                <Image
                                    src={isDarkMode ? '/assets/img/darkmobilemockup.png' : '/assets/img/mobilemockup.png'}
                                    alt='App Mockup'
                                    width={360}
                                    height={720}
                                    priority
                                    className='w-full h-auto drop-shadow-2xl relative z-10'
                                />
                            </div>

                            <div
                                ref={walletCard1Ref}
                                className='absolute top-12 -right-20 xl:-right-60 w-[150px] xl:w-[180px] z-20'
                                style={{ willChange: 'transform' }}
                            >
                                <Image
                                    src='/assets/img/wallet-card2.png'
                                    alt='Wallet EUR'
                                    width={220}
                                    height={160}
                                    className='w-full h-auto drop-shadow-lg'
                                />
                            </div>

                            <div
                                ref={walletCard2Ref}
                                className='absolute bottom-12 -left-20 xl:-left-60 w-[170px] xl:w-[200px] z-20'
                                style={{ willChange: 'transform' }}
                            >
                                <Image
                                    src='/assets/img/wallet-card.png'
                                    alt='Wallet BTC'
                                    width={240}
                                    height={180}
                                    className='w-full h-auto drop-shadow-lg'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='col-span-4 flex justify-start items-end relative z-10 mb-12 xl:mb-14 pl-8'>
                        <div className='flex flex-col items-start gap-4'>
                            <div className='max-w-[220px]'>
                                <p
                                    ref={rightCardTextRef}
                                    className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-[1.5] text-left text-[#40570F] font-inter'
                                >
                                    Send money globally in crypto or fiat
                                </p>
                            </div>
                            <div
                                ref={rightCardImageRef}
                                className='hover:scale-105 transition-transform duration-300 cursor-pointer'
                            >
                                <Image
                                    src='/assets/img/sendmoney.png'
                                    alt='Send Money'
                                    width={200}
                                    height={300}
                                    className='w-[160px] xl:w-[180px] h-auto rounded-2xl shadow-xl'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}