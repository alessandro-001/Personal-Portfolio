import React from 'react'
import BannerLogoDark from '../../src/assets/banner-logo.png'

export default function Banner() {
  return (
    <div id='banner' className='py-5'>
        <img 
            src={BannerLogoDark} 
            alt='banner-logo'
            loading="lazy"
        ></img>
    </div>
  )
}
