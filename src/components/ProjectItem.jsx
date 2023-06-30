import React from "react";



export default function ProjectItem({imgUrl, title, tech, description}) {
console.log('hereeee', description)

    return (
        <div>
          <div className="text-slate-900 dark:text-gray-300 p-5 w-full">
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
              {title}
            </h3>
          </div>
          <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-45 md:h-45 object-cover" //image stats
          />
          <p className="flex flex-wrap flex-row gap-4 py-4 items-center justify-center text-slate-900 dark:text-slate-300 font-medium">
            Built with: 
            {tech.map(item => {
                return (
                <span 
                  key={item}
                  className="inline-block px-2 py-2 bg-slate-300 dark:bg-slate-900 rounded-lg"
                >
                  {item}
                </span>
                )
            })}
          </p>
          <p className="text-slate-900 dark:text-slate-300 text-md md:text-xl">{description}</p>
          
      </div>
    );
  }
  

