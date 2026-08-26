"use client";

import { useState } from "react";

interface VideoCardProps {
  src: string;
  name: string;
  description: string;
  clipPathStyle: string;
}

export default function VideoCard({ src, name, description, clipPathStyle }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {/* Video thumbnail — play on click */}
        <div
          className="relative aspect-[9/14] overflow-hidden cursor-pointer max-w-[300px] mx-auto"
          onClick={() => setIsOpen(true)}
        >
          <video
            src={src}
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-zac-yellow rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl ml-1">▶</span>
            </div>
          </div>
        </div>

        {/* Cikcak decoration */}
        <img
          src="/graficke-prvky/cikcak1 cerna.svg"
          alt=""
          className="absolute -bottom-4 -right-4 w-28 opacity-40 rotate-6 z-10"
          aria-hidden="true"
        />

        {/* Yellow card with name and description */}
        <div
          className="bg-zac-yellow px-6 py-6 -mt-4 relative z-10"
          style={{ clipPath: clipPathStyle }}
        >
          <img
            src="/graficke-prvky/cary cerna.svg"
            alt=""
            className="w-20 mb-2"
            aria-hidden="true"
          />
          <h3 className="text-xl font-bold text-black mb-2">{name}</h3>
          <p className="text-sm text-black font-medium leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Modal — fullscreen video with sound */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-zac-yellow transition-colors z-[110]"
            onClick={() => setIsOpen(false)}
            aria-label="Zavřít"
          >
            ✕
          </button>
          <video
            src={src}
            controls
            autoPlay
            playsInline
            className="max-h-[90vh] max-w-full rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
