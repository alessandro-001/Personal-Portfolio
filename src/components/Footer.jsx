import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="flex justify-center mb-10">
        <a href="#top-page" className="inline-block mx-5 px-8 py-4 border border-slate-900 dark:border-[#13ecd4] text-base dark:text-[#13ecd4] font-medium rounded-md text-slate-900 hover:bg-slate-900 dark:hover:border-pink-500 md:text-md dark:hover:text-pink-500">Back to the top!</a>
      </div>
      <div className='py-5 bg-slate-300 dark:bg-slate-400 text-slate-900 text-center rounded-t-3xl'>
        <p>
          © Alessandro Frondini {new Date().getFullYear()}. All rights reserved.
        </p>
        <small className='text-xs'>
            Skills icons provided by <a href='https://devicon.dev/' target='_blank'>Devicon</a> Copyright © 2015 Konpa
        </small>
      </div>
    </>
  )
} 
