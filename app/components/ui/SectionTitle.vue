<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()

</script>

<template>
  <h2 class="text-center text-2xl font-bold md:text-4xl">
    {{ title }}
  </h2>

</template>

<style scoped>

</style>