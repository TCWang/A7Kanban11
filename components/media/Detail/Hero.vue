<template>
  <div class="container flex flex-col md:flex-row">
    <NuxtImg
      :src="`/images/media/${media.figure}`"
      class="w-[150px] h-[150px] md:w-[200px] md:h-[200px] px-1 md:px-4"
      alt=""
    />
    <div class="md:w-2/3">
      <h1 class="mt-1">{{ media.title }}</h1>

      <p>類別: {{ media.category }}</p>
      <p>
        網站:
        <a :href="media.link">
          {{ media.title }}
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  media: Object,
});
</script>
