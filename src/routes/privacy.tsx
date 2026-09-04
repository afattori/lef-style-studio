import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Privacy Policy | Lef Parrucchieri Senigallia";
const DESCRIPTION =
  "Come Lef Parrucchieri tratta i dati personali raccolti tramite il sito e il modulo di richiesta appuntamento.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Questa pagina spiega quali dati raccogliamo tramite il sito, per quale motivo e quali diritti puoi esercitare."
    >
      <section>
        <h2>Titolare del trattamento</h2>
        <p>
          Lef Parrucchieri — Via Piave, 2/8, 60019 Senigallia (AN) — Telefono +39 071 60435. L'indirizzo email
          di contatto e i dati fiscali completi vanno inseriti dal salone.
        </p>
      </section>
      <section>
        <h2>Dati raccolti</h2>
        <p>Tramite il modulo di richiesta appuntamento raccogliamo:</p>
        <ul>
          <li>nome e cognome;</li>
          <li>numero di telefono;</li>
          <li>servizio di interesse e preferenze indicate nel messaggio.</li>
        </ul>
      </section>
      <section>
        <h2>Finalità e base giuridica</h2>
        <p>
          I dati vengono utilizzati esclusivamente per rispondere alla tua richiesta e organizzare
          l'appuntamento. La base giuridica è l'esecuzione di misure precontrattuali richieste dall'interessato.
        </p>
      </section>
      <section>
        <h2>Conservazione</h2>
        <p>
          I dati sono conservati per il tempo necessario a gestire la richiesta e gli adempimenti connessi, e
          successivamente cancellati.
        </p>
      </section>
      <section>
        <h2>Comunicazione a terzi</h2>
        <p>
          I dati non vengono ceduti a terzi per finalità di marketing. Possono essere trattati da fornitori
          tecnici del sito, nominati responsabili del trattamento.
        </p>
      </section>
      <section>
        <h2>I tuoi diritti</h2>
        <p>
          Puoi chiedere in qualsiasi momento accesso, rettifica, cancellazione, limitazione o portabilità dei
          tuoi dati, oppure opporti al trattamento, contattando il salone ai recapiti indicati sopra. Hai
          inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali.
        </p>
      </section>
    </LegalPage>
  );
}
