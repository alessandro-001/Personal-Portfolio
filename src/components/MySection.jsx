import React from "react";


function MySection() {
    return (
        <div className="flex items-center justify-center flex-col py-20">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-slate-900 font-semibold dark:text-[#13ecd4]">Hi I'm Alessandro</h1>
            <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed. </p>
            <a href="#" className="inline-block px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 md:text-md">See Projects</a>
          </div>
        </div>
    )
}

export default MySection;

//md = mobile device