'use client'

import Image from 'next/image'
import React from 'react'

export default function WaveCards() {
    const benefits = [
        {
            title: 'Global Acceptance',
            description:
                'Spend and withdraw funds with Wave Cards worldwide wherever major cards are accepted.',
        },
        {
            title: 'Secure Tokenization',
            description:
                'Every payment is protected with advanced tokenization and real-time fraud prevention.',
        },
        {
            title: 'Seamless Spending',
            description:
                'Top up your Wave cards instantly using any supported digital asset.',
        },
        {
            title: 'Low Fee, High Convenience',
            description:
                'Enjoy payments without heavy markups or annoying conversion fees.',
        },
    ]

    return (
        <div className="md:py-12 py-12 bg-white xxl:px-20 lg:px-10 md:px-6 px-4" id='wave-cards'>
            <div className='max-w-[1200px] w-full mx-auto'>
                <div className='grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-[183px] gap-10 items-start'>
                    <div className='w-full flex flex-col items-center md:items-start'>
                        <h2
                            className='font-normal 2xl:text-[64px] lg:text-[52px] sm:text-[40px] text-[32px] tracking-[-0.80px] leading-[110%] text-bg-black mb-12 md:mb-20 text-center md:text-left text-[#000000] text-sf-pro mt-0'
                        >
                            Wave Card
                        </h2>
                        <div
                            className='w-full max-w-[480px] flex justify-center items-center'
                        >
                            <Image
                                src="/assets/img/wavecard.png"
                                alt="Wave Card"
                                width={560}
                                height={340}
                                className='w-full h-auto rounded-[24px] shadow-[0_26px_70px_rgba(15,35,52,0.35)]'
                            />
                        </div>
                    </div>

                    <div className='space-y-16 mt-8'>
                        {benefits.map((item, index) => (
                            <div
                                key={item.title}
                                className='space-y-3'
                            >
                                <div className='flex items-start gap-3'>
                                    <div
                                        className='inline-flex items-center gap-1.5 rounded-full border border-[#3754AA] bg-white px-3 py-1.5 text-[12px] font-medium text-[#3754AA] mt-0.5 flex-shrink-0'
                                    >
                                        <span
                                            className='w-2 h-2 rounded-full bg-[#3754AA]'
                                        />
                                        <span>{index + 1}</span>
                                    </div>
                                    <div className='flex-1'>
                                        <h3
                                            className='text-[#3754AA] font-medium text-lg md:text-[20px] leading-[150%] mb-2'
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className='text-[#3754AA] text-sm md:text-[16px] leading-relaxed mb-10'
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <hr
                                    className='mt-5 border-t border-[#3754AA]'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
