"use client";

import React from "react";

const faq = [
  {
    question: "What is Black Myth: Wukong?",
    answer: "Black Myth: Wukong is an upcoming action RPG inspired by the classic Chinese novel 'Journey to the West.' It features stunning graphics, intense combat, and a deep narrative rooted in Chinese mythology."
  },
  {
    question: "When is the release date for Black Myth: Wukong?",
    answer: "The release date for Black Myth: Wukong has not been officially announced yet, but it is highly anticipated by fans around the world."
  },
  {
    question: "On which platforms will Black Myth: Wukong be available?",
    answer: "Black Myth: Wukong is expected to be available on major platforms including PlayStation, Xbox, and PC."
  },
  {
    question: "What are the key features of Black Myth: Wukong?",
    answer: "Key features include fluid and dynamic combat, a variety of magical abilities inspired by Chinese folklore, and a richly detailed world filled with legendary creatures and epic boss battles."
  },
  {
    question: "Is there a demo available for Black Myth: Wukong?",
    answer: "As of now, there is no publicly available demo for Black Myth: Wukong. However, gameplay trailers and teasers have been released, showcasing the game's impressive visuals and mechanics."
  },
  {
    question: "What is the story behind Black Myth: Wukong?",
    answer: "The story follows the Monkey King, Sun Wukong, on his journey through a mythical land filled with gods, demons, and other fantastical creatures, drawing heavily from 'Journey to the West.'"
  },
  {
    question: "Will Black Myth: Wukong have multiplayer or co-op features?",
    answer: "The developers have not confirmed multiplayer or co-op features for Black Myth: Wukong. The game appears to be focused on a single-player experience."
  },
  {
    question: "Who is developing Black Myth: Wukong?",
    answer: "Black Myth: Wukong is being developed by Game Science, a Chinese indie studio known for its dedication to creating high-quality games with a deep cultural resonance."
  },
  {
    question: "How can I stay updated on Black Myth: Wukong?",
    answer: "You can follow the official social media channels of Game Science and Black Myth: Wukong, as well as keep an eye on gaming news websites for the latest updates."
  },
  {
    question: "Will Black Myth: Wukong feature traditional Chinese elements?",
    answer: "Yes, Black Myth: Wukong is heavily influenced by traditional Chinese culture and mythology, offering a unique blend of historical and fantastical elements."
  }
];

const FAQ = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faq.map((item, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
