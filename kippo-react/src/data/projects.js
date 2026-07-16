/* Dados bilíngues dos projetos (fonte única de verdade para portfólio + detalhe). */

export const projects = [
  {
    id: 'lacerda-almeida-advocacia',
    title: { pt: 'Lacerda & Almeida Advocacia', en: 'Lacerda & Almeida Law Firm' },
    cover: '/favcon/lacerda-almeida.png',
    init: 'LA',
    c1: '#C5A572', c2: '#1C1B19',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: null,
    repoUrl: 'https://github.com/jaumm0/Kippo-advocacia-',
    summary: {
      pt: 'Landing page premium para escritório de advocacia, com design editorial sofisticado e paleta dourado fosco sobre grafite — autoridade e discrição já no primeiro contato.',
      en: 'Premium landing page for a law firm, with sophisticated editorial design and a matte-gold-on-graphite palette — authority and discretion from the first contact.'
    },
    overview: {
      pt: [
        'Landing page institucional desenvolvida para a Lacerda & Almeida Advocacia, escritório com atuação em Direito Empresarial, Civil, Trabalhista e Tributário. A proposta foi transmitir solidez jurídica e discrição já no primeiro contato.',
        'Construída em React + Vite + Tailwind CSS com Framer Motion e Lucide, organiza o conteúdo em Hero, Escritório, Atuação, Equipe, Casos, Depoimentos, FAQ e Contato. A tipografia em Playfair Display + Cormorant Garamond + Inter sustenta o tom editorial.'
      ],
      en: [
        'Institutional landing page built for Lacerda & Almeida, a law firm practicing Corporate, Civil, Labor and Tax law. The goal was to convey legal solidity and discretion from the very first contact.',
        'Built with React + Vite + Tailwind CSS, Framer Motion and Lucide, it organizes content into Hero, Firm, Practice Areas, Team, Cases, Testimonials, FAQ and Contact. Playfair Display + Cormorant Garamond + Inter typography carries the editorial tone.'
      ]
    },
    duration: { pt: '≈ 2 semanas', en: '≈ 2 weeks' },
    focus: {
      pt: 'Comunicar a autoridade e a discrição do escritório, conduzindo o visitante ao contato por WhatsApp ou e-mail com confiança.',
      en: 'Communicate the firm’s authority and discretion, leading the visitor to reach out via WhatsApp or email with confidence.'
    },
    tech: [
      { name: 'React', desc: { pt: 'Componentização por seção (Hero, Atuação, Equipe, Casos, etc.) com estado leve.', en: 'Per-section components (Hero, Practice Areas, Team, Cases, etc.) with light state.' } },
      { name: 'Vite', desc: { pt: 'Dev server instantâneo e build de produção otimizado.', en: 'Instant dev server and optimized production build.' } },
      { name: 'Tailwind CSS', desc: { pt: 'Design system utilitário com tokens autorais (dourado fosco sobre grafite).', en: 'Utility-first design system with original tokens (matte gold on graphite).' } },
      { name: 'Framer Motion', desc: { pt: 'Animações suaves de entrada, reveal e microinterações.', en: 'Smooth entrance, reveal and microinteraction animations.' } },
      { name: 'Playfair + Cormorant', desc: { pt: 'Tipografia display (Playfair) e serifada (Cormorant) via Google Fonts.', en: 'Display (Playfair) and serif (Cormorant) typography via Google Fonts.' } }
    ],
    highlights: {
      pt: ['Design editorial premium', '4 áreas de atuação', 'Casos com métricas', 'Contato discreto via WhatsApp'],
      en: ['Premium editorial design', '4 practice areas', 'Cases with metrics', 'Discreet WhatsApp contact']
    }
  },

  {
    id: 'kippo-barbearia',
    title: { pt: 'Kippo Barbearia', en: 'Kippo Barbershop' },
    cover: '/favcon/kippo-barbearia.png',
    init: 'KB',
    c1: '#D4AF37', c2: '#111827',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://kippo-babearia-lions.vercel.app/',
    repoUrl: 'https://github.com/jaumm0/Kippo-babearia-lions',
    summary: {
      pt: 'Landing page premium para barbearia, com identidade clássica (ouro sobre preto), animações fluidas e foco em agendamento via WhatsApp.',
      en: 'Premium landing page for a barbershop, with a classic identity (gold on black), fluid animations and WhatsApp-driven booking.'
    },
    overview: {
      pt: [
        'Landing page desenvolvida para a Lion Barber Club, barbearia cuja identidade mistura o clássico barbershop (ouro sobre preto, tipografia robusta) com animações contemporâneas.',
        'Construída em React + Vite + Tailwind CSS, com animações fluidas em Framer Motion e ícones Lucide. Estruturada em seções de Hero, Serviços, Galeria, Sobre e CTA, levando o visitante ao agendamento via WhatsApp.'
      ],
      en: [
        'Landing page built for Lion Barber Club, a barbershop whose identity blends classic barbershop style (gold on black, robust typography) with contemporary animations.',
        'Built with React + Vite + Tailwind CSS, with fluid animations in Framer Motion and Lucide icons. Structured in Hero, Services, Gallery, About and CTA sections, leading the visitor to a WhatsApp booking.'
      ]
    },
    duration: { pt: '≈ 2 semanas', en: '≈ 2 weeks' },
    focus: {
      pt: 'Transmitir a identidade premium da barbearia e converter visitantes em agendamentos via WhatsApp, com um visual clássico e animado.',
      en: 'Convey the barbershop’s premium identity and convert visitors into WhatsApp bookings, with a classic, animated look.'
    },
    tech: [
      { name: 'React', desc: { pt: 'Componentização por seção (Hero, Serviços, Galeria, etc.) com estado leve.', en: 'Per-section components (Hero, Services, Gallery, etc.) with light state.' } },
      { name: 'Vite', desc: { pt: 'Dev server instantâneo e build de produção otimizado.', en: 'Instant dev server and optimized production build.' } },
      { name: 'Tailwind CSS', desc: { pt: 'Design system utilitário seguindo a paleta ouro sobre preto da marca.', en: 'Utility-first design system following the brand’s gold-on-black palette.' } },
      { name: 'Framer Motion', desc: { pt: 'Animações fluidas de entrada e transições entre seções.', en: 'Fluid entrance animations and transitions between sections.' } },
      { name: 'Lucide Icons', desc: { pt: 'Iconografia consistente e leve para serviços e CTAs.', en: 'Consistent, lightweight iconography for services and CTAs.' } }
    ],
    highlights: {
      pt: ['Agendamento via WhatsApp', 'Identidade clássica (ouro/preto)', 'Animações com Framer Motion', 'Galeria de cortes'],
      en: ['WhatsApp booking', 'Classic identity (gold/black)', 'Framer Motion animations', 'Cuts gallery']
    }
  },

  {
    id: 'aurora-odontologia',
    title: { pt: 'Aurora Odontologia', en: 'Aurora Odontologia' },
    cover: '/favcon/odonto-img.png',
    init: 'AO',
    c1: '#C9A227', c2: '#1F2937',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://odonto-painel.vercel.app/',
    repoUrl: null,
    summary: {
      pt: 'Landing page premium para clínica odontológica de alto padrão em São Paulo, com design clean e foco em agendamentos via WhatsApp.',
      en: 'Premium landing page for a high-end dental clinic in São Paulo, with clean design and WhatsApp-driven appointment booking.'
    },
    overview: {
      pt: [
        'Landing page institucional desenvolvida para a Aurora Odontologia, clínica de alto padrão em São Paulo. A proposta foi transmitir sofisticação e confiabilidade já no primeiro contato, conduzindo o visitante até o agendamento.',
        'Construída em React + Vite com Tailwind CSS, a página prioriza performance, SEO e uma experiência fluida tanto no mobile quanto no desktop.'
      ],
      en: [
        'Institutional landing page built for Aurora Odontologia, a high-end clinic in São Paulo. The goal was to convey sophistication and trustworthiness from the very first contact, leading the visitor toward booking.',
        'Built with React + Vite and Tailwind CSS, the page prioritizes performance, SEO and a smooth experience on both mobile and desktop.'
      ]
    },
    duration: { pt: '≈ 3 semanas', en: '≈ 3 weeks' },
    focus: {
      pt: 'Conversão: levar o visitante do primeiro contato ao agendamento via WhatsApp, com clareza visual e identidade premium.',
      en: 'Conversion: take the visitor from first contact to a WhatsApp booking, with visual clarity and a premium identity.'
    },
    tech: [
      { name: 'React', desc: { pt: 'Componentização reutilizável e estado de UI para as interações da página.', en: 'Reusable componentization and UI state for page interactions.' } },
      { name: 'Vite', desc: { pt: 'Build rápido em desenvolvimento e bundle otimizado em produção.', en: 'Fast dev build and an optimized production bundle.' } },
      { name: 'Tailwind CSS', desc: { pt: 'Estilização utilitária para um design system consistente e responsivo.', en: 'Utility-first styling for a consistent, responsive design system.' } }
    ],
    highlights: {
      pt: ['Agendamento direto via WhatsApp', 'Design clean e premium', 'Totalmente responsivo', 'Otimizado para SEO'],
      en: ['Direct WhatsApp booking', 'Clean, premium design', 'Fully responsive', 'SEO-optimized']
    }
  },

  {
    id: 'prime-fitness',
    title: { pt: 'Prime Fitness Universitário', en: 'Prime Fitness Universitário' },
    cover: '/favcon/prime-fitness.png',
    init: 'PF',
    c1: '#934C35', c2: '#465150',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: null,
    repoUrl: 'https://github.com/jaumm0/Academia-Prime-Fitness-Universit-rio',
    summary: {
      pt: 'Landing page premium para academia, com estética old country e minimalista contemporânea — madeira nobre, couro e ferro escovado. Foco em planos e conversão.',
      en: 'Premium landing page for a gym, with an old-country yet contemporary minimalist aesthetic — noble wood, leather and brushed steel. Focused on plans and conversion.'
    },
    overview: {
      pt: [
        'Landing page para a Prime Fitness Universitário, academia cuja identidade mistura old country (madeira nobre, couro, ferro escovado) com um minimalismo contemporâneo.',
        'Estruturada em React + Vite + Tailwind CSS, com seções de Hero, Sobre, Benefícios, Planos, Depoimentos, Galeria e CTA. As animações on-scroll suaves são feitas com um hook próprio (useReveal).'
      ],
      en: [
        'Landing page for Prime Fitness Universitário, a gym whose identity blends old country (noble wood, leather, brushed steel) with a contemporary minimalism.',
        'Built with React + Vite + Tailwind CSS, featuring Hero, About, Benefits, Plans, Testimonials, Gallery and CTA sections. Smooth on-scroll animations use a custom hook (useReveal).'
      ]
    },
    duration: { pt: '≈ 2 semanas', en: '≈ 2 weeks' },
    focus: {
      pt: 'Apresentar planos e diferenciais da academia, convertendo visitantes em matrículas com um visual robusto e sofisticado.',
      en: 'Showcase the gym’s plans and differentiators, converting visitors into sign-ups with a robust, sophisticated look.'
    },
    tech: [
      { name: 'React', desc: { pt: 'Componentes por seção (Hero, Planos, Galeria, etc.) com estado leve.', en: 'Per-section components (Hero, Plans, Gallery, etc.) with light state.' } },
      { name: 'Vite', desc: { pt: 'Dev server instantâneo e build de produção otimizado.', en: 'Instant dev server and optimized production build.' } },
      { name: 'Tailwind CSS', desc: { pt: 'Design system utilitário seguindo a paleta da marca.', en: 'Utility-first design system following the brand palette.' } },
      { name: 'useReveal', desc: { pt: 'Hook próprio para animações de entrada on-scroll.', en: 'Custom hook for on-scroll entrance animations.' } },
      { name: 'Cinzel + Inter', desc: { pt: 'Tipografia de títulos (Cinzel) e corpo (Inter) via Google Fonts.', en: 'Display titles (Cinzel) and body (Inter) via Google Fonts.' } }
    ],
    highlights: {
      pt: ['Galeria de imagens', 'Seção de planos comparativos', 'Animações on-scroll', 'Paleta old country'],
      en: ['Image gallery', 'Comparative plans section', 'On-scroll animations', 'Old-country palette']
    }
  },

  {
    id: 'e-commercer-kazp',
    title: { pt: 'Kazp E-commerce', en: 'Kazp E-commerce' },
    cover: '/favcon/e-commercer-kazp.png',
    init: 'KZ',
    c1: '#0F172A', c2: '#3B82F6',
    tags: ['React', 'Node.js', 'Dashboard', 'API REST'],
    liveUrl: null,
    repoUrl: null,
    summary: {
      pt: 'E-commerce com painel administrativo completo: catálogo, pedidos, pagamentos e dashboard em tempo real.',
      en: 'E-commerce with full admin panel: catalog, orders, payments and real-time dashboard.'
    },
    overview: {
      pt: [
        'Sistema e-commerce completo desenvolvido em arquitetura monorepo, separando a loja web do painel administrativo e da API.',
        'A loja apresenta catálogo de produtos, carrinho, checkout e acompanhamento de pedidos. O dashboard oferece controle de estoque, gestão de pedidos e visão de métricas de vendas. A API REST em Node.js centraliza regras de negócio, autenticação e integração com gateway de pagamentos.'
      ],
      en: [
        'Full e-commerce system built as a monorepo, separating the storefront, admin dashboard and API.',
        'The storefront features product catalog, cart, checkout and order tracking. The dashboard provides stock control, order management and sales metrics. The Node.js REST API centralizes business rules, authentication and payment gateway integration.'
      ]
    },
    duration: { pt: '≈ 6 semanas', en: '≈ 6 weeks' },
    focus: {
      pt: 'Entregar uma plataforma de vendas funcional do catálogo ao dashboard administrativo, com foco em escala e controle operacional.',
      en: 'Deliver a working sales platform from catalog to admin dashboard, focused on scale and operational control.'
    },
    tech: [
      { name: 'React', desc: { pt: 'Interface da loja e do painel com componentes reutilizáveis e estado de UI.', en: 'Storefront and admin UI with reusable components and UI state.' } },
      { name: 'Node.js', desc: { pt: 'API REST com autenticação, regras de negócio e integração com pagamentos.', en: 'REST API with authentication, business rules and payment integration.' } },
      { name: 'Dashboard', desc: { pt: 'Painel administrativo para produtos, pedidos e acompanhamento de métricas.', en: 'Admin panel for products, orders and metrics tracking.' } },
      { name: 'API REST', desc: { pt: 'Comunicação padronizada entre web, dashboard e serviços backend.', en: 'Standardized communication between web, dashboard and backend services.' } },
      { name: 'Monorepo', desc: { pt: 'apps/web, apps/api e apps/dashboard organizados em um único repositório.', en: 'apps/web, apps/api and apps/dashboard organized in a single repository.' } }
    ],
    highlights: {
      pt: ['Catálogo com checkout', 'Dashboard administrativo', 'API REST própria', 'Gestão de pedidos e estoque'],
      en: ['Catalog with checkout', 'Admin dashboard', 'Own REST API', 'Order and stock management']
    }
  }
]

export function getProject(id) {
  return projects.find((p) => p.id === id) || null
}