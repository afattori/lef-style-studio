type LogoProps = {
  className?: string;
  /** altezza del blocco logo in px */
  size?: number;
};

/**
 * Logo Lef Parrucchieri ricostruito in codice (nessuna immagine):
 * targa magenta, monogramma "L & F" corsivo e wordmark "PARRUCCHIERI".
 */
export function Logo({ className = "", size = 44 }: LogoProps) {
  return (
    <span
      className={`inline-flex select-none flex-col items-center justify-center rounded-md bg-primary text-primary-foreground ${className}`}
      style={{
        height: size,
        paddingInline: size * 0.34,
        paddingBlock: size * 0.14,
        lineHeight: 1,
      }}
      role="img"
      aria-label="Lef Parrucchieri"
    >
      <span
        style={{
          fontFamily: '"Parisienne", "Cormorant Garamond", cursive',
          fontSize: size * 0.42,
          lineHeight: 1,
        }}
      >
        L<span style={{ padding: `0 ${size * 0.03}px`, fontSize: size * 0.3 }}>&amp;</span>F
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: size * 0.2,
          letterSpacing: size * 0.032,
          marginTop: size * 0.08,
          marginRight: -size * 0.032,
        }}
      >
        PARRUCCHIERI
      </span>
    </span>
  );
}
