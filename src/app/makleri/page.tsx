import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import ZoomableImage from "@/components/ZoomableImage";

const siteUrl = getSiteUrl();

const title = "Mystery shopping na vlastních makléřích";
const description =
  "Případová studie Zacíleno pro klienta z realitního sektoru — jak mystery shopping na vlastních makléřích odhalil skutečnou příčinu nízké konverze poptávek a pomohl o 40 % zrychlit prodej nemovitostí.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/makleri" },
  openGraph: {
    title,
    description,
    url: "/makleri",
  },
  twitter: {
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Zacíleno na mystery shopping: jak jsme odhalili skutečnou příčinu ztracených poptávek",
  description:
    "Případová studie Zacíleno pro klienta z realitního sektoru — jak mystery shopping na vlastních makléřích odhalil skutečnou příčinu nízké konverze poptávek a pomohl o 40 % zrychlit prodej nemovitostí.",
  image: `${siteUrl}/makleri/opengraph-image`,
  datePublished: "2026-08-17",
  dateModified: "2026-08-17",
  author: {
    "@type": "Organization",
    name: "Zacíleno",
    url: "https://www.zacileno.cz",
  },
  publisher: {
    "@type": "Organization",
    name: "Zacíleno",
    url: "https://www.zacileno.cz",
  },
  inLanguage: "cs-CZ",
};

const cestaKroky = [
  { krok: "1", popis: "Poptávka" },
  { krok: "2", popis: "Do 5 minut volá call centrum" },
  { krok: "3", popis: "Pokud vyhodnotí jako relevantní, ihned předává makléři" },
  { krok: "4", popis: "Makléř do 60 minut volá s termínem prohlídky" },
  { krok: "5", popis: "Ihned po hovoru posílá email s termínem prohlídky" },
  { krok: "6", popis: "V den prohlídky posílá SMS s připomínkou" },
  { krok: "7", popis: "Po prohlídce ten den posílá email se shrnutím nabídky" },
  { krok: "8", popis: "Za 24 hodin volá s dotazem na rozhodnutí" },
];

