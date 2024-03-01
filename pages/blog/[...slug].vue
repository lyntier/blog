<script setup lang="ts">
let emote = ' '
if (process.client) {
  const emotes = [':S', ':0', '>:T', ':C', 'D:']
  emote = emotes[Math.floor(Math.random() * emotes.length)]
}
</script>

<template>
  <div>
    <NuxtLayout>
      <ContentDoc class="overflow-visible">
        <template #not-found>
          <header>
            <h1 class="m-3 animate-fade-in animate-delay-1000 animate-forwards whitespace-pre p-5 text-5xl opacity-0">
              {{ emote }}
            </h1>
            <p>Could not find this post. Would you like another one?</p>

            <NuxtLink to="/blog">
              <AuvButton
                icon="i-heroicons:arrow-left"
                text="Get me back to safety"
              />
            </NuxtLink>
          </header>
        </template>
        <template #default="{ doc }">
          <nav>
            <NuxtLink to="/blog">
              <AuvButton
                icon="i-heroicons:arrow-left"
                text="Return"
              />
            </NuxtLink>
          </nav>
          <article class="flex flex-col overflow-y-scroll prose">
            <header>
              <h1>{{ doc.title }}</h1>
              <p v-if="doc.description">
                {{ doc.description }}
              </p>
            </header>
            <ContentRenderer :value="doc" class="w-full [&>pre]:overflow-x-visible [&>pre]:bg-text [&>pre]:shadow-sm" />
          </article>
        </template>
      </ContentDoc>
    </NuxtLayout>
  </div>
</template>
