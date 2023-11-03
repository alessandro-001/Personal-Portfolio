import React, { useEffect, useState, lazy, Suspense } from "react";
import MySection from "./components/MySection";
import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";
import Contact from "./components/Contact";
import CurriculumDownload from "./components/CurriculumDownload";
//lazy loadings:
const NewSkillsList = lazy (() => import("./data/NewSkillsList"));
const Banner = lazy(() => import("./components/Banner"));
const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));

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
        >{theme === 'dark' ? '🌞' : '🌜'}</button>
        <div className="font-inter bg-[#fff0e5] dark:bg-slate-900">
          <div>
            <Hamburger />
          </div>
          <div className="max-w-5xl mx-auto w-11/12">
            <Suspense fallback={<div>Loading...</div>}>
              <Banner />
            </Suspense>
            <MySection />
            <Suspense fallback={<div>Loading...</div>}>
              <NewSkillsList />
              <Projects />
              <About />
            </Suspense>
            <CurriculumDownload />
            <Contact />
            <Footer />
          </div>
        </div>
      </>
    )
}

export default App;