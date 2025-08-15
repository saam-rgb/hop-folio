<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="copy">
        <h1>We Build Brands. We Build Futures.</h1>
        <p class="lead">
          Digital marketing, web development, content creation, and video
          editing that actually converts.
        </p>
        <div class="cta">
          <RouterLink to="/contact" class="btn btn-primary"
            >Book a Free Consultation</RouterLink
          >
          <RouterLink to="/services" class="btn btn-outline"
            >Explore Services</RouterLink
          >
        </div>
        <div class="trust">
          <div class="chip">Fast Delivery</div>
          <div class="chip">Performance-First</div>
          <div class="chip">Growth Mindset</div>
        </div>
      </div>
      <div class="art"></div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="section-title">Our Core Services</h2>
      <p class="section-sub">
        Everything you need to launch and scale your brand online.
      </p>
      <div class="grid grid-3">
        <ServiceCard
          icon="📈"
          title="Digital Marketing"
          description="SEO, social ads, email marketing, and analytics that drive ROI." />
        <ServiceCard
          icon="🖥️"
          title="Web Development"
          description="High-performing websites, landing pages, and e‑commerce stores." />
        <ServiceCard
          icon="🎬"
          title="Content & Video"
          description="Scroll-stopping content, promos, reels, and corporate videos." />
      </div>
    </div>
  </section>

  <section class="section" style="background: var(--muted)">
    <div class="container">
      <h2 class="section-title">Selected Work</h2>
      <p class="section-sub">
        Real client + curated demo projects to showcase our quality.
      </p>
      <div class="grid grid-3">
        <PortfolioCard
          title="ABC Brand Website"
          summary="Modern responsive site boosting conversions." />
        <PortfolioCard
          title="D2C Launch Campaign"
          summary="3x ROAS in first month via paid social." />
        <PortfolioCard
          title="Corporate Promo Video"
          summary="Story-led edit for brand awareness." />
      </div>
      <div style="margin-top: 18px">
        <RouterLink to="/portfolio">See full portfolio →</RouterLink>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="section-title">Client Feedback</h2>
      <p class="section-sub">Social proof that builds trust.</p>
      <div class="grid grid-3">
        <TestimonialCard
          quote="They treated our project like their own brand."
          author="Nisha"
          role="Founder, ABC Brand" />
        <TestimonialCard
          quote="On time, on budget, and beautiful work."
          author="Rahul"
          role="Operations" />
        <TestimonialCard
          quote="Our engagement rate jumped within weeks."
          author="Arun"
          role="Marketing Lead" />
      </div>
    </div>
  </section>

  <section class="section" style="background: var(--primary); color: #fff">
    <div class="container cta2">
      <h2>Ready to Grow?</h2>
      <p>
        Book a free strategy call. We'll map your growth plan in 30 minutes.
      </p>
      <RouterLink
        to="/contact"
        class="btn btn-primary"
        style="background: #fff; color: var(--primary)"
        >Get a Free Quote</RouterLink
      >
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import ServiceCard from "../components/ServiceCard.vue";
import PortfolioCard from "../components/PortfolioCard.vue";
import TestimonialCard from "../components/TestimonialCard.vue";
</script>

<style scoped>
.hero {
  background: linear-gradient(120deg, #eef1ff, #ffffff);
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 30px;
  padding: 60px 0;
  align-items: center;
}
.copy h1 {
  font-size: 44px;
  margin: 0 0 10px;
  color: var(--primary-ink);
}
.lead {
  color: var(--text-muted);
  font-size: 18px;
}
.cta {
  display: flex;
  gap: 12px;
  margin: 18px 0;
}
.trust {
  display: flex;
  gap: 10px;
  margin-top: 8px;
  flex-wrap: wrap;
}
.chip {
  padding: 6px 12px;
  border-radius: 999px;
  background: #f0f3ff;
  color: var(--primary);
  font-weight: 600;
  font-size: 12px;
}
.art {
  height: 300px;
  border-radius: 24px;
  background: radial-gradient(120px 120px at 70% 30%, #ffb199, transparent 60%),
    radial-gradient(120px 120px at 30% 70%, #9bb0ff, transparent 60%), #fff;
  border: 1px solid #eef1f6;
}
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }
  .art {
    order: -1;
    height: 220px;
  }
}
.cta2 {
  text-align: center;
  padding: 20px 0;
}
</style>
