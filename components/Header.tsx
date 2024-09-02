"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png"; // Replace with the YOLOv8 logo or another relevant image
import config from "@/config";

const links = [
  { href: "/object-detection", label: "Object Detection" },
  { href: "/data-visualization", label: "Data Visualization" },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container flex items-center justify-between px-4 mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2" title={`${config.appName} homepage`}>
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-10 h-10"
              width={40}
              height={40}
            />
            <span className="font-bold text-lg text-gray-800">{config.appName}</span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden mt-4">
          <div className="px-4 pt-4 pb-3 space-y-2 bg-gray-50">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
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
