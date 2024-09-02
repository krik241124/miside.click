import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="bg-black py-24 relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://pbs.twimg.com/media/GWUAoUvaoAE6VBu?format=jpg&name=small')" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(20,20,20,0.8)_0%,_rgba(0,0,0,0.5)_100%)]">
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Create Perfect <span className="text-yellow-500">ID Photos</span> with HivisionIDPhotos
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Generate professional ID photos with ease, customize backgrounds, and get ready for printing.
        </p>
        <Link href="/id-photo-generation" className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
          Start Creating Your ID Photos
        </Link>
      </div>
    </div>
  );
};

export default Hero;
