import React from 'react'

export default function SectionTitle({children, id}) {
  return (
    <h1 id={id && id}
        className='text-2xl font-bold mb-5 text-slate-800 dark:text-[#13ecd4]'
    >{children}</h1>
  )
}
