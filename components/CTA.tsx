"use client";

import React from "react";

const steps = [
  {
    number: "1",
    title: "Visit the Official Website",
    description: "Start your journey by visiting the official HivisionIDPhotos website for the latest updates and features.",
    linkText: "Go to Official Website",
    linkUrl: "https://swanhub.co/ZeYiLin/HivisionIDPhotos/demo"
  },
  {
    number: "2",
    title: "Explore the Features",
    description: "Learn about the advanced features of HivisionIDPhotos, including background removal, photo generation, and printing options.",
    linkText: "Explore Features",
    linkUrl: "https://swanhub.co/ZeYiLin/HivisionIDPhotos/demo"
  },
  {
    number: "3",
    title: "Get the App",
    description: "Download the HivisionIDPhotos app and start creating professional ID photos from your desktop or mobile device.",
    linkText: "Download App",
    linkUrl: "https://swanhub.co/ZeYiLin/HivisionIDPhotos/demo"
  },
  {
    number: "4",
    title: "Contact Support",
    description: "If you need help or have questions, reach out to our dedicated support team for assistance.",
  }
];

const Steps = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-yellow-500">Get Started with HivisionIDPhotos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-8 bg-gray-800 rounded-lg shadow-md">
              <span className="text-5xl font-bold text-yellow-500 mb-4 block">{step.number}</span>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="mb-4">{step.description}</p>
              <a href={step.linkUrl} className="text-yellow-500 underline">
                {step.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
