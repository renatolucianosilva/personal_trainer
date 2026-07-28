<script setup lang="ts">
useSeoMeta({
  title: 'Personal Trainer — Resultados Definitivos na Academia',
  description: 'Chega de treinos genéricos que não dão resultado. Alcance a hipertrofia e o emagrecimento com uma metodologia focada no seu corpo e na sua rotina.',
  ogTitle: 'Personal Trainer — Resultados Definitivos na Academia',
  ogDescription: 'Chega de treinos genéricos que não dão resultado. Alcance a hipertrofia e o emagrecimento com uma metodologia focada no seu corpo e na sua rotina.',
  ogImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop', // Sugestão: troque por uma foto do personal na academia
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <SectionsHero
      title="Transforme seu Corpo e sua Saúde com um Treino Feito para Você"
      sub-title="Alcance seus objetivos de forma definitiva com um acompanhamento 100% personalizado, que se adapta à sua rotina."
      cta-text="Quero Começar Meu Treino"
      backgroundImage="/imagens/head.jpg"
      backgroundImageMobile="/imagens/hero_mobille.png"
    />
    <SectionsProblema
        title="Por que é tão difícil manter a constância nos treinos?"
        :items="[
        'Falta de um planejamento que realmente caiba na sua rotina corrida',
        'Sensação de estar perdido na academia sem saber por onde começar',
        'Desmotivação por não ter um profissional acompanhando sua evolução'
    ]"
    />
    <SectionsProvaSocial
        title="Resultados reais de alunos reais"
        :depoimentos="[
        { nome: 'Ana Costa', cargo: 'Aluna de Consultoria', foto: 'https://i.pravatar.cc/150?img=1', texto: 'Perdi 8kg em 3 meses e recuperei minha autoestima. O acompanhamento pelo WhatsApp é sensacional!', nota: 5 },
        { nome: 'Marcos Lima', cargo: 'Aluno Presencial', foto: 'https://i.pravatar.cc/150?img=11', texto: 'Treino há anos, mas só agora vi meu corpo mudar de verdade. A correção de postura faz toda a diferença.', nota: 5 },
        { nome: 'Julia Prado', cargo: 'Aluna de Consultoria', foto: 'https://i.pravatar.cc/150?img=5', texto: 'Mesmo com a rotina corrida de viagens, consegui manter o foco com o treino no app. Muito prático.', nota: 5 }
    ]"
    />
    <SectionsAutoridade
        title="Conheça seu personal."
        descricao="Sou especialista em hipertrofia e emagrecimento, dedicado a transformar não apenas o seu corpo, mas a sua relação com o exercício físico."
        foto="/imagens/foto_perfil.jpg"
        :estatisticas="[
        { valor: '500+', label: 'Alunos transformados' },
        { valor: '8 anos', label: 'De experiência prática' },
        { valor: '100%', label: 'Foco no seu objetivo' }
    ]"
    />
    <SectionsFaq
        title="Perguntas Frequentes"
        :perguntas="[
        { pergunta: 'Como vou receber e acessar os meus treinos?', resposta: 'Você terá acesso a um aplicativo exclusivo onde poderá ver sua ficha, os vídeos de execução de cada exercício e registrar suas cargas.' },
        { pergunta: 'Sou iniciante e nunca pisei numa academia, serve pra mim?', resposta: 'Com certeza! O planejamento é feito do zero, respeitando o seu nível atual. Os vídeos ajudam muito na execução correta.' },
        { pergunta: 'E se eu tiver dúvidas na hora do treino?', resposta: 'Você terá meu suporte direto pelo WhatsApp. Pode mandar mensagem, áudio ou até vídeo executando o movimento para eu corrigir.' }
    ]"
    />
    <SectionsCta
        title="Pronto para transformar seu corpo e sua rotina?"
        sub-title="Dê o primeiro passo rumo ao seu objetivo. Fale comigo no WhatsApp e vamos definir o formato ideal para você."
        cta-text="Quero começar meu treino"
        cta-link="https://wa.me/5500000000000"
    />
  </div>
</template>
