import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "@/components/site/Logo";

const orari = [
  ["Lunedì", "Chiuso"],
  ["Martedì", "09:00 – 17:30"],
  ["Mercoledì", "09:00 – 17:30"],
  ["Giovedì", "11:00 – 19:00"],
  ["Venerdì", "09:00 – 18:30"],
  ["Sabato", "08:00 – 16:00"],
  ["Domenica", "Chiuso"],
];

export function Footer() {
  return (
    <footer className="surface-dark">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo size={52} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              Salone di parrucchieri a Senigallia. Colore, piega e cura della cute con Luisa e Federica.
            </p>
            <a
              href="https://www.instagram.com/lefparrucchieri/"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-sm text-cream/85 transition-colors hover:border-primary hover:text-cream"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              @lefparrucchieri
            </a>
          </div>

          <div>
            <h3 className="text-lg text-cream">Contatti</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href="https://maps.google.com/?q=Via+Piave+2/8+60019+Senigallia+AN"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-cream"
                >
                  Via Piave, 2/8 — 60019 Senigallia (AN)
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="tel:+3907160435" className="transition-colors hover:text-cream">
                  +39 071 60435
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Chiuso domenica e lunedì</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-cream">Orari</h3>
            <ul className="mt-5 space-y-2 text-sm text-cream/75">
              {orari.map(([giorno, ora]) => (
                <li key={giorno} className="flex justify-between gap-4 border-b border-cream/10 pb-2">
                  <span>{giorno}</span>
                  <span className={ora === "Chiuso" ? "text-cream/45" : "text-cream"}>{ora}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lef Parrucchieri — Via Piave 2/8, Senigallia (AN)</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Note legali">
            <Link to="/privacy" className="transition-colors hover:text-cream">
              Privacy Policy
            </Link>
            <Link to="/cookie" className="transition-colors hover:text-cream">
              Cookie Policy
            </Link>
            <Link to="/termini" className="transition-colors hover:text-cream">
              Termini e condizioni
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
