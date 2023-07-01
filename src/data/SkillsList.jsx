import { HiAcademicCap } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import ExpoLogo from '../../src/assets/expo-go-app-logo.png'



export default [
    {
        title: 'Languages',
        description: 
            <div className="flex flex-row items-center gap-7">
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                        alt="javascript-logo"
                    />
                    <p className="text-xs text-center">JavaScript</p>
                </div>
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                        alt="typescript-logo"
                    />
                    <p className="text-xs text-center">TypeScript</p>
                </div>
            </div>,
        icon: <HiAcademicCap className="w-full h-full"></HiAcademicCap>
    },
    {
        title: 'Front-End',
        description: 
            <div className="flex flex-row items-center gap-7">
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="react-logo"
                    />
                    <p className="text-xs text-center">React</p>
                </div>
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="react-logo"
                    />
                    <p className="text-xs text-center">React-Native</p>
                </div>
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                        alt="html-logo"
                    />
                    <p className="text-xs text-center">HTML5</p>
                </div>
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                        alt="css-logo"
                    />
                    <p className="text-xs text-center">CSS3</p>
                </div>
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
                        alt="tailwindcss-logo"
                    />
                    <p className="text-xs text-center">Tailwind CSS</p>
                </div>
                <div className="w-20">
                    <img 
                        src={ExpoLogo}
                        alt="expo-go-logo"
                        className="w-20 h-20 mx-auto"
                    />
                    <p className="text-xs text-center">Expo</p>
                </div>
            </div>,
        icon: <AiOutlineStar className="w-full h-full"></AiOutlineStar>
    },
    {
        title: 'Back-End',
        description: 
            <div className="flex flex-row items-center gap-7">
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" 
                        alt="express-logo-js"
                    />
                    <p className="text-xs text-center">Express Js</p>
                </div>
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" 
                        alt="node-logo-js"
                    />
                    <p className="text-xs text-center">Node Js</p>
                </div>
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                        alt="postgresql-logo"
                    />
                    <p className="text-xs text-center">PostgreSQL</p>
                </div>
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                        alt="firebase-logo"
                    />
                    <p className="text-xs text-center">Firebase</p>
                </div>
                <div className="w-20">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
                        alt="jest-logo"
                    />
                    <p className="text-xs text-center">Jest x TDD</p>
                </div>
            </div>,
        icon: <AiFillDatabase className="w-full h-full"></AiFillDatabase>
    },
]