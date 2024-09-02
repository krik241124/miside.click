import React from 'react';

const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
];

const Examples = () => {
  return (
    <section className="text-neutral-content py-8">
      <section className="bg-gray-900 text-gray-100 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-500 mb-4">Examples of ID Photos Created with HivisionIDPhotos</h1>
          <p className="text-lg mb-2">Check out these sample ID photos generated using our tool.</p>
          <a href="/gallery" className="text-yellow-500 underline">View More Examples</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                className="w-full h-64 md:h-80 rounded-lg shadow-lg"
                src={image}
                alt={`HivisionIDPhotos Example ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Examples;
