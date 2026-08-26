# Zacíleno — Knihovna komponent

Tento soubor popisuje **aktuální stav** všech komponent na stránce případové studie
(`src/app/page.tsx` + komponenty v `src/components/`). Je psaný tak, aby při zahájení
ostré případovky stačilo zkopírovat tuto složku, poslat ji Claudovi a on hned věděl,
jak každou komponentu postavit — včetně rozměrů, clip-path, dekorací a chování na mobilu.

> **Jak s tím pracovat:** Řekneš název komponenty (viz tabulka) + reálný obsah (nadpisy,
> texty, fotky, videa, čísla). Claude komponentu naplní. Placeholdery (`/foto.png`,
> `/video1.mp4`, `/video2.mp4`) se nahradí skutečnými soubory.

---

## Důležité konvence (platí globálně)

### Nadpisy = názvy komponent
Hlavní nadpis každé komponenty je aktuálně **název komponenty malými písmeny**
(např. „text + fotka vlevo", „výsledky v číslech"). Slouží to jako přehledová mapa.
**Při ostré případovce se tyto nadpisy nahradí reálnými nadpisy obsahu.**

### Globální šířka obsahu (červené sekce)
Většina červených sekcí používá vycentrovaný kontejner:
```
lg:w-[72%] max-w-[1150px] mx-auto px-6
```
= na desktopu 72 % šířky (cca 14 % volného místa na každé straně), strop 1150 px,
na mobilu plná šířka. Používá se u: HERO, text+fotka (obě), carousel, karty kosočtverce,
galerie, blok s fotkou (obě), videa, CTA.

### Bílé bloky (clip-path)
Bílé bloky jsou **celoplošné** (red sekce → uvnitř `bg-white` blok s clip-path).
Obsah uvnitř je ve vlastním `max-w-*` kontejneru.
```css
clipPath: "polygon(0 5%, 34% 0%, 75% 3%, 100% 5%, 100% 95%, 67% 100%, 25% 97%, 0 95%)"
```
Používá se u: VÝSLEDKY V ČÍSLECH, BÍLÝ BLOK SE SLOUPCI, ZÁKAZNICKÁ CESTA, 5 SLOUPCŮ, TABULKA.

### Dekorace
- Prvky z `/graficke-prvky/` (blesk, blesk2, cary, cikcak1/2, elipsa, tvar1–5, zluta-sipka,
  tecky na pozadi) ve variantách `bila` / `cerna` / `zluta`.
- **Plná viditelnost** (žádná `opacity` na dekoracích).
- Na červeném pozadí → bílé/žluté/černé varianty; na bílém → žluté/červené/černé.
- Dekorace přes obsah (fotky/videa) mají mít `pointer-events-none`, aby neblokovaly kliknutí.

### Barvy (definované v `globals.css` `@theme`)
- `--zac-red: #ED1E00` (hlavní) · `--zac-yellow: #FFB000` (akcenty)
- `--zac-dark-red: #770B00` · černá · bílá

### Fonty (Silka, lokální)
- Nadpisy: `font-bold` (700), bez kurzívy · Text: `font-medium` (500)
- Statistiky/čísla: `font-black italic`
- Lowercase pochází z obsahu, ne přes `text-transform`.

### Responsivita
- Mobil: 1 sloupec, menší písmo; u text+fotka je fotka nad textem (`order`).
- Bílé bloky se roztahují s obsahem.
- Dekorace na mobilu nesmí zakrývat text — omezit počet (`hidden md:block`) nebo posunout.

---

## Pořadí sekcí na stránce (Fairshare)

Pořadí **není** dané pořadím v katalogu komponent níže — řídí se vyprávěním ze zdrojového
zadání (`Případovky Eliška.md`) a upřesněním od Elišky Koloburdové (Slack, 20. 8. 2026):

| # | Role ve vyprávění | Komponenta | Nadpis | Pozadí |
|---|---|---|---|---|
| 1 | úvod | HERO SEKCE | Zacíleno na mystery shopping | červená |
| 2 | špatný proces (stav PŘED) | CX ŘÁDKY — var. na bílém | Proces v číslech | **bílá** |
| 3 | výzva | TEXT + FOTKA (bez fotky) | Výzva | červená |
| 4 | jak jsme to řešili | KARTY KOSOČTVERCE | Jak jsme to řešili | červená |
| 5 | co jsme zjistili v číslech | VÝSLEDKY V ČÍSLECH | Výsledky mystery v číslech | bílá |
| 6 | jak jsme to navrhli nově | BÍLÝ BLOK SE SLOUPCI — var. na červené | Vazba na interní procesy | **červená** |
| 7 | jak jsme to navrhli nově | TABULKA | Modelová cesta zákazníka | bílá |
| 8 | proč se to povedlo | 5 SLOUPCŮ | Díky čemu se to povedlo | bílá |
| 9 | závěr | CTA POTKEJTE SE | Potkejte se s Markétou | červená |
| 10 | patička | FOOTER | Mějte s námi zacíleno i na sítích | červená |

⚠️ **„Proces v číslech" (#2) je stav PŘED, ne výsledky.** Musí stát *před* výzvou a řešením —
jinak za ideální „Modelovou cestou zákazníka" (#7) zůstávají viset špatná čísla a text
si protiřečí. To byla původní chyba, kvůli které se případovka přeskládávala.

⚠️ **Pozadí se řeší převodem sekce, ne přeskládáním obsahu.** Vyprávění má vždy přednost —
nikdy nepřehazuj sekce kvůli barvě. Samotné vyprávěcí pořadí dává 4 červené sekce a pak
4 bílé za sebou; rozbíjí se to převodem jednotlivých sekcí na opačnou variantu pozadí.

Aktuální rozvržení schválila Michaela (20. 8. 2026): **#2 Proces v číslech je bílý, aby
opticky oddělil hero sekci**, #3 Výzva a #4 Jak jsme to řešili zůstávají červené vedle sebe
(záměr), #6 Vazba na interní procesy je převedená na červenou, #7 a #8 jsou bílé vedle sebe.

---

## Přehled komponent

