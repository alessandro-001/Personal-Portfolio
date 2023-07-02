import React from "react";



export default function ProjectItem({imgUrl, title, tech, description, repolink}) {

    return (
        <div>
  <div className="flex flex-wrap md:flex-nowrap items-start py-10">
    <div className="w-full md:w-1/2 md:pr-8">
      <div className="text-slate-900 dark:text-gray-300 p-5">
        <h3 className="text-2xl md:text-2xl mb-2 md:mb-3 font-semibold"> 
          {title}
        </h3>
        <p className="text-slate-900 dark:text-slate-300 text-md md:text-xl">
          {description}
        </p>
        <div className="py-5 mx-5 mt-8 px-8 border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500 text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md text-center">
          <a href={repolink} target="_blank" rel="noopener noreferrer">Check me on GitHub</a>
        </div>
      </div>
    </div>
    <div className="w-full md:w-4/5 md:pl-8 flex flex-col items-center">
      <img
        src={imgUrl}
        alt={title}
        className="w-2/3 h-auto object-cover rounded-xl"
      />
      <p className="flex flex-wrap gap-4 py-4 items-center text-slate-900 dark:text-slate-300 font-medium">
        Built with:
        {tech.map(item => (
          <span
            key={item}
            className="inline-block px-2 py-2 bg-slate-300 dark:bg-slate-900 rounded-lg"
          >
            {item}
          </span>
        ))}
      </p>
    </div>
  </div>
</div>


    );
  }
  

