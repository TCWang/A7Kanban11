<template>
  <div class="flex flex-row flex-wrap">
    <AiCard v-for="ai in ais" :key="ai.no" :ai="ai" />
  </div>
</template>

<script setup>
const { ais } = useAis();
</script>
