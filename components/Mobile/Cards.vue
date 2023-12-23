<template>
  <div class="flex flex-row flex-wrap">
    <MobileCard v-for="mobile in mobiles" :key="mobile.no" :mobile="mobile" />
  </div>
</template>

<script setup>
const { mobiles } = useMobiles();
</script>
