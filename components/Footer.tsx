"use client";

import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg text-yellow-500">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-gray-400">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
            <p className="mt-1 text-sm text-gray-600">
              support@hivisionidphotos.com
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-gray-300 tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/id-photo-generation" className="link link-hover text-gray-400 hover:text-yellow-500">
                  id-photo-generation
                </Link>
                <Link href="/background-removal" className="link link-hover text-gray-400 hover:text-yellow-500">
                  background-removal
                </Link>
                <Link href="/six-inch-photo-layout" className="link link-hover text-gray-400 hover:text-yellow-500">
                  six-inch-photo-layout
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-gray-300 tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover text-gray-400 hover:text-yellow-500">
                  Terms of Service
                </Link>
                <Link href="/privacy-policy" className="link link-hover text-gray-400 hover:text-yellow-500">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
