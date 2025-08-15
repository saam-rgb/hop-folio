<template>
  <header class="nav">
    <div class="container nav-inner">
      <RouterLink to="/" class="brand">Houseofproduction</RouterLink>
      <button class="hamburger" @click="open = !open" aria-label="Toggle Menu">
        <span></span><span></span><span></span>
      </button>
      <nav :class="['links', { open }]">
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/case-studies">Case Studies</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact" class="btn btn-primary"
          >Get a Quote</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const open = ref(false);
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #eef1f6;
  z-index: 1000;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.brand {
  font-weight: 700;
  font-size: 20px;
  color: var(--primary);
  text-decoration: none;
}
.links {
  display: flex;
  gap: 18px;
  align-items: center;
}
.links a {
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
}
.links a.router-link-active {
  color: var(--primary);
}

.hamburger {
  display: none;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  border-radius: 8px;
}
.hamburger span {
  display: block;
  height: 2px;
  margin: 6px;
  background: var(--text);
}

@media (max-width: 900px) {
  .hamburger {
    display: inline-block;
  }
  .links {
    position: absolute;
    top: 72px;
    right: 0;
    background: white;
    padding: 16px;
    border: 1px solid #eef1f6;
    border-radius: 12px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-right: 20px;
  }
  .links.open {
    display: flex;
  }
}
</style>
