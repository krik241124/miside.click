"use client";

import React from "react";

const steps = [
  {
    number: "1",
    title: "Visit the Official Website",
    description: "Start your journey by visiting the official Black Myth: Wukong website for the latest updates and trailers.",
    linkText: "Go to Official Website",
    linkUrl: "https://www.heishenhua.com"
  },
  {
    number: "2",
    title: "Explore Game Features",
    description: "Dive into the game’s key features, learn about Wukong's abilities, and explore the vast mythical landscapes.",
    imageUrl: "/test.jpg", // Replace with the actual image path
    altText: "Game Features"
  },
  {
    number: "3",
    title: "Purchase the Game",
    description: "Ready to experience Black Myth: Wukong? Purchase the game on Steam and begin your epic adventure.",
    linkText: "Buy on Steam",
    linkUrl: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/"
  }
];

const Steps = () => {
  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-500">How to Get Started with Black Myth: Wukong</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-yellow-500 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="mb-4">{step.description}</p>
              {step.linkText && (
                <a href={step.linkUrl} className="text-yellow-500 underline">
                  {step.linkText}
                </a>
              )}
              {step.imageUrl && (
                <img src={step.imageUrl} alt={step.altText} className="mx-auto mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
