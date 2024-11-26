"use client";

import { useRef } from "react";
import Link from "next/link";

export default function MovieGrid() {
  const gridRef = useRef(null);

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollLeft += 300; // Geser 300px ke kanan
    }
  };

  return (
    <div className="relative">
      <div
        className="movie-grid flex overflow-x-scroll scrollbar-hide gap-4"
        ref={gridRef}
      >
        {[...Array(9)].map((_, index) => (
          <Link key={index} href="/pages/movie-page-trailler" className="anchor">
            <div className="movie-item flex-shrink-0">
              <img
                src="https://via.placeholder.com/150x200"
                alt={`Movie ${index + 1}`}
                className="rounded-lg"
              />
              <div className="movie-title text-center font-bold mt-2">
                Movie Title {index % 2 + 1}
              </div>
              <div className="movie-description text-center text-gray-500">
                110 Menit
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Panah kanan */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-neutral-600 text-white rounded-full p-2 shadow-md hover:bg-neutral-600 focus:outline-none"
      >
        →
      </button>
    </div>
  );
}
