<script setup lang="ts">
import options from '~/assets/json/particles.json'

function hideBackgroundColor() {
  const appDiv = document.querySelector('#app')
  appDiv!.className = `${appDiv!.className} anim`
}

const route = useRoute()

function isMainPage(): boolean {
  return route.fullPath === '/'
}
</script>

<template>
  <div id="app" class="font-500 font-sans duration-300">
    <div class="h-full flex flex-col dark:text-frappe-text light:text-latte-text">
      <header class="absolute my-5 w-full flex flex-row justify-center xl:hidden">
        <AuvHeaderDisplayText shadow class="text-4xl" />
      </header>
      <AuvSidebar v-if="!isMainPage()" class="fixed bottom-10 top-5 m-5 max-w-60 translate-x--85 rounded shadow-md duration-300 xl:translate-x-0 dark:bg-latte-base light:bg-frappe-base dark:text-latte-text light:text-frappe-text" />
      <div class="mx-auto mb-15 mt-10 flex-grow lg:mx-auto xl:mt-10 lg:w-auto">
        <AuvMain class="mb-15 w-screen overflow-x-visible rounded p-5 shadow-md md:w-2xl dark:bg-frappe-base light:bg-pink-50 dark:text-frappe-text light:text-latte-text" />
      </div>
    </div>
    <NuxtParticles
      id="particles"
      :options="options"
      @load="hideBackgroundColor"
    />
    <AuvThemeSwitcher class="fixed bottom-2 right-2 xl:top-2" />
  </div>
</template>

<style>
/* Necessary unscoped as a full app reset
 * cba to put in a global css file */
html, body, #__nuxt, #app {
  height: 100%;
}

html {
  background-image: linear-gradient(to bottom right, #a1c4fd, #c2e9fb );
  background-repeat: no-repeat;
  background-attachment: fixed;

  scroll-behavior: smooth;
}
html.dark {
  background-image: linear-gradient(to bottom right, #2b5876, #4e4376);
}

#app {
  background-image: linear-gradient(to bottom right, #a1c4fd, #c2e9fb );
  transition: background-image 3s;
  background-attachment: fixed;
}
.dark #app {
  background-image: linear-gradient(to bottom right, #2b5876, #4e4376);
  transition: background-image 3s;
}

#app.anim {
  background-image: linear-gradient(to bottom right, transparent, transparent);
}
</style>
