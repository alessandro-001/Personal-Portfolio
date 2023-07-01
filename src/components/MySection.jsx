import React from "react";


function MySection() {
    return (
        <div id="top-page" className="flex items-center justify-center flex-col py-20">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-slate-800 font-semibold dark:text-[#13ecd4]">Hi I'm Alessandro</h1>
            <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed. </p>
            <a href="#projects" className="inline-block mx-5 px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 md:text-md">Projects</a>
            <a href="#about-me" className="inline-block px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 md:text-md">About Me</a>
          </div>
        </div>
    )
}

export default MySection;

