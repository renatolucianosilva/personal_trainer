<script setup lang="ts">

interface Props {
  title: string
  subTitle: string
  ctaText: string
  ctaLink?: string
}

withDefaults(defineProps<Props>(),
    {
      ctaLink:'#hero'
    })

</script>

<template>
  <section id="contato" class="bg-blue-600 px-4 py-16 text-center text-white md:px-16">
    <UiSectionTitle :title="title" />
    <p class="mx-auto mt-4 max-w-xl text-blue-100 md:text-lg">
      {{ subTitle }}
    </p>
    <a
        :href="ctaLink"
        class="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-50"
    >
      {{ ctaText }}
    </a>
  </section>
</template>

<style scoped>

</style>