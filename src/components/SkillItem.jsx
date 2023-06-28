import React from 'react'

function SkillItem({title, icon, description}) {
  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-400 dark:hover:bg-slate-300 hover:-translate-y-2 transform transition p-5 mb-3 rounded-xl'>
        <div className=' text-slate-800 dark:text-[#13ecd4] w-6 h-6 mb-3'>
            {icon}
        </div>
        <h1 className='font-semibold text-lg text-slate-900 dark:text-slate-900'>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default SkillItem