<template>
  <section class="section">
    <div class="container">
      <h1 class="section-title">Case Studies</h1>
      <p class="section-sub">
        Outcome‑driven stories, formatted like real client work — even for
        demos.
      </p>

      <div class="grid grid-2">
        <div class="card" style="padding: 20px">
          <h3>ABC Brand — Social Growth</h3>
          <p class="muted">Goal: Improve engagement & leads from Instagram.</p>
          <ul>
            <li>
              <strong>Strategy:</strong> Content pillars, reels, paid boosts
            </li>
            <li>
              <strong>Execution:</strong> 4 posts/week, monthly ad sprints
            </li>
            <li>
              <strong>Results:</strong> +5,000 followers, +45% conversion from
              social
            </li>
          </ul>
        </div>
        <div class="card" style="padding: 20px">
          <h3>D2C Store — Launch Funnel</h3>
          <p class="muted">Goal: Generate first 100 purchases in 30 days.</p>
          <ul>
            <li>
              <strong>Strategy:</strong> Influencer whitelisting + retargeting
            </li>
            <li>
              <strong>Execution:</strong> Landing page + 3‑step email drip
            </li>
            <li><strong>Results:</strong> 3x ROAS, 112 orders in 28 days</li>
          </ul>
        </div>
      </div>

      <div style="margin-top: 24px">
        <RouterLink class="btn btn-outline" to="/contact"
          >Request a Similar Plan →</RouterLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
