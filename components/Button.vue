<script setup lang="ts">
const props = defineProps<{
  icon?: string
  text?: string
}>()
</script>

<template>
  <div class="w-fit flex flex-row items-center rounded bg-text p-2 px-3 text-base opacity-80">
    <UnoIcon v-if="props.icon" class="mr-2" :class="props.icon" />
    <span v-if="props.text">{{ props.text }}</span>
  </div>
</template>
