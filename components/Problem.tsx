import React from 'react';

const images = [
  '/1.jpg',
];

const Examples = () => {
  return (
    <section className="text-gray-800 py-8">
      <section className="bg-white text-gray-800 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Examples of AWPortrait FL</h1>
          <p className="text-lg mb-2">Explore the fine details and realism in our sample images.</p>
          <a href="/gallery" className="text-blue-600 underline">View More Examples</a>
        </div>
        <div className="flex justify-center">
          {images.map((image, index) => (
            <div key={index} className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 relative">
              <img
                className="w-full h-auto rounded-lg shadow-md"
                src={image}
                alt={`AWPortrait FL Example ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Examples;