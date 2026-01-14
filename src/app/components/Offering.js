import React from 'react'
import Image from 'next/image'

const Offering = () => {
  return (
    <div className='relative w-full bg-[#FFFFFF] py-16' id='offering'>
      <div className='max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12'>
        <div className='text-left mb-12'>
          <h2 className='text-[40px] sm:text-[56px] md:text-[64px] font-extralight leading-tight text-black mb-6'>
            Our <span className='italic font-normal'>Key Offerings</span>
          </h2>
          <p className='text-[13px] leading-[1.5] text-[#0A0B09] max-w-lg font-normal'>
            We provide an all-in-one digital wallet and payment ecosystem that enables individuals and businesses to spend, send, and convert crypto and fiat seamlessly in real-world use cases
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          <div className='bg-white rounded-2xl p-8 border border-[#96C96A]'>
            <h3 className='text-[24px] font-medium text-black mb-6 text-center font-inter'>For Everyday Users</h3>
            <div className='mb-6 rounded-2xl overflow-hidden'>
              <Image
                src="/assets/img/everyday-users.png"
                alt="For Everyday Users"
                width={300}
                height={200}
                className='w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] xl:h-[300px] object-cover object-top'
              />
            </div>
            <div className='flex flex-wrap gap-3 mb-5 justify-center'>
              <button className='px-3 py-2 bg-[#96C96A]/10 text-black rounded-lg text-sm font-medium border border-[#96C96A]'>BILLS</button>
              <button className='px-3 py-2 bg-[#96C96A]/10 text-black rounded-lg text-sm font-medium border border-[#96C96A]'>PAYMENTS</button>
              <button className='px-3 py-2 bg-[#96C96A]/10 text-black rounded-lg text-sm font-medium border border-[#96C96A]'>TRAVEL</button>
            </div>
            <p className='text-[#6D8F3A] text-sm leading-relaxed font-normal'>
              Pay bills, book services, and travel using crypto or fiat, instantly and securely from one app.
            </p>
          </div>


          <div className='bg-white rounded-2xl p-8 border border-[#96C96A]'>
            <h3 className='text-[24px] font-medium text-black mb-6 text-center font-inter'>For Crypto Holders</h3>
            <div className='mb-6 rounded-2xl overflow-hidden'>
              <Image
                src="/assets/img/crypto-holders.png"
                alt="For Crypto Holders"
                width={300}
                height={200}
                className='w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] xl:h-[300px] object-cover object-top'
              />
            </div>
            <div className='flex flex-wrap gap-3 mb-5 justify-center'>
              <button className='px-3 py-2 bg-[#96C96A]/10 text-black rounded-lg text-sm font-medium border border-[#96C96A]'>BUY</button>
              <button className='px-3 py-2 bg-[#96C96A]/10 text-black rounded-lg text-sm font-medium border border-[#96C96A]'>SWAP</button>
              <button className='px-3 py-2 bg-[#96C96A]/10 text-black rounded-lg text-sm font-medium border border-[#96C96A]'>PAY</button>
            </div>
            <p className='text-[#6D8F3A] text-sm leading-relaxed font-normal'>
              Spend your crypto instantly, convert to fiat on demand, and access real-world utility.
            </p>
          </div>


          <div className='bg-white rounded-2xl p-8 border border-[#96C96A]'>
            <h3 className='text-[24px] font-medium text-black mb-6 text-center font-inter'>For Businesses</h3>
            <div className='mb-6 rounded-2xl overflow-hidden'>
              <Image
                src="/assets/img/for-businesses.png"
                alt="For Businesses"
                width={300}
                height={200}
                className='w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] xl:h-[300px] object-cover object-top'
              />
            </div>
            <div className='flex flex-wrap gap-3 mb-5 justify-center'>
              <button className='px-3 py-2 bg-[#96C96A]/10 text-black rounded-lg text-sm font-medium border border-[#96C96A]'>ACCEPT</button>
              <button className='px-3 py-2 bg-[#96C96A]/10 text-black rounded-lg text-sm font-medium border border-[#96C96A]'>SETTLE</button>
              <button className='px-3 py-2 bg-[#96C96A]/10 text-black rounded-lg text-sm font-medium border border-[#96C96A]'>SCALE</button>
            </div>
            <p className='text-[#6D8F3A] text-sm leading-relaxed font-normal'>
              Accept crypto payments and expand globally with a unified payment infrastructure.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Offering
