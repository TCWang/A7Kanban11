<template>
  <div class="flex flex-row flex-wrap">
    <MediaCard v-for="media in medias" :key="media.no" :media="media" />
  </div>
</template>

<script setup>
const { medias } = useMedias();
</script>
