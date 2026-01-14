import React from 'react';

const WorldwideSection = () => {
  return (
    <section className='relative w-full bg-gradient-to-b from-[#96C56A] to-[#FFFEFB] py-12 md:py-20 lg:py-28' id='worldwide'>
      <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 md:mb-16 lg:mb-20'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-regular text-white font-sf-pro'>
            Trusted Worldwide
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto'>
        
          <div className='bg-[#E3ECD9] rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-[#8DC559] border'>
            <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#546E3A] mb-3 sm:mb-4'>
              Millions
            </h3>
            <p className='text-[#000000] text-base sm:text-lg md:text-xl'>
             Of Global users
            </p>
          </div>

        
          <div className='bg-[#E3ECD9] rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-[#8DC559] border'>
           <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#546E3A] mb-3 sm:mb-4'>
              200+
            </h3>
            <p className='text-[#000000] text-base sm:text-lg md:text-xl'>
              Countries
            </p>
          </div>

        
          <div className='bg-[#E3ECD9] rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-[#8DC559] border'>
           <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#546E3A] mb-3 sm:mb-4'>
              Global
            </h3>
            <p className='text-[#000000] text-base sm:text-lg md:text-xl'>
              Payment Flows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldwideSection;
