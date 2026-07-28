<script setup lang="ts">

interface Props {
  title: string
  subTitle: string
  ctaText: string
  ctaLink?: string
  backgroundImage: string
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
    <NuxtImg
        :src="backgroundImage"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover"
        preload
        fetchpriority="high"
    />
    <div class="absolute inset-0 -z-10 bg-black/50" />
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