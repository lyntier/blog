<script setup lang="ts">
defineProps<{
  icon?: string
  text?: string
}>()
</script>

<template>
  <div class="w-fit flex flex-row items-center rounded bg-text p-2 px-3 text-base opacity-80">
    <UnoIcon v-if="icon" class="mr-2" :class="icon" />
    <span v-if="text">{{ text }}</span>
  </div>
</template>
