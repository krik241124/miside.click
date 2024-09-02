"use client";

import React from "react";

const faq = [
  {
    question: "What is HivisionIDPhotos?",
    answer: "HivisionIDPhotos is a professional tool for creating high-quality ID photos from your desktop or mobile device. It offers easy-to-use editing features and various printing options to ensure your photos meet official requirements."
  },
  {
    question: "How can I download the HivisionIDPhotos app?",
    answer: "You can download the HivisionIDPhotos app directly from our website. Visit the 'Download App' section to get started."
  },
  {
    question: "What platforms are supported by HivisionIDPhotos?",
    answer: "HivisionIDPhotos is available for both desktop and mobile platforms, ensuring you can create ID photos anytime, anywhere."
  },
  {
    question: "How do I get support if I encounter issues?",
    answer: "Our dedicated support team is ready to assist you. Visit the 'Contact Support' section on our website to reach out."
  },
  {
    question: "Can I customize the photo size and format?",
    answer: "Yes, HivisionIDPhotos allows you to customize the size and format of your ID photos, ensuring they meet specific requirements."
  },
  {
    question: "Are there any subscription fees for using HivisionIDPhotos?",
    answer: "HivisionIDPhotos offers a variety of pricing plans, including a free version with basic features and premium subscriptions for advanced tools."
  }
];

const FAQ = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faq.map((item, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
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
