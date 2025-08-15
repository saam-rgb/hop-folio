<template>
  <section class="section">
    <div class="container" style="text-align: center">
      <h1>404</h1>
      <p class="section-sub">The page you’re looking for doesn’t exist.</p>
      <RouterLink to="/" class="btn btn-primary">Go Home</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
