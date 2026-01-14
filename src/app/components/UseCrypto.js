import Image from 'next/image'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';

// Slide data array
const slides = [
    {
        title: 'Electricity And \nWater Bills',
        desc: 'Use your BTC, ETH, USDT & more for actual services like',
        img: '/assets/img/idea.png',
        bg: 'bg-bg-yellow',
        text: 'black',
    },
    {
        title: 'Mobile & DTH  \nRecharges',
        desc: 'Use your BTC, ETH, USDT & more for actual services like',
        img: '/assets/img/dth.png',
        bg: 'bg-light-black',
        text: '',
    },
    {
        title: 'Train, Flight & \nBus Bookings',
        desc: 'Use your BTC, ETH, USDT & more for actual services like',
        img: '/assets/img/flight.png',
        bg: 'bg-light-black',
        text: '',

    },
    {
        title: 'Movie & Event \nTickets',
        desc: 'Use your BTC, ETH, USDT & more for actual services like',
        img: '/assets/img/ticket.png',
        bg: 'bg-light-black',
        text: '',

    },
    {
        title: 'Internet & Gas \nPayments',
        desc: 'Use your BTC, ETH, USDT & more for actual services like',
        img: '/assets/img/petrol.png',
        bg: 'bg-light-black',
        text: '',

    },
    {
        title: 'FASTag Recharge\n& Insurance',
        desc: 'Use your BTC, ETH, USDT & more for actual services like',
        img: '/assets/img/road.png',
        bg: 'bg-light-black',
        text: '',

    },
];

export default function UseCrypto() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <div className='xl:py-[120px] lg:py-[100px] md:py-[80px] sm:py-[60px] py-[40px] xxl:px-20 lg:px-10 md:px-6 px-4 bg-bg-black overflow-hidden'>
                <div className='max-w-[1440px] w-full mx-auto'>
                    <p className='bg-bg-beage w-fit text-nowrap h-[26px] flex items-center text-[14px] leading-4 tracking-[-0.14px] text-bg-black px-2.5 py-1.2 font-semibold'>Crypto Utility Redefined</p>
                    <div className='flex justify-between items-end md:flex-nowrap flex-wrap gap-4'>
                        <h2 className='mt-8 font-semibold 2xl:text-[72px] lg:text-[48px] sm:text-[38px] text-[32px] tracking-[-0.80px] leading-[100%] text-bg-beage'>Finally, a reason    <br className='' />
                            to use your crypto   
                               <br className='md:block hidden' />daily
                        </h2>
                        <div className='md:flex gap-3 hidden'>
                            <button ref={prevRef} className="custom-prev">
                                <Image src={'/assets/img/arrow-right.svg'} alt='arrow right' width={50} height={50} />
                            </button>
                            <button ref={nextRef} className="custom-next">
                                <Image src={'/assets/img/arrow-left.svg'} alt='arrow right' width={50} height={50} />
                            </button>
                        </div>
                    </div>
                    <div className='xl:py-[120px] lg:py-[100px] md:py-[80px] sm:py-[60px] py-[40px]'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            navigation={true}
                            freeMode={true}
                            pagination={false}
                            Navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            breakpoints={{
                                440: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 1.9,
                                    spaceBetween: 20,
                                },
                                800: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 24,
                                },
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                                1600: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                            }}
                            modules={[FreeMode, Navigation]}
                            className="mySwiper"
                        >
                            {slides.map((slide, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className='lg:rounded-[32px] md:rounded-[24px] sm:rounded-[18px] rounded-[10px] overflow-hidden'>
                                        <div className={`${slide.bg} lg:p-12 md:p-8 sm:p-6 p-4`}>
                                            <h3 className={`${slide.text === 'black' ? 'text-bg-black' : 'text-white'}  lg:text-[32px] text-[24px] leading-[100%] font-semibold md:tracking-8 tracking-6 `}>
                                                {slide.title.split('\n').map((line, i) => (
                                                    <React.Fragment key={i}>
                                                        {line}   
                                                          <br />
                                                    </React.Fragment>
                                                ))}
                                            </h3>
                                            <p className={`${slide.text === 'black' ? 'text-bg-black' : 'text-white'} md:mt-6 mt-4 text-[16px] font-semibold`}>{slide.desc}</p>
                                        </div>
                                        <Image src={slide.img} className='w-full' width={388} height={380} alt='hero mobile' />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <Image src={'/assets/img/text.svg'} className='mt-6 w-full' width={314} height={35} alt='users' />
                </div>
            </div>

        </>
    )
}
