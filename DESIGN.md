# Saliens — Design-System

Dieses Design-System ist **bewusst gewählt** und aus der physischen Gifting-Metapher
abgeleitet (Verpackung, Wachssiegel, Band). Es ist keine Default-Auswahl und soll
nicht durch generische Alternativen ersetzt werden.

## Farbpalette (verbindlich)

| Token | Hex | Rolle |
|---|---|---|
| Naturpapier | `#F5F1EA` | Haupt-Hintergrund |
| Karton | `#EAE3D6` | dezente Flächen, sekundäre Karten |
| Tinte | `#221C19` | Haupttext |
| Tinte-soft | `#6b6157` | Sekundärtext |
| Siegellack | `#6B2430` | Primärakzent — CTA, Links, Hervorhebung |
| Siegellack-deep | `#4E1A23` | Hover für Siegellack |
| Messing | `#B08D57` | Sekundärakzent, sehr sparsam, nur Details |

**Warum `#F5F1EA` (warmes Naturpapier) als Hintergrund gewollt ist:** Die Fläche
steht für Verpackungs-/Kraftpapier — das inhaltliche Fundament der Marke (physisches
Gifting). Bewusst **kein** Tech-Blau/Violett (würde Software statt physisches Produkt
signalisieren) und **kein** Cream+Terracotta-Standard. Der Ton ist Teil der
Markenidentität, nicht ein „safe off-white" per Reflex.

## Typografie (verbindlich)

- **Headlines: Fraunces** (variable Optical-Size-Achse, Weight 500). Warme, leicht
  handgesetzt wirkende Serife — trägt „editorial, premium, persönlich". Bewusst gewählt,
  weil sie die boutique-hafte, menschliche Positionierung stützt. Nicht durch eine
  neutrale Grotesk ersetzen.
- **Fließtext & CTA: General Sans** (Weight 400/500). Humanistisch-warm statt technisch.
- CTA-Buttons in normaler Groß-/Kleinschreibung, nicht in Caps/Mono.

## Layout-Prinzipien

- Asymmetrischer Hero (Text + gestalterisches Objekt, kein Dashboard-Screenshot).
- Großzügiger Weißraum; keine uniformen SaaS-Card-Kacheln mit Border-Radius/Schatten auf allem.
- Ein einziges Bewegungsmoment (Page-Load-Reveal). Kein Fade-in-on-scroll je Section.
- Fließende Abstände/Größen via `clamp()` — Innenabstände von Karten und Sektionen
  werden über einen zentrierten `.container` bzw. `clamp()`-Padding gesetzt.
