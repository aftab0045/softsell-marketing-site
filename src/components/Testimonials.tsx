
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SoftSell made the process of selling our licenses extremely simple. The valuation was fair and payment was quick.",
      name: "Sarah Johnson",
      role: "IT Manager",
      company: "TechCorp Inc.",
      stars: 5
    },
    {
      quote: "Great service and fast payouts. Highly recommended for any company looking to monetize their unused software licenses!",
      name: "Mark Davis",
      role: "CTO",
      company: "Innovative Solutions"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < (testimonial.stars || 5) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="bg-blue-100 text-softsell-blue rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
