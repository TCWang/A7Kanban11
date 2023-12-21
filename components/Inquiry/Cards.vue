<template>
  <div class="flex flex-row flex-wrap">
    <InquiryCard
      v-for="inquiry in inquirys"
      :key="inquiry.no"
      :inquiry="inquiry"
    />
  </div>
</template>

<script setup>
const { inquirys } = useInquirys();
</script>
