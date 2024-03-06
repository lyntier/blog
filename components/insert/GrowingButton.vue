<script setup lang="ts">
withDefaults(defineProps<{
  icon: string
  text: string
  href: string
  external?: boolean
}>(), {
  external: false,
})
</script>

<template>
  <NuxtLink :to="href" :target="external ? '_blank' : undefined" rel="noreferrer" class="decoration-none">
    <div class="h-12 min-w-12 w-fit flex flex-row items-center justify-end overflow-hidden rounded-full p-2 py-2 shadow-md [&:hover>p]:max-w-20 hover:cursor-pointer dark:bg-dark light:bg-light [&:hover>p]:p-2 dark:text-light light:text-dark">
      <p class="max-w-0 overflow-hidden text-xl duration-200">
        {{ text }}
      </p>
      <UnoIcon :class="icon" class="h-6 w-6 p-4" />
    </div>
  </NuxtLink>
</template>
