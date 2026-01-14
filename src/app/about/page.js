'use client'
import React, { useRef } from 'react'
import HeroSection from '../components/about/HeroSection'
import BornBreak from '../components/about/BornBreak'
import HumansBehind from '../components/about/HumansBehind'
import DownloadWave from '../components/about/DownloadWave'
import Worldwide from '../components/about/Worldwide'
import Footer from '../components/about/Footer'



export default function page() {

  return (
    <>
      <HeroSection />
      <BornBreak />
      <HumansBehind />
      <DownloadWave />
      <Worldwide />
      <Footer />
    </>
  )
}
