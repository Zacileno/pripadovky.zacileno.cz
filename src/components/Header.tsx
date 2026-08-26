import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-zac-red transform-gpu will-change-transform">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link
            href="https://www.zacileno.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo+symbol.png"
              alt="Zacíleno"
              width={160}
              height={36}
              className="h-[1.4rem] w-auto md:h-8"
              priority
            />
          </Link>

          {/* CTA button */}
          <Link
            href="https://www.zacileno.cz/#kontakty"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-full hover:bg-zac-yellow transition-colors whitespace-nowrap"
          >
            chci zacílit
          </Link>
        </div>
      </div>
    </header>
  );
}
