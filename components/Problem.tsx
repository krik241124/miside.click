import React from 'react';

const media = [
  '/X2Twitter.com_1767127397638254592720p.mp4', // Video or image from the link provided
];

const Examples = () => {
  return (
    <section className="text-gray-800 py-8">
      <section className="bg-white text-gray-800 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Examples of YOLOv8 in Action</h1>
          <p className="text-lg mb-2">Explore object detection, tracking, and segmentation in our sample media.</p>
          <a href="/gallery" className="text-blue-600 underline">View More Examples</a>
        </div>
        <div className="flex flex-col items-center space-y-6">
          {media.map((item, index) => (
            <div key={index} className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 relative">
              {item.endsWith('.mp4') ? (
                <video
                  className="w-full h-auto rounded-lg shadow-md"
                  controls
                  src={item}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  className="w-full h-auto rounded-lg shadow-md"
                  src={item}
                  alt={`YOLOv8 Example ${index + 1}`}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Examples;
