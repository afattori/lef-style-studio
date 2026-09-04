import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Termini e condizioni | Lef Parrucchieri Senigallia";
const DESCRIPTION =
  "Condizioni di utilizzo del sito di Lef Parrucchieri e regole per prenotazioni e appuntamenti in salone.";

export const Route = createFileRoute("/termini")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/termini" },
    ],
    links: [{ rel: "canonical", href: "/termini" }],
  }),
  component: TerminiPage,
});

function TerminiPage() {
  return (
    <LegalPage
      title="Termini e condizioni"
      intro="Le regole di utilizzo di questo sito e le informazioni sulle richieste di appuntamento."
    >
      <section>
        <h2>Oggetto</h2>
        <p>
          Questo sito presenta i servizi di Lef Parrucchieri, salone situato in Via Piave 2/8 a Senigallia (AN),
          e permette di inviare una richiesta di appuntamento.
        </p>
      </section>
      <section>
        <h2>Richieste di appuntamento</h2>
        <p>
          L'invio del modulo non costituisce una prenotazione confermata. L'appuntamento è valido solo dopo la
          conferma da parte del salone, telefonica o tramite messaggio.
        </p>
      </section>
      <section>
        <h2>Disdette</h2>
        <p>
          Ti chiediamo di comunicare eventuali disdette con il maggior anticipo possibile, telefonando allo
          +39 071 60435, così da poter riassegnare l'orario ad altri clienti.
        </p>
      </section>
      <section>
        <h2>Prezzi e servizi</h2>
        <p>
          I servizi descritti nel sito hanno finalità informativa. Costi e durata variano in base alla
          lunghezza dei capelli e al tipo di lavorazione e vengono comunicati prima dell'inizio del servizio.
        </p>
      </section>
      <section>
        <h2>Proprietà dei contenuti</h2>
        <p>
          Testi, immagini e marchio presenti nel sito appartengono a Lef Parrucchieri e non possono essere
          riprodotti senza autorizzazione.
        </p>
      </section>
      <section>
        <h2>Legge applicabile</h2>
        <p>Ai presenti termini si applica la legge italiana.</p>
      </section>
    </LegalPage>
  );
}
