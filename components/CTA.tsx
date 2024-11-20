"use client";

import React from "react";

const steps = [
  {
    title: "Discover Unblocked Games 76",
    description:
      "Welcome to T1 game publisher at ubg76.top. Enjoy playing your favorite casual games anywhere, including the classroom, office, or home.",
    icon: "🎮",
  },
  {
    title: "Explore Diverse Game Genres",
    description:
      "Experience top titles like Roblox, Minecraft, Shell Shockers, Slope, and Basketball Stars. Our HTML5 browser games list has something for everyone.",
    icon: "🕹️",
  },
  {
    title: "User-Friendly Design",
    description:
      "Navigate with ease and find the games you love without hassle. Unblocked Games 76 is designed to make discovering and playing games as smooth as possible.",
    icon: "✨",
  },
  {
    title: "Play Anytime, Anywhere",
    description:
      "Access a wide range of games on any device without downloads. Dive into engaging puzzle, strategy, parkour, or popular browser games whenever you like.",
    icon: "🌐",
  },
];

const Steps = () => {
  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">
          How to Enjoy Unblocked Games 76
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-700">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
