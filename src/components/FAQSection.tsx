'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Which industries do you usually work with?",
    answer: "We've built solutions for retail, e-commerce, fuel stations, trading businesses, hospitality, and growing startups. Since every business has its own needs, we adapt our approach to fit the industry."
  },
  {
    question: "How do you keep your applications secure?",
    answer: "Security is built into every layer. We use encrypted databases, secure APIs, role-based permissions, and strict testing to ensure your data stays safe."
  },
  {
    question: "What's your approach to building custom software?",
    answer: "We begin by understanding your goals, move into wireframes and prototypes, then build in phases with constant feedback and thorough testing before launch."
  },
  {
    question: "Can your systems connect with the tools we already use?",
    answer: "Yes. We design integrations through APIs so your new solution works seamlessly with existing software like ERPs, CRMs, POS, or accounting systems."
  },
  {
    question: "Which technologies do you rely on?",
    answer: "We work with modern stacks like Flutter, Node.js, Supabase, PostgreSQL, and popular front-end frameworks. The tools are chosen based on what best fits your project's needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on the scope. A company website may take a few weeks, while a complete SaaS platform or mobile app can take several months. We share clear timelines upfront."
  },
  {
    question: "Do you provide support after launch?",
    answer: "Absolutely. We handle updates, bug fixes, monitoring, and scaling. Think of us as a long-term tech partner, not just a one-time vendor."
  },
  {
    question: "How do you make sure your solutions can grow with our business?",
    answer: "We use cloud-ready infrastructure, modular code, and scalable databases so your software can handle more users, data, and features as your business expands."
  },
  {
    question: "Do you only focus on development, or also guide business strategy?",
    answer: "Along with writing code, we help clients choose the right digital tools, refine processes, and align technology with their business goals."
  },
  {
    question: "How can we start working with you?",
    answer: "You can book a free consultation through our site. We'll discuss your requirements, suggest the right approach, and guide you through the next steps."
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
