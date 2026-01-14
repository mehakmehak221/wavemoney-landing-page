'use client'
import React, { useRef } from 'react'

import Worldwide from '../components/about/Worldwide'
import Footer from '../components/about/Footer'
import Terms from '../components/Terms'



export default function page() {

  return (
    <>
      <Terms />
      
      <Worldwide type={true} />
      <Footer />
    </>
  )
}
