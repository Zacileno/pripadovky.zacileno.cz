import Link from "next/link";
import type { Metadata } from "next";
import { pripadovky } from "@/lib/pripadovky";

export const metadata: Metadata = {
  // Titulek bez šablony — na rozcestníku nechceme "Případové studie | Zacíleno | Zacíleno"
  title: { absolute: "Případové studie | Zacíleno" },
  description:
    "Případové studie agentury Zacíleno — konkrétní zadání, konkrétní čísla a cesta, kterou jsme se k nim dostali.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Případové studie | Zacíleno",
    description:
      "Případové studie agentury Zacíleno — konkrétní zadání, konkrétní čísla a cesta, kterou jsme se k nim dostali.",
    url: "/",
  },
};

// Bílé karty mají hranaté, mírně nepravidelné okraje (žádné zaoblení).
const cardClip = "polygon(0 3%, 38% 0%, 72% 2%, 100% 0%, 100% 97%, 64% 100%, 28% 98%, 0 100%)";

export default function Rozcestnik() {
  return (
    <main className="pt-16">
      {/* Komponenta: HERO ROZCESTNÍKU — červené pozadí, nadpis, dekorace */}
      <section className="bg-zac-red relative overflow-hidden">
        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6 w-full pt-20 pb-14 md:pt-28 md:pb-20 relative z-10">
          <p className="text-sm md:text-base font-bold text-zac-yellow uppercase tracking-[0.2em] mb-5">
            Zacíleno
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] max-w-3xl">
            Případové studie
          </h1>

          <img
            src="/graficke-prvky/cary zluta.svg"
            alt=""
            className="pointer-events-none w-40 md:w-56 mt-6"
            aria-hidden="true"
          />

          <p className="text-lg md:text-xl text-white font-medium leading-relaxed max-w-2xl mt-8">
            Konkrétní zadání, konkrétní čísla a&nbsp;cesta, kterou jsme se k&nbsp;nim
            dostali. Žádné obecné fráze — u&nbsp;každého projektu ukazujeme, co
            nefungovalo, co jsme změnili a&nbsp;co to přineslo.
          </p>
        </div>

        {/* Dekorace — na mobilu schované, ať nepřekrývají text */}
        <img
          src="/graficke-prvky/blesk bila.svg"
          alt=""
          className="pointer-events-none hidden lg:block absolute right-[6%] top-[18%] w-24 z-0"
          aria-hidden="true"
        />
        <img
          src="/graficke-prvky/elipsa cerna.svg"
          alt=""
          className="pointer-events-none hidden lg:block absolute right-[16%] bottom-[10%] w-16 z-0"
          aria-hidden="true"
        />
        <img
          src="/graficke-prvky/tecky na pozadi.svg"
          alt=""
          className="pointer-events-none absolute left-0 bottom-0 w-1/3 opacity-100 z-0"
          aria-hidden="true"
        />
      </section>

      {/* Komponenta: SEZNAM PŘÍPADOVEK — bílé clip-path karty na červeném pozadí */}
      <section className="bg-zac-red relative pb-20 md:pb-28">
        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6 w-full relative z-10">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            {pripadovky.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group flex flex-col bg-white px-8 py-10 md:px-10 md:py-12 transition-transform duration-200 hover:-translate-y-1"
                style={{ clipPath: cardClip }}
              >
                <p className="text-xs md:text-sm font-bold text-zac-red uppercase tracking-[0.18em] mb-4">
                  {p.obor}
                </p>

                <p className="text-2xl md:text-3xl font-bold text-black mb-2">
                  {p.klient}
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-black leading-snug mb-5">
                  {p.nazev}
                </h2>

                <p className="text-base text-black font-medium leading-relaxed mb-8">
                  {p.perex}
                </p>

                <div className="mt-auto flex items-end justify-between gap-6">
                  <div>
                    <span className="block text-5xl md:text-6xl font-black italic text-zac-red leading-none">
                      {p.cislo}
                    </span>
                    <span className="block text-sm font-medium text-black mt-2 max-w-[14rem]">
                      {p.cisloPopis}
                    </span>
                  </div>

                  <span className="inline-block bg-zac-red text-white text-sm font-bold px-6 py-3 rounded-full whitespace-nowrap group-hover:bg-zac-yellow group-hover:text-black transition-colors">
                    otevřít případovku
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Komponenta: FOOTER — stejný jako na případovkách */}
      <section className="bg-zac-red relative">
        <div className="relative">
          <img
            src="/graficke-prvky/footer.svg"
            alt=""
            className="w-full h-auto block"
            aria-hidden="true"
          />
          <div className="absolute top-[8%] md:top-[15%] left-0 w-full px-4 md:px-6">
            <div className="max-w-5xl mx-auto w-full flex flex-row items-center justify-between gap-4 md:gap-6">
              <div className="ml-[15%] md:ml-[20%]">
                <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
                  Mějte s&nbsp;námi zacíleno i&nbsp;na sítích
                </h2>
              </div>
              <div className="flex items-center gap-4 md:gap-8 mr-[15%] md:mr-[25%]">
                <a href="https://www.instagram.com/zacileno.cz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-zac-yellow transition-colors">
                  <svg className="w-7 h-7 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/zacileno.cz" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-zac-yellow transition-colors">
                  <svg className="w-7 h-7 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/zac%C3%ADleno/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-zac-yellow transition-colors">
                  <svg className="w-7 h-7 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patička — bílé pozadí navazující na footer SVG */}
      <footer className="bg-white pt-8 pb-16 -mt-[15%] relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center">
            <div>
              <h3 className="text-lg font-bold text-black mb-3">Kontaktujte nás</h3>
              <p className="text-base text-black font-medium">+420 777 835 332</p>
              <p className="text-base text-black font-medium">marketa@zacileno.cz</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-3">Kde nás najdete</h3>
              <p className="text-base text-black font-medium">Římská 678/26</p>
              <p className="text-base text-black font-medium">Vinohrady (Praha 2)</p>
              <p className="text-base text-black font-medium">120 00 Praha</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-3">Firemní údaje</h3>
              <p className="text-base text-black font-medium">Zacíleno s.r.o.</p>
              <p className="text-base text-black font-medium">IČO: 08942293</p>
              <p className="text-base text-black font-medium">DIČ: CZ08942293</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-10 mt-24 mb-8">
            <img src="/partneri/sklik.png" alt="Sklik Ověření" className="h-[1.4rem] md:h-7 w-auto object-contain" />
            <img src="/partneri/google.png" alt="Google Partner" className="h-8 md:h-10 w-auto object-contain" />
            <img src="/partneri/shoptet.png" alt="Shoptet partner" className="h-[1.4rem] md:h-7 w-auto object-contain" />
            <img src="/partneri/ecomail.png" alt="Ecomail partner" className="h-8 md:h-10 w-auto object-contain" />
            <img src="/partneri/meta.png" alt="Meta Marketing Partner" className="h-8 md:h-10 w-auto object-contain" />
            <img src="/partneri/make.png" alt="Make partner" className="h-8 md:h-10 w-auto object-contain" />
            <img src="/partneri/pinterest.png" alt="Pinterest partner" className="h-8 md:h-10 w-auto object-contain" />
          </div>

          <hr className="border-gray-200 mb-4" />

          <p className="text-sm text-black font-medium text-center">
            © 2026 - ZACÍLENO.CZ - Všechna práva vyhrazena
          </p>
        </div>
      </footer>
    </main>
  );
}
