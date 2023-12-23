<template>
  <div v-if="mobile">
    <MobileDetailHero :mobile="mobile" />

    <MobileBack />
  </div>
</template>

<script setup>
const { mobiles } = useMobiles();
const route = useRoute();

const mobile = computed(() => {
  return mobiles.find((mobile) => {
    return mobile.title === route.params.name;
    // return restaurant.id === parseInt(route.params.id);
  });
});

if (!mobile.value) {
  throw createError({
    statusCode: 404,
    message: `Mobile  with name of ${route.params.name} does not exist`,
  });
}

useHead({
  title: `手機軟件:${route.params.name}`,
});

definePageMeta({
  layout: "custom",
});
</script>
