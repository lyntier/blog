<script setup lang="ts">
withDefaults(defineProps<{
  shadow?: boolean
}>(), {
  shadow: false,
})
</script>

<template>
  <NuxtLink to="/" class="max-w-fit decoration-none">
    <h1 class="from-purple-400 via-pink-500 to-orange-300 via-60% bg-gradient-to-r bg-clip-text text-transparent font-600 font-display" :class="{ 'light:text-shadow-sm': shadow }">
      Lyntier ❤
    </h1>
  </NuxtLink>
</template>
