import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="surface-dark pb-16 pt-32">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Torna alla home
            </Link>
            <h1 className="mt-6 text-4xl text-cream sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-cream/70">{intro}</p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl space-y-8 px-5 py-16 lg:px-8 [&_h2]:text-2xl [&_h2]:mb-3 [&_li]:text-sm [&_li]:leading-relaxed [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-muted-foreground">
          {children}
          <p className="rounded-2xl border border-dashed border-primary/40 bg-accent/30 p-5 text-accent-foreground">
            <strong>Nota:</strong> questo testo è una base standard. Prima della pubblicazione va completato con
            i dati reali del titolare del trattamento (ragione sociale, partita IVA, indirizzo email di
            contatto) e verificato da un consulente.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
