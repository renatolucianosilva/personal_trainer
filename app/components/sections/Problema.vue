<script setup lang="ts">
interface Props {
  title: string
  items: string[]
}

defineProps<Props>()
</script>

<template>
  <section id="problema" class=" bg-gray-200 px-4 py-16 md:px-16">
    <UiSectionTitle :title="title" />

    <ul class="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
      <li
          v-for="(item, index) in items"
          :key="index"
          class="flex items-start gap-3 rounded-lg bg-red-50 p-4">
        <span class="font-bold text-red-500">✕</span>
        <span class="text-gray-700">{{ item }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
