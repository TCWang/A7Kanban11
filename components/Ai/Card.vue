<template>
  <div
    class="flex-row flex-wrap shadow border-hidden mb-1 cursor-pointer w-[400px] md:w-[500px] h-[190px] md:h-[220px]"
    @click="navigateTo(`/ai/${ai.title}`)"
  >
    <div class="flex flex-row h-full bg-zinc-100 rounded-2xl shadow-md">
      <NuxtImg
        :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/ai/${ai.figure}`"
        alt=""
        class="w-[120px] md:w-[200px] h-[120px] md:h-[200px] rounded-xl transform hover:scale-110 duration-200"
      />

      <div class="p-4 flex flex-col">
        <div>
          <h3 class="">
            {{ ai.category }} -
            <a class="text-lg font-bold" :href="ai.link"> {{ ai.title }} </a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  ai: Object,
});
</script>
