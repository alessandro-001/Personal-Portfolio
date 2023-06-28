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

    return (
        <div className="font-inter bg:white dark:bg-slate-900">
            <MySection />
        </div>
    )
}

export default App;