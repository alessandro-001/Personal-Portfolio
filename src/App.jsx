import React, { useEffect, useState } from "react";

//good code practices...
import Components from "./components"; 
// Now you can use the components individually:
const { MySection, Skills, Projects, About, Footer, Hamburger, Banner, Contact } = Components;

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
          className="fixed z-10 right-2 top-2  text-3xl p-1 rounded-md"
        >{theme === 'dark' ? '🌜' : '🌞'}</button>
        <div className="font-inter bg:white dark:bg-slate-900">
          <div>
            <Hamburger />
          </div>
          <div className="max-w-5xl mx-auto w-11/12">
            <Banner />
            <MySection />
            <Skills />
            <Projects />
            <About />
            <Contact />
            <Footer />
          </div>
        </div>
      </>
    )
}

export default App;