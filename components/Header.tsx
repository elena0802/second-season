import Link from "next/link";

const navItems = [
  { href: "/#places", label: "Places" },
  { href: "/journal", label: "Journeys" },
  { href: "/journal", label: "Essays" },
  { href: "/journal", label: "Seasons" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-muted/50">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12 md:py-12">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="group">
            <p className="font-serif text-2xl tracking-[0.22em] text-foreground transition-colors group-hover:text-accent md:text-[1.65rem]">
              SECOND SEASON
            </p>
          </Link>

          <nav aria-label="Primary" className="mt-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.7rem] uppercase tracking-[0.28em] text-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
