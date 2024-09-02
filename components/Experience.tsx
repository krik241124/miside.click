"use client";

import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const tweetIds = [
  "1830561513762869494", // YOLOv8 tweet 1
  "1830563666447720953", // YOLOv8 tweet 2
  "1830531258973057067"  // YOLOv8 tweet 3
];

const Experience = () => {
  return (
    <section className="py-12 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Latest Insights on YOLOv8</h2>
        <p className="mb-12 text-gray-700">Explore recent discussions and developments related to YOLOv8, including its capabilities for object detection and data visualization.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tweetIds.map((id, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <TwitterTweetEmbed tweetId={id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
