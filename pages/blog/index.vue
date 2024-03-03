<script setup lang="ts">
import type { BlogItem } from '~/types/blog-item'

const list = useFetch<BlogItem[]>('/api/_content/query').data
</script>

<template>
  <div class="h-full">
    <div>
      <div v-for="item in list" :key="item._path" class="flex flex-row duration-300">
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
