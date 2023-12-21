<template>
  <div
    class="flex-row flex-wrap shadow border-hidden mb-1 cursor-pointer w-[160px] md:w-[200px] h-[180px] md:h-[200px]"
    @click="navigateTo(`/inquiry/${inquiry.title}`)"
  >
    <div class="flex flex-col h-full bg-zinc-100 rounded-2xl shadow-md">
      <NuxtImg
        :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/inquiry/${inquiry.figure}`"
        alt=""
        class="w-[80px] md:w-[120px] h-[100px] md:h-[120px] rounded-xl transform hover:scale-110 duration-200"
      />

      <div class="p-4 flex flex-col">
        <div>
          <p class="mt-auto">類別: {{ inquiry.category }}</p>
          <h3 class="">
            <a :href="inquiry.link"> {{ inquiry.title }} </a>
          </h3>
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
