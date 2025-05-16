
import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({} as Record<string, string>);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "AutoCAD",
    "Windows Server",
    "SQL Server",
    "VMware",
    "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    


    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';


    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    
    
    if (!formData.licenseType) {

      newErrors.licenseType = 'Please select a license type';
    }
    
    setErrors(newErrors);


    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    



    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      toast.success("Form submitted successfully! We'll be in touch soon.");
      


      setTimeout(() => {
        setFormData({
          
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-softsell-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 hover-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field ${errors.name ? 'border-red-500 ring-red-300' : ''}`}
                  placeholder="Your name"
                  disabled={isSubmitting || isSubmitted}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${errors.email ? 'border-red-500 ring-red-300' : ''}`}
                  placeholder="your.email@company.com"
                  disabled={isSubmitting || isSubmitted}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`input-field ${errors.company ? 'border-red-500 ring-red-300' : ''}`}
                  placeholder="Your company"
                  disabled={isSubmitting || isSubmitted}
                />
                {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
              </div>
              
              <div>
                <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 mb-1">License Type</label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`input-field ${errors.licenseType ? 'border-red-500 ring-red-300' : ''}`}
                  disabled={isSubmitting || isSubmitted}
                >
                  <option value="">Select license type</option>
                  {licenseTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Tell us about your software licenses..."
                  disabled={isSubmitting || isSubmitted}
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                className={`w-full btn-primary flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="mr-2" size={20} />
                    Submitted
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Submit Request
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
