import React from 'react';


export default function Worldwide({ type }) {
  return (
    <div className={`${type ? 'bg-bg-yellow' : 'bg-bg-blue'} marquee-container py-4 xxl:px-20 lg:px-10 md:px-6 px-4 overflow-hidden`}>
      <div className="marquee-content">
        <span className={`${type ? 'text-bg-black' : 'text-white'} md:text-base text-sm font-semibold mx-8`}>
          Accepted by 130M+ merchants worldwide
        </span>
        <span className={`${type ? 'text-bg-black' : 'text-white'} md:text-base text-sm font-semibold mx-8`}>
          Accepted by 130M+ merchants worldwide
        </span>
        <span className={`${type ? 'text-bg-black' : 'text-white'} md:text-base text-sm font-semibold mx-8`}>
          Accepted by 130M+ merchants worldwide
        </span>
        <span className={`${type ? 'text-bg-black' : 'text-white'} md:text-base text-sm font-semibold mx-8`}>
          Accepted by 130M+ merchants worldwide
        </span>
        <span className={`${type ? 'text-bg-black' : 'text-white'} md:text-base text-sm font-semibold mx-8`}>
          Accepted by 130M+ merchants worldwide
        </span>
        <span className={`${type ? 'text-bg-black' : 'text-white'} md:text-base text-sm font-semibold mx-8`}>
          Accepted by 130M+ merchants worldwide
        </span>

        <span className={`${type ? 'text-bg-black' : 'text-white'} md:text-base text-sm font-semibold mx-8`}>
          Accepted by 130M+ merchants worldwide
        </span>
        <span className={`${type ? 'text-bg-black' : 'text-white'} md:text-base text-sm font-semibold mx-8`}>
          Accepted by 130M+ merchants worldwide
        </span>
        <span className={`${type ? 'text-bg-black' : 'text-white'} md:text-base text-sm font-semibold mx-8`}>
          Accepted by 130M+ merchants worldwide
        </span>
      </div>
    </div>
  );
}
