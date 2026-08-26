"use client";

import { useRef, useEffect, useState } from "react";

interface GridVideoProps {
  src: string;
  className?: string;
}

export default function GridVideo({ src, className = "" }: GridVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={`overflow-hidden break-inside-avoid cursor-pointer relative group ${className}`} onClick={() => setIsOpen(true)}>
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 bg-zac-yellow rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-sm ml-0.5">▶</span>
          </div>
        </div>
      </div>

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
