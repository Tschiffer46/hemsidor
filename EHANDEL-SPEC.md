# EHANDEL-SPEC.md

Spec för `ehandel.agiletransition.se`. Den här filen är skriven så en ny Claude Code-session
med tom kontext ska kunna skapa hela siten genom att följa den punkt för punkt.

---

## 1. Mål

En one-pager för Agile Transition AB:s e-handelstjänster, riktad till småföretag i
södra Sverige. Speglar mönstret från `hemsidor.agiletransition.se` (samma stack,
deploy och sektionsidé) men med:

- Helt egen visuell profil (jordnära skånsk palett, serif-rubriker)
- Innehåll fokuserat på e-handel: bygga ny Shopify-butik **eller** förbättra/migrera befintlig
- Shopify primärt, Shopware som tillägg
- Personlig, berättande "vi"-form (utan namn/foto i version 1)

## 2. Repo

- **Namn**: `Tschiffer46/ehandel`
- **Branch**: `claude/create-ehandel-subdomain-DpfYz`
- **Secrets** (redan på plats): `SERVER_HOST`, `SERVER_USER`, `SERVER_SSH_KEY`

## 3. Stack

Identisk med `Tschiffer46/hemsidor`:

- React 19 + TypeScript + Vite
- Tailwind CSS v3 (PostCSS via `postcss.config.cjs`)
- ESLint flat config
- Deploy: GitHub Actions → rsync → Hetzner → Nginx → Cloudflare

Mirror `hemsidor`:s rotfiler rakt av med två justeringar:

- `tailwind.config.ts` — utökad palett (se §5)
- `index.html` — ny title, meta, Google Fonts (Fraunces + Inter)
- `.github/workflows/deploy.yml` — byt remote path till `~/hosting/sites/ehandel/dist/`
- `readme.md` — anpassad till ehandel

## 4. Sektionsstruktur

Samma 9 komponenter och ordning som `hemsidor`, men med ehandel-copy:

```
<App>
  <Nav />
  <main>
    <Hero />
    <Erbjudande />     // Två spår: Ny butik / Förbättra befintlig
    <HurFungerar />    // 5 steg: Samtal → Offert → Bygge → Lansering → Vidareutveckling
    <VarforOss />      // 4 punkter med fokus på "skånska entreprenörer"
    <OmOss />          // Berättande "vi"-form
    <Referenser />     // Placeholder-läge: 3 skeleton-kort + förklarande text
    <Kontakt />        // Formspree xreawgqr + dolt source-fält
  </main>
  <Footer />          // Inkl. "Våra andra tjänster": hemsidor + agiletransition.se
</App>
```

## 5. Visuell profil

### Palett (Tailwind-tokens)

Lägg i `tailwind.config.ts` under `theme.extend.colors`:

```ts
colors: {
  'e-cream':  '#F8F3E9',  // huvudbakgrund (varm cremevit)
  'e-light':  '#EFE7D8',  // alternerande sektionsbakgrund
  'e-clay':   '#C46B3F',  // primär accent — terrakotta
  'e-clay-d': '#A85628',  // hover/mörkare terrakotta
  'e-olive':  '#6B7B3F',  // sekundär accent — olivgrön
  'e-dark':   '#2A2622',  // rubriker, stark text
  'e-mid':    '#6B5F52',  // brödtext
  'e-border': '#D9CFBC',  // subtila linjer/kort-kanter
}
```

### Typografi

Lägg i `index.html` `<head>` (före Tailwind):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

I `tailwind.config.ts` under `theme.extend`:

```ts
fontFamily: {
  serif: ['Fraunces', 'Georgia', 'serif'],
  sans:  ['Inter', 'system-ui', 'sans-serif'],
},
```

I `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply font-sans bg-e-cream text-e-mid antialiased;
}
h1, h2, h3 {
  @apply font-serif text-e-dark;
}
```

### Stilprinciper

- **Generösa luft-marginaler** (`py-20` / `py-24`) — jordnär ton mår bra av utrymme.
- **Inga skarpa kanter** — `rounded-xl` / `rounded-2xl` på kort.
- **Subtila skuggor** — `shadow-sm` snarare än `shadow-lg`.
- **Inga gradienter** — palt och typografi bär uttrycket.
- **CTA-knappar**: bakgrund `bg-e-clay` text `text-white`, hover `bg-e-clay-d`. Sekundär:
  border `border-e-clay` text `text-e-clay`, hover fyllnad.

