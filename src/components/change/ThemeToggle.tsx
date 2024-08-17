'use client';
import React, {useState, useEffect, FC} from 'react';
import './theme-toggle.css'

const ThemeToggle: FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full transition duration-300 ease-in-out">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;
