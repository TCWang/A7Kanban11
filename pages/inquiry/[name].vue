<template>
  <div v-if="inquiry">
    <h1>{{ inquiry.title }}</h1>
    <InquiryDetailHero :inquiry="inquiry" />

    <InquiryBack />
  </div>
</template>

<script setup>
const { inquirys } = useInquirys();
const route = useRoute();

const inquiry = computed(() => {
  return inquirys.find((inquiry) => {
    return inquiry.title === route.params.name;
    // return restaurant.id === parseInt(route.params.id);
  });
});

if (!inquiry.value) {
  throw createError({
    statusCode: 404,
    message: `Inquiry  with name of ${route.params.name} does not exist`,
  });
}

useHead({
  title: `生活查詢:${route.params.name}`,
});

definePageMeta({
  layout: "custom",
});
</script>
