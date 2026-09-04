import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [nome, setNome] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-primary/25 bg-card p-8 text-center shadow-[var(--shadow-soft)]"
      >
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-2xl">Richiesta inviata{nome ? `, grazie ${nome}` : ", grazie"}!</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Ti ricontattiamo per confermare giorno e orario. Se hai fretta, chiamaci allo{" "}
          <a href="tel:+3907160435" className="font-medium text-primary underline-offset-4 hover:underline">
            071 60435
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Invia un'altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
      noValidate={false}
    >
      <h3 className="text-2xl">Richiedi un appuntamento</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        I campi contrassegnati con * sono obbligatori.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium">Nome e cognome *</span>
          <input
            required
            name="nome"
            autoComplete="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="Giulia Rossi"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium">Telefono *</span>
          <input
            required
            type="tel"
            name="telefono"
            autoComplete="tel"
            className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="333 1234567"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm sm:col-span-2">
          <span className="font-medium">Servizio che ti interessa *</span>
          <select
            required
            name="servizio"
            defaultValue=""
            className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
          >
            <option value="" disabled>
              Scegli un servizio
            </option>
            <option>Consulenza colore</option>
            <option>Colore e schiariture</option>
            <option>Taglio e piega</option>
            <option>Trattamento cute e capelli</option>
            <option>Acconciatura per eventi</option>
            <option>Non lo so ancora, aiutatemi voi</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm sm:col-span-2">
          <span className="font-medium">Quando preferisci venire?</span>
          <textarea
            name="messaggio"
            rows={4}
            className="resize-y rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="Es. sabato mattina, oppure raccontaci cosa vorresti cambiare nei tuoi capelli."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Invia la richiesta
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Inviando la richiesta accetti il trattamento dei dati come indicato nella Privacy Policy.
      </p>
    </form>
  );
}
