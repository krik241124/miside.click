"use client";

import React from "react";

const games = [
  {
    name: "NormanTheGamer",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/953846392_480x360.png",
    author: "NormanTheGamer",
  },
  {
    name: "Brawl Stars",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/1036518952_480x360.png",
    author: "NormanTheGamer",
  },
  {
    name: "Geometry Dash",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/847675174_480x360.png",
    author: "CharlotteCantCode",
  },
  {
    name: "Stickman Run",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/1045230698_480x360.png",
    author: "korea9803",
  },
  {
    name: "Spin Simulator",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/612480024_480x360.png",
    author: "aspectsvg",
  },
  {
    name: "Bouncing My Way Up",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/845220709_480x360.png",
    author: "alexandretherrien",
  },
  {
    name: "No Internet Dino Game",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/1029862013_480x360.png",
    author: "Popcorn_gamer_7",
  },
  {
    name: "Ice Bird",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/1012918268_480x360.png",
    author: "Cool_ScratcherDude",
  },
  {
    name: "Minecraft",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/1034300804_480x360.png",
    author: "NotSoTerribleGames",
  },
  {
    name: "Geometry Dash Platformer",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/965649234_480x360.png",
    author: "-SoccerGames-",
  },
  {
    name: "Scratch Cat NINJA Speedrun Adventure",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/882539494_480x360.png",
    author: "Snowball-10",
  },
  {
    name: "Waves",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/604109939_480x360.png",
    author: "aspectsvg",
  },
  {
    name: "Emerald Hunt",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/1022723321_480x360.png",
    author: "UnaPrimavera",
  },
  {
    name: "Minecraft",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/1000001730_480x360.png",
    author: "TerribleGames123",
  },
  {
    name: "Roblox",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/1031822866_480x360.png",
    author: "RobloxDevlog",
  },
  {
    name: "Flying Cat",
    thumbnail: "https://cdn2.scratch.mit.edu/get_image/project/1033240391_480x360.png",
    author: "snail-jail",
  },
];

const GameGrid = () => {
  return (
    <section className="py-12 bg-ubg76-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-ubg76-yellow mb-6">
          Featured Games
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {games.map((game, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <a
                href={`/games/${game.name.replace(/\s+/g, "-").toLowerCase()}`}
                className="block"
              >
                <img
                  src={game.thumbnail}
                  alt={game.name}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800 truncate">
                    {game.name}
                  </h3>
                  <p className="text-xs text-gray-500">By {game.author}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
