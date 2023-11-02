import React from "react";
import { VscGithub } from "react-icons/vsc";
import { HiStatusOnline } from "react-icons/hi";



export default function ProjectItem({imgUrl, title, tech, description, repolink, weblink}) {

    return (
    <div className="py-3">
        <div className="text-slate-900 dark:text-gray-300 py-5">
            <h3 className="text-2xl md:text-2xl mb-2 md:mb-3 font-semibold"> 
            {title}
            </h3>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-start py-6">
            <div className="w-full md:w-1/2 md:pr-8">
            <div className="text-slate-900 dark:text-gray-300 p-5">
                <p className="text-slate-900 dark:text-slate-300 text-md md:text-xl">
                    {description}
                </p>
                <button className="py-2 mx-5 mt-8 px-8 border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500 text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md text-center justify-center">
                    <a href={repolink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <VscGithub className="mr-2" />
                        <span>GitHub Repository</span>
                    </a> 
                </button>
                <button className={`py-2 mx-5 mt-8 px-8 ${weblink ? 'border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500' : ''} text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md text-center flex items-center justify-center`}>
                    {weblink && (
                        <a href={weblink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <HiStatusOnline className="mr-2" />
                            <span>Try me online!</span>
                        </a>
                    )}
                </button>
                <p className="flex flex-wrap gap-4 py-6 text-center items-center text-slate-900 dark:text-slate-300 font-medium">
                    {tech.map(item => (
                    <span
                        key={item}
                        className="inline-block px-2 py-2 mx-auto bg-slate-300 dark:bg-slate-700 dark:text-white rounded-lg"
                    >
                        {item}
                    </span>
                    ))}
                </p>
            </div>
            </div>
            <div className="w-full md:w-4/5 md:pl-8 flex flex-col items-center">
            <div className="h-64 w-auto md:mx-auto items-center">
            <img
                src={imgUrl}
                alt={title}
                className="w-2/3 h-auto object-cover rounded-xl mx-auto"
                loading="lazy"
            />
            </div>
            </div>
        </div>
    </div>


    );
  }
  

