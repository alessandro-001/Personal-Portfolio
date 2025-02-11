import React from 'react';
import ExpoLogo from '../../src/assets/expo-go-app-logo.png';
import InsomniaLogo from '../../src/assets/insomnia-logo.png';
import ExpressLogo from '../../src/assets/express-js.png';
import CppLogo from '../../src/assets/c.png';
import CodeliteLogo from '../../src/assets/code-lite-logo.png';
import SectionTitle from '../components/SectionTitle';
import { HiAcademicCap } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { GiBinoculars } from "react-icons/gi";


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
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#ffff00] shadow-[#baba5c] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                        alt="javascript-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Javascript</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#0096ff] shadow-[#005490] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                        alt="Typescript-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Typescript</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#ff3300] shadow-[#ff3300] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
                        alt="Java-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Java</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#d000ffd5] shadow-[#d000ffd5] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" 
                        alt="Csharp-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>C#</p>
                </div>
            </div>

            {/* Frontend tech */}
            <div className="flex flex-col sm:flex-row items-center">
                <AiOutlineStar className="w-20 h-20 px-5"></AiOutlineStar>
                <p className="mb-2 sm:mr-2 sm:mb-0">FRONTEND</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12.5 sm:px-0'>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#13ecd4] shadow-[#3c7972] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="React-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>React</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#13ecd4] shadow-[#3c7972] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="React-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>React Native</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#FF6900] shadow-[#FF6900] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                        alt="html-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>HTML5</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#0096ff] shadow-[#0096ff] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                        alt="css-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>CSS3</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#1ea8e1] shadow-[#1ea8e1] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
                        alt="tailwindcss-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Tailwind</p>
                </div>
                {/* <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#f2fafd] shadow-slate-800 dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src={ExpoLogo}
                        alt="expo-go-logo"
                        className='w-20 mx-auto'
                        loading='lazy'
                    />
                    <p className='mt-4'>Expo</p>
                </div> */}
                {/* <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#6bbffc] shadow-[#6bbffc] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                        alt="materialUI-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Material UI</p>
                </div> */}
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#f708ee] shadow-[#5e085b] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
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
                {/* <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#ff0043] shadow-slate-800 dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src={ExpressLogo} 
                        alt="express-logo-js"
                        className='w-20 mx-auto'
                        loading='lazy'
                    />
                    <p className='mt-4'>Express js</p>
                </div> */}
                {/* <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#00ba2c] shadow-[#006417] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" 
                        alt="node-logo-js"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Node js</p>
                </div> */}
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#084ff7] shadow-slate-800 dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                        alt="postgresql-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Postgre SQL</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#f70808] shadow-slate-800 dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" 
                        alt="postgresql-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Oracle SQL</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#ff9500] shadow-[#FF6900] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                        alt="firebase-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Firebase</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#d6295e] shadow-[#5e085b] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
                        alt="jest-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Jest</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#ba00ff] shadow-[#9927c3] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src={InsomniaLogo} 
                        alt="insomnia-logo"
                        className='w-20 mx-auto'
                        loading='lazy'
                    />
                    <p className='mt-4'>Insomnia</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#009dff] shadow-[#009dff] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg" 
                        alt="SQLite-logo"
                        className='w-20 mx-auto'
                        loading='lazy'
                    />
                    <p className='mt-4'>SQLite</p>
                </div>
            </div>

            {/* tools tech */}
            <div className="flex flex-col sm:flex-row items-center">
                <BsTools className="w-20 h-20 px-5"></BsTools>
                <p className="mb-2 sm:mr-2 sm:mb-0">TOOLS & IDEs</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12.5 sm:px-0'>
                <div className='shadow-md hover:scale-110 duration-500 py-4 px-4 rounded-xl dark:shadow-[#d6295e] shadow-[#b14e08] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        alt="jest-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Git Version Control</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-4 px-4 rounded-xl dark:shadow-[#084ff7] shadow-[#194dc4] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
                        alt="VSC-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Visual Studio Code</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-4 px-4 rounded-xl dark:shadow-[#48f708] shadow-[#2a531b] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src={CodeliteLogo} 
                        alt="Codelite-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Codelite</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-4 px-4 rounded-xl dark:shadow-[#f77008] shadow-[#2a531b] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" 
                        alt="Eclipse-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Eclipse IDE</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-4 px-4 rounded-xl dark:shadow-[#f7f308] shadow-[#53311b] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg" 
                        alt="Tomcat-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Tomcat</p>
                </div>
            </div>
            {/* <div className="flex flex-col sm:flex-row items-center">
                <GiBinoculars className="w-20 h-20 px-5"></GiBinoculars>
                <p className="mb-2 sm:mr-2 sm:mb-0">CURRENTLY EXPLORING</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12.5 sm:px-0'>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#00e5ff] shadow-[#005490] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src={CppLogo}
                        alt="Cplusplus-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>C++</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 py-2 rounded-xl dark:shadow-[#00ff3c] shadow-[#309000] dark:hover:text-pink-500 sm:py-2 sm:w-64 md:w-72'>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        alt="Python-logo"
                        className='w-20 mx-auto'
                    />
                    <p className='mt-4'>Python</p>
                </div>
            </div> */}
        </div>
    </div>
  )
}
