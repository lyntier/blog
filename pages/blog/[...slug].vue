<template>
  <div>
    <ContentDoc class="overflow-visible">
      <template #not-found>
        <Auv404 href="/blog" />
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
        <article class="prose">
          <header>
            <h1 id="top">
              {{ doc.title }}
            </h1>
          </header>
          <ContentRenderer :value="doc" class="[&>p>code]:rounded [&_pre]:bg-[#242428] [&>p>code]:p-1 [&>p>code]:opacity-90 [&_pre]:shadow-md xl:[&_pre]:mx--10 dark:[&>p>code]:bg-dark light:[&>p>code]:bg-purple-200" />
          <a href="#top" class="ext-4xl mx-auto h-9 w-9 flex flex-col content-center items-center">
            <UnoIcon class="i-heroicons:chevron-up" />
          </a>
        </article>
      </template>
    </ContentDoc>
  </div>
</template>
