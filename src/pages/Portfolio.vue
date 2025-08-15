<template>
  <section class="section">
    <div class="container">
      <h1 class="section-title">Portfolio</h1>
      <p class="section-sub">
        A mix of real and demo projects showcasing our craft.
      </p>
      <div class="grid grid-3">
        <PortfolioCard
          title="ABC Brand Website"
          summary="Conversion‑focused business site." />
        <PortfolioCard
          title="Event Promo Reel"
          summary="High‑energy cut for social." />
        <PortfolioCard
          title="SEO Growth Sprint"
          summary="Organic traffic +140% in 60 days." />
        <PortfolioCard
          title="E‑commerce Landing"
          summary="Lightning‑fast product page." />
        <PortfolioCard
          title="Corporate Film"
          summary="Narrative edit for trust." />
        <PortfolioCard title="Lead Gen Funnel" summary="CPL reduced by 35%." />
      </div>
    </div>
  </section>
</template>

<script setup>
import PortfolioCard from "../components/PortfolioCard.vue";
</script>
