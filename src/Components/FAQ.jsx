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
    <div className="faq-container p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item mb-4">
          <div
            className={`faq-question cursor-pointer text-lg font-medium ${activeIndex === index ? 'text-[#4F46E5]' : 'text-[#6F6C90]'}`}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="faq-toggle ml-2">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer mt-2 ${activeIndex === index ? 'block' : 'hidden'} text-gray-600`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
