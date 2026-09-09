# Deploy — Saliens Landingpage

Rein statische Seite, **kein Build-Step**. Zwei Wege zu GitHub + Netlify.

## 1 · Code zu GitHub

Das lokale Git-Repo ist bereits initialisiert und committet. Es fehlt nur das Remote.

**Weg A — über die GitHub-Website (kein CLI nötig):**

1. Auf <https://github.com/new> ein neues, **leeres** Repository anlegen
   (Name z. B. `saliens-website`, **kein** README/gitignore hinzufügen).
2. Danach zeigt GitHub „…or push an existing repository". Die zwei Zeilen hier
   ausführen (Platzhalter durch deinen GitHub-Namen ersetzen):

   ```bash
   cd ~/Documents/saliens-website
   git remote add origin https://github.com/DEIN-USERNAME/saliens-website.git
   git push -u origin main
   ```

**Weg B — mit GitHub CLI (`gh`), falls installiert:**

```bash
cd ~/Documents/saliens-website
gh repo create saliens-website --private --source=. --push
```

## 2 · Netlify verbinden

1. Auf <https://app.netlify.com> einloggen → **Add new site → Import an existing project**.
2. **GitHub** wählen und das Repo `saliens-website` autorisieren/auswählen.
3. Build-Einstellungen (Netlify liest `netlify.toml` automatisch):
   - **Build command:** *(leer lassen)*
   - **Publish directory:** `.`
4. **Deploy** klicken. Nach ~20 s ist die Seite unter einer
   `*.netlify.app`-URL live.

Die `netlify.toml` setzt zusätzlich den `X-Robots-Tag: noindex`-Header und den
`/about`-Redirect — nichts weiter zu konfigurieren.

### Custom Domain (saliens.de) — optional, später

Netlify → **Domain settings → Add a domain** → `saliens.de` eintragen und den
DNS-Anweisungen folgen (A-Record / CNAME beim Domain-Provider setzen).

## 3 · Cal.com nachrüsten

Sobald der Cal.com-Account steht: den Platzhalter-Container
`<!-- CAL.COM EMBED HIER EINFÜGEN -->` in **`index.html`** und **`about.html`**
durch das echte Inline-Embed-Snippet ersetzen, committen, pushen — Netlify
deployt automatisch neu.
