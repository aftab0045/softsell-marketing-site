
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Toggle } from './ui/toggle';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check for user's preferred color scheme or saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle between light and dark mode with animation
  const toggleTheme = () => {
    setIsAnimating(true);
    
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    
    setTimeout(() => {
      setIsDarkMode(!isDarkMode);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <Toggle 
      pressed={isDarkMode} 
      onPressedChange={toggleTheme} 
      aria-label="Toggle dark mode"
      className={`relative bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2 transition-all duration-300 ${
        isAnimating ? 'scale-90' : 'scale-100'
      }`}
    >
      <div className="relative">
        {isDarkMode ? (
          <Moon 
            size={18} 
            className={`text-yellow-400 transition-all duration-300 ${
              isAnimating ? 'rotate-[360deg] scale-110' : ''
            }`} 
          />
        ) : (
          <Sun 
            size={18} 
            className={`text-orange-400 transition-all duration-300 ${
              isAnimating ? 'rotate-[360deg] scale-110' : ''
            }`} 
          />
        )}
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-200">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </div>
    </Toggle>
  );
};

export default ThemeToggle;
