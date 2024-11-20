"use client";

import React from "react";

const faq = [
  {
    question: "What is UBG76?",
    answer: "UBG76 is a gaming platform offering high-quality gaming experiences with a focus on speed, performance, and a sleek design."
  },
  {
    question: "How can I play games on UBG76?",
    answer: "Simply navigate to our Games section, choose your favorite game, and start playing instantly without any downloads or installations."
  },
  {
    question: "Is UBG76 free to use?",
    answer: "Yes, UBG76 provides free access to a wide variety of games. Some premium features may require additional subscriptions."
  },
  {
    question: "Can I play UBG76 games on mobile devices?",
    answer: "Absolutely! UBG76 is optimized for both desktop and mobile platforms, ensuring a seamless experience on any device."
  },
  {
    question: "How does UBG76 ensure data privacy?",
    answer: "We prioritize user privacy by implementing advanced encryption techniques and adhering to global data protection standards."
  },
  {
    question: "Are there multiplayer games available on UBG76?",
    answer: "Yes, UBG76 supports a variety of multiplayer games where you can connect and compete with players worldwide."
  },
  {
    question: "What browsers are supported by UBG76?",
    answer: "UBG76 works best on modern browsers such as Google Chrome, Firefox, Safari, and Microsoft Edge."
  },
  {
    question: "How do I report bugs or issues?",
    answer: "If you encounter any problems, please use our Contact Us form to submit a detailed report, and our team will address it promptly."
  },
  {
    question: "Does UBG76 have parental controls?",
    answer: "Yes, UBG76 provides parental control options to ensure a safe and secure gaming environment for younger players."
  },
  {
    question: "Can I customize my gaming experience on UBG76?",
    answer: "Yes, users can personalize settings like graphics, sound, and gameplay preferences for an enhanced gaming experience."
  },
];

const FAQ = () => {
  return (
    <section className="py-12 bg-ubg76-light text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-ubg76-gold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faq.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-ubg76-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-ubg76-gold">
                {item.question}
              </h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
