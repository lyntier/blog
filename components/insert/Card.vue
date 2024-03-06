<script setup lang="ts">
withDefaults(defineProps<{
  imagePos: 'none' | 'left' | 'right'
}>(), {
  imagePos: 'none',
})
</script>

<template>
  <div class="grid mb-10 ml-5 mt-5" :class="{ 'grid-cols-[250px_1fr]': imagePos === 'left', ' grid-cols-[1fr_250px]': imagePos === 'right' }">
    <div v-if="imagePos === 'left'">
      <slot name="image" />
    </div>
    <div class="prose">
      <slot name="text" />
    </div>
    <div v-if="imagePos === 'right'">
      <slot name="image" />
    </div>
  </div>
</template>

<style scoped>

</style>
