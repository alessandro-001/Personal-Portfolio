import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="flex justify-end mb-5">
        <a href="#top-page" className="inline-block px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 md:text-md">Back to the top!</a>
      </div>
      <div className='py-4 bg-slate-300 dark:bg-slate-400 text-slate-900 text-center rounded-t-3xl'>
        <p>
          © Alessandro Frondini {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </>
  )
} 


//<a href="#about-me" className="inline-block px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 md:text-md">About Me</a>
