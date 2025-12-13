
import { Member, Benefit, SocialProof, LibraryCategory } from './types';

export const MEMBERS: Member[] = [
  { date: '04/12', name: 'Ricardo', age: '22', state: 'SP', skills: 'Automação N8N' },
  { date: '04/12', name: 'Felipe', age: '25', state: 'RJ', skills: 'Design Gráfico, Web' },
  { date: '04/12', name: 'Eduardo', age: '24', state: 'RS', skills: 'Kawai, After Pay' },
  { date: '04/12', name: 'Thiago', age: '27', state: 'MG', skills: 'Dev Web, Vibe Coder' },
  { date: '04/12', name: 'Bruno', age: '46', state: 'CE', skills: 'Iniciante' },
  { date: '03/12', name: 'Lucas', age: '26', state: 'SP', skills: 'Tráfego Pago' },
  { date: '03/12', name: 'Rafael', age: '?', state: 'PR', skills: 'Não informado' },
  { date: '03/12', name: 'Gustavo', age: '?', state: 'SC', skills: 'Google Ads, Copy' },
  { date: '03/12', name: 'André', age: '19', state: 'PB', skills: 'Ex-dono de agência' },
  { date: '02/12', name: 'Marcelo', age: '?', state: 'SP', skills: 'Não informado' },
  { date: '02/12', name: 'Vitor', age: '31', state: 'BA', skills: 'Avançado (6 dígitos)' },
  { date: '02/12', name: 'Leonardo', age: '20', state: 'RJ', skills: 'Iniciante' },
];

export const BENEFITS: Benefit[] = [
  { id: 1, text: "Acesso à Comunidade" },
  { id: 2, text: "Servidor exclusivo no Discord" },
  { id: 3, text: "Salas 1, 2 e 3 para estudo e networking" },
  { id: 4, text: "Link do grupo no WhatsApp" },
  { id: 5, text: "Acesso prioritário aos eventos e workshops" },
  { id: 6, text: "Contato direto com mentores e irmãos experientes" },
  { id: 7, text: "Acesso a Materiais Bônus e Cursos", highlight: true },
];

export const LIBRARY_CATEGORIES: LibraryCategory[] = [
  {
    title: "MINDSET & SUCESSO",
    icon: "brain",
    description: "Reprograme sua mente para a riqueza",
    items: [
      "5 Etapas Para Desenvolver a Mentalidade de Abundância",
      "O Guia do Concurso Público",
      "Acorde Agora - O Despertar",
      "Estratégias de Liderança",
      "Fé e Casamento Blindado",
      "Acredite na Sua Visão",
      "Pensamento Positivo Como Chave do Sucesso",
      "Redefinição da Mente",
      "Tempo de Sucesso",
      "PLR A Mente de um Empreendedor de Sucesso",
      "10 Motivações Hacks de Pessoas de Sucesso",
      "Confiança e Pensamento Positivo",
      "Mindset dos Milionários"
    ]
  },
  {
    title: "MARKETING & VENDAS",
    icon: "chart",
    description: "Estratégias validadas para vender mais",
    items: [
      "Como monetizar sua lista de e-mails",
      "Guia para o Sucesso Online Freelancing",
      "5 Maneiras de Aumentar comissões de Afiliados",
      "21 Ideias de Produtos para Obter Mais Resultados",
      "Guia de 7 Minutos para Marketing de Afiliados",
      "Noções Básicas de Copywriting",
      "Copy e Roteiros Que Convertem",
      "PLR Facebook para Afiliados",
      "PLR Google Ads Expert",
      "PLR WhatsApp Lucrativo",
      "PLR Copy Zap",
      "PLR Tráfego Power",
      "PLR Sucesso em Lançamentos de Produtos"
    ]
  },
  {
    title: "CURSOS EM VÍDEO (PLR)",
    icon: "video",
    description: "Cursos completos prontos para assistir ou revender",
    items: [
      "PLR Curso Criação de Criativos",
      "PLR Curso Estruturando um Ebook",
      "PLR Curso Dropshipping Completo",
      "PLR Facebook Ads Master",
      "PLR Curso de Hospedagem de Sites",
      "PLR Criação de Logotipo Profissional",
      "PLR Cartão Digital Interativo",
      "PLR Capas 3D para Produtos",
      "PLR Mestre do Excel",
      "PLR Inglês para Crianças",
      "PLR Curso Social Media"
    ]
  },
  {
    title: "FERRAMENTAS & DESIGN",
    icon: "code",
    description: "Templates, páginas e softwares",
    items: [
      "Elementor Pro (Plugin)",
      "1500 Templates Editáveis - Editor Free",
      "10 Modelos de Páginas de Vendas Adaptáveis",
      "Páginas de Vendas - Nichos Variados",
      "47 Páginas Pro Bônus",
      "Auto Responders Configuradas",
      "Templates Canva Premium",
      "Temas Buddypress",
      "Template Wordpress Pro",
      "VSL Profissionais Prontas",
      "Código de Notificação de Compra",
      "Pack de Vídeos Lifestyle"
    ]
  },
  {
    title: "SAÚDE & LIFESTYLE",
    icon: "heart",
    description: "Nichos lucrativos de saúde e bem-estar",
    items: [
      "Alimentação Baseada em Plantas",
      "Sopa para Emagrecer",
      "Nutrição Essencial",
      "PLR Formas Naturais de Superar a Menopausa",
      "PLR Detox Perfeito",
      "PLR Dicas de Saúde Comprovadas",
      "PLR Dieta das Celebridades",
      "PLR Dor nas Costas Zero",
      "PLR Zero Colesterol",
      "PLR Varizes Zero",
      "PLR Cabelo Rapunzel",
      "PLR Zero Rugas",
      "PLR O Rei da Cama"
    ]
  }
];

