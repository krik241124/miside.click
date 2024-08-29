"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";

const links = [
  { href: "/wukong-story", label: "Story" },
  { href: "/wukong-gameplay", label: "Gameplay" },
  { href: "/wukong-characters", label: "Characters" },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-gray-900 shadow-sm py-4">
      <nav className="container flex items-center justify-between px-4 mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2" title={`${config.appName} homepage`}>
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <span className="font-bold text-base text-yellow-500">{config.appName}</span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-yellow-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Removed ButtonSignin and adjusted flex layout */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-yellow-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden mt-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-gray-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
