<script setup lang="ts">
interface FaqItem {
  pergunta: string
  resposta: string
}

interface Props {
  title: string
  perguntas: FaqItem[]
}

defineProps<Props>()

const abertoIndex = ref<number | null>(null)

function toggle(index: number) {
  abertoIndex.value = abertoIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="px-4 py-16 md:px-16">
    <UiSectionTitle :title="title" />

    <div class="mx-auto mt-10 max-w-2xl divide-y divide-gray-200">
      <div v-for="(item, index) in perguntas" :key="index" class="py-4">
        <button
            type="button"
            class="flex w-full items-center justify-between text-left font-semibold"
            @click="toggle(index)"
        >
          {{ item.pergunta }}
          <span>{{ abertoIndex === index ? '−' : '+' }}</span>
        </button>

        <p v-show="abertoIndex === index" class="mt-2 text-gray-600">
          {{ item.resposta }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>