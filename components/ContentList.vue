<script setup lang="ts">
function sortedList(list: any[]) {
  return [...list].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}
</script>

<template>
  <ContentList v-slot="{ list }">
    <div v-for="item in sortedList(list)" :key="item._id" class="flex flex-row">
      <NuxtLink :to="item._path" class="m-5 block flex-grow">
        <div class="inline-block min-w-full rounded-4 from-text to-black to-flamingo bg-gradient-to-r p-5 px-10 text-base bg-blend-color-burn prose">
          <h1>
            {{ item.title }}
          </h1>
          <p>
            {{ new Date(Date.parse(item.date)).toLocaleDateString() }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </ContentList>
</template>
