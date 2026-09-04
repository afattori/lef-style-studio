type LogoProps = {
  className?: string;
  /** altezza del blocco logo in px */
  size?: number;
};

/**
 * Logo Lef Parrucchieri ricostruito in codice (nessuna immagine):
 * scritta bianca con contorno rosa, senza sfondo.
 */
export function Logo({ className = "", size = 44 }: LogoProps) {
  const stroke = Math.max(1, size * 0.022);
  return (
    <span
      className={`inline-flex select-none flex-col items-center justify-center text-cream ${className}`}
      style={{
        height: size,
        lineHeight: 1,
        WebkitTextStrokeWidth: `${stroke}px`,
        WebkitTextStrokeColor: "var(--primary)",
        paintOrder: "stroke fill",
      }}
      role="img"
      aria-label="Lef Parrucchieri"
    >
      <span
        style={{
          fontFamily: '"Parisienne", "Cormorant Garamond", cursive',
          fontSize: size * 0.52,
          lineHeight: 1.1,
        }}
      >
        L<span style={{ padding: `0 ${size * 0.03}px`, fontSize: size * 0.36 }}>&amp;</span>F
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: size * 0.21,
          letterSpacing: size * 0.034,
          marginTop: size * 0.04,
          marginRight: -size * 0.034,
        }}
      >
        PARRUCCHIERI
      </span>
    </span>
  );
}
