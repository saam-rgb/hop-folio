<template>
  <div>
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
    <FloatingQuoteButton />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import FloatingQuoteButton from "./components/FloatingQuoteButton.vue";
</script>

<style>
main {
  min-height: calc(100vh - 160px);
}
</style>
