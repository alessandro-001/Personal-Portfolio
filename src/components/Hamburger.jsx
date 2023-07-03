import { useState } from "react";
import { FiMenu } from "react-icons/fi";


export default function Hamburger() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    
    <div className="fixed top-4 left-4 z-10">
  <div className="relative">
    <button
      className={`hamburger-icon ${isNavOpen ? "open" : ""} w-10 h-10 bg-transparent`}
      onClick={handleToggle}
      aria-label="Toggle menu"
    >
        <div className="dark:text-[#13ecd4] underline hover:text-pink-500 dark:hover:text-pink-500">
            <FiMenu style={{ width: '60px', height: '60px' }} />
        </div>
        </button>
    {isNavOpen && (
      <ul className="menu absolute top-full mt-2 left-0 bg-slate-900 text-white dark:bg-gray-400 dark:text-slate-900 shadow-md rounded-md p-2 font-semibold text-xl">
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about-me">Contact</a>
        </li>
      </ul>
    )}
  </div>
</div>

  );
}
