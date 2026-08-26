"use client";

import { useState } from "react";
import Image from "next/image";
import GridVideo from "./GridVideo";

interface GalleryItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface GalleryCarouselProps {
  images: (string | GalleryItem)[];
}

function normalize(item: string | GalleryItem): GalleryItem {
  return typeof item === "string" ? { type: "image", src: item } : item;
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const items = images.map(normalize);
  const [current, setCurrent] = useState(0);

  const maxIndex = Math.max(0, items.length - 2);

  const prev = () => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 2));
  };

  const next = () => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 2));
  };

  return (
    <div className="relative overflow-x-hidden overflow-y-visible lg:max-w-[60%] mx-auto">
      {/* Sliding track */}
      <div
        className="flex gap-6 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(calc(-${current} * (50% + 0.75rem)))`,
        }}
      >
        {items.map((item, i) =>
          item.type === "video" ? (
            <div key={i} className="w-[calc(50%-0.75rem)] shrink-0 md:w-[calc(50%-0.75rem)] aspect-[9/16]">
              <GridVideo src={item.src} className="aspect-[9/16]" />
            </div>
          ) : (
            <div key={i} className="w-[calc(50%-0.75rem)] shrink-0 md:w-[calc(50%-0.75rem)]">
              <Image
                src={item.src}
                alt={item.alt ?? `Galerie ${i + 1}`}
                width={700}
                height={460}
                className="w-full h-auto object-cover"
              />
            </div>
          )
        )}
      </div>

      {/* Navigation — angular shape */}
      <div className="absolute bottom-1 right-2 md:bottom-4 md:right-8 z-20">
        <div
          className="bg-white flex items-center gap-2 px-3 py-1.5 md:gap-5 md:px-8 md:py-5"
          style={{
            clipPath: "polygon(8% 3%, 100% 0%, 92% 94%, 0% 100%)",
          }}
        >
          <button
            onClick={prev}
            className="text-zac-yellow hover:text-zac-red transition-colors text-3xl md:text-6xl font-black px-1"
            aria-label="Předchozí"
          >
            &lsaquo;
          </button>
          <button
            onClick={next}
            className="text-zac-yellow hover:text-zac-red transition-colors text-3xl md:text-6xl font-black px-1"
            aria-label="Další"
          >
            &rsaquo;
          </button>
        </div>
      </div>
    </div>
  );
}