| # | Název | Pozadí | Stručný popis |
|---|---|---|---|
| 1 | HERO SEKCE | červené | **Grid** s explicitním umístěním (ne float). Desktop: vlevo nadpis + žluté vlnky, vpravo nahoře fotka, pod obojím text + pill tlačítko přes celou šířku. Mobil: nadpis → vlnky → text → tlačítko → fotka dole. Žlutý `tvar1` drží vlastní poměr stran a obrázek sedí **uvnitř** něj, dekorace polohované v %. Na Fairshare obrázek `web-2.webp` — viz varianta níže |
| 2 | VÝSLEDKY V ČÍSLECH | bílý clip-path blok | Nadpis, statistiky (`font-black italic`) s dekorativními SVG **zmenšenými o 20 %**; výchozí 3 sloupce (`md:grid-cols-3`), při 4 statistikách `grid-cols-2 md:grid-cols-4` (viz níže) |
| 3 | TEXT + FOTKA (fotka vlevo) | červené | Grid 2 sloupce (`gap-8 md:gap-10`), fotka vlevo v `max-w-[60%] mx-auto` (zmenšená, vycentrovaná ve sloupci), dekorace cikcak/blesk/tvar5 **za fotkou** (fotka `z-20`, dekorace `z-0`); vpravo nadpis + text. Varianta zvětšené fotky: `max-w-[90%]` (viz níže) |
| 4 | TEXT + FOTKA (fotka vpravo) | červené | Zrcadlo #3, fotka vpravo v `max-w-[60%] mx-auto`; na mobilu fotka první (`order`). Varianta bez fotky: žádný grid, jen nadpis + text na celou šířku sekce (viz níže) |
| 5 | BÍLÝ BLOK SE SLOUPCI | bílý clip-path blok | Nadpis, volitelný intro text, 3 sloupce s ikonami (emoji nebo vlastní SVG), bold podnadpisy a popisky. Použito na Fairshare bez podnadpisů a bez intro textu (zdrojový text neměl samostatné podnadpisy k jednotlivým bodům) — viz varianta níže |
| 6 | CAROUSEL FOTEK | červené | Výchozí: nadpis + text, carousel před/po; fotky `w-[33%] md:w-[27%]` (**zmenšené o 40 %**), bílá karta (clip-path trapéz) s titulkem/popisem a šipkami. Varianta „multi-média slidy" (inSign): každý slide má libovolný počet foto/video položek na stranu před/po (masonry/scatter/single layout) + před/po text pod sebou v jednom bloku (viz níže) |
| 7 | KARTY KOSOČTVERCE | červené | Nadpis, 3 bílé karty (clip-path trapéz), prostřední obrácená; výchozí varianta vedle sebe s ikonou+titulkem+krátkým textem, nebo varianta roztažená přes celou šířku a řazená pod sebou pro delší nezkrácený text (viz níže). Na Fairshare jen 2 karty + pod nimi screenshot obrázek (viz varianta níže) |
| 8 | GALERIE | červené | Sliding carousel dvou položek vedle sebe (foto **i video**); root `lg:max-w-[60%] mx-auto` (**desktop 60 %, mobil plná šířka**), hranaté navigační tlačítko. Na inSign obsahuje zbylá videa z kreativy (viz #6) |
| 9 | BLOK S FOTKOU VLEVO | červené | Nadpis nad blokem, fotka vlevo přesahuje přes bílý nepravidelný blok, uvnitř podnadpis + text, dekorace. ⚠️ **Nepoužito v tomto buildu (Fairshare)** |
| 10 | BLOK S FOTKOU VPRAVO | červené | Zrcadlo #9, bílý blok vlevo, fotka vpravo přesahuje; na mobilu fotka první. ⚠️ **Nepoužito v tomto buildu (Fairshare)** |
| 11 | VIDEA | červené | 2 video karty (`gap-12 md:gap-24 max-w-4xl`); video `max-w-[300px]` vycentrované, **BEZ autoplay** — play tlačítko, klik = fullscreen se zvukem; žlutá karta pod videem **na plnou šířku sloupce** s **nepravidelným** clip-path. ⚠️ **Nepoužito v tomto buildu (Fairshare)** |
| 12 | PŘED A PO (dříve „DŘÍVE A NYNÍ") | červené + dekorace | Varianta A (výchozí): úzká vycentrovaná (`lg:w-[45%] lg:max-w-[720px]`), 2 podsekce „Dříve"/„Nyní" jako grid stories 9:16. ⚠️ **Nepoužito v tomto buildu (Fairshare)** |
| 13 | ZÁKAZNICKÁ CESTA | bílý clip-path blok | Nadpis, úvod, 5 překlikávacích tabů (`tvar4` za aktivním), sliding fotka 50 %, popis; obsah **na desktopu zmenšen** (`max-w-5xl lg:max-w-[548px]`), šipky větší (`text-[2.9rem]`). Použito na Fairshare s **8 taby** (dle počtu kroků v obsahu), bez úvodního textu, stejná fotka pro všechny taby (žádné per-krokové podklady nebyly dodány) — viz varianta níže |
| 14 | CX ŘÁDKY | červené | Nadpis, úvod, 4 řádky „levý text → žlutá šipka → pravý text bold", halftone tečky v pozadí. Použito na Fairshare se **3 řádky** (dle obsahu), bez úvodního textu, šipka jako `zluta-sipka.svg` (ne SVG kresba) — viz varianta níže |
| 15 | 5 SLOUPCŮ | bílý clip-path blok | Nadpis, sloupce s velkým žlutým číslem (`font-black italic`), bold podnadpisem a popiskem; výchozí 5 sloupců (`md:grid-cols-5`), počet se řídí obsahem — např. 3 sloupce `md:grid-cols-3` (viz níže) |
| 16 | INTERAKTIVNÍ GRAF | červené | Nadpis + text, přepínací metriky, sloupcový graf s hover tooltipem; dekorace blesk2/elipsa/tvar5 (**žluté čáry odstraněny**). ⚠️ **Nepoužito v tomto buildu (inSign)** |
| 17 | TABULKA | bílý clip-path blok | Nadpis, tabulka se žlutým ohraničením; **na mobilu zmenšené buňky** (`px-1.5 py-2 text-xs`) + `px-3` bloku, ať se vejde bez scrollování; dekorace blesk2/tvar5/blesk/elipsa (**žluté čáry odstraněny**). ⚠️ **Nepoužito v tomto buildu (inSign)** |
| 17a | TEXT NA ČERVENÉM POZADÍ | červené | Vychází z INTERAKTIVNÍ GRAF (stejné dekorace + kontejner `max-w-5xl`), ale **místo grafu text** — nadpis + vycentrované odstavce (`text-white font-medium`). ⚠️ **Nepoužito v tomto buildu (inSign)** |
| 17b | TEXT NA BÍLÉM POZADÍ | bílý clip-path blok | Vychází z TABULKA (stejný bílý blok + dekorace), ale **místo tabulky text** — nadpis + vycentrované odstavce (`text-black`); **dolní text vynechán**. ⚠️ **Nepoužito v tomto buildu (inSign)** |
| 18 | CTA POTKEJTE SE | červené | Vlevo fotka s dekoracemi (žlutý tvar, tečky, elipsa, blesk), vpravo nadpis + text + bílé pill tlačítko + telefon + email |
| 19 | FOOTER | červené → černé → bílé | `footer.svg` pozadí, v černém text + ikony sítí; bílá patička: 3 sloupce kontaktů, **reálná partnerská loga** (`/partneri/`), copyright |

---

## Detaily klíčových komponent

### 5 · BÍLÝ BLOK SE SLOUPCI — varianta s vlastními SVG ikonami + intro text
- Použito na inSign: místo emoji vlastní **inline SVG ikony** (`w-12 h-12`), styl dle brand briefu — tenká černá linka (`stroke="black" strokeWidth="2"`) + žlutý akcent (`#FFB000`) na klíčovém detailu (šipka, tečka).
- Ikony jsou obsahové (vážou se ke konkrétnímu textu sloupce), kreslí se přímo v `page.tsx`, žádná externí knihovna ikon.
- Pod hlavním nadpisem přidán **volitelný intro odstavec** (`text-base md:text-lg text-black font-medium leading-relaxed text-center max-w-3xl mx-auto mb-16 md:mb-20`) — stejný vzor jako u ZÁKAZNICKÉ CESTY.
- Podnadpisy sloupců mohou nést číselnou předponu („1. …", „2. …") jako prostý text, pokud to sedí k obsahu (kroky/fáze).

**Odsazení bílého bloku (upraveno pro inSign):** místo jednotného `py-16 md:py-24` použito `pt-[92px] pb-[108px] md:pt-[138px] md:pb-[163px]` — horní odsazení (nad nadpisem) 2× zvětšeno o 20 % (výchozích 64/96px → 77/115px → 92/138px), dolní odsazení (pod posledním odstavcem) 2× zvětšeno o 30 % (výchozích 64/96px → 83/125px → 108/163px), ať nadpis a text „nelepí" na hranu clip-path bloku.

**Varianta „sloupce pod sebou" (plná šířka, nerovnoměrný obsah):**
- Žádný grid — `flex flex-col gap-16 md:gap-20`, každá položka na celou šířku kontejneru (`max-w-5xl mx-auto px-6` zůstává beze změny).
- Každá položka: `flex flex-col items-center` (ikona + nadpis vycentrované), odstavec `w-full` (bez `max-w-*`, bez `text-center`) — text se roztáhne přes celou šířku.
- Použij, když mají body nerovnoměrně dlouhý text a sloupcové dělení by je zbytečně mačkalo do úzkého bloku.

### 5 · BÍLÝ BLOK SE SLOUPCI — varianta bez podnadpisů (Fairshare)
- Zdrojový text („Vazba na interní procesy") byl jeden souvislý odstavec o 3 větách — rozdělen na 3 sloupce podle existujících hranic vět, beze změny, zkrácení nebo parafráze textu (viz globální pravidlo u KARTY KOSOČTVERCE).
- Bez podnadpisů a bez intro textu, protože zdroj žádné neměl a text se nesmí domýšlet.
- Vlastní inline SVG ikony (`w-10 h-10 mb-5`, černá linka + žlutý akcent), tematicky k obsahu sloupce: dokument s fajfkou (pravidla/proces), štít s fajfkou (kontrolní mechanismy), oko (přehled).
- Grid `grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12`, kontejner `max-w-5xl mx-auto` — stejný vzor jako VÝSLEDKY V ČÍSLECH.

### 6 · CAROUSEL FOTEK — varianta „multi-média slidy" (`ImageCarousel.tsx`, inSign)
- Použito na inSign: nahrazuje samostatnou sekci PŘED A PO (#12) — obsah přesunut sem, ať jde procházet jako slidy (kreativa → web → evidence leadů).
- **Nadpis slidu + navigační šipky `‹ ›` jsou spolu nahoře** (`flex items-center justify-center gap-6 md:gap-10`), hned pod hlavním nadpisem sekce (např. „před a po") — ne dole pod obsahem slidu.
- `ImageCarousel.tsx` přijímá `slides: Slide[]`, kde `Slide = { title: string; before: SideContent; after: SideContent; mediaGridClass?: string }` a `SideContent = { label: string; text: string; media: MediaItem[]; layout?: "single" | "masonry" | "scatter"; compact?: boolean; groupMaxWidth?: string }`.
- `MediaItem = { type: "image" | "video"; src: string; alt?: string; aspect?: string; span?: boolean }` — video položky se renderují přes `GridVideo` (autoplay muted na scroll, klik → fullscreen), foto přes `next/image`.
- Layout se volí podle obsahu: `"single"` (1 položka, na celou šířku, screenshoty webu/CRM), `"masonry"` (víc položek, pevně `grid-cols-2 [grid-auto-flow:dense]`, `span: true` = `col-span-2 row-span-2`, pro sady videí/fotek), `"scatter"` (víc položek, `flex flex-wrap` s rotací/posunem po vzoru brand briefu „vrstvení a náklon", pro rozházené bannery). Bez explicitního `layout` se odvodí automaticky (1 položka → single, víc → masonry).
- `groupMaxWidth` (jen `"masonry"`) nastavuje šířku skupiny přes **inline `style`, ne Tailwind třídu** (`max-w-[…]` z proměnné by se nevygenerovalo, JIT scanner potřebuje literální třídu v souboru) — výchozí `"280px"`, použij pro zvětšení/zmenšení konkrétní skupiny médií (např. `"308px"` = +10 %).
- `compact: true` u `"single"` položky zmenší i statický obrázek na stejnou malou šířku jako video (`max-w-[220px] mx-auto` + `aspect-*`) — použij, když se video a foto zobrazují vedle sebe a mají vypadat jako zarovnaný pár (ne obrázek přes celou šířku sloupce jako u screenshotů webu/CRM).
- Media (before/after) se zobrazují **vedle sebe se žlutou šipkou `»` uprostřed** (`grid md:grid-cols-[1fr_auto_1fr]` výchozí, na mobilu pod sebou a šipka otočená `rotate-90`) — stejný vzor jako u původní varianty ImageCarouselu (`text-zac-yellow text-4xl md:text-5xl font-black`).
- `mediaGridClass` na slidu mění poměr sloupců před/šipka/po (např. `"md:grid-cols-[3fr_auto_2fr]"` pro větší „před" a menší „po" obrázek, prostřední `auto` sloupec pro šipku zůstává) — použij, když má jedna strana vizuálně vážit víc než druhá.
- **Text (label + odstavec pro „před" i „po") je vždy pod médii, všechny čtyři kusy pod sebou v jednom vycentrovaném bloku** (`max-w-3xl mx-auto`) — ne rozeskákaný podle jednotlivých médií.

### 12 · PŘED A PO — varianta „číslované podsekce" (inSign)
- Přejmenováno z „dříve a nyní" na „před a po" — obsah je jinak strukturovaný (číslované tematické bloky typu „1. kreativa", „2. web", „3. evidence leadů"), ne jedna velká sekce Dříve/Nyní.
- Kontejner standardní šířky `lg:w-[72%] max-w-[1150px] mx-auto px-6` (místo úzkého `lg:w-[45%]` z varianty A), protože obsahuje delší odstavce textu, ne jen mřížku dlaždic.
- Každá podsekce: `h3` s číslem („1. kreativa", vycentrovaný), pak blok „před" (bold label `před` + odstavec textu, oboje **vycentrované** — `text-center`, odstavec navíc `max-w-3xl mx-auto`), pod ním **masonry mřížka** médií, pak stejná struktura pro blok „po".
- Videa: masonry mřížka (stejný vzor jako u varianty A / Dříve-Nyní), zmenšená přes `max-w-xl md:max-w-2xl mx-auto`: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5 [grid-auto-flow:dense]`, část dlaždic má `col-span-2 row-span-2` pro nesymetrické, různě velké dlaždice.
- Fotky/bannery (pokud je jich málo, řádově 3): **žádný grid** — `flex flex-wrap items-end justify-center gap-6 md:gap-10`, každá dlaždice pevná menší šířka (`w-20`–`w-40` dle formátu), lehké natočení (`rotate-*`/`-rotate-*` o pár stupňů) a svislý posun (`translate-y-*`/`-translate-y-*`), `shadow-xl` pro odlišení od pozadí — nahodilá, natočená kompozice s překryvem místo zarovnané mřížky (viz brand brief: „vrstvení a náklon", nikdy strnule zarovnaná mřížka).
- Podsekce se srovnaným screenshotem (typ „2. web"): pokud je před/po materiál jediný širší screenshot (ne sada fotek/videí), vloží se jako jeden obrázek na celou šířku bloku `max-w-2xl mx-auto shadow-xl` (bez rotace/rozházení — to je jen pro sady více menších fotek/bannerů), zvlášť pod textem „před" a zvlášť pod textem „po".
- Nová číslovaná podsekce (např. „2. web", „3. evidence leadů") se řadí pod předchozí s `mt-20`, uvnitř stejné `<section>` — nejde o samostatnou sekci, celá komponenta PŘED A PO postupně roste o další podsekce (kreativa, web, evidence leadů…), jak přibývá obsah.
- Screenshot obrázek se škáluje kontejnerem podle svého skutečného poměru stran, ne fixní `aspect-*` třídou — `max-w-2xl mx-auto` pro širší screenshoty (web, tabulka), užší `max-w-md mx-auto` pro čtvercovější náhledy (např. detail systému/CRM), vždy `w-full h-auto object-cover` uvnitř.
- Video soubory ve formátu `.mov` (přímo z klientských podkladů, bez konverze) fungují v `<video>` tagu přes `GridVideo.tsx` stejně jako `.mp4` — pokud by dělal problém v konkrétním prohlížeči, je potřeba převést na `.mp4` (vyžaduje ffmpeg, není v tomto prostředí k dispozici).
- Obrázky (bannery, fotky) se před vložením vždy převádí do **`.webp`** (přes `sharp`, který je už v `node_modules` jako závislost Next.js) — menší soubory, lepší výkon webu. Originální formát (PNG/JPG) se po konverzi smaže.
- Mřížka obrázků nekrouhá poměr stran na jednotné `aspect-[9/16]`, pokud podklady mají různý formát — každá dlaždice dostane `aspect-*` odpovídající skutečnému poměru daného obrázku (např. `aspect-[4/5]` pro feedový formát, `aspect-[9/16]` pro story/reel formát), ať se obrázek neořízne špatně; zvětšené dlaždice (`col-span-2 row-span-2`) si svůj vlastní poměr stran zachovávají také.

### 7 · KARTY KOSOČTVERCE — varianta se screenshotem pod kartami (Fairshare)
- Pod grid dvojicí karet (`grid md:grid-cols-2`) je jeden obrázek na celou šířku bloku (`w-full h-auto max-w-2xl mx-auto mt-12 md:mt-16 shadow-xl`), stejný vzorec jako u screenshotů v PŘED A PO (#12) — bez rotace/rozházení.
- Soubor `public/karty-kosoctverce-screenshot.webp`, převedeno ze zdrojového PNG přes `sharp` dle globální konvence.

### 2 · VÝSLEDKY V ČÍSLECH — velikost čísel (Fairshare: −20 %)
- Čísla zmenšena o 20 % oproti výchozí škále, v arbitrary hodnotách (Tailwind kroky na −20 % nesedí):
  **všechna tři stejně** `text-[3rem] md:text-[3.6rem] lg:text-[4.8rem]`.
- ⚠️ **Delší číslo nedostává menší písmo.** „o 40 %" mělo původně o stupeň menší škálu, protože
  je delší — vedle „32 %" a „28 %" pak působilo utopeně. Statistiky v jedné řadě musí mít
  **identickou velikost**; delší číslo se řeší šířkou sloupce, ne zmenšením písma.
- Dekorace kolem čísel zůstaly v původní velikosti — po zmenšení čísel kolem nich vznikl
  větší prostor, takže se překryv **zmenšil**, ne zvětšil.

### 2 · VÝSLEDKY V ČÍSLECH — dekorace nesmí ležet na číslicích
- **Pravidlo:** na bílém bloku nesmí být **černá** dekorace přes černé číslo. Černá na černé
  udělá z číslice nečitelnou změť — nepomůže ani `-z-10`, protože splyne obrys.
- Přes číslo smí jen **žlutá** (`cary zluta`, `cikcak1 zluta`) nebo **tenká obrysová** dekorace
  (`elipsa cerna` / `elipsa cervena` — ta číslo rámuje, to je v pořádku a je to záměr).
- Dekorace ležící přes číslo musí mít `-z-10`, ať je jednoznačně za ním.
- Opraveno na Fairshare: `cikcak1 cerna` u 28 % (překryv 79 %) a `cikcak2 cerna` u „o 40 %"
  (překryv 57 %) → obojí přebarveno na `cikcak1 zluta` + `-z-10`; u 40 % navíc `-scale-x-100`,
  ať to není viditelná kopie sousedního sloupce. `cikcak2` **nemá** žlutou variantu.
- Kontrola: poměr překryvu dekorace × číslo se dá změřit z `getBoundingClientRect()`; černá
  dekorace přes víc než ~45 % plochy číslice = chyba.

### 14 · CX ŘÁDKY — varianta na BÍLÉM clip-path bloku
- Použito na Fairshare („Proces v číslech"): bílý blok hned pod hero **opticky odděluje hero sekci**.
- Obal jako u ostatních bílých bloků: `<section className="bg-zac-red relative">` →
  `<div className="bg-white py-16 md:py-24 px-6 relative overflow-hidden" style={{clipPath: …}}>`
  → vnitřní kontejner. Texty `text-white` → `text-black`.
- Žlutá šipka (`zluta-sipka.svg`) na bílém zůstává — žlutá je na bílém povolená.
- **Halftone tečky zůstávají i v bílé variantě** (`tecky na pozadi.svg`, `w-[420px] md:w-[560px]
  max-w-none opacity-25`, vycentrované přes `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`).
  Bílý obal musí mít `relative overflow-hidden`, ať tečky nepřetečou clip-path.
- ⚠️ **Schválená výjimka z pravidla „dekorace bez opacity"** (Michaela, 20. 8. 2026): halftone
  na **bílém** pozadí má `opacity-25`. Tečky jsou plnou černí a v plné sytosti dělaly za textem
  šedý flek. Výjimka platí jen pro halftone na bílém — na červených sekcích zůstává plná sytost.

**⚠️ Řádky jsou vedle sebe i na mobilu — nikdy se nelámou pod sebe.**
Vzor: hero CX ŘÁDKY z případovky Koupelny Syrový.
- Grid: `grid-cols-[minmax(0,1fr)_auto_minmax(0,1.55fr)] md:grid-cols-[1fr_auto_2fr]`
  — tři sloupce na **každé** šířce, pravý sloupec širší (nese delší text).
- Šipka **se nerotuje**: `w-[44px] sm:w-[64px] md:w-[90px]`, žádné `rotate-90`.
- Použit **zesílený** soubor `zluta-sipka-silna.svg` (ne `zluta-sipka.svg`). Původní šipka byla
  na bílém pozadí sotva vidět. Zesílení je udělané **bez prodloužení**: dřík dostal navíc
  `stroke="#FFB000" stroke-width="4.5"` ke svému `fill` (obrys shape roztáhne rovnoměrně na
  obě strany, takže zůstane ručně kreslený charakter), hrot má `stroke-width` 3 → 6.
  `viewBox` rozšířen z `0 0 219 24` na `0 -4 219 32`, ať se silnější tahy nezařízly.
  **Původní `zluta-sipka.svg` zůstal nedotčený** — je to sdílený brandový prvek šablony.
- Zarovnání drží i na mobilu: levý text `text-right`, pravý `text-left` (ne `text-center`).
- Písmo: `text-sm sm:text-base md:text-xl`, mezery `gap-2 md:gap-6`.
- Dřívější `grid-cols-1` + `rotate-90` na mobilu rozpadlo řádky pod sebe a rozbilo čtení
  „vlevo příčina → vpravo důsledek". **Nepoužívat.**

### 5 · BÍLÝ BLOK SE SLOUPCI — varianta na ČERVENÉM pozadí
- Použito na Fairshare („Vazba na interní procesy"): převedeno z bílého bloku kvůli střídání.
- Bílý clip-path obal odpadá — sekce je prostě `<section className="bg-zac-red py-20 md:py-28">`
  s kontejnerem `max-w-5xl mx-auto px-6`. **Pozor na počet zavíracích `</div>`** (o jeden míň).
- Text `text-black` → `text-white`.
- **Inline SVG ikony se musí přebarvit:** `stroke="black"` → `stroke="white"`, žlutý akcent
  `#FFB000` zůstává. Případné `fill="white"` uvnitř ikon → `fill="none"`, jinak vznikne bílá
  skvrna na červené.

### 15 · 5 SLOUPCŮ — počet sloupců na mobilu
- Grid je `grid-cols-1 sm:grid-cols-2 md:grid-cols-4` — na telefonu **jeden sloupec**
  (globální pravidlo responsivity), na malém tabletu dva, na desktopu čtyři.
- Dva sloupce na telefonu nepoužívat: bold podnadpisy se lámou do třířádkových proužků.

### 1 · HERO SEKCE — reálná fotka místo ikony (Fairshare)
- Fotka placeholder postupně nahrazena reálnými obrázky dodanými klientem (ve složce případovky → převedeno do `public/*.webp`, `sharp`, zachovaná průhlednost/alpha kanál). Aktuálně použit `web-2.webp` (dřív `web.webp`, dřív `domecky.webp`, dřív vygenerovaná SVG ikona `dum bila.svg` — soubor zůstává v `graficke-prvky/`, ale v hero sekci se už nepoužívá).

**Odsazení shora:** vnitřní kontejner má `pt-10 pb-20` (ne symetrické `py-20`). Hlavička je
`fixed` a vysoká 64 px (`<main className="pt-16">` ji odsazuje), takže symetrických 80 px nahoře
dělalo pod hlavičkou zbytečně velkou díru. Se 40 px se hero zvedne a na 1440×900 se do okna
vejde i pill tlačítko.

**Rozvržení: grid s explicitním umístěním, ne float (opraveno — dřívější `lg:float-right lg:-mt-[156px]` se rozbíjelo).**
Referenční vzor = hero případovky Žaluzieee.
- **Desktop:** vlevo nadpis + žluté vlnky, vpravo nahoře fotka, a **pod obojím text + tlačítko roztažené přes obě kolonky**.
- **Mobil:** jeden sloupec v pořadí nadpis → vlnky → text → tlačítko → **fotka až úplně dole**.
- Obal `grid gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16` uvnitř globálního kontejneru `lg:w-[72%] max-w-[1150px] mx-auto px-6`.
- Tři bloky, pořadí v DOM = pořadí na mobilu, na desktopu je přeskládá explicitní umístění:
  1. nadpis + vlnky → `lg:col-start-1 lg:row-start-1`
  2. odstavce + pill tlačítko → `max-w-4xl lg:col-span-2 lg:col-start-1 lg:row-start-2`
  3. obrázkový blok → `lg:col-start-2 lg:row-start-1 lg:self-start`
- Textový blok má `max-w-4xl` — na desktopu se táhne přes obě kolonky, ale nekončí až u pravé hrany (jako ve vzoru).
- Nadpis má o krok jemnější škálu (`text-4xl md:text-5xl lg:text-5xl xl:text-6xl`), protože na desktopu sedí jen v levé polovině.
- **Nikdy nepoužívat `float` + záporný `margin-top`** pro posazení fotky vedle nadpisu — mezi 1024 a 1440 px fotka najela na nadpis.

**Obrázkový blok: obrázek je vnořený ve žlutém tvaru, ne položený vedle něj.**
- Kořen `relative w-full max-w-[520px] mx-auto lg:max-w-none` — na mobilu vycentrovaný se stropem, na desktopu vyplní svůj sloupec.
- Žlutý `tvar1.svg` drží svůj **vlastní poměr stran**: obal `relative z-10 w-full aspect-[686/326]` (rozměry zdrojového SVG), samotné SVG `absolute inset-0 w-full h-full -rotate-3`.
- `<Image>` (`next/image`, `width={1080} height={365}` = skutečný poměr zdroje) sedí **uvnitř** toho obalu: `absolute inset-0 z-20 flex items-center justify-center` + `className="w-[80%] h-auto"`.
- **Proč takhle:** obrázek i tvar se počítají z jedné a té samé šířky, takže zůstávají zamčené k sobě na každé velikosti okna. Dřív měl tvar `w-[90%]` sloupce a obrázek vlastní strop `max-w-[619px]` — dvě různá pravidla, takže se rozešly (obrázek trčel ven o 11–29 px, na 768 px byl naopak tvar o 42 px širší).
- Dekorace se polohují **v procentech** kořene, ne v pixelech, ať se škálují spolu s ním: tečky `-top-[24%] -right-[12%] w-[62%] z-0`, cikcak `-bottom-[14%] -left-[7%] w-[26%] rotate-6 z-30`. Všechny mají `pointer-events-none`.
- Vrstvení: tečky `z-0` → žlutý tvar `z-10` → obrázek `z-20` → cikcak `z-30`.
- Blesk vlevo dole je `hidden md:block` — na mobilu se dostával k textu.
- Při výměně fotky se mění jen `src` + `width`/`height` (skutečný poměr zdroje); `w-[80%]` se ladí jen tehdy, když má nový obrázek výrazně jiný poměr stran než 1080:365.

**Ověřeno:** 320–1920 px po 20 px (81 šířek) — obrázek vycentrovaný v tvaru, žádný přesah, žádný překryv s nadpisem, odstavci ani tlačítkem, žádné vodorovné rolování.

### 20 · ZVĚTŠITELNÝ OBRÁZEK (`ZoomableImage.tsx`)
Klientský komponent pro screenshoty s drobným textem (tabulky, výpisy), které se v běžné
velikosti nedají přečíst — hlavně na telefonu.

```tsx
<ZoomableImage src="/soubor.webp" alt="Popis" className="w-full max-w-2xl mx-auto mt-12 md:mt-16" />
```

- **Náhled:** obrázek + žlutý štítek „zvětšit" s lupou vpravo dole, kurzor `cursor-zoom-in`.
  Celé je to `<button>`, ne `<div onClick>` — funguje klávesnice i odečítač obrazovky.
- **Prohlížeč má DVA stavy** (`fixed inset-0 z-[100] bg-black flex flex-col`, nahoře lišta
  s nápovědou a žlutým ✕):
  1. **„celý obrázek"** — výchozí. `max-w-full max-h-full object-contain`, celý se vejde na
     obrazovku, člověk hned vidí, co to je. Nápověda: „Klepnutím na obrázek přiblížíte".
  2. **„přiblíženo"** — skutečná velikost (`max-w-none w-[1654px]`), obal `overflow-auto
     touch-pinch-zoom`. Nápověda: „Klepnutím zmenšíte · obrázek posunete prstem".
  Klepnutí na obrázek mezi stavy přepíná.
- ⚠️ **Nikdy neotvírej rovnou ve skutečné velikosti.** Screenshot je 1654 × 500 px, tj. 3,3×
  širší než vyšší; na telefonu (400 px) je to 4,1× přes obrazovku — vidět je jen levý okraj
  (sloupec A) a člověk netuší, že má posouvat. Působí to jako rozbité.
- Po přiblížení se plocha **odroluje doprostřed** obrázku (`scrollLeft/scrollTop` na střed),
  ať se nezačíná na levém okraji.
- **Zavírání:** klik mimo obrázek, žluté ✕, nebo Escape. Vše ověřeno.
- Dokud je prohlížeč otevřený, stránka pod ním nescrolluje (`document.body.style.overflow`);
  po zavření se původní hodnota vrací zpět.
- Použito na Fairshare u screenshotu vyhodnocovací tabulky pod KARTAMI KOSOČTVERCE.

### 7 · KARTY KOSOČTVERCE — nepravidelný clip-path (Fairshare)
- Karty **nejsou** pravidelné lichoběžníky. Používá se stejný vzorec jako u žlutých karet
  ve VIDEA (#11): **8bodový polygon** s rozkolísanými hranami, takže horní i dolní hrana
  mírně vlní a boky se sbíhají.
  - Karta 1 (sbíhá se nahoře): `polygon(7% 1%, 39% 0%, 70% 2.5%, 93% 0%, 100% 97.5%, 67% 100%, 33% 97%, 0% 100%)`
  - Karta 2 (zrcadlo, sbíhá se dole): `polygon(0% 0%, 34% 2.5%, 68% 0%, 100% 2%, 93% 100%, 64% 97%, 30% 100%, 7% 97.5%)`
- Boční zkosení drž do **7 %** šířky a vlnění hran do **3 %** výšky — víc už zasáhne do
  odsazení karty (`px-8 md:px-10 py-10 md:py-12`) a začne ukrajovat text.
- Text je vycentrovaný (`items-center text-center`), takže se od šikmých hran drží dál než
  text zarovnaný do bloku — u zarovnání vlevo by se muselo odsazení zvětšit.
- Kontrola: text uvnitř karty musí zůstat v obdélníku zmenšeném o 7,5 % šířky a 3,5 % výšky
  na každou stranu; clip-path text nepřelamuje, jen ho vizuálně ořízne.

### 7 · KARTY KOSOČTVERCE — varianta roztažená pod sebou (plný text, beze zkracování)
- Použito na inSign („výsledky v praxi"): 3 dlouhé odstavce, žádný samostatný intro text nad kartami (aby se neopakoval obsah z první karty).
- Bez `grid` — `flex flex-col gap-8`, každá karta na celou šířku sekce (`lg:w-[72%] max-w-[1150px] mx-auto px-6` beze změny).
- Karty bez titulku (zdrojový text nemá per-kartu nadpisy a **nesmí se do něj nic dopisovat**), ale s vlastní SVG ikonou nad textem (`w-10 h-10 mb-5`, černá linka + žlutý akcent) — ikona je čistě dekorativní doplněk, netextový, takže nezasahuje do pravidla „needit text".
- **Pravidlo, které z toho plyne (platí globálně):** dodaný text se nikdy nezkracuje, neparafrázuje ani nerozděluje na vymyšlené podnadpisy — pokud je text na krátkou kartu příliš dlouhý, karta se roztáhne a text se použije celý, ne naopak.

### 3 · TEXT + FOTKA (fotka vlevo) — varianta zvětšené fotky, dekorace za fotkou
- Použito na inSign (o klientovi): fotka zvětšená o 50 % (`max-w-[60%]` → `max-w-[90%]`).
- Dekorace (cikcak, blesk, tvar5) přesunuty **před** fotku v DOM a mají explicitní `z-0`; samotná fotka má `z-20` — takže dekorace jsou vizuálně **za** fotkou, ne nad ní (opak výchozího stavu, kde dekorace kartu překrývaly).

### Mezery mezi sekcemi se stejným pozadím
Sousedí-li dvě sekce se **stejným** pozadím, jejich svislá odsazení se sčítají do jedné velké
prázdné plochy — chybí barevný předěl, který by ji rozbil. U různých pozadí to nevadí (~208 px
je v pořádku), u stejných je to vidět jako díra.

- Řešení: **zmenšit spodní odsazení té horní sekce**, ne obě. Odsazení nechá vlastnit spodní sekce.
- Použito na Fairshare: Výzva → Jak jsme to řešili (obojí červené) mělo 224 px.
  Výzva má proto `pt-20 md:pt-28 pb-2 md:pb-4` místo `py-20 md:py-28` → mezera **128 px**.
- ⚠️ Ostatní dvojice se stejným pozadím (Modelová cesta → Díky čemu, 192 px; CTA → Footer,
  112 px) se **záměrně needitovaly** — tam mezera vadit nezačala.

### 4 · TEXT + FOTKA (fotka vpravo) — varianta bez fotky
- Použito na inSign (výzva): žádná fotka nebyla dodaná, takže sloupcový grid odpadá — `<div className="lg:w-[72%] max-w-[1150px] mx-auto px-6">` obsahuje jen nadpis a odstavce na celou šířku sekce, beze změny zarovnání (zůstává vlevo, jako v původním sloupci).

### 15 · 5 SLOUPCŮ — varianta 3 sloupce
- Použito na inSign („díky čemu se to povedlo?"): jen 3 body místo výchozích 5.
- Kontejner zúžen `max-w-6xl` → `max-w-5xl`, grid `md:grid-cols-5` → `md:grid-cols-3`, mezery `gap-10 md:gap-6` → `gap-10 md:gap-12` (víc prostoru na širší sloupce).
- Poslední sloupec může mít výrazně delší popisek než ostatní — sloupce se nevýrazně nezarovnávají výškou, to je v pořádku.

### 2 · VÝSLEDKY V ČÍSLECH — varianta 4 statistiky
- Použito na inSign: 4 statistiky místo výchozích 3.
- Grid: `grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16 md:gap-10` (mobil 2×2, desktop 1×4).
- Čísla mírně zmenšena oproti 3sloupcové variantě (`text-5xl md:text-6xl lg:text-7xl` místo `text-6xl md:text-7xl lg:text-8xl`), dekorace úměrně menší (elipsa ~80–90px, cikcak ~100–110px, tvar5 ~130px), ať se vejdou do užších karet.
- Popisek pod číslem je kratší (fráze, ne celá věta), aby seděl do užšího sloupce.

### 11 · VIDEA (`VideoCard.tsx`)
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-4xl mx-auto` (širší bloky, videa dál od sebe).
- **Video náhled:** `aspect-[9/14]`, `max-w-[300px] mx-auto` (menší video, vycentrované v kartě).
- **Bez autoplay** — video se nepouští samo; žluté kulaté play tlačítko; **klik → fullscreen modál** se zvukem a ovládáním. (Odlišné od globálního pravidla „autoplay" — platí jen zde.)
- **Žlutá karta** pod videem: plná šířka sloupce, `-mt-4` překryv, **nepravidelný clip-path** (8 bodů), např.:
  - `polygon(0% 4%, 35% 0%, 72% 3%, 100% 0%, 97% 96%, 63% 100%, 28% 96%, 2% 100%)`
  - `polygon(2% 0%, 45% 3%, 80% 0%, 98% 4%, 100% 97%, 68% 100%, 30% 96%, 0% 99%)`
- Dekorace: cikcak vpravo dole, cary čáry v kartě.

### 12 · DŘÍVE A NYNÍ
- Sekce: `relative overflow-hidden` s dekoracemi (`pointer-events-none`): elipsa zluta, cikcak bila,
  blesk zluta, cary zluta, blesk2 zluta — **na desktopu** blízko gridu; **na mobilu** jen 1 drobný blesk v rohu.
- Obsah úzký a vycentrovaný: `lg:w-[45%] lg:max-w-[720px] mx-auto px-6` (mobil plná šířka, aby byly 2 dlaždice vedle sebe).
- 2 podsekce „Dříve" / „Nyní", každá **grid stories 9:16**:
  ```
  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-7 [grid-auto-flow:dense]
  ```
- **Každá dlaždice `aspect-[9/16]`** (stories formát). Některé dlaždice jsou větší:
  `col-span-2 row-span-2`. `grid-auto-flow:dense` vyplní mezery menšími dlaždicemi.
- Fotky = `<Image ... className="w-full h-full object-cover">` v `<div className="overflow-hidden aspect-[9/16]">`.
- Videa = `GridVideo` (autoplay muted když viditelné, klik → fullscreen modál).

### 13 · ZÁKAZNICKÁ CESTA (`TabCarousel.tsx`)
- Obsah: `max-w-5xl lg:max-w-[548px] mx-auto` — **zmenšeno jen na desktopu**, mobil beze změny.
- 5 tabů; aktivní má za sebou `tvar4.svg`. Fotka 50 % šířky se slide efektem (`translateX`).
- Přepínací šipky `‹ ›`: `text-[2.9rem] font-black`, žluté (hover červené).

### 17 · TABULKA — mobil
- Buňky (`th`/`td`): `border-2 border-zac-yellow px-1.5 md:px-6 py-2 md:py-3 text-xs md:text-base`.
- Bílý blok: `px-3 md:px-6` (na mobilu užší okraje).
- Cíl: celá tabulka viditelná hned, **bez vodorovného scrollování** na telefonu.

### 17a · TEXT NA ČERVENÉM POZADÍ (vychází z INTERAKTIVNÍ GRAF)
- Sekce: `bg-zac-red py-20 md:py-28 relative overflow-hidden`, stejné dekorace jako graf
  (blesk2 zluta vpravo nahoře, elipsa zluta vlevo dole, tvar5 vpravo dole).
- Kontejner: `max-w-5xl mx-auto px-6 relative z-10`.
- Obsah: `h2` (nadpis, `text-white`) + **vycentrované odstavce** (`text-lg md:text-xl text-white font-medium leading-relaxed text-center max-w-2xl mx-auto`).
- **Rozdíl oproti grafu:** místo `<InteractiveChart />` je textový blok.

### 17b · TEXT NA BÍLÉM POZADÍ (vychází z TABULKA)
- Sekce: `bg-zac-red` → bílý clip-path blok (`bg-white py-16 md:py-24 px-3 md:px-6 relative overflow-hidden`)
  se stejným clip-path a stejnými dekoracemi jako tabulka (blesk2, tvar5, blesk, elipsa — žluté).
- Kontejner: `max-w-5xl mx-auto relative z-10`.
- Obsah: `h2` (nadpis, `text-black`) + **vycentrované odstavce** (`text-lg md:text-xl text-black font-medium leading-relaxed text-center max-w-3xl mx-auto`).
- **Rozdíly oproti tabulce:** místo `<table>` je textový blok a **dolní text (pod tabulkou) je vynechán**.

### 19 · FOOTER — patička s logy
- Kontejner patičky: `max-w-6xl mx-auto px-6`.
- **Partnerská loga** (reálná PNG v `public/partneri/`): sklik, google, shoptet, ecomail, meta, make, pinterest.
  - Sjednocená výška `h-8 md:h-10`, **sklik a shoptet zmenšené** na `h-[1.4rem] md:h-7`.
  - Rozložení: `flex flex-wrap justify-center md:justify-between` (mobil vycentrované řádky, desktop roztažené do stran).
  - Nad logy velká mezera od kontaktů: `mt-24`.

---

## Společné clip-path vzory

### Bílý blok (celoplošný)
```css
clipPath: "polygon(0 5%, 34% 0%, 75% 3%, 100% 5%, 100% 95%, 67% 100%, 25% 97%, 0 95%)"
```

### Bílý nepravidelný blok (BLOK S FOTKOU)
- Fotka vlevo: `polygon(2% 0%, 100% 3%, 98% 100%, 0% 97%)`
- Fotka vpravo: `polygon(0% 3%, 98% 0%, 100% 97%, 2% 100%)`

### Karty kosočtverce (trapéz)
- Normální (širší dole): `polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)`
- Obrácená (širší nahoře): `polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)`

### Žlutá karta u videa (nepravidelná)
- viz VIDEA výše (8bodové polygony).

### Carousel navigační tlačítko (hranaté)
```css
clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)"
```

---

## Komponenty (soubory v `src/components/`)
- `Header.tsx` — fixní červená hlavička. **Varianta inSign:** žádné navigační odkazy ani hamburger menu — jen logo vlevo a tlačítko „chci zacílit" vpravo, `href` míří ven na `https://www.zacileno.cz/#kontakty` (`target="_blank"`). Výchozí varianta s `navItems` (služby/jak pracujeme/reference/kariéra/kontakty) + mobilní hamburger je zdokumentovaná pro případ, že by ji chtěl jiný klient zpět.
- `ImageCarousel.tsx` — výchozí: carousel před/po; fotky `w-[33%] md:w-[27%]`, bílá trapézová karta s popisem a šipkami. Rozšířeno o multi-média variantu (viz komponenta #6 výše) — `slides` teď mohou nést libovolný počet foto/video položek na stranu a víceřádkový text.
- `GalleryCarousel.tsx` — sliding galerie dvou položek; `lg:max-w-[60%] mx-auto` (mobil plná šířka). Přijímá `images: (string | { type: "image" | "video"; src: string; alt?: string })[]` — čistý string se bere jako obrázek, video se renderuje přes `GridVideo`
- `VideoCard.tsx` — video karta BEZ autoplay, play tlačítko, fullscreen modál; menší video + široká nepravidelná žlutá karta
- `GridVideo.tsx` — malé autoplay video (muted); klik → modál. Používá se v gridu 9:16 (varianta A komponenty #12) i uvnitř `ImageCarousel.tsx` (multi-média slidy)
- `TabCarousel.tsx` — překlikávací taby s fotkou a popisem; větší šipky
- `InteractiveChart.tsx` — sloupcový graf s přepínáním metrik

## Assets
- `public/graficke-prvky/` — dekorativní SVG (blesk, blesk2, cary, cikcak1/2, elipsa, tvar1–5, zluta-sipka, tecky na pozadi, footer.svg) ve variantách bila/cerna/zluta
- `public/partneri/` — partnerská loga (sklik, google, shoptet, ecomail, meta, make, pinterest)
- `public/foto.png` — placeholder fotka · `public/video1.mp4`, `public/video2.mp4` — placeholder videa
- `public/logo+symbol.png` — bílé logo (neinvertovat)
- `public/karty-kosoctverce-screenshot.webp` — screenshot vyhodnocovací tabulky mystery shoppingu (Fairshare, KARTY KOSOČTVERCE)
- `src/fonts/` — Silka woff2 (váhy 200–900)
