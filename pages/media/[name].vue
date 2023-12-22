<template>
  <div v-if="ai">
    <MediaDetailHero :media="media" />

    <MediaBack />
  </div>
</template>

<script setup>
const { medias } = useMedias();
const route = useRoute();

const media = computed(() => {
  return medias.find((media) => {
    return media.title === route.params.name;
    // return restaurant.id === parseInt(route.params.id);
  });
});

if (!media.value) {
  throw createError({
    statusCode: 404,
    message: `Media  with name of ${route.params.name} does not exist`,
  });
}

useHead({
  title: `影音媒體:${route.params.name}`,
});

definePageMeta({
  layout: "custom",
});
</script>
