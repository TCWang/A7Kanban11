<template>
  <div v-if="ai">
    <AiDetailHero :ai="ai" />

    <AiBack />
  </div>
</template>

<script setup>
const { ais } = useAis();
const route = useRoute();

const ai = computed(() => {
  return ais.find((ai) => {
    return ai.title === route.params.name;
    // return restaurant.id === parseInt(route.params.id);
  });
});

if (!ai.value) {
  throw createError({
    statusCode: 404,
    message: `Group Buying  with name of ${route.params.name} does not exist`,
  });
}

useHead({
  title: `人工智慧:${route.params.name}`,
});

definePageMeta({
  layout: "custom",
});
</script>
