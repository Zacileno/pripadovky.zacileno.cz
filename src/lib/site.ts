/** Ostrá adresa webu. Používá se pro sitemapu, robots.txt a odkazy pro sdílení. */
export const PRODUCTION_URL = "https://pripadovky.zacileno.cz";

export function getSiteUrl(): string {
  // Ostrý provoz — vždy vlastní doména, ne adresa vercel.app.
  if (process.env.VERCEL_ENV === "production") return PRODUCTION_URL;
  // Náhledové (preview) nasazení — dočasná adresa daného deploymentu.
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  // Lokální vývoj.
  return process.env.NODE_ENV === "production"
    ? PRODUCTION_URL
    : "http://localhost:3000";
}

/** Kontejner Google Tag Manageru (není tajný, v prohlížeči je vidět vždy). */
export const GTM_ID = "GTM-55M944R";
