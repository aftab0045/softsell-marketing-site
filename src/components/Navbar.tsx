
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-softsell-blue text-white font-bold rounded p-1 text-xl">S</div>
            <span className="text-xl font-bold dark:text-white">SoftSell</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors">How It Works</a>
            <a href="#why-choose-us" className="text-gray-700 dark:text-gray-300 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors">Testimonials</a>
            <div className="relative group">
              <ThemeToggle />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Toggle theme
              </span>
            </div>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <div className="relative group">
              <ThemeToggle />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Toggle theme
              </span>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} className="dark:text-white" /> : <Menu size={24} className="dark:text-white" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 absolute top-full left-0 w-full shadow-md py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                className="text-gray-700 dark:text-gray-300 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#why-choose-us" 
                className="text-gray-700 dark:text-gray-300 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 dark:text-gray-300 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
