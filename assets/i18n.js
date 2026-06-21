/* =====================================================================
   i18n — Aura Software
   - Idioma padrão: inglês (URL sem prefixo, ex.: "/", "/sobre.html")
   - Português: prefixo /pt (ex.: "/pt/", "/pt/sobre.html")
   O HTML é escrito em PORTUGUÊS (fonte da verdade). Em páginas em inglês
   este script substitui os textos PT pelos equivalentes do dicionário abaixo.
   Em /pt nada é traduzido.
   Para editar um texto: altere no HTML (versão PT) e, se quiser, ajuste a
   tradução correspondente no dicionário `dict` (chave = texto PT exato).
   ===================================================================== */
(function () {
  var path = location.pathname;
  var isPt = path === "/pt" || path === "/pt/" || path.indexOf("/pt/") === 0;
  var lang = isPt ? "pt" : "en";
  document.documentElement.lang = isPt ? "pt-BR" : "en";

  // Dicionário: "texto em português" -> "texto em inglês"
  var dict = {
    // ---- Navegação / rodapé ----
    "Início": "Home",
    "Sobre": "About",
    "Portfólio": "Portfolio",
    "Contato": "Contact",
    "Perguntas Frequentes": "FAQ",
    "Entre Em Contato": "Get in Touch",
    "Páginas": "Pages",
    "Inovação que conecta pessoas e transforma negócios.": "Innovation that connects people and transforms businesses.",
    "Insira Seu E-mail…": "Enter Your Email…",
    "Inscreva-se": "Subscribe",
    "Vendas –": "Sales –",
    "Termos e Condições": "Terms and Conditions",
    "Política de Privacidade": "Privacy Policy",

    // ---- Home: hero ----
    "NOVO": "NEW",
    "Estúdio nº 1 de 2025": "#1 Studio of 2025",
    "Engenharia de Software para quem exige Performance, Escala e Controle.": "Software engineering for those who demand performance, scale and control.",
    "Tecnologia não pode ser um ponto de risco dentro da sua operação — ela precisa ser um diferencial competitivo.": "Technology can't be a point of risk inside your operation — it has to be a competitive advantage.",
    "Na Aura Software, projetamos e desenvolvemos sistemas com foco em estabilidade, eficiência e segurança desde a base. Cada solução é pensada para sustentar crescimento, integrar processos e reduzir fricção operacional.": "At Aura Software, we design and build systems focused on stability, efficiency and security from the ground up. Every solution is engineered to sustain growth, integrate processes and reduce operational friction.",
    "Conecte-se Conosco": "Connect With Us",
    "Conecte-se conosco": "Connect With Us",
    "O que é Aura?": "What is Aura?",

    // ---- Home: sobre (split) ----
    "Sobre Aura": "About Aura",
    "Construindo Marcas Mais Fortes": "Building Stronger Brands",
    "Criando impressões!": "Creating Impressions!",
    "Entregamos designs sob demanda de alta qualidade com precisão.": "We deliver high-quality on-demand design with precision.",
    "Eleve sua marca sem esforço, um clique de cada vez.": "Elevate your brand effortlessly, one click at a time.",
    "De R$ 0 a R$ 1.000.000 em vendas": "From R$0 to R$1,000,000 in sales",
    "Crescimento de 47% em novos clientes.": "47% growth in new clients.",
    "Ver sobre Aura": "Learn About Aura",
    "Mais de 200 empresas avaliadas": "200+ companies reviewed",

    // ---- Home: resultados ----
    "Resultados": "Results",
    "Entregando resultados tangíveis": "Delivering tangible results",
    "Que impulsionam o seu sucesso": "That drive your success",
    "No cerne de tudo o que fazemos está o compromisso de gerar resultados mensuráveis que impulsionem o seu sucesso.": "At the heart of everything we do is a commitment to delivering measurable results that drive your success.",
    "Agende uma call de 15 minutos.": "Book a 15-minute call.",

    // ---- Home: processo ----
    "Como trabalhamos?": "How We Work?",
    "Como Trabalhamos?": "How We Work?",
    "Simplificamos a jornada": "We simplify the journey",
    "do design ao lançamento.": "from design to launch.",
    "Nós facilitamos a concretização das suas ideias, guiando você desde a concepção até o lançamento completo do produto.": "We make it easy to bring your ideas to life, guiding you from concept to full product launch.",
    "Estágio 1": "Stage 1",
    "Estágio 2": "Stage 2",
    "Estágio 3": "Stage 3",
    "Começo": "Kickoff",
    "A fase inicial é onde tudo começa. Nós nos alinhamos com você para entender seus objetivos, sua visão e suas expectativas. Isso é feito por meio de discussões aprofundadas e pesquisas minuciosas.": "The initial phase is where it all begins. We align with you to understand your goals, your vision and your expectations through in-depth discussions and thorough research.",
    "Consulta Abrangente": "Comprehensive Consultation",
    "Escopo do Projeto": "Project Scope",
    "Execução": "Execution",
    "Com uma estratégia clara definida, passamos para a fase de execução, onde as ideias ganham vida. Nossa equipe trabalha com alta eficiência e colaboração para implementar o plano.": "With a clear strategy in place, we move into the execution phase, where ideas come to life. Our team works with high efficiency and collaboration to implement the plan.",
    "Integração perfeita": "Seamless Integration",
    "Colaboração em tempo real": "Real-time Collaboration",
    "Transferência": "Handover",
    "Após a finalização do projeto e desenvolvimento, passamos sem problemas para a fase de entrega. Nessa etapa, fornecemos todos os recursos, documentação e suporte necessários para um lançamento tranquilo.": "After the project and development are finalized, we move smoothly into the delivery phase, providing all the resources, documentation and support needed for a smooth launch.",
    "Suporte contínuo": "Ongoing Support",
    "Documentação": "Documentation",
    "Agende uma Consulta": "Book a Consultation",
    "Agende Uma Consulta": "Book a Consultation",

    // ---- Home: recursos (features) ----
    "Diferenciais": "Highlights",
    "Recursos de Design Ilimitados": "Unlimited Design Resources",
    "Entregue em um segundo!": "Delivered in a second!",
    "Obtenha recursos de design ilimitados que lhe dão a liberdade de criar sem limites.": "Get unlimited design resources that give you the freedom to create without limits.",
    "Aumente Sua Receita": "Boost Your Revenue",
    "Aumente os Lucros": "Increase Profits",
    "Desbloqueie novas fontes de receita com estratégias e marketing orientados por dados.": "Unlock new revenue streams with data-driven strategies and marketing.",
    "Ativos Personalizáveis": "Customizable Assets",
    "Desenhos editáveis": "Editable Designs",
    "Modifique e personalize facilmente os elementos de design para que se adequem à identidade da sua marca.": "Easily modify and customize design elements to match your brand identity.",
    "Desenvolvimento com Menos Bugs": "Development With Fewer Bugs",
    "Código Otimizado": "Optimized Code",
    "Nosso desenvolvimento sem erros garante que seu site funcione de forma fluida e rápida.": "Our error-free development ensures your site runs smoothly and fast.",
    "Projetos Premiados": "Award-Winning Projects",
    "Design Reconhecido": "Recognized Design",
    "Nossos designs premiados demonstram uma criatividade que nos diferencia no setor.": "Our award-winning designs showcase a creativity that sets us apart in the industry.",
    "Entrega Extremamente Rápida": "Lightning-Fast Delivery",
    "Resposta Rápida": "Fast Response",
    "Garantir que seus entregáveis estejam prontos quando você precisar deles, com ótima qualidade.": "Ensuring your deliverables are ready when you need them, with great quality.",
    "Compatível com Dispositivos Móveis": "Mobile-Friendly",
    "Responsivo": "Responsive",
    "Nosso design otimizado para dispositivos móveis garante que seu projeto fique incrível em todos os dispositivos.": "Our mobile-optimized design ensures your project looks great on every device.",

    // ---- Home: benefícios ----
    "Benefícios da Aura": "Aura Benefits",
    "Nós Não Apenas Projetamos, Nós Construímos.": "We Don't Just Design, We Build.",
    "Se Você Pode Sonhar, Nós Podemos Realizar!": "If You Can Dream It, We Can Build It!",
    "Experiência do Usuário Aprimorada": "Enhanced User Experience",
    "Conversões Impulsionadas": "Boosted Conversions",
    "Carregamento Rápido": "Fast Loading",
    "Otimizado Para SEO": "SEO Optimized",
    "Personalizável": "Customizable",
    "Escalável": "Scalable",
    "Maior Engajamento": "Higher Engagement",
    "Expansível": "Expandable",
    "Seguro": "Secure",
    "Amigo do Usuário": "User-Friendly",
    "Entre em Contato Agora": "Get in Touch Now",

    // ---- Home: colagem ----
    "Envie Solicitações Ilimitadas": "Send Unlimited Requests",
    "Desfrute da liberdade de enviar solicitações ilimitadas sem restrições. Seja para ajustes de design, estamos aqui para ajudá-lo em cada etapa.": "Enjoy the freedom to send unlimited requests with no restrictions. Whether it's design tweaks, we're here to help you every step of the way.",
    "Priorizamos a eficiência sem comprometer a qualidade.": "We prioritize efficiency without compromising quality.",
    "Publicar em Segundos": "Publish in Seconds",
    "Publique seu site em segundos com nosso processo simplificado.": "Publish your site in seconds with our streamlined process.",
    "Solicitações e Revisões": "Requests and Revisions",
    "Nosso processo inclui várias rodadas de solicitações e revisões, garantindo que seu feedback seja incorporado e que o produto final atenda às suas expectativas.": "Our process includes multiple rounds of requests and revisions, ensuring your feedback is incorporated and the final product meets your expectations.",
    "Preços Sem Preocupações": "Worry-Free Pricing",
    "Quer esteja começando agora ou expandindo o seu negócio, nossos planos flexíveis foram concebidos para se adaptarem às suas necessidades e orçamento.": "Whether you're just starting out or scaling your business, our flexible plans are designed to fit your needs and budget.",

    // ---- Home: portfólio ----
    "Nossos Projetos Selecionados": "Our Selected Projects",
    "Isso Impulsiona Seu Site.": "That Powers Your Website.",
    "Explore nosso trabalho — colaborações com clientes visionários em diversos setores.": "Explore our work — collaborations with visionary clients across many industries.",
    "Ver Portfólio": "View Portfolio",

    // ---- Home: serviços ----
    "Obtenha Serviços de Alta Qualidade": "Get High-Quality Services",
    "Com Clareza, Remotamente.": "With Clarity, Remotely.",
    "Descubra nossa gama de serviços criados para elevar sua marca e impulsionar seu negócio para o próximo nível.": "Discover our range of services crafted to elevate your brand and take your business to the next level.",
    "Desenvolvimento": "Development",
    "Sprint Completo do Site": "Full Website Sprint",
    "Ao simplificar o processo e focar em etapas-chave, garantimos que seu site esteja pronto para entrar no ar rapidamente, sem sacrificar a qualidade.": "By streamlining the process and focusing on key steps, we ensure your site is ready to go live quickly, without sacrificing quality.",
    "/ Projeto": "/ Project",
    "Semanas": "Weeks",
    "Design + Desenvolvimento Completo de Aplicativos": "Full App Design + Development",
    "Elementos Interativos": "Interactive Elements",
    "Pacote de Design Completo": "Complete Design Package",
    "Desde a criação de logotipos personalizados até diretrizes de marca abrangentes, design web e materiais de marketing, cuidamos de todos os aspectos da sua presença visual.": "From custom logo creation to comprehensive brand guidelines, web design and marketing materials, we handle every aspect of your visual presence.",
    "Arquivos + Materiais de Identidade Visual": "Brand Identity Files + Assets",
    "Fácil de Editar e Acessar": "Easy to Edit and Access",
    "Desenvolvimento Full Stack": "Full Stack Development",
    "Quer esteja desenvolvendo um website simples ou uma aplicação web complexa, nossa equipe fornece soluções escaláveis e adaptadas às suas necessidades.": "Whether you're building a simple website or a complex web application, our team delivers scalable solutions tailored to your needs.",
    "Banco de Dados e Back-End": "Database and Back-End",

    // ---- Home: parceira confiável ----
    "Lance Seu Site": "Launch Your Site",
    "A Parceira Confiável Para o Crescimento": "The Trusted Partner for Growth",
    "De Startups e Agências": "Of Startups and Agencies",
    "Coloque seu site no ar rapidinho! Com configuração profissional e suporte especializado, de forma fácil e rápida.": "Get your site live in no time! With professional setup and expert support, quickly and easily.",
    "Ver Sobre Aura": "Learn About Aura",

    // ---- Home: preços ----
    "Preços": "Pricing",
    "Planos para todos os tipos de negócios,": "Plans for every type of business,",
    "Adequados para Pessoal, Agências, Startups.": "Suited for Personal, Agencies, Startups.",
    "Nossos planos de preços são projetados para tornar o início o mais fácil possível. Com opções flexíveis, adaptadas a diversas necessidades e orçamentos.": "Our pricing plans are designed to make getting started as easy as possible. With flexible options tailored to a range of needs and budgets.",
    "A Escolha Mais Popular": "Most Popular Choice",
    "Desenvolvimento de App Standard": "Standard App Development",
    "A partir de:": "Starting at:",
    "Ideal para startups, empresas e empreendedores que precisam lançar um aplicativo mobile ou sistema web profissional com excelente custo-benefício.": "Ideal for startups, businesses and entrepreneurs who need to launch a professional mobile app or web system with excellent value for money.",
    "100+ Projetos": "100+ Projects",
    "75+ Revisões": "75+ Revisions",
    "Aplicativos Web e Mobile (PWA).": "Web and Mobile Apps (PWA).",
    "Sistemas Web Responsivos": "Responsive Web Systems",
    "Painel Administrativo": "Admin Dashboard",
    "Integração com APIs": "API Integration",
    "UI/UX Profissional": "Professional UI/UX",
    "Recomendado": "Recommended",
    "Desenvolvimento de App Premium": "Premium App Development",
    "Solução completa para empresas que desejam um software robusto, escalável e preparado para crescimento acelerado.": "A complete solution for companies that want robust, scalable software ready for rapid growth.",
    "650+ Projetos": "650+ Projects",
    "250+ Revisões": "250+ Revisions",
    "Arquitetura Escalável": "Scalable Architecture",
    "Suporte Técnico Inicial": "Initial Technical Support",
    "Autenticação e Segurança": "Authentication and Security",
    "SEO e Performance": "SEO and Performance",
    "Infraestrutura AWS com Proxy Reverso e Load Balancer": "AWS Infrastructure with Reverse Proxy and Load Balancer",

    // ---- Home: depoimentos ----
    "Depoimento": "Testimonial",
    "Avaliações de clientes sobre": "Client reviews on",
    "Trabalho, Usabilidade e Design.": "Work, Usability and Design.",
    "Conheça os depoimentos de nossos clientes satisfeitos! Veja como os ajudamos a alcançar seus objetivos e gerar um impacto duradouro.": "Hear from our satisfied clients! See how we helped them reach their goals and make a lasting impact.",
    "\"A Aura entendeu o que a gente precisava e entregou um produto sólido, no prazo. Engenharia de ponta a ponta.\"": "\"Aura understood exactly what we needed and delivered a solid product, on time. End-to-end engineering.\"",
    "\"Eles não apenas entregaram um site de primeira linha, como também forneceram insights estratégicos que nos ajudaram a melhorar nossa presença digital como um todo.\"": "\"They didn't just deliver a top-tier website, they also provided strategic insights that helped us improve our entire digital presence.\"",
    "\"A equipe compreendeu nossas necessidades complexas e forneceu um site de fácil utilização e alto desempenho que se destaca no mercado.\"": "\"The team understood our complex needs and delivered an easy-to-use, high-performance site that stands out in the market.\"",
    "\"Suas soluções inovadoras ajudaram a otimizar nossas operações, e o design e desenvolvimento do site são funcionais e visualmente impressionantes.\"": "\"Their innovative solutions helped streamline our operations, and the site's design and development are both functional and visually stunning.\"",
    "\"Ficamos impressionados com a abordagem criativa e a atenção aos detalhes. A equipe pegou nossas ideias e as transformou em sites deslumbrantes.\"": "\"We were impressed by the creative approach and attention to detail. The team took our ideas and turned them into stunning websites.\"",
    "\"A dedicação e a atenção aos detalhes da equipe são incomparáveis. Eles entregaram um site com um design belíssimo que reflete perfeitamente nossa marca.\"": "\"The team's dedication and attention to detail are unmatched. They delivered a beautifully designed site that perfectly reflects our brand.\"",
    "· Fundador": "· Founder",
    "· Gerente de Produto": "· Product Manager",
    "· Diretor Criativo": "· Creative Director",

    // ---- FAQ ----
    "Perguntas Feitas": "Frequently Asked",
    "Frequentemente": "Questions",
    "Perguntas": "Frequently Asked",
    "Frequentes": "Questions",
    "Tem dúvidas? Nossa seção de perguntas frequentes (FAQ) tem respostas rápidas para as dúvidas mais comuns.": "Got questions? Our FAQ section has quick answers to the most common ones.",
    "O que preciso para começar?": "What do I need to get started?",
    "Que tipo de personalização está disponível?": "What kind of customization is available?",
    "Quão fácil é editar para iniciantes?": "How easy is it to edit for beginners?",
    "Preciso saber programar?": "Do I need to know how to code?",
    "Quanto tempo leva um projeto?": "How long does a project take?",
    "E depois da entrega?": "What happens after delivery?",
    "Basta entrar em contato e contar sua ideia. Agendamos uma conversa, entendemos seu objetivo e montamos uma proposta com escopo e prazo claros.": "Just reach out and tell us your idea. We schedule a call, understand your goal and put together a proposal with clear scope and timeline.",
    "Todo projeto é construído sob medida — do design à arquitetura — para se adequar à sua marca e às suas necessidades de negócio.": "Every project is built from scratch — from design to architecture — to fit your brand and your business needs.",
    "Entregamos painéis administrativos e documentação pensados para quem não é técnico — você mesmo atualiza conteúdos do dia a dia.": "We deliver admin dashboards and documentation designed for non-technical users — you update day-to-day content yourself.",
    "Não. Cuidamos de toda a parte técnica: código, design, deploy e manutenção. Você foca no seu negócio.": "No. We handle all the technical side: code, design, deployment and maintenance. You focus on your business.",
    "Depende do escopo: de algumas semanas para um site ou MVP, a alguns meses para uma plataforma completa. Definimos o prazo antes de começar.": "It depends on the scope: from a few weeks for a website or MVP, to a few months for a complete platform. We define the timeline before starting.",
    "Oferecemos suporte e evolução contínua do produto, além de toda a documentação necessária.": "We offer ongoing support and product evolution, plus all the documentation you need.",

    // ---- CTA ----
    "Junte-se a Nós Agora": "Join Us Now",
    "Cada Projeto que Realizamos": "Every Project We Take On",
    "é uma Oportunidade Única.": "Is a Unique Opportunity.",
    "Pronto para dar o próximo passo? Junte-se a nós agora e comece a transformar sua visão em realidade com o apoio de especialistas.": "Ready to take the next step? Join us now and start turning your vision into reality with expert support.",

    // ---- Página: meta/título ----
    "Aura Software — Desenvolvimento de Sites e Sistemas": "Aura Software — Website and Systems Development",
    "A Aura Software desenvolve sites, sistemas e aplicações sob medida para o seu negócio. Software de alta qualidade que transforma ideias em resultados.": "Aura Software builds custom websites, systems and applications for your business. High-quality software that turns ideas into results.",
    "Sobre · Aura Software": "About · Aura Software",
    "Conheça a Aura Software: engenharia de software de ponta a ponta, do MVP ao produto em produção.": "Meet Aura Software: end-to-end software engineering, from MVP to production-ready product.",
    "Contato · Aura Software": "Contact · Aura Software",
    "Fale com a Aura Software. Tire dúvidas, peça ajuda ou inicie um novo projeto — nossa equipe está pronta para ajudar.": "Get in touch with Aura Software. Ask questions, get help or start a new project — our team is ready to help.",
    "Portfólio · Aura Software": "Portfolio · Aura Software",
    "Confira alguns dos trabalhos da Aura Software: aplicações, plataformas e sistemas sob medida que geram impacto real.": "Check out some of Aura Software's work: custom applications, platforms and systems that make a real impact.",
    "Max Performance · Portfólio · Aura Software": "Max Performance · Portfolio · Aura Software",
    "Max Performance — sistema de inteligência artificial para clínicas, com três robôs treinados que entregam scripts de venda, respostas e estratégias prontas para atrair e converter mais pacientes.": "Max Performance — an artificial intelligence system for clinics, with three trained bots that deliver sales scripts, answers and ready-made strategies to attract and convert more patients.",
    "AgendaClínica · Portfólio · Aura Software": "AgendaClínica · Portfolio · Aura Software",
    "AgendaClínica — SaaS de gestão para clínicas que organiza consultas, profissionais e prontuários, com IA para automatizar a triagem e reduzir faltas.": "AgendaClínica — a clinic management SaaS that organizes appointments, professionals and records, with AI to automate triage and reduce no-shows.",
    "Raio-X Fiscal · Portfólio · Aura Software": "Raio-X Fiscal · Portfolio · Aura Software",
    "Raio-X Fiscal — plataforma web que transforma o CNPJ de uma empresa em um diagnóstico visual de oportunidades fiscais, financeiras e operacionais.": "Raio-X Fiscal — a web platform that turns a company's CNPJ into a visual diagnosis of tax, financial and operational opportunities.",

    // ---- Sobre ----
    "Saiba Mais Sobre a Aura": "Learn More About Aura",
    "Vamos Analisar Em Detalhes!!": "Let's Dive Into the Details!!",
    "A Aura é a sua agência de referência para ideias criativas e de desenvolvimento. Somos especialistas em soluções digitais para negócios.": "Aura is your go-to agency for creative and development ideas. We specialize in digital solutions for businesses.",
    "Sobre a Aura": "About Aura",
    "Uma Agência Com Estilo Clássico": "An Agency With Classic Style",
    "Habilidades Revolucionárias!": "Revolutionary Skills!",
    "Seu Sucesso, Nossa Prioridade.": "Your Success, Our Priority.",
    "Na Aura, acreditamos em capacitar nossos clientes para que alcancem seus objetivos. Nossa equipe trabalha em estreita colaboração com você.": "At Aura, we believe in empowering our clients to reach their goals. Our team works closely with you.",
    "Parceiros Em Quem Você Pode Confiar": "Partners You Can Trust",
    "A Aura está aqui para garantir o seu sucesso com orientação especializada e trabalho em equipe colaborativo.": "Aura is here to ensure your success with expert guidance and collaborative teamwork.",
    "Mais de 200 Agências Avaliadas": "200+ Agencies Reviewed",
    "Trabalhe de Forma Inteligente, Não Árdua.": "Work Smart, Not Hard.",
    "A Cada Minuto!": "Every Minute!",
    "Guiados Em Cada Passo": "Guided Every Step",
    "Garantimos uma jornada tranquila desde a concepção até a conclusão, fornecendo suporte especializado para dar vida à sua visão sem esforço.": "We ensure a smooth journey from concept to completion, providing expert support to bring your vision to life effortlessly.",
    "Apoio Além Da Entrega": "Support Beyond Delivery",
    "Nosso compromisso não termina com o lançamento — a Aura está aqui para oferecer suporte contínuo e conhecimento especializado sempre que você precisar.": "Our commitment doesn't end at launch — Aura is here to provide ongoing support and expertise whenever you need it.",
    "Mais de 900 pessoas avaliaram": "900+ people reviewed",
    "Membros Da Equipe": "Team Members",
    "Conheça a Equipe": "Meet the Team",
    "Que Faz Acontecer Todos os Dias.": "That Makes It Happen Every Day.",
    "Nossa equipe é formada por profissionais apaixonados que trazem sua experiência e criatividade para cada projeto.": "Our team is made up of passionate professionals who bring their experience and creativity to every project.",
    "Agende Uma Chamada De 15 Minutos.": "Book a 15-Minute Call.",
    "Ferramentas": "Tools",
    "Ferramentas e Tecnologias": "Tools and Technologies",
    "Aumentando Nossa Produtividade": "Boosting Our Productivity",
    "Nosso conjunto de ferramentas é composto pela tecnologia mais recente e confiável para garantir que seu projeto seja executado com perfeição.": "Our toolkit is made of the latest and most reliable technology to ensure your project runs flawlessly.",
    "Automação": "Automation",
    "Comunicação": "Communication",
    "Armazenamento em Nuvem": "Cloud Storage",
    "Pagamentos": "Payments",
    "Controle de Versão": "Version Control",
    "O Zapier conecta seus aplicativos favoritos e automatiza seus fluxos de trabalho.": "Zapier connects your favorite apps and automates your workflows.",
    "O Slack é a nossa plataforma preferida para comunicação e colaboração em tempo real.": "Slack is our preferred platform for real-time communication and collaboration.",
    "O Dropbox oferece armazenamento seguro na nuvem, permitindo-nos compartilhar arquivos e colaborar.": "Dropbox provides secure cloud storage, letting us share files and collaborate.",
    "O Stripe é nossa ferramenta de processamento de pagamentos, que oferece uma forma segura de realizar transações.": "Stripe is our payment processing tool, offering a secure way to handle transactions.",
    "O Mailchimp nos ajuda a criar campanhas de marketing por e-mail eficazes para fidelizar clientes.": "Mailchimp helps us create effective email marketing campaigns to build customer loyalty.",
    "O GitHub é o nosso sistema de controle de versões, que permite uma colaboração tranquila.": "GitHub is our version control system, enabling smooth collaboration.",

    // ---- Contato ----
    "Vamos Trabalhar Juntos.": "Let's Work Together.",
    "Alguma Dúvida?": "Any Questions?",
    "Estamos Todos Aqui.": "We're All Here.",
    "Se você tiver alguma dúvida, precisar de ajuda ou quiser iniciar um novo projeto, nossa equipe está aqui para ajudar — do primeiro contato ao lançamento.": "If you have any questions, need help or want to start a new project, our team is here to help — from first contact to launch.",
    "Preencha o Formulário!": "Fill Out the Form!",
    "Primeiro nome*": "First name*",
    "Sobrenome*": "Last name*",
    "Como podemos entrar em contato com você?*": "How can we reach you?*",
    "De onde você é?*": "Where are you from?*",
    "Selecione seu país…": "Select your country…",
    "Brasil": "Brazil",
    "Estados Unidos": "United States",
    "Outro": "Other",
    "Qual é o tipo da sua empresa?*": "What type of company do you have?*",
    "Selecione a categoria": "Select category",
    "Agência": "Agency",
    "Empresa": "Company",
    "Mensagem*": "Message*",
    "Envie agora": "Send now",
    "Telefone": "Phone",
    "Endereço": "Address",
    "REMOTO": "REMOTE",
    "Atendimento 100% remoto": "100% remote service",

    // ---- Portfólio ----
    "Explore Nosso Portfólio": "Explore Our Portfolio",
    "Confira Alguns": "Check Out Some",
    "Trabalhos Extraordinários.": "Extraordinary Work.",
    "Desde startups a marcas consolidadas, criamos soluções personalizadas que impulsionam o sucesso e geram um impacto real.": "From startups to established brands, we craft custom solutions that drive success and make a real impact.",
    "Crie Seu produto": "Build Your Product",
    "Application": "Application",

    // ---- Projeto (comum) ----
    "Estudo de Caso": "Case Study",
    "Web Design & Desenvolvimento": "Web Design & Development",
    "Serviços": "Services",
    "Categoria": "Category",
    "Cliente": "Client",
    "Ver Projeto Online": "View Live Project",
    "Plataforma Web": "Web Platform",
    "Plataforma SaaS": "SaaS Platform",
    "Aplicação Web": "Web Application",
    "Análise — Desempenho e Capacidade de Resposta": "Analysis — Performance and Responsiveness",
    "Cada projeto começa por uma análise profunda de desempenho e responsividade, garantindo uma base sólida, rápida e preparada para escalar conforme o negócio cresce.": "Every project starts with a deep analysis of performance and responsiveness, ensuring a solid, fast foundation ready to scale as the business grows.",
    "Velocidade de carregamento rápida: otimizamos imagens, scripts e recursos para garantir tempos de carregamento mínimos.": "Fast load speed: we optimize images, scripts and assets to ensure minimal load times.",
    "Código otimizado: práticas de codificação limpas e eficientes reduzem elementos desnecessários e melhoram a performance.": "Optimized code: clean, efficient coding practices reduce unnecessary elements and improve performance.",
    "Escalabilidade: a arquitetura focada em desempenho garante que a plataforma lide com aumento de tráfego sem perder estabilidade.": "Scalability: a performance-focused architecture ensures the platform handles increased traffic without losing stability.",
    "Responsividade": "Responsiveness",
    "A responsividade é fundamental para proporcionar uma experiência excepcional em todos os dispositivos. Garantimos que a interface se adapte perfeitamente a celulares, tablets e computadores, mantendo navegação consistente e intuitiva.": "Responsiveness is key to delivering an exceptional experience on every device. We ensure the interface adapts perfectly to phones, tablets and desktops, keeping navigation consistent and intuitive.",
    "Solução — Comunicação e Implantação": "Solution — Communication and Deployment",
    "Comunicação eficaz e implementação tranquila são essenciais no nosso processo. Mantemos você informado em cada etapa, garantindo que a sua visão se torne realidade exatamente como imaginou.": "Effective communication and smooth implementation are essential to our process. We keep you informed at every step, ensuring your vision becomes reality exactly as you imagined.",
    "Mantemos canais de comunicação abertos durante todo o processo, garantindo que seus objetivos e expectativas sejam atendidos. Quando chega a hora da implementação, cuidamos de todos os aspectos técnicos para assegurar um lançamento impecável.": "We keep communication channels open throughout the process, ensuring your goals and expectations are met. When it's time to implement, we handle all the technical aspects to ensure a flawless launch.",
    "Mais": "More",
    "Outros Projetos": "Other Projects",

    // ---- Max Performance ----
    "Inteligência Artificial": "Artificial Intelligence",
    "Plataforma de IA": "AI Platform",
    "A Max Performance é um sistema de inteligência artificial para clínicas. Três robôs treinados na metodologia entregam à equipe scripts de venda, respostas e estratégias prontas — para atrair, converter e não perder nenhum paciente.": "Max Performance is an artificial intelligence system for clinics. Three bots trained in the methodology deliver sales scripts, answers and ready-made strategies to the team — to attract, convert and never lose a single patient.",
    "Problema — Pacientes Que Escapam": "Problem — Patients Slipping Away",
    "Clínicas perdem pacientes todos os dias por respostas lentas, atendimento sem padrão e equipes sem argumentos prontos para contornar objeções. O desafio era dar à equipe comercial respostas em segundos, com scripts de venda e estratégias consistentes para cada situação.": "Clinics lose patients every day due to slow replies, inconsistent service and teams without ready arguments to handle objections. The challenge was to give the sales team answers in seconds, with sales scripts and consistent strategies for every situation.",
    "Solução — Três Robôs de IA": "Solution — Three AI Bots",
    "Desenvolvemos uma plataforma com três robôs de IA — Sofia, Rafael e Helena — treinados na metodologia Max Performance. Cada um cobre uma frente do funil: atrair, converter e reter pacientes, entregando à equipe respostas, scripts e estratégias prontas em segundos.": "We built a platform with three AI bots — Sofia, Rafael and Helena — trained in the Max Performance methodology. Each covers a stage of the funnel: attract, convert and retain patients, delivering answers, scripts and ready-made strategies to the team in seconds.",
    "Atendimento": "Service",
    "IA": "AI",
    "A equipe pergunta, a IA responde na hora — reconhecendo o valor antes do preço, contornando objeções e sugerindo o próximo passo. O resultado é um atendimento mais rápido, padronizado e que fecha mais pacientes todos os dias.": "The team asks, the AI answers instantly — acknowledging value before price, handling objections and suggesting the next step. The result is faster, standardized service that closes more patients every day.",

    // ---- AgendaClínica ----
    "Saúde": "Health",
    "A AgendaClínica é um SaaS de gestão para clínicas que organiza consultas, profissionais e prontuários em um só lugar. Conta com um assistente de IA para automatizar a triagem e reduzir faltas, deixando a equipe focada no que importa: cuidar dos pacientes.": "AgendaClínica is a clinic management SaaS that organizes appointments, professionals and medical records in one place. It features an AI assistant to automate triage and reduce no-shows, keeping the team focused on what matters: caring for patients.",
    "Problema — Agenda e Faltas Sob Controle": "Problem — Scheduling and No-Shows Under Control",
    "Clínicas perdem tempo e receita com agendas espalhadas em vários canais, retrabalho manual e alto índice de faltas. O desafio era centralizar consultas, profissionais e prontuários em um só lugar e usar automação para lembrar pacientes e reduzir ausências.": "Clinics lose time and revenue with schedules spread across multiple channels, manual rework and a high no-show rate. The challenge was to centralize appointments, professionals and records in one place and use automation to remind patients and reduce absences.",

    // ---- Raio-X Fiscal ----
    "Fiscal": "Tax",
    "O Raio-X Fiscal é uma plataforma web que transforma o CNPJ de uma empresa em um diagnóstico visual e claro de oportunidades fiscais, financeiras e operacionais. Criado para escritórios contábeis, consultorias tributárias e empresas que querem descobrir onde podem estar pagando mais do que deveriam.": "Raio-X Fiscal is a web platform that turns a company's CNPJ into a clear, visual diagnosis of tax, financial and operational opportunities. Built for accounting firms, tax consultancies and companies that want to find out where they might be paying more than they should.",
    "Problema — Clareza Sobre a Carga Tributária": "Problem — Clarity on the Tax Burden",
    "Empresas brasileiras frequentemente pagam mais impostos do que deveriam e não enxergam onde estão as oportunidades de recuperação. O desafio era transformar dados fiscais complexos em um diagnóstico visual, direto e acionável, acessível mesmo para quem não é especialista em tributação.": "Brazilian companies often pay more taxes than they should and can't see where the recovery opportunities are. The challenge was to turn complex tax data into a clear, direct and actionable visual diagnosis, accessible even to those who aren't tax experts.",

    // ---- Form: placeholders ----
    "João": "John",
    "Silva": "Smith",
    "joao@email.com": "john@email.com",
    "Digite sua mensagem...": "Type your message..."
  };

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  function translateText() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentNode;
        if (p && (p.nodeName === "SCRIPT" || p.nodeName === "STYLE")) return NodeFilter.FILTER_REJECT;
        return node.nodeValue && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var raw = node.nodeValue;
      var key = norm(raw);
      if (key && dict[key] != null) {
        var lead = (raw.match(/^\s*/) || [""])[0];
        var trail = (raw.match(/\s*$/) || [""])[0];
        node.nodeValue = lead + dict[key] + trail;
      }
    });
  }

  function translateAttrs() {
    document.querySelectorAll("[placeholder],[aria-label],[title]").forEach(function (el) {
      ["placeholder", "aria-label", "title"].forEach(function (a) {
        if (el.hasAttribute(a)) {
          var k = norm(el.getAttribute(a));
          if (k && dict[k] != null) el.setAttribute(a, dict[k]);
        }
      });
    });
    if (document.title) {
      var t = norm(document.title);
      if (dict[t] != null) document.title = dict[t];
    }
    var md = document.querySelector('meta[name="description"]');
    if (md) {
      var k = norm(md.getAttribute("content") || "");
      if (dict[k] != null) md.setAttribute("content", dict[k]);
    }
  }

  // Calcula a URL equivalente no outro idioma, preservando query e hash.
  function counterpartHref() {
    var p = location.pathname, q = location.search, h = location.hash;
    if (isPt) {
      var rest = p.replace(/^\/pt(\/|$)/, "/"); // /pt/ -> / ; /pt/sobre.html -> /sobre.html
      return rest + q + h;
    }
    var dest = p === "/" ? "/pt/" : "/pt" + p;
    return dest + q + h;
  }

  function setupSwitch() {
    var href = counterpartHref();
    var label = isPt ? "EN" : "PT";
    document.querySelectorAll("[data-lang-switch]").forEach(function (el) {
      var code = el.querySelector(".lang-code");
      if (code) code.textContent = label; else el.textContent = label;
      el.setAttribute("title", isPt ? "View in English" : "Ver em português");
      el.addEventListener("click", function (e) {
        e.preventDefault();
        location.href = href;
      });
    });
  }

  function apply() {
    if (lang === "en") {
      translateText();
      translateAttrs();
    }
    setupSwitch();
  }

  // IMPORTANTE: este script deve ficar no fim do <body>, ANTES do script.js,
  // para traduzir os textos antes que o script.js divida os títulos em palavras
  // (animação word-reveal). Se o body já existe, traduz imediatamente; caso
  // contrário, espera o DOM.
  if (document.body) {
    apply();
  } else {
    document.addEventListener("DOMContentLoaded", apply);
  }
})();
