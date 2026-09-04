import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Scissors,
  Droplets,
  Palette,
  Crown,
  HeartHandshake,
  Star,
  MessageCircle,
  Search,
  CalendarCheck,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Instagram,
  ChevronRight,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import heroImg from "@/assets/lef-biondo.jpg.asset.json";
import castanoImg from "@/assets/lef-castano.jpg.asset.json";

const TITLE = "Lef Parrucchieri Senigallia | Colore, piega e cura dei capelli";
const DESCRIPTION =
  "Salone di parrucchieri a Senigallia, in Via Piave 2/8. Consulenza personalizzata, colore su misura, piega che dura e trattamenti per cute e capelli. 4,8 su 48 recensioni Google.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Lef Parrucchieri",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Piave, 2/8",
            postalCode: "60019",
            addressLocality: "Senigallia",
            addressRegion: "AN",
            addressCountry: "IT",
          },
          telephone: "+39 071 60435",
          sameAs: ["https://www.instagram.com/lefparrucchieri/"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "48",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday"], opens: "09:00", closes: "17:30" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "11:00", closes: "19:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:30" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const servizi = [
  {
    icon: Palette,
    title: "Colore su misura",
    text: "Il colore viene scelto insieme, guardando incarnato, base di partenza e quanto tempo vuoi dedicare al mantenimento.",
  },
  {
    icon: Sparkles,
    title: "Schiariture e luce",
    text: "Riflessi e schiariture costruite ciocca per ciocca, per una crescita morbida senza stacchi netti.",
  },
  {
    icon: Scissors,
    title: "Taglio e piega",
    text: "Un taglio pensato per la forma del viso e per la tua manualità, così a casa lo rifai davvero.",
  },
  {
    icon: Droplets,
    title: "Trattamenti cute e capelli",
    text: "Percorsi mirati per cute grassa, secca o sensibile e per capelli che hanno bisogno di ritrovare corpo.",
  },
  {
    icon: Crown,
    title: "Acconciature per eventi",
    text: "Cerimonie, matrimoni, serate importanti: acconciature curate e provate prima, senza sorprese.",
  },
  {
    icon: HeartHandshake,
    title: "Consulenza dedicata",
    text: "Prima di iniziare parliamo. Analizziamo capelli e abitudini e ti diciamo con onestà cosa è realistico.",
  },
];

const passi = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Ci racconti cosa vorresti",
    text: "Al telefono o in salone: cosa non ti piace oggi, cosa hai già provato, quanto tempo hai per i tuoi capelli.",
  },
  {
    icon: Search,
    step: "02",
    title: "Analizziamo capelli e cute",
    text: "Valutiamo struttura, colore di partenza e stato della cute. Da qui nasce una proposta concreta, non generica.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Realizziamo il servizio",
    text: "Lavoriamo con calma, spiegandoti cosa stiamo facendo e perché. Nessun risultato deciso al posto tuo.",
  },
  {
    icon: CalendarCheck,
    step: "04",
    title: "Ti diciamo come mantenerlo",
    text: "Consigli pratici su lavaggi, prodotti e tempi di ritocco, così il risultato dura anche fuori dal salone.",
  },
];

const benefici = [
  "Un colore che ti somiglia, non una moda copiata",
  "Una piega che regge anche dopo giorni",
  "Una cute più equilibrata e capelli che si sporcano meno",
  "Meno tempo perso davanti allo specchio ogni mattina",
  "Consigli onesti su cosa fare e cosa evitare",
  "Un ambiente accogliente, senza fretta e senza giudizio",
];

const perChi = [
  {
    title: "Chi cambia salone in continuazione",
    text: "Hai provato tanti parrucchieri senza mai trovarti davvero. Qui si parte dall'ascolto, prima delle forbici.",
  },
  {
    title: "Chi ha problemi di cute",
    text: "Sebo in eccesso, secchezza, prurito o capelli che si sporcano subito: esistono trattamenti mirati.",
  },
  {
    title: "Chi vuole un colore naturale",
    text: "Niente effetti innaturali: riflessi e schiariture costruiti per crescere bene e restare eleganti.",
  },
  {
    title: "Chi è di passaggio a Senigallia",
    text: "In vacanza o per lavoro, con poco tempo a disposizione e la voglia di uscire soddisfatta.",
  },
];

const recensioni = [
  {
    text: "Il miglior parrucchiere di Senigallia, Luisa e Federica sono fantastiche e bravissime.",
    author: "Laura Scacco",
    meta: "Recensione Google",
  },
  {
    text: "Su consiglio di Luisa e Federica ho provato il trattamento all'ossigeno per migliorare la mia cute. Il trattamento ha funzionato benissimo: ora i miei capelli sono più voluminosi, si sporcano molto meno e la cute non si squama più.",
    author: "Maria Vittoria Mazzanti",
    meta: "Recensione Google",
  },
  {
    text: "Gentilissime, molto competenti e oneste, hanno subito capito le mie esigenze, trovando il colore giusto per i miei capelli. La piega è stata eccezionale, dei ricci afro spettacolari che, a distanza di giorni, nonostante vento e salsedine, sono ancora intatti.",
    author: "Ilaria Testa",
    meta: "Recensione Google",
  },
];

