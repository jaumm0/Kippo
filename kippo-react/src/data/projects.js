/* Dados bilíngues dos projetos (fonte única de verdade para portfólio + detalhe). */

export const projects = [
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
    id: 'landing-vertice',
    title: { pt: 'Landing Vértice', en: 'Vértice Landing' },
    cover: null,
    init: 'Ve',
    c1: '#065F46', c2: '#1F2937',
    tags: ['JavaScript', 'SEO', 'A/B Testing'],
    liveUrl: null,
    repoUrl: null,
    summary: {
      pt: 'Landing page de alta conversão para startup de consultoria, com A/B testing.',
      en: 'A high-conversion landing page for a consulting startup, with A/B testing.'
    },
    overview: {
      pt: [
        'Landing page enxuta e objetiva para uma startup de consultoria, desenhada para captar leads qualificados.',
        'Estrutura leve em JavaScript puro, com cópia orientada a conversão e experimentos A/B para validar hipóteses de mensagem.'
      ],
      en: [
        'Lean, objective landing page for a consulting startup, designed to capture qualified leads.',
        'Lightweight vanilla JavaScript structure, conversion-oriented copy and A/B experiments to validate messaging hypotheses.'
      ]
    },
    duration: { pt: '≈ 1 semana', en: '≈ 1 week' },
    focus: {
      pt: 'Validar hipóteses de mensagem com A/B testing para maximizar a conversão de leads.',
      en: 'Validate messaging hypotheses with A/B testing to maximize lead conversion.'
    },
    tech: [
      { name: 'JavaScript', desc: { pt: 'Lógica de UI e captura de leads sem framework pesado.', en: 'UI logic and lead capture without a heavy framework.' } },
      { name: 'CSS', desc: { pt: 'Estilização responsiva e performática.', en: 'Responsive, performant styling.' } },
      { name: 'A/B Testing', desc: { pt: 'Experimentos controlados de cópia e layout.', en: 'Controlled experiments on copy and layout.' } },
      { name: 'SEO', desc: { pt: 'Estrutura semântica e metadados para indexação.', en: 'Semantic structure and metadata for indexing.' } }
    ],
    highlights: {
      pt: ['Cópia orientada a conversão', 'Experimentos A/B', 'Carregamento rápido', 'SEO técnico'],
      en: ['Conversion-oriented copy', 'A/B experiments', 'Fast load', 'Technical SEO']
    }
  },

  {
    id: 'automacao-aura',
    title: { pt: 'Automação Aura', en: 'Aura Automation' },
    cover: null,
    init: 'Au',
    c1: '#10B981', c2: '#1F2937',
    tags: ['Node.js', 'APIs REST', 'Automação'],
    liveUrl: null,
    repoUrl: null,
    summary: {
      pt: 'Integração entre CRM e ERP eliminando trabalho manual e reduzindo erros em 90%.',
      en: 'CRM-to-ERP integration that eliminated manual work and reduced errors by 90%.'
    },
    overview: {
      pt: [
        'Automação que conecta o CRM de vendas ao ERP da empresa, sincronizando dados sem intervenção manual.',
        'Desenvolvida em Node.js consumindo APIs REST dos dois sistemas, com logging, retries e tratamento de erros para rodar em produção com confiabilidade.'
      ],
      en: [
        'Automation connecting the sales CRM to the company ERP, syncing data without manual intervention.',
        'Built in Node.js consuming REST APIs from both systems, with logging, retries and error handling to run reliably in production.'
      ]
    },
    duration: { pt: '≈ 4 semanas', en: '≈ 4 weeks' },
    focus: {
      pt: 'Automatizar o fluxo de dados entre CRM e ERP, eliminando retrabalho manual e erros de digitação.',
      en: 'Automate the data flow between CRM and ERP, eliminating manual rework and typing errors.'
    },
    tech: [
      { name: 'Node.js', desc: { pt: 'Runtime para os jobs de sincronização agendados.', en: 'Runtime for the scheduled sync jobs.' } },
      { name: 'APIs REST', desc: { pt: 'Integração com CRM e ERP via endpoints documentados.', en: 'Integration with CRM and ERP via documented endpoints.' } },
      { name: 'Logging & Retries', desc: { pt: 'Rastreabilidade e reprocessamento seguro de falhas.', en: 'Traceability and safe failure reprocessing.' } }
    ],
    highlights: {
      pt: ['Redução de 90% nos erros', 'Sincronização automática', 'Logging detalhado', 'Retries com backoff'],
      en: ['90% error reduction', 'Automatic sync', 'Detailed logging', 'Retries with backoff']
    }
  },

  {
    id: 'portal-noticia',
    title: { pt: 'Portal Notícia', en: 'News Portal' },
    cover: null,
    init: 'No',
    c1: '#065F46', c2: '#10B981',
    tags: ['TypeScript', 'MySQL', 'CMS'],
    liveUrl: null,
    repoUrl: null,
    summary: {
      pt: 'Site institucional responsivo para veículo de comunicação, com CMS customizado.',
      en: 'A responsive institutional site for a media outlet, with a custom CMS.'
    },
    overview: {
      pt: [
        'Portal institucional para um veículo de comunicação, com publicação ágil de notícias e alto desempenho sob tráfego intenso.',
        'Construído em TypeScript no front e back, com MySQL para persistência e um CMS customizado para a redação publicar sem depender de devs.'
      ],
      en: [
        'Institutional portal for a media outlet, with agile news publishing and high performance under heavy traffic.',
        'Built with TypeScript on front and back, MySQL for persistence and a custom CMS so the newsroom can publish without depending on devs.'
      ]
    },
    duration: { pt: '≈ 5 semanas', en: '≈ 5 weeks' },
    focus: {
      pt: 'Publicação ágil de notícias com CMS customizado e performance em alto tráfego.',
      en: 'Agile news publishing with a custom CMS and performance under heavy traffic.'
    },
    tech: [
      { name: 'TypeScript', desc: { pt: 'Tipagem em todo o stack para segurança e manutenibilidade.', en: 'Typing across the stack for safety and maintainability.' } },
      { name: 'MySQL', desc: { pt: 'Modelagem relacional para notícias, autores e categorias.', en: 'Relational modeling for news, authors and categories.' } },
      { name: 'CMS Customizado', desc: { pt: 'Painel próprio para a redação publicar sem código.', en: 'In-house panel for the newsroom to publish without code.' } }
    ],
    highlights: {
      pt: ['CMS próprio', 'Alta performance', 'Tipagem end-to-end', 'Responsivo'],
      en: ['Custom CMS', 'High performance', 'End-to-end typing', 'Responsive']
    }
  }
]

export function getProject(id) {
  return projects.find((p) => p.id === id) || null
}