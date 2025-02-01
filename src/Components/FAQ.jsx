import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Webflow and why is it the best website builder?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-0.25">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 w-full mx-4 md:mx-auto">
          <div className="bg-gray-100 rounded-lg py-[17px] px-[20px] transition-all duration-200">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className={`text-base md:text-lg font-medium pr-4 ${
                activeIndex === index ? 'text-[#4F46E5]' : 'text-[#000000]'
              }`}>
                {faq.question}
              </h3>
              <span className={`text-xl font-semibold ${
                activeIndex === index ? 'text-[#4F46E5]' : 'text-[#000000]'
              }`}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index 
                ? 'max-h-[500px] opacity-100 pt-4'
                : 'max-h-0 opacity-0'
            }`}>
              <p className="text-sm md:text-base text-[#6F6C90] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;