export const SOCIAL_PROOF_IMAGES: SocialProof[] = [
  { id: 1, type: 'chat', imageUrl: 'https://i.postimg.cc/Pf1d9bh6/IMG_2914.jpg', caption: 'Networking de alto nível' },
  { id: 2, type: 'earning', imageUrl: 'https://i.postimg.cc/66CBgVwz/IMG_2915.jpg', caption: 'Resultados reais do grupo' },
  { id: 3, type: 'chat', imageUrl: 'https://i.postimg.cc/ZKKpq5fR/IMG_2919.jpg', caption: 'Suporte dos irmãos' },
  { id: 4, type: 'earning', imageUrl: 'https://i.postimg.cc/kXXK5gTL/IMG_2920.jpg', caption: 'Faturamento constante' },
  { id: 6, type: 'earning', imageUrl: 'https://i.postimg.cc/hPPTGt2k/IMG_2921.jpg', caption: 'Primeiras vendas' },
  { id: 7, type: 'ad', imageUrl: 'https://i.postimg.cc/TYYgP3kM/IMG_2922.jpg', caption: 'Estratégias validadas' },
  { id: 8, type: 'chat', imageUrl: 'https://i.postimg.cc/655nQpH6/IMG_2923.jpg', caption: 'Comunidade ativa' },
  { id: 9, type: 'earning', imageUrl: 'https://i.postimg.cc/9F8TwHSH/IMG_2926.jpg', caption: 'Escalando resultados' },
  { id: 10, type: 'chat', imageUrl: 'https://i.postimg.cc/28cvLNJz/IMG_2927.jpg', caption: 'Network premium' },
  { id: 11, type: 'earning', imageUrl: 'https://i.postimg.cc/NfJT2vVF/IMG_2928.jpg', caption: 'Lucro no bolso' },
  { id: 12, type: 'chat', imageUrl: 'https://i.postimg.cc/hPyxQRw4/IMG_2931.jpg', caption: 'Ajuda mútua' },
];

export const TARGET_AUDIENCE = [
  "Se sente sozinho e gostaria de trocar ideia sobre ofertas e negócios no digital.",
  "É INTELIGENTE mas não consegue tirar nada no Papel, pq é perfeccionista dms",
  "É iniciante e quer entrar no grupo pra ir aprendendo com a galera.",
  "Precisa de sócio (por falta de verba ou porque não dá pra fazer tudo sozinho).",
];
