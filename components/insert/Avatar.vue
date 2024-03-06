<script setup lang="ts">
withDefaults(defineProps<{
  paperclip?: boolean
}>(), {
  paperclip: true,
})
</script>

<template>
  <div class="max-h-[236px] max-w-[236px] min-h-[236px] min-w-[236px]">
    <NuxtImg
      v-if="paperclip"
      src="/img/paperclip.png"
      class="absolute z-1 translate-x-24 translate-y-[-12px]"
      densities="x1"
      alt="Paperclip to give the illusion the image is attached to the panel behind it"
    />
    <NuxtImg
      src="https://cdn.discordapp.com/avatars/1068707575396319323/965b949247b8c31d802de368b5c10c17?size=2048"
      class="rotate-5deg rounded-2 shadow-gray-800 shadow-md outline-2 outline-solid dark:outline-light light:outline-dark"
      densities="x1"
      alt="Me :3"
    />
  </div>
</template>
