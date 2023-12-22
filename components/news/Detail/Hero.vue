<template>
  <div class="container flex flex-col md:flex-row">
    <NuxtImg
      :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/news/${news.figure}`"
      class="w-[150px] h-[150px] md:w-[200px] md:h-[200px] px-1 md:px-4"
      alt=""
    />
    <div class="md:w-2/3">
      <h1 class="mt-1">{{ news.title }}</h1>

      <p>類別: {{ news.category }}</p>
      <p>
        網站:
        <a :href="news.link">
          {{ news.title }}
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  news: Object,
});
</script>
