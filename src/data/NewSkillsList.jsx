import React from 'react';
import ExpoLogo from '../../src/assets/expo-go-app-logo.png'
import InsomniaLogo from '../../src/assets/insomnia-logo.png'
import SectionTitle from '../components/SectionTitle';
import { HiAcademicCap } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsTools } from "react-icons/bs";


export default function NewSkillsList() {
  return (
    <div name='skills' className='w-full'>
        <div className='max-w-screen-lg mx-auto p-4 pt-10 flex flex-col justify-center w-full h-full dark:text-[#13ecd4] text-slate-800'>
        <SectionTitle id='skills'>My Skills</SectionTitle>

            {/* Languages */}
            <div className="flex flex-col sm:flex-row items-center">
                <HiAcademicCap className="w-20 h-20 px-5"></HiAcademicCap>
                <p className="mb-2 sm:mr-2 sm:mb-0">LANGUAGES</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#ffff00] shadow-slate-800'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                        alt="javascript-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Javascript</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#0096ff] shadow-slate-800'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                        alt="Typescript-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Typescript</p>
                </div>
            </div>

            {/* Frontend tech */}
            <div className="flex flex-col sm:flex-row items-center">
                <AiOutlineStar className="w-20 h-20 px-5"></AiOutlineStar>
                <p className="mb-2 sm:mr-2 sm:mb-0">FRONTEND</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12.5 sm:px-0'>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#13ecd4] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="React-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>React</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#13ecd4] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="React-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>React Native</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#FF6900] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                        alt="html-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>HTML5</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#0096ff] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                        alt="css-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>CSS3</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#1ea8e1] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
                        alt="tailwindcss-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Tailwind</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#f2fafd] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src={ExpoLogo}
                        alt="expo-go-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Expo</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#6bbffc] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                        alt="materialUI-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Material UI</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#f708ee] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                        alt="figma-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Figma</p>
                </div>
            </div>

            {/* backend tech */}
            <div className="flex flex-col sm:flex-row items-center">
                <AiFillDatabase className="w-20 h-20 px-5"></AiFillDatabase>
                <p className="mb-2 sm:mr-2 sm:mb-0">BACKEND</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12.5 sm:px-0'>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#ff0043] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" 
                        alt="express-logo-js"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Express js</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#00ba2c] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" 
                        alt="node-logo-js"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Node js</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#084ff7] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                        alt="postgresql-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Postgre SQL</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#ff9500] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                        alt="firebase-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Firebase</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#d6295e] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
                        alt="jest-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Jest</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#ba00ff] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src={InsomniaLogo} 
                        alt="insomnia-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Insomnia</p>
                </div>

            
            </div>
            
            {/* tools tech */}
            <div className="flex flex-col sm:flex-row items-center">
                <BsTools className="w-20 h-20 px-5"></BsTools>
                <p className="mb-2 sm:mr-2 sm:mb-0">TOOLS</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12.5 sm:px-0'>
                <div className='shadow-md hover:scale-110 duration-500 py-4 px-4 rounded-xl dark:shadow-[#d6295e] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        alt="jest-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Git Version Control</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-4 px-4 rounded-xl dark:shadow-[#084ff7] shadow-slate-800 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
                        alt="VSC-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>VSC</p>
                </div>
            </div>
        </div>
    </div>
  )
}
