"use client";

import React from "react";

const steps = [
  {
    number: "1",
    title: "Understand YOLOv8",
    description: "Learn the fundamentals of YOLOv8 and how it can enhance your video analysis workflows.",
    linkText: "Learn More",
    linkUrl: "https://t.co/sOwMQec5KB",
  },
  {
    number: "2",
    title: "Set Up Your Environment",
    description: "Get started by setting up the necessary tools and environment to use YOLOv8 effectively.",
    linkText: "Set Up Guide",
    linkUrl: "https://t.co/sOwMQec5KB",
  },
  {
    number: "3",
    title: "Implement Object Detection",
    description: "Integrate YOLOv8 into your projects to start detecting and analyzing objects in real-time.",
    linkText: "Implementation Guide",
    linkUrl: "https://t.co/sOwMQec5KB",
  },
  {
    number: "4",
    title: "Analyze and Visualize Data",
    description: "Leverage powerful data visualization tools to gain deeper insights into your video data.",
  },
];

const Steps = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-600">Get Started with YOLOv8</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="mb-4">{step.description}</p>
              {step.linkText && (
                <a
                  href={step.linkUrl}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {step.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
