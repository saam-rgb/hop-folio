<template>
  <section class="section">
    <div class="container">
      <h1 class="section-title">Services</h1>
      <p class="section-sub">
        Packages designed for different stages of growth. Custom quotes
        available.
      </p>

      <div class="grid grid-3">
        <div class="card" style="padding: 20px">
          <h3>Digital Marketing</h3>
          <ul>
            <li>SEO Audits & On‑Page SEO</li>
            <li>Social Media Ads (Meta, Google)</li>
            <li>Email Marketing & Automations</li>
            <li>Analytics & Reporting</li>
          </ul>
          <div style="margin-top: 10px" class="muted">
            Starting at ₹15,000/mo
          </div>
        </div>

        <div class="card" style="padding: 20px">
          <h3>Web Development</h3>
          <ul>
            <li>Business Websites & Landing Pages</li>
            <li>E‑commerce (Shop/PWA)</li>
            <li>Performance Optimization</li>
            <li>Maintenance & Support</li>
          </ul>
          <div style="margin-top: 10px" class="muted">Starting at ₹25,000</div>
        </div>

        <div class="card" style="padding: 20px">
          <h3>Content & Video</h3>
          <ul>
            <li>Branding & Graphics</li>
            <li>Product Photography</li>
            <li>Promo Videos & Reels</li>
            <li>Corporate Edits</li>
          </ul>
          <div style="margin-top: 10px" class="muted">Starting at ₹8,000</div>
        </div>
      </div>

      <div style="margin-top: 24px">
        <RouterLink class="btn btn-primary" to="/contact"
          >Get a Custom Quote</RouterLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