const faq = [
  {
    q: "Come prenoto un appuntamento?",
    a: "Puoi chiamare il salone allo 071 60435 durante gli orari di apertura, scriverci su Instagram oppure compilare il modulo di richiesta qui sul sito: ti ricontattiamo per confermare giorno e ora.",
  },
  {
    q: "Dove si trova il salone?",
    a: "In Via Piave 2/8, a Senigallia (AN). Trovi il collegamento diretto alla mappa nel footer del sito.",
  },
  {
    q: "Quali sono gli orari di apertura?",
    a: "Martedì e mercoledì 9:00–17:30, giovedì 11:00–19:00, venerdì 9:00–18:30, sabato 8:00–16:00. Domenica e lunedì siamo chiusi.",
  },
  {
    q: "La consulenza iniziale è inclusa?",
    a: "Sì. Prima di ogni servizio dedichiamo del tempo a capire cosa desideri e a valutare capelli e cute, così da proporti solo ciò che ha davvero senso per te.",
  },
  {
    q: "Posso venire anche se non so cosa voglio?",
    a: "Assolutamente sì. È il caso più frequente: ci racconti cosa non ti convince oggi e ti proponiamo una o due strade realistiche, spiegandoti pro e contro di ciascuna.",
  },
  {
    q: "Quanto costa un servizio?",
    a: "Il prezzo dipende dalla lunghezza dei capelli e dal tipo di lavoro. Chiamaci o scrivici indicando cosa ti interessa: ti diamo un'indicazione chiara prima dell'appuntamento.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="surface-dark relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-1.5 text-xs tracking-[0.2em] text-cream/80 uppercase">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
                  4,8 su 48 recensioni Google
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 text-4xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
                  I tuoi capelli,
                  <br />
                  <span className="text-gradient">finalmente come li vuoi.</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
                  Lef Parrucchieri è il salone di Luisa e Federica a Senigallia. Colore su misura, pieghe che
                  durano e trattamenti per la cute, scelti insieme a te dopo una consulenza vera.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#prenota"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Prenota il tuo posto
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#servizi"
                    className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-4 text-base text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
                  >
                    Guarda i servizi
                  </a>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cream/10 pt-6">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-cream/50">Valutazione</dt>
                    <dd className="mt-1 font-display text-2xl text-cream">4,8</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-cream/50">Recensioni</dt>
                    <dd className="mt-1 font-display text-2xl text-cream">48</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-cream/50">Dove</dt>
                    <dd className="mt-1 font-display text-2xl text-cream">Senigallia</dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <img
                  src={heroImg.url}
                  alt="Capelli lunghi biondo caldo con schiariture realizzate nel salone Lef Parrucchieri"
                  className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-glow)]"
                  width={456}
                  height={741}
                />
                <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-cream px-5 py-4 shadow-[var(--shadow-soft)] sm:block">
                  <p className="font-display text-lg text-ink">Piega perfetta</p>
                  <p className="text-xs uppercase tracking-widest text-primary">Primo protocollo</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Il punto di partenza</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
              Uscire dal parrucchiere e non riconoscersi allo specchio è la cosa più frustrante che ci sia.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Spesso non è colpa tua e nemmeno di un prodotto sbagliato: è mancata la parte più importante,
              cioè capire davvero cosa desideri e cosa i tuoi capelli possono sostenere.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Un colore diverso ogni volta, mai davvero quello immaginato",
              "La piega che sparisce dopo poche ore",
              "Radici che crescono con uno stacco netto e visibile",
              "Capelli che si sporcano il giorno dopo il lavaggio",
              "Cute che prude, si squama o produce troppo sebo",
              "Nessuno che ti spieghi cosa fare a casa",
            ].map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
                  <span className="font-display text-3xl text-primary/35">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-sm leading-relaxed text-card-foreground">{item}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* SOLUZIONE */}
        <section id="metodo" className="bg-secondary/60 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <img
                src={castanoImg.url}
                alt="Capelli castani lunghi con onde morbide realizzati da Lef Parrucchieri a Senigallia"
                className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
                width={456}
                height={689}
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">La nostra soluzione</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
                Prima si ascolta, poi si lavora. È tutto qui il metodo Lef.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Luisa e Federica non partono mai dal colore o dalle forbici. Partono da una domanda semplice:
                come vuoi sentirti quando esci da qui?
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Da lì valutiamo la struttura del capello e lo stato della cute, e costruiamo un percorso che
                tiene conto anche del tuo tempo e delle tue abitudini quotidiane. Ti diciamo con onestà cosa è
                possibile e cosa no: preferiamo un consiglio scomodo a una promessa non mantenuta.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Consulenza inclusa prima di ogni servizio",
                  "Trattamenti mirati anche per la cute, non solo per la lunghezza",
                  "Risultati pensati per durare tra un appuntamento e l'altro",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* BENEFICI */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Cosa ottieni</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Il risultato non finisce quando esci dal salone.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefici.map((b, i) => (
              <Reveal as="li" key={b} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* COME FUNZIONA */}
        <section className="surface-dark py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Come funziona</p>
              <h2 className="mt-4 text-3xl leading-tight text-cream sm:text-4xl">
                Quattro passaggi, nessuna sorpresa.
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {passi.map((p, i) => (
                <Reveal as="li" key={p.step} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-cream/12 bg-cream/5 p-6 transition-colors duration-300 hover:border-primary/50">
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                        <p.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-3xl text-cream/25">{p.step}</span>
                    </div>
                    <h3 className="mt-5 text-xl text-cream">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SERVIZI */}
        <section id="servizi" className="mx-auto max-w-6xl px-5 py-20 sm:py-28 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Servizi</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Tutto quello che serve ai tuoi capelli, in un unico salone.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Ogni servizio parte dalla consulenza: è così che scegliamo insieme la strada giusta.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servizi.map((s, i) => (
              <Reveal as="article" key={s.title} delay={i * 70}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-8 rounded-2xl border border-dashed border-primary/40 bg-accent/40 p-5 text-sm leading-relaxed text-accent-foreground">
              <strong>Nota per il salone:</strong> qui possiamo aggiungere il listino prezzi reale e la durata
              indicativa di ogni servizio, appena ci fornite i dati.
            </p>
          </Reveal>
        </section>

        {/* PER CHI È */}
        <section className="bg-secondary/60 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Per chi è</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Ti riconosci in una di queste situazioni?</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {perChi.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="h-full rounded-3xl bg-card p-7 shadow-[var(--shadow-soft)]">
                    <h3 className="text-xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SALONE / TEAM */}
        <section id="salone" className="mx-auto max-w-6xl px-5 py-20 sm:py-28 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Il salone</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Luisa e Federica, in Via Piave a Senigallia.</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Lef Parrucchieri è un salone dove si lavora con calma e attenzione. Chi ci ha scelto racconta
                di due professioniste competenti, oneste e accoglienti: sono le stesse parole che tornano nelle
                recensioni, e sono il modo in cui vogliamo continuare a lavorare.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Che tu venga per un ritocco veloce o per un cambio deciso, troverai lo stesso approccio: prima
                ascoltare, poi consigliare, infine realizzare.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://maps.google.com/?q=Via+Piave+2/8+60019+Senigallia+AN"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">Via Piave, 2/8 — Senigallia (AN)</span>
                </a>
                <a
                  href="tel:+3907160435"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">+39 071 60435</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm">
                  <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">Aperto da martedì a sabato</span>
                </div>
                <a
                  href="https://www.instagram.com/lefparrucchieri/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"
                >
                  <Instagram className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">@lefparrucchieri</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[2rem] border border-dashed border-primary/40 bg-accent/30 p-10 text-center">
                <span className="eyebrow">Spazio immagine</span>
                <h3 className="mt-4 text-2xl">Foto di Luisa e Federica in salone</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Qui va inserita una foto reale del team o degli interni del salone (formato verticale,
                  luminosa, scattata in postazione). Basta inviarcela e la sostituiamo a questo riquadro.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* RECENSIONI */}
        <section id="recensioni" className="surface-dark py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Recensioni</p>
              <h2 className="mt-4 text-3xl leading-tight text-cream sm:text-4xl">
                4,8 su 48 recensioni Google. Ecco cosa scrivono.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {recensioni.map((r, i) => (
                <Reveal as="article" key={r.author} delay={i * 90}>
                  <figure className="flex h-full flex-col rounded-3xl border border-cream/12 bg-cream/5 p-7">
                    <div className="flex gap-1" aria-label="Valutazione 5 stelle su 5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-cream/85">
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-6 border-t border-cream/10 pt-4">
                      <p className="text-cream">{r.author}</p>
                      <p className="text-xs uppercase tracking-widest text-cream/45">{r.meta}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:py-28 lg:px-8">
          <Reveal>
            <p className="eyebrow">Domande frequenti</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Le risposte alle domande che riceviamo più spesso.</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
            {faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium marker:hidden">
                    <h3 className="text-lg font-medium">{f.q}</h3>
                    <ChevronRight
                      className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-90"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA FINALE + FORM */}
        <section id="prenota" className="bg-secondary/60 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="eyebrow">Prenota</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
                Il prossimo appuntamento può essere quello giusto.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Chiamaci o lasciaci i tuoi contatti: ti ricontattiamo per fissare giorno e orario e per capire
                insieme di cosa hanno bisogno i tuoi capelli.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+3907160435"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Chiama 071 60435
                </a>
                <a
                  href="https://www.instagram.com/lefparrucchieri/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-base transition-colors hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  Scrivici su Instagram
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
