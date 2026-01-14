'use client'
import React, { useRef } from 'react'

import Worldwide from '../components/about/Worldwide'
import Footer from '../components/about/Footer'
import Terms from '../components/Terms'
import RegulatoryCompliance from '../components/RegulatoryCompliance'



export default function page() {

  return (
    <>
      <RegulatoryCompliance />
      
      <Worldwide type={true} />
      <Footer />
    </>
  )
}
