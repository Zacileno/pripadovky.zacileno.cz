"use client";

import { useState } from "react";
import Image from "next/image";

interface TabSlide {
  label: string;
  images: string[];
  description: string;
}

interface TabCarouselProps {
  tabs: TabSlide[];
}

export default function TabCarousel({ tabs }: TabCarouselProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tab = tabs[activeTab];

  const prev = () => setActiveTab((c) => (c === 0 ? tabs.length - 1 : c - 1));
  const next = () => setActiveTab((c) => (c === tabs.length - 1 ? 0 : c + 1));

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActiveTab(i)}
            className={`relative px-5 py-2 text-sm md:text-base font-bold transition-colors ${
              i === activeTab ? "text-black" : "text-gray-500 hover:text-black"
            }`}
          >
            {t.label}
            {i === activeTab && (
              <img
                src="/graficke-prvky/tvar4.svg"
                alt=""
                className="absolute inset-0 w-full h-full -z-10 object-fill"
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>

      {/* Image carousel with slide effect */}
      <div className="relative mb-8">
        <img
          src="/graficke-prvky/blesk2 zluta.svg"
          alt=""
          className="absolute -top-4 right-[15%] w-10 z-20 hidden md:block"
          aria-hidden="true"
        />

        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="shrink-0 text-zac-yellow hover:text-zac-red transition-colors text-[2.9rem] font-black"
            aria-label="Předchozí"
          >
            &lsaquo;
          </button>

          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeTab * 100}%)`,
              }}
            >
              {tabs.map((t, i) => (
                <div key={t.label} className="w-full shrink-0 flex justify-center">
                  <Image
                    src={t.images[0]}
                    alt={t.label}
                    width={560}
                    height={350}
                    className="w-[50%] h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="shrink-0 text-zac-yellow hover:text-zac-red transition-colors text-[2.9rem] font-black"
            aria-label="Další"
          >
            &rsaquo;
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-base md:text-lg text-black font-medium leading-relaxed text-center max-w-2xl mx-auto">
        {tab.description}
      </p>
    </div>
  );
}
