import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="bg-gray-100 py-24 relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://pbs.twimg.com/media/GWY5Ws7a0AEOc34.jpg:large')" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.9)_0%,_rgba(240,240,240,0.6)_100%)]">
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Enhance Your <span className="text-blue-600">Photography</span> with AWPortrait FL
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Experience unprecedented realism and detail in your portrait creations with the latest Flux architecture technology.
        </p>
        <Link href="/id-photo-generation" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Discover AWPortrait FL
        </Link>
      </div>
    </div>
  );
};

export default Hero;
