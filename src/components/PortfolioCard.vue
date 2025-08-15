<template>
  <div class="card holder">
    <div class="thumb" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="body">
      <h3>{{ title }}</h3>
      <p class="muted">{{ summary }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  image: { type: String, default: "https://picsum.photos/600/400?blur=2" },
});
</script>

<style scoped>
.holder {
  overflow: hidden;
}
.thumb {
  height: 180px;
  background-size: cover;
  background-position: center;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
}
.body {
  padding: 16px;
}
.muted {
  color: var(--text-muted);
}
</style>