## 6. Innehåll (copy, svenska)

> Allt nedan är förstaversion. Inga delar är låsta — användaren får godkänna/byta i
> sessionen som faktiskt skapar filerna. Behåll tonen: jordnära, ärlig, ingen byråjargong.

### Nav

Logotyp/wordmark vänster: **"Agile Transition | E-handel"** (text, ingen bildlogga).
Länkar: Erbjudande · Så jobbar vi · Om oss · Kontakt
CTA höger: **"Boka samtal"** → scrollar till #kontakt

### Hero

```
[Eyebrow, e-clay, uppercase, tracking-wide:]
E-HANDEL FÖR SMÅFÖRETAG

[H1, serif, stort:]
Shopify-butiker som säljer — byggda av entreprenörer, inte byråer.

[Underrubrik:]
Vi bygger nya e-butiker och förbättrar befintliga. Främst på Shopify, även
på Shopware för komplexa behov. Allt med fötterna i Skåne och förståelse
för småföretagets verklighet.

[Primär CTA:] Boka kostnadsfritt samtal
[Sekundär CTA:] Se vad vi gör
```

### Erbjudande (två spår, sida vid sida på desktop)

Sektionsrubrik: **"Två sätt vi hjälper"**
Underrubrik: *"Ska ni öppna en helt ny e-butik, eller har ni redan en som inte
levererar som ni hoppats? Vi gör båda — och pratar gärna igenom vilket som passar er."*

**Spår A — Ny e-butik från grunden**
- Shopify-uppsättning anpassad efter er affär och era produkter
- Design som matchar ert varumärke — inga generiska mallar
- Produkter, kategorier, betalning (Klarna, Swish, kort) och frakt
- Domän, e-post, GDPR, cookies — allt det praktiska
- Lansering och utbildning så ni klarar den dagliga driften själva

**Spår B — Förbättra eller migrera befintlig butik**
- Genomlysning av nuvarande butik (Shopify, Shopware, WooCommerce, Magento, Wix...)
- Migrering till Shopify från äldre plattformar utan att tappa SEO eller ordrar
- Konverteringsoptimering: kassa, produktsidor, mobilupplevelse
- Integrationer mot bokföring, lager, e-post och annonsering
- Löpande rådgivning — vi finns kvar när ni behöver oss

**Footnote under båda korten** (mindre text, e-mid):
*"För B2B, flera marknader eller verksamheter med tunga integrationer tar vi även Shopware-uppdrag."*

### HurFungerar (5 steg, numrerade kort i rad)

Sektionsrubrik: **"Så jobbar vi tillsammans"**

1. **Vi pratar** — Ett kostnadsfritt samtal där ni berättar om er affär och vad ni vill nå. Vi lyssnar.
2. **Förslag och offert** — Tydligt upplägg, fast pris eller löpande, ingen bindning. Ni vet vad ni får.
3. **Vi bygger** — Korta avstämningar varje vecka. Ni ser hur det växer fram, inget gissningsarbete i slutet.
4. **Lansering** — Vi går live tillsammans. Utbildning så ni kan driva butiken själva från dag ett.
5. **Vi finns kvar** — Som rådgivare, support eller utvecklingspartner när butiken växer. Aldrig påtvingat.

### VarforOss (4 punkter, ikon + rubrik + kort text)

Sektionsrubrik: **"Varför Agile Transition"**

- **Skånska entreprenörer** — Vi är två som tar hand om er butik personligen. Inga juniora konsulter, inga eskaleringar till "någon annan i teamet".
- **Affärsförståelse, inte bara teknik** — Vi har lett digitala produkter på stora internationella företag. Den erfarenheten tar vi nu med oss till småföretagets vardag.
- **Långsiktiga relationer** — Vi tar inte projekt, vi tar relationer. Målet är att ni ska kunna lita på oss om ett år och om fem.
- **Pragmatik före tech-trender** — Vi väljer Shopify för att det fungerar för er, inte för att vi måste. Om det är fel verktyg säger vi det.

### OmOss

Sektionsrubrik: **"Vilka är vi"**

