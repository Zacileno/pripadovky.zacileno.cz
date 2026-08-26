import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ImageCarousel from "@/components/ImageCarousel";

const title = "inSign: jak jsme B2B leadům otočili obsahem, ne tlakem";
const description =
  "Případová studie inSign — platformy pro elektronické podepisování dokumentů. Jak jsme přehodnotili strategii B2B kampaní a díky obsahu snížili cenu za schůzku o 35 %.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/insign" },
  openGraph: {
    title,
    description,
    url: "/insign",
    images: [
      {
        url: "/insign/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "inSign — případová studie Zacíleno",
      },
    ],
  },
  twitter: {
    title,
    description,
    images: ["/insign/og-image.jpg"],
  },
};

// Web klienta — prolinkováno všude, kde se v textu mluví o inSignu.
const INSIGN_URL = "https://www.getinsign.cz/";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "inSign: jak jsme B2B leadům otočili obsahem, ne tlakem",
  description:
    "Případová studie inSign — platformy pro elektronické podepisování dokumentů. Jak jsme přehodnotili strategii B2B kampaní a díky obsahu snížili cenu za schůzku o 35 %.",
  about: {
    "@type": "Organization",
    name: "inSign",
    url: INSIGN_URL,
  },
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

const carouselSlides = [
  {
    title: "1. Kreativa",
    before: {
      label: "Před",
      text: "Vyladěné kreativy s jasným scénářem, profi střihem, herci – využili jsme na web, sociální sítě, odlišili se od konkurence, ale v kampaních jsme zjistili, že jsou moc obecné a musíme jít víc do detailu. Zaměřit se na zákazníka, provést s ním hloubkové rozhovory a pochopit jeho hlavní bolest i potřeby. Vysvětlit nabídku totiž někdy nestačí.",
      layout: "masonry" as const,
      groupMaxWidth: "339px",
      media: [
        { type: "video" as const, src: "/insign/videa/insign-reels-1.mov" },
        { type: "video" as const, src: "/insign/videa/insign-reels-2.mov" },
      ],
    },
    after: {
      label: "Po",
      text: "Bannery, které nám generuje AI připravené za pár minut, cílíme na konkrétní skupinu lidí. Produkce je tak znatelně levnější a konečná cena za přivedení zákazníka klesá.",
      layout: "masonry" as const,
      groupMaxWidth: "308px",
      media: [
        { type: "image" as const, src: "/insign/bannery/banner-2.webp", alt: "Banner 2", aspect: "aspect-[9/16]" },
        { type: "image" as const, src: "/insign/bannery/banner-6.webp", alt: "Banner 6", aspect: "aspect-[9/16]" },
      ],
    },
  },
  {
    title: "2. Web",
    before: {
      label: "Před",
      text: "Vedeme na HP a podstránky, které vysvětlují službu a výhody řešení.",
      media: [{ type: "image" as const, src: "/insign/web/pred.webp", alt: "Web — před" }],
    },
    after: {
      label: "Po",
      text: "Vedeme na landing page přizpůsobenou přímo pro daný sektor, vybíráme funkce a benefity přímo pro ně.",
      media: [{ type: "image" as const, src: "/insign/web/po.webp", alt: "Web — po" }],
    },
  },
  {
    title: "3. Evidence leadů",
    mediaGridClass: "md:grid-cols-[3fr_auto_2fr]",
    before: {
      label: "Před",
      text: "Leady z kampaní v jedné tabulce, každá kampaň do vlastního listu, nemožnost jakéhokoliv vyhodnocování, obchod si přebírá kontakty bez jasných pravidel + Raynet, kam ručně přepisují lead, pokud se dostane do nabídky.",
      media: [{ type: "image" as const, src: "/insign/leady/databaze.webp", alt: "Evidence leadů — před" }],
    },
    after: {
      label: "Po",
      text: "Automatizace, která každý lead posílá rovnou do Raynetu. Zakládá tam úkol na telefonistku s jasným deadlinem. Vyhodnocování na základě definovaných fází v Raynetu, jasně dané důvody, proč to nedopadlo, případně proč to dopadlo a také za kolik. Možnost počítat návratnost investic, LTV zákazníka apod.",
      media: [{ type: "image" as const, src: "/insign/leady/system.webp", alt: "Evidence leadů — po" }],
    },
  },
];

