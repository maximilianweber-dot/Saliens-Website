# Saliens — Gifting-as-a-Service Landingpage

Statische Demand-Testing-Seite für **Saliens** (Gifting-as-a-Service, physisches B2B-GTM aus Berlin).
Reines HTML/CSS + minimales JS, **kein Framework, kein Build-Step**.

> Diese Seite ist bewusst `noindex` (Demand-Testing, kein SEO-Anspruch).

## Struktur

| Datei | Zweck |
|---|---|
| `index.html` | Haupt-Landingpage (Hero → Problem → Ablauf → Differenzierung → Use Cases → Proof → CTA → FAQ → Schluss-CTA) |
| `about.html` | Über uns / Story — erreichbar unter der sauberen URL `/about` |
| `styles.css` | Komplettes Design-System (Farb-Tokens, Typografie, Komponenten) |
| `app.js` | Minimal-JS (nur Footer-Jahr). FAQ = natives `<details>`, Reveal = CSS |
| `favicon.svg` | Wachssiegel-Logo |
| `robots.txt` | `Disallow: /` |
| `netlify.toml` | Publish-Root, `X-Robots-Tag`-Header, `/about`-Redirect |

## Lokal ansehen

Am einfachsten mit einem kleinen Server (damit `/about` sauber auflöst):

```bash
cd ~/Documents/saliens-website
python3 -m http.server 4000
# → http://localhost:4000
```

Alternativ `index.html` direkt im Browser öffnen (dann `about.html` statt `/about` ansteuern).

## Noch offen (siehe `TODO`/Review-Kommentare im Code)

- **Cal.com-Embed:** Platzhalter `<!-- CAL.COM EMBED HIER EINFÜGEN -->` in `index.html` **und** `about.html` ersetzen.
- **Founder-Absatz** in `about.html` inhaltlich gegen die echte Vita schärfen.
- **Impressum/Datenschutz:** Footer-Link ist Platzhalter — für eine öffentliche DE-Seite Pflicht.
- **Produktfotos:** Hero-Illustration (versiegeltes Paket) ist als SVG angelegt und leicht durch echte Unboxing-Fotos austauschbar.

## Deploy (Netlify)

Kein Build nötig. Repo mit Netlify verbinden, Publish-Verzeichnis = `.` (Repo-Root). Details siehe `DEPLOY.md`.