export default function Home() {
  return (
    <main className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Komponenta: HERO SEKCE — červené pozadí; desktop: vlevo nadpis+vlnky, vpravo nahoře fotka, pod obojím text+tlačítko přes celou šířku; mobil: nadpis → vlnky → text → tlačítko → fotka */}
      <section className="bg-zac-red min-h-screen flex items-center relative overflow-hidden">
        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6 w-full pt-10 pb-20 relative z-10">
          <div className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {/* 1 · Nadpis + žluté vlnky — levý sloupec, první řádek */}
            <div className="lg:col-start-1 lg:row-start-1">
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1]">
                Zacíleno na mystery shopping
              </h1>

              <img
                src="/graficke-prvky/cary zluta.svg"
                alt=""
                className="w-40 mt-8"
                aria-hidden="true"
              />
            </div>

            {/* 2 · Text + tlačítko — druhý řádek přes obě kolonky (na mobilu před fotkou) */}
            <div className="max-w-4xl lg:col-span-2 lg:col-start-1 lg:row-start-2">
              <p className="text-xl md:text-2xl text-white font-bold leading-snug mb-6">
                Většina firem dělá mystery shopping na&nbsp;konkurenci, my jsme ho udělali sami na&nbsp;sebe.
              </p>

              <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-10">
                Když jsme pro našeho klienta z&nbsp;realitního sektoru hledali odpověď na otázku, proč se rostoucí výkonnost marketingu nepromítá do finálních prodejů, museli jsme se podívat až za hranice našich kampaní. Ukázalo se, že skutečný problém byznysu leží jinde.
              </p>

              <Link
                href="#jak-jsme-to-resili"
                className="inline-block bg-white text-black text-base font-bold px-8 py-4 rounded-full hover:bg-zac-yellow transition-colors"
              >
                jak jsme to řešili?
              </Link>
            </div>

            {/* 3 · Obrázek + dekorace — pravý sloupec, první řádek; na mobilu poslední. Vše se škáluje z jedné šířky, takže se to nikdy nerozjede */}
            <div className="relative w-full max-w-[520px] mx-auto lg:max-w-none lg:col-start-2 lg:row-start-1 lg:self-start">
              {/* Halftone tečky za vším */}
              <img
                src="/graficke-prvky/tecky na pozadi.svg"
                alt=""
                className="pointer-events-none absolute -top-[24%] -right-[12%] w-[62%] z-0"
                aria-hidden="true"
              />

              {/* Žlutý tvar — drží svůj vlastní poměr stran (686:326), obrázek sedí uvnitř něj */}
              <div className="relative z-10 w-full aspect-[686/326]">
                <img
                  src="/graficke-prvky/tvar1.svg"
                  alt=""
                  className="pointer-events-none absolute inset-0 w-full h-full -rotate-3"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <Image
                    src="/makleri/web-2.webp"
                    alt="Ilustrace rodinných domů"
                    width={1080}
                    height={365}
                    sizes="(max-width: 768px) 90vw, 550px"
                    className="w-[80%] h-auto"
                  />
                </div>
              </div>

              {/* Cikcak */}
              <img
                src="/graficke-prvky/cikcak1 bila.svg"
                alt=""
                className="pointer-events-none absolute -bottom-[14%] -left-[7%] w-[26%] rotate-6 z-30"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Blesk decoration */}
        <img
          src="/graficke-prvky/blesk bila.svg"
          alt=""
          className="pointer-events-none absolute bottom-20 left-10 w-16 -rotate-6 hidden md:block"
          aria-hidden="true"
        />
      </section>

      {/* Komponenta: CX ŘÁDKY — varianta na BÍLÉM clip-path bloku (odděluje hero sekci), nadpis, 3 řádky "levý text → žlutá šipka → pravý text bold" */}
      <section className="bg-zac-red relative">
        <div
          className="bg-white py-16 md:py-24 px-6 relative overflow-hidden"
          style={{
            clipPath: "polygon(0 5%, 34% 0%, 75% 3%, 100% 5%, 100% 95%, 67% 100%, 25% 97%, 0 95%)",
          }}
        >
        {/* Halftone tečky */}
        <img
          src="/graficke-prvky/tecky na pozadi.svg"
          alt=""
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] md:w-[560px] max-w-none opacity-25"
          aria-hidden="true"
        />

        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-16 md:mb-20">
            Proces v&nbsp;číslech
          </h2>

          <div className="flex flex-col gap-10 md:gap-8 max-w-4xl mx-auto">
            {[
              { left: "Marketing", right: "Generuje leady" },
              {
                left: "Call centrum",
                right:
                  "Do 5 minut volá a zjišťuje skutečný zájem, poté předává na makléře (85 % kontaktů se předá dál)",
              },
              {
                left: "Makléř",
                right:
                  "Domlouvá si prohlídky, obchoduje nemovitost (pouze 5 % kontaktů se dostane na prohlídku)",
              },
            ].map((row) => (
              <div
                key={row.left}
                className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1.55fr)] md:grid-cols-[1fr_auto_2fr] items-center gap-2 md:gap-6"
              >
                <p className="text-black font-medium text-sm sm:text-base md:text-xl text-right">
                  {row.left}
                </p>
                <div className="flex items-center justify-center">
                  <img
                    src="/graficke-prvky/zluta-sipka-silna.svg"
                    alt=""
                    className="w-[44px] sm:w-[64px] md:w-[90px] h-auto"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-black font-bold text-sm sm:text-base md:text-xl text-left">
                  {row.right}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Komponenta: TEXT + FOTKA (fotka vlevo) — varianta bez fotky, text na celou šířku sekce.
          Spodní odsazení zmenšené: následující sekce je taky červená, takže se odsazení sčítala do prázdna. */}
      <section className="bg-zac-red pt-20 md:pt-28 pb-2 md:pb-4">
        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Výzva
          </h2>

          <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
            Spravovali jsme kampaně, které přinášely stabilní přísun poptávek, tak jsme zvyšovali rozpočty, ale finální prodeje nerostly podle očekávání. Ve firmě přitom existoval jasně nastavený proces, jak při prodeji s&nbsp;klientem jednat. Na první pohled tak vše ukazovalo klasicky na marketing: „Doručujete nám nerelevantní leady.“
          </p>

          <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
            Jenže v&nbsp;kampaních už jsme byli na hranici možností a&nbsp;nebylo co dalšího testovat. Scénář byl pořád stejný bez ohledu na úpravy publik, webu či kreativy. Místo dalšího slepého ladění reklam jsme si proto sedli k&nbsp;tabuli a&nbsp;detailně nakreslili celou cestu zákazníka. Potřebovali jsme zjistit, kde pálíme zbytečně peníze.
          </p>
        </div>
      </section>

      {/* Komponenta: KARTY KOSOČTVERCE — červené pozadí, nadpis, intro text, 2 bílé karty (clip-path trapéz) vedle sebe s ikonou+titulkem+textem */}
      <section id="jak-jsme-to-resili" className="bg-zac-red py-20 md:py-28">
        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6">
            Jak jsme to řešili
          </h2>

          <p className="text-base md:text-lg text-white font-medium leading-relaxed text-center max-w-3xl mx-auto mb-16">
            Zaměřili jsme se na část cesty, kterou nikdo předtím systematicky neměřil — samotný kontakt s&nbsp;makléřem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            {/* Card 1 — normal trapezoid */}
            <div
              className="bg-white px-8 md:px-10 py-10 md:py-12 flex flex-col items-center text-center"
              style={{
                clipPath:
                  "polygon(7% 1%, 39% 0%, 70% 2.5%, 93% 0%, 100% 97.5%, 67% 100%, 33% 97%, 0% 100%)",
              }}
            >
              <svg className="w-10 h-10 mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="20" cy="20" r="13" stroke="black" strokeWidth="2" />
                <line x1="29" y1="29" x2="41" y2="41" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 20 L19 24 L26 15" stroke="#FFB000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-xl font-bold text-black mb-4">
                Mystery shopping jako diagnostika
              </h3>
              <p className="text-base text-black font-medium leading-relaxed">
                Navrhli jsme proces, ve kterém sami vystupujeme jako potenciální kupující a&nbsp;posíláme poptávku na nemovitost, kterou klient prodává přes daného makléře. Díky tomu vidíme celou prodejní interakci očima skutečného zákazníka — rychlost reakce, kvalitu argumentace, ochotu poradit, schopnost dotáhnout zájemce dál. Občas se chováme jako klasický zákazník, kterému to v&nbsp;danou chvíli není priorita, nezvedáme telefony a&nbsp;necháváme si to promyslet.
              </p>
            </div>

            {/* Card 2 — inverted trapezoid */}
            <div
              className="bg-white px-8 md:px-10 py-10 md:py-12 flex flex-col items-center text-center"
              style={{
                clipPath:
                  "polygon(0% 0%, 34% 2.5%, 68% 0%, 100% 2%, 93% 100%, 64% 97%, 30% 100%, 7% 97.5%)",
              }}
            >
              <svg className="w-10 h-10 mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="10" y="8" width="28" height="34" rx="2" stroke="black" strokeWidth="2" />
                <rect x="17" y="5" width="14" height="7" rx="1.5" stroke="black" strokeWidth="2" fill="white" />
                <line x1="15" y1="22" x2="24" y2="22" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="15" y1="29" x2="24" y2="29" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path d="M29 20 L32 23 L34 20" stroke="#FFB000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M29 27 L32 30 L34 27" stroke="#FFB000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-xl font-bold text-black mb-4">
                Hodnocení místo domněnek
              </h3>
              <p className="text-base text-black font-medium leading-relaxed">
                Každou interakci vyhodnocujeme podle předem daných bodů, takže klient poprvé získává objektivní zpětnou vazbu na to, jak jednotliví makléři skutečně s&nbsp;poptávkou pracují, místo aby se spoléhal na dojem nebo počet uzavřených obchodů, ze kterých není vidět, kolik příležitostí se cestou mohlo ztratit. Ne pocitově, ale jasně odškrtáváme předem daná kritéria — stalo se / nestalo se.
              </p>
            </div>
          </div>

          <ZoomableImage
            src="/makleri/karty-kosoctverce-screenshot.webp"
            alt="Ukázka vyhodnocovací tabulky mystery shoppingu"
            className="w-full max-w-2xl mx-auto mt-12 md:mt-16"
          />
        </div>
      </section>

      {/* Komponenta: VÝSLEDKY V ČÍSLECH — bílý clip-path blok, nadpis, 3 statistiky s dekorativními SVG */}
      <section className="bg-zac-red relative">
        <div
          className="bg-white py-16 md:py-24 px-6"
          style={{
            clipPath: "polygon(0 5%, 34% 0%, 75% 3%, 100% 5%, 100% 95%, 67% 100%, 25% 97%, 0 95%)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-16 md:mb-20">
              Výsledky mystery v&nbsp;číslech
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16 md:gap-10">
              {/* Stat 1 — 32 % */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8 h-24 flex items-center justify-center">
                  <img
                    src="/graficke-prvky/elipsa cerna.svg"
                    alt=""
                    className="absolute -top-6 -left-8 w-[100px] h-[100px]"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/cary zluta.svg"
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 -z-10"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/blesk cervena.svg"
                    alt=""
                    className="absolute -bottom-4 -left-2 w-6"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-[3rem] md:text-[3.6rem] lg:text-[4.8rem] font-black text-black italic">
                    32&nbsp;%
                  </span>
                </div>
                <p className="text-base md:text-lg font-bold text-black mt-4">
                  Poptávek zůstalo ze strany makléřů zcela bez odpovědi
                </p>
              </div>

              {/* Stat 2 — 28 % */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8 h-24 flex items-center justify-center">
                  <img
                    src="/graficke-prvky/tvar5.svg"
                    alt=""
                    className="absolute -top-6 -right-8 w-[150px] h-auto -z-10"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/cikcak1 zluta.svg"
                    alt=""
                    className="absolute -top-4 left-2 w-[130px] -z-10"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/cary zluta.svg"
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 -z-10"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-[3rem] md:text-[3.6rem] lg:text-[4.8rem] font-black text-black italic">
                    28&nbsp;%
                  </span>
                </div>
                <p className="text-base md:text-lg font-bold text-black mt-4">
                  Makléřů mělo nedostatečnou znalost nemovitosti, chybějící follow-up po prvním hovoru nebo nebylo flexibilní v&nbsp;rámci termínů prohlídky
                </p>
              </div>

              {/* Stat 3 — o 40 % */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8 h-24 flex items-center justify-center">
                  <img
                    src="/graficke-prvky/elipsa cervena.svg"
                    alt=""
                    className="absolute -top-6 -left-6 w-[100px] h-[100px]"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/cikcak1 zluta.svg"
                    alt=""
                    className="absolute -top-8 -right-4 w-[120px] rotate-6 -scale-x-100 -z-10"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/cary zluta.svg"
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 -z-10"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/blesk cervena.svg"
                    alt=""
                    className="absolute -bottom-4 right-0 w-6 -rotate-12"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-[3rem] md:text-[3.6rem] lg:text-[4.8rem] font-black text-black italic">
                    o&nbsp;40&nbsp;%
                  </span>
                </div>
                <p className="text-base md:text-lg font-bold text-black mt-4">
                  Rychleji se prodávaly nemovitosti spravované makléři s&nbsp;vysokým skóre z&nbsp;mystery shoppingu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Komponenta: BÍLÝ BLOK SE SLOUPCI — varianta na ČERVENÉM pozadí (převedeno kvůli střídání pozadí): 3 sloupce s bílými SVG ikonami a bílým textem */}
      <section className="bg-zac-red py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16 md:mb-20">
              Vazba na interní procesy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
              {/* Column 1 — pravidla a systém */}
              <div className="flex flex-col items-center text-center">
                <svg className="w-10 h-10 mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="10" y="6" width="28" height="36" rx="2" stroke="white" strokeWidth="2" />
                  <line x1="16" y1="16" x2="32" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="24" x2="32" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 32 L20 36 L32 32" stroke="#FFB000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base text-white font-medium leading-relaxed">
                  Společně s&nbsp;klientem jsme revidovali a&nbsp;nastavili jasná pravidla pro práci makléřů a&nbsp;zavedli systém pro snadné vyhodnocování výsledků v&nbsp;každé fázi zákaznické cesty.
                </p>
              </div>

              {/* Column 2 — kontrolní mechanismy */}
              <div className="flex flex-col items-center text-center">
                <svg className="w-10 h-10 mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M24 6 L38 12 V22 C38 32 32 39 24 42 C16 39 10 32 10 22 V12 Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M17 23 L22 28 L32 17" stroke="#FFB000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base text-white font-medium leading-relaxed">
                  Zavedli jsme pevné kontrolní mechanismy — včetně zpětného kontaktování nedopadlých zákazníků, od kterých zjišťujeme reálnou zpětnou vazbu na proběhlou komunikaci.
                </p>
              </div>

              {/* Column 3 — přehled */}
              <div className="flex flex-col items-center text-center">
                <svg className="w-10 h-10 mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4 24 C10 14 18 9 24 9 C30 9 38 14 44 24 C38 34 30 39 24 39 C18 39 10 34 4 24 Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="24" cy="24" r="7" stroke="white" strokeWidth="2" />
                  <circle cx="24" cy="24" r="2.5" fill="#FFB000" />
                </svg>
                <p className="text-base text-white font-medium leading-relaxed">
                  Díky tomu má klient neustálý přehled o&nbsp;tom, kde prodejní proces drhne, co je potřeba zlepšit a&nbsp;jak ochránit dobré jméno značky.
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* Komponenta: TABULKA — bílý clip-path blok, nadpis, jednoduchá tabulka se žlutým ohraničením */}
      <section className="bg-zac-red relative">
        <div
          className="bg-white py-16 md:py-24 px-3 md:px-6"
          style={{
            clipPath: "polygon(0 5%, 34% 0%, 75% 3%, 100% 5%, 100% 95%, 67% 100%, 25% 97%, 0 95%)",
          }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-16 md:mb-20">
              Modelová cesta zákazníka
            </h2>

            <table className="w-full border-collapse">
              <tbody>
                {cestaKroky.map((row) => (
                  <tr key={row.krok}>
                    <td className="border-2 border-zac-yellow px-1.5 md:px-6 py-2 md:py-3 text-center text-black font-black italic text-lg md:text-xl w-14 md:w-20">
                      {row.krok}
                    </td>
                    <td className="border-2 border-zac-yellow px-1.5 md:px-6 py-2 md:py-3 text-black font-medium text-xs md:text-base">
                      {row.popis}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Komponenta: 5 SLOUPCŮ — bílý clip-path blok, nadpis, sloupce s číslem, bold nadpisem a popiskem (4 sloupce dle obsahu) */}
      <section className="bg-zac-red relative">
        <div
          className="bg-white py-16 md:py-24 px-6"
          style={{
            clipPath: "polygon(0 5%, 34% 0%, 75% 3%, 100% 5%, 100% 95%, 67% 100%, 25% 97%, 0 95%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-16 md:mb-20">
              Díky čemu se to povedlo
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14 md:gap-10">
              {[
                {
                  num: "01",
                  title: "Podívali jsme se za hranice našich kampaní",
                  desc: "Problém, který vypadal jako výkonnostní, byl ve skutečnosti v prodejním procesu.",
                },
                {
                  num: "02",
                  title: "Otevřeli jsme téma, které doteď nikdo neřešil",
                  desc: "Podívali jsme se na důvody, proč poptávky nedopadají.",
                },
                {
                  num: "03",
                  title: "Data místo dojmů",
                  desc: "Nastavili jsme proces objektivního měření skutečné zákaznické zkušenosti.",
                },
                {
                  num: "04",
                  title: "Propojení celé cesty",
                  desc: "Marketing, akvizice a prodej přestaly být oddělené kapitoly.",
                },
              ].map((item) => (
                <div key={item.num} className="flex flex-col items-center text-center">
                  <span className="text-4xl md:text-5xl font-black text-zac-yellow italic mb-2 leading-none pt-2">
                    {item.num}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Komponenta: CTA POTKEJTE SE — červené pozadí, vlevo fotka s dekoracemi, vpravo nadpis+text+tlačítko+kontakty */}
      <section className="bg-zac-red py-20 md:py-28 relative overflow-hidden">
        {/* Halftone dots */}
        <img
          src="/graficke-prvky/tecky na pozadi.svg"
          alt=""
          className="absolute top-0 right-0 w-96"
          aria-hidden="true"
        />

        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          {/* Left — photo with decorations */}
          <div className="relative">
            {/* Cikcak behind top-left */}
            <img
              src="/graficke-prvky/cikcak1 cerna.svg"
              alt=""
              className="absolute -top-8 -left-8 w-40 -rotate-6 z-10"
              aria-hidden="true"
            />

            {/* Halftone dots behind photo */}
            <img
              src="/graficke-prvky/tecky na pozadi.svg"
              alt=""
              className="absolute -top-10 -right-10 w-72 z-0"
              aria-hidden="true"
            />

            {/* Yellow tvar behind photo */}
            <img
              src="/graficke-prvky/tvar4.svg"
              alt=""
              className="absolute top-8 left-8 w-[80%] h-auto -rotate-3 z-[1]"
              aria-hidden="true"
            />

            {/* Photo */}
            <div className="relative z-10">
              <Image
                src="/foto.png"
                alt="Markéta — Zacíleno"
                width={500}
                height={600}
                className="w-72 md:w-96 h-auto object-cover mx-auto lg:mx-0"
              />
            </div>

            {/* Elipsa */}
            <img
              src="/graficke-prvky/elipsa bila.svg"
              alt=""
              className="absolute -bottom-6 right-8 w-32 h-32 z-10"
              aria-hidden="true"
            />

            {/* Blesk */}
            <img
              src="/graficke-prvky/blesk cervena.svg"
              alt=""
              className="absolute -bottom-8 left-[30%] w-14 z-20"
              aria-hidden="true"
            />
          </div>

          {/* Right — text and CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Potkejte se s&nbsp;Markétou
            </h2>

            <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-8">
              Myslíte si, že bychom mohli zacílit i&nbsp;pro vás? Vyplňte si náš formulář. Domluvíme si termín schůzky nebo online hovoru, kde nezávazně probereme, jak vám můžeme pomoci.
            </p>

            <Link
              href="https://www.zacileno.cz/?odesli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black text-base font-bold px-8 py-4 rounded-full hover:bg-zac-yellow transition-colors mb-8"
            >
              napište nám
            </Link>

            <div className="flex flex-col gap-3">
              <p className="text-lg text-white font-bold">
                +420 777 835 332
              </p>
              <p className="text-lg text-white font-bold underline">
                marketa@zacileno.cz
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Komponenta: FOOTER — černý blok nahoře (mobil: roztažený, desktop: SVG), bílé pozadí s kontakty dole */}

      {/* Footer: footer.svg — stejný na mobilu i desktopu */}
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
          {/* Contact columns */}
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

          {/* Partner logos */}
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
