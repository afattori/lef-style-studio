import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Cookie Policy | Lef Parrucchieri Senigallia";
const DESCRIPTION = "Quali cookie utilizza il sito di Lef Parrucchieri e come puoi gestirli dal tuo browser.";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/cookie" },
    ],
    links: [{ rel: "canonical", href: "/cookie" }],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="Il sito di Lef Parrucchieri è pensato per essere leggero e rispettoso della tua privacy."
    >
      <section>
        <h2>Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti salvano sul dispositivo di chi naviga, per farlo
          funzionare correttamente o per raccogliere informazioni sull'utilizzo.
        </p>
      </section>
      <section>
        <h2>Cookie utilizzati da questo sito</h2>
        <p>
          Al momento il sito utilizza solo cookie tecnici necessari alla corretta visualizzazione delle pagine.
          Non sono attivi cookie di profilazione né strumenti pubblicitari.
        </p>
      </section>
      <section>
        <h2>Contenuti di terze parti</h2>
        <p>
          Alcuni collegamenti portano a servizi esterni, come Google Maps e Instagram. Aprendo questi link si
          applicano le rispettive informative sui cookie.
        </p>
      </section>
      <section>
        <h2>Come gestire i cookie</h2>
        <p>
          Puoi bloccare o cancellare i cookie dalle impostazioni del tuo browser. La disattivazione dei cookie
          tecnici può compromettere alcune funzioni del sito.
        </p>
      </section>
      <section>
        <h2>Aggiornamenti</h2>
        <p>
          Se in futuro verranno introdotti strumenti di statistica o marketing, questa pagina sarà aggiornata e
          verrà richiesto il consenso preventivo.
        </p>
      </section>
    </LegalPage>
  );
}
