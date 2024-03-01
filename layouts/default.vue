<script setup lang="ts">
const route = useRoute()
const isBlogPage = computed(() => {
  return route.name?.toString().startsWith('blog')
})
</script>

<template>
  <div class="h-100dvh flex flex-col">
    <AuvHeader class="min-h-25" />
    <div class="grid grid-cols-[300px_1fr] min-h-0 flex-shrink-1">
      <div
        v-if="isBlogPage"
        class="grid-area-[1/1/1/1] m-3 max-h-inherit translate-x--75 rounded bg-text p-5 text-base shadow-md transition-transform-400 xl:translate-x-0"
      >
        <AuvSidebar />
      </div>
      <main class="grid-area-[1/1/1/3] m-3 max-h-inherit w-2xl justify-self-center rounded bg-[color-mix(in_lch,_pink_10%,_white)] p-5 shadow-md 2xl:w-4xl">
        <slot />
      </main>
    </div>
    <AuvFooter class="min-h-25" />
  </div>
</template>
