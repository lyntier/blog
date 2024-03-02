<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types'

function sortedList(list: ParsedContent[] | null) {
  if (!list)
    return []
  return [...list].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}

const { data } = await useAsyncData('posts', () => queryContent('blog').find())
</script>

<template>
  <div class="h-full">
    <div>
      <div v-for="item in sortedList(data)" :key="item._path" class="flex flex-row">
        <NuxtLink :to="item._path" class="m-5 block flex-grow">
          <div class="inline-block min-w-full rounded-4 p-5 px-10 text-base prose">
            <h1>
              {{ item.title }}
            </h1>
            <p>
              {{ new Date(Date.parse(item.date)).toLocaleDateString() }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
