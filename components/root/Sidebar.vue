<script setup lang="ts">

</script>

<template>
  <aside class="flex flex-col dark:bg-light light:bg-dark">
    <AuvAvatar class="self-center" />
    <header class="mx-auto p-3 text-center prose">
      <div class="flex flex-row items-center justify-evenly">
        <AuvHeaderDisplayText />
      </div>
      <p>TypeScript enthusiast, CSS disenthusiast, Procrastinator</p>
    </header>

    <AuvGrowingButton
      text="Github"
      icon="i-fa-brands:github"
      href="https://github.com/kamadoori"
      class="self-center"
    />
  </aside>
</template>
