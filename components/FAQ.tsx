"use client";

import React from "react";

const faq = [
  {
    question: "What is YOLOv8?",
    answer: "YOLOv8 (You Only Look Once version 8) is a state-of-the-art object detection algorithm that excels in real-time video analysis, object tracking, and segmentation."
  },
  {
    question: "How does YOLOv8 improve upon previous versions?",
    answer: "YOLOv8 introduces enhanced accuracy and speed, improved object detection, and better handling of complex scenarios with advanced data visualization capabilities."
  },
  {
    question: "Can YOLOv8 be used for commercial projects?",
    answer: "Yes, YOLOv8 can be used for commercial purposes under the licensing terms provided by its developers. Ensure you review and comply with the relevant guidelines."
  }
];

const FAQ = () => {
  return (
    <section className="py-12 bg-gray-50 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions about YOLOv8</h2>
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
