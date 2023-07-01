import React from 'react'
import SectionTitle from './SectionTitle'
import Myself from '../../src/assets/Me-noBg.png'

export default function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
            <SectionTitle id='about-me'>About Me</SectionTitle>
            <p className='text-md "text-slate-900 dark:text-slate-300 text-md md:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed.    
            </p>
            <a 
              href='mailto:alessandrofrondini@gmail.com'
              className='block mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500'
            >alessandrofrondini@gmail.com</a>
        </div>
        <div>
            <img 
              src={Myself}
              className='w-full md:w-6/12'
              alt='Alessandro Frondini'
            />
        </div>
    </div>
  )
}
