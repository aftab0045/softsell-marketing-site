
import { Award, Shield, FastForward, Headset } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={28} />,
      title: "Competitive Offers",
      description: "We guarantee the best market rates for your software licenses"
    },
    {
      icon: <Shield size={28} />,
      title: "Secure Transactions",
      description: "End-to-end encryption and secure payment processing"
    },
    {
      icon: <FastForward size={28} />,
      title: "Fast Processing",
      description: "Get paid within 48 hours of accepting our offer"
    },
    {
      icon: <Headset size={28} />,
      title: "Expert Support",
      description: "Dedicated specialists available to help at every step"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-softsell-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-100 rounded-full text-softsell-blue group-hover:bg-softsell-blue group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
