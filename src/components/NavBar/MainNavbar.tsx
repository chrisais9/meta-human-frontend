import React from "react";

export default function MainNavbar() {
  return (
    <nav className="container flex justify-between px-4 py-8 mx-auto bg-white">
      <div>
        <h3 className="text-2xl font-medium text-blue-500">META-HUMAN</h3>
      </div>
      <div className="hidden lg:flex space-x-8 ">
        <a href="/">Home</a>
        <a href="/mint">Buy</a>
        <a href="/gallery">Gallery</a>
        <a href="/team">Team</a>
        <a href="/roadmap">Roadmap</a>
      </div>
      <div className="flex lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  );
}
