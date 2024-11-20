"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="bg-black py-24 relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://xvpn.io/wp-content/uploads/2024/01/3efa42b35ff3da684fc203bc7e33b156.jpeg')" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.6)_100%)]">
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Enter the World of <span className="text-cyan-400">UBG76 Gaming</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Dive into a world of adrenaline-fueled action with cutting-edge graphics and gameplay.
        </p>
        <Link href="#Problem" className="bg-cyan-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-cyan-300 transition duration-300">
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
