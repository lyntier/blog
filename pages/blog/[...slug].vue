<template>
  <div>
    <NuxtLayout>
      <ContentDoc class="overflow-visible">
        <template #not-found>
          <h1>>:(</h1>
          <span>Could not find this post.</span>
        </template>
        <template #default="{ doc }">
          <nav>
            <NuxtLink to="/blog" class="hover:cursor-pointer">
              <div class="w-fit flex flex-row items-center rounded bg-black p-2 px-3 text-base opacity-50">
                <UnoIcon class="i-heroicons:arrow-left mr-2" />
                <span>Return</span>
              </div>
            </NuxtLink>
          </nav>
          <article class="flex flex-col prose">
            <header>
              <h1>{{ doc.title }}</h1>
              <p v-if="doc.description">
                {{ doc.description }}
              </p>
            </header>
            <ContentRenderer :value="doc" class="w-full [&>pre]:translate-x--3 [&>pre]:bg-text [&>pre]:shadow-sm" />
          </article>
        </template>
      </ContentDoc>
    </NuxtLayout>
  </div>
</template>
