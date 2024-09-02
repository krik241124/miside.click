"use client";

import React from "react";
import { FaCut, FaRegImages, FaPalette, FaPrint } from "react-icons/fa";

const features = [
  {
    icon: <FaCut />,
    title: "Precision Background Removal",
    description: "Remove backgrounds with advanced precision, perfect for high-quality photo production."
  },
  {
    icon: <FaRegImages />,
    title: "Realistic Portrait Generation",
    description: "Generate lifelike portraits with stunning detail and accuracy."
  },
  {
    icon: <FaPalette />,
    title: "Customizable Backgrounds",
    description: "Tailor your backgrounds to meet the artistic needs of your project."
  },
  {
    icon: <FaPrint />,
    title: "Optimized Print Layouts",
    description: "Ensure your images are print-ready with optimized layouts."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-600">AWPortrait FL Features</h2>
        <p className="mb-12">Uncover the features that make AWPortrait FL the ultimate tool for realistic photo generation.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="text-5xl mb-4 text-blue-600">{feature.icon}</div>
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
