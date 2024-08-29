"use client";

import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const tweetIds = [
  "1825714369218388005",
  "1825351981042700461",
  "1825730252020371464",
  "1825841507322007948",
  "1820649285450649680",
  "1825777077192196265"
];

const Experience = () => {
  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">User Experiences with Black Myth: Wukong on X</h2>
        <p className="mb-12">Explore the latest user discussions and reactions to Black Myth: Wukong on X.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tweetIds.map((id, index) => (
            <div key={index} className="p-6 bg-gray-900 rounded-lg shadow-md">
              <TwitterTweetEmbed tweetId={id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
