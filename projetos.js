/* ============================================
   KIPPO — Página de detalhe do projeto
   - Lê ?id= na URL e renderiza o projeto
   - Conteúdo bilíngue (PT/EN), acompanha o idioma
   - Independente do script.js (roda antes dele)
   ============================================ */
(function () {
    'use strict';

    /* ---------- Rótulos de UI (bilíngue) ---------- */
    var UI = {
        pt: {
            back: 'Voltar ao portfólio',
            eyebrow: 'Portfólio',
            overview: 'Visão geral',
            techUsed: 'Tecnologias usadas',
            focusTitle: 'Foco do projeto',
            highlights: 'Destaques',
            duration: 'Duração',
            focus: 'Foco',
            stack: 'Stack',
            viewLive: 'Ver projeto ao vivo',
            code: 'Código no GitHub',
            notFound: 'Projeto não encontrado.',
            backHome: 'Voltar ao portfólio'
        },
        en: {
            back: 'Back to portfolio',
            eyebrow: 'Portfolio',
            overview: 'Overview',
            techUsed: 'Technologies used',
            focusTitle: 'Project focus',
            highlights: 'Highlights',
            duration: 'Duration',
            focus: 'Focus',
            stack: 'Stack',
            viewLive: 'View live project',
            code: 'Code on GitHub',
            notFound: 'Project not found.',
            backHome: 'Back to portfolio'
        }
    };

    /* ---------- Dados dos projetos ---------- */
    var PROJECTS = {
        'aurora-odontologia': {
            title: { pt: 'Aurora Odontologia', en: 'Aurora Odontologia' },
            cover: "favcon/odonto img.png",
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

        'prime-fitness': {
            title: { pt: 'Prime Fitness Universitário', en: 'Prime Fitness Universitário' },
            cover: 'favcon/prime-fitness.png',
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

        'landing-vertice': {
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

        'automacao-aura': {
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

        'portal-noticia': {
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
    };

    /* ---------- Helpers ---------- */
    function getLang() {
        var saved = null;
        try { saved = localStorage.getItem('kippo-lang'); } catch (e) {}
        if (saved === 'pt' || saved === 'en') return saved;
        try {
            if ((navigator.language || 'pt').slice(0, 2) === 'en') return 'en';
        } catch (e) {}
        return 'pt';
    }

    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function getId() {
        var p = new URLSearchParams(location.search);
        return p.get('id');
    }

    /* ---------- Render ---------- */
    function render() {
        var root = document.getElementById('projeto-root');
        if (!root) return;
        var lang = getLang();
        var L = UI[lang];
        var id = getId();
        var p = PROJECTS[id];

        document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

        if (!p) {
            root.innerHTML =
                '<div class="container proj-notfound">' +
                '<p>' + esc(L.notFound) + '</p>' +
                '<a class="btn btn--ghost" href="index.html#projetos">← ' + esc(L.backHome) + '</a>' +
                '</div>';
            return;
        }

        document.title = p.title[lang] + ' — KIPPO';

        var cover;
        if (p.cover) {
            cover = '<div class="proj-hero__cover" style="background-image:url(\'' + p.cover.replace(/'/g, "\\'") + '\')"></div>';
        } else {
            cover = '<div class="proj-hero__cover proj-hero__cover--grad" style="--c1:' + p.c1 + ';--c2:' + p.c2 + '">' +
                '<span class="proj-hero__init">' + esc(p.init) + '</span></div>';
        }

        var tags = p.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');

        var overview = p.overview[lang].map(function (para) {
            return '<p>' + esc(para) + '</p>';
        }).join('');

        var tech = p.tech.map(function (t) {
            return '<article class="proj-tech__item reveal">' +
                '<h3 class="proj-tech__name">' + esc(t.name) + '</h3>' +
                '<p class="proj-tech__desc">' + esc(t.desc[lang]) + '</p>' +
                '</article>';
        }).join('');

        var highlights = p.highlights[lang].map(function (h) {
            return '<li>' + esc(h) + '</li>';
        }).join('');

        var actions = '';
        if (p.liveUrl || p.repoUrl) {
            actions = '<div class="proj-actions">';
            if (p.liveUrl) {
                actions += '<a class="btn btn--primary" href="' + esc(p.liveUrl) + '" target="_blank" rel="noopener noreferrer">' + esc(L.viewLive) + ' <span class="arrow" aria-hidden="true">→</span></a>';
            }
            if (p.repoUrl) {
                actions += '<a class="btn btn--ghost" href="' + esc(p.repoUrl) + '" target="_blank" rel="noopener noreferrer">' + esc(L.code) + '</a>';
            }
            actions += '</div>';
        }

        root.innerHTML =
            '<header class="proj-hero">' +
                '<div class="container">' + cover + '</div>' +
                '<div class="container proj-hero__meta">' +
                    '<p class="proj-eyebrow reveal">' + esc(L.eyebrow) + '</p>' +
                    '<h1 class="proj-title reveal">' + esc(p.title[lang]) + '</h1>' +
                    '<p class="proj-summary reveal">' + esc(p.summary[lang]) + '</p>' +
                    '<div class="proj-tags reveal">' + tags + '</div>' +
                '</div>' +
            '</header>' +

            '<div class="container proj-grid">' +
                '<div class="proj-main">' +
                    '<section class="proj-block reveal">' +
                        '<h2 class="proj-block__title">' + esc(L.overview) + '</h2>' +
                        '<div class="proj-block__body">' + overview + '</div>' +
                    '</section>' +
                    '<section class="proj-block reveal">' +
                        '<h2 class="proj-block__title">' + esc(L.techUsed) + '</h2>' +
                        '<div class="proj-tech">' + tech + '</div>' +
                    '</section>' +
                    '<section class="proj-block reveal">' +
                        '<h2 class="proj-block__title">' + esc(L.focusTitle) + '</h2>' +
                        '<div class="proj-block__body"><p>' + esc(p.focus[lang]) + '</p></div>' +
                    '</section>' +
                    '<section class="proj-block reveal">' +
                        '<h2 class="proj-block__title">' + esc(L.highlights) + '</h2>' +
                        '<ul class="proj-highlights">' + highlights + '</ul>' +
                    '</section>' +
                '</div>' +

                '<aside class="proj-aside">' +
                    '<div class="proj-card reveal">' +
                        '<div class="proj-card__row"><span class="proj-card__label">' + esc(L.duration) + '</span><span class="proj-card__value">' + esc(p.duration[lang]) + '</span></div>' +
                        '<div class="proj-card__row"><span class="proj-card__label">' + esc(L.focus) + '</span><span class="proj-card__value">' + esc(p.focus[lang]) + '</span></div>' +
                        '<div class="proj-card__row"><span class="proj-card__label">' + esc(L.stack) + '</span><span class="proj-card__value">' + p.tags.map(esc).join(' · ') + '</span></div>' +
                    '</div>' +
                    actions +
                '</aside>' +
            '</div>';
    }

    render();

    /* Animações on-scroll próprias (o script.js roda antes e já montou
       seu observer antes do conteúdo existir, então observamos aqui) */
    var revealIO = null;
    function setupReveal() {
        var els = document.querySelectorAll('#projeto-root .reveal');
        if (!('IntersectionObserver' in window)) {
            els.forEach(function (el) { el.classList.add('is-visible'); });
            return;
        }
        if (revealIO) { revealIO.disconnect(); }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry, idx) {
                if (entry.isIntersecting) {
                    entry.target.style.transitionDelay = Math.min(idx, 6) * 60 + 'ms';
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealIO = io;
        els.forEach(function (el) { io.observe(el); });
    }
    setupReveal();

    /* Re-renderiza quando o idioma muda (botões PT/EN do header) */
    document.addEventListener('click', function (e) {
        var btn = e.target.closest && e.target.closest('.lang__btn');
        if (!btn) return;
        var lang = btn.getAttribute('data-lang');
        try { localStorage.setItem('kippo-lang', lang); } catch (e2) {}
        render();
        setupReveal();
    });

    /* Re-renderiza ao voltar com o botão do navegador (cache de bfcache) */
    window.addEventListener('pageshow', function () { render(); setupReveal(); });
})();