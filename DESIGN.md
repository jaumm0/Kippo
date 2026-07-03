---
name: KIPPO
description: Site institucional e portfólio do estúdio KIPPO — esmeralda cortante sobre branco frio, com grafite como base escura.
colors:
  green: "#10B981"
  green-deep: "#065F46"
  graphite: "#1F2937"
  ink-soft: "#4B5563"
  ink-muted: "#6B7280"
  line: "#ECEFF3"
  surface: "#F7F9FB"
  gray-light: "#E5E7EB"
  white: "#FFFFFF"
  forest-deep: "#054733"
  cta-curve: "#2C3E40"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(1.85rem, 4vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  lead:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(1.0625rem, 1.5vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  tag: "6px"
  sm: "10px"
  card: "14px"
  lg: "22px"
  pill: "999px"
spacing:
  container: "1140px"
  section-y: "112px"
  section-head: "56px"
  grid-gap: "28px"
  pad-inline: "24px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.green-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  button-ghost-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.graphite}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.green-deep}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  button-light-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.card}"
    padding: "32px 28px 30px"
  card-hover:
    backgroundColor: "{colors.white}"
  tech-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    typography: "{typography.label}"
  tech-chip-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.green-deep}"
  nav-link:
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    typography: "{typography.label}"
  footer-social:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    size: "40px"
---

# Design System: KIPPO

## 1. Overview

**Creative North Star: "O Sinal Contido"**

A KIPPO é um sinal verde único num campo quase todo branco. A autoridade não vem de
volume — não vem de empilhar estatísticas, badges, eyebrows numeradas — mas da raridade
do acento e do respiro entre os elementos. O sistema é frio e limpo por princípio: o
branco é a base, o grafite carrega a tipografia e as seções escuras, e a esmeralda
aparece poucas vezes, sempre significando a mesma coisa ("isto é da KIPPO; isto é o
caminho"). Confiança via contenção, não via ruído.

A superfície default é branca e plana, com bordas hairline (`#ECEFF3`) separando cartões
e seções. Sombras não decoram — elas surgem apenas como resposta a estado (hover, lift),
quando um cartão se destaca da grade. Camadas tonais claríssimas (`#F7F9FB`) distinguem
seções alternadas sem precisar de linha. Os blocos escuros (logo cloud, CTA, rodapé) são
imersões em grafite/verde-floresta que funcionam como pausas estruturais — o contraste
faz o branco seguinte respirar de volta.

O que este sistema recusa, explicitamente: o template SaaS genérico (gradiente roxo/azul,
três cards idênticos, mockups de estoque); a estética cream/papel quente saturada de
2026 — o branco aqui é frio e limpo, não quente; super-animação (scroll-jacking, parallax
barulhento) — o motion revela e dá feedback tátil, nunca performa; e a densidade poluída
de stats/badges/eyebrows empilhados. Cada escolha é deliberada; o silêncio comunica tanto
quanto o sinal verde.

**Key Characteristics:**
- **Branco frio como base.** Nunca cream, nunca papel. Grafite sustenta a tipografia.
- **Acento esmeralda raro e constante.** Mesmo verde `#10B981` em pontos significativos; raridade é o ponto.
- **Plano no repouso, sombra no hover.** Bordas hairline no repouso; `--shadow-lg` só quando há elevação/estado.
- **Inter em quatro pesos.** Uma família, hierarquia por peso/tamanho/letter-spacing — sem pairing desnecessário.
- **Motion tátil e contido.** `--ease` ease-out quart, `translateY` pequeno, reveal sutil; `prefers-reduced-motion` sempre honrado.
- **Seções escuras como pausas.** Logo cloud e CTA mergulham em grafite/verde-floresta para o branco respirar.

## 2. Colors

A paleta é uma esmeralda cortante sobre um neutro frio, com grafite como base escura
para pausas estruturais. Sem terciárias inventadas — um acento, uma base escura, e uma
rampa de neutros frios.

### Primary
- **Esmeralda Cortante** (`#10B981`): o único acento. Pontos de atenção, CTAs primários,
  logo dot, bordas de hover, glows, ícones-âncora. Raridade é o ponto — usado em ≤10% da
  superfície visível de qualquer tela. Nunca como fundo de bloco grande no claro.
- **Verde Floresta Profundo** (`#065F46`): o "ativo/press" do acento e o escuro quente.
  Botão primário no hover, eyebrow de seção, base do gradiente do Sobre e do logo cloud,
  segundo stop dos gradientes de capa de projeto. É a profundidade que a esmeralda aponta.

### Neutral
- **Grafite** (`#1F2937`): tinta de corpo e de título, e base escura do rodapé. É o `--ink`.
  Não é "preto" — é o azul-petróleo escuro que faz a esmeralda parecer mais viva ao lado.
- **Grafite Suave** (`#4B5563` / `--ink-soft`): corpo de texto corrido, leads, bullets do
  sobre. O texto secundário padrão; nunca usar `--ink-muted` para corpo longo.
- **Grafite Mudo** (`#6B7280` / `--ink-muted`): só metadados pequenos (hero meta, captions
  de avatar, language switcher inativo). Texto pequeno; não usar em corpo grande.
- **Linha Hairline** (`#ECEFF3` / `--line`): separa cartões, seções, e o divider do hero.
  A única "borda" do sistema; manter sempre neste neutro frio, nunca colorida.
- **Superfície Tonal** (`#F7F9FB` / `--surface`): fundo de seções alternadas, tags de
  portfólio, fundo do ícone de card. A camada tonal que substitui sombra em repouso.
- **Cinza Claro** (`#E5E7EB` / `--gray-light`): borda do botão ghost no repouso.
- **Branco Frio** (`#FFFFFF`): a base default. Frio por contraste com a esmeralda; sem calor.

### Cores de bloco escuro (pausas estruturais)
- **Verde Floresta Denso** (`#054733`): segundo stop do gradiente do logo cloud
  (`linear-gradient(180deg, #065F46, #054733)`). Aprofunda a imersão verde.
- **Curva do CTA** (`#2C3E40`): preenchimento do vale côncavo SVG na base do CTA, costurando
  a transição grafite→rodapé.

### Named Rules
**A Regra do Sinal Único.** A Esmeralda Cortante aparece em pontos discretos e
significativos — nunca como大面积 fundo claro, nunca como cor de corpo. Se um rascunho
tem mais de ~10% da superfície visível em esmeralda, reverter para grafite/superfície e
deixar o verde só onde precisa puxar o olho. A raridade é o que faz ler como confiança,
não como decoração.

**A Regra do Neutro Frio.** Todos os neutros (`--line`, `--surface`, `--ink-soft`,
`--ink-muted`) são frios, levemente azuis-petróleo, para combinar com a base de grafite.
Nunca migrar a rampa para neutros quentes (cream/bege/sand) — isso trairia a identidade
e cruzaria para a anti-referência "editorial cream/papel quente".

## 3. Typography

**Display Font:** Inter (com `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
**Body Font:** Inter (mesma família)
**Label/Mono Font:** Inter — sem fonte mono; a família única sustenta tudo.

**Character:** Uma só família grotesque humanista em quatro pesos (400/500/600/700).
A hierarquia vem inteiramente de peso, tamanho e letter-spacing — não de pairing. É uma
escolha de contenção: trocar confiança tipográfica por ornamentação seria trair o
"Sinal Contido". O letter-spacing negativo nos títulos (`-0.02` a `-0.03em`) mantém as
letras próximas sem tocar; o `.14em` positivo nos eyebrows os afasta e sussurra.

### Hierarchy
- **Display** (Inter 700, `clamp(2.5rem, 6.5vw, 4.75rem)`, line 1.04, ls `-0.03em`): só o
  título do hero. Itálico peso 500 em verde marca o termo de destaque (`<em class="accent">`).
  Max-width `16ch` força quebra deliberada; nunca expandir além de ~96px.
- **Headline** (Inter 700, `clamp(1.85rem, 4vw, 2.6rem)`, line 1.15, ls `-0.02em`): título
  de cada seção e do CTA. Largura limitada a `640px` via `.section__head`.
- **Subtitle** (Inter 600, `1.5rem`, line 1.35, ls `-0.01em`): a citação no bloco Sobre.
- **Title** (Inter 600, `1.25rem`, ls `-0.01em`): título de card de serviço e card de
  portfólio (`1.1875rem`).
- **Body** (Inter 400, `1rem` / 16px, line 1.65): corpo padrão. Manter linhas em 65–75ch.
- **Lead** (Inter 400, `clamp(1.0625rem, 1.5vw, 1.1875rem)`, line 1.6, cor `--ink-soft`):
  parágrafo de abertura do hero e descrições de seção. Largura `560px` no hero.
- **Label** (Inter 600, `0.8125rem`, ls `0.14em`, UPPERCASE): eyebrows de seção. Cor
  `--green-dark` no claro. As tags de card/tech usam `.04em` e não uppercase.

### Named Rules
**A Regra do Peso, Não do Pairing.** Uma família, quatro pesos. Não introduzir serif de
display nem mono de "estúdio técnico" — essa ornamentação é o reflexo que o "Sinal
Contido" recusa. Se a hierarquia precisa ser mais forte, use peso 700 e letter-spacing
mais negativo (até o piso de `-0.03em`), nunca uma segunda fonte.

**A Regra do Piso de Letter-spacing.** Display nunca abaixo de `-0.03em`; abaixo disso as
letras se tocam e lê como apertado, não como "desenhado". O eyebrow, ao contrário, vive em
`+0.14em` — distante e sussurrado.

## 4. Elevation

Híbrido: superfícies **planas no repouso**, com profundidade dada por camadas tonais
(`--surface` sobre `--white`) e bordas hairline (`--line`). Sombras **não decoram** —
aparecem só como resposta a estado: o card que levita no hover (`translateY(-6px)` +
`--shadow-lg`), o header que ganha linha+brilho ao rolar, o botão primário com seu glow
verde discreto. É "plano por default, elevação sob intenção".

A imersão nos blocos escuros (logo cloud, CTA, rodapé) não usa sombra — usa troca de
modo (claro→escuro) e radial-glows verdes de baixa opacidade como profundidade de atmosfera.

### Shadow Vocabulary
- **Sombra de header** (`box-shadow: 0 1px 18px rgba(31,41,55,.06)`): no header fixo após
  scroll, com `border-color: var(--line)`. Quase imperceptível — só confirma a barra.
- **Sombra pequena** (`--shadow-sm: 0 1px 2px rgba(31,41,55,.04), 0 2px 8px rgba(31,41,55,.04)`):
  camada mais baixa; raramente usada diretamente.
- **Sombra média** (`--shadow-md: 0 6px 24px rgba(31,41,55,.08)`): botão light no repouso,
  hover do testimonial. Presença moderada.
- **Sombra grande** (`--shadow-lg: 0 18px 50px rgba(31,41,55,.12)`): hover de card e project,
  visual do Sobre, capa de projeto. O lift principal do sistema.
- **Glow verde** (`box-shadow: 0 6px 18px rgba(16,185,129,.28)` primário; `.32–.40` hover;
  `.40` float-whats): a única sombra colorida, sempre no acento, nunca em neutros.
- **Pulse do float-whats** (`@keyframes pulse`, 2.6s): o único shadow animado; honrar
  `prefers-reduced-motion`.

### Named Rules
**A Regra do Plano-no-Repouso.** Superfícies são planas em repouso. Sombras surgem só em
resposta a estado (hover, elevação, foco). Nunca parear `border: 1px solid` com
`box-shadow` largo (≥16px blur) no mesmo elemento em repouso — é o padrão "ghost-card".
Escolha: hairline no repouso OU sombra definida no hover, nunca ambos como decoração.

**A Regra do Glow Só no Acento.** Sombras coloridas são sempre esmeralda. Nunca sombra
grafite-arroxeada "para combinar" — isso cruza para o template SaaS. O glow verde é o
sinal do acento se estendendo fisicamente; se não é acento, é sombra neutra.

## 5. Components

Caráter: **tátil e confiante**. Cards levitam, botões respondem, motion dá feedback — mas
sem exagerar (anti-ref "super animado"). Toda transição usa `--ease` (`cubic-bezier(.22,.61,.36,1)`,
ease-out quart) e durações curtas (.2–.4s) com `translateY` pequeno (−2 a −6px).

### Buttons
- **Shape:** pílula completa (`border-radius: 999px`), padding `14px 26px`, peso 600,
  fonte `.9375rem`. `will-change: transform`; hover `translateY(-2px)`.
- **Primary:** fundo `--green`, texto branco, glow `0 6px 18px rgba(16,185,129,.28)`.
  Hover → fundo `--green-deep`, glow `.32`. É o sinal; reservado para a ação principal de
  cada região (CTA do nav, CTA do hero, CTA do contato).
- **Ghost:** transparente, texto `--ink`, borda `1.5px solid --gray-light`. Hover → borda
  `--ink` + fundo branco. Ação secundária ("Ver Projetos"); a seta `→` translada 4px no hover.
- **Light:** fundo branco, texto `--green-dark`, `--shadow-md`. Uso sobre blocos escuros
  (CTA final). Hover → fundo `--green`, texto branco, glow `.40`.
- **Focus:** states por `:focus-visible` implícitos via navegador; manter visíveis (não
  remover o outline padrão sem substituto de pelo menos 2px `--green`).

### Chips / Tags
- **Tech chip:** pílula branca, borda `--line`, padding `12px 22px`, peso 600. Hover →
  texto `--green-dark`, borda `--green`, `translateY(-3px)`, fundo `rgba(16,185,129,.05)`.
- **Project tag:** retangular `6px`, `0.75rem`, peso 500, fundo `--surface`, texto
  `--ink-muted`. Sem hover — são metadados.
- **Card tag:** pílula `999px`, `0.75rem`, peso 600, texto `--green-dark`, fundo
  `rgba(16,185,129,.08)`. Label descritivo do serviço.

### Cards / Containers
- **Corner Style:** `--radius` (14px) para cards de serviço, portfólio e testimonial;
  `--radius-lg` (22px) para o bloco visual do Sobre e capas de projeto.
- **Background:** branco sobre branco/seção-tonal. Bloco Sobre e CTA usam gradiente
  escuro (`linear-gradient(160/155deg, --ink, --green-deep)`).
- **Shadow Strategy:** plano (borda hairline `--line`) no repouso; `--shadow-lg` + `translateY(-6px)`
  no hover. Card de serviço tem barra superior de 3px que escala de `0→1` no hover (eixo X
  a partir da esquerda); **é barra superior, não side-stripe** — permitida.
- **Border:** `1px solid --line` no repouso; transparente no hover (a sombra substitui).
- **Internal Padding:** serviço `32px 28px 30px`; portfólio body `24px 26px 28px`;
  testimonial `32px 30px`.

### Inputs / Fields
- O site não tem campos de formulário hoje (contato via WhatsApp/e-mail). Se introduzidos:
  stroke `1px solid --line`, fundo branco, radius `--radius-sm` (10px), focus com borda
  `--green` + glow verde discreto, sem border-left colorida.

### Navigation
- **Header fixo** translúcido: `rgba(255,255,255,.82)` + `backdrop-filter: saturate(180%) blur(12px)`.
  Borda inferior transparente no topo; `--line` + brilho suave ao rolar (`.is-scrolled`).
  Altura 72px, `z-index: 100`.
- **Nav links:** `.9375rem` peso 500, cor `--ink-soft`. Hover → `--ink` + sublinhado verde
  animado de largura `0→100%` (2px, bottom `-6px`). O CTA primário é botão, não link-text.
- **Language switcher:** pílulas `.8125rem` peso 600. Inativo: `--ink-muted`, transparente.
  Ativo: `--green-dark`, fundo `rgba(16,185,129,.10)`, borda `rgba(16,185,129,.25)`.
- **Mobile (≤820px):** nav vira drawer fixo à direita, `min(82vw, 340px)`, branco,
  `--shadow-lg`, `translateX(100%)→0` via `.is-open`; toggle vira X animado. `display:none`
  no toggle em desktop.

### Signature: Marquee / Logo Cloud
- Bloco imerso em `linear-gradient(180deg, #065F46, #054733)` com glow radial verde no topo.
  Duas faixas marquee (`@keyframes marquee-scroll`, 38s / 46s reverse) com mask de fade
  nas bordas (`linear-gradient transparent→#000 12%→#000 88%→transparent`). Logos em
  `filter: grayscale(1)`, opacidade `.6`; hover → cor cheia + `translateY(-1px)`.
  `prefers-reduced-motion` → marquee para e centraliza.

### Signature: Reveal
- `.reveal` começa `opacity:0; translateY(18px)`, transita `.7s --ease` para
  `.is-visible` (via `script.js` + IntersectionObserver). O conteúdo **deve estar visível
  por default** se a transição não disparar (headless / tabs ocultas) — o JS adiciona
  `.is-visible`; em reduced-motion, `.reveal` é forçado a `opacity:1; transform:none`.

## 6. Do's and Don'ts

### Do:
- **Do** manter o branco como base default e frio; usar `--surface` (`#F7F9FB`) para
  seções alternadas e `--line` (`#ECEFF3`) para separar — nunca neutral quente.
- **Do** reservar a Esmeralda Cortante (`#10B981`) para pontos significativos (≤10% da
  tela visível): CTAs primários, logo dot, hovers, glows. A raridade é o ponto.
- **Do** manter cartões planos no repouso (borda hairline `--line`) e aplicar `--shadow-lg`
  + `translateY(-6px)` só no hover. Elevação é resposta a estado.
- **Do** usar `--ease` (`cubic-bezier(.22,.61,.36,1)`) e durações curtas (.2–.4s) em
  toda transição; `translateY` pequeno (−2 a −6px).
- **Do** honrar `@media (prefers-reduced-motion: reduce)` em toda animação — `.reveal`
  deve resolver a `opacity:1`, marquee deve parar e centralizar.
- **Do** limitar linhas de corpo a 65–75ch; leads a `560px`; títulos de seção a `640px`.
- **Do** deixar o header translúcido com `backdrop-filter: blur(12px)` e ganhar linha
  `--line` só ao rolar — presença leve, não pesada.

### Don't:
- **Don't** usar template SaaS genérico: gradiente roxo/azul de hero, três cards de
  feature idênticos com ícone+texto, mockups de dashboard de estoque. (Anti-ref do PRODUCT.md.)
- **Don't** migrar a base para cream/papel/bege/sand quente — este sistema é branco frio.
  Toda a rampa de neutros (`--line`, `--surface`, `--ink-soft`) é fria. (Anti-ref do PRODUCT.md.)
- **Don't** aplicar scroll-jacking, parallax barulhento ou motion que distrai do trabalho
  sendo mostrado — motion serve, não performa. (Anti-ref do PRODUCT.md.)
- **Don't** empilhar stats, badges e eyebrows numeradas (`01/02/03`) por reflexo em cada
  seção — manter restrição e respiro. (Anti-ref do PRODUCT.md "denso/poluído".)
- **Don't** parear `border: 1px solid X` com `box-shadow` de blur ≥16px no mesmo elemento
  em repouso (padrão "ghost-card"). Escolha hairline OU sombra, nunca ambos como decoração.
- **Don't** usar `border-left`/`border-right` maior que 1px como faixa colorida lateral.
  A barra superior de 3px no card de serviço é topo, não lateral — permitida; side-stripes não.
- **Don't** aplicar gradiente + `background-clip: text` em texto corrido como decoração.
  (O título do logo cloud usa hoje; revisar para cor sólida ou tratá-lo como caso único
  imerso — não vira padrão do sistema.)
- **Don't** introduzir serif de display ou mono "de estúdio técnico" para ornamentar a
  hierarquia — uma família, quatro pesos. Se precisa de mais força, peso 700 + ls mais
  negativo (até o piso `-0.03em`), nunca uma segunda fonte.
- **Don't** usar sombra colorida que não seja esmeralda. Glows verdes only; resto é sombra
  neutra grafite. (Regra do Glow Só no Acento.)
- **Don't** usar `--ink-muted` (`#6B7280`) em corpo longo de texto — é só para metadados
  pequenos. Corpo corrido usa `--ink-soft` (`#4B5563`) no mínimo.