import React from 'react'
import SectionTitle from './SectionTitle'
import Myself from '../../src/assets/Me-noBg.png'
import { TfiEmail } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";


export default function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
    <div className='md:w-6/12'>
    <SectionTitle id='about-me'>About Me</SectionTitle>
    <img 
      src={Myself}
      className='w-full mx-auto'
      alt='Alessandro Frondini'
    />
  </div>
  <div className='md:w-6/12'>
    <p className='text-md text-slate-900 dark:text-slate-300 text-md md:text-xl'>
      I've always been fascinated by technology and how it can transform the world. The flexibility and constant evolution of this field inspired me
      to change my career from dental technology to software development.  
      As I transition to the tech industry, I am driven by my genuine passion for the field and strong work ethic. I highly
      value teamwork and believe in the power of collaboration. 
      Additionally, my soft skills, such as effective time management, maintaining
      quality standards, and staying organized will contribute to my success in this new role.
    </p>
    <a 
      href='mailto:alessandrofrondini@gmail.com'
      className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
    >
      <TfiEmail className="mr-2"/>
      alessandrofrondini@gmail.com
    </a>
    <a 
      href='https://www.linkedin.com/in/alefrondini/'
      target='_blank'
      rel='noopener noreferrer'
      className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
    >
      <BsLinkedin className="mr-2"/>
      LinkedIn
    </a>
    <a 
      href='https://github.com/alessandro-001'
      target='_blank'
      rel='noopener noreferrer'
      className='mt-3 text-indigo-700 dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500 flex items-center'
    >
      <VscGithub className="mr-2"/>
      GitHub
    </a>
  </div>
</div>


  )
}
