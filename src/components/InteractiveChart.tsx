"use client";

import { useState } from "react";

const data = [
  { year: "2021", obrat: 18, leady: 120, instagram: 2400 },
  { year: "2022", obrat: 32, leady: 310, instagram: 8700 },
  { year: "2023", obrat: 54, leady: 680, instagram: 18500 },
  { year: "2024", obrat: 78, leady: 1240, instagram: 27000 },
  { year: "2025", obrat: 100, leady: 1850, instagram: 34000 },
];

const metrics = [
  {
    key: "obrat",
    label: "Obrat (mil. Kč)",
    barColor: "#ED1E00",
    max: 120,
    unit: "mil. Kč",
    yLabels: ["0", "30", "60", "90", "120"],
  },
  {
    key: "leady",
    label: "Počet leadů",
    barColor: "#FFB000",
    max: 2000,
    unit: "leadů",
    yLabels: ["0", "500", "1 000", "1 500", "2 000"],
  },
  {
    key: "instagram",
    label: "Sledující na IG",
    barColor: "#000000",
    max: 40000,
    unit: "sledujících",
    yLabels: ["0", "10k", "20k", "30k", "40k"],
  },
] as const;

type MetricKey = (typeof metrics)[number]["key"];

export default function InteractiveChart() {
  const [activeMetric, setActiveMetric] = useState<MetricKey>("obrat");
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const metric = metrics.find((m) => m.key === activeMetric)!;

  return (
    <div>
      {/* Metric switcher */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
        {metrics.map((m) => (
          <button
            key={m.key}
            onClick={() => setActiveMetric(m.key)}
            className={`relative px-5 py-2 text-sm md:text-base font-bold transition-colors ${
              activeMetric === m.key ? "text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {m.label}
            {activeMetric === m.key && (
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

      {/* Chart — white background, irregular shape */}
      <div
        className="relative bg-white p-6 md:p-10"
        style={{
          clipPath: "polygon(1% 2%, 99% 0%, 100% 97%, 0% 100%)",
        }}
      >
        <div className="flex h-64 md:h-80">
          {/* Y axis labels */}
          <div className="flex flex-col justify-between pr-3 md:pr-4 py-1">
            {[...metric.yLabels].reverse().map((label) => (
              <span key={label} className="text-gray-400 text-[10px] md:text-xs font-medium text-right whitespace-nowrap">
                {label}
              </span>
            ))}
          </div>

          {/* Bars area */}
          <div className="flex-1 flex flex-col">
            {/* Grid + bars */}
            <div className="flex-1 relative border-l border-b border-gray-200">
              {/* Horizontal grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-t border-gray-100 w-full" />
                ))}
              </div>

              {/* Bars */}
              <div className="absolute inset-0 flex items-end gap-2 md:gap-4 px-2 md:px-4">
                {data.map((d, i) => {
                  const value = d[activeMetric];
                  const height = (value / metric.max) * 100;
                  const isHovered = hoveredBar === i;

                  return (
                    <div
                      key={d.year}
                      className="flex-1 flex flex-col items-center h-full justify-end relative"
                      onMouseEnter={() => setHoveredBar(i)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* Tooltip */}
                      {isHovered && (
                        <div className="absolute -top-8 bg-black text-white text-xs md:text-sm font-bold px-3 py-1.5 whitespace-nowrap z-10">
                          {activeMetric === "obrat"
                            ? `${value} mil. Kč`
                            : activeMetric === "instagram"
                            ? `${(value / 1000).toFixed(1)}k`
                            : value.toLocaleString("cs-CZ")}
                        </div>
                      )}

                      {/* Bar */}
                      <div
                        className="w-full max-w-14 md:max-w-20 transition-all duration-500 ease-out cursor-pointer"
                        style={{
                          height: `${height}%`,
                          backgroundColor: metric.barColor,
                          opacity: isHovered ? 1 : 0.85,
                          transform: isHovered ? "scaleY(1.05)" : "scaleY(1)",
                          transformOrigin: "bottom",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* X axis labels */}
            <div className="flex px-2 md:px-4 pt-2">
              {data.map((d) => (
                <span key={d.year} className="flex-1 text-center text-gray-500 text-xs md:text-sm font-bold">
                  {d.year}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <p className="text-center text-white/70 text-sm font-medium mt-6">
        Najeďte na sloupec pro zobrazení hodnoty. Přepínejte metriky tlačítky nahoře.
      </p>
    </div>
  );
}
