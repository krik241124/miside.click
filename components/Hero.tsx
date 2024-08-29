import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="bg-black py-24 relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://gmedia.playstation.com/is/image/SIEPDC/black-myth-wukong-hero-desktop-01-en-07feb24?$2400px$')" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(20,20,20,0.8)_0%,_rgba(0,0,0,0.5)_100%)]">
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Embark on the Journey of <span className="text-yellow-500">Black Myth: Wukong</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Immerse yourself in the world of mythical China with breathtaking graphics and challenging gameplay.
        </p>
        <Link href="https://store.steampowered.com/app/2358720/Black_Myth_Wukong/" className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
          Explore the World of Black Myth: Wukong
        </Link>
      </div>
    </div>
  );
};

export default Hero;
