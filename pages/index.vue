<template>
  <div class="h-full duration-300">
    <AuvCard image-pos="left">
      <template #image>
        <AuvAvatar :paperclip="false" />
      </template>
      <template #text>
        <header>
          <h1>Hi, I'm Lyntier!</h1>
          <p>I like programming, user interface/user interaction design and being organized.</p>
          <p>I think I do these things quite well as a front-end developer and Scrum Master!</p>
        </header>
      </template>
    </AuvCard>

    <AuvCard>
      <template #text>
        <h1>What am I all about?</h1>
        <p>
          I am a front-end developer and Scrum Master
          at <span class="dark:bg-frappe-text light:bg-latte-text">redacted</span>.
          I love working with my team and spend an unhealthy amount of time obsessing
          over TypeScript and Tailwind.
        </p>
      </template>
    </AuvCard>
    <AuvCard>
      <template #text>
        <p>
          I like gardening, photography and video games. Lately I've been spending an
          unhealthy amount of time playing <NuxtLink target="_blank" to="https://store.steampowered.com/app/2379780/Balatro/">
            Balatro
          </NuxtLink>.
          I'm also a big fan of manga! My favourite manga in the past year has been
          <NuxtLink target="_blank" to="https://anilist.co/manga/86082/Dungeon-Meshi/">
            Dungeon Meshi
          </NuxtLink>!
        </p>
      </template>
    </AuvCard>
    <AuvCard>
      <template #text>
        <p>Go take a look at these other places I'm available at!</p>
        <div class="grid grid-cols-[1fr_1fr_1fr] place-items-center">
          <AuvGrowingButton icon="i-fa-brands:github" text="GitHub" href="https://github.com/lyntier" external />
          <AuvGrowingButton icon="i-fa-brands:twitter" text="Twitter" href="https://twitter.com/auvalice" external />
          <AuvGrowingButton icon="i-heroicons:pencil-square" text="Blog" href="/blog" />
        </div>
      </template>
    </AuvCard>
  </div>
</template>
