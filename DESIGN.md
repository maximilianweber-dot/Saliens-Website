# Saliens — Design-System

Bewusst gewählt und auf das geschärfte ICP (schnell wachsende B2B-Startups)
ausgerichtet: lauter, wärmer, selbstbewusster. Ein dominanter Akzent (Flame)
plus ein sparsamer Zweitton (Sonnengelb). Keine weiteren Farben.

## Farbpalette (verbindlich)

| Token | Hex | Rolle |
|---|---|---|
| Warmweiß | `#FFFBF6` | Basis-Hintergrund |
| Warmbeige | `#F3E9DE` | dezente Flächen, Karten |
| Warmschwarz | `#1C1512` | Haupttext, dunkle Sektion (Proof) |
| Warmschwarz-soft | `#75695f` | Sekundärtext |
| Flame | `#FF5A36` | Primärakzent — CTA, Hero-Eyebrow, Hervorhebungen |
| Flame-deep | `#E8461F` | Hover für Flame |
| Sonnengelb | `#FFC94D` | Sekundärakzent, sehr sparsam (Details, Illustrationen) |

**CTA-Kontrast (bewusste Entscheidung):** Button-Text ist Warmweiß auf Flame
(wirkt weniger dominant als Warmschwarz), ~3:1 — für die Demand-Testing-Phase
bewusst akzeptiert. Für spätere Ads-Kampagnen ggf. Button-Hintergrund auf
`#D63D18` abdunkeln (~4.6:1) bei praktisch identischer Anmutung.

**Warum das warme Off-White bewusst ist:** Der warme, papierartige Grund ist
Kern der Markenidentität (Gifting/physisch), kein „safe AI off-white"-Reflex.
Kein Tech-Blau/Violett (würde Software statt physisches Produkt signalisieren).

## Typografie (verbindlich)

- **Headlines: Fraunces**, Weight **700** (variable Optical-Size-Achse) — mehr
  Präsenz und Lautstärke, passend zur direkteren Copy. Kleinere Subheadings (h3)
  bewusst in 500, damit die 700er-Headlines führen. Bewusst gewählt, nicht durch
  eine neutrale Grotesk zu ersetzen.
- **Fließtext & CTA: General Sans**, Weight 400 (Body) / 600 (CTA).
- Keine Mono-Schrift, kein Caps-Lock-CTA (wirkte zu technisch/kühl).

## Layout- & Ton-Prinzipien

- Asymmetrischer Hero (Text + Illustration).
- Großzügiger Weißraum; keine uniformen SaaS-Card-Kacheln auf allem.
- Ein Bewegungsmoment (Page-Load-Reveal). Kein Fade-in-on-scroll je Section.
- „Laut" heißt: ein starker Akzent, klare Kontraste — nicht Farbvielfalt.
  Vertrauen trägt aktuell die Konkretheit der Copy, nicht bunte Flächen.
- Fließende Abstände via `clamp()` (Karten teils statisch, siehe .impeccable-Notes).

## Assets

Illustrationen/Logo als austauschbare Dateien unter `/assets/` bzw.
`/assets/illustrations/` (Interims-SVGs, werden durch finale Figma-Assets
ersetzt, ohne Layout-Code anzufassen).
