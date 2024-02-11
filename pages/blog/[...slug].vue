<template>
  <NuxtLayout>
    <ContentDoc>
      <template #not-found>
        <h1>>:(</h1>
        <span>Could not find this post.</span>
      </template>
      <template #default="{ doc }">
        <article class="prose">
          <header>
            <h1>{{ doc.title }}</h1>
            <p v-if="doc.description">
              {{ doc.description }}
            </p>
          </header>
          <ContentRenderer :value="doc" />
        </article>
      </template>
    </ContentDoc>
  </NuxtLayout>
</template>
