<template>
  <div class="mt-2 flex flex-col md:flex-row">
    <NuxtImg
      :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/inquiry/${inquiry.figure}`"
      class="w-[150px] h-[150px] md:w-[200px] md:h-[200px] px-1 md:px-4"
      alt=""
    />
    <div class="md:w-2/3">
      <h1 class="mt-1">{{ inquiry.title }}</h1>
      <div class="text-slate-500 text-lg mt-3 border-b pb-5 justify-between">
        <div class="flex-col">
          <p class="">類別: {{ inquiry.category }}</p>
          <p class="">
            網站:
            <a :href="inquiry.link">
              {{ inquiry.title }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  inquiry: Object,
});
</script>
