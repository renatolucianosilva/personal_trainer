<script setup lang="ts">
useSeoMeta({
  title: 'Nome do Negócio — Proposta de valor em poucas palavras',
  description: 'Descrição curta e persuasiva da oferta, até uns 155 caracteres pra não cortar no Google.',
  ogTitle: 'Nome do Negócio — Proposta de valor em poucas palavras',
  ogDescription: 'Mesma descrição persuasiva, usada quando o link é compartilhado no WhatsApp/Facebook.',
  ogImage: 'https://media.istockphoto.com/id/1501103626/pt/foto/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=sfd7Rf6Vjsx3Mx0PnaAA-iBPRBicW8raXj5xlVPzrUA=',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <div>
    <SectionsHero
      title="Título de impacto da sua LP"
      sub-title="Uma frase curta explicando a proposta de valor"
      cta-text="Quero minha LP"
      background-image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
    />
    <SectionsProblema
        title="Por que sua landing page atual nao converte?"
        :items="[
            'Site Lento perde clique de anúncio pago',
            'Sem prova social, visitane não confia',
            'CTA confuso não direciona pra ação nenhuma'
        ]"
    />
    <SectionsSolucao
        title="Como Resolvemos isso para você?"
        :pilares="[
            { icone: '⚡', titulo: 'Performance', descricao: 'Carregamento em segundos' },
            { icone: '🎯', titulo: 'Conversão', descricao: 'Estrutura pensada pra transformar clique em cliente' },
            { icone: '📱', titulo: 'Mobile First', descricao: 'Otimizada pra quem chega via anúncio no celular' },
  ]"
    />

    <SectionsProvaSocial
        title="Quem já confiou, aprova"
        :depoimentos="[
    { nome: 'Ana Costa', cargo: 'Dona, Salão Bella', foto: 'https://i.pravatar.cc/150?img=1', texto: 'Triplicamos os agendamentos em 2 semanas.', nota: 5 },
    { nome: 'Marcos Lima', cargo: 'Gestor de Tráfego', foto: 'https://i.pravatar.cc/150?img=2', texto: 'A LP converteu muito mais que a anterior.', nota: 5 },
    { nome: 'Julia Prado', cargo: 'Dona, Studio Fit', foto: 'https://i.pravatar.cc/150?img=3', texto: 'Carregamento rápido fez diferença nos anúncios.', nota: 4 },
  ]"
    />
    <SectionsAutoridade
        title="Por que confiar na gente?"
        descricao="Já ajudamos dezenas de negócios locais a transformar tráfego pago em clientes reais."
        :estatisticas="[
    { valor: '150+', label: 'Clientes atendidos' },
    { valor: '5 anos', label: 'De mercado' },
    { valor: '4.9/5', label: 'Avaliação média' },
  ]"
    />
    <SectionsFaq
        title="Perguntas Frequentes"
        :perguntas="[
    { pergunta: 'Quanto tempo leva pra ficar pronta?', resposta: 'Em média 3 a 5 dias úteis, dependendo do escopo.' },
    { pergunta: 'Preciso ter hospedagem própria?', resposta: 'Não, o deploy é feito na Vercel, com plano gratuito.' },
    { pergunta: 'A LP funciona bem no celular?', resposta: 'Sim, é construída mobile-first desde a base.' },
  ]"
    />
    <SectionsCta
        title="Pronto pra sua LP começar a converter?"
        sub-title="Fale agora e receba uma proposta personalizada pro seu negócio."
        cta-text="Falar no WhatsApp"
        cta-link="https://wa.me/5500000000000"
    />
  </div>
</template>
