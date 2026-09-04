import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/site/Logo";

const links = [
  { href: "/#servizi", label: "Servizi" },
  { href: "/#metodo", label: "Metodo" },
  { href: "/#salone", label: "Il salone" },
  { href: "/#recensioni", label: "Recensioni" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Lef Parrucchieri, torna alla home">
          <Logo size={40} className="shrink-0" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigazione principale">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-cream/80 transition-colors hover:text-cream after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+3907160435"
            className="hidden text-sm text-cream/70 transition-colors hover:text-cream xl:inline"
          >
            071 60435
          </a>
          <a
            href="#prenota"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Prenota il tuo posto
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+3907160435"
            aria-label="Chiama il salone"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Chiudi il menu" : "Apri il menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cream/25 text-cream"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="surface-dark lg:hidden">
          <nav className="flex flex-col gap-1 px-5 pb-6 pt-2" aria-label="Navigazione mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-lg text-cream/90 transition-colors hover:bg-cream/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#prenota"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-5 py-3.5 text-center text-base font-medium text-primary-foreground"
            >
              Prenota il tuo posto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
