import Image from 'next/image'
import React from 'react'
import Worldwide from './about/Worldwide'

export default function Join() {
    return (
        <>
            <div className='py-[40px] bg-bg-yellow xxl:px-20 lg:px-10 md:px-6 px-4'>
                <div className='max-w-[1440px] w-full mx-auto flex justify-between items-center flex-wrap'>
                    <h2 className='font-semibold md:text-[40px]  text-[28px] tracking-[-0.80px] leading-[100%] text-bg-black'>join thousands already paying smarter with wave</h2>
                    <img src={'/assets/img/users.png'} className='lg:mt-0 mt-6 ' alt='users' />

                </div>
            </div>
            <Worldwide />
        </>
    )
}
