<template>
  <div v-if="ai">
    <NewsDetailHero :news="news" />

    <NewsBack />
  </div>
</template>

<script setup>
const { newss } = useNewss();
const route = useRoute();

const news = computed(() => {
  return newss.find((news) => {
    return news.title === route.params.name;
    // return restaurant.id === parseInt(route.params.id);
  });
});

if (!news.value) {
  throw createError({
    statusCode: 404,
    message: `News  with name of ${route.params.name} does not exist`,
  });
}

useHead({
  title: `新聞雜誌:${route.params.name}`,
});

definePageMeta({
  layout: "custom",
});
</script>
