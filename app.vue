<script setup lang="ts">
import options from '~/assets/json/particles.json'

function hideBackgroundColor() {
  const appDiv = document.querySelector('#app')
  appDiv!.className = `${appDiv!.className} anim`
}
</script>

<template>
  <div id="app" class="font-500 font-sans">
    <div class="light:text-latte-text dark:text-frappe-text h-full flex flex-col">
      <header class="fixed my-5 w-full flex flex-row justify-center xl:hidden">
        <AuvHeaderDisplayText shadow class="text-4xl" />
      </header>
      <AuvSidebar class="light:bg-frappe-base light:text-frappe-text dark:bg-latte-base dark:text-latte-text fixed bottom-10 top-5 m-5 max-w-60 translate-x--85 rounded shadow-md duration-300 xl:translate-x-0" />
      <div class="mx-auto mb-15 mt-10 flex-grow duration-300 lg:mx-auto xl:mt-10 lg:w-auto">
        <AuvMain class="dark:bg-frappe-base light:bg-latte-base dark:text-frappe-text light:text-latte-text mb-15 w-screen overflow-x-visible rounded p-5 shadow-md duration-100 lg:w-2xl" />
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
}
.dark #app {
  background-image: linear-gradient(to bottom right, #2b5876, #4e4376);
  transition: background-image 3s;
}

#app.anim {
  background-image: linear-gradient(to bottom right, transparent, transparent);
}
</style>
