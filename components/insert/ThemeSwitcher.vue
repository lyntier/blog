<script setup lang="ts">
const colorMode = useColorMode()
function switchTheme() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div class="h-12 min-h-12 min-w-12 w-12 rounded-full bg-gradient-to-r p-2 dark:from-purple-400 light:from-purple-600 dark:to-orange-300 light:to-orange-400 dark:text-dark light:text-light" @click="switchTheme">
    <UnoIcon v-if="colorMode.preference === 'light'" class="i-heroicons:sun min-h-full min-w-full" />
    <UnoIcon v-else class="i-heroicons:moon min-h-full min-w-full" />
  </div>
</template>

<style scoped>

</style>
