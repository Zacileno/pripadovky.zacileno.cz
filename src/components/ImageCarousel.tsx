"use client";

import Image from "next/image";
import GridVideo from "./GridVideo";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  aspect?: string;
  span?: boolean;
}

interface SideContent {
  label: string;
  text: string;
  media: MediaItem[];
  layout?: "single" | "masonry" | "scatter";
  compact?: boolean;
  groupMaxWidth?: string;
}

interface Slide {
  title: string;
  before: SideContent;
  after: SideContent;
  mediaGridClass?: string;
}

interface ImageCarouselProps {
  slide: Slide;
  index: number;
  total: number;
}

const blockId = (i: number) => `carousel-block-${i}`;

const scatterTransforms = [
  "-rotate-6",
  "rotate-3 translate-y-4 md:translate-y-6",
  "-rotate-3 -translate-y-3 md:-translate-y-5",
  "rotate-6 translate-y-2",
  "-rotate-2 -translate-y-2",
];

function MediaTile({ item }: { item: MediaItem }) {
  if (item.type === "video") {
    return <GridVideo src={item.src} className={item.aspect ?? "aspect-[9/16]"} />;
  }
  return (
    <div className={`overflow-hidden ${item.aspect ?? "aspect-[4/5]"}`}>
      <Image
        src={item.src}
        alt={item.alt ?? ""}
        width={800}
        height={1000}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function MediaGroup({ content }: { content: SideContent }) {
  if (content.media.length === 0) return null;
  const layout = content.layout ?? (content.media.length > 1 ? "masonry" : "single");

  if (layout === "single") {
    const item = content.media[0];
    if (item.type === "video") {
      return (
        <div className="max-w-[220px] mx-auto">
          <GridVideo src={item.src} className={item.aspect ?? "aspect-[9/16]"} />
        </div>
      );
    }
    return (
      <div
        className={`overflow-hidden shadow-xl ${
          content.compact ? `max-w-[220px] mx-auto ${item.aspect ?? "aspect-[4/5]"}` : ""
        }`}
      >
        <Image
          src={item.src}
          alt={item.alt ?? ""}
          width={1800}
          height={900}
          className={`w-full ${content.compact ? "h-full" : "h-auto"} object-cover`}
        />
      </div>
    );
  }

  if (layout === "scatter") {
    return (
      <div className="flex flex-wrap items-end justify-center gap-4 md:gap-6 py-2">
        {content.media.map((item, i) => (
          <div
            key={i}
            className={`w-20 md:w-32 shadow-xl ${scatterTransforms[i % scatterTransforms.length]}`}
          >
            <MediaTile item={item} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-2 gap-2 md:gap-4 [grid-auto-flow:dense] mx-auto"
      style={{ maxWidth: content.groupMaxWidth ?? "280px" }}
    >
      {content.media.map((item, i) => (
        <div key={i} className={item.span ? "col-span-2 row-span-2" : ""}>
          <MediaTile item={item} />
        </div>
      ))}
    </div>
  );
}

export default function ImageCarousel({ slide, index, total }: ImageCarouselProps) {
  const goTo = (target: number) => {
    document.getElementById(blockId(target))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const prev = () => goTo(index === 0 ? total - 1 : index - 1);
  const next = () => goTo(index === total - 1 ? 0 : index + 1);

  return (
    <div id={blockId(index)} className="scroll-mt-24">
      {/* Slide title + navigační šipky přímo vedle něj — šipky teď skrolují na sousední blok, obsah bloku je fixní */}
      <div className="flex items-center justify-center gap-6 md:gap-10 mb-10">
        <button
          onClick={prev}
          className="text-zac-yellow hover:text-white transition-colors text-[4.76rem] md:text-[5.75rem] font-black w-14 md:w-20 shrink-0 flex items-center justify-center"
          aria-label="Předchozí"
        >
          &lsaquo;
        </button>
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
          {slide.title}
        </h3>
        <button
          onClick={next}
          className="text-zac-yellow hover:text-white transition-colors text-[4.76rem] md:text-[5.75rem] font-black w-14 md:w-20 shrink-0 flex items-center justify-center"
          aria-label="Další"
        >
          &rsaquo;
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Media — before/after side by side (stacked on mobile) se šipkou uprostřed, vertically centered so different-height items align */}
        <div className={`grid grid-cols-1 ${slide.mediaGridClass ?? "md:grid-cols-[1fr_auto_1fr]"} gap-6 md:gap-4 items-center mb-12`}>
          <div className="flex justify-center">
            <MediaGroup content={slide.before} />
          </div>

          {/* Arrow between before/after */}
          <div className="flex items-center justify-center">
            <span className="text-zac-yellow text-4xl md:text-5xl font-black rotate-90 md:rotate-0 inline-block">
              &raquo;
            </span>
          </div>

          <div className="flex justify-center">
            <MediaGroup content={slide.after} />
          </div>
        </div>

        {/* Text — před + po stacked in one block */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-white font-bold mb-2">{slide.before.label}</p>
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-8">
            {slide.before.text}
          </p>
          <p className="text-lg md:text-xl text-white font-bold mb-2">{slide.after.label}</p>
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
            {slide.after.text}
          </p>
        </div>
      </div>
    </div>
  );
}
