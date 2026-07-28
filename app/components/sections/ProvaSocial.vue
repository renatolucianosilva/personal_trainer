<script setup lang="ts">
interface Depoimento {
  nome: string
  cargo: string
  foto: string
  texto: string
  nota: number
}

interface Props {
  title: string
  depoimentos: Depoimento[]
}

defineProps<Props>()
</script>

<template>
  <section id="prova-social" class="px-4 py-16 md:px-16">
    <UiSectionTitle :title="title" />

    <div class="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
      <div
          v-for="(depoimento, index) in depoimentos"
          :key="index"
          class="rounded-lg border p-6"
      >
        <div class="flex items-center gap-3">
          <NuxtImg
              :src="depoimento.foto"
              :alt="depoimento.nome"
              width="48"
              height="48"
              class="rounded-full object-cover"
          />
          <div>
            <p class="font-semibold">{{ depoimento.nome }}</p>
            <p class="text-sm text-gray-500">{{ depoimento.cargo }}</p>
          </div>
        </div>

        <div class="mt-3 flex gap-0.5 text-yellow-400">
          <span v-for="star in 5" :key="star">
            {{ star <= depoimento.nota ? '★' : '☆' }}
          </span>
        </div>

        <p class="mt-3 text-gray-700">"{{ depoimento.texto }}"</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>