```
Vi är två entreprenörer i södra Sverige som har jobbat många år i internationella
koncerner med digital produktutveckling och affärsutveckling. Idag bygger vi
vidare här hemma — närmare våra kunder, närmare där vi bor.

Vi förstår småföretagets vardag eftersom vi själva driver eget. När ni anlitar
oss får ni inte ett team av juniora konsulter eller en projektledare som mest
mailar — ni får oss två, varje gång.

Agile Transition AB driver flera tjänster utöver e-handel. Vi bygger även
hemsidor för småföretag och arbetar som rådgivare inom affärs- och
produktutveckling.
```

CTA-rad under: två länkknappar
- "Hemsidor" → https://hemsidor.agiletransition.se
- "Konsult & rådgivning" → https://www.agiletransition.se

### Referenser (placeholder)

Sektionsrubrik: **"Kundcase"**
Text: *"Vi arbetar just nu med våra första e-handelskunder. Konkreta case
publiceras här inom kort. Vill ni höra vad vi har gjort under tiden? Hör av er,
så berättar vi gärna."*

Layout: 3 skeleton-kort i rad (cremevit bakgrund, e-border, rounded-xl), varje
kort innehåller en grå platshållar-block för bild (aspect-square), en kort
platshållarrad för butiksnamn och två rader för beskrivning. Inget innehåll,
bara visuell struktur så det är tydligt att casen kommer.

### Kontakt

Sektionsrubrik: **"Hör av er"**
Underrubrik: *"Berätta kort om er affär eller vad ni vill nå, så bokar vi ett samtal. Inga säljare, inga formulär-pingbacks — bara ett mejl från oss."*

Form-fält:
- **Namn** (text, required)
- **E-post** (email, required)
- **Telefon** (tel, optional)
- **Vad gäller det?** (select):
  - Ny e-butik
  - Förbättra befintlig butik
  - Vet inte än / vill diskutera
- **Meddelande** (textarea, required)
- **Hidden**: `<input type="hidden" name="source" value="ehandel" />`

Submit: POST till `https://formspree.io/f/xreawgqr` (samma form-id som hemsidor).
Success/error-states i komponenten — kopiera mönstret från `hemsidor`s `Kontakt.tsx` rakt av.

### Footer

Tre kolumner på desktop, staplad på mobil:

**Kolumn 1 — Företag**
- Agile Transition AB
- Södra Sverige
- (ev. org.nr — kopiera från hemsidor om det finns där)

**Kolumn 2 — På sidan**
- Erbjudande
- Så jobbar vi
- Om oss
- Kontakt

**Kolumn 3 — Våra andra tjänster**
- Hemsidor → https://hemsidor.agiletransition.se
- Konsult & rådgivning → https://www.agiletransition.se

Copyright-rad: `© 2026 Agile Transition AB`

## 7. Deploy-pipeline

Kopiera `Tschiffer46/hemsidor/.github/workflows/deploy.yml` rakt av med dessa
ändringar:

```yaml
- name: Create remote directory
  run: |
    ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=yes \
      ${{ secrets.SERVER_USER }}@${{ secrets.SERVER_HOST }} \
      "mkdir -p ~/hosting/sites/ehandel/dist"

- name: Deploy via rsync
  run: |
    rsync -avz --delete -e "ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=yes" \
      ./dist/ \
      ${{ secrets.SERVER_USER }}@${{ secrets.SERVER_HOST }}:~/hosting/sites/ehandel/dist/
```

(Endast `hemsidor` → `ehandel` i två sökvägar.)

Branch-trigger: `main` (samma mönster — utveckling sker på
`claude/create-ehandel-subdomain-DpfYz` och PR mergas till `main` när allt är klart).

## 8. Steg för nästa Claude Code-session

Den nya sessionen ska göra detta i ordning:

