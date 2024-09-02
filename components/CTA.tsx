"use client";

import React from "react";

const steps = [
  {
    number: "1",
    title: "Visit the Official Website",
    description: "Start by visiting the AWPortrait FL official website for the latest updates and features.",
    linkText: "Go to Official Website",
    linkUrl: "https://huggingface.co/Shakker-Labs/AWPortrait-FL"
  },
  {
    number: "2",
    title: "Explore the Features",
    description: "Learn about the advanced features of AWPortrait FL, including background removal and portrait generation.",
    linkText: "Explore Features",
    linkUrl: "https://huggingface.co/Shakker-Labs/AWPortrait-FL"
  },
  {
    number: "3",
    title: "Get the Model",
    description: "Download AWPortrait FL and start creating lifelike portraits with unmatched realism.",
    linkText: "Download Model",
    linkUrl: "https://huggingface.co/Shakker-Labs/AWPortrait-FL"
  },
  {
    number: "4",
    title: "Contact Support",
    description: "Need help? Reach out to our support team for assistance.",
  }
];

const Steps = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-600">Get Started with AWPortrait FL</h2>
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
