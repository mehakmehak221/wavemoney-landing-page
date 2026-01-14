'use client'

import React from 'react'

export default function Space() {
    return (
        <section className='w-full bg-[#FFFDF7]' id='personal'>
            <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16'>
                    <div className='w-full lg:w-1/2 text-center lg:text-left'>
                        <h1 className='text-4xl xs:text-[42px] sm:text-5xl md:text-6xl font-medium leading-tight text-[#191C1F] tracking-tight'>
                            Your Money's Safe
                            <br className='hidden xs:block' />
                            <span className='xs:hidden'> </span>
                            Space
                        </h1>
                        <p className='mt-6 text-base sm:text-lg text-[#191C1F] leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0'>
                            Your money is protected by Wave Money’s security.<br className='hidden sm:block' />
                            <span className='sm:hidden'> </span>
                            We use encrypted infrastructure, compliance-first design, and continuous fraud monitoring to safeguard every transaction, 24/7
                        </p>
                    </div>

                    <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0'>
                        <div className='relative w-full max-w-[320px] sm:max-w-[380px] px-4 sm:px-6 lg:px-0'>
                            <img
                                src="/assets/img/shield.png"
                                alt="Security Shield"
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}