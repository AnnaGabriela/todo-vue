<script setup>
  import { RouterView } from "vue-router";
</script>

<template>
  <header class="app-header">
    <h1 class="app-logo">todos</h1>
  </header>
  <section>
    <RouterView />
  </section>
</template>

<style>
  @import "@/assets/base.css";

  #app {
    text-align: center;
    background-color: #282c34;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .app-logo {
    color: rgb(255 213 236);
    font-weight: 100;
  }

  .app-header {
    font-size: 2em;
    color: white;
  }

  .app-link {
    color: #d47ca8;
  }
</style>
