import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive architectural services including design, planning, interior design, and landscape architecture. Our team handles projects from initial concept to final construction."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A typical residential project might take 6-12 months from design to completion, while larger commercial projects can take 18-24 months."
    },
    {
      question: "Do you work internationally?",
      answer: "Yes, we have experience working on international projects and can accommodate clients worldwide through our remote design services and local partnerships."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-6 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-zinc-800">
              <button
                className="w-full flex justify-between items-center py-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-medium">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {openIndex === index && (
                <div className="pb-4 text-zinc-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;