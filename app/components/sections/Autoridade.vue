<script setup lang="ts">
interface Estatistica {
  valor: string
  label: string
}

interface Props {
  title: string
  descricao: string
  foto: string
  estatisticas: Estatistica[]
}

defineProps<Props>()
</script>

<template>
  <section id="autoridade" class="bg-gray-900 px-4 py-16 text-white md:px-16">
    <UiSectionTitle :title="title" />

    <div class="mx-auto mt-10 grid max-w-4xl items-center gap-10 md:grid-cols-2">
      <NuxtImg
          :src="foto"
          :alt="title"
          width="500"
          height="667"
          class="mx-auto aspect-[3/4] w-full max-w-sm rounded-2xl object-cover shadow-lg"
      />
      <div>
        <p class="text-gray-300">{{ descricao }}</p>

        <div class="mt-8 grid gap-6 text-center sm:grid-cols-3">
          <div v-for="(estatistica, index) in estatisticas" :key="index">
            <p class="text-3xl font-bold md:text-4xl">{{ estatistica.valor }}</p>
            <p class="mt-1 text-sm text-gray-400">{{ estatistica.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>