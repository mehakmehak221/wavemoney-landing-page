import React from 'react';
import Image from 'next/image';

const WorldwideSection = () => {
  return (
    <section className='relative w-full pt-12 md:pt-16 lg:pt-28 pb-24 md:pb-32 lg:pb-56 overflow-hidden min-h-[500px] md:min-h-[600px]' id='worldwide'>

      <div className='absolute inset-0 z-0'>
        <Image
          src='/assets/img/worldwidebg.png'
          alt='Worldwide Background'
          fill
          priority
        />
        <div className='absolute inset-0'></div>
      </div>

      <div className='relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 md:mb-16 lg:mb-20'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-regular text-white font-sf-pro'>
            Trusted Worldwide
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto'>

          <div className='bg-[#E3ECD9]/50 backdrop-blur-sm shadow-xl p-4 aspect-[3/2] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-[#546E3A66] border'>
            <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#546E3A] mb-3 sm:mb-4'>
              Millions
            </h3>
            <p className='text-[#000000] text-base sm:text-lg md:text-xl'>
              Of

              Global

              users
            </p>
          </div>


          <div className='bg-[#E3ECD9]/50 backdrop-blur-sm shadow-xl p-4 aspect-[3/2] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-[#546E3A66] border'>
            <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#546E3A] mb-3 sm:mb-4'>
              200+
            </h3>
            <p className='text-[#000000] text-base sm:text-lg md:text-xl'>
              Countries
            </p>
          </div>


          <div className='bg-[#E3ECD9]/50 backdrop-blur-sm shadow-xl p-4 aspect-[3/2] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-[#546E3A66] border'>
            <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#546E3A] mb-3 sm:mb-4'>
              Global
            </h3>
            <p className='text-[#000000] text-base sm:text-lg md:text-xl'>
              Payment

              Flows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldwideSection;
