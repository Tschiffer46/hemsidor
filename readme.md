# hemsidor.agiletransition.se

One-pager för Agile Transition | Hemsidor – webbutveckling för småföretag i södra Sverige.

## Stack
- React 19 + TypeScript + Vite
- Tailwind CSS v3
- Formspree (kontaktformulär, form-id: xreawgqr)
- Deploy: GitHub Actions → rsync → Hetzner → Nginx → Cloudflare

## Lokal utveckling

```
npm install
npm run dev
```

Öppna http://localhost:5173

## Deploy

Automatisk deploy vid push till main.
Filer deployas till: ~/hosting/sites/hemsidor/dist/

### GitHub Secrets (Settings → Secrets and variables → Actions)

| Secret         | Beskrivning                        |
|----------------|------------------------------------|
| SERVER_HOST    | Hetzner-serverns IP-adress         |
| SERVER_USER    | SSH-användarnamn (deploy)          |
| SERVER_SSH_KEY | Privat SSH-nyckel                  |

## Analytics

Plats förberedd i index.html (kommentar). Rekommenderas: Plausible eller Umami.
