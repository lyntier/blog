<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <h1 class="p-4 text-5xl">
    ( ._.)
  </h1>
  <p>Could not find this post.</p>
  <NuxtLink :to="href">
    <AuvButton
      icon="i-heroicons:arrow-left"
      text="Get me back to safety"
    />
  </NuxtLink>
</template>

<style scoped>

</style>
