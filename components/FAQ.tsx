"use client";

import React from "react";

const faq = [
  {
    question: "What is AWPortrait FL?",
    answer: "AWPortrait FL is an advanced, realistic model based on the Flux architecture. It enhances compositional aesthetics and output details with significant improvements in realism."
  },
  {
    question: "How does AWPortrait FL differ from original Flux?",
    answer: "AWPortrait FL offers more refined and realistic details compared to the original Flux, making it a superior choice for photorealistic rendering."
  },
  {
    question: "Can I use AWPortrait FL for commercial projects?",
    answer: "Yes, AWPortrait FL is available for commercial use, provided you comply with the licensing terms outlined by Shakker-Labs."
  }
];

const FAQ = () => {
  return (
    <section className="py-12 bg-gray-50 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faq.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
