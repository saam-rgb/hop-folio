<template>
  <div class="card wrap">
    <div class="icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p class="muted">{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: "✨" },
});
</script>

<style scoped>
.wrap {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.icon {
  font-size: 28px;
}
.muted {
  color: var(--text-muted);
}
</style>
