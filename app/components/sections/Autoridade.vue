<script setup lang="ts">
interface Estatistica {
  valor: string
  label: string
}

interface Props {
  title: string
  descricao: string
  estatisticas: Estatistica[]
}

defineProps<Props>()
</script>

<template>
  <section id="autoridade" class="bg-gray-900 px-4 py-16 text-white md:px-16">
    <UiSectionTitle :title="title" />

    <p class="mx-auto mt-4 max-w-2xl text-center text-gray-300">
      {{ descricao }}
    </p>

    <div class="mx-auto mt-10 grid max-w-3xl gap-6 text-center md:grid-cols-3">
      <div v-for="(estatistica, index) in estatisticas" :key="index">
        <p class="text-3xl font-bold md:text-4xl">{{ estatistica.valor }}</p>
        <p class="mt-1 text-sm text-gray-400">{{ estatistica.label }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>