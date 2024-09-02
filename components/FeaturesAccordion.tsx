"use client";

import React from "react";
import { FaCut, FaRegImages, FaPalette, FaPrint } from "react-icons/fa";

const features = [
  {
    icon: <FaCut />,
    title: "Precision Object Detection",
    description: "Detect and track objects in real-time with high accuracy using YOLOv8's cutting-edge technology.",
  },
  {
    icon: <FaRegImages />,
    title: "Advanced Segmentation",
    description: "Segment objects within your video streams for detailed analysis and visualization.",
  },
  {
    icon: <FaPalette />,
    title: "Customizable Data Visualizations",
    description: "Generate tailored charts and graphs for better insight into detected objects and their attributes.",
  },
  {
    icon: <FaPrint />,
    title: "Seamless Integration",
    description: "Easily integrate YOLOv8 into your existing video analysis pipelines with optimized performance.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-600">YOLOv8 Features</h2>
        <p className="mb-12">Explore the powerful features that make YOLOv8 a leader in object detection and video analysis.</p>
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
