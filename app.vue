<script setup lang="ts">
import type { Container, IOptions, RecursivePartial } from 'tsparticles-engine'

const options: RecursivePartial<IOptions> = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: 'white',
    },
  },
  particles: {
    move: {
      enable: true,
      direction: 160,
      random: true,
      speed: {
        min: 5,
        max: 7,
      },
    },
    opacity: {
      value: {
        min: 0.3,
        max: 0.7,
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      move: true,
      animation: {
        enable: true,
        speed: {
          min: 10,
          max: 90,
        },
      },
    },
    tilt: {
      direction: 'random',
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: {
          min: 10,
          max: 90,
        },
      },
    },
    number: {
      value: 100,
    },
    shape: {
      type: 'image',
      image: {
        src: '/img/petal.png',
        width: 30,
        height: 15,
      },
    },
    size: {
      value: { min: 6, max: 8 },
    },
  },
}

function hideBackgroundColor() {
  const appDiv = document.querySelector('#app')
  appDiv!.className = `${appDiv!.className} anim`
}
</script>

<template>
  <div id="app" class="text-text">
    <NuxtPage />
    <NuxtParticles
      id="particles"
      :options="options"
      @load="hideBackgroundColor"
    />
  </div>
</template>

<style>
/* Necessary unscoped as a full app reset
 * cba to put in a global css file */
html, body, #__nuxt, #app {
  height: 100%;
}

#app {
  background-color: white;
  transition: background-color 3s;
}
#app.anim {
  background-color: transparent;
}
</style>
