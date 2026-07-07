# KIPPO — Vite + React + Tailwind

Migração do site institucional da KIPPO (antes em HTML/CSS/JS puro) para **Vite + React (JavaScript, sem TypeScript) + Tailwind CSS**, com roteamento e transições de página animadas.

## Stack

- **Vite 5** + **React 18** (JS puro)
- **Tailwind CSS 3** (tema extendido com as cores/tokens da marca)
- **React Router 6** — rotas `/` e `/projeto/:id`
- **Framer Motion** — transição animada entre páginas (o efeito ao clicar em *Ver mais* / navegar)
- i18n PT/EN via `LanguageContext` (persistência em `localStorage`, detecção de idioma do navegador)

## Estrutura

```
kippo-react/
├─ index.html
├─ tailwind.config.js        # tokens da marca (cores, sombras, raios, fontes)
├─ src/
│  ├─ main.jsx               # BrowserRouter + LanguageProvider
│  ├─ App.jsx                # layout (Header/Footer/FloatWhats) + HashScroll
│  ├─ index.css             # Tailwind + CSS decorativo (keyframes, pseudo-elementos, intro, marquee)
│  ├─ i18n/
│  │  ├─ LanguageContext.jsx # useI18n() -> { t, lang, setLang }
│  │  ├─ pt.json / en.json
│  ├─ data/
│  │  ├─ projects.js         # projetos bilíngues (fonte única p/ portfólio + detalhe)
│  │  ├─ logos.js            # logos do marquee
│  ├─ hooks/
│  │  ├─ useReveal.js        # animação on-scroll (IntersectionObserver)
│  │  ├─ useScrolled.js      # estado de scroll do header
│  ├─ components/
│  │  ├─ Reveal.jsx          # wrapper de animação on-scroll
│  │  ├─ Intro.jsx Header.jsx Footer.jsx FloatWhats.jsx
│  │  ├─ Hero.jsx LogoCloud.jsx Services.jsx Tech.jsx About.jsx
│  │  ├─ Portfolio.jsx ProjectCard.jsx Testimonials.jsx CTA.jsx
│  │  └─ AnimatedRoutes.jsx  # AnimatePresence (transição de página)
│  └─ pages/
│     ├─ Home.jsx
│     └─ ProjectDetail.jsx
└─ public/favcon/            # favicon + imagens de capa dos projetos
```

## Scripts

```bash
npm install      # instala dependências
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # build de produção em dist/
npm run preview  # serve o build
```

## Notas de fidelidade

- O CSS decorativo (gradientes radiais, curva côncava do CTA, máscaras SVG do menu mobile, keyframes da intro e do marquee, animação reveal) foi mantido em `index.css` — utilitárias Tailwind não expressam bem esses efeitos.
- A intro animada da logo roda uma vez por sessão (`sessionStorage`) e respeita `prefers-reduced-motion`.
- A troca de idioma (PT/EN) é instantânea, sem recarregar, e atualiza `document.title` e metadados por página.
- Os originais em HTML/CSS/JS (na raiz do repositório) foram preservados.