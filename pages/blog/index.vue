<script setup lang="ts">
import type { BlogItem } from '~/types/blog-item'

const posts = useState<BlogItem[]>('posts')
</script>

<template>
  <div class="h-full">
    <div>
      <div v-for="post in posts" :key="post._path" class="flex flex-row duration-300">
        <NuxtLink :to="post._path" class="m-5 block flex-grow">
          <div class="inline-block min-w-full rounded-4 p-5 px-10 text-base prose">
            <h1>
              {{ post.title }}
            </h1>
            <p>
              {{ new Date(Date.parse(post.date)).toLocaleDateString() }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
