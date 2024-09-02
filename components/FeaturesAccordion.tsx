"use client";

import React from "react";
import { FaCut, FaRegImages, FaPalette, FaPrint } from "react-icons/fa";

const features = [
  {
    icon: <FaCut />,
    title: "Precision Background Removal",
    description: "Easily remove backgrounds from your photos with pinpoint accuracy, ensuring clean and professional ID photos."
  },
  {
    icon: <FaRegImages />,
    title: "Generate Standard ID Photos",
    description: "Create ID photos that meet the exact specifications for passports, visas, and other official documents."
  },
  {
    icon: <FaPalette />,
    title: "Customizable Backgrounds",
    description: "Change or customize the background color of your ID photos to meet specific requirements."
  },
  {
    icon: <FaPrint />,
    title: "Six-Inch Compositions",
    description: "Arrange multiple ID photos on a single six-inch sheet for easy printing and distribution."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-500">HivisionIDPhotos Features</h2>
        <p className="mb-12">Discover the powerful features that make HivisionIDPhotos your go-to tool for creating professional ID photos.</p>
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
