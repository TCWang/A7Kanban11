<template>
  <div class="container">
    <NuxtErrorBoundary>
      <!-- News -->

      <h1>新聞雜誌</h1>
      <NewsCards />

      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-5xl text-red-600 mb-4">Sorry Something went wrong</h1>
          <code>{{ error }}</code>
          <button
            class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
            @click="error.value = null"
          >
            Go Back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: `資訊匯總-新聞雜誌`,
});

definePageMeta({
  layout: "default",
});
</script>
