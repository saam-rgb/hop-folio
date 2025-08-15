<template>
  <div class="card tcard">
    <p class="quote">“{{ quote }}”</p>
    <div class="who">— {{ author }}, {{ role }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  quote: { type: String, required: true },
  author: { type: String, required: true },
  role: { type: String, default: "Client" },
});
</script>

<style scoped>
.tcard {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.quote {
  font-weight: 500;
}
.who {
  color: var(--text-muted);
  font-size: 14px;
}
</style>