1. Klona `Tschiffer46/ehandel` och checka ut `claude/create-ehandel-subdomain-DpfYz`.
2. Klona `Tschiffer46/hemsidor` lokalt som referens (inte fork — bara läsa filer).
3. Kopiera dessa filer från `hemsidor` till `ehandel` rakt av:
   - `package.json` (uppdatera `name` till `ehandel`)
   - `package-lock.json` (regenereras med `npm install`)
   - `vite.config.ts`
   - `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
   - `eslint.config.js`
   - `postcss.config.cjs`
   - `.gitignore`
4. Skapa `tailwind.config.ts` baserat på hemsidor med palett + fontFamily-tillägg
   enligt §5.
5. Skapa `index.html` baserat på hemsidor med:
   - Title: `Agile Transition | E-handel — Shopify-butiker för småföretag i södra Sverige`
   - Meta description (ca 155 tecken, baserad på Hero-copy)
   - Google Fonts-länkarna från §5
6. Skapa `src/main.tsx`, `src/App.tsx`, `src/index.css` enligt §5 och §4.
7. Skapa alla 9 komponenter i `src/components/` med copy från §6. Använd
   hemsidor-komponenterna som strukturell mall (samma TypeScript-mönster, samma
   responsiv layout, samma `id`-attribut för anchor-länkar) men byt
   palett-tokens (`h-*` → `e-*`) och rubriker/text till ehandel-copy.
8. Kontaktformuläret: kopiera `hemsidor`s `Kontakt.tsx` mönster (Formspree fetch,
   loading/success/error-states), lägg till select-fältet "Vad gäller det?" och
   det dolda `source`-fältet.
9. Skapa `.github/workflows/deploy.yml` enligt §7.
10. Skapa `readme.md` baserat på hemsidor men med ehandel-text och rätt
    deploy-path (`~/hosting/sites/ehandel/`).
11. Lokalt: `npm install` och `npm run build` — verifiera att bygget går igenom
    utan fel.
12. Commit på `claude/create-ehandel-subdomain-DpfYz`, push, öppna PR mot `main`.
    **Mergea inte automatiskt** — användaren ska titta på sidan först.
13. Föreslå en parallell PR mot `Tschiffer46/server-maintenance` på samma
    branch-namn som lägger till `ehandel.agiletransition.se` i hälsokoll-listan
    (ändringen är i den fil som listar siter — i README.md "Hosted Sites"-tabellen
    samt i `scripts/` om det finns en URL-lista där).

## 9. Vad användaren gör (utanför kodbasen)

### a) Cloudflare DNS

1. Logga in på Cloudflare → välj zonen `agiletransition.se`.
2. **DNS** → **Records** → **Add record**.
3. Fyll i exakt så här (se vilka värden `hemsidor` har som referens):
   - **Type**: `CNAME`
   - **Name**: `ehandel`
   - **Target**: samma värde som `hemsidor`-recorden pekar på (sannolikt
     `agiletransition.se` eller serverns hostname — kopiera från hemsidor-raden)
   - **Proxy status**: samma som hemsidor (sannolikt **Proxied** / orange moln)
   - **TTL**: Auto
4. **Save**.
5. Verifiera: `dig ehandel.agiletransition.se +short` ska returnera ett svar
   inom någon minut.

### b) Nginx server-block (pågår parallellt)

Användaren gör detta själv. För referens — det ska peka på
`/home/deploy/hosting/sites/ehandel/dist/` (eller motsvarande), spegla
`hemsidor`-blockets struktur, och certifikat hämtas via certbot:

```bash
sudo certbot --nginx -d ehandel.agiletransition.se
```

### c) Verifiera live

När DNS är propagerad och Nginx serverar:

1. Pusha till `main` i `ehandel`-reponen (eller mergea PR).
2. GitHub Actions kör deploy → filer landar på servern.
3. Öppna `https://ehandel.agiletransition.se` i webbläsaren.

## 10. Senare iterationer (inte i version 1)

- Riktiga kundcase i Referenser-sektionen
- Eventuella foton/namn på "Om oss"
- Plausible/Umami-analytics (förberedd kommentar i `index.html` enligt hemsidor-mönstret)
- Eget Formspree-formulär om volym kräver separation
- Ev. blogg eller artikelarkiv

---

## Bilaga A — Prompt att klistra in i ny Claude Code-session

> Bygg `ehandel.agiletransition.se` enligt EHANDEL-SPEC.md i den här reponen
> (`Tschiffer46/ehandel`, branch `claude/create-ehandel-subdomain-DpfYz`).
> Använd `Tschiffer46/hemsidor` som strukturell mall — speglar stack och
> komponentmönster rakt av men har egen palett, typografi och copy enligt
> specen. Innan du pushar: kör `npm run build` lokalt och bekräfta att
> bygget går igenom. Öppna PR mot `main` när du är klar — mergea inte själv.
