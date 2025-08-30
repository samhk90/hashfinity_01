'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    question: "Can I change my plan later?",
    answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional information to your invoices. Contact our support team to set up custom fields."
  },
  {
    question: "How does billing work?",
    answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."
  },
  {
    question: "How do I change my account email?",
    answer: "You can change the email address associated with your account at any time in your account settings."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faqs' className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-blue-600 font-medium">
            Everything you need to know about the product and billing.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base sm:text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
