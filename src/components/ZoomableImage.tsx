"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Obrázek, který se po kliknutí otevře přes celou obrazovku.
 *
 * Prohlížeč má dva stavy:
 *  1. „celý obrázek" (výchozí) — vejde se na obrazovku, člověk hned vidí, co to je
 *  2. „přiblíženo"  — skutečná velikost, dá se posouvat prstem
 * Klepnutí na obrázek mezi nimi přepíná. Bez toho by se na telefonu otevřel rovnou
 * ve skutečné velikosti a byl by vidět jen levý okraj.
 */
export default function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setIsZoomed(false);
  }, []);

  // Zamkni rolování stránky, dokud je prohlížeč otevřený, a zavírej Escapem
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  // Po přiblížení odroluj doprostřed obrázku, ať člověk nezačíná na levém okraji
  useEffect(() => {
    const box = scrollRef.current;
    if (!isZoomed || !box) return;
    box.scrollLeft = (box.scrollWidth - box.clientWidth) / 2;
    box.scrollTop = (box.scrollHeight - box.clientHeight) / 2;
  }, [isZoomed]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`group relative block cursor-zoom-in ${className ?? ""}`}
        aria-label={`${alt} — kliknutím zvětšit`}
      >
        <img src={src} alt={alt} className="w-full h-auto shadow-xl" />

        <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 bg-zac-yellow text-black text-xs font-bold px-3 py-2 shadow-lg">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" stroke="black" strokeWidth="2" />
            <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <line x1="10.5" y1="7.5" x2="10.5" y2="13.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <line x1="7.5" y1="10.5" x2="13.5" y2="10.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          zvětšit
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col">
          {/* Lišta se zavíracím tlačítkem */}
          <div className="flex items-center justify-between gap-4 px-4 py-3 shrink-0">
            <p className="text-white/70 text-xs md:text-sm font-medium">
              {isZoomed
                ? "Klepnutím zmenšíte · obrázek posunete prstem"
                : "Klepnutím na obrázek přiblížíte"}
            </p>
            <button
              type="button"
              className="w-10 h-10 shrink-0 flex items-center justify-center bg-zac-yellow text-black text-xl font-bold"
              onClick={close}
              aria-label="Zavřít"
            >
              ✕
            </button>
          </div>

          {/* Plocha s obrázkem */}
          <div
            ref={scrollRef}
            className={`flex-1 min-h-0 overscroll-contain ${
              isZoomed ? "overflow-auto touch-pinch-zoom" : "overflow-hidden flex items-center justify-center p-3"
            }`}
            onClick={close}
          >
            <img
              src={src}
              alt={alt}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed((v) => !v);
              }}
              className={
                isZoomed
                  ? "max-w-none w-[1654px] h-auto cursor-zoom-out"
                  : "max-w-full max-h-full object-contain cursor-zoom-in"
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
