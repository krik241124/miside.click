"use client";

import React from "react";

const features = [
  {
    image: "https://cdn2.scratch.mit.edu/get_image/project/953846392_480x360.png",
    title: "Game 1",
    description: "Dive into the action-packed world of Game 1. Experience thrilling gameplay and unique challenges.",
    link: "/game/1",
  },
  {
    image: "https://cdn2.scratch.mit.edu/get_image/project/1036518952_480x360.png",
    title: "Game 2",
    description: "Discover the exciting adventures in Game 2. Perfect for gamers of all levels.",
    link: "/game/2",
  },
  {
    image: "https://cdn2.scratch.mit.edu/get_image/project/847675174_480x360.png",
    title: "Game 3",
    description: "Test your skills and strategy in the immersive Game 3 world.",
    link: "/game/3",
  },
  {
    image: "https://cdn2.scratch.mit.edu/get_image/project/1045230698_480x360.png",
    title: "Game 4",
    description: "Experience the fast-paced gameplay and challenges in Game 4.",
    link: "/game/4",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-600">Featured UBG76 Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={feature.image}
                alt={`Feature ${index + 1}`}
                className="w-full h-auto"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a
                  href={feature.link}
                  className="text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
