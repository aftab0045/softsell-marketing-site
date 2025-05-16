
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-softsell-blue text-white font-bold rounded p-1 text-xl">S</div>
              <span className="text-xl font-bold">SoftSell</span>
            </div>
            <p className="text-gray-400 mb-4">
              The easiest way to sell your unused software licenses for the best market rates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>

            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">License Valuation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Software Resale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bulk License Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-softsell-blue flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Tech Street, San Francisco, CA 94107, USA</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-softsell-blue flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-softsell-blue flex-shrink-0" />
                <span className="text-gray-400">info@softsell.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} SoftSell. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm mr-4">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
