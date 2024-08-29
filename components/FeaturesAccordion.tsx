"use client";

import React from "react";
import { FaDragon, FaFeatherAlt, FaMountain, FaBolt } from "react-icons/fa";

const features = [
  {
    icon: <FaDragon />,
    title: "Immersive Mythical World",
    description: "Black Myth: Wukong brings you into an ancient world filled with legendary creatures and epic battles, all rendered in stunning detail."
  },
  {
    icon: <FaFeatherAlt />,
    title: "Fluid Combat System",
    description: "Experience smooth and responsive combat mechanics, allowing you to unleash powerful combos and master Wukong's diverse abilities."
  },
  {
    icon: <FaMountain />,
    title: "Expansive Landscapes",
    description: "Explore vast and beautifully crafted environments, from towering mountains to mystical forests, each with its own unique challenges."
  },
  {
    icon: <FaBolt />,
    title: "Dynamic Weather Effects",
    description: "The game features realistic and dynamic weather effects that influence gameplay, adding an extra layer of immersion to your journey."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-500">Black Myth: Wukong Features</h2>
        <p className="mb-12">Delve into the world of Black Myth: Wukong and discover what makes it one of the most anticipated games of the decade.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
              <div className="text-5xl mb-4 text-yellow-500">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
