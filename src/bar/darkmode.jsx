import { useState, useEffect } from "react";

export default function Dark() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="bg-white dark:bg-black">
            <button className="bg-green-200 p-4 rounded-3xl" onClick={handleThemeSwitch}>
                Dark Mode
            </button>
        </div>
    );
}