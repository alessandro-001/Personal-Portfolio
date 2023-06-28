import React, { useEffect, useState } from "react";
import MySection from "./components/MySection";


function App() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light'); 
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    function handleThemeSwitch() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
      <>
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="fixed z-10 right-2 top-2 bg-indigo-500 text-large p-1 rounded-md"
        >{theme === 'dark' ? '🌜' : '🌞'}</button>
        <div className="font-inter bg:white dark:bg-slate-900">
            <MySection />
        </div>
      </>
    )
}

export default App;