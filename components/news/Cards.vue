<template>
  <div class="flex flex-row flex-wrap">
    <NewsCard v-for="news in newss" :key="news.no" :news="news" />
  </div>
</template>

<script setup>
const { newss } = useNewss();
</script>
