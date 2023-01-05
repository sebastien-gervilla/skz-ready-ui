import { useEffect, useState } from "react";

export default function useTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    useEffect(() => {
        setTheme(isDarkMode);
    },  [isDarkMode]);

    return { isDark: isDarkMode, toggle: toggleDarkMode };
}

const setTheme = (isDark) => {
    const html = document.documentElement;
    const mode = isDark ? 'dark' : 'light';
    html.setAttribute('data-theme', mode);
}