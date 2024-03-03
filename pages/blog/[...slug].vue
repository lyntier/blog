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
          <ContentRenderer :value="doc" class="[&>p>code]:rounded [&_pre]:bg-[#242428] [&>p>code]:p-1 [&>p>code]:opacity-90 [&_pre]:shadow-md md:[&_pre]:mx--10 dark:[&>p>code]:bg-dark light:[&>p>code]:bg-purple-200" />

          <a href="#top" class="mx-auto h-10 w-10 flex flex-col translate-y-8 content-center items-center text-4xl">
            <div class="rounded-full p-1 shadow-lg duration-200 hover:scale-110 dark:bg-frappe-base light:bg-pink-50">

              <UnoIcon class="i-heroicons:chevron-up" />
            </div>
          </a>
        </article>
      </template>
    </ContentDoc>
  </div>
</template>
