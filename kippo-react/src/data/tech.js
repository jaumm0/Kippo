/* Stack da KIPPO — dados bilíngues (PT/EN) para a seção interativa de tecnologias.
   `icon` é uma chave string mapeada para SVGs em components/Tech.jsx (TECH_ICONS).
   Para adicionar uma tecnologia nova, basta incluir um objeto aqui + um ícone no mapa. */
export const TECHS = [
  {
    name: { pt: 'React', en: 'React' },
    icon: 'react',
    exp: { pt: 'Avançado', en: 'Advanced' },
    description: {
      pt: 'Biblioteca JavaScript para construir interfaces modernas, componentizadas e reativas.',
      en: 'JavaScript library for building modern, component-based, reactive interfaces.'
    },
    advantages: {
      pt: ['Componentização reutilizável', 'Alto desempenho com Virtual DOM', 'Ecossistema gigante', 'Hot reloading em dev'],
      en: ['Reusable components', 'High performance via Virtual DOM', 'Huge ecosystem', 'Hot reloading in dev']
    },
    uses: {
      pt: ['Landing Pages', 'Dashboards', 'SaaS', 'Sistemas Web'],
      en: ['Landing Pages', 'Dashboards', 'SaaS', 'Web Systems']
    },
    url: 'https://react.dev'
  },
  {
    name: { pt: 'JavaScript', en: 'JavaScript' },
    icon: 'javascript',
    exp: { pt: 'Avançado', en: 'Advanced' },
    description: {
      pt: 'A linguagem base da web — dá vida à interatividade no navegador e no servidor.',
      en: "The web's foundational language — powers interactivity on client and server."
    },
    advantages: {
      pt: ['Onipresente (front e back)', 'Execução assíncrona', 'Comunidade massiva', 'Sem build obrigatório'],
      en: ['Ubiquitous (front & back)', 'Asynchronous execution', 'Massive community', 'No build step required']
    },
    uses: {
      pt: ['Interações de UI', 'Automação de navegador', 'Scripts', 'APIs'],
      en: ['UI interactions', 'Browser automation', 'Scripts', 'APIs']
    },
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
  },
  {
    name: { pt: 'TypeScript', en: 'TypeScript' },
    icon: 'typescript',
    exp: { pt: 'Intermediário', en: 'Intermediate' },
    description: {
      pt: 'Superset tipado do JavaScript — segura o código em escala e melhora o DX.',
      en: 'Typed JavaScript superset — scales code safely and improves developer experience.'
    },
    advantages: {
      pt: ['Tipagem estática', 'Autocompletar inteligente', 'Menos bugs em produção', 'Refactoring seguro'],
      en: ['Static typing', 'Smart autocompletion', 'Fewer production bugs', 'Safe refactoring']
    },
    uses: {
      pt: ['Sistemas Web', 'APIs', 'Apps enterprise', 'Bibliotecas'],
      en: ['Web Systems', 'APIs', 'Enterprise apps', 'Libraries']
    },
    url: 'https://www.typescriptlang.org'
  },
  {
    name: { pt: 'Node.js', en: 'Node.js' },
    icon: 'node',
    exp: { pt: 'Avançado', en: 'Advanced' },
    description: {
      pt: 'Runtime JavaScript no servidor — APIs, automações e serviços performáticos.',
      en: 'JavaScript runtime on the server — APIs, automation and performant services.'
    },
    advantages: {
      pt: ['I/O não-bloqueante', 'Um só idioma no stack', 'NPM gigante', 'Ótimo para APIs REST'],
      en: ['Non-blocking I/O', 'One language across the stack', 'Huge NPM registry', 'Great for REST APIs']
    },
    uses: {
      pt: ['APIs REST', 'Automação', 'Real-time', 'Microserviços'],
      en: ['REST APIs', 'Automation', 'Real-time', 'Microservices']
    },
    url: 'https://nodejs.org'
  },
  {
    name: { pt: 'MySQL', en: 'MySQL' },
    icon: 'mysql',
    exp: { pt: 'Intermediário', en: 'Intermediate' },
    description: {
      pt: 'Banco relacional robusto e maduro — modelagem confiável para dados estruturados.',
      en: 'Robust, mature relational database — reliable modeling for structured data.'
    },
    advantages: {
      pt: ['Confiável e testado', 'Consultas SQL poderosas', 'Transações ACID', 'Fácil de hospedar'],
      en: ['Reliable and battle-tested', 'Powerful SQL queries', 'ACID transactions', 'Easy to host']
    },
    uses: {
      pt: ['Sistemas Web', 'E-commerce', 'CRMs', 'Painéis administrativos'],
      en: ['Web Systems', 'E-commerce', 'CRMs', 'Admin panels']
    },
    url: 'https://www.mysql.com'
  },
  {
    name: { pt: 'Git', en: 'Git' },
    icon: 'git',
    exp: { pt: 'Avançado', en: 'Advanced' },
    description: {
      pt: 'Controle de versão distribuído — histórico, colaboração e rollback sem dor.',
      en: 'Distributed version control — history, collaboration and painless rollback.'
    },
    advantages: {
      pt: ['Histórico total do projeto', 'Branches isolados', 'Trabalho em equipe', 'Reversão segura'],
      en: ['Full project history', 'Isolated branches', 'Team collaboration', 'Safe rollbacks']
    },
    uses: {
      pt: ['Qualquer projeto', 'Colaboração', 'CI/CD', 'Releases versionadas'],
      en: ['Any project', 'Collaboration', 'CI/CD', 'Versioned releases']
    },
    url: 'https://git-scm.com'
  },
  {
    name: { pt: 'APIs REST', en: 'REST APIs' },
    icon: 'rest',
    exp: { pt: 'Avançado', en: 'Advanced' },
    description: {
      pt: 'Padrão de comunicação cliente-servidor via HTTP — integrar sistemas de forma limpa.',
      en: 'Client-server communication over HTTP — clean system integration.'
    },
    advantages: {
      pt: ['Stateless e escalável', 'Contrato claro via endpoints', 'Independente de linguagem', 'Fácil de consumir'],
      en: ['Stateless and scalable', 'Clear endpoint contracts', 'Language-agnostic', 'Easy to consume']
    },
    uses: {
      pt: ['Integrações', 'Apps mobile e web', 'Automação', 'Webhooks'],
      en: ['Integrations', 'Mobile & web apps', 'Automation', 'Webhooks']
    },
    url: 'https://restfulapi.net'
  }
]