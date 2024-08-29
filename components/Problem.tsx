import React from 'react';

const videos = [
  'https://www.youtube.com/embed/GIV7aN9cQYY',
  'https://www.youtube.com/embed/3CWq2sHmfhs',
  'https://www.youtube.com/embed/a69sy_ZbmQ8',
  'https://www.youtube.com/embed/Cr5rQ1NZ0Tw',
];

const Examples = () => {
  return (
    <section className="text-neutral-content py-8">
      <section className="bg-gray-900 text-gray-100 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-500 mb-4">Epic Battles in Black Myth: Wukong</h1>
          <p className="text-lg mb-2">Experience the most thrilling moments from Black Myth: Wukong</p>
          <a href="https://store.epicgames.com/en-US/p/black-myth-wukong-87a72b" className="text-yellow-500 underline">Watch More Epic Battles</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="relative">
              <iframe
                className="w-full h-64 md:h-80 rounded-lg shadow-lg"
                src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Black Myth: Wukong Video ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Examples;
