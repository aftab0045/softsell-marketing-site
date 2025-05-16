
import { Upload, FileSearch, DollarSign } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload size={32} />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal"

    },

    {
      icon: <FileSearch size={32} />,
      title: "Get Valuation",

      description: "Receive a fair and competitive valuation based on market demand"
    },
    {
      icon: <DollarSign size={32} />,
      title: "Get Paid",
      description: "Accept the offer and get paid quickly via your preferred method"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative hover-scale">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10 transform -translate-x-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1 rotate-45 w-3 h-3 border-t-2 border-r-2 border-gray-200 dark:border-gray-700"></div>
                </div>
              )}
              
              <div className="text-center">
                <div className="icon-container">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
