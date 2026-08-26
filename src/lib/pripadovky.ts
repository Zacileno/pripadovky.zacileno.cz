/**
 * Seznam případových studií.
 *
 * Přidání nové případovky:
 *   1. vytvoř složku `src/app/<slug>/` se souborem `page.tsx`
 *   2. obrázky dej do `public/<slug>/`
 *   3. přidej sem jeden záznam
 *
 * Z tohoto seznamu se plní rozcestník i sitemapa — nikde jinde se případovky
 * nevypisují.
 */
export type Pripadovka = {
  /** Adresa: pripadovky.zacileno.cz/<slug> */
  slug: string;
  /** Jméno klienta nebo projektu — velký text na kartě */
  klient: string;
  /** Nadpis případovky na kartě */
  nazev: string;
  /** Krátký popis, 1–2 věty */
  perex: string;
  /** Hlavní číslo výsledku, např. „40 %" */
  cislo: string;
  /** Co to číslo znamená */
  cisloPopis: string;
  /** Obor klienta — malý štítek nad nadpisem */
  obor: string;
};

export const pripadovky: Pripadovka[] = [
  {
    slug: "makleri",
    klient: "Realitní kancelář",
    nazev: "Mystery shopping na vlastních makléřích",
    perex:
      "Poptávky chodily, obchody se ale neuzavíraly. Mystery shopping ukázal, že problém nebyl v marketingu, ale v tom, jak s poptávkami pracují makléři.",
    cislo: "40 %",
    cisloPopis: "rychlejší prodej nemovitostí",
    obor: "Reality",
  },
  {
    slug: "insign",
    klient: "inSign",
    nazev: "Jak jsme B2B leadům otočili obsahem, ne tlakem",
    perex:
      "Kampaň cílená rovnou na schůzku dlouhodobě nefungovala. Místo tlaku na rezervaci jsme vsadili na obsah, který zaujme dřív, než je člověk připravený nakoupit.",
    cislo: "35 %",
    cisloPopis: "nižší cena za schůzku",
    obor: "B2B software",
  },
];
