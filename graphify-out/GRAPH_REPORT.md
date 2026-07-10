# Graph Report - .  (2026-07-09)

## Corpus Check
- 48 files · ~249,264 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 219 nodes · 324 edges · 22 communities (21 shown, 1 thin omitted)
- Extraction: 88% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 37 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Homepage UI Components
- Project Dependencies
- Product Strategy & Migration
- App Shell & Routing
- Client Logo Strip
- Contact Page
- Odonto Screenshot Concepts
- JSConfig Compiler
- Odonto Landing Visual
- Design System Tokens
- Barber Screenshot Concepts
- Portfolio Data & Detail
- Barber Landing Visual
- Brand Logo Identity
- Prime Fitness Brand
- Favicon Logo Assets
- Elevation & Motion
- Prime Fitness Photo
- Vercel Config

## God Nodes (most connected - your core abstractions)
1. `useI18n()` - 29 edges
2. `Client/partner logo strip image` - 15 edges
3. `Reveal()` - 12 edges
4. `KIPPO Odonto Hero Screenshot` - 9 edges
5. `KIPPO institutional site + portfolio` - 8 edges
6. `compilerOptions` - 7 edges
7. `Hero Section - Dental Clinic Landing` - 7 edges
8. `Vite + React + Tailwind migration` - 6 edges
9. `Hero Section` - 6 edges
10. `Landing page screenshot (Lion Barber Club; file named kippo-barbearia.png)` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Bilingual PT/EN language switch` --semantically_similar_to--> `LanguageContext i18n`  [INFERRED] [semantically similar]
  README.md → kippo-react/README.md
- `Inter font preconnect` --conceptually_related_to--> `Inter typeface`  [INFERRED]
  kippo-react/index.html → DESIGN.md
- `KIPPO institutional site + portfolio` --references--> `Vite + React + Tailwind migration`  [EXTRACTED]
  PRODUCT.md → kippo-react/README.md
- `KIPPO institutional site + portfolio` --references--> `KIPPO institutional site (original)`  [EXTRACTED]
  PRODUCT.md → README.md
- `Original HTML/CSS/JS preserved` --references--> `KIPPO institutional site (original)`  [EXTRACTED]
  kippo-react/README.md → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Product Design Principles** — product_site_is_proof, product_confidence_via_restraint, product_show_not_list, product_direct_and_honest [INFERRED 0.85]
- **KIPPO React Stack** — kippo_react_readme_vite_react_tailwind, kippo_react_readme_react_router, kippo_react_readme_framer_motion, kippo_react_readme_language_context [EXTRACTED 1.00]
- **KIPPO Color Palette** — design_emerald_cut, design_green_deep, design_graphite, design_white [EXTRACTED 1.00]
- **Lion Barber Club website page** — favcon_img_kippo_barbearia__navigation_menu, favcon_img_kippo_barbearia__hero_section, favcon_img_kippo_barbearia__cta_agendar, favcon_img_kippo_barbearia__premium_seal [INFERRED 0.85]
- **Premium barbershop visual identity** — favcon_img_kippo_barbearia__dark_luxury_aesthetic, favcon_img_kippo_barbearia__barber_tools, favcon_img_kippo_barbearia__premium_seal [INFERRED 0.75]
- **Client and partner logos displayed in Kippo website image** — favcon_img_para_colocar_fiscal_notas, favcon_img_para_colocar_galpao_das_aves, favcon_img_para_colocar_ipm, favcon_img_para_colocar_laboratorio_analise, favcon_img_para_colocar_unicpages, favcon_img_para_colocar_acountech, favcon_img_para_colocar_animal_tree, favcon_img_para_colocar_termocal, favcon_img_para_colocar_roas_transfer, favcon_img_para_colocar_kaze_sport, favcon_img_para_colocar_carbonopay, favcon_img_para_colocar_home_office_lucrativo, favcon_img_para_colocar_aurea_medicina, favcon_img_para_colocar_nacional_industria_quimica, favcon_img_para_colocar_nuvem_host [EXTRACTED 1.00]
- **KIPPO Logo Design Elements** — favcon_kippo_kippo_logo, favcon_kippo_geometric_rounded_typography, favcon_kippo_monochrome_color_scheme, favcon_kippo_circular_dot_motif [INFERRED 0.85]
- **Booking Conversion Path** — favcon_odonto_img_navigation_menu, favcon_odonto_img_agendar_agora_cta, favcon_odonto_img_agendar_avaliacao_cta, favcon_odonto_img_procedimentos_link [INFERRED 0.75]
- **Landing Page UI Elements** — kippo_react_public_favcon_kippo_barbearia_main_navigation_bar, kippo_react_public_favcon_kippo_barbearia_hero_section_layout, kippo_react_public_favcon_kippo_barbearia_agendar_horario_cta [INFERRED 0.80]
- **Conversion Call-to-Action Group** — kippo_react_public_favcon_odonto_img_primary_cta, kippo_react_public_favcon_odonto_img_secondary_cta, kippo_react_public_favcon_odonto_img_agendar_agora_btn [INFERRED 0.85]
- **Dental Landing Page Composition** — kippo_react_public_favcon_odonto_img_hero_section, kippo_react_public_favcon_odonto_img_top_nav, kippo_react_public_favcon_odonto_img_value_proposition, kippo_react_public_favcon_odonto_img_dental_office_photo, kippo_react_public_favcon_odonto_img_overlay_design [INFERRED 0.85]
- **Prime Fitness visual identity** — kippo-react_public_favcon_prime-fitness_image, kippo-react_public_favcon_prime-fitness_prime_fitness, kippo-react_public_favcon_prime-fitness_branding, kippo-react_public_favcon_prime-fitness_color_scheme [INFERRED 0.80]

## Communities (22 total, 1 thin omitted)

### Community 0 - "Homepage UI Components"
Cohesion: 0.12
Nodes (26): CTA(), Hero(), Intro(), WORD, LogoCloud(), Portfolio(), ProjectCard(), Reveal() (+18 more)

### Community 1 - "Project Dependencies"
Cohesion: 0.10
Nodes (20): dependencies, framer-motion, react, react-dom, react-router-dom, description, devDependencies, autoprefixer (+12 more)

### Community 2 - "Product Strategy & Migration"
Cohesion: 0.12
Nodes (18): SEO metadata + Organization schema, Framer Motion page transitions, LanguageContext i18n, Original HTML/CSS/JS preserved, React Router 6, Vite + React + Tailwind migration, Anti-references: generic SaaS, cream, over-animated, dense, Brand personality: confident, precise, modern (+10 more)

### Community 3 - "App Shell & Routing"
Cohesion: 0.17
Nodes (9): App(), AnimatedRoutes(), FloatWhats(), Footer(), Header(), NAV, useScrolled(), detectInitialLang() (+1 more)

### Community 4 - "Client Logo Strip"
Cohesion: 0.12
Nodes (16): acountech, ANIMAL TREE, AUREA MEDICINA, CarbonoPay, Fiscal Notas, Galpão das Aves, Home Office Lucrativo, IPM (+8 more)

### Community 5 - "Contact Page"
Cohesion: 0.16
Nodes (13): Select(), BUDGETS, Contact(), DEADLINES, maskBRPhone(), pageTransition, pageVariants, PROJECT_TYPES (+5 more)

### Community 6 - "Odonto Screenshot Concepts"
Cohesion: 0.22
Nodes (10): Agendar Agora Button, Agendar Avaliacao Button, A arte de criar sorrisos que duram uma vida, Hero Section, Kippo Odonto, Top Navigation Menu, Conheca os Procedimentos Link, Role Scroll Indicator (+2 more)

### Community 7 - "JSConfig Compiler"
Cohesion: 0.20
Nodes (9): compilerOptions, baseUrl, jsx, module, moduleResolution, paths, target, include (+1 more)

### Community 8 - "Odonto Landing Visual"
Cohesion: 0.40
Nodes (10): Agendar Agora Button, High-End Dental Clinic Positioning, Dental Office Interior Photo, Hero Section - Dental Clinic Landing, Dark Gradient Overlay on Clinical Photo, Primary CTA: Agendar Avaliação, KIPPO Odonto Hero Screenshot, Secondary CTA: Conheça os Procedimentos (+2 more)

### Community 9 - "Design System Tokens"
Cohesion: 0.22
Nodes (9): Creative North Star: O Sinal Contido, KIPPO Design System, Esmeralda Cortante #10B981, Grafite #1F2937, Verde Floresta Profundo #065F46, Inter typeface, Marquee / Logo Cloud, Branco Frio #FFFFFF (+1 more)

### Community 10 - "Barber Screenshot Concepts"
Cohesion: 0.39
Nodes (8): Barber tools and products, Agendar call-to-action, Dark luxury aesthetic, Hero section layout, Lion Barber Club brand, Lion Barber logo, Navigation menu, Est. 2014 premium seal

### Community 11 - "Portfolio Data & Detail"
Cohesion: 0.36
Nodes (6): getProject(), projects, pageTransition, pageVariants, ProjectDetail(), setMeta()

### Community 12 - "Barber Landing Visual"
Cohesion: 0.52
Nodes (7): Landing page screenshot (Lion Barber Club; file named kippo-barbearia.png), Agendar Horário CTA, Hero Section Layout, Kippo Barbearia, Lion Barber Club, Main Navigation Bar, Premium Barbershop Positioning

### Community 13 - "Brand Logo Identity"
Cohesion: 0.40
Nodes (5): Circular Dot Motif, Geometric Rounded Typography, KIPPO Brand Identity, KIPPO Logo, Monochrome Color Scheme

### Community 14 - "Prime Fitness Brand"
Cohesion: 0.70
Nodes (5): Academia (fitness gym), Prime Fitness brand identity, Green and orange gym color scheme, Prime Fitness building photo, Prime Fitness

### Community 15 - "Favicon Logo Assets"
Cohesion: 0.40
Nodes (5): KIPPO favicon PNG, website favicon, geometric wordmark, KIPPO logo, minimalist brand design

### Community 16 - "Elevation & Motion"
Cohesion: 0.50
Nodes (4): Flat at rest, shadow on state, Translucent fixed header, Motion serves content, Reveal on-scroll animation

### Community 17 - "Prime Fitness Photo"
Cohesion: 1.00
Nodes (3): Academia (Fitness Gym), Prime Fitness, Prime Fitness Academy Building Photograph

## Ambiguous Edges - Review These
- `Landing page screenshot (Lion Barber Club; file named kippo-barbearia.png)` → `Kippo Barbearia`  [AMBIGUOUS]
  kippo-react/public/favcon/kippo-barbearia.png · relation: references

## Knowledge Gaps
- **83 isolated node(s):** `baseUrl`, `@/*`, `jsx`, `module`, `moduleResolution` (+78 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Landing page screenshot (Lion Barber Club; file named kippo-barbearia.png)` and `Kippo Barbearia`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `useI18n()` connect `Homepage UI Components` to `Portfolio Data & Detail`, `App Shell & Routing`, `Contact Page`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `Reveal()` connect `Homepage UI Components` to `Portfolio Data & Detail`, `Contact Page`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **What connects `baseUrl`, `@/*`, `jsx` to the rest of the system?**
  _93 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Homepage UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.11846689895470383 - nodes in this community are weakly interconnected._
- **Should `Project Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Product Strategy & Migration` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._