export default function Home() {
  return (
    <main className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Komponenta: HERO SEKCE — červené pozadí; fotka s žlutým tvarem a dekoracemi zarovnaná nahoru s nadpisem (float vpravo na desktopu), odstavec pod nadpisem obtéká fotku a pod ní se roztáhne na celou šířku */}
      <section className="bg-zac-red min-h-screen flex items-center relative overflow-hidden">
        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6 w-full py-20">
          <div className="relative z-10 flex flex-col lg:block">
            {/* Photo — na desktopu plave vpravo a zarovnává se nahoře s nadpisem, na mobilu je pod textem */}
            <div className="order-2 lg:order-none relative flex justify-center lg:block lg:float-right lg:w-[42%] lg:ml-10 lg:mb-8 mb-10">
              {/* Halftone dots behind photo */}
              <img
                src="/graficke-prvky/tecky na pozadi.svg"
                alt=""
                className="absolute -top-10 -right-10 w-80"
                aria-hidden="true"
              />

              {/* Yellow shape behind photo */}
              <img
                src="/graficke-prvky/tvar1.svg"
                alt=""
                className="absolute top-8 right-4 w-[90%] h-auto -rotate-3"
                aria-hidden="true"
              />

              {/* Photo */}
              <div className="relative w-full max-w-md">
                <Image
                  src="/insign/titulni-final-2.webp"
                  alt="Podepisování dokumentu v aplikaci inSign na notebooku a mobilním telefonu"
                  width={1080}
                  height={684}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Cikcak decoration */}
              <img
                src="/graficke-prvky/cikcak1 bila.svg"
                alt=""
                className="absolute -bottom-6 -left-6 w-36 rotate-6"
                aria-hidden="true"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Zacíleno na leadmagnety
            </h1>

            {/* Yellow brush stroke decoration */}
            <img
              src="/graficke-prvky/cary zluta.svg"
              alt=""
              className="w-40 mb-8"
              aria-hidden="true"
            />

            <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-10">
              Drahé poptávky, které nikam nevedly. To byl výchozí stav, než jsme s&nbsp;<a href={INSIGN_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 hover:text-zac-yellow transition-colors">inSign</a>{" "}kompletně přehodnotili strategii B2B kampaní. Místo tlaku na rovnou rezervaci schůzky jsme vsadili na obsah, který lidi zaujme dřív, než jsou připraveni službu využít — a&nbsp;obchodu se otevřely dveře, které klasická kampaň na vyplněné formuláře neotevřela.
            </p>

            <div className="order-3 lg:order-none clear-both lg:clear-none">
              <Link
                href="#jak-jsme-to-otocili"
                className="inline-block bg-white text-black text-base font-bold px-8 py-4 rounded-full hover:bg-zac-yellow transition-colors"
              >
                jak jsme to otočili?
              </Link>
            </div>
          </div>
        </div>

        {/* Blesk decoration */}
        <img
          src="/graficke-prvky/blesk bila.svg"
          alt=""
          className="absolute bottom-20 left-10 w-16 -rotate-6"
          aria-hidden="true"
        />
      </section>

      {/* Komponenta: VÝSLEDKY V ČÍSLECH — bílý blok (clip-path), nadpis, 4 statistiky s dekorativními SVG (upraveno na 4 sloupce dle obsahu inSign) */}
      <section className="bg-zac-red relative">
        <div
          className="bg-white py-16 md:py-24 px-6"
          style={{
            clipPath: "polygon(0 5%, 34% 0%, 75% 3%, 100% 5%, 100% 95%, 67% 100%, 25% 97%, 0 95%)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-16 md:mb-20">
              Výsledky v&nbsp;číslech
            </h2>

            {/* Four stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16 md:gap-10">
              {/* Stat 1 — -90% */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8 h-20 flex items-center justify-center">
                  <img
                    src="/graficke-prvky/elipsa cerna.svg"
                    alt=""
                    className="absolute -top-6 -left-6 w-[90px] h-[90px]"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/cary zluta.svg"
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 -z-10"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/blesk cervena.svg"
                    alt=""
                    className="absolute -bottom-4 -left-1 w-[22px]"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-black text-black italic">
                    -90%
                  </span>
                </div>
                <p className="text-base md:text-lg font-bold text-black mt-4">
                  Cena za lead oproti původní kampani
                </p>
              </div>

              {/* Stat 2 — 100+ */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8 h-20 flex items-center justify-center">
                  <img
                    src="/graficke-prvky/elipsa cervena.svg"
                    alt=""
                    className="absolute -top-6 -left-6 w-[80px] h-[80px]"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/cikcak1 cerna.svg"
                    alt=""
                    className="absolute -top-3 left-4 w-[110px]"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/cary zluta.svg"
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 -z-10"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-black text-black italic">
                    100+
                  </span>
                </div>
                <p className="text-base md:text-lg font-bold text-black mt-4">
                  Kontaktů měsíčně
                </p>
              </div>

              {/* Stat 3 — 15% */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8 h-20 flex items-center justify-center">
                  <img
                    src="/graficke-prvky/tvar5.svg"
                    alt=""
                    className="absolute -top-5 -left-6 w-[130px] h-auto -z-10"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/blesk cervena.svg"
                    alt=""
                    className="absolute -bottom-3 right-0 w-[22px] rotate-12"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-black text-black italic">
                    15%
                  </span>
                </div>
                <p className="text-base md:text-lg font-bold text-black mt-4">
                  Leadů se kvalifikuje
                </p>
              </div>

              {/* Stat 4 — o 35% */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8 h-20 flex items-center justify-center">
                  <img
                    src="/graficke-prvky/cikcak2 cerna.svg"
                    alt=""
                    className="absolute -top-6 -right-4 w-[100px] rotate-6"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/cary zluta.svg"
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 -z-10"
                    aria-hidden="true"
                  />
                  <img
                    src="/graficke-prvky/blesk cervena.svg"
                    alt=""
                    className="absolute -bottom-4 left-0 w-[22px] -rotate-12"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-black text-black italic">
                    o&nbsp;35%
                  </span>
                </div>
                <p className="text-base md:text-lg font-bold text-black mt-4">
                  Nižší cena za schůzku
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Komponenta: TEXT + FOTKA (fotka vlevo) — červené pozadí, vlevo fotka s dekoracemi, vpravo nadpis+text */}
      <section className="bg-zac-red pt-20 pb-[72px] md:pt-28 md:pb-[101px]">
        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left — photo with decorations (fotka zvětšená o 50 % + 20 %, dekorace za ní) */}
          <div className="relative max-w-[108%] mx-auto">
            {/* Cikcak behind top-left */}
            <img
              src="/graficke-prvky/cikcak1 cerna.svg"
              alt=""
              className="absolute -top-8 -left-8 w-40 -rotate-6 z-0"
              aria-hidden="true"
            />

            {/* Blesk top-left */}
            <img
              src="/graficke-prvky/blesk cervena.svg"
              alt=""
              className="absolute -top-4 -left-4 w-10 z-0"
              aria-hidden="true"
            />

            {/* Yellow arrow/chevron bottom-right */}
            <img
              src="/graficke-prvky/tvar5.svg"
              alt=""
              className="absolute -bottom-6 -right-4 w-24 rotate-[-20deg] z-0"
              aria-hidden="true"
            />

            {/* Photo */}
            <div className="relative overflow-hidden z-20">
              <Image
                src="/insign/o-klientovi.jpg"
                alt="Tým společnosti inSign"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right — text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              O&nbsp;klientovi
            </h2>

            <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
              <a href={INSIGN_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 hover:text-zac-yellow transition-colors">inSign</a>{" "}je platforma pro elektronické podepisování dokumentů — rychlé, bezpečné a&nbsp;v&nbsp;souladu s&nbsp;eIDAS. Firmy díky ní podepisují smlouvy odkudkoliv během pár vteřin, ušetří náklady i&nbsp;čas a&nbsp;zbaví se papírování. Řešení najde uplatnění napříč obory, výrazně ale rezonuje tam, kde se pracuje s&nbsp;velkým objemem podepisovaných dokumentů — typicky třeba HR (pracovní smlouvy, onboarding) a&nbsp;zdravotnictví (informované souhlasy, dokumentace).
            </p>
          </div>
        </div>
      </section>
      {/* Komponenta: TEXT + FOTKA (fotka vpravo) — varianta bez fotky, text roztažený na celou šířku */}
      <section className="bg-zac-red pt-[50px] pb-20 md:pt-[71px] md:pb-28">
        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Výzva
          </h2>

          <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
            <a href={INSIGN_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 hover:text-zac-yellow transition-colors">inSign</a>{" "}potřeboval plnit kalendář kvalitními schůzkami. Kampaň cílená přímo na konzultaci ale dlouhodobě nefungovala — poptávek přišlo málo, byly drahé a&nbsp;většina se nedostala dál než do fáze zvažování.
          </p>

          <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
            Zjistili jsme, že problém není v&nbsp;nastavení kampaně, ale v&nbsp;samotné nabídce: žádat cizího člověka rovnou o&nbsp;schůzku je pro B2B příliš velký krok. Na původním webu navíc nebylo příliš obsahu, který by šel naproti jednotlivým cílovým skupinám.
          </p>
        </div>
      </section>
      {/* Komponenta: BÍLÝ BLOK SE SLOUPCI — bílý clip-path blok, nadpis, 3 sloupce s vlastními SVG ikonami a textem */}
      <section id="jak-jsme-to-otocili" className="bg-zac-red relative">
        <div
          className="bg-white pt-[92px] pb-[108px] md:pt-[138px] md:pb-[163px] px-6"
          style={{
            clipPath: "polygon(0 5%, 34% 0%, 75% 3%, 100% 5%, 100% 95%, 67% 100%, 25% 97%, 0 95%)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-6">
              Jak jsme to otočili
            </h2>

            {/* Intro text */}
            <p className="text-base md:text-lg text-black font-medium leading-relaxed text-center max-w-3xl mx-auto mb-16 md:mb-20">
              Místo dalších pokusů u&nbsp;nefunkční kampaně jsme navrhli komplexní změnu strategie, zkoušeli jsme několik cest a&nbsp;tohle je ten nejvýkonnější funnel.
            </p>

            {/* Tři sloupce pod sebou, text přes celou šířku kontejneru */}
            <div className="flex flex-col gap-16 md:gap-20">
              {/* 1 — Lead magnety */}
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="10" y="5" width="22" height="30" rx="1" stroke="black" strokeWidth="2" />
                  <line x1="15" y1="13" x2="27" y2="13" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <line x1="15" y1="19" x2="27" y2="19" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <line x1="15" y1="25" x2="22" y2="25" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <path d="M21 29 V42 M21 42 L15 36 M21 42 L27 36" stroke="#FFB000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-xl font-bold text-black mb-3 text-center">
                  1. Lead magnety místo tvrdé nabídky
                </h3>
                <p className="text-base text-black font-medium leading-relaxed w-full">
                  Připravili jsme ebooky šité na míru konkrétním oborům — jeden pro HR, druhý pro zdravotnictví — které řeší reálné problémy cílovky s&nbsp;podepisováním dokumentů. Nižší bariéra vstupu, ale pořád kvalifikovaný kontakt v&nbsp;segmentu, který je pro klienta atraktivní. Atraktivní znamená, že z&nbsp;historických dat zjišťujeme, kde vidíme největší lifetime value zákazníka.
                </p>
              </div>

              {/* 2 — Segmentace podle oboru */}
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 8 H40 L28 22 V32 L20 36 V22 L8 8 Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M20 34 L14 39 M28 34 L34 39" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="14" cy="41" r="3" fill="#FFB000" />
                  <circle cx="34" cy="41" r="3" fill="#FFB000" />
                </svg>
                <h3 className="text-xl font-bold text-black mb-3 text-center">
                  2. Segmentace podle oboru
                </h3>
                <p className="text-base text-black font-medium leading-relaxed w-full">
                  Každý ebook cílil přesně na svou vertikálu, takže obsah i&nbsp;argumentace seděly na konkrétní bolesti daného oboru místo obecné komunikace o&nbsp;elektronickém podpisu.
                </p>
              </div>

              {/* 3 — Přenastavení obchodního procesu */}
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="8" cy="24" r="4" stroke="black" strokeWidth="2" />
                  <path d="M12 24 H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <rect x="20" y="16" width="16" height="16" rx="2" stroke="black" strokeWidth="2" />
                  <path d="M36 24 H42" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <path d="M25 24 L28 27 L33 20" stroke="#FFB000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-xl font-bold text-black mb-3 text-center">
                  3. Přenastavení obchodního procesu
                </h3>
                <p className="text-base text-black font-medium leading-relaxed w-full">
                  Nová strategie přinesla víc kontaktů, ale i&nbsp;vyšší nároky na jejich zpracování. Museli jsme si s&nbsp;klientem sednout, nakreslit zákaznickou cestu a&nbsp;definovat jasné procesy pro obchod i&nbsp;marketing. Nastavili jsme SLA na rychlost reakce, kontaktovací proces a&nbsp;automatizace, aby žádný lead nezapadl. Nově se tedy veškeré leady posílají přímo do Raynetu, kde se automaticky zakládá úkol s&nbsp;deadlinem na obchodní oddělení, které s&nbsp;kontaktem dále pracuje. Díky tomu máme všechny informace na jednom místě, můžeme se podívat na úspěšnost, počítat ROI apod. Víme, kdo si stáhnul ebook, zda dorazil na schůzku i&nbsp;jestli se stal naším zákazníkem a&nbsp;kolik u&nbsp;nás ročně nechá peněz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Komponenta: CAROUSEL FOTEK — červené pozadí, nadpis, carousel se 3 slidy (kreativa/web/evidence leadů), každý s před/po textem a médii (foto i video) */}
      <section className="bg-zac-red py-20 md:py-28 overflow-hidden">
        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Co všechno jsme změnili
          </h2>

          {/* Tři fixní bloky pod sebou (kreativa/web/evidence leadů) — obsah bloku se nemění, šipky jen odskrolují na sousední blok */}
          <div className="flex flex-col gap-20 md:gap-28">
            {carouselSlides.map((slide, i) => (
              <ImageCarousel key={slide.title} slide={slide} index={i} total={carouselSlides.length} />
            ))}
          </div>
        </div>
      </section>
      {/* Komponenta: KARTY KOSOČTVERCE — červené pozadí, nadpis, 3 bílé karty (clip-path trapéz) roztažené přes celou šířku a řazené pod sebou (varianta pro delší text) */}
      <section className="bg-zac-red py-20 md:py-28">
        <div className="lg:w-[72%] max-w-[1150px] mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Výsledky v&nbsp;praxi
          </h2>

          {/* Three cards, stacked, full width */}
          <div className="flex flex-col gap-8">
            {/* Card 1 */}
            <div
              className="bg-white px-8 md:px-14 py-10 md:py-12"
              style={{
                clipPath: "polygon(1% 4%, 97% 0%, 99% 96%, 3% 100%)",
              }}
            >
              <svg className="w-10 h-10 mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <line x1="6" y1="40" x2="42" y2="40" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <rect x="11" y="20" width="9" height="20" stroke="black" strokeWidth="2" />
                <rect x="28" y="9" width="9" height="31" fill="#FFB000" stroke="black" strokeWidth="2" />
              </svg>
              <p className="text-base md:text-lg text-black font-medium leading-relaxed">
                Ebookové kampaně nám měsíčně stabilně generují stálý přísun nových kontaktů. Největší čísla nosí FB leady, ale zároveň jsou leadmagnety zapracované i&nbsp;do webu na specifické landing pages. Co z&nbsp;toho funguje lépe? Pokud jde o&nbsp;čistý objem a&nbsp;cenu za kontakt, jednoznačně vyhrávají Facebook Lead Ads. Pro uživatele je přihlášení na pár kliknutí bez opuštění aplikace extrémně pohodlné, což tlačí cenu za lead dolů. Na druhou stranu, landing pages na webu nutí člověka prostudovat si web a&nbsp;proto jsou často relevantnější. My jsme zde zvolili strategii kvantity, jelikož telefonistka v&nbsp;hovoru rovnou vysvětlí produkt a&nbsp;může zodpovědět dotazy, domluvit prezentaci.
              </p>
            </div>

            {/* Card 2 — inverted trapezoid */}
            <div
              className="bg-white px-8 md:px-14 py-10 md:py-12"
              style={{
                clipPath: "polygon(3% 0%, 100% 3%, 97% 100%, 0% 96%)",
              }}
            >
              <svg className="w-10 h-10 mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="7" y="10" width="34" height="30" rx="2" stroke="black" strokeWidth="2" />
                <line x1="7" y1="18" x2="41" y2="18" stroke="black" strokeWidth="2" />
                <line x1="15" y1="6" x2="15" y2="14" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="33" y1="6" x2="33" y2="14" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 29 L22 34 L32 23" stroke="#FFB000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-base md:text-lg text-black font-medium leading-relaxed">
                To nejdůležitější ale přišlo až na straně obchodu: kampaně přinesly stabilní řadu reálně sjednaných a&nbsp;v&nbsp;CRM evidovaných schůzek. Zásadně se posunula struktura zájemců, do komunikace se dostáváme s&nbsp;většími firmami, které zpracovávají rozsáhlou agendu a&nbsp;běžně podepisují stohy dokumentů měsíčně.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white px-8 md:px-14 py-10 md:py-12"
              style={{
                clipPath: "polygon(0% 2%, 96% 0%, 100% 98%, 2% 100%)",
              }}
            >
              <svg className="w-10 h-10 mb-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <ellipse cx="24" cy="12" rx="14" ry="5" stroke="black" strokeWidth="2" />
                <path d="M10 12 V30 C10 32.76 16.27 35 24 35 C31.73 35 38 32.76 38 30 V12" stroke="black" strokeWidth="2" />
                <path d="M10 21 C10 23.76 16.27 26 24 26 C31.73 26 38 23.76 38 21" stroke="black" strokeWidth="2" />
                <path d="M30 40 A6 6 0 1 1 33 35" stroke="#FFB000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M33 32 L33 36 L29 36" stroke="#FFB000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <p className="text-base md:text-lg text-black font-medium leading-relaxed">
                Díky kampaním zároveň budujeme hodnotnou databázi kontaktů z&nbsp;obou oborů, kterou lze dlouhodobě vytěžovat, i&nbsp;když zrovna daná firma není v&nbsp;přímé nákupní fázi. V&nbsp;rámci kampaní nastavujeme custom audiences pro remarketing a&nbsp;lookalike publika, abychom oslovovali další profilově odpovídající firmy. Vymýšlíme také mailingové automatizace, abychom zůstávali v&nbsp;paměti potenciálních klientů — posíláme pozvánky na webináře, případové studie, nové ebooky i&nbsp;aktuality o&nbsp;nových funkcích a&nbsp;možnostech aplikace. To vše s&nbsp;cílem být top of mind ve chvíli, kdy to daná firma bude řešit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Komponenta: 5 SLOUPCŮ — bílý clip-path blok, nadpis, sloupce s číslem, bold nadpisem a popiskem (upraveno na 3 sloupce dle obsahu inSign) */}
      <section className="bg-zac-red relative">
        <div
          className="bg-white py-16 md:py-24 px-6"
          style={{
            clipPath: "polygon(0 5%, 34% 0%, 75% 3%, 100% 5%, 100% 95%, 67% 100%, 25% 97%, 0 95%)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-16 md:mb-20">
              Díky čemu se to povedlo?
            </h2>

            {/* 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {[
                { num: "01", title: "Odvaha opustit nefunkční formát", desc: "V reelskách jsme se snažili popsat službu podle těch nejvíce distinktivních výhod vůči konkurenci na základě výzkumu. Ale čísla ukázaly, že to na naší cílovku zas tak netankuje." },
                { num: "02", title: "Obsah šitý na míru oboru", desc: "Zaměřit se na všechny firmy, které potřebují elektronický podpis v komunikaci nezafungovalo. Proto jsme šli více do hloubky. HR a zdravotnictví řešily jiné problémy a proto dostaly jiný obsah. Priority pro ebooky skládáme podle historických čísel, kdo klientovi přinesl největší LTV." },
                { num: "03", title: "Propojení marketingu s obchodem", desc: "Nová SLA a automatizace zajistily, že se leady neztrácejí a hlavně reálně víme, z jaké kampaně chodí jaké firmy a jak se nám daří je uzavírat, což bývá nejčastější problém vyhodnocování v B2B. Dlouhé rozhodování a neschopnost vyhodnotit kampaň přímo v reklamním účtu musí nahradit kvalitní automatizace a CRM." },
              ].map((item) => (
                <div key={item.num} className="flex flex-col items-center text-center">
                  <span className="text-5xl md:text-6xl font-black text-zac-yellow italic mb-2 leading-none pt-2">
                    {item.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
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
                  Mějte s&nbsp;námi zacíleno i&nbsp;na sítích.
                </h2>
              </div>
              <div className="flex items-center gap-4 md:gap-8 mr-[15%] md:mr-[25%]">
                <a href="https://www.linkedin.com/company/zac%C3%ADleno/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-zac-yellow transition-colors">
                  <svg className="w-7 h-7 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.facebook.com/zacileno.cz/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-zac-yellow transition-colors">
                  <svg className="w-7 h-7 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="https://www.instagram.com/zacileno.cz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-zac-yellow transition-colors">
                  <svg className="w-7 h-7 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
