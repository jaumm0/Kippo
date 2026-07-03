/* ============================================
   KIPPO — Interações + i18n (PT / EN)
   - Troca de idioma sem recarregar
   - Header scroll state
   - Menu mobile
   - Reveal on scroll
   - Ano dinâmico no rodapé
   ============================================ */
(function () {
    'use strict';

    /* ---------- Intro: a logo se monta e revela a página ---------- */
    var intro = document.getElementById('intro');
    if (intro) {
        var alreadyPlayed = false;
        try { alreadyPlayed = sessionStorage.getItem('kippo-intro') === 'done'; } catch (e) {}
        var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (alreadyPlayed || reduceMotion) {
            /* pula a intro */
            intro.parentNode && intro.parentNode.removeChild(intro);
        } else {
            document.body.classList.add('is-intro');
            try { sessionStorage.setItem('kippo-intro', 'done'); } catch (e) {}

            var finished = false;
            function finishIntro() {
                if (finished) return;
                finished = true;
                intro.classList.add('is-hidden');
                document.body.classList.remove('is-intro');
                setTimeout(function () {
                    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
                }, 700);
            }

            /* marca a logo como montada para o "respiro" antes de revelar */
            setTimeout(function () {
                var logo = intro.querySelector('.intro__logo');
                if (logo) logo.classList.add('is-assembled');
            }, 1600);

            /* revela a página depois da animação */
            setTimeout(finishIntro, 2100);

            /* permite pular com Esc ou clique */
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') finishIntro();
            });
            intro.addEventListener('click', finishIntro);
        }
    }

    /* ---------- Dicionário de traduções ---------- */
    var I18N = {
        pt: {
            _title: "KIPPO — Desenvolvimento de Sites, Landing Pages e Sistemas Web",
            _desc: "A KIPPO cria sites institucionais, landing pages e sistemas web modernos usando React, JavaScript e tecnologias atuais. Soluções digitais focadas em performance e conversão.",
            _ogTitle: "KIPPO — Transformamos ideias em experiências digitais",
            _ogDesc: "Criamos sites, landing pages e sistemas modernos com React e JavaScript para acelerar seus resultados.",
            _ogLocale: "pt_BR",

            "nav.home": "Início",
            "nav.services": "Serviços",
            "nav.work": "Projetos",
            "nav.about": "Sobre",
            "nav.contact": "Contato",
            "nav.cta": "Solicitar Orçamento",

            "hero.studio": "Estúdio digital",
            "hero.loc": "Campo Grande · MS",
            "intro.skip": "Pular",
            "nav.skip": "Pular para conteúdo",
            "hero.title": "Transformamos ideias<br>em <em class=\"accent\">experiências digitais</em>.",
            "hero.lead": "Criamos sites, landing pages e sistemas modernos com React, JavaScript e tecnologias atuais — projetados para performar e acelerar resultados.",
            "hero.ctaPrimary": "Solicitar Orçamento",
            "hero.ctaGhost": "Ver Projetos",
            "hero.cred1": "+80 projetos entregues",
            "hero.cred2": "7 anos de experiência",
            "hero.cred3": "Foco em conversão",

            "logocloud.title": "Marcas que crescem com a gente",

            "services.title": "O que construímos para você",
            "services.desc": "Soluções digitais sob medida, do conceito ao deploy, pensadas para performar e converter.",
            "services.c1.title": "Landing Pages",
            "services.c1.text": "Landing pages otimizadas para conversão, com copy estratégica, performance e design orientado a resultados.",
            "services.c1.tag": "Alta conversão",
            "services.c2.title": "Sites Institucionais",
            "services.c2.text": "Sites rápidos, responsivos e profissionais que transmitem credibilidade e fortalecem sua marca.",
            "services.c2.tag": "Responsivo",
            "services.c3.title": "Sistemas Web",
            "services.c3.text": "Soluções sob medida para empresas: painéis, plataformas e ferramentas internas que escalam com o negócio.",
            "services.c3.tag": "Sob medida",
            "services.c4.title": "Automação",
            "services.c4.text": "Integrações e processos automatizados que eliminam tarefas repetitivas e economizam tempo da equipe.",
            "services.c4.tag": "Eficiência",

            "tech.title": "Stack moderna e confiável",
            "tech.desc": "Trabalhamos com um ecossistema consolidado, garantindo manutenção, performance e longevidade aos seus projetos.",
            "tech.rest": "APIs REST",

            "about.quote": "“Tecnologia que trabalha a favor do seu negócio.”",
            "about.title": "Sua parceira tecnológica",
            "about.text1": "Somos uma equipe especializada em desenvolvimento digital, com foco em performance, experiência do usuário e crescimento. Unimos design refinado à engenharia de software para entregar produtos que funcionam — e que escalam.",
            "about.text2": "Acreditamos em soluções diretas, código limpo e relacionamentos duradouros. Cada projeto é tratado como uma parceria: entendemos seus objetivos e transformamos desafios em resultados mensuráveis.",
            "about.l1": "Código limpo e manutenível",
            "about.l2": "Performance e SEO desde o início",
            "about.l3": "Comunicação clara e prazos cumpridos",

            "work.eyebrow": "Portfólio",
            "work.title": "Projetos selecionados",
            "work.desc": "Uma amostra de trabalhos recentes que unem estética, performance e propósito.",
            "work.more": "Ver mais",
            "work.p1.title": "Aurora Odontologia",
            "work.p1.text": "Landing page premium para clínica odontológica de alto padrão em São Paulo, com design clean e foco em agendamentos via WhatsApp.",
            "work.p1.more": "Ver mais",
            "work.p2.title": "Prime Fitness Universitário",
            "work.p2.text": "Landing page premium para academia, com estética old country e minimalista contemporânea — madeira nobre, couro e ferro escovado. Foco em planos e conversão.",
            "work.p2.more": "Ver mais",
            "work.p3.title": "Landing Vértice",
            "work.p3.text": "Landing page de alta conversão para startup de consultoria, com A/B testing.",
            "work.p3.t1": "Landing",
            "work.p4.title": "Automação Aura",
            "work.p4.text": "Integração entre CRM e ERP eliminando trabalho manual e reduzindo erros em 90%.",
            "work.p4.t1": "Automação",
            "work.p5.title": "Portal Notícia",
            "work.p5.text": "Site institucional responsivo para veículo de comunicação, com CMS customizado.",
            "work.p5.t1": "Site",

            "test.title": "O que dizem nossos clientes",
            "test.q1": "“Entregaram além do esperado. O novo site triplicou nossas conversões em três meses.”",
            "test.r1": "Diretora · Vértice Consultoria",
            "test.q2": "“Profissionalismo do briefing ao deploy. Automação que nos economizou horas toda semana.”",
            "test.r2": "CEO · Aura Soluções",
            "test.q3": "“Design impecável e código sólido. A KIPPO virou nossa parceira de tecnologia oficial.”",

            "cta.title": "Pronto para tirar seu projeto do papel?",
            "cta.text": "Vamos conversar sobre a sua ideia e encontrar a melhor forma de torná-la realidade.",
            "cta.btn": "Falar com um especialista",

            "footer.tagline": "Desenvolvimento de produtos digitais com performance e propósito.",
            "footer.rights": "Todos os direitos reservados.",
            "footer.madeby": "Feito por",
            "proj.back": "Voltar ao portfólio"
        },
        en: {
            _title: "KIPPO — Web Development: Sites, Landing Pages & Web Systems",
            _desc: "KIPPO builds institutional websites, landing pages and modern web systems using React, JavaScript and current technologies. Digital solutions focused on performance and conversion.",
            _ogTitle: "KIPPO — Turning ideas into digital experiences",
            _ogDesc: "We build modern websites, landing pages and web systems with React and JavaScript to accelerate your results.",
            _ogLocale: "en_US",

            "nav.home": "Home",
            "nav.services": "Services",
            "nav.work": "Work",
            "nav.about": "About",
            "nav.contact": "Contact",
            "nav.cta": "Request a Quote",

            "hero.studio": "Digital studio",
            "hero.loc": "Campo Grande · MS",
            "intro.skip": "Skip",
            "nav.skip": "Skip to content",
            "hero.title": "Turning ideas<br>into <em class=\"accent\">digital experiences</em>.",
            "hero.lead": "We build modern websites, landing pages and web systems using React, JavaScript and current technologies — engineered to perform and accelerate results.",
            "hero.ctaPrimary": "Request a Quote",
            "hero.ctaGhost": "View Work",
            "hero.cred1": "80+ projects delivered",
            "hero.cred2": "7 years of experience",
            "hero.cred3": "Conversion-focused",

            "logocloud.title": "Brands growing with us",

            "services.title": "What we build for you",
            "services.desc": "Custom digital solutions, from concept to deploy, designed to perform and convert.",
            "services.c1.title": "Landing Pages",
            "services.c1.text": "Conversion-optimized landing pages with strategic copy, performance and results-driven design.",
            "services.c1.tag": "High conversion",
            "services.c2.title": "Institutional Websites",
            "services.c2.text": "Fast, responsive and professional websites that convey credibility and strengthen your brand.",
            "services.c2.tag": "Responsive",
            "services.c3.title": "Web Systems",
            "services.c3.text": "Custom solutions for companies: dashboards, platforms and internal tools that scale with the business.",
            "services.c3.tag": "Custom-built",
            "services.c4.title": "Automation",
            "services.c4.text": "Integrations and automated processes that eliminate repetitive tasks and save your team time.",
            "services.c4.tag": "Efficiency",

            "tech.title": "A modern, reliable stack",
            "tech.desc": "We work with a proven ecosystem, ensuring maintainability, performance and longevity for your projects.",
            "tech.rest": "REST APIs",

            "about.quote": "“Technology that works in favor of your business.”",
            "about.title": "Your technology partner",
            "about.text1": "We're a team specialized in digital development, focused on performance, user experience and growth. We combine refined design with software engineering to deliver products that work — and scale.",
            "about.text2": "We believe in straightforward solutions, clean code and lasting relationships. Every project is treated as a partnership: we understand your goals and turn challenges into measurable results.",
            "about.l1": "Clean, maintainable code",
            "about.l2": "Performance & SEO from day one",
            "about.l3": "Clear communication, deadlines met",

            "work.eyebrow": "Work",
            "work.title": "Selected projects",
            "work.desc": "A sample of recent work combining aesthetics, performance and purpose.",
            "work.more": "View more",
            "work.p1.title": "Aurora Odontologia",
            "work.p1.text": "Premium landing page for a high-end dental clinic in São Paulo, with clean design and WhatsApp-driven appointment booking.",
            "work.p1.more": "View more",
            "work.p2.title": "Prime Fitness Universitário",
            "work.p2.text": "Premium landing page for a gym, with an old-country yet contemporary minimalist aesthetic — noble wood, leather and brushed steel. Focused on plans and conversion.",
            "work.p2.more": "View more",
            "work.p3.title": "Vértice Landing",
            "work.p3.text": "A high-conversion landing page for a consulting startup, with A/B testing.",
            "work.p3.t1": "Landing",
            "work.p4.title": "Aura Automation",
            "work.p4.text": "CRM-to-ERP integration that eliminated manual work and reduced errors by 90%.",
            "work.p4.t1": "Automation",
            "work.p5.title": "News Portal",
            "work.p5.text": "A responsive institutional site for a media outlet, with a custom CMS.",
            "work.p5.t1": "Website",

            "test.title": "What our clients say",
            "test.q1": "“They delivered beyond expectations. The new site tripled our conversions in three months.”",
            "test.r1": "Director · Vértice Consultoria",
            "test.q2": "“Professionalism from brief to deploy. Automation that saves us hours every week.”",
            "test.r2": "CEO · Aura Solutions",
            "test.q3": "“Impeccable design and solid code. KIPPO became our official technology partner.”",

            "cta.title": "Ready to bring your project to life?",
            "cta.text": "Let's talk about your idea and find the best way to make it a reality.",
            "cta.btn": "Talk to a specialist",

            "footer.tagline": "Digital product development with performance and purpose.",
            "footer.rights": "All rights reserved.",
            "footer.madeby": "Built by",
            "proj.back": "Back to portfolio"
        }
    };

    /* ---------- Aplica o idioma ---------- */
    function setLang(lang) {
        var dict = I18N[lang] || I18N.pt;

        document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
        document.title = dict._title;

        setMeta('description', dict._desc);
        setMetaProperty('og:title', dict._ogTitle);
        setMetaProperty('og:description', dict._ogDesc);
        setMetaProperty('og:locale', dict._ogLocale);

        /* Textos simples */
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (key.charAt(0) === '_') return;
            if (dict[key] != null) el.textContent = dict[key];
        });
        /* Textos com HTML */
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (dict[key] != null) el.innerHTML = dict[key];
        });

        /* Estado visual dos botões de idioma */
        document.querySelectorAll('.lang__btn').forEach(function (btn) {
            btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
            btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
        });

        try { localStorage.setItem('kippo-lang', lang); } catch (e) {}
    }

    function setMeta(name, content) {
        var m = document.querySelector('meta[name="' + name + '"]');
        if (m) m.setAttribute('content', content);
    }
    function setMetaProperty(prop, content) {
        var m = document.querySelector('meta[property="' + prop + '"]');
        if (m) m.setAttribute('content', content);
    }

    /* ---------- Idioma inicial (salvo ou do navegador) ---------- */
    var saved = null;
    try { saved = localStorage.getItem('kippo-lang'); } catch (e) {}
    var initial = saved || ((navigator.language || 'pt').slice(0, 2) === 'en' ? 'en' : 'pt');
    setLang(initial);

    document.querySelectorAll('.lang__btn').forEach(function (btn) {
        btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
    });

    /* ---------- Header: sombra ao rolar ---------- */
    var header = document.getElementById('header');
    var onScroll = function () {
        if (!header) return;
        header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------- Menu mobile ---------- */
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');

    var closeMenu = function () {
        if (!toggle || !nav) return;
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('is-open');
            toggle.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
            document.body.style.overflow = open ? 'hidden' : '';
        });
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
    }

    /* ---------- Reveal on scroll ---------- */
    var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if ('IntersectionObserver' in window && reveals.length) {
        var io = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    var siblings = Array.prototype.slice.call(el.parentElement.children).filter(function (c) {
                        return c.classList.contains('reveal');
                    });
                    var idx = siblings.indexOf(el);
                    el.style.transitionDelay = Math.min(idx, 6) * 70 + 'ms';
                    el.classList.add('is-visible');
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        reveals.forEach(function (el) { io.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('is-visible'); });
    }

    /* ---------- Logo Cloud (marquee infinito) ---------- */
    var LC_LOGOS = [
        { name: "Northwind", icon: '<path d="M14 3l9 5v12l-9 5-9-5V8l9-5zm0 3.2L8 9.5v9l6 3.3 6-3.3v-9l-6-2.3z" fill-rule="evenodd"/>' },
        { name: "Lumina", icon: '<circle cx="14" cy="14" r="5"/><path d="M14 2v4M14 22v4M2 14h4M22 14h4M5.6 5.6l2.8 2.8M19.6 19.6l2.8 2.8M22.4 5.6l-2.8 2.8M8.4 19.6l-2.8 2.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>' },
        { name: "Vertex", icon: '<path d="M14 4l10 20H4L14 4z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>' },
        { name: "Quanta", icon: '<circle cx="14" cy="14" r="10" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="14" cy="14" r="4"/>' },
        { name: "Helios", icon: '<circle cx="14" cy="14" r="9" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="14" cy="14" r="3.2"/>' },
        { name: "Monogram", icon: '<rect x="4" y="4" width="14" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="10" y="10" width="14" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/>' },
        { name: "Cobalt", icon: '<path d="M14 3l10 11-10 11L4 14 14 3z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>' },
        { name: "Apex", icon: '<path d="M14 5l9 17H5L14 5z"/>' },
        { name: "Stratus", icon: '<rect x="4" y="7" width="20" height="3" rx="1.5"/><rect x="4" y="13" width="20" height="3" rx="1.5" opacity="0.7"/><rect x="4" y="19" width="13" height="3" rx="1.5" opacity="0.45"/>' },
        { name: "Kindred", icon: '<circle cx="10" cy="14" r="7" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="18" cy="14" r="7" fill="none" stroke="currentColor" stroke-width="2.2"/>' },
        { name: "Orbit", icon: '<ellipse cx="14" cy="14" rx="12" ry="6" fill="none" stroke="currentColor" stroke-width="2.2" transform="rotate(-30 14 14)"/><circle cx="22" cy="9" r="2.6"/>' },
        { name: "Nimbus", icon: '<rect x="4" y="4" width="20" height="20" rx="6" fill="none" stroke="currentColor" stroke-width="2.2"/>' }
    ];

    function lcSvg(logo) {
        var iconBox = 28;
        var textX = iconBox + 8;
        var textWidth = Math.round(logo.name.length * 9.2) + 6;
        var width = textX + textWidth;
        return '<svg viewBox="0 0 ' + width + ' 28" height="28" role="img" aria-label="' + logo.name + '" xmlns="http://www.w3.org/2000/svg">' +
            '<g fill="currentColor">' + logo.icon + '</g>' +
            '<text x="' + textX + '" y="20" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="600" letter-spacing="-0.3" fill="currentColor">' + logo.name + '</text>' +
            '</svg>';
    }

    function lcFill(trackEl, set) {
        if (!trackEl) return;
        var items = set.concat(set); /* duplicado → loop seamless em -50% */
        trackEl.innerHTML = items.map(function (logo) {
            return '<span class="logo">' + lcSvg(logo) + '</span>';
        }).join('');
    }

    var lcMid = Math.ceil(LC_LOGOS.length / 2);
    lcFill(document.querySelector('[data-row="top"]'), LC_LOGOS.slice(0, lcMid));
    lcFill(document.querySelector('[data-row="bottom"]'), LC_LOGOS.slice(lcMid));

    document.querySelectorAll('.marquee').forEach(function (row) {
        row.addEventListener('mouseenter', function () { row.classList.add('is-paused'); });
        row.addEventListener('mouseleave', function () { row.classList.remove('is-paused'); });
    });

    /* ---------- Ano no rodapé ---------- */
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Fechar menu ao redimensionar para desktop ---------- */
    var resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (window.innerWidth > 820) closeMenu();
        }, 150);
    });
})();