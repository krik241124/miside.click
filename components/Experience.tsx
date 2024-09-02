"use client";

import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const tweetIds = [
  "1830213371540693320", // dynamicwangs
  "1830219535305318412"  // Datou
];

const Experience = () => {
  return (
    <section className="py-12 bg-white text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">User Experiences with AWPortrait FL on X</h2>
        <p className="mb-12 text-gray-600">Discover the latest user reactions and feedback on AWPortrait FL.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tweetIds.map((id, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <TwitterTweetEmbed tweetId={id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
