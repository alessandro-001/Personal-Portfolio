import React from "react";
import Typewriter from 'typewriter-effect';


function MySection() {
    return (
      <div id="top-page" className="flex items-center justify-center flex-col py-[8]">
        <div className="text-center">
          <div className="text-2xl md:text-4xl mb-1 md:mb-5 text-slate-800 font-semibold dark:text-[#13ecd4]">
            <Typewriter
              onInit={(typewriter) => {
                  typewriter
                      .changeDelay(30)
                      .pauseFor(500)
                      .typeString("Hi I'm Alessandro!")
                      .pauseFor(1000)
                      .start();
              }}
            />
          </div>

          {/* Intro Paragraphs */}
          <p className="text-md md:text-xl mb-20 text-slate-900 dark:text-gray-300">
            Welcome to my personal portfolio! With a focus on software development, this page aims to provide a comprehensive display of my projects and achievements. 
            Explore my portfolio to get a glimpse of my professional journey and see how I can contribute to your next project.
          </p>

          <div className="inline-block mx-2 mb-8 md:mx-2 md:mb-8 px-8 py-4 border rounded-md bg-slate-100 dark:bg-slate-800 animate-flash-border-text">
            <p className="text-xl md:text-3xl animate-flash-border-text">
              I am excited to kick-start my career in tech! Looking for software development opportunities of any kind. 
              Please feel free to reach out if you have any openings or collaborations in mind!
            </p>
          </div>

          
          {/* Buttons */}
          <div className="flex flex-wrap justify-center">
            <a href="#projects" className="inline-block mx-2 mb-2 md:mx-2 md:mb-0 px-8 py-4 border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500 text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md">Projects</a>
            <a href="#about-me" className="inline-block mx-2 mb-2 md:mx-2 md:mb-0 px-8 py-4 border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500 text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md">About Me</a>
            <a href="#contact" className="inline-block mx-2 mb-2 md:mx-2 md:mb-0 px-8 py-4 border border-slate-900 dark:border-[#13ecd4] dark:hover:border-pink-500 text-base font-medium rounded-md text-slate-900 dark:text-[#13ecd4] hover:bg-slate-900 dark:hover:text-pink-500 hover:text-white md:text-md">Contact</a>
          </div>
        </div>
      </div>

    
    )
}

export default MySection;



