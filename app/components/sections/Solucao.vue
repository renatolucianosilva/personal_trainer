<script setup lang="ts">

interface Pilar {
  icone: string
  titulo: string
  descricao: string
}

interface Props {
  title: string
  pilares: Pilar[]
}

defineProps<Props>()

</script>

<template>
  <section id="solucao" class="bg-gray-50 px-4 py-16 md:px-16">
    <UiSectionTitle :title="title" />

    <div class="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
      <div
          v-for="(pilar, index) in pilares"
          :key="index"
          class="rounded-lg bg-white p-6 text-center shadow-sm"
      >
        <span class="text-4xl">{{ pilar.icone }}</span>
        <h3 class="mt-4 text-lg font-semibold">{{ pilar.titulo }}</h3>
        <p class="mt-2 text-gray-600">{{ pilar.descricao }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>