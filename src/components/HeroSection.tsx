
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (

    <section className="relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in dark:text-white">
              Sell Your Software <span className="text-softsell-blue dark:text-softsell-lightBlue">Licenses</span> Easily
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Turn your unused software licenses into cash quickly and hassle-free.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#contact" 
                
                className="btn-primary inline-flex items-center group"
              >
                Sell My Licenses
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full z-0"></div>
              <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover-shadow">
                <div className="text-center mb-6">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                    <svg className="w-10 h-10 text-softsell-blue dark:text-softsell-lightBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Instant Valuation</h3>
                  <p className="text-gray-500 dark:text-gray-400">Get an immediate quote for your software licenses</p>
                </div>
                <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Average Payout</p>
                    <p className="text-lg font-bold text-softsell-blue dark:text-softsell-lightBlue">$1,200 - $5,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Processing Time</p>
                    <p className="text-lg font-bold text-softsell-blue dark:text-softsell-lightBlue">24-48 hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
