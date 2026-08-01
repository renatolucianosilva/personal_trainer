<script setup lang="ts">
const img = useImage()

interface Props {
  title: string
  subTitle: string
  ctaText: string
  ctaLink?: string
  backgroundImage: string
  backgroundImageMobile: string
}

withDefaults(defineProps<Props>(), {
  ctaLink: '#contato'
})
</script>

<template>
  <section id="hero"
  class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden
  px-4 py-16 text-center md:flex-row md:justify-between md:px-16
  md:text-left">
    <picture class="absolute inset-0 -z-10 h-full w-full">
      <source
          v-if="backgroundImageMobile"
          media="(max-width: 767px)"
          :srcset="img(backgroundImageMobile, { width: 800 })"
      >
      <img
          :src="img(backgroundImage, { width: 1600 })"
          alt=""
          class="h-full w-full object-cover"
          fetchpriority="high"
      >
    </picture>

    <div class="absolute inset-0 -z-10 bg-black/10" />
    <div class="max-w-xl">
      <h1 class="text-3xl font-bold leading-tight text-white md:text-5xl">
      {{ title }}
      </h1>
      <p class="mt-4 text-lg text-gray-200 md:text-xl">
        {{ subTitle }}
      </p>
      <a
          :href="ctaLink"
          class="mt-8 inline-block rounded-lg
          bg-blue-600 px-8 py-4 text-lg font-semibold text-white
          transition hover:bg-blue-700"
      >
        {{ ctaText }}
      </a>
    </div>

  </section>

</template>

<style scoped>

</style>