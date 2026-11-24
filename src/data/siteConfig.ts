export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'briefcase' | 'layers' | 'compass' | 'wrench' | 'sparkles' | 'lineChart';
}

export interface DifferentialItem {
  title: string;
  description: string;
  iconName: 'users' | 'shieldCheck' | 'clock' | 'badgePercent';
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  fullText: string;
}

export const SITE_CONFIG = {
  brandLogoText: '[Logo]',
  companyName: '[Nome da Empresa]',
  city: '[Cidade]',
  year: '[Ano]',

  contact: {
    whatsappNumber: '5500000000000',
    phoneDisplay: '[Telefone]',
    email: '[E-mail]',
    address: '[Endereço]',
    hours: '[Horário de atendimento]',
    whatsappDefaultMessage:
      'Olá! Visitei o site de [Nome da Empresa] e gostaria de solicitar um orçamento.',
  },

  navLinks: [
    { label: 'Quem somos', href: '#quem-somos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    kicker: '[Nome da Empresa] · [Cidade]',
    title: 'Soluções claras e sob medida para [proposta de valor da empresa].',
    subtitle:
      'Atendimento próximo, processos organizados e entrega confiável para atender exatamente o que o seu negócio ou você precisa.',
    primaryCta: 'Solicitar orçamento',
    secondaryCta: 'Conhecer serviços',
    trustBadges: [
      '[Anos de experiência]',
      '[Clientes atendidos]',
      '[Avaliação média]',
    ],
  },

  partners: {
    title: 'Quem confia em [Nome da Empresa]',
    subtitle:
      'Espaço reservado para destacar clientes recorrentes, fornecedores ou marcas parceiras.',
    logos: [
      'Logo parceiro',
      'Logo parceiro',
      'Logo parceiro',
      'Logo parceiro',
      'Logo parceiro',
      'Logo parceiro',
    ],
  },

  about: {
    kicker: 'Quem somos',
    title: 'Compromisso com qualidade e atendimento próximo em cada entrega.',
    paragraphs: [
      'Em [Nome da Empresa], acreditamos que um bom serviço começa ouvindo com atenção o que cada cliente precisa resolver em [Cidade] e região.',
      'Combinamos organização, transparência nos prazos e acompanhamento direto para entregar resultados consistentes do primeiro contato até a conclusão.',
    ],
    stats: [
      { value: '00+', label: '[Anos de atuação]', detail: 'Experiência prática consolidada' },
      { value: '00+', label: '[Projetos entregues]', detail: 'Soluções concluídas com sucesso' },
      { value: '00+', label: '[Clientes atendidos]', detail: 'Relacionamento de longo prazo' },
    ],
  },

  services: {
    kicker: 'O que oferecemos',
    title: 'Serviços e soluções de [Nome da Empresa]',
    subtitle:
      'Apresente seus principais serviços ou produtos de forma objetiva para facilitar a escolha do visitante.',
    items: [
      {
        id: 'servico-1',
        title: '[Serviço 1]',
        description:
          'Descrição resumida de duas linhas explicando o que está incluído e qual benefício entrega.',
        iconName: 'briefcase',
      },
      {
        id: 'servico-2',
        title: '[Serviço 2]',
        description:
          'Descrição resumida de duas linhas destacando como essa opção resolve a necessidade do cliente.',
        iconName: 'layers',
      },
      {
        id: 'servico-3',
        title: '[Serviço 3]',
        description:
          'Descrição resumida de duas linhas com foco em praticidade, prazo e acompanhamento direto.',
        iconName: 'compass',
      },
      {
        id: 'servico-4',
        title: '[Serviço 4]',
        description:
          'Descrição resumida de duas linhas apresentando o diferencial técnico ou operacional.',
        iconName: 'wrench',
      },
      {
        id: 'servico-5',
        title: '[Serviço 5]',
        description:
          'Descrição resumida de duas linhas ideal para planos recorrentes ou pacotes personalizados.',
        iconName: 'sparkles',
      },
      {
        id: 'servico-6',
        title: '[Serviço 6]',
        description:
          'Descrição resumida de duas linhas voltada a demandas específicas sob orçamento.',
        iconName: 'lineChart',
      },
    ] as ServiceItem[],
  },

  differentials: {
    kicker: 'Por que escolher [Nome da Empresa]',
    title: 'Nossos diferenciais no dia a dia',
    subtitle:
      'Pilares simples que garantem tranquilidade e previsibilidade em todo o atendimento.',
    items: [
      {
        title: 'Atendimento próximo',
        description:
          'Comunicação direta e humana, com acompanhamento claro desde a primeira conversa.',
        iconName: 'users',
      },
      {
        title: 'Qualidade garantida',
        description:
          'Cuidado em cada detalhe para entregar exatamente o que foi combinado.',
        iconName: 'shieldCheck',
      },
      {
        title: 'Prazo cumprido',
        description:
          'Planejamento realista e respeito total aos cronogramas alinhados com você.',
        iconName: 'clock',
      },
      {
        title: 'Preço justo',
        description:
          'Orçamentos transparentes, sem surpresas ou custos ocultos no decorrer do serviço.',
        iconName: 'badgePercent',
      },
    ] as DifferentialItem[],
  },

  howItWorks: {
    kicker: 'Passo a passo',
    title: 'Como funciona o atendimento',
    subtitle: 'Um fluxo simples em três etapas para você sair do contato direto para a solução.',
    steps: [
      {
        number: '1',
        title: 'Fale com a gente',
        description:
          'Entre em contato pelo WhatsApp ou formulário e conte brevemente o que você precisa.',
      },
      {
        number: '2',
        title: 'Receba sua proposta',
        description:
          'Analisamos sua demanda e enviamos um orçamento claro com prazos e condições.',
      },
      {
        number: '3',
        title: 'Aprove e comece',
        description:
          'Com tudo aprovado, iniciamos o atendimento com acompanhamento até a entrega final.',
      },
    ] as StepItem[],
  },

  testimonials: {
    kicker: 'Depoimentos',
    title: 'O que dizem sobre [Nome da Empresa]',
    subtitle: 'Relatos reais de quem já contratou nossos serviços e aprovou a experiência.',
    items: [
      {
        quote:
          '“Atendimento rápido e muito atencioso. Tudo foi explicado com clareza e entregue exatamente dentro do prazo combinado.”',
        author: '[Nome do cliente]',
        role: '[Cargo ou empresa]',
      },
      {
        quote:
          '“A organização da equipe fez toda a diferença no nosso projeto. Voltaremos a contratar com certeza.”',
        author: '[Nome do cliente]',
        role: '[Cargo ou empresa]',
      },
      {
        quote:
          '“Excelente custo-benefício e comunicação transparente do início ao fim. Recomendo o trabalho de [Nome da Empresa].”',
        author: '[Nome do cliente]',
        role: '[Cargo ou empresa]',
      },
    ] as TestimonialItem[],
  },

  faq: {
    kicker: 'Perguntas frequentes',
    title: 'Dúvidas comuns antes de começar',
    subtitle: 'Respostas diretas para ajudar você a tomar sua decisão com segurança.',
    items: [
      {
        question: 'Como funciona a solicitação de orçamento?',
        answer:
          'Basta enviar uma mensagem pelo WhatsApp ou preencher o formulário de contato informando o serviço desejado. Retornamos rapidamente com os próximos passos.',
      },
      {
        question: 'Qual é o prazo médio de entrega ou execução?',
        answer:
          'O prazo varia conforme a complexidade da demanda e é sempre informado por escrito antes de você aprovar a proposta.',
      },
      {
        question: 'Vocês atendem apenas em [Cidade]?',
        answer:
          'Atendemos presencialmente em [Cidade] e região, além de oferecer suporte remoto conforme o tipo de serviço solicitado.',
      },
      {
        question: 'Quais são as formas de pagamento aceitas?',
        answer:
          'Trabalhamos com condições flexíveis combinadas na proposta comercial, incluindo opções à vista e parcelamento conforme o serviço.',
      },
      {
        question: 'Existe garantia ou suporte após a entrega?',
        answer:
          'Sim. Todo atendimento conta com acompanhamento pós-entrega para garantir que você tenha total tranquilidade com o resultado.',
      },
    ] as FaqItem[],
  },

  news: {
    kicker: 'Conteúdos e novidades',
    title: 'Novidades ou dicas de [Nome da Empresa]',
    subtitle: 'Artigos curtos, guias práticos e atualizações relevantes para seus clientes.',
    items: [
      {
        id: 'artigo-1',
        title: '[Título do conteúdo]',
        date: '12 de Outubro, [Ano]',
        excerpt:
          'Resumo breve com duas linhas convidando o visitante a ler uma dica prática ou novidade do negócio.',
        fullText:
          'Este é um espaço demonstrativo para publicar orientações úteis, novidades de [Nome da Empresa] ou guias rápidos que ajudem seus clientes a aproveitar melhor cada serviço em [Cidade].',
      },
      {
        id: 'artigo-2',
        title: '[Título do conteúdo]',
        date: '28 de Setembro, [Ano]',
        excerpt:
          'Resumo breve apresentando boas práticas e pontos de atenção antes de contratar um serviço.',
        fullText:
          'Compartilhe recomendações simples e objetivas sobre prazos, preparação de materiais ou critérios para escolher a melhor solução para o dia a dia.',
      },
      {
        id: 'artigo-3',
        title: '[Título do conteúdo]',
        date: '15 de Setembro, [Ano]',
        excerpt:
          'Resumo breve destacando melhorias recentes, lançamentos ou novidades no atendimento.',
        fullText:
          'Use este bloco para divulgar atualizações importantes, novos horários de atendimento ou diferenciais implementados pela equipe de [Nome da Empresa].',
      },
    ] as ArticleItem[],
  },

  ctaBanner: {
    title: 'Pronto para começar?',
    subtitle:
      'Converse com a equipe de [Nome da Empresa] e receba uma proposta sob medida sem compromisso.',
    whatsappLabel: 'Falar no WhatsApp',
    quoteLabel: 'Pedir orçamento',
  },

  footer: {
    shortDescription:
      'Modelo institucional pronto para apresentar serviços, fortalecer a confiança e gerar novos contatos.',
    columns: [
      {
        title: 'Empresa',
        links: [
          { label: 'Quem somos', href: '#quem-somos' },
          { label: 'Diferenciais', href: '#diferenciais' },
          { label: 'Como funciona', href: '#como-funciona' },
          { label: 'Novidades', href: '#novidades' },
        ],
      },
      {
        title: 'Serviços',
        links: [
          { label: '[Serviço 1]', href: '#servicos' },
          { label: '[Serviço 2]', href: '#servicos' },
          { label: '[Serviço 3]', href: '#servicos' },
          { label: '[Serviço 4]', href: '#servicos' },
        ],
      },
      {
        title: 'Suporte',
        links: [
          { label: 'Falar no WhatsApp', href: '#contato' },
          { label: 'Perguntas frequentes', href: '#duvidas' },
          { label: 'Solicitar orçamento', href: '#contato' },
          { label: '[Horário de atendimento]', href: '#contato' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Política de Privacidade', href: '#contato' },
          { label: 'Termos de Uso', href: '#contato' },
          { label: 'Preferências de Contato', href: '#contato' },
        ],
      },
    ],
    socialLinks: [
      { name: 'Instagram', href: '#contato' },
      { name: 'LinkedIn', href: '#contato' },
      { name: 'Facebook', href: '#contato' },
      { name: 'YouTube', href: '#contato' },
    ],
  },
} as const;

export function buildWhatsAppHref(customMessage?: string): string {
  const digits = SITE_CONFIG.contact.whatsappNumber.replace(/\D/g, '');
  const text = encodeURIComponent(
    customMessage || SITE_CONFIG.contact.whatsappDefaultMessage
  );
  return digits ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`;
}
