import React from 'react'
import BannerLogoDark from '../../src/assets/banner-logo.png'

export default function Banner() {
  return (
    <div className='py-5'>
        <img 
            src={BannerLogoDark} 
            alt='banner-logo'></img>
    </div>
  )
}
